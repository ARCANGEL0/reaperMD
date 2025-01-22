
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────



import { en, pt } from "../lib/idiomas/total-idiomas.js"


let handler = m => m 
handler.before = async function (m, { text, args, usedPrefix, command, conn } ) {
if (!m.isGroup) return !1


global.idioma = global.db.data.chats[m.chat].language || 'en'

if(m.quoted &&
global.db.data.chats[m.chat].langChangeID &&
m.quoted.id == global.db.data.chats[m.chat].langChangeID )
{
    if(m.text ==1) {
        global.db.data.chats[m.chat].language = 'pt'
        global.langTOGGLE = pt
        global.db.data.chats[m.chat].initialBoot = true
  m.react("✅")

        await conn.sendMessage(m.chat,
        {
            text: `robot@bytesec:~# lang-config
╭ . . . . . . . . . . . . . . . . . . . . . . .
> [+] LANG CONFIG
> -----------------------
> ‎ 
> 𝙸𝚍𝚒𝚘𝚖𝚊 𝚊𝚕𝚝𝚎𝚛𝚊𝚍𝚘 𝚙𝚊𝚛𝚊 𝐏𝐨𝐫𝐭𝐮𝐠𝐮𝐞̂𝐬  
> ‎ 
╰─────────`
    
        }
        ,m)
    }
    else if(m.text ==2) {
      global.db.data.chats[m.chat].initialBoot = true
        global.db.data.chats[m.chat].language = 'en'
        global.langTOGGLE = en
  m.react("✅")
        await conn.sendMessage(m.chat, {
            text: `robot@bytesec:~# lang-config
╭ . . . . . . . . . . . . . . . . . . . . . . .
> [+] LANG CONFIG
> -----------------------
> ‎ 
> 𝙻𝚊𝚗𝚐𝚞𝚊𝚐𝚎 𝚌𝚑𝚊𝚗𝚐𝚎𝚍 𝚝𝚘 𝐄𝐧𝐠𝐥𝐢𝐬𝐡
> ‎ 
╰─────────`
       
        },m);
    }
    else {
          m.react("❗")

return !0
    }
}


    let notAdminMg;

if (global.db.data.chats[m.chat].language === 'pt') {
    notAdminMg = `
> robot@bytesec: #/groups/ cat warning.log
> ---------------------------------------

[!] ATENÇÃO: Acesso Negado
────────────────────────────────
> [+] 𝘶𝘴𝘦𝘳 𝘯𝘰𝘵 𝘪𝘯 𝘵𝘩𝘦 𝘴𝘶𝘥𝘰𝘦𝘳𝘴 𝘧𝘪𝘭𝘦!
> Esta ação é estritamente proibida.
> ‎ 
> Hey, eu não sou um administrador aqui, garoto!
> ‎ 
> # Monitoração ativa por ByteSec.
────────────────────────────────
    `;
}

else if (global.db.data.chats[m.chat].language === 'en') {
    notAdminMg = `
> robot@bytesec: #/groups/ cat warning.log
> ---------------------------------------

[!] WARNING: Access Denied
────────────────────────────────
> [+] 𝘶𝘴𝘦𝘳 𝘯𝘰𝘵 𝘪𝘯 𝘵𝘩𝘦 𝘴𝘶𝘥𝘰𝘦𝘳𝘴 𝘧𝘪𝘭𝘦!
> This action is strictly prohibited.
> ‎ 
> Hey, I'm not an administrator here, kid!
> ‎ 
> # Active monitoring by ByteSec.
────────────────────────────────
    `;
}


global.notAdmin = notAdminMg



let notOwnerMg;

if (global.db.data.chats[m.chat].language === 'pt') {
    notOwnerMg = `
> robot@bytesec: #/groups/ cat access_denied.log
> ---------------------------------------

[!] ERROR_ACCESS_DENIED: COMANDO BLOQUEADO
────────────────────────────────
> COMANDO ESTRITAMENTE EXCLUSIVO PARA A EQUIPE BYTESEC.
> ‎ 
> ⚠ 0x00000005: *𝒫𝑅𝒪𝐼𝐵𝐼𝒟𝒪*
> ‎ 
> # Monitoração ativa por ByteSec.
────────────────────────────────
    `;
} else if (global.db.data.chats[m.chat].language === 'en') {
    notOwnerMg = `
> robot@bytesec: #/groups/ cat access_denied.log
> ---------------------------------------

[!] ERROR_ACCESS_DENIED: COMMAND BLOCKED
────────────────────────────────
> Access denied: user lacks ByteSec privileges.
> Error code: 0x00AF3D
> COMMAND STRICTLY EXCLUSIVE TO BYTESEC CREW.
> ‎ 
> ⚠ 0x00000005: *𝐹𝒪𝑅𝐵𝐼𝒟𝒟𝐸𝒩*
> ‎ 
> # Active monitoring by ByteSec.
────────────────────────────────
    `;
}

global.notOwner = notOwnerMg;

function sendSystemErrorAlert(lang) {

    let mensagem = global.idioma == 'en' ?
`> [⚠] ALERTA DE ERRO DO SISTEMA 
> █ ERROR CODE: 0x1F4B  █
> ‎ 
> [!] 𝙰𝚕𝚐𝚞𝚖𝚊 𝚌𝚘𝚒𝚜𝚊 𝚍𝚎𝚞 𝚎𝚛𝚛𝚊𝚍𝚘 𝚊𝚚𝚞𝚒, 𝚐𝚊𝚛𝚘𝚝𝚘.
> ‎ 
> >> OPERAÇÃO INTERROMPIDA <<
> 𖣖 Use ".report" para registrar o incidente
> ‎ `,

: 
`> [⚠] SYSTEM ERROR ALERT
> █ ERROR CODE: 0x1F4B  █
> ‎ 
> [!] 𝚂𝚘𝚖𝚎𝚝𝚑𝚒𝚗𝚐 𝚠𝚎𝚗𝚝 𝚠𝚛𝚘𝚗𝚐, 𝚔𝚒𝚍𝚍𝚘. . .
> ‎ 
> >> OPERATION INTERRUPTED <<
> 𖣖 Use ".report" to log the incident
> ‎ `

    return m.reply(m.chat,mensagem);
}

global.sendSystemErrorAlert = sendSystemErrorAlert
// Example usage


}
export default handler

