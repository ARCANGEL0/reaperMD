
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

let handler = async (m, {conn,participants, text, command,groupMetadata, usedPrefix }) => {//prems 
  let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
  
  //conn.sendButton(m.chat, wm, langTOGGLE.smsAdveu1() + lenGB, null, [[langTOGGLE.smsEncender(), lenGB]], fkontak, m)
  
  let who 
  let img = 'https://i.imgur.com/DvHoMc3.jpg'
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
  else who = m.chat
  let name = await conn.getName(m.sender)	
    
  let user = global.db.data.users[who]
  if (!who) return conn.reply(m.chat, langTOGGLE.smsMalused3() + `*${usedPrefix + command} @${name} ${langTOGGLE['smsAdveu2']()}*`, fkontak, m)  	
  let txt = text.replace('@' + who.split`@`[0], '').trim()
  
    if(!global.db.data.chats[m.chat]){
    global.db.data.chats[m.chat]={}
  }
  if(!global.db.data.chats[m.chat].users){
    global.db.data.chats[m.chat].users={}
  }
  
  
  const groupAdmins = participants.filter(p => p.admin)
   
    let admins =[]
    const listAdmin = groupAdmins.map((v, i) =>
    admins.push(v.id))
    
     let admcheck = admins.includes(who)
  
  if(!global.db.data.chats[m.chat].users[who]){
    global.db.data.chats[m.chat].users[who]={
      exp: 0,
          limit:0,
          role:'𝚜𝚌𝚛𝚒𝚙𝚝 𝚔𝚒𝚍𝚍𝚒𝚎',
          money:0,
          level:0,
          adm: admcheck,
          legendary: false,
          banned:false,
          adv:0,
    }
  }
  try {
    if(global.db.data.chats[m.chat].users[who].adv<=0){
      global.db.data.chats[m.chat].users[who].adv=0
      m.reply(` ༒︎ 𝗨𝘀𝘂𝗮𝗿𝗶𝗼 𝗻𝗮𝗼 𝗽𝗼𝘀𝘀𝘂𝗶 𝗮𝗱𝘃𝗲𝗿𝘁𝗲𝗻𝗰𝗶𝗮𝘀. .`)
    }
  global.db.data.chats[m.chat].users[who].adv -= 1
  await m.reply(
      `╭━━━━━━━━━⬣
  
  _UMA ADVERTÊNCIA REMOVIDA_
  
  *@${who.split`@`[0]}*
  ⚠️ *${global.db.data.chats[m.chat].users[who].adv}/4* 
  ${wm} || ${vs}
  ╰━━━━━━━━━━━━━━━━━━⬣`,
      null,
      { mentions: [who] });
  /*await conn.sendButton(m.chat,`${global.db.data.chats[m.chat].users[m.sender].adv == 1 ? `*@${who.split`@`[0]}*` : `*@${who.split`@`[0]}*`} ${langTOGGLE['smsAdveu4']()}\n\n🫵 *${text}*`, `*${langTOGGLE['smsAdveu5']()}*\n⚠️ *${global.db.data.chats[m.chat].users[m.sender].adv}/4*\n\n${wm}`, img, [
  [langTOGGLE.smsToxic4(), '.ok'],
  [langTOGGLE.smsAdveu6(), langTOGGLE.lenguaje() == 'en' ? usedPrefix + 'inventory' : usedPrefix + 'inventario']], false, { mentions: [who] }) //[m.sender]*/
    
  return !1
  } catch (e) {
  await m.reply(m.chat, `\n${wm}`, langTOGGLE['smsMalError3']() + '#report ' + usedPrefix + command, m)   
  //await conn.sendButton(m.chat, `\n${wm}`, langTOGGLE['smsMalError3']() + '#report ' + usedPrefix + command, null, [[langTOGGLE.smsMensError1(), `#reporte ${langTOGGLE['smsMensError2']()} *${usedPrefix + command}*`]], m)
  console.log(`❗❗ ${langTOGGLE['smsMensError2']()} ${usedPrefix + command} ❗❗`)
  console.log(e)	
  }}
  handler.help = ['addprem <@user>']
  handler.tags = ['owner']
  handler.command = /^(deladv|delaviso|deleteaviso)$/i
  handler.group = true
  handler.admin = true
  handler.botAdmin = false
  export default handler
  