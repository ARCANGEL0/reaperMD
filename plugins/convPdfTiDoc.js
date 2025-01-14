
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

import uploadImage from '../lib/uploadImage.js'

import { unlinkSync, readFileSync, writeFile } from 'fs'; 
import { join } from 'path'; 
import { exec } from 'child_process'; 
import { promisify } from 'util'; 
import FormData from "form-data"; 
import fetch from "node-fetch"; 
let handler = async (m, { conn, text,__dirname, usedPrefix, command, isOwner }) => {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime || !m.quoted) throw `╭━━━━━━━━━⬣
┃ 𖤐 𝑴𝒂𝒓𝒒𝒖𝒆 𝒖𝒎 𝑷𝑫𝑭 𝒑𝒂𝒓𝒂
┃ 𝒇𝒂𝒛𝒆𝒓 𝒂 𝒄𝒐𝒏𝒗𝒆𝒓𝒔𝒂𝒐
╰━━━━━━━━━━━━━━━━━━⬣`

switch (command){
  case 'pdf2docx':
  case 'pdf2doc':
    let ran = getRandom('.pdf'); 
    let filename = join(__dirname, '../tmp/' + ran);
    let tmpfold = join(__dirname, '../tmp/')
    console.log(tmpfold)
    let media = await q.download(true); 
    let buff = await readFileSync(media);
    m.react("🌑")



await writeFile(filename, buff, 'binary', async (err) => { 
    if (err) { 
        console.error('Error saving MP3 file:', err); 
    } 
    else { 
        console.log('MP3 file saved successfully:', filename); 
        // Additional code for further processing if needed 
try{
     
     
    
  const fileStream = fs.createReadStream(filename);

  const formData = new FormData();
  formData.append('file', fileStream, {
    filename: ran,
    contentType: 'application/pdf' // specify the content type as PDF
  });

  try {
    const response = await fetch(`https://itzpire.site/tools/upload`, {
      method: 'POST',
      body: formData
    });

    const data = await response.json();
    console.log(data); // handle response data as needed
    m.react("💿")
    let url = data.fileInfo.url
    console.log(url)
    let getfile = await fetch(`https://api.neoxr.eu/api/pdf-converter?url=${url}&filename=${m.quoted.title.split('.pdf')[0]}&to=docx&apikey=${global.neoxr}`)
    let docz = await getfile.json()
    console.log(docz)
    m.react("💿")
    
    conn.sendFile(m.chat, docz.data.url, docz.data.filename,'', m, false, { asDocument: true })
    
  } catch (error) {
    console.error('Error uploading file:', error);
  }
        
    

  
   }
   catch(e){
      await m.reply(`𝙴𝚛𝚛𝚘 𝚗𝚘 𝚙𝚛𝚘𝚌𝚎𝚜𝚜𝚘 ❌`)
     
     console.log(e)
   }
}
        
        
    


})
    break
  case 'pdf2psd':
    let ran2 = getRandom('.pdf'); 
    let filename2 = join(__dirname, '../tmp/' + ran2);
    let tmpfold2 = join(__dirname, '../tmp/')
    console.log(tmpfold2)
    let media2 = await q.download(true); 
    let buff2 = await readFileSync(media2);
    m.react("🌑")



await writeFile(filename2, buff2, 'binary', async (err) => { 
    if (err) { 
        console.error('Error saving MP3 file:', err); 
    } 
    else { 
        console.log('MP3 file saved successfully:', filename2); 
        // Additional code for further processing if needed 
try{
     
     
    
  const fileStream2 = fs.createReadStream(filename2);

  const formData2 = new FormData();
  formData2.append('file', fileStream2, {
    filename: ran2,
    contentType: 'application/pdf' // specify the content type as PDF
  });

  try {
    const response2 = await fetch(`https://itzpire.site/tools/upload`, {
      method: 'POST',
      body: formData2
    });

    const data2 = await response2.json();
    console.log(data2); // handle response data as needed
    m.react("💿")
    let url2 = data2.fileInfo.url
    console.log(url2)
    let getfile2 = await fetch(`https://api.neoxr.eu/api/pdf-converter?url=${url2}&filename=${m.quoted.title.split('.pdf')[0]}&to=psd&apikey=${global.neoxr}`)
    let docz2 = await getfile2.json()
    console.log(docz2)
    m.react("💿")
    
    conn.sendFile(m.chat, docz2.data.url, docz2.data.filename,'', m, false, { asDocument: true })
    
  } catch (error) {
    console.error('Error uploading file:', error);
  }
        
    

  
   }
   catch(e){
      await m.reply(`𝙴𝚛𝚛𝚘 𝚗𝚘 𝚙𝚛𝚘𝚌𝚎𝚜𝚜𝚘 ❌`)
     
     console.log(e)
   }
}
        
        
    


})
    break
  case 'pdf2png':
    
    let ran3 = getRandom('.pdf'); 
    let filename3 = join(__dirname, '../tmp/' + ran3);
    let tmpfold3 = join(__dirname, '../tmp/')
    console.log(tmpfold3)
    let media3 = await q.download(true); 
    let buff3 = await readFileSync(media3);
    m.react("🌑")



await writeFile(filename3, buff3, 'binary', async (err) => { 
    if (err) { 
        console.error('Error saving MP3 file:', err); 
    } 
    else { 
        console.log('MP3 file saved successfully:', filename3); 
        // Additional code for further processing if needed 
try{
     
     
    
  const fileStream3 = fs.createReadStream(filename3);

  const formData3 = new FormData();
  formData3.append('file', fileStream3, {
    filename: ran3,
    contentType: 'application/pdf' // specify the content type as PDF
  });

  try {
    const response3 = await fetch(`https://itzpire.site/tools/upload`, {
      method: 'POST',
      body: formData3
    });

    const data3 = await response3.json();
    console.log(data3); // handle response data as needed
    m.react("💿")
    let url3 = data3.fileInfo.url
    console.log(url3)
    let getfile3 = await fetch(`https://api.neoxr.eu/api/pdf-converter?url=${url3}&filename=${m.quoted.title.split('.pdf')[0]}&to=png&apikey=${global.neoxr}`)
    let docz3 = await getfile3.json()
    console.log(docz3)
    m.react("💿")
    
    conn.sendFile(m.chat, docz3.data.url, docz3.data.filename,'', m, false, { asDocument: true })
    
  } catch (error) {
    console.error('Error uploading file:', error);
  }
        
    

  
   }
   catch(e){
      await m.reply(`𝙴𝚛𝚛𝚘 𝚗𝚘 𝚙𝚛𝚘𝚌𝚎𝚜𝚜𝚘 ❌`)
     
     console.log(e)
   }
}
        
        
    


})


    break
    
  case 'pdf2xls':
    let ran4 = getRandom('.pdf'); 
    let filename4 = join(__dirname, '../tmp/' + ran4);
    let tmpfold4 = join(__dirname, '../tmp/')
    console.log(tmpfold4)
    let media4 = await q.download(true); 
    let buff4 = await readFileSync(media4);
    m.react("🌑")



await writeFile(filename4, buff4, 'binary', async (err) => { 
    if (err) { 
        console.error('Error saving MP3 file:', err); 
    } 
    else { 
        console.log('MP3 file saved successfully:', filename4); 
        // Additional code for further processing if needed 
try{
     
     
    
  const fileStream4 = fs.createReadStream(filename4);

  const formData4 = new FormData();
  formData.append('file', fileStream4, {
    filename: ran4,
    contentType: 'application/pdf' // specify the content type as PDF
  });

  try {
    const response4 = await fetch(`https://itzpire.site/tools/upload`, {
      method: 'POST',
      body: formData4
    });

    const data4 = await response4.json();
    console.log(data4); // handle response data as needed
    m.react("💿")
    let url4 = data4.fileInfo.url
    console.log(url4)
    let getfile4 = await fetch(`https://api.neoxr.eu/api/pdf-converter?url=${url4}&filename=${m.quoted.title.split('.pdf')[0]}&to=xslx&apikey=${global.neoxr}`)
    let docz4 = await getfile4.json()
    console.log(docz4)
    m.react("💿")
    
    conn.sendFile(m.chat, docz4.data.url, docz4.data.filename,'', m, false, { asDocument: true })
    
  } catch (error) {
    console.error('Error uploading file:', error);
  }
        
    

  
   }
   catch(e){
      await m.reply(`𝙴𝚛𝚛𝚘 𝚗𝚘 𝚙𝚛𝚘𝚌𝚎𝚜𝚜𝚘 ❌`)
     
     console.log(e)
   }
}
        
        
    


})
    break
}




}
handler.level=29
handler.command = ['pdf2doc','pdf2docx','pdf2psd','pdf2xls','pdf2png']
export default handler
const getRandom = (ext) => { 
    return `${Math.floor(Math.random() * 10000)}${ext}`;
}