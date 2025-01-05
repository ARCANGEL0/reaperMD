
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

import cheerio from 'cheerio';
import fetch from 'node-fetch';
import translate from '@vitalets/google-translate-api' 
let handler = async (m, { conn, text, usedPrefix, command,isAdmin,isOwner, participants }) => {
  
  	 const groupAdmins = participants.filter(p => p.admin)
 
  let admins =[]
  const listAdmin = groupAdmins.map((v, i) =>
  admins.push(v.id))
  
   let admcheck = admins.includes(m.sender)
   
	if(!global.db.data.chats[m.chat]){
  global.db.data.chats[m.chat]={}
}
if(!global.db.data.chats[m.chat].users){
  global.db.data.chats[m.chat].users={}
}
if(!global.db.data.chats[m.chat].users[m.sender]){
  global.db.data.chats[m.chat].users[m.sender]={
    exp: 0,
        limit:0,
        role:'🪶 𝐍𝐨𝐯𝐢𝐜𝐨 𝐄𝐧𝐢𝐠𝐦𝐚𝐭𝐢𝐜𝐨',
        money:0,
        level:0,
        adm: admcheck,
        legendary: false,
        banned:false,
        adv:0,
        silenced: false,
        maxlevel: false,
        cocriador: false,
       
  }
}
   if (!(isAdmin || isOwner) && global.db.data.chats[m.chat].autolevelup && global.db.data.chats[m.chat].users[m.sender].money < 125) {
await conn.sendMessage(m.chat ,{text: `╭─┅──┅❖ ༒︎ ❖─┅──┅
𝑺𝒆𝒎 җ ʙʏᴛᴇᴄᴏɪɴꜱ, 𝒎𝒆𝒓𝒈𝒖𝒍𝒉𝒂𝒏𝒅𝒐-𝒕𝒆 𝒏𝒂 𝒑𝒆𝒏𝒖𝒎𝒃𝒓𝒂 𝒇𝒊𝒏𝒂𝒏𝒄𝒆𝒊𝒓𝒂, 𝒄𝒐𝒎𝒐 𝒐 𝒄𝒐𝒓𝒗𝒐 𝒒𝒖𝒆 𝒆𝒔𝒑𝒓𝒆𝒊𝒕𝒂 𝒂 𝒊𝒏𝒔𝒐𝒍𝒗ê𝒏𝒄𝒊𝒂.
*╰─┅──┅❖ ⸸ ❖─┅──┅*`},{quoted:m})
 return !0
 
 }
  
    let horoscopeUrl = 'https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=';
    const horoArray = ["aries", "taurus", "gemini", "cancer", "leo", "virgo", "libra", "scorpio", "sagittarius", "capricorn", "aquarius", "pisces"];
    
    const normalizedText = text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    console.log(normalizedText)
    let zod;
    
  if (horoArray.includes(normalizedText)) {
    zod = normalizedText; // Return the input as it is if it's already in the array
  } else {
    // Translations for normalized Portuguese input
 
const translations = {
  "aries": "aries",
  "touro": "taurus",
  "gemeos": "gemini",
  "cancer": "cancer",
  "leao": "leo",
  "virgem": "virgo",
  "libra": "libra",
  "escorpiao": "scorpio",
  "sagitario": "sagittarius",
  "capricornio": "capricorn",
  "aquario": "aquarius",
  "peixes": "pisces",
};
    // Check if there's a translation for the normalized input text
    const translatedSign = translations[normalizedText];
    console.log(translatedSign)
    // Return the translated sign or a default value if not found
    zod = translatedSign ;
  }
  
  // Normalizing input: converting to lowercase and removing special characters
  

  // Check if the normalized text is in the horoArray
  


// Example usage


console.log(zod); // Output: scorpio (for the given example)

    
        try {
          m.react("🌒")
            let index = horoArray.indexOf(zod.toLowerCase());
            if (index === -1) {
                await m.reply("Erro");
            } else {
                const response = await fetch(horoscopeUrl + `${index + 1}`);
                const data = await response.text();
                const $ = cheerio.load(data);
                const horoscope = $("body > div.grid.grid-right-sidebar.primis-rr > main > div.main-horoscope > p:nth-child(2)").text();
                let enmsg = horoscope.substring(horoscope.indexOf('-') + 1)
                let message = await translate(enmsg, { to: "pt", autoCorrect: true })
                let endata = horoscope.split("-")[0]
                let hoje = await translate(endata, { to: "pt", autoCorrect: true })
                console.log(hoje)
                console.log(message)
                m.react("🌕")
                await m.reply(`━━━━━━━━━⬣⛧༺♱༻⛧⬣━━━━━━━━
🌒 𝘕𝘦𝘴𝘵𝘢 𝘦𝘧𝘦𝘮𝘦𝘳𝘢 𝘥𝘢𝘵𝘢: ${hoje.text}
𝘰𝘯𝘥𝘦 𝘰 𝘮𝘢𝘯𝘵𝘰 𝘥𝘰 𝘵𝘦𝘮𝘱𝘰 𝘴𝘦 𝘥𝘦𝘴𝘥𝘰𝘣𝘳𝘢, 𝘱𝘦𝘳𝘮𝘪𝘵𝘢-𝘮𝘦 𝘳𝘦𝘷𝘦𝘭𝘢𝘳 𝘰𝘴 𝘥𝘦𝘴𝘪𝘨𝘯𝘪𝘰𝘴 𝘤𝘦𝘭𝘦𝘴𝘵𝘪𝘢𝘪𝘴 𝘲𝘶𝘦 𝘱𝘢𝘪𝘳𝘢𝘮 𝘴𝘰𝘣𝘳𝘦 𝘷𝘰𝘴𝘴𝘢 𝘦𝘹𝘪𝘴𝘵𝘦𝘯𝘤𝘪𝘢. 𝘚𝘰𝘣 𝘢 𝘦𝘨𝘪𝘥𝘦 𝘢𝘴𝘵𝘳𝘢𝘭, 𝘷𝘪𝘴𝘭𝘶𝘮𝘣𝘳𝘦 𝘰 𝘩𝘰𝘳𝘰𝘴𝘤𝘰𝘱𝘰 𝘲𝘶𝘦 𝘴𝘦 𝘥𝘦𝘴𝘦𝘯𝘩𝘢:
─┅──┅❖ ❖─┅──┅
_${message.text}_
─┅──┅❖ ❖─┅──┅
🕯️ 𝚀𝚞𝚎 𝚎𝚜𝚝𝚊𝚜 𝚙𝚊𝚕𝚊𝚟𝚛𝚊𝚜 𝚌𝚎𝚕𝚎𝚜𝚝𝚒𝚊𝚒𝚜 𝚐𝚞𝚒𝚎𝚖 𝚟𝚘𝚜𝚜𝚊 𝚓𝚘𝚛𝚗𝚊𝚍𝚊 𝚗𝚊𝚜 𝚖𝚊𝚒𝚜 𝚜𝚘𝚖𝚋𝚛𝚒𝚊𝚜 𝚑𝚘𝚛𝚊𝚜 𝚍𝚎𝚜𝚝𝚎 𝚍𝚒𝚊 𝚜𝚒𝚗𝚐𝚞𝚕𝚊𝚛.
━━━━━━━━━⬣𖤐⬣━━━━━━━━
                `);
                m.react("✔️")
                if(global.db.data.chats[m.chat].autolevelup){
global.db.data.chats[m.chat].users[m.sender].money -= 125
await m.reply("༒︎ 125 җ ʙʏᴛᴇᴄᴏɪɴꜱ 𝙐𝙎𝘼𝘿𝙊(𝙎")
}
                
            }
        } catch (err) {
            console.log(err)
        }
    

    
};

handler.help = ['poll <desc>|opts1|opts2|etc...'];
handler.tags = ['group']
handler.level=7
handler.command = ['horoscopo']

export default handler;