
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

import fetch from 'node-fetch';
import path from 'path';

import { pixart , emi} from 'gpti'
import cheerio from 'cheerio';
import puppeteer from 'puppeteer'

	 
const handler = async (m, {conn,participants, text,isAdmin,isOwner, usedPrefix, command}) => {
  




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
        tentativasRoubo: 5,
        silenced: false,
        maxlevel: false,
        cocriador: false,
       
  }
}
if(!(isAdmin || isOwner) && global.db.data.chats[m.chat].gpt===false){
   m.react("❌")
   
   return !0;
 } 
	 const groupAdmins = participants.filter(p => p.admin)
	 
async function createDalleImage(prompt) {
  try {
    const response = await openai.createImage({
      prompt,
      n: 1,
      size: '1024x1024',
      response_format: 'url',
    });
    return response.data.data[0].url;
  } catch (error) {
    console.error(error.response ? error.response.data : error.message);
    throw error;
  }
}


 
  let admins =[]
  const listAdmin = groupAdmins.map((v, i) =>
  admins.push(v.id))
  
   let admcheck = admins.includes(m.sender)
   
  if (!text) throw `╭━[𝗗𝗔𝗟𝗟 𝗘3 ]━━━━━━━⬣
🕯️📜 𝐒𝐮𝐬𝐬𝐮𝐫𝐫𝐚-𝐦𝐞 𝐨 𝐪𝐮𝐞 𝐡𝐚 𝐞𝐦 𝐬𝐞𝐮𝐬 𝐩𝐞𝐧𝐬𝐚𝐦𝐞𝐧𝐭𝐨𝐬. 𝐋𝐢𝐛𝐞𝐫𝐭𝐞 𝐨𝐬 𝐜𝐨𝐫𝐯𝐨𝐬 𝐝𝐚 𝐢𝐦𝐚𝐠𝐢𝐧𝐚𝐜𝐚𝐨 𝐞 𝐝𝐞𝐢𝐱𝐞 𝐪𝐮𝐞 𝐚 𝐭𝐢𝐧𝐭𝐚 𝐝𝐢𝐠𝐢𝐭𝐚𝐥 𝐭𝐫𝐚𝐜𝐞 𝐚 𝐬𝐢𝐧𝐟𝐨𝐧𝐢𝐚 𝐝𝐨𝐬 𝐠𝐚𝐭𝐨𝐬 𝐩𝐫𝐞𝐭𝐨𝐬 𝐞𝐦 𝐭𝐞𝐮𝐬 𝐝𝐞𝐯𝐚𝐧𝐞𝐢𝐨𝐬.

📜 𝐄𝐱𝐞𝐦𝐩𝐥𝐨:

${usedPrefix + command} Um corvo negro abrindo suas asas
${usedPrefix + command} um gato preto deitado sob uma caveira

╰━━━━━━━━━━━━━━━━━━⬣`
  m.react("💿")
  const url = 'http://89.117.96.108:8330/imagine'
  
  if(global.db.data.chats[m.chat].autolevelup && global.db.data.chats[m.chat].users[m.sender].money<495){
    return m.reply( `*╭─┅──┅❖ 𖤐 ❖─┅──┅*
𝑺𝒆𝒎 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ, 𝒎𝒆𝒓𝒈𝒖𝒍𝒉𝒂𝒏𝒅𝒐-𝒕𝒆 𝒏𝒂 𝒑𝒆𝒏𝒖𝒎𝒃𝒓𝒂 𝒇𝒊𝒏𝒂𝒏𝒄𝒆𝒊𝒓𝒂, 𝒄𝒐𝒎𝒐 𝒐 𝒄𝒐𝒓𝒗𝒐 𝒒𝒖𝒆 𝒆𝒔𝒑𝒓𝒆𝒊𝒕𝒂 𝒂 𝒊𝒏𝒔𝒐𝒍𝒗ê𝒏𝒄𝒊𝒂.
*╰─┅──┅❖ ⸸ ❖─┅──┅*`)
  }
  
   
    
  
  try{
    const data = {
            prompt: text
            
        };
        
    const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
           let ress = await response.json()
           
           
           console.log('server side')
           console.log(ress)
           m.react("🌕")
ress.forEach(image => {
  conn.sendFile(m.chat, `tmp/${image}`, 'image.png', null, m);
});
if(ress.length==0){
  throw 'vazio'
}

    
          if(global.db.data.chats[m.chat].autolevelup){
  global.db.data.chats[m.chat].users[m.sender].money -= 495
  
   m.reply(`495 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ ${global.idioma == 'en' ? 'ᴜꜱᴇᴅ' : 'ᴜꜱᴀᴅᴏꜱ'}`)
}
  }
  
  catch(e){
    console.log(e)
  
try {
  

async function launchBrowser() {
    const browser = await puppeteer.launch({
  args: ['--no-sandbox']
});
    return browser;
}

async function setCookieAndReload(page) {
    const cookieValue = '1iW1QAUWXWx28S1N3Bl0eLqzM1y2Fddnl75xlJ02F8M3prPeTXjqx6MxGGYO01MSzO5GZh0_2wJpdK5DKwWPlTnqrZv_8vb0P2rTHe4lX8EkfNYPVA8J5e3IPqdWCRlNksof4yExIeGSc6nWjzM5WjiH77w1IfY9iq087Azi-A5_hfPlMRx0g9OcwP-Z3uFRTCc0uoIN7czzxewl47eZwd5gO8DG_eqk9E6K5C5wY3PU';
    
    // Set cookie _U to maintain session
    await page.setCookie({
        name: '_U',
        value: cookieValue,
        domain: '.bing.com',
        path: '/',
    });
    
    // Reload the page to apply the cookie
    await page.reload({ waitUntil: 'networkidle2' });
}

async function createImage(query) {
    return new Promise(async (resolve, reject) => {
        let browser;

        try {
            // Launch browser if not launched
            browser = await launchBrowser();
            if (!browser) {
                reject("Browser not launched");
                return;
            }

            const page = await browser.newPage();

            // Go to the Bing image generator page
            await page.goto(`https://www.bing.com/images/create`, {
                waitUntil: "networkidle2"
            });

            // Set the cookie and reload the page
            await setCookieAndReload(page);

            // Handle cookie acceptance pop-up if present
            try {
                await page.waitForSelector("#bnp_btn_accept", { timeout: 10000 });
                await page.click("#bnp_btn_accept");
            } catch (e) {
                console.log("Accept button not found, continuing...");
            }

            // Focus on the search bar, type the query, and press enter
            await page.focus("#sb_form_q");
            await page.keyboard.type(query);
            await page.keyboard.press("Enter");

            // Wait for image results to load
            await page.waitForSelector(".imgpt", {
                timeout: 60000
            });

            // Extract the image URLs
            const res = await page.$$eval(".imgpt", (imgs) => {
                return imgs.map((img) => {
                    return img.querySelector("img")?.getAttribute("src");
                });
            });

            // Clean up the image URLs (removing query params)
            const urls = res.map((url) => url?.split("?")[0]);

            // Close the page
            await page.close();

            // Resolve with the image URLs
            resolve({ urls });

        } catch (error) {
            reject(`Error during image creation: ${error}`);
        } finally {
            if (browser) {
                await browser.close();
            }
        }
    });
}

// Example usage
const prompt = "A futuristic city skyline at sunset";
createImage(text).then(result => {
    console.log("Generated Image URLs:", result.urls);
}).catch(error => {
    console.error("Error:", error);
});
  

}

   catch(e){
      console.log(e)
      m.react("💿")
      
      try {

const url = `https://itzpire.com/ai/photoleap?prompt=${text}`


fetch(url)
  .then(response => response.json())
  .then(result => {
    
m.react("🌕")
    console.log(result)

    conn.sendFile(m.chat, result.result, 'image.png', null, m);


    
          if(global.db.data.chats[m.chat].autolevelup){
  global.db.data.chats[m.chat].users[m.sender].money -= 495
  
   m.reply(`495 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ ${global.idioma == 'en' ? 'ᴜꜱᴇᴅ' : 'ᴜꜱᴀᴅᴏꜱ'}`)
}


  }
  )
  .catch(error =>{



fetch(`https://aemt.me/bingimg?text=${text}`, {
  method: 'GET',
  headers: {
    'accept': 'application/json'
  }
})
.then(response => response.json())
.then(data => {
  console.log(data);
  m.react("✔️")
    console.log(data)
     conn.sendFile(m.chat, data.result, 'image.png', null, m);
     
     if(global.db.data.chats[m.chat].autolevelup){
  global.db.data.chats[m.chat].users[m.sender].money -= 495
  
   m.reply(`495 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ ${global.idioma == 'en' ? 'ᴜꜱᴇᴅ' : 'ᴜꜱᴀᴅᴏꜱ'}`)
}
})
.catch(error => {
  m.reply(`╭━━━━━━━━━⬣
┃
┃ ❌✒️ 𝐀 𝐭𝐞𝐧𝐭𝐚𝐭𝐢𝐯𝐚 
┃𝐟𝐚𝐥𝐡𝐨𝐮 𝐥𝐚𝐦𝐞𝐧𝐭𝐚𝐯𝐞𝐥𝐦𝐞𝐧𝐭𝐞.
┃
┃ 𝐀𝐠𝐮𝐚𝐫𝐝𝐞 𝐞 𝐫𝐞𝐭𝐨𝐫𝐧𝐞 
┃ 𝐟𝐮𝐭𝐮𝐫𝐚𝐦𝐞𝐧𝐭𝐞, 𝐩𝐚𝐫𝐚 𝐮𝐦 𝐟𝐮𝐭𝐮𝐫𝐨
┃ 𝐬𝐨𝐦𝐛𝐫𝐢𝐨 𝐪𝐮𝐞 𝐭𝐫𝐚𝐧𝐬𝐩𝐚𝐫𝐞𝐜𝐚
┃ 𝐞𝐱𝐢𝐭𝐨
┃
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
┃ 𝙼𝚛. 𝚁𝚘𝚋𝚘𝚝 | ${vs}
╰━━━━━━━━━━━━━━━━━━⬣`)
  console.error('Error:', error);
});
   console.error('Error:', error)
  }
  );
/*


let res = await fetch(`https://aemt.me/bingimg?text=${text}`)
    console.log(res)
    let data = await res.json()
    console.log(data)
    let resultado = data.result


    



// Display the result or use it as needed
console.log(resultado);


*/

   //   await conn.sendFile(m.chat, resultado, 'image.png', null, m);
      
      

      
    } 
    
    catch(e) {
    console.log(e)
    throw '*Erro desconhecido 👁️*';
  }
    
     
     

     
   
   }
  }
    

}
  
  

handler.tags =["ia"]
handler.level= 25
handler.command = ['imagine']

export default handler;
