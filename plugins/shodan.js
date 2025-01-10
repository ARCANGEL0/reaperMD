
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

import fetch from 'node-fetch';
import { Readable } from 'stream';

const handler = async (m, { conn, command, text, args, usedPrefix, DevMode }) => {
    let fkontak = { "key": { "participants": "0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` } }, "participant": "0@s.whatsapp.net" }
    const { key } = await conn.sendMessage(m.chat, { text: wait }, { quoted: fkontak });

if(!args[0]){
 await  m.react("❌")
 await  m.reply(`╭━━━━━━━━━⬣
  
 𝑼𝒔𝒐 𝒊𝒏𝒗𝒂𝒍𝒊𝒅𝒐 𝒅𝒐 𝒄𝒐𝒎𝒂𝒏𝒅𝒐

𝖯𝖺𝗋𝖺 𝗎𝗌𝖺𝗋 𝗈 𝗌𝗁𝗈𝖽𝖺𝗇 𝖾 𝗏𝖺𝗋𝗋𝖾𝗋 𝗈𝗌 𝗋𝖾𝗂𝗇𝗈𝗌 𝖽𝗂𝗀𝗂𝗍𝖺𝗂𝗌 𝖾𝗆 𝖻𝗎𝗌𝖼𝖺 𝖽𝗈 𝗈𝖻𝗌𝖼𝗎𝗋𝗈 𝗊𝗎𝖾 𝗉𝗋𝗈𝖼𝗎𝗋𝖺𝗌..
𝖴𝗌𝖾-𝗈 𝖽𝖺 𝗌𝖾𝗀𝗎𝗂𝗇𝗍𝖾 𝖿𝗈𝗋𝗆𝖺
𝖤𝗌𝗉𝖾𝖼𝗂𝖿𝗂𝗊𝗎𝖾 𝖺 𝖺𝖼𝖺𝗈 𝗊𝗎𝖾 𝖽𝖾𝗌𝖾𝗃𝖺𝗌 𝖾 𝗌𝖾𝗎 𝖺𝗅𝗏𝗈 𝗂𝗇𝖿𝗈𝗋𝗍𝗎𝗇𝗂𝗈 𝖼𝗈𝗆𝗈 𝗇𝗈 𝖾𝗑𝖾𝗆𝗉𝗅𝗈

𝖤𝖷:
.𝗌𝗁𝗈𝖽𝖺𝗇 𝗌𝖼𝖺𝗇 𝟣𝟩.𝟥𝟨𝟦.𝟥𝟦.𝟥𝟩
.𝗌𝗁𝗈𝖽𝖺𝗇 𝖽𝗈𝗆𝖺𝗂𝗇 𝖺𝗋𝖼𝖺𝗇𝗀𝖾𝗅𝗈.𝗇𝖾𝗍
.𝗌𝗁𝗈𝖽𝖺𝗇 𝗁𝗈𝗌𝗍 𝟣𝟨.𝟤𝟦𝟪.𝟥𝟦.𝟣𝟫

╰━━━━━━━━━━━━━━━━━━⬣`)
return !0
}
let tipo = args[0].toLowerCase()
if(!["scan","dominio" ,"domain",'host', "ip"].includes(tipo) || !args[1]){
 await  m.react("❌")
 await  m.reply(`╭━━━━━━━━━⬣
  
 𝑼𝒔𝒐 𝒊𝒏𝒗𝒂𝒍𝒊𝒅𝒐 𝒅𝒐 𝒄𝒐𝒎𝒂𝒏𝒅𝒐

𝖯𝖺𝗋𝖺 𝗎𝗌𝖺𝗋 𝗈 𝗌𝗁𝗈𝖽𝖺𝗇 𝖾 𝗏𝖺𝗋𝗋𝖾𝗋 𝗈𝗌 𝗋𝖾𝗂𝗇𝗈𝗌 𝖽𝗂𝗀𝗂𝗍𝖺𝗂𝗌 𝖾𝗆 𝖻𝗎𝗌𝖼𝖺 𝖽𝗈 𝗈𝖻𝗌𝖼𝗎𝗋𝗈 𝗊𝗎𝖾 𝗉𝗋𝗈𝖼𝗎𝗋𝖺𝗌..
𝖴𝗌𝖾-𝗈 𝖽𝖺 𝗌𝖾𝗀𝗎𝗂𝗇𝗍𝖾 𝖿𝗈𝗋𝗆𝖺
𝖤𝗌𝗉𝖾𝖼𝗂𝖿𝗂𝗊𝗎𝖾 𝖺 𝖺𝖼𝖺𝗈 𝗊𝗎𝖾 𝖽𝖾𝗌𝖾𝗃𝖺𝗌 𝖾 𝗌𝖾𝗎 𝖺𝗅𝗏𝗈 𝗂𝗇𝖿𝗈𝗋𝗍𝗎𝗇𝗂𝗈 𝖼𝗈𝗆𝗈 𝗇𝗈 𝖾𝗑𝖾𝗆𝗉𝗅𝗈

𝖤𝖷:
.𝗌𝗁𝗈𝖽𝖺𝗇 𝗌𝖼𝖺𝗇 𝟣𝟩.𝟥𝟨𝟦.𝟥𝟦.𝟥𝟩
.𝗌𝗁𝗈𝖽𝖺𝗇 𝖽𝗈𝗆𝖺𝗂𝗇 𝖺𝗋𝖼𝖺𝗇𝗀𝖾𝗅𝗈.𝗇𝖾𝗍
.𝗌𝗁𝗈𝖽𝖺𝗇 𝗁𝗈𝗌𝗍 𝟣𝟨.𝟤𝟦𝟪.𝟥𝟦.𝟣𝟫

╰━━━━━━━━━━━━━━━━━━⬣`)
return !0
}

    console.log(args[0])

   
     async function runShell() {
      await conn.sendMessage(m.chat, {text: `[■■■■■□□□□□] 50%`, edit: key});

        const url = 'http://127.0.0.1:8330/shodan';  // Replace with the appropriate server address

        const data = {
            type: args[0],
            target: args[1]
           
        };

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
await conn.sendMessage(m.chat, {text: `[■■■■■■■■□□] 80%`, edit: key});
            const readable = new Readable().wrap(response.body);
            let responseBody = '';
                          
            readable.on('data',async (chunk) => {
                responseBody += chunk.toString();
  

                console.log(responseBody)
                await conn.sendMessage(m.chat, {text: responseBody, edit: key});
            });
            readable.on('end', async () => {
                console.log(responseBody);  
                await conn.sendMessage(m.chat, {text: responseBody, edit: key});
            });
        } catch (error) {
            console.error('Error:', error);
             await conn.sendMessage(m.chat, {text: `𝙴𝚛𝚛𝚘 𝚗𝚘 𝚙𝚛𝚘𝚌𝚎𝚜𝚜𝚘 ❌
[■■■■■■■■■■] 100%`, edit: key});
        }
    }
   
   try {
     await conn.sendMessage(m.chat, {text: `[■■□□□□□□□□] 20%`, edit: key});

    runShell();
   }
   catch(e){
     await conn.sendMessage(m.chat, {text: `𝙴𝚛𝚛𝚘 𝚗𝚘 𝚙𝚛𝚘𝚌𝚎𝚜𝚜𝚘 ❌
[■■■■■■■■■■] 100%`, edit: key});
     console.log(e)
   }
}

handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.level = 54
handler.command = ['shodan']

export default handler