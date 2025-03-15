
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────


//or
import fs from 'fs'
import ytdl from 'ytdl-core';

 import FormData from "form-data"; 
import fetch from "node-fetch"; 
import pdf from 'pdf-parse'
import request from 'request'
import uploadFile from '../lib/uploadFile.js'; 
import uploadImage from '../lib/uploadImage.js'; 
import { unlinkSync, readFileSync, writeFile } from 'fs'; 
import { join } from 'path'; 
import { exec } from 'child_process'; 
import { promisify } from 'util'; 
import ffmpeg from 'fluent-ffmpeg';

 // import gpt  from "gpti";
//import gpt.web  from "gpti";
import {gpt} from 'gpti';

let handler = async (m, { conn,__dirname, text, usedPrefix, command, isOwner, args }) => {

    let q = m.quoted ? m.quoted : m; 
    let mime = ((m.quoted ? m.quoted : m.msg).mimetype || ''); 
    let isMedia = /(?:audio\/(mp3|wav|ogg|opus))|(?:video\/(mp4|avi|mov|wmv|flv))/i.test(mime);
    
    let txtedgar = [`https://telegra.ph/file/03e1230ee83342e4bacaa.jpg`,
    
    `https://telegra.ph/file/8f2c969d0c7202526b9a9.jpg`,
    `https://telegra.ph/file/541437153ebbb68c3fbf7.jpg`,
    `https://telegra.ph/file/8a7cc1ff2bc1d8627f689.jpg`,
    `https://telegra.ph/file/9c698cdb85ff8b50d9a35.jpg`
    
    ]
    
    if(!/^(audio|video)\//i.test(mime)){
      
      
      
var youtubeRegex = /(https?:\/\/)?(www\.)?(youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;

if (youtubeRegex.test(args[0])) {
  
  
  m.react("⏳")
  
  
    const info = await ytdl.getInfo(text);
    const audioFormats = ytdl.filterFormats(info.formats, 'audioonly');
    const audio = audioFormats.find(format => format.container === 'mp4');
const thumbnailUrl = info.videoDetails.thumbnail.thumbnails[0].url;
    if (!audio) {
      throw new Error('No audio format found');
    }

        let ran = getRandom('.mp3'); 
    let filename = join(__dirname, '../tmp/' + ran);
 

    
    
    async function postData(url, data) {
       

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
          m.react("🪶")
          console.log(response)
    return response.text(); // Return response body as text
}
    
   ytdl(text, { filter: 'audioonly' })
  .pipe(fs.createWriteStream(filename))
  .on('finish', () => {
    console.log('MP3 buffer downloaded and saved successfully! on  ' + filename);
    

// Example WHOIS request
const audiodt = {
    filepath: filename,
};

// Make POST request to /whois endpoint
postData(`${global.arcangeloAPI}/transcribe`, audiodt)
    .then(async (response) => {
      m.react("✒️")
        console.log(response);
      
       
       
       gpt.web({
    prompt: `Resuma e sumarize o conteúdo a seguir ignorando possíveis erros gramáticas ou desconexos. Aborde e sumarize todo o conteúdo de forma pratica e didática, apresente palavras-chaves e pontos importantes. 
    Eis o conteudo: "${response}"`,
    markdown: false
}, async (err, data) => {
    if(err != null){
        console.log(err);
        m.react("💀")
    } 
    else {
        console.log(data);
        let aiReply =  data.gpt
        await conn.sendMessage(m.chat, {react: {
        text: "📃", // use an empty string to remove the reaction
        key: m.key}
    },
    m  )
let message = await  conn.sendFile(m.chat, txtedgar.getRandom(), 'edgar.jpg', data.gpt, m)


global.db.data.chats[m.chat].bard["config"].lastQuestion = message.key
 
 global.db.data.chats[m.chat].bard["config"].resposta = aiReply
 
 
    }
});
       
       
       
       
       
       
       
    })
    .catch(async (error) => {
      await m.reply(`𝙴𝚛𝚛𝚘 𝚗𝚘 𝚙𝚛𝚘𝚌𝚎𝚜𝚜𝚘 ❌`)
        console.error('Error:', error);
    });
    
  })
  .on('error', (err) => {
    console.error('Error downloading MP3 buffer:', err);
  });
    
  


  
} // fim is url

//fim nao e midia
else if(/(?:text\/(plain|html|xml|csv|rtf))|(?:application\/(pdf|doc|docx|ppt|pptx|xlsx|xls|odt))/i.test(mime)) {
  
  
 
let ran = getRandom('.pdf'); 
    let filename = join(__dirname, '../pdfs/' + ran);
    let tmpfold = join(__dirname, '../pdfs/')
    console.log(tmpfold)
    let media = await q.download(true); 
    let buff = await readFileSync(media);
    m.react("🌑")

await writeFile(filename, buff, 'binary', async (err) => { 
    if (err) { 
        console.error('Error saving pdf file:', err); 
        m.react("❌")
    } 
    else { 
        console.log('pdf file saved successfully:', filename); 
    
       m.react("💿")
    
try{
     
       async function postData(url, data) {
       

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
          
          console.log(response)
    return response.text(); // Return response body as text
}

// Example WHOIS request
const opts = {
    pdfpath: filename,
};

// Make POST request to /whois endpoint
await postData(`${global.arcangeloAPI}/pdf`, opts)
    .then(async (data) => {
   await   m.react("📖")
        
    

let aiReply = data
await m.react("✔️")
let messagem =  `     𝑺𝒖𝒎𝒂𝒓𝒊𝒐 ⌬

${aiReply}`

console.log(aiReply)
let messages = await  conn.sendFile(m.chat, 'https://telegra.ph/file/ac4d9630c3ef8bbcf926b.png', 'edgar.jpg', messagem, m)

global.db.data.chats[m.chat].bard["config"].lastQuestion = messages.key
 
 global.db.data.chats[m.chat].bard["config"].resposta = aiReply
 
 
   await fs.unlink(filename, (err) => {
  if (err) {
    console.error('Error deleting the file:', err);
    return;
  }
  console.log('File deleted successfully');
})
    })
    .catch(async (error) => {
      await m.reply(`𝙴𝚛𝚛𝚘 𝚗𝚘 𝚙𝚛𝚘𝚌𝚎𝚜𝚜𝚘 ❌`)
        console.error('Error:', error);
    });
   }
   catch(e){
      await m.reply(`𝙴𝚛𝚛𝚘 𝚗𝚘 𝚙𝚛𝚘𝚌𝚎𝚜𝚜𝚘 ❌`)
     
     console.log(e)
   }
}
        
        
    


})

   


}
else if (/image/g.test(mime)){
  m.react("⏳")
const datab = await q.download?.();
const images = await uploadImage(datab);
console.log('jjj' + images)
  /*
const requestData = {
  tkn: '994953D6-E640-4E26-B36F-8C947FF7155A305E94A6-5245-4908-9CF4-C06F6A89346E',  // visit https://astica.ai
  modelVersion: '2.1_full', // 1.0_full, 2.0_full, or 2.1_full
  input: images,
  visionParams: '', // comma separated, defaults to all
  gpt_prompt: `Responda em português como um pesquisador cientifico: ${text}`, // only used if visionParams includes "gpt" or "gpt_detailed"
  prompt_length:100 // number of words in GPT response
};

fetch('https://vision.astica.ai/describe', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestData),
}) */


async function fetchData() {
    const url =`https://api.miftahganzz.my.id/api/ai/gemini-img?q=Fale detalhadamente sobre essa imagem, sumarize, explique ou resuma o conteúdo ou representação de forma didatica e clara?&url=${images}&apikey=${global.miftah}`
// const url = `https://api.neoxr.eu/api/koros?image=${images}&q=${text}&apikey=${global.neoxr}`;
console.log(url)
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
       m.react("✔️")
 let message = await  m.reply(data.result)
 
global.db.data.chats[m.chat].bard["config"].lastQuestion = message.key
 
 global.db.data.chats[m.chat].bard["config"].resposta = data.result
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchData();





}
else {
      m.react("❔")
      
  m.reply(`
╭───────────────⌬...─╮
       𝚂𝚞𝚖𝚊𝚛𝚒𝚣𝚊𝚌𝚊𝚘 𝚍𝚎 𝚖𝚒𝚍𝚒𝚊
╰─...⌬───────────────╯
╭──────────────────── ⛦...─╮
      𝐔𝐬𝐞 𝐞𝐬𝐭𝐚 𝐟𝐮𝐧𝐜𝐚𝐨 𝐩𝐚𝐫𝐚 𝐫𝐞𝐬𝐮𝐦𝐢𝐫 𝐞 
      𝐬𝐮𝐦𝐚𝐫𝐢𝐳𝐚𝐫 𝐜𝐨𝐧𝐭𝐞𝐮𝐝𝐨𝐬,𝐚𝐮𝐝𝐢𝐨𝐬 𝐞 𝐯𝐢𝐝𝐞𝐨𝐬 
      𝐈𝐧𝐬𝐢𝐫𝐚 𝐮𝐦 𝐥𝐢𝐧𝐤 𝐝𝐨 𝐲𝐨𝐮𝐭𝐮𝐛𝐞, 𝐞𝐧𝐯𝐢𝐞 𝐮𝐦 
      𝐚𝐫𝐪𝐮𝐢𝐯𝐨 𝐨𝐮 𝐦𝐚𝐫𝐪𝐮𝐞 𝐮𝐦𝐚 𝐦𝐞𝐧𝐬𝐚𝐠𝐞𝐦 
      𝐜𝐨𝐧𝐭𝐞𝐧𝐝𝐨 𝐮𝐦𝐚 𝐦𝐢𝐝𝐢𝐚
      𝐩𝐚𝐫𝐚 𝐩𝐫𝐨𝐜𝐞𝐬𝐬𝐚𝐫.
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ *.sum* https://youtube.com/watch?v=QWuIDvzHxqw
┃ *.sum* (marcando conteúdo, audio documento etc )
╰─...⌬────────────────────╯`)
}


      
    }
   if (/^(audio|video)\//i.test(mime)){
    let ran = getRandom('.mp3'); 
    let filename = join(__dirname, '../tmp/' + ran);
    let media = await q.download(true); 
    let buff = await readFileSync(media);
    m.react("⏳")

await writeFile(filename, buff, 'binary', async (err) => { 
    if (err) { 
        console.error('Error saving MP3 file:', err); 
    } 
    else { 
        console.log('MP3 file saved successfully:', filename); 
        // Additional code for further processing if needed 
try{
     
       async function postData(url, data) {
       

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
          
          console.log(data)
    return data.text(); // Return response body as text
}

// Example WHOIS request
const audiodt = {
    filepath: filename,
};

// Make POST request to /whois endpoint
postData(`${global.arcangeloAPI}/transcribe`, audiodt)
    .then(async (response) => {
      m.react("✔️")
        console.log(response);
      
       gpt.web({
    prompt: `Resuma e sumarize o conteúdo a seguir ignorando possíveis erros gramáticas ou desconexos. Aborde e sumarize todo o conteúdo de forma pratica e didática, apresente palavras-chaves e pontos importantes. 
    Eis o conteudo: "${response}"`,
    markdown: false
}, async (err, data) => {
    if(err != null){
        console.log(err);
        m.react("💀")
    } 
    else {
        console.log(data);
        let aiReply =  data.gpt
        await conn.sendMessage(m.chat, {react: {
        text: "📃", // use an empty string to remove the reaction
        key: m.key}
    },
    m  )
    
 let message = await  conn.sendFile(m.chat, txtedgar.getRandom(), 'edgar.jpg', data.gpt, m)
 
global.db.data.chats[m.chat].bard["config"].lastQuestion = message.key
 
 global.db.data.chats[m.chat].bard["config"].resposta = aiReply
 
 
    }
});
    })
    .catch(async (error) => {
      await m.reply(`𝙴𝚛𝚛𝚘 𝚗𝚘 𝚙𝚛𝚘𝚌𝚎𝚜𝚜𝚘 ❌`)
        console.error('Error:', error);
    });
    
    
    
   }
   catch(e){
      await m.reply(`𝙴𝚛𝚛𝚘 𝚗𝚘 𝚙𝚛𝚘𝚌𝚎𝚜𝚜𝚘 ❌`)
     
     console.log(e)
   }
}
        
        
    


})
  
  
  
    }
    
}


handler.level = 36
handler.command = ['sum']

export default handler

const getRandom = (ext) => { 
    return `${Math.floor(Math.random() * 10000)}${ext}`;
}