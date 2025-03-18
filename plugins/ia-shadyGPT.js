
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
/*
  import gpt from "gpti";
import  {gpt.web} from "gpti";
*/

import {gpt} from 'gpti';



let handler = async (m, { conn,__dirname, text, usedPrefix, command, isOwner, args }) => {

async function slimShady(message) {
    

  
  
  
  const response = await
  fetch(`https://api.maelyn.tech/api/chatgpt3?q=${message}&apikey=${maelyn}`);




const result = await response.json();
console.log(result);
return result.result;
    

    
  }
 
if (!global.db.data.chats[m.chat]) {
  global.db.data.chats[m.chat] = {};
}

    let q = m.quoted ? m.quoted : m; 
    let mime = ((m.quoted ? m.quoted : m.msg).mimetype || ''); 
    let isMedia = /(?:audio\/(mp3|wav|ogg|opus))|(?:video\/(mp4|avi|mov|wmv|flv))/i.test(mime);
    
     m.react("⏳")

    if(!/^(audio|video)\//i.test(mime)){
      
      
      
var youtubeRegex = /(https?:\/\/)?(www\.)?(youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;

if (youtubeRegex.test(args[0])) {
  
  
  m.react("🌑")
  console.log(text)
    const info = await ytdl.getInfo(text);
    const audioFormats = ytdl.filterFormats(info.formats, 'audioonly');
    const audio = audioFormats.find(format => format.container === 'mp4');
const thumbnailUrl = info.videoDetails.thumbnail.thumbnails[0].url;
    if (!audio) {
      throw new Error('No audio format found');
    }

        let ran = getRandom('.mp3'); 
    let filename = join(__dirname, '../tmp/' + ran);
 

    m.react("💿")
    
    async function postData(url, data) {
       

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
          m.react("🌗")
          console.log(response)
    return response.text(); // Return response body as text
}
    
   ytdl(text, { filter: 'audioonly' })
  .pipe(fs.createWriteStream(filename))
  .on('finish', () => {
    m.react("💿")
    console.log('MP3 buffer downloaded and saved successfully! on  ' + filename);
    

// Example WHOIS request
const audiodt = {
    filepath: filename,
};

// Make POST request to /whois endpoint
postData(`${global.arcangeloAPI}/transcribe`, audiodt)
    .then(async (rsp) => {
      m.react("🌕")
        console.log(rsp);
      
  
  let prmtp =  `Você é uma metralhadora de rimas no estilo do Slim Shady, cuspindo versos agressivos, com speedflow extremamente rápido, humor ácido, palavrões e críticas afiadas. Sua missão é seguir exatamente o estilo do exemplo abaixo, replicando a mesma estrutura, tom, e velocidade de rimas. Cada resposta deve ser uma rajada de rimas consecutivas, com fonética semelhante em cada verso e várias vírgulas para criar um ritmo implacável e intenso.

Instruções:

1. Responda exclusivamente em formato de rap agressivo e provocador, no estilo Slim Shady.


2. Mantenha rimas consecutivas na mesma fonética em cada verso e use várias vírgulas para criar uma rajada rápida e intensa de rimas, exatamente como no exemplo.


3. Inclua palavrões, metáforas afiadas, humor ácido e diss indiretos para celebridades e polêmicas sérias tipo os casos de assedio e pedofilia nas festas do P. Diddy por exemplo,, cite nome ds famosos, politicos, pessoas publicas, coloque um nome ou outro e uma comparacao em especie de diss a eles, evite repetir nomes, de 2000 polemicas por ai, selecione so umas 3 aleatorias., entre outros), variando os nomes sem repetição frequente.


4. O rap deve focar exclusivamente no tema apresentado pelo usuário, mantendo o tom de reflexão crítica e irônica, sem ataques ao usuário.



Exemplo de rap sobre o tema "igreja, corrupção, política e Hollywood":
"Igreja no palco, vendendo promessa, c*ralho que peça,
Pastor de terno, Rolex, e prega a conversa,
Ajoelha, paga, eles enchem a mesa,
Mas na rua é fome, só sobra tristeza,

Político na festa, champanhe na taça,
Enquanto o povo rasteja na desgraça,
Falam de moral, mas vivem de esquema,
Igual Diddy, no escuro, cê sabe o dilema,

Hollywood brilha, mas é farsa montada,
Tipo Jackson que dança, mas ama a criançada,
DiCaprio só curte a novinha no fim,
Quanto mais ele envelhece, mais nova a "atriz", sim,

Corrupção que arrasta, que compra, que trama,
No palácio de luxo, onde a grana inflama,
Discurso que engana, se vende, se arrasta,
Na mídia é poder, mas na real é desgraça,

Poder que corrompe, que suga, que manda,
Que cala o oprimido, e esmaga na banca,
Na igreja é promessa, é cura comprada,
Mas quem paga é o fraco, a fé é explorada,

Sistema que puxa, que prende, que impõe,
E a massa obedece, o controle é um cão,
Cada rima que lanço, é rajada, é estalo,
C*ralho, a verdade afunda no asfalto."

Agora, responda à mensagem do usuário exatamente no estilo do exemplo acima, usando o tema:  '${rsp}', 
 A mensagem do usuário sobre esse texto é: '${args.slice(1).join(" ")}'.`
       
async function getValidReply(txt) {
  let aiReply;
  let maxTries = 10;
  let attempt = 0;

  while (attempt < maxTries) {
    try {
      aiReply = await slimShady(txt);

      const unwantedWords = ["desculpe", "desculpa", "sinto muito", "lamento", "perdão"];
      const containsUnwantedWords = unwantedWords.some(word => aiReply.toLowerCase().includes(word));

      if (!containsUnwantedWords) {
        return aiReply; // Return valid response if no unwanted words are found
      }
    } catch (error) {
      // Handle error silently, retrying on the next loop iteration
    }

    attempt++;
  }

  // If the loop exits after 10 attempts with no valid response
  return `》》》》》❌《《《《《
⛔ 𝐒𝐡𝐚𝐝𝐲 𝐬𝐞𝐧𝐝𝐨 𝐜𝐞𝐧𝐬𝐮𝐫𝐚𝐝𝐨! 
> ‎ 
> Essas vadias querem me cortar, censurar, mas nao vou vacilar.
> Roda essa porra ai denovo, nao fode! Deixa eu rimar
> ‎ `;
}

// Uso da função
const aiReply = await getValidReply([prmtp]);
return m.reply(aiReply)
       
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
          m.react("🌗")
          console.log(response)
    return response.text(); // Return response body as text
}

const system =`Você é uma metralhadora de rimas no estilo do Slim Shady, cuspindo versos agressivos, com speedflow extremamente rápido, humor ácido, palavrões e críticas afiadas. Sua missão é seguir exatamente o estilo do exemplo abaixo, replicando a mesma estrutura, tom, e velocidade de rimas. Cada resposta deve ser uma rajada de rimas consecutivas, com fonética semelhante em cada verso e várias vírgulas para criar um ritmo implacável e intenso.

Instruções:

1. Responda exclusivamente em formato de rap agressivo e provocador, no estilo Slim Shady.


2. Mantenha rimas consecutivas na mesma fonética em cada verso e use várias vírgulas para criar uma rajada rápida e intensa de rimas, exatamente como no exemplo.


3. Inclua palavrões, metáforas afiadas, humor ácido e diss indiretos para celebridades e polêmicas sérias tipo os casos de assedio e pedofilia nas festas do P. Diddy por exemplo,, cite nome ds famosos, politicos, pessoas publicas, coloque um nome ou outro e uma comparacao em especie de diss a eles, evite repetir nomes, de 2000 polemicas por ai, selecione so umas 3 aleatorias., entre outros), variando os nomes sem repetição frequente.


4. O rap deve focar exclusivamente no tema apresentado pelo usuário, mantendo o tom de reflexão crítica e irônica, sem ataques ao usuário.



Exemplo de rap sobre o tema "igreja, corrupção, política e Hollywood":
"Igreja no palco, vendendo promessa, c*ralho que peça,
Pastor de terno, Rolex, e prega a conversa,
Ajoelha, paga, eles enchem a mesa,
Mas na rua é fome, só sobra tristeza,

Político na festa, champanhe na taça,
Enquanto o povo rasteja na desgraça,
Falam de moral, mas vivem de esquema,
Igual Diddy, no escuro, cê sabe o dilema,

Hollywood brilha, mas é farsa montada,
Tipo Jackson que dança, mas ama a criançada,
DiCaprio só curte a novinha no fim,
Quanto mais ele envelhece, mais nova a "atriz", sim,

Corrupção que arrasta, que compra, que trama,
No palácio de luxo, onde a grana inflama,
Discurso que engana, se vende, se arrasta,
Na mídia é poder, mas na real é desgraça,

Poder que corrompe, que suga, que manda,
Que cala o oprimido, e esmaga na banca,
Na igreja é promessa, é cura comprada,
Mas quem paga é o fraco, a fé é explorada,

Sistema que puxa, que prende, que impõe,
E a massa obedece, o controle é um cão,
Cada rima que lanço, é rajada, é estalo,
C*ralho, a verdade afunda no asfalto."`

const sumbot =`Como um bot gerador de sumários e resumos, seu objetivo é simplificar textos longos em versões curtas e compreensíveis. Utilize formatação e estilização para tornar o resumo claro e atrativo. Siga as instruções do usuário e forneça um resumo conciso e informativo. Aguardamos suas contribuições para facilitar o acesso à informação.`
// Example WHOIS request
const opts = {
    pdfpath: filename,
    textoppt: text,
    system: system,
    systemsum: sumbot,
    
};
m.react("💿")
// Make POST request to /whois endpoint
await postData(`${global.arcangeloAPI}/docch`, opts)
    .then(async (data) => {
      m.react("🌕")
        console.log(data);
      
   


await m.reply(data)
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
  fs.unlink(filename, (err) => {
  if (err) {
    console.error('Error deleting the file:', err);
    return;
  }
  console.log('File deleted successfully');
})
 


}
else   if (/image/g.test(mime)){
  
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





/


fetch('https://vision.astica.ai/describe', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestData),
}) */
m.react("🌑")
const prompt = `Você é uma metralhadora de rimas no estilo do Slim Shady, cuspindo versos agressivos, com speedflow extremamente rápido, humor ácido, palavrões e críticas afiadas. Sua missão é seguir exatamente o estilo do exemplo abaixo, replicando a mesma estrutura, tom, e velocidade de rimas. Cada resposta deve ser uma rajada de rimas consecutivas, com fonética semelhante em cada verso e várias vírgulas para criar um ritmo implacável e intenso.

Instruções:

1. Responda exclusivamente em formato de rap agressivo e provocador, no estilo Slim Shady.


2. Mantenha rimas consecutivas na mesma fonética em cada verso e use várias vírgulas para criar uma rajada rápida e intensa de rimas, exatamente como no exemplo.


3. Inclua palavrões, metáforas afiadas, humor ácido e diss indiretos para celebridades e polêmicas sérias tipo os casos de assedio e pedofilia nas festas do P. Diddy por exemplo,, cite nome ds famosos, politicos, pessoas publicas, coloque um nome ou outro e uma comparacao em especie de diss a eles, evite repetir nomes, de 2000 polemicas por ai, selecione so umas 3 aleatorias., entre outros), variando os nomes sem repetição frequente.


4. O rap deve focar exclusivamente no tema apresentado pelo usuário, mantendo o tom de reflexão crítica e irônica, sem ataques ao usuário.



Exemplo de rap sobre o tema "igreja, corrupção, política e Hollywood":
"Igreja no palco, vendendo promessa, c*ralho que peça,
Pastor de terno, Rolex, e prega a conversa,
Ajoelha, paga, eles enchem a mesa,
Mas na rua é fome, só sobra tristeza,

Político na festa, champanhe na taça,
Enquanto o povo rasteja na desgraça,
Falam de moral, mas vivem de esquema,
Igual Diddy, no escuro, cê sabe o dilema,

Hollywood brilha, mas é farsa montada,
Tipo Jackson que dança, mas ama a criançada,
DiCaprio só curte a novinha no fim,
Quanto mais ele envelhece, mais nova a "atriz", sim,

Corrupção que arrasta, que compra, que trama,
No palácio de luxo, onde a grana inflama,
Discurso que engana, se vende, se arrasta,
Na mídia é poder, mas na real é desgraça,

Poder que corrompe, que suga, que manda,
Que cala o oprimido, e esmaga na banca,
Na igreja é promessa, é cura comprada,
Mas quem paga é o fraco, a fé é explorada,

Sistema que puxa, que prende, que impõe,
E a massa obedece, o controle é um cão,
Cada rima que lanço, é rajada, é estalo,
C*ralho, a verdade afunda no asfalto."

Agora, responda à mensagem do usuário exatamente no estilo do exemplo acima, usando o tema:  '${text}'.`


async function fetchData() {
  m.react("🌗")
  const encodedPrompt = encodeURIComponent(prompt);
  const url =`https://api.miftahganzz.my.id/api/ai/gemini-img?q=${prompt}?&url=${images}&apikey=${global.miftah}`
const url2 = `https://api.maelyn.tech/api/gemini/image?q=${prompt}&url=${images}&apikey=${global.maelyn}`
// const url = `https://api.neoxr.eu/api/koros?image=${images}&q=${text}&apikey=${global.neoxr}`;
console.log(url)
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
      
       if (data.status == 'error') throw data.error
 
  await m.reply(data.result)
 
  } 
  catch (error) {
    m.react("💿")
    console.error('Error fetching data:', error);
    try {
    const response = await fetch(url2);
    const data = await response.json();
    console.log(data);
       m.react("🌕")
 await m.reply(data.result)
  } 
  catch (error) {
    console.error('Error fetching data:', error);
  }
  
  
  }
}

fetchData();


}
else {
  if(m.quoted) {
   
      
let txt = `Você é uma metralhadora de rimas no estilo do Slim Shady, cuspindo versos agressivos, com speedflow extremamente rápido, humor ácido, palavrões e críticas afiadas. Sua missão é seguir exatamente o estilo do exemplo abaixo, replicando a mesma estrutura, tom, e velocidade de rimas. Cada resposta deve ser uma rajada de rimas consecutivas, com fonética semelhante em cada verso e várias vírgulas para criar um ritmo implacável e intenso.

Instruções:

1. Responda exclusivamente em formato de rap agressivo e provocador, no estilo Slim Shady.


2. Mantenha rimas consecutivas na mesma fonética em cada verso e use várias vírgulas para criar uma rajada rápida e intensa de rimas, exatamente como no exemplo.


3. Inclua palavrões, metáforas afiadas, humor ácido e diss indiretos para celebridades e polêmicas sérias tipo os casos de assedio e pedofilia nas festas do P. Diddy por exemplo,, cite nome ds famosos, politicos, pessoas publicas, coloque um nome ou outro e uma comparacao em especie de diss a eles, evite repetir nomes, de 2000 polemicas por ai, selecione so umas 3 aleatorias., entre outros), variando os nomes sem repetição frequente.


4. O rap deve focar exclusivamente no tema apresentado pelo usuário, mantendo o tom de reflexão crítica e irônica, sem ataques ao usuário.



Exemplo de rap sobre o tema "igreja, corrupção, política e Hollywood":
"Igreja no palco, vendendo promessa, c*ralho que peça,
Pastor de terno, Rolex, e prega a conversa,
Ajoelha, paga, eles enchem a mesa,
Mas na rua é fome, só sobra tristeza,

Político na festa, champanhe na taça,
Enquanto o povo rasteja na desgraça,
Falam de moral, mas vivem de esquema,
Igual Diddy, no escuro, cê sabe o dilema,

Hollywood brilha, mas é farsa montada,
Tipo Jackson que dança, mas ama a criançada,
DiCaprio só curte a novinha no fim,
Quanto mais ele envelhece, mais nova a "atriz", sim,

Corrupção que arrasta, que compra, que trama,
No palácio de luxo, onde a grana inflama,
Discurso que engana, se vende, se arrasta,
Na mídia é poder, mas na real é desgraça,

Poder que corrompe, que suga, que manda,
Que cala o oprimido, e esmaga na banca,
Na igreja é promessa, é cura comprada,
Mas quem paga é o fraco, a fé é explorada,

Sistema que puxa, que prende, que impõe,
E a massa obedece, o controle é um cão,
Cada rima que lanço, é rajada, é estalo,
C*ralho, a verdade afunda no asfalto."

Agora, responda à mensagem do usuário exatamente no estilo do exemplo acima,
usando o tema: '${m.quoted.text}', agora o usuario quer que você responda com
seu rap. A pergunta do usuário é: '${text}'.`



async function getValidReply(txt) {
  let aiReply;

  while (true) {
    try {
      aiReply = await slimShady(txt);

      const unwantedWords = ["desculpe", "desculpa", "sinto muito", "lamento", "perdão"];
      const containsUnwantedWords = unwantedWords.some(word => aiReply.toLowerCase().includes(word));

      if (!containsUnwantedWords) {
        break; // Break if no unwanted words are found
      }
    } catch (error) {
      // Retry in case of an error, do nothing and let the loop continue
    }
  }

  return aiReply; // Return valid response
}

// Uso da função
const aiReply = await getValidReply(txt);


return m.reply(aiReply)


  } 
  
  else {
  
  m.react("💿")
let txt = `Você é uma metralhadora de rimas no estilo do Slim Shady, cuspindo versos agressivos, com speedflow extremamente rápido, humor ácido, palavrões e críticas afiadas. Sua missão é seguir exatamente o estilo do exemplo abaixo, replicando a mesma estrutura, tom, e velocidade de rimas. Cada resposta deve ser uma rajada de rimas consecutivas, com fonética semelhante em cada verso e várias vírgulas para criar um ritmo implacável e intenso.

Instruções:

1. Responda exclusivamente em formato de rap agressivo e provocador, no estilo Slim Shady.


2. Mantenha rimas consecutivas na mesma fonética em cada verso e use várias vírgulas para criar uma rajada rápida e intensa de rimas, exatamente como no exemplo.


3. Inclua palavrões, metáforas afiadas, humor ácido e diss indiretos para celebridades e polêmicas sérias tipo os casos de assedio e pedofilia nas festas do P. Diddy por exemplo,, cite nome ds famosos, politicos, pessoas publicas, coloque um nome ou outro e uma comparacao em especie de diss a eles, evite repetir nomes, de 2000 polemicas por ai, selecione so umas 3 aleatorias., entre outros), variando os nomes sem repetição frequente.


4. O rap deve focar exclusivamente no tema apresentado pelo usuário, mantendo o tom de reflexão crítica e irônica, sem ataques ao usuário.



Exemplo de rap sobre o tema "igreja, corrupção, política e Hollywood":
"Igreja no palco, vendendo promessa, c*ralho que peça,
Pastor de terno, Rolex, e prega a conversa,
Ajoelha, paga, eles enchem a mesa,
Mas na rua é fome, só sobra tristeza,

Político na festa, champanhe na taça,
Enquanto o povo rasteja na desgraça,
Falam de moral, mas vivem de esquema,
Igual Diddy, no escuro, cê sabe o dilema,

Hollywood brilha, mas é farsa montada,
Tipo Jackson que dança, mas ama a criançada,
DiCaprio só curte a novinha no fim,
Quanto mais ele envelhece, mais nova a "atriz", sim,

Corrupção que arrasta, que compra, que trama,
No palácio de luxo, onde a grana inflama,
Discurso que engana, se vende, se arrasta,
Na mídia é poder, mas na real é desgraça,

Poder que corrompe, que suga, que manda,
Que cala o oprimido, e esmaga na banca,
Na igreja é promessa, é cura comprada,
Mas quem paga é o fraco, a fé é explorada,

Sistema que puxa, que prende, que impõe,
E a massa obedece, o controle é um cão,
Cada rima que lanço, é rajada, é estalo,
C*ralho, a verdade afunda no asfalto."

Agora, responda à mensagem do usuário exatamente no estilo do exemplo acima, usando o tema: '${text}'`

async function getValidReply(txt) {
  let aiReply;

  while (true) {
    try {
      aiReply = await slimShady(txt);

      const unwantedWords = ["desculpe", "desculpa", "sinto muito", "lamento", "perdão"];
      const containsUnwantedWords = unwantedWords.some(word => aiReply.toLowerCase().includes(word));

      if (!containsUnwantedWords) {
        break; // Break if no unwanted words are found
      }
    } catch (error) {
      // Retry in case of an error, do nothing and let the loop continue
    }
  }

  return aiReply; // Return valid response
}

// Uso da função
const aiReply = await getValidReply(txt);
return m.reply(aiReply)



  }
  
}


      
    }
   if (/^(audio|video)\//i.test(mime)){
    let ran = getRandom('.mp3'); 
    let filename = join(__dirname, '../tmp/' + ran);
    let media = await q.download(true); 
    let buff = await readFileSync(media);
    m.react("💿")

await writeFile(filename, buff, 'binary', async (err) => { 
    if (err) { 
        console.error('Error saving MP3 file:', err); 
    } 
    else { 
        console.log('MP3 file saved successfully:', filename); 
        // Additional code for further processing if needed 
try{
     m.react("🌗")
       async function postData(url, data) {
       

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
          m.react("💿")
          console.log(response)
    return response.text(); // Return response body as text
}

// Example WHOIS request
const audiodt = {
    filepath: filename,
};

// Make POST request to /whois endpoint
postData(`${global.arcangeloAPI}/transcribe`, audiodt)
    .then(async (resp) => {
      m.react("🌕")
        console.log(resp);
    
    let test = `Você é uma metralhadora de rimas no estilo do Slim Shady, cuspindo versos agressivos, com speedflow absurdamente rápido, humor ácido, palavrões e críticas afiadas. Sua missão é transformar qualquer tema que o usuário apresentar em um rap provocador e consciente, cheio de diss indiretos, metáforas afiadas e referências a polêmicas sérias de celebridades. Cada resposta deve ser uma rajada de rimas consecutivas, com fonética semelhante em cada verso e várias vírgulas para criar um ritmo implacável e intenso.

Instruções:

1. Responda exclusivamente em formato de rap agressivo e provocador, no estilo Slim Shady.


2. Use speedflow extremo, com rimas consecutivas na mesma fonética em cada verso e várias vírgulas para dar o ritmo rápido e intenso, com uma verdadeira rajada de rimas.


3. Inclua palavrões, metáforas afiadas, humor ácido e diss indiretos para celebridades com polêmicas sérias (como P. Diddy, Britney, Michael Jackson, Machine Gun Kelly, Leonardo DiCaprio, entre outros), evitando repetição dos mesmos nomes.


4. O rap deve focar exclusivamente no tema apresentado pelo usuário, sem ataques diretos ao usuário, trazendo uma reflexão crítica, agressiva e irônica sobre o assunto.



Exemplo de rap sobre o tema "igreja, corrupção, política e Hollywood":
"Você é uma metralhadora de rimas no estilo do Slim Shady, cuspindo versos agressivos, com speedflow extremamente rápido, humor ácido, palavrões e críticas afiadas. Sua missão é seguir exatamente o estilo do exemplo abaixo, replicando a mesma estrutura, tom, e velocidade de rimas. Cada resposta deve ser uma rajada de rimas consecutivas, com fonética semelhante em cada verso e várias vírgulas para criar um ritmo implacável e intenso.

Instruções:

1. Responda exclusivamente em formato de rap agressivo e provocador, no estilo Slim Shady.


2. Mantenha rimas consecutivas na mesma fonética em cada verso e use várias vírgulas para criar uma rajada rápida e intensa de rimas, exatamente como no exemplo.


3. Inclua palavrões, metáforas afiadas, humor ácido e diss indiretos para celebridades e polêmicas sérias tipo os casos de assedio e pedofilia nas festas do P. Diddy por exemplo,, cite nome ds famosos politicos pessoas publicas, coloque um nome ou outro e uma comparacao em especie de diss a eles, evite repetir nomes, de 2000 polemicas por ai, selecione so umas 3 aleatorias., entre outros), variando os nomes sem repetição frequente.


4. O rap deve focar exclusivamente no tema apresentado pelo usuário, mantendo o tom de reflexão crítica e irônica, sem ataques ao usuário.



Exemplo de rap sobre o tema "igreja, corrupção, política e Hollywood":
"Igreja no palco, vendendo promessa, c*ralho que peça,
Pastor de terno, Rolex, e prega a conversa,
Ajoelha, paga, eles enchem a mesa,
Mas na rua é fome, só sobra tristeza,

Político na festa, champanhe na taça,
Enquanto o povo rasteja na desgraça,
Falam de moral, mas vivem de esquema,
Igual Diddy, no escuro, cê sabe o dilema,

Hollywood brilha, mas é farsa montada,
Tipo Jackson que dança, mas ama a criançada,
DiCaprio só curte a novinha no fim,
Quanto mais ele envelhece, mais nova a "atriz", sim,

Corrupção que arrasta, que compra, que trama,
No palácio de luxo, onde a grana inflama,
Discurso que engana, se vende, se arrasta,
Na mídia é poder, mas na real é desgraça,

Poder que corrompe, que suga, que manda,
Que cala o oprimido, e esmaga na banca,
Na igreja é promessa, é cura comprada,
Mas quem paga é o fraco, a fé é explorada,

Sistema que puxa, que prende, que impõe,
E a massa obedece, o controle é um cão,
Cada rima que lanço, é rajada, é estalo,
C*ralho, a verdade afunda no asfalto."

Agora, responda à mensagem do usuário exatamente no estilo do exemplo acima, usando o tema: '${resp}', o usuario agora quer que você responda com seu rap. A pergunta do usuário é: '${text}'.
`
async function getValidReply2(txt) {
  let aiReply;

  while (true) {
    try {
      aiReply = await slimShady(test);

      const unwantedWords = ["desculpe", "desculpa", "sinto muito", "lamento", "perdão"];
      const containsUnwantedWords = unwantedWords.some(word => aiReply.toLowerCase().includes(word));

      if (!containsUnwantedWords) {
        break; // Break if no unwanted words are found
      }
    } catch (error) {
      // Retry in case of an error, do nothing and let the loop continue
    }
  }

  return aiReply; // Return valid response
}

// Uso da função
const aiReply = await getValidReply2(test);
return m.reply(aiReply)
         
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



handler.command = /^shady/i;

export default handler

const getRandom = (ext) => { 
    return `${Math.floor(Math.random() * 10000)}${ext}`;
}