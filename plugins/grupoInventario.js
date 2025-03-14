
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────
import fs from 'fs'
 import FormData from "form-data"; 
import fetch from "node-fetch"; 
import request from 'request'
import uploadFile from '../lib/uploadFile.js'; 
import uploadImage from '../lib/uploadImage.js'; 
import { unlinkSync, readFileSync, writeFile } from 'fs'; 
  import { registerFont, createCanvas, loadImage } from 'canvas'
import { join } from 'path'; 
import { exec } from 'child_process'; 
import { promisify } from 'util'; 
import ffmpeg from 'fluent-ffmpeg';
let handler = async(m, { conn, usedPrefix, command, text }) => {
    
  global.db.data.chats[m.chat].users[m.sender].elixirs =
  global.db.data.chats[m.chat].users[m.sender].elixirs || 0;
  global.db.data.chats[m.chat].users[m.sender].daggers =
  global.db.data.chats[m.chat].users[m.sender].daggers || 0;
  global.db.data.chats[m.chat].users[m.sender].rings =
  global.db.data.chats[m.chat].users[m.sender].rings || 0;
    
  global.db.data.chats[m.chat].users[m.sender].shields =
  global.db.data.chats[m.chat].users[m.sender].shields || 0;
  global.db.data.chats[m.chat].users[m.sender].artifacts =
  global.db.data.chats[m.chat].users[m.sender].artifacts || 0;
  
  
  global.db.data.chats[m.chat].users[m.sender].vampire = global.db.data.chats[m.chat].users[m.sender].vampire || 0;
  
  global.db.data.chats[m.chat].users[m.sender].vampireAtivo =
  global.db.data.chats[m.chat].users[m.sender].vampireAtivo || false;
  
   
  global.db.data.chats[m.chat].users[m.sender].demonio =
  global.db.data.chats[m.chat].users[m.sender].demonio || 0;
  
  global.db.data.chats[m.chat].users[m.sender].demonioAtivo =
  global.db.data.chats[m.chat].users[m.sender].demonioAtivo || false;
    global.db.data.chats[m.chat].users[m.sender].shadows =
  global.db.data.chats[m.chat].users[m.sender].shadows || 0;
  
  global.db.data.chats[m.chat].users[m.sender].shadowAtivo =
  global.db.data.chats[m.chat].users[m.sender].shadowAtivo || false;
  
 if(command=='usar')
 {
   if(!text) {}
   text = text.toLowerCase().trim();

if (['capa', 'capas', 'capa vampirica', 'capas vampiricas', 'capa vampírica', 'capas vampíricas', 'capa,', 'capas,', 'capa vampirica,', 'capas vampiricas,', 'capa vampírica,', 'capas vampíricas,'].includes(text)) {

  

     if(global.db.data.chats[m.chat].users[m.sender].vampire<=0){
      return m.reply(`┏╾┉┉┉┉┉┉┉┉
┃ 𝚅𝚘𝚌𝚎̂ 𝚗𝚊̃𝚘 𝚝𝚎𝚖 𝚗𝚎𝚗𝚑𝚞𝚖𝚊 𝚌𝚊𝚙𝚊 𝚟𝚊𝚖𝚙𝚒́𝚛𝚒𝚌𝚊! 𖢲
┗╾┉┉┉┉┉┉┉┉`)
    
    }
      global.db.data.chats[m.chat].users[m.sender].vampireAtivo = true
      global.db.data.chats[m.chat].users[m.sender].vampire--
      
      m.react("🦇")
      m.reply(`  ╭─┉─ 𖠔 ┉──╮
      
𝑽𝒐𝒄𝒆̂ 𝒗𝒆𝒔𝒕𝒊𝒖 𝒂 𝒄𝒂𝒑𝒂 𝒅𝒐 𝒑𝒓𝒐́𝒑𝒓𝒊𝒐 𝑫𝒓𝒂𝒄𝒖𝒍𝒂 𝒆 𝒕𝒐𝒓𝒏𝒐𝒖-𝒔𝒆 𝒊𝒎𝒐𝒓𝒕𝒂𝒍 𝒑𝒐𝒓 *𝟖 𝒉𝒐𝒓𝒂𝒔*

  ╰─┉─〢𖠔〣┉─╯`)
 
setTimeout(() => global.db.data.chats[m.chat].users[m.sender].vampireAtivo= false, 8 * 60 * 60 * 1000);
 }


if (['demonio', 'demonios', 'demônio', 'demônios', 'demonio,', 'demonios,', 'demônio,', 'demônios,'].includes(text)) {
 
 

     if(global.db.data.chats[m.chat].users[m.sender].demonio<=0){
      return m.reply(`┏╾┉┉┉┉┉┉┉┉
┃ 𝚅𝚘𝚌𝚎̂ 𝚗𝚊̃𝚘 𝚝𝚎𝚖 𝚗𝚎𝚗𝚑𝚞𝚖 𝙳𝚎𝚖𝚘̂𝚗𝚒𝚘 𖡹
┗╾┉┉┉┉┉┉┉┉`)
    
    }
      global.db.data.chats[m.chat].users[m.sender].demonioAtivo = true
      global.db.data.chats[m.chat].users[m.sender].demonio--
        const infernalNames = [
  "Azazel",
  "Beelzebub",
  "Asmodeus",
  "Belial",
  "Lilith",
  "Mephistopheles",
  "Lucifer",
  "Baphomet",
  "Abaddon",
  "Mammon",
  "Leviathan",
  "Astaroth",
  "Samael",
  "Bael",
  "Dagon",
  "Zagan",
  "Moloch",
  "Orobas",
  "Barbatos",
  "Vassago",
  "Gusion",
  "Furfur",
  "Marchosias",
  "Seir",
  "Andras",
  "Valefar",
  "Phenex",
  "Shax",
  "Buer",
  "Morax",
  "Stolas",
  "Berith",
  "Foras",
  "Vepar",
  "Vine",
  "Balaam",
  "Agares",
  "Gremory",
  "Paimon",
  "Malphas",
  "Forneus"
];


       m.react("⛓️")
      m.reply(`  ╭─┉─ 𖡹 ┉──╮
      
𝑽𝒐𝒄𝒆̂ 𝒓𝒆𝒂𝒍𝒊𝒛𝒂 𝒖𝒎 𝒓𝒊𝒕𝒖𝒂𝒍 𝒔𝒐𝒎𝒃𝒓𝒊𝒐, 𝒖𝒕𝒊𝒍𝒊𝒛𝒂𝒏𝒅𝒐
𝒐𝒔 𝒆𝒏𝒔𝒊𝒏𝒂𝒎𝒆𝒏𝒕𝒐𝒔 𝒂𝒏𝒕𝒊𝒈𝒐𝒔 𝒉𝒆𝒓𝒎𝒆́𝒕𝒊𝒄𝒐𝒔 𝒆
𝒐𝒄𝒖𝒍𝒕𝒊𝒔𝒕𝒂𝒔 𝒅𝒂 𝑨𝒖𝒓𝒐𝒓𝒂 𝑫𝒐𝒖𝒓𝒂𝒅𝒂, 𝒆 𝒊𝒏𝒗𝒐𝒄𝒂 𝒐
𝒅𝒆𝒎𝒐̂𝒏𝒊𝒐 ${infernalNames.getRandom()} 𝒑𝒂𝒓𝒂 𝒔𝒆𝒓 𝒔𝒆𝒖
𝒑𝒓𝒐𝒕𝒆𝒕𝒐𝒓 𝒑𝒆𝒔𝒔𝒐𝒂𝒍 𝒑𝒐𝒓 𝟖 𝒉𝒐𝒓𝒂𝒔

  ╰─┉─〢𖡹〣┉─╯`)
setTimeout(() => global.db.data.chats[m.chat].users[m.sender].demonioAtivo= false, 8 * 60 * 60 * 1000);
 
}


if (['escudo', 'escudos', 'escudo lunar', 'escudos lunatres'].includes(text)) {


  global.db.data.chats[m.chat].users[m.sender].shields =
  global.db.data.chats[m.chat].users[m.sender].shields || 0;
  
  global.db.data.chats[m.chat].users[m.sender].shieldAtivo =
  global.db.data.chats[m.chat].users[m.sender].shieldAtivo || false;

     if(global.db.data.chats[m.chat].users[m.sender].shields<=0){
      return m.reply(`┏╾┉┉┉┉┉┉┉┉
┃ 𝚅𝚘𝚌𝚎̂ 𝚗𝚊̃𝚘 𝚝𝚎𝚖 𝚗𝚎𝚗𝚑𝚞𝚖 𝙴𝚜𝚌𝚞𝚍𝚘 𝚕𝚞𝚗𝚊𝚛 𖠔
┗╾┉┉┉┉┉┉┉┉`)
    
    }
      global.db.data.chats[m.chat].users[m.sender].shieldAtivo = true
      global.db.data.chats[m.chat].users[m.sender].shields--
      
 m.react("🛡")
      m.reply(`  ╭─┉─ 𖠔 ┉──╮
      
𝑨 𝒍𝒖𝒂 𝒐𝒍𝒉𝒐𝒖 𝒔𝒐𝒃𝒓𝒆 𝒕𝒊 𝒆 𝒕𝒆 𝒄𝒐𝒏𝒄𝒆𝒅𝒆𝒖 𝒖𝒎 𝒎𝒂𝒏𝒕𝒐 𝒅𝒆 𝒑𝒓𝒐𝒕𝒆𝒄̧𝒂̃𝒐, 𝒗𝒐𝒄𝒆̂ 𝒆𝒔𝒕𝒂𝒓𝒂 𝒊𝒎𝒖𝒏𝒆 𝒂 𝒓𝒐𝒖𝒃𝒐𝒔 𝒑𝒐𝒓 𝟖 𝒉𝒐𝒓𝒂𝒔

  ╰─┉─〢𖠔〣┉─╯`)
 
 
 
setTimeout(() => global.db.data.chats[m.chat].users[m.sender].shieldAtivo= false, 8 * 60 * 60 * 1000);
 

 
}
if (['sombra', 'sombras', 'furto', 'furtividade', 'sombras furtivas'].includes(text)) {


     if(global.db.data.chats[m.chat].users[m.sender].shadows<=0){
      return m.reply(`┏╾┉┉┉┉┉┉┉┉
┃ 𝚅𝚘𝚌𝚎̂ 𝚗𝚊̃𝚘 𝚝𝚎𝚖 𝚗𝚎𝚗𝚑𝚞𝚖𝚊 𝚂𝚘𝚖𝚋𝚛𝚊 𝚏𝚞𝚛𝚝𝚒𝚟𝚊 𖢣
┗╾┉┉┉┉┉┉┉┉`)
    
    }
      global.db.data.chats[m.chat].users[m.sender].shadowAtivo = true
      global.db.data.chats[m.chat].users[m.sender].shadows--

      
 m.react("👁")
      m.reply(`  ╭─┉─ 𖢣 ┉──╮
      
𝑨𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒂 𝒄𝒐𝒃𝒓𝒆𝒎 𝒔𝒆𝒖 𝒄𝒐𝒓𝒑𝒐 𝒆 𝒗𝒐𝒄𝒆̂ 𝒔𝒆 𝒕𝒐𝒓𝒏𝒂 𝒖𝒎 𝒔𝒐́ 𝒏𝒂 𝒆𝒔𝒄𝒖𝒓𝒊𝒅𝒂̃𝒐, 𝒔𝒆𝒖 𝒓𝒆𝒇𝒖́𝒈𝒊𝒐 𝒆́ 𝒏𝒂 𝒏𝒐𝒊𝒕𝒆 𝒆 𝒔𝒆𝒖𝒔 𝒑𝒂𝒔𝒔𝒐𝒔 𝒇𝒊𝒄𝒂𝒎 𝒄𝒂𝒎𝒖𝒇𝒍𝒂𝒅𝒐𝒔.
𝑺𝒆𝒖𝒔 𝒓𝒐𝒖𝒃𝒐𝒔 𝒕𝒆𝒓𝒂̃𝒐 𝟏𝟎𝟎% 𝒅𝒆 𝒔𝒖𝒄𝒆𝒔𝒔𝒐 𝒂𝒕𝒆́ 𝒓𝒆𝒊𝒏𝒊𝒄𝒊𝒂𝒓.

  ╰─┉─〢𖢣〣┉─╯`)

 
setTimeout(() => global.db.data.chats[m.chat].users[m.sender].shadowAtivo= false, 8 * 60 * 60 * 1000);
 

 
}
 
  


}
 else if(command == 'itens' || command == 'items' || command == 'inv' || command =='inventario')
  {
    
async function generateInventoryImage() {
      registerFont('fonts/AngelWishRegular-1G9wM.ttf', { family: 'AngelWishRegular-1G9wM' });
    registerFont('fonts/MedusaGothic-VAEV.ttf', { family: 'MedusaGothic-VAEV' });
    registerFont('fonts/DutchbrigadeRegular-8M7VJ.otf', { family: 'DutchbrigadeRegular-8M7VJ' });
    registerFont('fonts/WoodgodRegular-3zpjG.ttf', { family: 'WoodgodRegular-3zpjG' });
    
    let canvasWidth = 2048
    let canvasHeight = 1280
    const canvas = createCanvas(canvasWidth,canvasHeight);  // Assuming image size based on description
    const ctx = canvas.getContext('2d');
    // Load the image
    const pts = join(global.dirname, '../media/overlays/inventory.png');
let image = await loadImage(pts)


    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
const profileImagePath = await conn.profilePictureUrl(m.sender, 'image').catch((_) => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')


const profileImage = await loadImage(profileImagePath);
const profileWidth = 220;  // Largura do quadrado central
const profileHeight = 195; // Altura do quadrado central
const profileX = 915;  // Posição X do quadrado
const profileY = 566; // Posição Y do quadrado


ctx.save();  
ctx.beginPath();  
// Começa na base esquerda
ctx.moveTo(profileX, profileY + profileHeight);

// Primeiro degrau: sobe um pouco
ctx.lineTo(profileX, profileY + profileHeight - 30);

// Linha reta para a direita
ctx.lineTo(profileX + 30, profileY + profileHeight - 30);

// Segundo degrau: sobe diagonalmente
ctx.lineTo(profileX + 60, profileY + profileHeight - 60);

// Continua reto para a direita
ctx.lineTo(profileX + profileWidth, profileY + profileHeight - 60);

// Sobe até o topo direito
ctx.lineTo(profileX + profileWidth, profileY);

// Vai reto para a esquerda até o topo esquerdo
ctx.lineTo(profileX, profileY);
// Close the path  
ctx.closePath();  

ctx.clip();


ctx.drawImage(profileImage, profileX, profileY, profileWidth, profileHeight);
ctx.restore();


 
    // Set font style for the text
      ctx.font = `24px "WoodgodRegular-3zpjG"`
    ctx.fillStyle = '#ffffff';  // White color for text

    // Fetch counts from the database (mocking with sample data here)
    const counts = {
        adagas: global.db.data.chats[m.chat].users[m.sender].daggers,
        reliquias: global.db.data.chats[m.chat].users[m.sender].elixirs,
        artefatos: global.db.data.chats[m.chat].users[m.sender].artifacts,
        aliancas: global.db.data.chats[m.chat].users[m.sender].rings,
        escudos: global.db.data.chats[m.chat].users[m.sender].shields,
        sombras: global.db.data.chats[m.chat].users[m.sender].shadows,
        demonios: global.db.data.chats[m.chat].users[m.sender].demonio,
        capas: global.db.data.chats[m.chat].users[m.sender].vampire
    };

    ctx.fillText(`⥤ ${global.db.data.chats[m.chat].users[m.sender].money.toFixed(2)}`, 604.5,
    188.5); 
    ctx.fillText(`⥤ ${global.db.data.chats[m.chat].users[m.sender].limit}`,
    604.5, 220.3); 
    ctx.fillText(`⥤ ${global.db.data.chats[m.chat].users[m.sender].almas}`, 604.5,
    247.2); 
    // Add item counts to the image
    ctx.fillText(`${counts.adagas}`, 710, 321); 
    ctx.fillText(`${counts.reliquias}`, 710, 363.8);
    ctx.fillText(`${counts.artefatos}`, 710, 410);
    ctx.fillText(`${counts.aliancas}`, 710, 458.9);
    ctx.fillText(`${counts.escudos}`, 710, 503.4);
    ctx.fillText(`${counts.sombras}`, 710, 549);
    ctx.fillText(`${counts.demonios}`, 710, 594);
    ctx.fillText(`${counts.capas}`, 710, 641.7);

    // Handling active tokens
    let AtivoDemonio = global.db.data.chats[m.chat].users[m.sender].demonioAtivo; // Sample boolean values, replace with actual data
    let AtivoVampiro = global.db.data.chats[m.chat].users[m.sender].vampireAtivo;
    let AtivoEscudo = global.db.data.chats[m.chat].users[m.sender].shieldAtivo;
    let sombrasAtivo = global.db.data.chats[m.chat].users[m.sender].shadowAtivo;
    let txt = '';

ctx.font = `16px "DutchbrigadeRegular-8M7VJ"`
    ctx.fillStyle = '#ffffff';  // White color for text
    
    if (AtivoDemonio) txt += 'Demonio protetor 𝐀𝐓𝐈𝐕𝐀𝐃𝐎:\nProtegido contra roubos e assassinatos por 8 horas\n━━━━━━ ◦ ❖ ◦ ━━━━━━\n';
    if (AtivoVampiro) txt += 'Imortalidade vampirica 𝐀𝐓𝐈𝐕𝐀𝐃𝐀:\nImune a assassinatos por 8 horas\n━━━━━━ ◦ ❖ ◦ ━━━━━━\n';
    if (AtivoEscudo) txt += 'Escudo lunar 𝐀𝐓𝐈𝐕𝐀𝐃𝐎:\nProtegido contra roubos por 8 horas\n━━━━━━ ◦ ❖ ◦ ━━━━━━\n';
    if (sombrasAtivo) txt += 'Sombras furtivas 𝐀𝐓𝐈𝐕𝐀𝐃𝐀:\nRoubos sem flagrante até ultima tentativa\n━━━━━━ ◦ ❖ ◦ ━━━━━━\n';

    const ativosArray = txt.trim().split('\n');
ctx.fillText(txt, 68, 537); 

ctx.font = `24px "AngelWishRegular-1G9wM"`
       ctx.fillStyle = '#f78888';
           ctx.shadowColor = '#ff0000';
    ctx.shadowBlur = 8;
        ctx.fillText(global.db.data.users[m.sender].name, 440, 148); // Nível atual


let outt = getRandom('.png'); 
let outp = join(global.dirname, '../tmp/' + outt);

        // Salvar a imagem
        const out = fs.createWriteStream(outp);
        const stream = canvas.createPNGStream();
        stream.pipe(out);
        out.on('finish', () => conn.sendFile(m.chat, outp,'items.png',null,m))
        console.log(outp)
    
    
    
    
}

generateInventoryImage().then(() => console.log('Inventory image generated successfully.'));

    
  }
}

handler.help = ["items"].map(v => v + " usar/items")
handler.tags = ["tools"]
handler.command = ['inventario', 'items','usar', 'inv','itens']


export default handler


const getRandom = (ext) => { 
    return `${Math.floor(Math.random() * 10000)}${ext}`;
}
