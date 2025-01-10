
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

let handler = async (m, { conn, isOwner }) => {
let users = Object.entries(global.db.data.chats[m.chat].users).filter(user => user[1].isKicked)
let caption = `
*╭•·–| 🥀🪦 𝑳𝒊𝒔𝒕𝒂 𝑵𝒆𝒈𝒓𝒂 |–·•*
│ *Total : ${users.length} Usuarios* ${users ? '\n' + users.map(([jid], i) => `
│
│ *${i + 1}.* ${conn.getName(jid) == undefined ? '⸸' : conn.getName(jid)}
│ ${isOwner ? '@' + jid.split`@`[0] : jid}\n│ - - - - - - - - -`.trim()).join('\n') : ''}
 *Estes usuários estão eternamente expulsos deste grupo, punidos pelas infrações as regras que reinam neste meio.. Condenados ao exílio sem a graça da interação deste chat.. 💀*
*╰•·–––––––––––––––––––·•*`.trim()

await conn.reply(m.chat, caption, m, { mentions: await conn.parseMention(caption) })}
/*conn.sendButton(m.chat, caption, `*Estos usuarios no puedes Usar a ByteSec*\n\n` + wm, null, [ 
['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], m, { mentions: await conn.parseMention(caption) })}*/
handler.command = /^listkick|listanegra|listexpulsos|listkck/i
handler.admin=true
export default handler
