
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

let handler = async (m, { conn }) => {
const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/grupos.jpg' 

let res = await conn.groupRevokeInvite(m.chat)
conn.reply(m.chat, langTOGGLE.smsRestGp(), + '\n\n*https://chat.whatsapp.com/' + res + '*', m)}
//conn.sendButton(m.chat, wm, langTOGGLE.smsRestGp() + '\n\n*https://chat.whatsapp.com/' + res + '*', pp, [[langTOGGLE.smsConMenu(), `/menu`]], fkontak, m)}
handler.command = ['nuevolink', 'nuevoenlace', 'revoke', 'resetlink'] 
handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler
