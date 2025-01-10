
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

import fetch from 'node-fetch';
import gtts from 'node-gtts';
import {readFileSync, unlinkSync} from 'fs';
import news from 'gnews'
import { JSDOM } from 'jsdom'
import moment from 'moment';
import * as scholarly from "@ebandev/scholarly";


const handler  = async (m, { conn, command, text,args, usedPrefix, DevMode }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
  const { key } = await conn.sendMessage(m.chat, {text: wait}, {quoted: fkontak});
// await delay(1000 * 2);
await conn.sendMessage(m.chat, {text: ` 👁️𝙱𝚞𝚜𝚌𝚊𝚗𝚍𝚘 𝚊𝚛𝚝𝚒𝚐𝚘𝚜. . .
[■■□□□□□□□□] 20%`, edit: key});





function formatPortugueseDate(isoDate) {
    const date = new Date(isoDate);
    const options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        timeZone: 'UTC',
        timeZoneName: 'short'
    };
    return new Intl.DateTimeFormat('pt-PT', options).format(date);
}

await conn.sendMessage(m.chat, {text: `👁️𝙱𝚞𝚜𝚌𝚊𝚗𝚍𝚘 𝚊𝚛𝚝𝚒𝚐𝚘𝚜. . .
[■■■■■□□□□□] 50%`, edit: key});
  const results = await scholarly.search(text,{n:3});
  console.log(results);
  
let messg = `╭─┅──┅❖ 🗞️ ❖─┅──┅\n`
    for (let article of results) {
     messg += `\n❖─┅──┅─❖─┅──┅─❖
⌬ ${await stylizeText('math-bold-italic', article.publication)} ⌬
     
*${article.title}* 
*${article.authors[0]}*${article.authors[1] ? ',' + article.authors[1] : ''}
༺༻
_${article.description}_  


${await stylizeText('math-monospace', 'PDF:')}   ${article.pdf}
    ─┅──┅┅──┅┅──┅┅──┅┅──┅
${await stylizeText('math-monospace', 'Link:')}   ${article.url}

`
     

    }
await conn.sendMessage(m.chat, {text: `👁️𝙱𝚞𝚜𝚌𝚊𝚗𝚍𝚘 𝚊𝚛𝚝𝚒𝚐𝚘𝚜. . .
[■■■■■■■■□□] 80%`, edit: key});
messg += `*╰─┅──┅❖ ⸸ ❖─┅──┅*`

console.log(messg)
m.reply(messg)
await conn.sendMessage(m.chat, {text: `𝚂𝚞𝚌𝚎𝚜𝚜𝚘 𓄿. . .
[■■■■■■■■■■] 100%`, edit: key});
    
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.level=25
handler.command = ['academico']

export default handler
async function stylizeText(stylename, text) {
  if (!text) {
    return '🪶 𝔇𝔦𝔤𝔞-𝔪𝔢 𝔬 𝔢𝔰𝔱𝔦𝔩𝔬 𝔞 𝔪𝔬𝔡𝔦𝔣𝔦𝔠𝔞𝔯';
  }

  let res = await fetch(`http://qaz.wtf/u/convert.cgi?text=${encodeURIComponent(text)}`);
  let html = await res.text();
  let dom = new JSDOM(html);
  let table = dom.window.document.querySelector('table').children[0].children;
  let obj = {};

  for (let tr of table) {
    let name = tr.querySelector('.aname').innerHTML.toLowerCase().replace(/ /g, '-');
    let content = tr.children[1].textContent.replace(/^\n/, '').replace(/\n$/, '');
    obj[name] = content;
  }

  const stylizedText = obj[stylename];

  return stylizedText || 'ℑ𝔫𝔳𝔞𝔩𝔦𝔡𝔬 ✖️';
}
/*let MessageType =  (await import(global.baileys)).default
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let chat = global.db.data.chats[m.chat]
let user = global.db.data.users[m.sender]
let bot = global.db.data.settings[conn.user.jid] || {}
let name = await conn.getName(m.sender)
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()
  let pp = gataVidMenu.getRandom()
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

//------- Nombre
  let nowner = `${wm.split`@`[0]}@s.whatsapp.net`
  let insta = `https://www.instagram.com/gata_dios`
  let teksnomor = `
• @${wm.split`@`[0]} •
------- ${wm} -------
`
conn.reply(m.chat, 'Mario.js', fkontak,  m)
//------------ BIO
let ppown = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image').catch(_ => imagen1[1]) 
let teksbio = `𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿 💖🐈
*Wa.me/573136855110*

𝙂𝙖𝙩𝙖𝘽𝙤𝙩𝙇𝙞𝙩𝙚-𝙈𝘿 💖🐈
*wa.me/593993684821*
*---------------------*

*CENTER ByteSec*
*centerByteSec@gmail.com*

𝙂𝘼𝙏𝘼 𝘿𝙄𝙊𝙎 - 𝘼𝙎𝙄𝙎𝙏𝙀𝙉𝘾𝙄𝘼
*${asistencia}*`
  let teks = ' '
const sections = [
   {
	title: `PROPIETARIO/OWNER`,
	rows: [
	    {title: "📱 • NOMBRE", rowId: ".owner nombre"},
	{title: "🙌 • NUMERO", rowId: ".owner bio"},
	{title: "🌐 • CUENTAS OFICIALES", rowId: ".cuentasgb"},
	{title: "😸 • GRUPOS", rowId: ".grupos"},
	{title: "🌎 • SCRIPT", rowId: ".sc"},
	]
    },{
	title: `–––––––·• APOYA AL BOT –––––––·•`,
	rows: [
	    {title: "💹 • DONAS", rowId: ".paypal"},
	{title: "🤖 • INSTALARBOT", rowId: ".instalarbot"},
	{title: "🌟 • PREMIUM", rowId: ".pasepremium"},
	]
  },
]

const listMessage = {
  text: teks,
  footer: null,
  title: `╭━━━✦ *OWNER ✦━━━━⬣
┃დ HOLA 👋 ${name}
┃≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋
┃${wm}
╰━━━━━✦ *${vs}* ✦━━━━⬣`,
  buttonText: "HAGA CLICK AQUI",
  sections
}

  try {
    if (/(contacto|owner|creator|propietario|dueño|dueña|propietaria|dueño|creadora|creador)/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'nombre':
          await conn.reply(m.chat, `𝙉𝙊𝙈𝘽𝙍𝙀 𝘿𝙀𝙇 𝘽𝙊𝙏 : ${gt} 🐈`, fkontak, m)
         // conn.reply(m.chat, "Nombre del bot : ByteSec-MD 🐈", m, { contextInfo: { mentionedJid: [nowner] }})
            break
            case 'bio':
             await conn.sendFile(m.chat, gataImg.getRandom(), 'gata.jpg', teksbio, fkontak)
         // conn.sendButton(m.chat, teksbio, fkontak, pp, [`☘️ 𝗠 𝗘 𝗡 𝗨`, `.menu`], m)
            break
          default:
            return await conn.sendMessage(m.chat, listMessage, { quoted: m, contextInfo: { mentionedJid: [m.sender] }})
        }
    } else if (/aoaooaoaooaoa/i.test(command)) {
      const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
      switch (_type) {
        case 't':
          break
        case '':
          break

        default:
          return  await conn.sendFile(m.chat, gataImg.getRandom(), 'gata.jpg', teksbio, fkontak)
      }
    }
  } catch (err) {
    m.reply("Error\n\n\n" + err.stack)
  }
}

handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(contacto|owner|creator|propietario|dueño|dueña|propietaria|dueño|creadora|creador)$/i

export default handler*/
