# BE ONE TEAM — Accesso Telegram (TEST)

Questi file sono una predisposizione **parallela**. Non modificano l'accesso attuale a SUPPORTO 3.0.

## Flusso previsto
1. L'utente apre `access-test.html`.
2. Esegue l'accesso con Telegram.
3. Il Worker verifica crittograficamente i dati Telegram.
4. Se l'utente è nuovo, il bot invia all'amministratore:
   - nome
   - username
   - Telegram ID
   - pulsanti Approva / Rifiuta
5. Lo stato viene salvato in Cloudflare KV.
6. Dopo l'approvazione la pagina test mostra "Accesso approvato".
7. Se il bot è amministratore del gruppo Telegram con permesso di approvare ingressi, può ricevere anche le richieste del gruppo.
8. Se approvi una richiesta di ingresso al gruppo tramite il bot, lo stesso Telegram ID viene marcato automaticamente come autorizzato anche per SUPPORTO 3.0.

## Dati richiesti per l'attivazione
- un bot Telegram dedicato, consigliato nome: `BE ONE Access`
- username del bot
- token del bot (da salvare **solo** come secret del Worker; non inserirlo nel repository)
- Telegram ID dell'amministratore approvatore
- il bot aggiunto come amministratore del gruppo Telegram con permesso di invitare/approvare utenti
- account Cloudflare Workers Free

## Variabili Worker
- `BOT_TOKEN` — secret
- `ADMIN_TELEGRAM_ID`
- `WEBHOOK_SECRET` — secret casuale
- `ALLOWED_ORIGIN=https://diegosbotti-hub.github.io`

Binding KV:
- nome binding: `ACCESS`

## Frontend
In `access-test.html` sostituire:
- `__BOT_USERNAME__`
- `__AUTH_API_BASE__`

## Sicurezza
Il token del bot non deve mai essere inserito in HTML, data.js, GitHub Pages o commit GitHub.
La pagina principale SUPPORTO 3.0 non va protetta finché questo test non è stato verificato su iPhone.


## Comportamento unificato
- Richiesta dalla web app → Approva = accesso SUPPORTO 3.0, senza ingresso obbligatorio nel gruppo.
- Richiesta dal gruppo Telegram → Approva = ingresso nel gruppo + autorizzazione SUPPORTO 3.0.
- Rifiuto gruppo → non viene concessa automaticamente l'autorizzazione SUPPORTO 3.0.

## Webhook Telegram
Dopo il deploy del Worker, configurare il webhook del bot verso:
`https://<worker-domain>/telegram/webhook`
usando lo stesso valore segreto salvato in `WEBHOOK_SECRET`.
