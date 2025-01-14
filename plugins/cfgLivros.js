
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

import fetch from 'node-fetch';
//import {googleIt} from '@bochilteam/scraper';
//import google from 'google-it';
import puppeteer from 'puppeteer';
let handler = async (m, { conn, text, usedPrefix, command }) => {
  
 


  m.react("📓")

	
let pdfs_ = { 
from: m.sender,
titulo: [],
id: [],
links:[],
}
if (!global.db.data.chats[m.chat].livraria) {
global.db.data.chats[m.chat].livraria = {};
}
if (!global.db.data.chats[m.chat].livraria[m.sender]) {
global.db.data.chats[m.chat].livraria[m.sender] = {
titulo: [],
id: [],
links:[],
  
}
}
global.db.data.chats[m.chat].livraria[m.sender] = {
titulo: [],
id: [],
links:[],
  
}

	
	


let textoInfo = `  ╔═══.·:·.☽✧ ✦ ✧☾.·:·.═══╗
☆      *LIVRARIA USHER*      ☆
╚═══.·:·.☽✧ ✦ ✧☾.·:·.═══╝
╭────────────────.....─╮
┃ 📚🪶  𝑶𝒉 𝒑𝒐𝒃𝒓𝒆 𝒂𝒍𝒎𝒂 𝒎𝒆𝒓𝒂𝒎𝒆𝒏𝒕𝒆 𝒎𝒐𝒓𝒕𝒂𝒍, 
┃ 𝒓𝒆𝒔𝒑𝒐𝒏𝒅𝒂-𝒎𝒆 𝒊𝒏𝒇𝒐𝒓𝒎𝒂𝒏𝒅𝒐 𝒂 𝒏𝒖𝒎𝒆𝒓𝒂𝐜𝐚𝒐 𝒅𝒐 𝒎𝒂𝒊𝒔 𝒔𝒖𝒃𝒍𝒊𝒎𝒆 𝒅𝒆𝒔𝒆𝒋𝒐 𝒅𝒆 𝒔𝒖𝒂 𝒑𝒂𝒔𝒔𝒂𝒈𝒆𝒊𝒓𝒂 𝒍𝒆𝒊𝒕𝒖𝒓𝒂.
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
`.trim()  
let imgLivraria =[
  'https://telegra.ph/file/d3bdd046fcc095e8fd5b0.jpg',
  'https://telegra.ph/file/b7bd24e3bca21a9322877.jpg',
  'https://telegra.ph/file/da198d98baca9c6934e9c.jpg',
  'https://telegra.ph/file/be4a3d7f6074b469c453e.jpg',
  'https://telegra.ph/file/694b0e1ccf412ea0c3713.jpg'
  ,'https://telegra.ph/file/894288d5d68ab13bf21d5.jpg']

if(!text) return conn.sendFile(m.chat, imgLivraria.getRandom(), 'erro',`╔═══.·:·.☽✧ ✦ ✧☾.·:·.═══╗
☆      *LIVRARIA USHER*      ☆
╚═══.·:·.☽✧ ✦ ✧☾.·:·.═══╝
╭────────────────.....─╮
┃ 📚🪶  𝑶𝒉 𝒑𝒐𝒃𝒓𝒆 𝒂𝒍𝒎𝒂 𝒎𝒆𝒓𝒂𝒎𝒆𝒏𝒕𝒆 𝒎𝒐𝒓𝒕𝒂𝒍, 
┃ 𝒅𝒊𝒈𝒂-𝒎𝒆 𝒒𝒖𝒂𝒍 𝒍𝒊𝒗𝒓𝒐 𝒔𝒂𝒄𝒊𝒂𝒓𝒊𝒂 𝒔𝒆𝒖 𝒔𝒖𝒃𝒍𝒊𝒎𝒆 𝒅𝒆𝒔𝒆𝒋𝒐 𝒑𝒐𝒓 𝒖𝒎𝒂 𝒑𝒂𝒔𝒔𝒂𝒈𝒆𝒊𝒓𝒂 𝒍𝒆𝒊𝒕𝒖𝒓𝒂
┃ 𝑨𝒑𝒐𝒔 𝒕𝒂𝒍 𝒇𝒆𝒊𝒕𝒐, 𝒓𝒆𝒔𝒑𝒐𝒏𝒅𝒂-𝒎𝒆 𝒊𝒏𝒇𝒐𝒓𝒎𝒂𝒏𝒅𝒐 𝒂 𝒏𝒖𝒎𝒆𝒓𝒂𝐜𝐚𝒐 𝒅𝒐 𝒎𝒂𝒊𝒔 𝒔𝒖𝒃𝒍𝒊𝒎𝒆 𝒅𝒆𝒔𝒆𝒋𝒐 𝒅𝒆 𝒔𝒖𝒂 𝒑𝒂𝒔𝒔𝒂𝒈𝒆𝒊𝒓𝒂 𝒍𝒆𝒊𝒕𝒖𝒓𝒂.
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
┃ 𝑬𝒙:  *.livraria O poço e o pendulo*
╰─....⛦....────────────────╯`,m)


try {
const url = 'https://google.com/search?q=' + encodeURIComponent(text);



async function searchPdf(text) {
  try {
    const browser = await puppeteer.launch({
      args: ['--no-sandbox'],
    });
    const page = await browser.newPage();

    const url = `https://google.com/search?lr=lang_pt&q=filetype:pdf+inurl:.pdf+${encodeURIComponent(text)}`;
    await page.goto(url);

    await page.waitForSelector('div.g');

    const results = await page.$$eval('div.g', (elements) =>
      elements.map((element) => ({
        title: element.querySelector('h3').textContent,
        link: element.querySelector('a').href,
      })),
    );

    await browser.close();

    let teks = `${textoInfo}\n`
    for (const result of results) {
    global.db.data.chats[m.chat].livraria[m.sender].titulo.push(result.title);
    global.db.data.chats[m.chat].livraria[m.sender].id.push(results.indexOf(result)
    +1 );
      global.db.data.chats[m.chat].livraria[m.sender].links.push(result.link);
    
      teks += `*❲${results.indexOf(result) +1 }❳*  _${result.title}_
༺═────────────═༻
`;
    }

    // Send the message to the chat
    // Replace with your own implementation
  let message = await conn.sendFile(m.chat, imgLivraria.getRandom(),
  'error.png',teks , m)
  
  global.db.data.chats[m.chat].livraria[m.sender].messageID = message.key 
  
  
  m.react("📖")
    console.log(message);
  } catch (error) {
    console.error('Error occurred:', error);
  }
}

// Example usage
searchPdf(text);
  
  
} catch(e) {    
console.log(e)
await m.reply(`
 ━━━━━━━━━⬣『⚠』⬣━━━━━━━━ 
 
 🪶🕯️ 𝔈𝔯𝔯𝔬 𝔡𝔢 𝔠𝔬𝔫𝔢𝔵𝔞𝔬
𝔓𝔬𝔯 𝔣𝔞𝔳𝔬𝔯 𝔱𝔢𝔫𝔱𝔢 𝔫𝔬𝔳𝔞𝔪𝔢𝔫𝔱𝔢 𝔪𝔞𝔦𝔰 𝔱𝔞𝔯𝔡𝔢, 𝔪𝔦𝔫𝔥𝔞 𝔠𝔞𝔯𝔞 𝔞𝔩𝔪𝔞 𝔞𝔱𝔬𝔯𝔪𝔢𝔫𝔱𝔞𝔡𝔞

 ━━━━━━━⬣💿⬣━━━━━━━━
`)
} 
/*
console.log("📘📘📘📘📘")
console.log(result)
console.log("📘📘📘📘📘")
if(result.length==0) return m.reply(`╔═══.·:·.☽✧ ✦ ✧☾.·:·.═══╗
☆      *LIVRARIA USHER*      ☆
╚═══.·:·.☽✧ ✦ ✧☾.·:·.═══╝
╭────────────────────.....─╮
┃ ❓📚 𝑹𝒐𝒈𝒐 𝒑𝒆𝒓𝒅𝒂𝒐, 𝒎𝒂𝒔 𝒏𝒆𝒏𝒉𝒖𝒎 𝒆𝒙𝒆𝒎𝒑𝒍𝒂𝒓 𝒅𝒐 𝒍𝒊𝒗𝒓𝒐 𝒂𝒍𝒎𝒆𝒋𝒂𝒅𝒐 𝒇𝒐𝒊 𝒆𝒏𝒄𝒐𝒏𝒕𝒓𝒂𝒅𝒐 𝒆𝒎 𝒎𝒊𝒏𝒉𝒂 𝒍𝒊𝒗𝒓𝒂𝒓𝒊𝒂
╰─....⛦....────────────────────╯`)

const teks = result.map((v, i) => {
 
  global.db.data.chats[m.chat].livraria[m.sender].id.push(v.bookId);
  global.db.data.chats[m.chat].livraria[m.sender].titulo.push(v.title);
  global.db.data.chats[m.chat].livraria[m.sender].autores.push(v.authors);
  global.db.data.chats[m.chat].livraria[m.sender].editora.push(v.publisher);
  global.db.data.chats[m.chat].livraria[m.sender].paginas.push(v.pages);
  global.db.data.chats[m.chat].livraria[m.sender].ano.push(v.year);
  global.db.data.chats[m.chat].livraria[m.sender].imagem.push(v.imgUrl);

    
    
  return `───️⬣『${i+1}』
📖 *_${v.title}_*
─┅──────┅─
${v.authors}${v.publisher ?'\n⋆ '+ v.publisher: ''}

${v.pages} páginas ❖ _Ano_ ${v.year} 
`;
}).join('\n📙📗📘📔\n');

let message = await m.reply(textoInfo + '\n'+ teks + `\n╰─....⛦....────────────────────╯`)
global.db.data.chats[m.chat].livraria[m.sender].messageID = message.key
	
} catch (error) {
  m.react("❌")
	console.error(error);
}


/////////apiKey
/*
  try {
    const response = await fetch(apiUrl);
    const jsonData = await response.json();
let results = jsonData.results

const filteredResults = results.map(obj => {
  const { fullText, abstract, ...rest } = obj;
  return rest;
});

const formatDate = (isoDateString) => {
  const options = { day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric', hour12: false };
  const date = new Date(isoDateString);
  return date.toLocaleString('pt-BR', options);
};
  // Extract the first 10 objects from the results array and remove 'fulltext' and 'abstract' keys

  
  console.log(global.db.data.chats[m.chat].livraria[m.sender])
  } catch (error) {
    console.error('Erro:', error);
    // Handle the error appropriately
  }
*/
}

handler.command = ['livraria']
handler.level =10
export default handler;
const getRandom = (ext) => { 
    return `${Math.floor(Math.random() * 10000)}${ext}`;
}