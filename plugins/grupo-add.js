
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────




   
   let handler = async (m, { conn, args, text, usedPrefix, command ,participants}) => {
     
     /*
let who 
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
else who = m.chat
let name = await conn.getName(m.sender)	
let user = global.db.data.users[who]
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
if (!global.db.data.settings[conn.user.jid].restrict) return conn.reply(m.chat, `${langTOGGLE['smsAvisoAG']()}${langTOGGLE['smsSoloOwner']()}`, fkontak, m) 
if (!text) throw `${langTOGGLE['smsAvisoMG']()} ${langTOGGLE['smsMalused']()}\n*${usedPrefix + command}* 59355555555`
if (text.includes('+')) throw  `${langTOGGLE['smsAvisoMG']()}𝙄𝙉𝙎𝙄𝙍𝘼 𝙊 𝙉𝙐𝙈𝙀𝙍𝙊 𝙏𝙊𝘿𝙊 𝙅𝙐𝙉𝙏𝙊 𝙎𝙀𝙈 𝙊 +
*+*`


 if (!args[0]) throw `─┅──┅❖ 𒌐 ❖─┅──┅
 𝑫𝒊𝒈𝒊𝒕𝒆 𝒐 𝒏𝒖𝒎𝒆𝒓𝒐 𝒅𝒐 𝒖𝒔𝒖𝒂𝒓𝒊𝒐 𝒒𝒖𝒆 𝒅𝒆𝒔𝒆𝒋𝒂𝒔 𝒂𝒈𝒓𝒆𝒈𝒂𝒓 𝒂 𝒆𝒔𝒕𝒆 𝒈𝒓𝒖𝒑𝒐
 Ex: .add 55212850988
 ─┅──┅❖ җ ❖─┅──┅`     
 try {
   let number= args[0] + "@s.whatsapp.net"
   await m.react("⏳")
   await conn.groupParticipantsUpdate(m.chat, [number],'add')
   
   await m.react("✔️")
   
 } catch (e){ 
   console.log(e)
 throw  `─┅──┅❖ 𒌐 ❖─┅──┅
𝑯𝒐𝒖𝒗𝒆 𝒖𝒎 𝒆𝒓𝒓𝒐 𝒆𝒎 𝒂𝒅𝒊𝒄𝒊𝒐𝒏𝒂𝒓 𝒐 𝒖𝒔𝒖á𝒓𝒊𝒐.. 𝒕𝒆𝒏𝒕𝒆 𝒏𝒐𝒗𝒂𝒎𝒆𝒏𝒕𝒆 𝒎𝒂𝒊𝒔 𝒕𝒂𝒓𝒅𝒆
 ─┅──┅❖ җ ❖─┅──┅`     
 }



*/

m.reply(`⎔⎓─────────────────
┃  ▂▃▅ 𝚂𝚎𝚛𝚟𝚒𝚌𝚘 𝚒𝚗𝚍𝚒𝚜𝚙𝚘𝚗𝚒𝚟𝚎𝚕 ▅▃▂
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ ঔৣ _𝐃𝐞𝐯𝐢𝐝𝐨 𝐚𝐬 𝐦𝐮𝐝𝐚𝐧𝐜𝐚𝐬 𝐧𝐨 𝐚𝐥𝐠𝐨𝐫𝐢𝐭𝐦𝐨 𝐝𝐚 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩 𝐈𝐧𝐜. 𝐍𝐚̃𝐨 𝐞́ 𝐦𝐚𝐢𝐬 𝐩𝐨𝐬𝐬𝐢𝐯𝐞𝐥 𝐚𝐝𝐢𝐜𝐢𝐨𝐧𝐚𝐫 𝐨𝐮 𝐫𝐞𝐦𝐨𝐯𝐞𝐫 𝐦𝐞𝐦𝐛𝐫𝐨𝐬 𝐚𝐭𝐫𝐚𝐯𝐞𝐬 𝐝𝐨 𝐄𝐝𝐠𝐚𝐫._
╰─...⎔⎓──────────────`)

}
handler.help = ['add', '+'].map(v => v + ' número')
handler.tags = ['group']
handler.command = /^(add|agregar|invitar|invite|adc|\+)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
handler.fail = null
export default handler
//
