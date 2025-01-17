
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

let handler = async (m, { conn, text, usedPrefix, command }) => {


const date = new Date();
const formattedDate = `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, '0')}.${String(date.getDate()).padStart(2, '0')}`;
console.log(`cat /etc/logs/${formattedDate}`);

let teks = `┌──[ BYΓΞSΞC ]──[~] 
└─► cat etc/logs/${formattedDate}
> ‎ 
> BUG REPORTADO
> ᴜꜱᴜᴀʀɪᴏ: @${m.sender.split`@`[0]}
─┅───────────
${text ? 'ᴅᴇꜱᴄ. ᴅᴏ ᴏᴄᴏʀʀɪᴅᴏ:\n ' + text : '' }`
//conn.reply('19393844141@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
//contextInfo: {
//mentionedJid: [m.sender]
//}})

if(m.quoted){
m.quoted.reply(m.quoted ? teks + m.quoted.text : teks,`120363360114833087@g.us`, {contextInfo: {
mentionedJid: [m.sender]
}})}
else  {
  m.reply(m.quoted ? teks + m.quoted.text : teks,`120363360114833087@g.us`, {contextInfo: {
mentionedJid: [m.sender]
}})}

const msg = idioma == 'en' ? `$ ./report.py
> ᴛʜᴇ ʀᴇᴘᴏʀᴛ ʜᴀꜱ ʙᴇᴇɴ ꜱᴀᴠᴇᴅ ᴏɴ /ᴇᴛᴄ/ʟᴏɢꜱ ᴀɴᴅ ꜱᴇɴᴛ ᴛᴏ ᴛʜᴇ ᴅᴇᴠᴇʟᴏᴘᴇʀ, ᴛʜᴀɴᴋꜱ ꜰᴏʀ ᴛʜᴇ ꜰᴇᴇᴅʙᴀᴄᴋ, ᴋɪᴅᴅᴏ` : `$ ./report.py 
> [!] ʀᴇʟᴀᴛᴏʀɪᴏ ꜰᴏɪ ꜱᴀʟᴠᴏ ᴇᴍ /ᴇᴛᴄ/ʟᴏɢꜱ ᴇ ᴇɴᴠɪᴀᴅᴏ ᴘᴀʀᴀ ᴏ ᴅᴇꜱᴇɴᴠᴏʟᴠᴇᴅᴏʀ. ᴏʙʀɪɢᴀᴅᴏ ᴘᴇʟᴏ ꜰᴇᴇᴅʙᴀᴄᴋ, ɢᴀʀᴏᴛᴏ. `

  m.reply(msg)

}

handler.help = ['reporte', 'request'].map(v => v + ' <teks>')
handler.tags = ['info']
handler.exp = 0
handler.command = /^(report|request|reporte|bugs|bug|report-owner|reportes|reportar)$/i 
export default handler
