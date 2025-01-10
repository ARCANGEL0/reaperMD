
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

import fetch from 'node-fetch'
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
  
  
  
  
	const who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
	
	switch(command){
	  
	  case 'memes':
	    await m.reply(`━━━━━━━━⬣ 𝑴𝒆𝒎𝒆𝒔 ⬣━━━━━━━
	    
𝙻𝚒𝚜𝚝𝚊 𝚍𝚎 𝚖𝚎𝚖𝚎𝚜:
♱ .dumb *texto*
♱ .chase *texto | texto2*
♱ .uncanny *texto | texto2*
♱ .depre *texto | texto2*
♱ .chad *texto | texto2*
♱ .baby *texto | texto2*
♱ .busao *texto | texto2*
♱ .drake *texto | texto2*
♱ .doge *texto | texto2*
♱ .peter *texto | texto2*
♱ .escolhas *texto | texto2 | texto3*
♱ .brain *texto | texto2 | texto3*
♱ .festa *texto*
♱ .soviet *texto*
♱ .knives *texto*
♱ .cry *texto*
♱ .erro *texto*

━━━━━━━━━⬣⬣━━━━━━━━`)
	    break
	  case 'festa':
	    try{
  let [txt1, txt2] = text.split('|').map(item => item.trim());
  
    
    const apiUrl = 'https://api.imgflip.com/caption_image';
const templateId = '284929871';
const username = 'HenryArcangelo';
const password = 'cs215695';
const topText = txt1;
const bottomText = txt2;

const formData = new URLSearchParams();
formData.append('template_id', templateId);
formData.append('username', username);
formData.append('password', password);
formData.append('text0', txt1);
formData.append('font', "garamond");
formData.append('max-font-size', "25px");


fetch(apiUrl, {
  method: 'POST',
  body: formData,
})
  .then(response => response.json())
  .then( data => {
  
  console.log(data)
  
   conn.sendFile(m.chat, data.data.url, "error.jpg", "")
   
  }
  )
  .catch(error => console.error('Error:', error));
    
	    }
	    catch(e){
	      console.log(e)
	    }
	    break
	  case 'soviet':
	    try{
  let [txt1, txt2] = text.split('|').map(item => item.trim());
  
    
    const apiUrl = 'https://api.imgflip.com/caption_image';
const templateId = '249257686';
const username = 'HenryArcangelo';
const password = 'cs215695';
const topText = txt1;
const bottomText = txt2;

const formData = new URLSearchParams();
formData.append('template_id', templateId);
formData.append('username', username);
formData.append('password', password);
formData.append('text0', txt1);
formData.append('font', "garamond");
formData.append('max_font_size', 35);


fetch(apiUrl, {
  method: 'POST',
  body: formData,
})
  .then(response => response.json())
  .then( data => {
  
  console.log(data)
  
   conn.sendFile(m.chat, data.data.url, "error.jpg", "")
   
  }
  )
  .catch(error => console.error('Error:', error));
    
	    }
	    catch(e){
	      console.log(e)
	    }
	    break
	  
	  
	  
	  case 'uncanny':
	    try{
  let [txt1, txt2] = text.split('|').map(item => item.trim());
  
    
    const apiUrl = 'https://api.imgflip.com/caption_image';
const templateId = '318009221';
const username = 'HenryArcangelo';
const password = 'cs215695';
const topText = txt1;
const bottomText = txt2;

const formData = new URLSearchParams();
formData.append('template_id', templateId);
formData.append('username', username);
formData.append('password', password);
formData.append('text0', topText);
formData.append('text1', bottomText);
formData.append('max_font_size', 25);

fetch(apiUrl, {
  method: 'POST',
  body: formData,
})
  .then(response => response.json())
  .then( data => {
  
  console.log(data)
  
   conn.sendFile(m.chat, data.data.url, "error.jpg", "")
   
  }
  )
  .catch(error => console.error('Error:', error));
    
	    }
	    catch(e){
	      console.log(e)
	    }
	    break
	  
	  case 'chase':
	    try{
  let [txt1, txt2] = text.split('|').map(item => item.trim());
  
    
    const apiUrl = 'https://api.imgflip.com/caption_image';
const templateId = '160187182';
const username = 'HenryArcangelo';
const password = 'cs215695';
const topText = txt1;
const bottomText = txt2;

const formData = new URLSearchParams();
formData.append('template_id', templateId);
formData.append('username', username);
formData.append('password', password);
formData.append('text0', topText);
formData.append('text1', bottomText);
formData.append('max_font_size', 25);

fetch(apiUrl, {
  method: 'POST',
  body: formData,
})
  .then(response => response.json())
  .then( data => {
  
  console.log(data)
  
   conn.sendFile(m.chat, data.data.url, "error.jpg", "")
   
  }
  )
  .catch(error => console.error('Error:', error));
    
	    }
	    catch(e){
	      console.log(e)
	    }
	    break
	  case 'chad':
	    try{
  let [txt1, txt2] = text.split('|').map(item => item.trim());
  
    
    const apiUrl = 'https://api.imgflip.com/caption_image';
const templateId = '232844223';
const username = 'HenryArcangelo';
const password = 'cs215695';
const topText = txt1;
const bottomText = txt2;

const formData = new URLSearchParams();
formData.append('template_id', templateId);
formData.append('username', username);
formData.append('password', password);
formData.append('text0', topText);
formData.append('text1', bottomText);
formData.append('max_font_size', 35);

fetch(apiUrl, {
  method: 'POST',
  body: formData,
})
  .then(response => response.json())
  .then( data => {
  
  console.log(data)
  
   conn.sendFile(m.chat, data.data.url, "error.jpg", "")
   
  }
  )
  .catch(error => console.error('Error:', error));
    
	    }
	    catch(e){
	      console.log(e)
	    }
	    break
	  case 'escolhas':
	    try{
  let [txt1, txt2, txt3] = text.split('|').map(item => item.trim());
  
    
    const apiUrl = 'https://api.imgflip.com/caption_image';
const templateId = '309668311';
const username = 'HenryArcangelo';
const password = 'cs215695';

const boxx = [
   {
      "text": txt2,
     

      "color": "#ffffff",
      "outline_color": "transparent"
   },
   {
      "text":  txt3,
     
      "color": "#ffffff",
      "outline_color": "transparent"
   },
   {
      "text": txt1,
      

      "color": "#ffffff",
      "outline_color": "transparent"
   }
]
		

const formData = new URLSearchParams();
formData.append('password', password);
formData.append('username', username);
formData.append('template_id', templateId);
formData.append('text0', '');

boxx.forEach((box, index) => {
   formData.append(`boxes[${index}][text]`, box.text);
   formData.append(`boxes[${index}][color]`, box.color);
   formData.append(`boxes[${index}][outline_color]`, box.outline_color);
});

formData.append('max_font_size', 20);

fetch(apiUrl, {
  method: 'POST',
  body: formData,
})
  .then(response => response.json())
  .then( data => {
  
  console.log(data)
  
   conn.sendFile(m.chat, data.data.url, "error.jpg", "")
   
  }
  )
  .catch(error => console.error('Error:', error));
    
	    }
	    catch(e){
	      console.log(e)
	    }
	    break
	  case 'brain':
	    try{
  let [txt1, txt2, txt3] = text.split('|').map(item => item.trim());
  
    
    const apiUrl = 'https://api.imgflip.com/caption_image';
const templateId = '159807519';
const username = 'HenryArcangelo';
const password = 'cs215695';

const boxx = [
   {
      "text": txt1,
     

      "color": "#000000",
      "outline_color": "#ffffff"
   },
   {
      "text":  txt2,
     
      "color": "#000000",
      "outline_color": "#ffffff"
   },
   {
      "text": txt3,
      

      "color": "#000000",
      "outline_color": "#ffffff"
   }
]
		

const formData = new URLSearchParams();
formData.append('password', password);
formData.append('username', username);
formData.append('template_id', templateId);
formData.append('text0', '');

boxx.forEach((box, index) => {
   formData.append(`boxes[${index}][text]`, box.text);
   formData.append(`boxes[${index}][color]`, box.color);
   formData.append(`boxes[${index}][outline_color]`, box.outline_color);
});

formData.append('max_font_size', 20);

fetch(apiUrl, {
  method: 'POST',
  body: formData,
})
  .then(response => response.json())
  .then( data => {
  
  console.log(data)
  
   conn.sendFile(m.chat, data.data.url, "error.jpg", "")
   
  }
  )
  .catch(error => console.error('Error:', error));
    
	    }
	    catch(e){
	      console.log(e)
	    }
	    break
	    
	    
	  case 'doge':
	    try{
  let [txt1, txt2] = text.split('|').map(item => item.trim());
  
    
    const apiUrl = 'https://api.imgflip.com/caption_image';
const templateId = '247375501';
const username = 'HenryArcangelo';
const password = 'cs215695';
const topText = txt1;
const bottomText = txt2;

const formData = new URLSearchParams();
formData.append('template_id', templateId);
formData.append('username', username);
formData.append('password', password);
formData.append('text0', topText);
formData.append('text1', bottomText);

fetch(apiUrl, {
  method: 'POST',
  body: formData,
})
  .then(response => response.json())
  .then( data => {
  
  console.log(data)
  
   conn.sendFile(m.chat, data.data.url, "error.jpg", "")
   
  }
  )
  .catch(error => console.error('Error:', error));
    
	    }
	    catch(e){
	      console.log(e)
	    }
	    break
	    
	    
	    
	    
	  case 'drake':
	    try{
  let [txt1, txt2] = text.split('|').map(item => item.trim());
  
    
    const apiUrl = 'https://api.imgflip.com/caption_image';
const templateId = '181913649';
const username = 'HenryArcangelo';
const password = 'cs215695';
const topText = txt1;
const bottomText = txt2;

const formData = new URLSearchParams();
formData.append('template_id', templateId);
formData.append('username', username);
formData.append('password', password);
formData.append('text0', topText);
formData.append('text1', bottomText);

fetch(apiUrl, {
  method: 'POST',
  body: formData,
})
  .then(response => response.json())
  .then( data => {
  
  console.log(data)
  
   conn.sendFile(m.chat, data.data.url, "error.jpg", "")
   
  }
  )
  .catch(error => console.error('Error:', error));
    
	    }
	    catch(e){
	      console.log(e)
	    }
	    break
	  case 'busao':
	    try{
  let [txt1, txt2] = text.split('|').map(item => item.trim());
  
    
    const apiUrl = 'https://api.imgflip.com/caption_image';
const templateId = '355414628';
const username = 'HenryArcangelo';
const password = 'cs215695';
const topText = txt1;
const bottomText = txt2;

const formData = new URLSearchParams();
formData.append('template_id', templateId);
formData.append('username', username);
formData.append('password', password);
formData.append('text0', topText);
formData.append('text1', bottomText);

fetch(apiUrl, {
  method: 'POST',
  body: formData,
})
  .then(response => response.json())
  .then( data => {
  
  console.log(data)
  
   conn.sendFile(m.chat, data.data.url, "error.jpg", "")
   
  }
  )
  .catch(error => console.error('Error:', error));
    
	    }
	    catch(e){
	      console.log(e)
	    }
	    break
	  case 'erro':
	    try{
  let [txt1, txt2] = text.split('|').map(item => item.trim());
  
    
    const apiUrl = 'https://api.imgflip.com/caption_image';
const templateId = '261718528';
const username = 'HenryArcangelo';
const password = 'cs215695';
const data = [
  
   {
      "text": "ERRO!!",
 
      "color": "black",
      "outline_width": 0
   },
   {
      "text": txt1,
 
      "color": "black",
      "outline_width": 0
   }
]

const formData = new URLSearchParams();
formData.append('template_id', templateId);
formData.append('username', username);
formData.append('password', password);
formData.append('outline', "none");
formData.append('color', "black");
formData.append('max_font_size', 20);

data.forEach((box, index) => {
   formData.append(`boxes[${index}][text]`, box.text);
   formData.append(`boxes[${index}][color]`, box.color);
   formData.append(`boxes[${index}][outline_width]`, box.outline_width);
});
fetch(apiUrl, {
  method: 'POST',
  body: formData,
})
  .then(response => response.json())
  .then( data => {
  
  console.log(data)
  
   conn.sendFile(m.chat, data.data.url, "error.jpg", "")
   
  }
  )
  .catch(error => console.error('Error:', error));
    
	    }
	    catch(e){
	      console.log(e)
	    }
	    break
	    
	    
	    
	  case 'baby':
	    try{
  let [txt1, txt2] = text.split('|').map(item => item.trim());
  
    
    const apiUrl = 'https://api.imgflip.com/caption_image';
const templateId = '295216394';
const username = 'HenryArcangelo';
const password = 'cs215695';
const topText = txt1;
const bottomText = txt2;

const formData = new URLSearchParams();
formData.append('template_id', templateId);
formData.append('username', username);
formData.append('password', password);
formData.append('text0', topText);
formData.append('text1', bottomText);

fetch(apiUrl, {
  method: 'POST',
  body: formData,
})
  .then(response => response.json())
  .then( data => {
  
  console.log(data)
  
   conn.sendFile(m.chat, data.data.url, "error.jpg", "")
   
  }
  )
  .catch(error => console.error('Error:', error));
    
	    }
	    catch(e){
	      console.log(e)
	    }
	    break
	  case 'peter':
	    try{
  let [txt1, txt2] = text.split('|').map(item => item.trim());
  
    
    const apiUrl = 'https://api.imgflip.com/caption_image';
const templateId = '153355886';
const username = 'HenryArcangelo';
const password = 'cs215695';
const topText = txt1;
const bottomText = txt2;

const formData = new URLSearchParams();
formData.append('template_id', templateId);
formData.append('username', username);
formData.append('password', password);
formData.append('text0', topText);
formData.append('text1', bottomText);

fetch(apiUrl, {
  method: 'POST',
  body: formData,
})
  .then(response => response.json())
  .then( data => {
  
  console.log(data)
  
   conn.sendFile(m.chat, data.data.url, "error.jpg", "")
   
  }
  )
  .catch(error => console.error('Error:', error));
    
	    }
	    catch(e){
	      console.log(e)
	    }
	    break
	  case 'depre':
	    try{
  let [txt1, txt2] = text.split('|').map(item => item.trim());
  
    
    const apiUrl = 'https://api.imgflip.com/caption_image';
const templateId = '337688860';
const username = 'HenryArcangelo';
const password = 'cs215695';
const topText = txt1;
const bottomText = txt2;

const formData = new URLSearchParams();
formData.append('template_id', templateId);
formData.append('username', username);
formData.append('password', password);
formData.append('text0', topText);
formData.append('text1', bottomText);

fetch(apiUrl, {
  method: 'POST',
  body: formData,
})
  .then(response => response.json())
  .then( data => {
  
  console.log(data)
  
   conn.sendFile(m.chat, data.data.url, "error.jpg", "")
   
  }
  )
  .catch(error => console.error('Error:', error));
    
	    }
	    catch(e){
	      console.log(e)
	    }
	    break

	  case 'dumb':
	    try{
  let [txt1, txt2] = text.split('|').map(item => item.trim());
  
    
    const apiUrl = 'https://api.imgflip.com/caption_image';
const templateId = '329074899';
const username = 'HenryArcangelo';
const password = 'cs215695';
const topText = txt1 || m.quoted?.text;


const formData = new URLSearchParams();
formData.append('template_id', templateId);
formData.append('username', username);
formData.append('password', password);
formData.append('text0', topText);
formData.append('max_font_size', 34);


fetch(apiUrl, {
  method: 'POST',
  body: formData,
})
  .then(response => response.json())
  .then( data => {
  
  console.log(data)
  
   conn.sendFile(m.chat, data.data.url, "error.jpg", "")
   
  }
  )
  .catch(error => console.error('Error:', error));
    
	    }
	    catch(e){
	      console.log(e)
	    }
	    break

	  case 'cry':
	    try{
  let [txt1, txt2] = text.split('|').map(item => item.trim());
  
    
    const apiUrl = 'https://api.imgflip.com/caption_image';
const templateId = '99924861';
const username = 'HenryArcangelo';
const password = 'cs215695';
const topText = txt1 || m.quoted?.text;


const formData = new URLSearchParams();
formData.append('template_id', templateId);
formData.append('username', username);
formData.append('password', password);
formData.append('text0', topText);
formData.append('max_font_size', 34);


fetch(apiUrl, {
  method: 'POST',
  body: formData,
})
  .then(response => response.json())
  .then( data => {
  
  console.log(data)
  
   conn.sendFile(m.chat, data.data.url, "error.jpg", "")
   
  }
  )
  .catch(error => console.error('Error:', error));
    
	    }
	    catch(e){
	      console.log(e)
	    }
	    break
	  case 'knives':
	    try{
  let [txt1, txt2] = text.split('|').map(item => item.trim());
  
    
    const apiUrl = 'https://api.imgflip.com/caption_image';
const templateId = '245389734';
const username = 'HenryArcangelo';
const password = 'cs215695';
const topText = txt1 || m.quoted?.text;


const formData = new URLSearchParams();
formData.append('template_id', templateId);
formData.append('username', username);
formData.append('password', password);
formData.append('text0', topText);
formData.append('max_font_size', 34);


fetch(apiUrl, {
  method: 'POST',
  body: formData,
})
  .then(response => response.json())
  .then( data => {
  
  console.log(data)
  
   conn.sendFile(m.chat, data.data.url, "error.jpg", "")
   
  }
  )
  .catch(error => console.error('Error:', error));
    
	    }
	    catch(e){
	      console.log(e)
	    }
	    break
	} //fim switch
}

handler.help = ['memepooh']
handler.tags = ['maker']
handler.level = 19
handler.command = [ 'uncanny','memes','festa','escolhas','erro','knives','brain','cry','peter','chase','depre','baby','dumb','busao','soviet','drake','doge', 'chad'] 
handler.limit = false

export default handler

const isUrl = (text) => {
  return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'))
}