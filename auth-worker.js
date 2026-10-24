export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const cors = {
      "Access-Control-Allow-Origin": env.ALLOWED_ORIGIN,
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS"
    };
    if (request.method === "OPTIONS") return new Response(null,{headers:cors});

    try {
      if (url.pathname === "/auth/request" && request.method === "POST") {
        const user = await request.json();
        const ok = await verifyTelegramLogin(user, env.BOT_TOKEN);
        if (!ok) return json({error:"Telegram authentication invalid"},401,cors);

        const id = String(user.id);
        const key = "user:"+id;
        const current = JSON.parse(await env.ACCESS.get(key) || "null");
        let status = current?.status || "pending";

        await env.ACCESS.put(key, JSON.stringify({
          id,
          first_name:user.first_name||"",
          last_name:user.last_name||"",
          username:user.username||"",
          status,
          updated_at:new Date().toISOString()
        }));

        const sessionToken = crypto.randomUUID()+"."+crypto.randomUUID();
        await env.ACCESS.put("session:"+sessionToken, id, {expirationTtl:2592000});

        if (!current) await sendApprovalRequest(env, user);
        return json({status,sessionToken},200,cors);
      }

      if (url.pathname === "/auth/status" && request.method === "GET") {
        const auth=request.headers.get("Authorization")||"";
        const token=auth.startsWith("Bearer ")?auth.slice(7):"";
        const id=token?await env.ACCESS.get("session:"+token):null;
        if(!id)return json({error:"Unauthorized"},401,cors);
        const u=JSON.parse(await env.ACCESS.get("user:"+id)||"null");
        return json({status:u?.status||"pending"},200,cors);
      }

      if (url.pathname === "/telegram/webhook" && request.method === "POST") {
        const secret=request.headers.get("X-Telegram-Bot-Api-Secret-Token");
        if(secret!==env.WEBHOOK_SECRET)return new Response("Forbidden",{status:403});
        const update=await request.json();
        if(update.message && update.message.text){
          const txt=String(update.message.text).trim();
          if(txt.startsWith("/claim ")){
            const existingAdmin=await env.ACCESS.get("config:admin_id");
            const code=txt.slice(7).trim();
            if(existingAdmin){
              await tg(env,"sendMessage",{chat_id:update.message.chat.id,text:"Amministratore già configurato."});
              return new Response("ok");
            }
            if(!env.ADMIN_CLAIM_CODE || code!==String(env.ADMIN_CLAIM_CODE)){
              await tg(env,"sendMessage",{chat_id:update.message.chat.id,text:"Codice non valido."});
              return new Response("ok");
            }
            await env.ACCESS.put("config:admin_id",String(update.message.from.id));
            await tg(env,"sendMessage",{chat_id:update.message.chat.id,text:"✅ Amministratore BE ONE configurato. Ora puoi approvare gli accessi a SUPPORTO 3.0."});
            return new Response("ok");
          }
        }

        if(update.chat_join_request){
          const jr=update.chat_join_request;
          const u=jr.from;
          await env.ACCESS.put("join:"+String(u.id),JSON.stringify({
            chat_id:String(jr.chat.id),
            user_id:String(u.id),
            first_name:u.first_name||"",
            last_name:u.last_name||"",
            username:u.username||"",
            requested_at:new Date().toISOString()
          }),{expirationTtl:86400});
          const adminId=await getAdminId(env);
          if(adminId) await tg(env,"sendMessage",{
            chat_id:adminId,
            text:"Nuova richiesta GRUPPO TELEGRAM\n\n"+
              (u.first_name||"")+" "+(u.last_name||"")+"\n"+
              (u.username?"@"+u.username+"\n":"")+"Telegram ID: "+u.id+
              "\n\nSe approvi, la persona verrà autorizzata anche a SUPPORTO 3.0.",
            reply_markup:{inline_keyboard:[[
              {text:"✅ Approva",callback_data:"gapprove:"+u.id},
              {text:"❌ Rifiuta",callback_data:"greject:"+u.id}
            ]]}
          });
          return new Response("ok");
        }

        const q=update.callback_query;
        if(!q)return new Response("ok");
        const adminId=await getAdminId(env);
        if(!adminId || String(q.from.id)!==String(adminId)) {
          await tg(env,"answerCallbackQuery",{callback_query_id:q.id,text:"Non autorizzato",show_alert:true});
          return new Response("ok");
        }
        const [action,id]=String(q.data||"").split(":");

        if(["gapprove","greject"].includes(action)&&id){
          const req=JSON.parse(await env.ACCESS.get("join:"+id)||"null");
          if(!req)return new Response("ok");
          const method=action==="gapprove"?"approveChatJoinRequest":"declineChatJoinRequest";
          await tg(env,method,{chat_id:req.chat_id,user_id:Number(id)});
          if(action==="gapprove"){
            const key="user:"+id;
            const existing=JSON.parse(await env.ACCESS.get(key)||"null")||{};
            await env.ACCESS.put(key,JSON.stringify({
              ...existing,id,
              first_name:req.first_name||existing.first_name||"",
              last_name:req.last_name||existing.last_name||"",
              username:req.username||existing.username||"",
              status:"approved",
              source:"telegram_group",
              updated_at:new Date().toISOString()
            }));
          }
          await env.ACCESS.delete("join:"+id);
          const label=action==="gapprove"?"GRUPPO + SUPPORTO APPROVATI":"INGRESSO GRUPPO RIFIUTATO";
          await tg(env,"answerCallbackQuery",{callback_query_id:q.id,text:label});
          await tg(env,"editMessageText",{
            chat_id:q.message.chat.id,message_id:q.message.message_id,
            text:(req.first_name||"")+" "+(req.last_name||"")+"\n"+
              (req.username?"@"+req.username+"\n":"")+"Telegram ID: "+id+"\n\nEsito: "+label
          });
          return new Response("ok");
        }

        if(!["approve","reject"].includes(action)||!id)return new Response("ok");
        const key="user:"+id;
        const u=JSON.parse(await env.ACCESS.get(key)||"null");
        if(!u)return new Response("ok");
        u.status=action==="approve"?"approved":"rejected";
        u.source=u.source||"web_app";
        u.updated_at=new Date().toISOString();
        await env.ACCESS.put(key,JSON.stringify(u));
        const label=u.status==="approved"?"SUPPORTO APPROVATO":"SUPPORTO RIFIUTATO";
        await tg(env,"answerCallbackQuery",{callback_query_id:q.id,text:label});
        await tg(env,"editMessageText",{
          chat_id:q.message.chat.id,message_id:q.message.message_id,
          text:approvalText(u)+"\n\nEsito: "+label
        });
        return new Response("ok");
      }

      return json({ok:true,service:"BE ONE access"},200,cors);
    } catch (e) {
      return json({error:"Internal error"},500,cors);
    }
  }
};

