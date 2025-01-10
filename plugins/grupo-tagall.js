
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
  
  
  
  
let pesan = args.join` `
let oi = `🌒 ${langTOGGLE['smsAddB5']()}`

let DELETEMESSAGE = await conn.sendMessage(m.chat, { delete: m.key })
    
   
console.log(DELETEMESSAGE.message.protocolMessage.key.id)

if(!global.db.data.chats[m.chat].ignored)
{
  global.db.data.chats[m.chat].ignored =[]
}
global.db.data.chats[m.chat].ignored.push(DELETEMESSAGE.message.protocolMessage.key.id)
if(m.quoted ){
  
  let teks = `┏━─〔 *ℭ𝔬𝔫𝔳𝔬𝔠𝔞𝔫𝔡𝔬 𝔱𝔬𝔡𝔞𝔰 𝔞𝔰 𝔞𝔩𝔪𝔞𝔰* 〕─━┓
> ‎ 
> ${text ? text : m.quoted.text}
> ‎ `


m.quoted.reply(teks, '',{mentions:participants.map(a => a.id)})



}
else {
 
  let teks = `┏━─〔 *ℭ𝔬𝔫𝔳𝔬𝔠𝔞𝔫𝔡𝔬 𝔱𝔬𝔡𝔞𝔰 𝔞𝔰 𝔞𝔩𝔪𝔞𝔰* 〕─━┓
> ‎ 
> ${pesan}`


conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )  



}



/*
m.reply(`⎔⎓─────────────────
┃  ▂▃▅ 𝚂𝚎𝚛𝚟𝚒𝚌𝚘 𝚒𝚗𝚍𝚒𝚜𝚙𝚘𝚗𝚒𝚟𝚎𝚕 ▅▃▂
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ ঔৣ _𝐃𝐞𝐯𝐢𝐝𝐨 𝐚𝐬 𝐦𝐮𝐝𝐚𝐧𝐜𝐚𝐬 𝐧𝐨 𝐚𝐥𝐠𝐨𝐫𝐢𝐭𝐦𝐨 𝐝𝐚 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩 𝐈𝐧𝐜. 𝐍𝐚̃𝐨 𝐞́ 𝐦𝐚𝐢𝐬 𝐩𝐨𝐬𝐬𝐢𝐯𝐞𝐥 𝐦𝐚𝐫𝐜𝐚𝐫 𝐦𝐮𝐢𝐭𝐨𝐬 𝐦𝐞𝐦𝐛𝐫𝐨𝐬 𝐚𝐭𝐫𝐚𝐯𝐞𝐬 𝐝𝐨 𝐄𝐝𝐠𝐚𝐫._
╰─...⎔⎓──────────────`)*/

}
handler.command = /^(tagall|invocar|todos|marcar)$/i

handler.admin = true
handler.group = true
export default handler
