
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

import uploadImage from '../lib/uploadImage.js'
import translate from '@vitalets/google-translate-api' 


let handler = async (m, { conn, text, usedPrefix, command, isOwner }) => {
m.react("💿")
let regex = /^\d+$/;


    
    
if(!text || !regex.test(text)){
  m.react("❌")
  m.reply(`╭─┅──┅❖ ༒︎ ❖─┅──┅
𝙋𝙤𝙧 𝙛𝙖𝙫𝙤𝙧.. 𝙧𝙚𝙨𝙥𝙤𝙣𝙙𝙖 𝙖𝙤 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 𝙘𝙤𝙢 𝙤 𝙣𝙪𝙢𝙚𝙧𝙤 𝙙𝙖 𝙖𝙥𝙡𝙞𝙘𝙖𝙘𝙖𝙤 𝙦𝙪𝙚 𝙙𝙚𝙨𝙚𝙟𝙖𝙨 𝙚 𝙧𝙚𝙩𝙤𝙧𝙣𝙖𝙧𝙚𝙞 𝙤 𝙙𝙤𝙘𝙪𝙢𝙚𝙣𝙩𝙤 𝙖𝙤 𝙫𝙤𝙨𝙨𝙤 𝙚𝙣𝙘𝙤𝙣𝙩𝙧𝙤

𝑬𝒙𝒆𝒎𝒑𝒍𝒐:
*.apkdl _4_*

*╰─┅──┅❖ ⸸ ❖─┅──┅*`)
}

let apkChosen = parseInt(global.apkLista[m.chat].nmb[text]) - 1
let apkName = global.apkLista[m.chat].query
let url =`https://api.neoxr.eu/api/apkmod?q=${global.apkLista[m.chat].query}&apikey=${global.neoxr}&no=${text}`
console.log(url)
console.log(url)


	const response = await fetch(url);

// Get the raw file data from the response body
const fileData = await response.json();
let mimetype = 'application/vnd.android.package-archive';
// Send the file as a document using sendFile()
console.log(fileData)
console.log(global.apkLista[m.chat].urls[text])
let publicado = await translate(fileData.data.publish, { to: "pt", autoCorrect: true })

let categ = await translate(fileData.data.category, { to: "pt", autoCorrect: true })


  let message = await conn.sendMessage(m.chat, {
      text: `─┅──┅❖ 📦 ❖─┅──┅
𝙰𝚞𝚝𝚘𝚛: ${fileData.data.author}
𝚅𝚎𝚛𝚜𝚊𝚘: ${fileData.data.version}
𝙲𝚊𝚝𝚎𝚐𝚘𝚛𝚒𝚊: ${fileData.data.category ? categ.text : 'Sem dados'}
𝚃𝚊𝚖𝚊𝚗𝚑𝚘: ${fileData.data.size}
𝙿𝚞𝚋𝚕𝚒𝚌𝚊𝚍𝚘 𝚎𝚖: ${fileData.data.publish ? publicado.text : 'Sem dados'}
─┅──┅❖ ༒︎ ❖─┅──┅`,
      contextInfo: {
        externalAdReply: {
          title: fileData.data.name,
          body: "",
          thumbnailUrl: fileData.data.thumbnail,
          sourceUrl: "",
          mediaType: 1,
          showAdAttribution: false,
          renderLargerThumbnail: false,
        },
      },
    }, { quoted: m });
    


await conn.sendMessage(m.chat, {
             'document': { 'url': fileData.file.url },
            'mimetype': mimetype,
            'fileName': `${fileData.data.name}.apk`
        }, { 'quoted': m });
        

m.react("🌕")
	
	
/*
console.log(global.apkLista[m.chat].urls[text])
let docname = text ? text : m.pushName || 'documento'

m.react("💿")
co


*/
}
handler.command = /^apkdl/i
export default handler
