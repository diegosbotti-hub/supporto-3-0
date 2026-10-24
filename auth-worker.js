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
        const q=update.callback_query;
        if(!q)return new Response("ok");
        if(String(q.from.id)!==String(env.ADMIN_TELEGRAM_ID)) {
          await tg(env,"answerCallbackQuery",{callback_query_id:q.id,text:"Non autorizzato",show_alert:true});
          return new Response("ok");
        }
        const [action,id]=String(q.data||"").split(":");
        if(!["approve","reject"].includes(action)||!id)return new Response("ok");
        const key="user:"+id;
        const u=JSON.parse(await env.ACCESS.get(key)||"null");
        if(!u)return new Response("ok");
        u.status=action==="approve"?"approved":"rejected";
        u.updated_at=new Date().toISOString();
        await env.ACCESS.put(key,JSON.stringify(u));
        const label=u.status==="approved"?"APPROVATO":"RIFIUTATO";
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
  await tg(env,"sendMessage",{
    chat_id:env.ADMIN_TELEGRAM_ID,
    text:approvalText(u),
    reply_markup:{inline_keyboard:[[
      {text:"✅ Approva",callback_data:"approve:"+u.id},
      {text:"❌ Rifiuta",callback_data:"reject:"+u.id}
    ]]}
  });
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