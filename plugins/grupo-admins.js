
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

let handler = async (m, { conn, participants, groupMetadata, args, usedPrefix, text, command }) => {
 
const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || 'https://itzpire.com/file/8009e081ebe7.jpg'
const groupAdmins = participants.filter(p => p.admin)
const listAdmin = groupAdmins.map((v, i) => `*» ${i + 1}. @${v.id.split('@')[0]}*`).join('\n')
const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
let pesan = args.join` `
let oi = `${langTOGGLE.smsAddB5()} + "\n"+_${pesan}_`

let textoA = `
> robot@bytesec:~# node admins.mjs
> ---------------------------------------

[!] ${global.db.data.chats[m.chat].language == 'pt' ? 'ALERTA: CONVOCANDO ADMINS' : 'ALERT: SUMMONING ADMINS' }
──────────────────────
> [+] ${text ? text :  m.quoted?.text ? m.quoted?.text : '---'}
> ‎
> ‎
> # Operation conducted by ByteSec.
> # Under continuous surveillance.
     <<< EOF >>>
──────────────────────
`

await conn.sendFile(m.chat, pp, 'error.jpg', textoA, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })
//await conn.sendButton(m.chat, textoA, textoB, pp, [[langTOGGLE.smsConMenu(), `.menu`]], m, { mentions: [...groupAdmins.map(v => v.id), owner] })
}
handler.command = /^(admins|@admins|dmins)$/i

handler.group = true
export default handler