function json(data,status,headers={}) {
  return new Response(JSON.stringify(data),{status,headers:{"Content-Type":"application/json",...headers}});
}
function approvalText(u){
  return "Nuova richiesta SUPPORTO 3.0\n\n"+
    (u.first_name||"")+" "+(u.last_name||"")+"\n"+
    (u.username?"@"+u.username+"\n":"")+"Telegram ID: "+u.id;
}
async function sendApprovalRequest(env,user){
  const u={id:String(user.id),first_name:user.first_name||"",last_name:user.last_name||"",username:user.username||""};
  const adminId=await getAdminId(env);
  if(!adminId)return;
  await tg(env,"sendMessage",{
    chat_id:adminId,
    text:approvalText(u),
    reply_markup:{inline_keyboard:[[
      {text:"✅ Approva",callback_data:"approve:"+u.id},
      {text:"❌ Rifiuta",callback_data:"reject:"+u.id}
    ]]}
  });
}
async function getAdminId(env){
  return (await env.ACCESS.get("config:admin_id")) || env.ADMIN_TELEGRAM_ID || "";
}
async function tg(env,method,payload){
  return fetch("https://api.telegram.org/bot"+env.BOT_TOKEN+"/"+method,{
    method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(payload)
  });
}
async function verifyTelegramLogin(data,botToken){
  const copy={...data}; const hash=copy.hash; delete copy.hash;
  if(!hash||!copy.auth_date)return false;
  const age=Math.floor(Date.now()/1000)-Number(copy.auth_date);
  if(age<0||age>86400)return false;
  const check=Object.keys(copy).sort().map(k=>k+"="+copy[k]).join("\n");
  const enc=new TextEncoder();
  const secret=await crypto.subtle.digest("SHA-256",enc.encode(botToken));
  const key=await crypto.subtle.importKey("raw",secret,{name:"HMAC",hash:"SHA-256"},false,["sign"]);
  const sig=await crypto.subtle.sign("HMAC",key,enc.encode(check));
  const hex=[...new Uint8Array(sig)].map(b=>b.toString(16).padStart(2,"0")).join("");
  return safeEqual(hex,String(hash));
}
function safeEqual(a,b){
  if(a.length!==b.length)return false; let x=0;
  for(let i=0;i<a.length;i++)x|=a.charCodeAt(i)^b.charCodeAt(i);
  return x===0;
}