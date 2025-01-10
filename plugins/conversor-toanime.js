
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

import { createCanvas, loadImage } from 'canvas'
import fs from 'fs'

import fetch from "node-fetch"; 
import request from 'request'
import uploadFile from '../lib/uploadFile.js'; 
import uploadImage from '../lib/uploadImage.js'; 
import { unlinkSync, readFileSync, writeFile } from 'fs'; 
import { join } from 'path'; 
const handler = async (m, {args,command,usedPrefix,__dirname,conn,text,isAdmin,isOwner}) => {
  
  async function addObject(imagemSrc, overlaySrc) {
  // Carregar a imagem principal
  const imagem = await loadImage(imagemSrc);
  const canvas = createCanvas(imagem.width, imagem.height);
  const ctx = canvas.getContext('2d');

  // Desenhar a imagem principal no canvas
  ctx.drawImage(imagem, 0, 0, imagem.width, imagem.height);

  // Carregar a imagem do overlay
  const overlay = await loadImage(overlaySrc);

  // Redimensionar o overlay para ser no mínimo 40% menor que a imagem principal
  const overlayScale = 0.6; // 60% do tamanho original
  const overlayWidth = overlay.width * overlayScale;
  const overlayHeight = overlay.height * overlayScale;

  // Calcular a posição do overlay para o canto inferior esquerdo
  const x = 30; // Canto esquerdo
  const y = imagem.height - overlayHeight // Canto inferior

  // Desenhar o overlay redimensionado no canvas
  ctx.drawImage(overlay, x, y, overlayWidth, overlayHeight);

  // Salvar a imagem resultante
  let gunName = getRandom('.png'); 
    let filenameGun = join(__dirname, '../tmp/' + gunName);
  // Salvar a imagem resultante
  const out = fs.createWriteStream(filenameGun);
  const stream = canvas.createPNGStream();
  stream.pipe(out);
  out.on('finish', () =>
  {
    console.log('A imagem foi salva com sucesso.')
    
    
  fs.readFile(filenameGun, (err, data) => {
    if (err) throw err;
    
    // Envia o arquivo como um buffer
    conn.sendFile(m.chat, data, 'image.png', '', m);
  })
})
 
}
  async function addOverlay(imagemBaseSrc, imagemTopoSrc,opacidade) {

const imagemBase = await loadImage(imagemBaseSrc);
  const imagemTopo = await loadImage(imagemTopoSrc);
  
  // O canvas terá o tamanho da imagem base
  const canvas = createCanvas(imagemBase.width, imagemBase.height);
  const ctx = canvas.getContext('2d');
  
  // Desenhar a imagem base no canvas
  ctx.drawImage(imagemBase, 0, 0);
  
  // Definir a opacidade para a imagem do topo
  ctx.globalAlpha = opacidade;
  
  // Desenhar a imagem do topo no canvas
  ctx.drawImage(imagemTopo, 0, 0, imagemBase.width, imagemBase.height);
  
  // Salvar a imagem resultante
  let gunName = getRandom('.png'); 
    let filenameGun = join(__dirname, '../tmp/' + gunName);
  // Salvar a imagem resultante
  const out = fs.createWriteStream(filenameGun);
  const stream = canvas.createPNGStream();
  stream.pipe(out);
  out.on('finish', () =>
  {
    console.log('A imagem foi salva com sucesso.')
    
    
  fs.readFile(filenameGun, (err, data) => {
    if (err) throw err;
    
    // Envia o arquivo como um buffer
    conn.sendFile(m.chat, data, 'image.png', '', m);
  })
})
 
}
  async function addProcurado(templateSrc, text1, text2, personImageSrc) {
  const template = await loadImage(templateSrc);
  const personImage = await loadImage(personImageSrc);
  
  // O canvas terá o tamanho da imagem de modelo mais espaço para o texto
  const canvasHeight = template.height // 60 pixels para o texto
  const canvas = createCanvas(template.width, canvasHeight);
  const ctx = canvas.getContext('2d');
  
  // Desenhar a imagem de modelo no canvas
  ctx.drawImage(template, 0, 0);
  
  // Configurações para o texto
  let fontSize = 25
 
  ctx.fillStyle = 'white';
  ctx.textAlign = 'center';
  ctx.font = `bold ${fontSize}px Arial`; 
  // Desenhar text1 no topo do modelo
  ctx.fillText(text1, template.width / 2, 107.5);

ctx.textBaseline = 'top'; // Alinhar texto pelo topo
/*
function adjustAndWrapText(ctx, text, maxWidth, fontSize) {
  let lines = [];
  let lineHeight = fontSize * 0.7; // Altura da linha baseada no tamanho da fonte

  do {
   lines = [];
    let currentLine = '';
    let words = text.split(' ');
fontSize -= 4;
    words.forEach(word => {
      let testLine = currentLine + word + ' ';
      let metrics = ctx.measureText(testLine);
      let testWidth = metrics.width;

      // Ajuste aqui: use um valor mais próximo de maxWidth para permitir linhas mais longas
      if (testWidth > maxWidth * 1.4 && currentLine !== '') {
        lines.push(currentLine);
        currentLine = word + ' ';
      } else {
        currentLine = testLine;
      }
    });

    lines.push(currentLine); // Adicionar a última linha

    // Reduzir o tamanho da fonte se alguma linha for maior que a largura máxima
    if (lines.some(line => ctx.measureText(line).width > maxWidth * 1.4)) {
      fontSize -= 2;
      lineHeight = fontSize * 0.6;
    }
    
  } while (lines.some(line => ctx.measureText(line).width > maxWidth * 1.4) && fontSize > 10);
  return { lines, lineHeight, fontSize };
}

// Exemplo de uso:
if (ctx.measureText(text2).width > template.width * 0.9) {
  let fontSmall = 20; // Defina o tamanho inicial da fonte
  const { lines, lineHeight, fontSize: adjustedFontSize } = adjustAndWrapText(ctx, text2.toUpperCase(), template.width, fontSmall);
  console.log("fonte tamanho:" + adjustedFontSize);
  ctx.font = `bold ${adjustedFontSize}px Arial`;
  lines.forEach((line, index) => {
    ctx.fillText(line, template.width / 2, 125 + index * lineHeight - (template.height*0.02));
  });
  
  
  */
 
  console.log(ctx.measureText(text2).width)
  if (ctx.measureText(text2).width > 420) {
  function adjustTextSizeAndWrap(ctx, text, maxWidth, maxHeight, initialFontSize) {
  let fontSize = initialFontSize;
  let lineHeight = fontSize * 1.2;
  let lines = [];
  let textHeight;

  do {
    lines = wrapText(ctx, text, maxWidth, fontSize);
    textHeight = lines.length * lineHeight;

    // Se a altura do texto for maior que a altura máxima, reduza o tamanho da fonte
    if (textHeight > maxHeight) {
      fontSize -= 2;
      lineHeight = fontSize * 0.9;
    }
  } while ((textHeight > maxHeight || lines.some(line => ctx.measureText(line).width > maxWidth)) && fontSize > 10);

  return { lines, lineHeight, fontSize };
}

function wrapText(ctx, text, maxWidth, fontSize) {
  ctx.font = `bold ${fontSize}px Arial`;
  let lines = [];
  let words = text.split(' ');
  let currentLine = '';

  words.forEach(word => {
    let testLine = currentLine + word + ' ';
    let metrics = ctx.measureText(testLine);
    let testWidth = metrics.width;

    if (testWidth > maxWidth && currentLine !== '') {
      lines.push(currentLine);
      currentLine = word + ' ';
    } else {
      currentLine = testLine;
    }
  });

  lines.push(currentLine); // Adicionar a última linha
  return lines;
}

// Exemplo de uso:
let initialFontSize = 20; // Tamanho inicial da fonte
let maxHeight = 30; // Altura máxima para o texto
const { lines, lineHeight, fontSize: adjustedFontSize } = adjustTextSizeAndWrap(ctx, text2.toUpperCase(), template.width, maxHeight, initialFontSize);

ctx.font = `bold ${adjustedFontSize}px Arial`;
lines.forEach((line, index) => {
  ctx.fillText(line, template.width / 2, 115 + index * lineHeight);
});

}


else {
  ctx.font = `bold ${fontSize}px Arial`; 
  ctx.fillText(text2.toUpperCase(), template.width - (template.width * 0.5), 125);
}

  // Desenhar a imagem da pessoa abaixo de TEXT2
 ctx.drawImage(personImage, 145, 160, 225, 225)
  // Salvar a imagem resultante
  
  let gunName = getRandom('.png'); 
    let filenameGun = join(__dirname, '../tmp/' + gunName);
  // Salvar a imagem resultante
  const out = fs.createWriteStream(filenameGun);
  const stream = canvas.createPNGStream();
  stream.pipe(out);
  out.on('finish', () =>
  {
    console.log('A imagem foi salva com sucesso.')
    
    
  fs.readFile(filenameGun, (err, data) => {
    if (err) throw err;
    
    // Envia o arquivo como um buffer
    conn.sendFile(m.chat, data, 'image.png', '', m);
  })
})
 
}


async function addCigarro(imagemSrc, textoBase) {
  // Carregar a imagem principal
  const imagem = await loadImage(imagemSrc); 
  const canvas = createCanvas(1400,2000);
  const ctx = canvas.getContext('2d');
  
  
  
  ctx.fillStyle = 'yellow';
  
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  ctx.font = `bold 225px "Arial Rounded MT Bold"`; // Fonte redonda e em negrito
  ctx.textAlign = 'center';
  
  
  ctx.fillStyle = 'black';
  ctx.fillText('VOCÊ', canvas.width/2, 187.5);

  let fontSize = 200 // Tamanho de fonte inicial
  let lineHeight = fontSize * 1.2; // Altura da linha baseada no tamanho da fonte
  ctx.font = `bold ${fontSize}px "Arial Rounded MT Bold"`;
  ctx.textAlign = 'center';
  ctx.fillStyle = 'black';
ctx.drawImage(imagem,canvas.width*0.0005,canvas.height*0.12,canvas.width, canvas.height*0.7)
console.log(ctx.measureText(textoBase).width)
console.log(canvas.width)
  if (ctx.measureText(textoBase).width > canvas.width * 0.6 ) {
  function adjustTextSizeAndWrap(ctx, text, maxWidth, maxHeight, initialFontSize) {
  let fontSize = initialFontSize;
  let lineHeight = fontSize * 2.35;
  let lines = [];
  let textHeight;

  do {
    fontSize -= 1;
    lines = wrapText(ctx, text, maxWidth, fontSize);
    textHeight = lines.length * lineHeight;

    // Se a altura do texto for maior que a altura máxima, reduza o tamanho da fonte
    if (textHeight > maxHeight) {
      
      
      lineHeight = fontSize * 0.84
    }
  } while ((textHeight > maxHeight || lines.some(line => ctx.measureText(line).width > maxWidth)) && fontSize > 10);

  return { lines, lineHeight, fontSize };
}

function wrapText(ctx, text, maxWidth, fontSize) {
  ctx.font = `bold ${fontSize}px Arial`;
  let lines = [];
  let words = text.split(' ');
  let currentLine = '';

  words.forEach(word => {
    let testLine = currentLine + word + ' ';
    let metrics = ctx.measureText(testLine);
    let testWidth = metrics.width;

    if (testWidth > maxWidth && currentLine !== '') {
      lines.push(currentLine);
      currentLine = word + ' ';
    } else {
      currentLine = testLine;
    }
  });

  lines.push(currentLine); // Adicionar a última linha
  return lines;
}

// Exemplo de uso:
 // Tamanho inicial da fonte
let nnt = 200
let maxHeight =109; // Altura máxima para o texto
const { lines, lineHeight, fontSize: adjustedFontSize } = adjustTextSizeAndWrap(ctx, textoBase.toUpperCase(), canvas.width, maxHeight, nnt);

ctx.font = `bold ${adjustedFontSize}px Arial`;
lines.forEach((line, index) => {
  ctx.fillText(line, canvas.width / 2,-125+ canvas.height  + index * lineHeight -60);
});

}


else {
  ctx.font = `bold 215px Arial`; 
  
  ctx.fillText(textoBase.toUpperCase(), canvas.width/2, canvas.height -75);
}

  
  // Desenha cada linha de texto no canvas
  
 
  
  
  

    
  let imgov = getRandom('.png'); 
    let nameov = join(__dirname, '../tmp/' + imgov);
  // Salvar a imagem resultante
  const oout = fs.createWriteStream(nameov);
  const stream = canvas.createPNGStream();
  stream.pipe(oout);
  oout.on('finish', () =>
  {
    console.log('A imagem foi salva com sucesso.')
    
    
  fs.readFile(nameov, (err, data) => {
    if (err) throw err;
    
    // Envia o arquivo como um buffer
    conn.sendFile(m.chat, data, 'image.png', '', m);
  })
})
  
}

  if(!(isAdmin || isOwner) && global.db.data.chats[m.chat].midia===false){
   m.react("❌")
   
   return !0;
 } 
 
let estiloPrompt = ''
if(args[1]){

  estiloPrompt = args.slice(1).join(' ')
  console.log(estiloPrompt)
}
      
  const who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
 let user = a => '@' + a.split('@')[0] //'@' + 
 const q = m.quoted ? m.quoted : m;
  
 
  const mime = (q.msg || q).mimetype || q.mediaType || '';
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime);
  
  if(args[0]=='gun' || command =='gun'){
    let ovv = join(__dirname, '../media/overlays/gun.png');
    if (/image/g.test(mime)){
    
const qs = m.quoted ? m.quoted : m;
const mimee = (qs.msg || qs).mimetype || qs.mediaType || '';

  m.reply(`${langTOGGLE.smsAvisoIIG()}❖─┅──┅ \n🕯️📜 𝐄𝐦 𝐛𝐫𝐞𝐯𝐞 𝐭𝐫𝐚𝐫𝐞𝐢 𝐚 𝐢𝐦𝐚𝐠𝐞𝐦 𝐝𝐞𝐬𝐨𝐥𝐚𝐝𝐨𝐫𝐚 𝐩𝐚𝐫𝐚 𝐭𝐮𝐚 𝐯𝐢𝐬𝐚𝐨. 𝐀𝐠𝐮𝐚𝐫𝐝𝐞 𝐮𝐦 𝐩𝐨𝐮𝐜𝐨 𝐩𝐞𝐥𝐨 𝐫𝐞𝐯𝐞𝐥𝐚𝐫 𝐝𝐨 𝐪𝐮𝐞 𝐬𝐮𝐛𝐣𝐚𝐳 𝐧𝐚𝐬 𝐩𝐫𝐨𝐟𝐮𝐧𝐝𝐞𝐳𝐚𝐬 𝐝𝐨 𝐦𝐞𝐮𝐬 𝐨𝐛𝐬𝐜𝐮𝐫𝐨𝐬 𝐭𝐫𝐞𝐜𝐡𝐨𝐬 𝐝𝐞 𝐜𝐨𝐝𝐢𝐠𝐨𝐬\n─┅──┅❖ `);
const datab = await qs.download?.();
const images = await uploadImage(datab);

try {
addObject(images,ovv)


} catch (e) {
  console.log(e)
throw `${langTOGGLE.smsAvisoFG()}❖─┅──┅\n𝗘𝗥𝗥𝗢 💀
𝗩𝗘𝗥𝗜𝗙𝗜𝗤𝗨𝗘 𝗦𝗘 𝗛Á 𝗗𝗘 𝗙𝗔𝗧𝗢 𝗔 𝗙𝗔𝗖𝗘 𝗗𝗘 𝗔𝗟𝗚𝗨𝗠𝗔 𝗣𝗢𝗕𝗥𝗘 𝗔𝗟𝗠𝗔 𝗡𝗘𝗦𝗧𝗔 𝗙𝗢𝗧𝗢\n─┅──┅❖ `
}

  
  
  
  }
  if (!/image/g.test(mime)){
    
    

    
    let img = await conn.profilePictureUrl(who, 'image').catch((_) => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
    
    addObject(img,ovv)
    
  
  
  }
  
    
    return 
  }
  if(args[0]=='comunista' || command =='comunista'){
    let ovv = join(__dirname, '../media/overlays/comunista.jpg');
    if (/image/g.test(mime)){
    
const qs = m.quoted ? m.quoted : m;
const mimee = (qs.msg || qs).mimetype || qs.mediaType || '';

  m.reply(`${langTOGGLE.smsAvisoIIG()}❖─┅──┅ \n🕯️📜 𝐄𝐦 𝐛𝐫𝐞𝐯𝐞 𝐭𝐫𝐚𝐫𝐞𝐢 𝐚 𝐢𝐦𝐚𝐠𝐞𝐦 𝐝𝐞𝐬𝐨𝐥𝐚𝐝𝐨𝐫𝐚 𝐩𝐚𝐫𝐚 𝐭𝐮𝐚 𝐯𝐢𝐬𝐚𝐨. 𝐀𝐠𝐮𝐚𝐫𝐝𝐞 𝐮𝐦 𝐩𝐨𝐮𝐜𝐨 𝐩𝐞𝐥𝐨 𝐫𝐞𝐯𝐞𝐥𝐚𝐫 𝐝𝐨 𝐪𝐮𝐞 𝐬𝐮𝐛𝐣𝐚𝐳 𝐧𝐚𝐬 𝐩𝐫𝐨𝐟𝐮𝐧𝐝𝐞𝐳𝐚𝐬 𝐝𝐨 𝐦𝐞𝐮𝐬 𝐨𝐛𝐬𝐜𝐮𝐫𝐨𝐬 𝐭𝐫𝐞𝐜𝐡𝐨𝐬 𝐝𝐞 𝐜𝐨𝐝𝐢𝐠𝐨𝐬\n─┅──┅❖ `);
const datab = await qs.download?.();
const images = await uploadImage(datab);

try {
addOverlay(images,ovv,0.4)


} catch (e) {
  console.log(e)
throw `${langTOGGLE.smsAvisoFG()}❖─┅──┅\n𝗘𝗥𝗥𝗢 💀
𝗩𝗘𝗥𝗜𝗙𝗜𝗤𝗨𝗘 𝗦𝗘 𝗛Á 𝗗𝗘 𝗙𝗔𝗧𝗢 𝗔 𝗙𝗔𝗖𝗘 𝗗𝗘 𝗔𝗟𝗚𝗨𝗠𝗔 𝗣𝗢𝗕𝗥𝗘 𝗔𝗟𝗠𝗔 𝗡𝗘𝗦𝗧𝗔 𝗙𝗢𝗧𝗢\n─┅──┅❖ `
}

  
  
  
  }
  if (!/image/g.test(mime)){
    
    

    
    let img = await conn.profilePictureUrl(who, 'image').catch((_) => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
    
    addOverlay(img,ovv,0.4)
    
  
  
  }
  
    
    return 
  }
  if(args[0]=='voce' || command =='voce' || args[0]=='você' || command =='você'){
    if(command=='voce' || command=='você'){
      if(!text){
                return m.reply(`╭━[𖤐]━━━━━━━⬣
𝑭𝒐𝒓𝒏𝒆𝒄𝒂 𝒖𝒎 𝒕𝒆𝒙𝒕𝒐 𝒑𝒂𝒓𝒂 𝒂𝒑𝒍𝒊𝒄𝒂𝒓 𝒐 𝒇𝒊𝒍𝒕𝒓𝒐!

📜 𝐄𝐱𝐞𝐦𝐩𝐥𝐨:
${usedPrefix + command} fica calvo 
╰━━━━━━━━━━━━━━━━━━⬣`)
      }if (/image/g.test(mime)){
    
const qs = m.quoted ? m.quoted : m;
const mimee = (qs.msg || qs).mimetype || qs.mediaType || '';

  m.reply(`${langTOGGLE.smsAvisoIIG()}❖─┅──┅ \n🕯️📜 𝐄𝐦 𝐛𝐫𝐞𝐯𝐞 𝐭𝐫𝐚𝐫𝐞𝐢 𝐚 𝐢𝐦𝐚𝐠𝐞𝐦 𝐝𝐞𝐬𝐨𝐥𝐚𝐝𝐨𝐫𝐚 𝐩𝐚𝐫𝐚 𝐭𝐮𝐚 𝐯𝐢𝐬𝐚𝐨. 𝐀𝐠𝐮𝐚𝐫𝐝𝐞 𝐮𝐦 𝐩𝐨𝐮𝐜𝐨 𝐩𝐞𝐥𝐨 𝐫𝐞𝐯𝐞𝐥𝐚𝐫 𝐝𝐨 𝐪𝐮𝐞 𝐬𝐮𝐛𝐣𝐚𝐳 𝐧𝐚𝐬 𝐩𝐫𝐨𝐟𝐮𝐧𝐝𝐞𝐳𝐚𝐬 𝐝𝐨 𝐦𝐞𝐮𝐬 𝐨𝐛𝐬𝐜𝐮𝐫𝐨𝐬 𝐭𝐫𝐞𝐜𝐡𝐨𝐬 𝐝𝐞 𝐜𝐨𝐝𝐢𝐠𝐨𝐬\n─┅──┅❖ `);
const datab = await qs.download?.();
const images = await uploadImage(datab);

try {
addCigarro(images,text)


} catch (e) {
  console.log(e)
throw `${langTOGGLE.smsAvisoFG()}❖─┅──┅\n𝗘𝗥𝗥𝗢 💀
𝗩𝗘𝗥𝗜𝗙𝗜𝗤𝗨𝗘 𝗦𝗘 𝗛Á 𝗗𝗘 𝗙𝗔𝗧𝗢 𝗔 𝗙𝗔𝗖𝗘 𝗗𝗘 𝗔𝗟𝗚𝗨𝗠𝗔 𝗣𝗢𝗕𝗥𝗘 𝗔𝗟𝗠𝗔 𝗡𝗘𝗦𝗧𝗔 𝗙𝗢𝗧𝗢\n─┅──┅❖ `
}

  
  
  
  }
  if (!/image/g.test(mime)){
    
    

    
    let img = await conn.profilePictureUrl(who, 'image').catch((_) => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
    
    addCigarro(img,text)
    
  
  
  }
    }
    else if(args[0]=='voce' || args[0]=='você')
    {
      m.react("🕰️")
      if(!args.slice(1).join(' ')){
        return m.reply(`╭━[𖤐]━━━━━━━⬣
𝑭𝒐𝒓𝒏𝒆𝒄𝒂 𝒖𝒎 𝒕𝒆𝒙𝒕𝒐 𝒑𝒂𝒓𝒂 𝒂𝒑𝒍𝒊𝒄𝒂𝒓 𝒐 𝒇𝒊𝒍𝒕𝒓𝒐!

📜 𝐄𝐱𝐞𝐦𝐩𝐥𝐨:
${usedPrefix + args[0]} fica calvo 
╰━━━━━━━━━━━━━━━━━━⬣`)
      }
      if (/image/g.test(mime)){
    
const qs = m.quoted ? m.quoted : m;
const mimee = (qs.msg || qs).mimetype || qs.mediaType || '';

  m.reply(`${langTOGGLE.smsAvisoIIG()}❖─┅──┅ \n🕯️📜 𝐄𝐦 𝐛𝐫𝐞𝐯𝐞 𝐭𝐫𝐚𝐫𝐞𝐢 𝐚 𝐢𝐦𝐚𝐠𝐞𝐦 𝐝𝐞𝐬𝐨𝐥𝐚𝐝𝐨𝐫𝐚 𝐩𝐚𝐫𝐚 𝐭𝐮𝐚 𝐯𝐢𝐬𝐚𝐨. 𝐀𝐠𝐮𝐚𝐫𝐝𝐞 𝐮𝐦 𝐩𝐨𝐮𝐜𝐨 𝐩𝐞𝐥𝐨 𝐫𝐞𝐯𝐞𝐥𝐚𝐫 𝐝𝐨 𝐪𝐮𝐞 𝐬𝐮𝐛𝐣𝐚𝐳 𝐧𝐚𝐬 𝐩𝐫𝐨𝐟𝐮𝐧𝐝𝐞𝐳𝐚𝐬 𝐝𝐨 𝐦𝐞𝐮𝐬 𝐨𝐛𝐬𝐜𝐮𝐫𝐨𝐬 𝐭𝐫𝐞𝐜𝐡𝐨𝐬 𝐝𝐞 𝐜𝐨𝐝𝐢𝐠𝐨𝐬\n─┅──┅❖ `);
const datab = await qs.download?.();
const images = await uploadImage(datab);

try {
addCigarro(images,args.splice(1).join(' '))


} catch (e) {
  console.log(e)
throw `${langTOGGLE.smsAvisoFG()}❖─┅──┅\n𝗘𝗥𝗥𝗢 💀
𝗩𝗘𝗥𝗜𝗙𝗜𝗤𝗨𝗘 𝗦𝗘 𝗛Á 𝗗𝗘 𝗙𝗔𝗧𝗢 𝗔 𝗙𝗔𝗖𝗘 𝗗𝗘 𝗔𝗟𝗚𝗨𝗠𝗔 𝗣𝗢𝗕𝗥𝗘 𝗔𝗟𝗠𝗔 𝗡𝗘𝗦𝗧𝗔 𝗙𝗢𝗧𝗢\n─┅──┅❖ `
}

  
  
  
  }
  if (!/image/g.test(mime)){
    
    

    
    let img = await conn.profilePictureUrl(who, 'image').catch((_) => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
    
    addCigarro(img,args.splice(1).join(' '))
    
  
  
  }
  
  
  
  
  
  
    }
   
    return 
  }

  if(args[0]=='procurado' || command =='procurado'){
    let modep = join(__dirname, '../media/overlays/procurado.jpg');
    if(command=='procurado'){
      if(!text){
                return m.reply(`╭━[𖤐]━━━━━━━⬣
𝑭𝒐𝒓𝒏𝒆𝒄𝒂 𝒖𝒎 𝒕𝒆𝒙𝒕𝒐 𝒑𝒂𝒓𝒂 𝒂𝒑𝒍𝒊𝒄𝒂𝒓 𝒐 𝒇𝒊𝒍𝒕𝒓𝒐!

📜 𝐄𝐱𝐞𝐦𝐩𝐥𝐨:
${usedPrefix + command} Acusado de ser nilista
╰━━━━━━━━━━━━━━━━━━⬣`)
      }if (/image/g.test(mime)){
    
const qs = m.quoted ? m.quoted : m;
const mimee = (qs.msg || qs).mimetype || qs.mediaType || '';

  m.reply(`${langTOGGLE.smsAvisoIIG()}❖─┅──┅ \n🕯️📜 𝐄𝐦 𝐛𝐫𝐞𝐯𝐞 𝐭𝐫𝐚𝐫𝐞𝐢 𝐚 𝐢𝐦𝐚𝐠𝐞𝐦 𝐝𝐞𝐬𝐨𝐥𝐚𝐝𝐨𝐫𝐚 𝐩𝐚𝐫𝐚 𝐭𝐮𝐚 𝐯𝐢𝐬𝐚𝐨. 𝐀𝐠𝐮𝐚𝐫𝐝𝐞 𝐮𝐦 𝐩𝐨𝐮𝐜𝐨 𝐩𝐞𝐥𝐨 𝐫𝐞𝐯𝐞𝐥𝐚𝐫 𝐝𝐨 𝐪𝐮𝐞 𝐬𝐮𝐛𝐣𝐚𝐳 𝐧𝐚𝐬 𝐩𝐫𝐨𝐟𝐮𝐧𝐝𝐞𝐳𝐚𝐬 𝐝𝐨 𝐦𝐞𝐮𝐬 𝐨𝐛𝐬𝐜𝐮𝐫𝐨𝐬 𝐭𝐫𝐞𝐜𝐡𝐨𝐬 𝐝𝐞 𝐜𝐨𝐝𝐢𝐠𝐨𝐬\n─┅──┅❖ `);
const datab = await qs.download?.();
const images = await uploadImage(datab);

try {
addProcurado(images,text)


} catch (e) {
  console.log(e)
throw `${langTOGGLE.smsAvisoFG()}❖─┅──┅\n𝗘𝗥𝗥𝗢 💀
𝗩𝗘𝗥𝗜𝗙𝗜𝗤𝗨𝗘 𝗦𝗘 𝗛Á 𝗗𝗘 𝗙𝗔𝗧𝗢 𝗔 𝗙𝗔𝗖𝗘 𝗗𝗘 𝗔𝗟𝗚𝗨𝗠𝗔 𝗣𝗢𝗕𝗥𝗘 𝗔𝗟𝗠𝗔 𝗡𝗘𝗦𝗧𝗔 𝗙𝗢𝗧𝗢\n─┅──┅❖ `
}

  
  
  
  }
  if (!/image/g.test(mime)){
    
    

    
    let img = await conn.profilePictureUrl(who, 'image').catch((_) => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
    
    addProcurado(img,text)
    
  
  
  }
    }
    else if(args[0]=='procurado')
    {
      m.react("🕰️")
      if(!args.slice(1).join(' ')){
        return m.reply(`╭━[𖤐]━━━━━━━⬣
𝑭𝒐𝒓𝒏𝒆𝒄𝒂 𝒖𝒎 𝒕𝒆𝒙𝒕𝒐 𝒑𝒂𝒓𝒂 𝒂𝒑𝒍𝒊𝒄𝒂𝒓 𝒐 𝒇𝒊𝒍𝒕𝒓𝒐!

📜 𝐄𝐱𝐞𝐦𝐩𝐥𝐨:
${usedPrefix + args[0]} acusado de ser nilista 
╰━━━━━━━━━━━━━━━━━━⬣`)
      }
      if (/image/g.test(mime)){
    
const qs = m.quoted ? m.quoted : m;
const mimee = (qs.msg || qs).mimetype || qs.mediaType || '';

  m.reply(`${langTOGGLE.smsAvisoIIG()}❖─┅──┅ \n🕯️📜 𝐄𝐦 𝐛𝐫𝐞𝐯𝐞 𝐭𝐫𝐚𝐫𝐞𝐢 𝐚 𝐢𝐦𝐚𝐠𝐞𝐦 𝐝𝐞𝐬𝐨𝐥𝐚𝐝𝐨𝐫𝐚 𝐩𝐚𝐫𝐚 𝐭𝐮𝐚 𝐯𝐢𝐬𝐚𝐨. 𝐀𝐠𝐮𝐚𝐫𝐝𝐞 𝐮𝐦 𝐩𝐨𝐮𝐜𝐨 𝐩𝐞𝐥𝐨 𝐫𝐞𝐯𝐞𝐥𝐚𝐫 𝐝𝐨 𝐪𝐮𝐞 𝐬𝐮𝐛𝐣𝐚𝐳 𝐧𝐚𝐬 𝐩𝐫𝐨𝐟𝐮𝐧𝐝𝐞𝐳𝐚𝐬 𝐝𝐨 𝐦𝐞𝐮𝐬 𝐨𝐛𝐬𝐜𝐮𝐫𝐨𝐬 𝐭𝐫𝐞𝐜𝐡𝐨𝐬 𝐝𝐞 𝐜𝐨𝐝𝐢𝐠𝐨𝐬\n─┅──┅❖ `);
const datab = await qs.download?.();
const images = await uploadImage(datab);

try {
addProcurado(modep,global.db.data.users[who].name,args.splice(1).join(' '),images)


} catch (e) {
  console.log(e)
throw `${langTOGGLE.smsAvisoFG()}❖─┅──┅\n𝗘𝗥𝗥𝗢 💀
𝗩𝗘𝗥𝗜𝗙𝗜𝗤𝗨𝗘 𝗦𝗘 𝗛Á 𝗗𝗘 𝗙𝗔𝗧𝗢 𝗔 𝗙𝗔𝗖𝗘 𝗗𝗘 𝗔𝗟𝗚𝗨𝗠𝗔 𝗣𝗢𝗕𝗥𝗘 𝗔𝗟𝗠𝗔 𝗡𝗘𝗦𝗧𝗔 𝗙𝗢𝗧𝗢\n─┅──┅❖ `
}

  
  
  
  }
  if (!/image/g.test(mime)){
    
    

    
    let img = await conn.profilePictureUrl(who, 'image').catch((_) => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
    
    addProcurado(modep,global.db.data.users[who].name,args.splice(1).join(' '),img)
  
  
  }
  
  
  
  
  
  
    }
   
    return 
  }
  if(args[0]=='desenho' || command=='desenho'){
    if (/image/g.test(mime)){
   
const qs = m.quoted ? m.quoted : m;
const mimee = (qs.msg || qs).mimetype || qs.mediaType || '';

  m.reply(`${langTOGGLE.smsAvisoIIG()}❖─┅──┅ \n🕯️📜 𝐄𝐦 𝐛𝐫𝐞𝐯𝐞 𝐭𝐫𝐚𝐫𝐞𝐢 𝐚 𝐢𝐦𝐚𝐠𝐞𝐦 𝐝𝐞𝐬𝐨𝐥𝐚𝐝𝐨𝐫𝐚 𝐩𝐚𝐫𝐚 𝐭𝐮𝐚 𝐯𝐢𝐬𝐚𝐨. 𝐀𝐠𝐮𝐚𝐫𝐝𝐞 𝐮𝐦 𝐩𝐨𝐮𝐜𝐨 𝐩𝐞𝐥𝐨 𝐫𝐞𝐯𝐞𝐥𝐚𝐫 𝐝𝐨 𝐪𝐮𝐞 𝐬𝐮𝐛𝐣𝐚𝐳 𝐧𝐚𝐬 𝐩𝐫𝐨𝐟𝐮𝐧𝐝𝐞𝐳𝐚𝐬 𝐝𝐨 𝐦𝐞𝐮𝐬 𝐨𝐛𝐬𝐜𝐮𝐫𝐨𝐬 𝐭𝐫𝐞𝐜𝐡𝐨𝐬 𝐝𝐞 𝐜𝐨𝐝𝐢𝐠𝐨𝐬\n─┅──┅❖ `);
const datab = await qs.download?.();
const images = await uploadImage(datab);
try {
  const rslt = `https://api.neoxr.eu/api/effect?style=caricature&image=${images}&apikey=${global.neoxr}`

await conn.sendFile(m.chat, rslt, 'error.jpg', null, m);

} catch (e) {
  console.log(e)
throw `${langTOGGLE.smsAvisoFG()}❖─┅──┅\n𝗘𝗥𝗥𝗢 💀
𝗩𝗘𝗥𝗜𝗙𝗜𝗤𝗨𝗘 𝗦𝗘 𝗛Á 𝗗𝗘 𝗙𝗔𝗧𝗢 𝗔 𝗙𝗔𝗖𝗘 𝗗𝗘 𝗔𝗟𝗚𝗨𝗠𝗔 𝗣𝗢𝗕𝗥𝗘 𝗔𝗟𝗠𝗔 𝗡𝗘𝗦𝗧𝗔 𝗙𝗢𝗧𝗢\n─┅──┅❖ `
}

  
  
  
  }
  if (!/image/g.test(mime)){
    
    
  let dawta = global.API('https://api.neoxr.eu', '/api/effect', {
    apikey: global.neoxr,
    style: 'caricature',
    image: await conn.profilePictureUrl(who, 'image').catch((_) => 'https://telegra.ph/file/24fa902ead26340f3df2c.png') })
    
    console.log(dawta)
    
  conn.sendFile(m.chat, dawta,``,);
  console.log(who)
  
  }
  
    
    return 
  }
  if(args[0]=='grafiti'){
    if (/image/g.test(mime)){
   
const qs = m.quoted ? m.quoted : m;
const mimee = (qs.msg || qs).mimetype || qs.mediaType || '';

  m.reply(`${langTOGGLE.smsAvisoIIG()}❖─┅──┅ \n🕯️📜 𝐄𝐦 𝐛𝐫𝐞𝐯𝐞 𝐭𝐫𝐚𝐫𝐞𝐢 𝐚 𝐢𝐦𝐚𝐠𝐞𝐦 𝐝𝐞𝐬𝐨𝐥𝐚𝐝𝐨𝐫𝐚 𝐩𝐚𝐫𝐚 𝐭𝐮𝐚 𝐯𝐢𝐬𝐚𝐨. 𝐀𝐠𝐮𝐚𝐫𝐝𝐞 𝐮𝐦 𝐩𝐨𝐮𝐜𝐨 𝐩𝐞𝐥𝐨 𝐫𝐞𝐯𝐞𝐥𝐚𝐫 𝐝𝐨 𝐪𝐮𝐞 𝐬𝐮𝐛𝐣𝐚𝐳 𝐧𝐚𝐬 𝐩𝐫𝐨𝐟𝐮𝐧𝐝𝐞𝐳𝐚𝐬 𝐝𝐨 𝐦𝐞𝐮𝐬 𝐨𝐛𝐬𝐜𝐮𝐫𝐨𝐬 𝐭𝐫𝐞𝐜𝐡𝐨𝐬 𝐝𝐞 𝐜𝐨𝐝𝐢𝐠𝐨𝐬\n─┅──┅❖ `);
const datab = await qs.download?.();
const images = await uploadImage(datab);
try {
  const rslt = `https://api.neoxr.eu/api/effect?style=staco&image=${images}&apikey=${global.neoxr}`

await conn.sendFile(m.chat, rslt, 'error.jpg', null, m);

} catch (e) {
  console.log(e)
throw `${langTOGGLE.smsAvisoFG()}❖─┅──┅\n𝗘𝗥𝗥𝗢 💀
𝗩𝗘𝗥𝗜𝗙𝗜𝗤𝗨𝗘 𝗦𝗘 𝗛Á 𝗗𝗘 𝗙𝗔𝗧𝗢 𝗔 𝗙𝗔𝗖𝗘 𝗗𝗘 𝗔𝗟𝗚𝗨𝗠𝗔 𝗣𝗢𝗕𝗥𝗘 𝗔𝗟𝗠𝗔 𝗡𝗘𝗦𝗧𝗔 𝗙𝗢𝗧𝗢\n─┅──┅❖ `
}

  
  
  
  }
  if (!/image/g.test(mime)){
    
    
  let dawta = global.API('https://api.neoxr.eu', '/api/effect', {
    apikey: global.neoxr,
    style: 'staco',
    image: await conn.profilePictureUrl(who, 'image').catch((_) => 'https://telegra.ph/file/24fa902ead26340f3df2c.png') })
    
    console.log(dawta)
    
  conn.sendFile(m.chat, dawta,``,);
  console.log(who)
  
  }
  
    
    return 
  }
  if(args[0]=='coelho'){
    if (/image/g.test(mime)){
   
const qs = m.quoted ? m.quoted : m;
const mimee = (qs.msg || qs).mimetype || qs.mediaType || '';

  m.reply(`${langTOGGLE.smsAvisoIIG()}❖─┅──┅ \n🕯️📜 𝐄𝐦 𝐛𝐫𝐞𝐯𝐞 𝐭𝐫𝐚𝐫𝐞𝐢 𝐚 𝐢𝐦𝐚𝐠𝐞𝐦 𝐝𝐞𝐬𝐨𝐥𝐚𝐝𝐨𝐫𝐚 𝐩𝐚𝐫𝐚 𝐭𝐮𝐚 𝐯𝐢𝐬𝐚𝐨. 𝐀𝐠𝐮𝐚𝐫𝐝𝐞 𝐮𝐦 𝐩𝐨𝐮𝐜𝐨 𝐩𝐞𝐥𝐨 𝐫𝐞𝐯𝐞𝐥𝐚𝐫 𝐝𝐨 𝐪𝐮𝐞 𝐬𝐮𝐛𝐣𝐚𝐳 𝐧𝐚𝐬 𝐩𝐫𝐨𝐟𝐮𝐧𝐝𝐞𝐳𝐚𝐬 𝐝𝐨 𝐦𝐞𝐮𝐬 𝐨𝐛𝐬𝐜𝐮𝐫𝐨𝐬 𝐭𝐫𝐞𝐜𝐡𝐨𝐬 𝐝𝐞 𝐜𝐨𝐝𝐢𝐠𝐨𝐬\n─┅──┅❖ `);
const datab = await qs.download?.();
const images = await uploadImage(datab);
try {
  const rslt = `https://api.neoxr.eu/api/effect?style=bunny&image=${images}&apikey=${global.neoxr}`

await conn.sendFile(m.chat, rslt, 'error.jpg', null, m);

} catch (e) {
  console.log(e)
throw `${langTOGGLE.smsAvisoFG()}❖─┅──┅\n𝗘𝗥𝗥𝗢 💀
𝗩𝗘𝗥𝗜𝗙𝗜𝗤𝗨𝗘 𝗦𝗘 𝗛Á 𝗗𝗘 𝗙𝗔𝗧𝗢 𝗔 𝗙𝗔𝗖𝗘 𝗗𝗘 𝗔𝗟𝗚𝗨𝗠𝗔 𝗣𝗢𝗕𝗥𝗘 𝗔𝗟𝗠𝗔 𝗡𝗘𝗦𝗧𝗔 𝗙𝗢𝗧𝗢\n─┅──┅❖ `
}

  
  
  
  }
  if (!/image/g.test(mime)){
    
    
  let dawta = global.API('https://api.neoxr.eu', '/api/effect', {
    apikey: global.neoxr,
    style: 'bunny',
    image: await conn.profilePictureUrl(who, 'image').catch((_) => 'https://telegra.ph/file/24fa902ead26340f3df2c.png') })
    
    console.log(dawta)
    
  conn.sendFile(m.chat, dawta,``,);
  console.log(who)
  
  }
  
    
    return 
  }
  if(args[0]=='palhaco' || command=='palhaco'){
    if (/image/g.test(mime)){
   
const qs = m.quoted ? m.quoted : m;
const mimee = (qs.msg || qs).mimetype || qs.mediaType || '';

  m.reply(`${langTOGGLE.smsAvisoIIG()}❖─┅──┅ \n🕯️📜 𝐄𝐦 𝐛𝐫𝐞𝐯𝐞 𝐭𝐫𝐚𝐫𝐞𝐢 𝐚 𝐢𝐦𝐚𝐠𝐞𝐦 𝐝𝐞𝐬𝐨𝐥𝐚𝐝𝐨𝐫𝐚 𝐩𝐚𝐫𝐚 𝐭𝐮𝐚 𝐯𝐢𝐬𝐚𝐨. 𝐀𝐠𝐮𝐚𝐫𝐝𝐞 𝐮𝐦 𝐩𝐨𝐮𝐜𝐨 𝐩𝐞𝐥𝐨 𝐫𝐞𝐯𝐞𝐥𝐚𝐫 𝐝𝐨 𝐪𝐮𝐞 𝐬𝐮𝐛𝐣𝐚𝐳 𝐧𝐚𝐬 𝐩𝐫𝐨𝐟𝐮𝐧𝐝𝐞𝐳𝐚𝐬 𝐝𝐨 𝐦𝐞𝐮𝐬 𝐨𝐛𝐬𝐜𝐮𝐫𝐨𝐬 𝐭𝐫𝐞𝐜𝐡𝐨𝐬 𝐝𝐞 𝐜𝐨𝐝𝐢𝐠𝐨𝐬\n─┅──┅❖ `);
const datab = await qs.download?.();
const images = await uploadImage(datab);
try {
  const rslt = `https://api.neoxr.eu/api/effect?style=clown&image=${images}&apikey=${global.neoxr}`

await conn.sendFile(m.chat, rslt, 'error.jpg', null, m);

} catch (e) {
  console.log(e)
throw `${langTOGGLE.smsAvisoFG()}❖─┅──┅\n𝗘𝗥𝗥𝗢 💀
𝗩𝗘𝗥𝗜𝗙𝗜𝗤𝗨𝗘 𝗦𝗘 𝗛Á 𝗗𝗘 𝗙𝗔𝗧𝗢 𝗔 𝗙𝗔𝗖𝗘 𝗗𝗘 𝗔𝗟𝗚𝗨𝗠𝗔 𝗣𝗢𝗕𝗥𝗘 𝗔𝗟𝗠𝗔 𝗡𝗘𝗦𝗧𝗔 𝗙𝗢𝗧𝗢\n─┅──┅❖ `
}

  
  
  
  }
  if (!/image/g.test(mime)){
    
    
  let dawta = global.API('https://api.neoxr.eu', '/api/effect', {
    apikey: global.neoxr,
    style: 'clown',
    image: await conn.profilePictureUrl(who, 'image').catch((_) => 'https://telegra.ph/file/24fa902ead26340f3df2c.png') })
    
    console.log(dawta)
    
  conn.sendFile(m.chat, dawta,``,);
  console.log(who)
  
  }
  
    
    return 
  }
  if(args[0]=='gay' || command=='gay'){
    if (/image/g.test(mime)){
    
const qs = m.quoted ? m.quoted : m;
const mimee = (qs.msg || qs).mimetype || qs.mediaType || '';

  m.reply(`${langTOGGLE.smsAvisoIIG()}❖─┅──┅ \n🕯️📜 𝐄𝐦 𝐛𝐫𝐞𝐯𝐞 𝐭𝐫𝐚𝐫𝐞𝐢 𝐚 𝐢𝐦𝐚𝐠𝐞𝐦 𝐝𝐞𝐬𝐨𝐥𝐚𝐝𝐨𝐫𝐚 𝐩𝐚𝐫𝐚 𝐭𝐮𝐚 𝐯𝐢𝐬𝐚𝐨. 𝐀𝐠𝐮𝐚𝐫𝐝𝐞 𝐮𝐦 𝐩𝐨𝐮𝐜𝐨 𝐩𝐞𝐥𝐨 𝐫𝐞𝐯𝐞𝐥𝐚𝐫 𝐝𝐨 𝐪𝐮𝐞 𝐬𝐮𝐛𝐣𝐚𝐳 𝐧𝐚𝐬 𝐩𝐫𝐨𝐟𝐮𝐧𝐝𝐞𝐳𝐚𝐬 𝐝𝐨 𝐦𝐞𝐮𝐬 𝐨𝐛𝐬𝐜𝐮𝐫𝐨𝐬 𝐭𝐫𝐞𝐜𝐡𝐨𝐬 𝐝𝐞 𝐜𝐨𝐝𝐢𝐠𝐨𝐬\n─┅──┅❖ `);
const datab = await qs.download?.();
const images = await uploadImage(datab);
try {
  const rslt = `https://itzpire.site/maker/rainbow?url=${images}`

await conn.sendFile(m.chat, rslt, 'error.jpg', null, m);

} catch (e) {
  console.log(e)
throw `${langTOGGLE.smsAvisoFG()}❖─┅──┅\n𝗘𝗥𝗥𝗢 💀
𝗩𝗘𝗥𝗜𝗙𝗜𝗤𝗨𝗘 𝗦𝗘 𝗛Á 𝗗𝗘 𝗙𝗔𝗧𝗢 𝗔 𝗙𝗔𝗖𝗘 𝗗𝗘 𝗔𝗟𝗚𝗨𝗠𝗔 𝗣𝗢𝗕𝗥𝗘 𝗔𝗟𝗠𝗔 𝗡𝗘𝗦𝗧𝗔 𝗙𝗢𝗧𝗢\n─┅──┅❖ `
}

  
  
  
  }
  if (!/image/g.test(mime)){
    
    
  let dawta = global.API('https://itzpire.site', '/maker/rainbow', {

    url: await conn.profilePictureUrl(who, 'image').catch((_) => 'https://telegra.ph/file/24fa902ead26340f3df2c.png') })
    
    console.log(dawta)
    
  conn.sendFile(m.chat, dawta,``,);
  console.log(who)
  
  }
  
    
    return 
  }
  
  if(args[0]=='tinta'){
    if (/image/g.test(mime)){
    
const qs = m.quoted ? m.quoted : m;
const mimee = (qs.msg || qs).mimetype || qs.mediaType || '';

  m.reply(`${langTOGGLE.smsAvisoIIG()}❖─┅──┅ \n🕯️📜 𝐄𝐦 𝐛𝐫𝐞𝐯𝐞 𝐭𝐫𝐚𝐫𝐞𝐢 𝐚 𝐢𝐦𝐚𝐠𝐞𝐦 𝐝𝐞𝐬𝐨𝐥𝐚𝐝𝐨𝐫𝐚 𝐩𝐚𝐫𝐚 𝐭𝐮𝐚 𝐯𝐢𝐬𝐚𝐨. 𝐀𝐠𝐮𝐚𝐫𝐝𝐞 𝐮𝐦 𝐩𝐨𝐮𝐜𝐨 𝐩𝐞𝐥𝐨 𝐫𝐞𝐯𝐞𝐥𝐚𝐫 𝐝𝐨 𝐪𝐮𝐞 𝐬𝐮𝐛𝐣𝐚𝐳 𝐧𝐚𝐬 𝐩𝐫𝐨𝐟𝐮𝐧𝐝𝐞𝐳𝐚𝐬 𝐝𝐨 𝐦𝐞𝐮𝐬 𝐨𝐛𝐬𝐜𝐮𝐫𝐨𝐬 𝐭𝐫𝐞𝐜𝐡𝐨𝐬 𝐝𝐞 𝐜𝐨𝐝𝐢𝐠𝐨𝐬\n─┅──┅❖ `);
const datab = await qs.download?.();
const images = await uploadImage(datab);
try {
  const rslt = `https://api.neoxr.eu/api/effect?style=ink&image=${images}&apikey=${global.neoxr}`

await conn.sendFile(m.chat, rslt, 'error.jpg', null, m);

} catch (e) {
  console.log(e)
throw `${langTOGGLE.smsAvisoFG()}❖─┅──┅\n𝗘𝗥𝗥𝗢 💀
𝗩𝗘𝗥𝗜𝗙𝗜𝗤𝗨𝗘 𝗦𝗘 𝗛Á 𝗗𝗘 𝗙𝗔𝗧𝗢 𝗔 𝗙𝗔𝗖𝗘 𝗗𝗘 𝗔𝗟𝗚𝗨𝗠𝗔 𝗣𝗢𝗕𝗥𝗘 𝗔𝗟𝗠𝗔 𝗡𝗘𝗦𝗧𝗔 𝗙𝗢𝗧𝗢\n─┅──┅❖ `
}

  
  
  
  }
  if (!/image/g.test(mime)){
    
    
  let dawta = global.API('https://api.neoxr.eu', '/api/effect', {
    apikey: global.neoxr,
    style: 'ink',
    image: await conn.profilePictureUrl(who, 'image').catch((_) => 'https://telegra.ph/file/24fa902ead26340f3df2c.png') })
    
    console.log(dawta)
    
  conn.sendFile(m.chat, dawta,``,);
  console.log(who)
  
  }
  
    
    return 
  }
  if(args[0]=='cafe' || command =='cafe' || args[0]=='café' || command =='café'){
    if (/image/g.test(mime)){
    
const qs = m.quoted ? m.quoted : m;
const mimee = (qs.msg || qs).mimetype || qs.mediaType || '';

  m.reply(`${langTOGGLE.smsAvisoIIG()}❖─┅──┅ \n🕯️📜 𝐄𝐦 𝐛𝐫𝐞𝐯𝐞 𝐭𝐫𝐚𝐫𝐞𝐢 𝐚 𝐢𝐦𝐚𝐠𝐞𝐦 𝐝𝐞𝐬𝐨𝐥𝐚𝐝𝐨𝐫𝐚 𝐩𝐚𝐫𝐚 𝐭𝐮𝐚 𝐯𝐢𝐬𝐚𝐨. 𝐀𝐠𝐮𝐚𝐫𝐝𝐞 𝐮𝐦 𝐩𝐨𝐮𝐜𝐨 𝐩𝐞𝐥𝐨 𝐫𝐞𝐯𝐞𝐥𝐚𝐫 𝐝𝐨 𝐪𝐮𝐞 𝐬𝐮𝐛𝐣𝐚𝐳 𝐧𝐚𝐬 𝐩𝐫𝐨𝐟𝐮𝐧𝐝𝐞𝐳𝐚𝐬 𝐝𝐨 𝐦𝐞𝐮𝐬 𝐨𝐛𝐬𝐜𝐮𝐫𝐨𝐬 𝐭𝐫𝐞𝐜𝐡𝐨𝐬 𝐝𝐞 𝐜𝐨𝐝𝐢𝐠𝐨𝐬\n─┅──┅❖ `);
const datab = await qs.download?.();
const images = await uploadImage(datab);
try {
  const rslt = `https://api.neoxr.eu/api/effect?style=latte&image=${images}&apikey=${global.neoxr}`

await conn.sendFile(m.chat, rslt, 'error.jpg', null, m);

} catch (e) {
  console.log(e)
throw `${langTOGGLE.smsAvisoFG()}❖─┅──┅\n𝗘𝗥𝗥𝗢 💀
𝗩𝗘𝗥𝗜𝗙𝗜𝗤𝗨𝗘 𝗦𝗘 𝗛Á 𝗗𝗘 𝗙𝗔𝗧𝗢 𝗔 𝗙𝗔𝗖𝗘 𝗗𝗘 𝗔𝗟𝗚𝗨𝗠𝗔 𝗣𝗢𝗕𝗥𝗘 𝗔𝗟𝗠𝗔 𝗡𝗘𝗦𝗧𝗔 𝗙𝗢𝗧𝗢\n─┅──┅❖ `
}

  
  
  
  }
  if (!/image/g.test(mime)){
    
    
  let dawta = global.API('https://api.neoxr.eu', '/api/effect', {
    apikey: global.neoxr,
    style: 'latte',
    image: await conn.profilePictureUrl(who, 'image').catch((_) => 'https://telegra.ph/file/24fa902ead26340f3df2c.png') })
    
    console.log(dawta)
    
  conn.sendFile(m.chat, dawta,``,);
  console.log(who)
  
  }
  
    
    return 
  }
  if(args[0]=='lapis' || command =='lapis'){
    if (/image/g.test(mime)){
    
const qs = m.quoted ? m.quoted : m;
const mimee = (qs.msg || qs).mimetype || qs.mediaType || '';

  m.reply(`${langTOGGLE.smsAvisoIIG()}❖─┅──┅ \n🕯️📜 𝐄𝐦 𝐛𝐫𝐞𝐯𝐞 𝐭𝐫𝐚𝐫𝐞𝐢 𝐚 𝐢𝐦𝐚𝐠𝐞𝐦 𝐝𝐞𝐬𝐨𝐥𝐚𝐝𝐨𝐫𝐚 𝐩𝐚𝐫𝐚 𝐭𝐮𝐚 𝐯𝐢𝐬𝐚𝐨. 𝐀𝐠𝐮𝐚𝐫𝐝𝐞 𝐮𝐦 𝐩𝐨𝐮𝐜𝐨 𝐩𝐞𝐥𝐨 𝐫𝐞𝐯𝐞𝐥𝐚𝐫 𝐝𝐨 𝐪𝐮𝐞 𝐬𝐮𝐛𝐣𝐚𝐳 𝐧𝐚𝐬 𝐩𝐫𝐨𝐟𝐮𝐧𝐝𝐞𝐳𝐚𝐬 𝐝𝐨 𝐦𝐞𝐮𝐬 𝐨𝐛𝐬𝐜𝐮𝐫𝐨𝐬 𝐭𝐫𝐞𝐜𝐡𝐨𝐬 𝐝𝐞 𝐜𝐨𝐝𝐢𝐠𝐨𝐬\n─┅──┅❖ `);
const datab = await qs.download?.();
const images = await uploadImage(datab);
try {
  const rslt = `https://api.neoxr.eu/api/effect?style=sketch&image=${images}&apikey=${global.neoxr}`

await conn.sendFile(m.chat, rslt, 'error.jpg', null, m);

} catch (e) {
  console.log(e)
throw `${langTOGGLE.smsAvisoFG()}❖─┅──┅\n𝗘𝗥𝗥𝗢 💀
𝗩𝗘𝗥𝗜𝗙𝗜𝗤𝗨𝗘 𝗦𝗘 𝗛Á 𝗗𝗘 𝗙𝗔𝗧𝗢 𝗔 𝗙𝗔𝗖𝗘 𝗗𝗘 𝗔𝗟𝗚𝗨𝗠𝗔 𝗣𝗢𝗕𝗥𝗘 𝗔𝗟𝗠𝗔 𝗡𝗘𝗦𝗧𝗔 𝗙𝗢𝗧𝗢\n─┅──┅❖ `
}

  
  
  
  }
  if (!/image/g.test(mime)){
    
    
  let dawta = global.API('https://api.neoxr.eu', '/api/effect', {
    apikey: global.neoxr,
    style: 'sketch',
    image: await conn.profilePictureUrl(who, 'image').catch((_) => 'https://telegra.ph/file/24fa902ead26340f3df2c.png') })
    
    console.log(dawta)
    
  conn.sendFile(m.chat, dawta,``,);
  console.log(who)
  
  }
  
    
    return 
  }
  
  if(command == 'comunista' || args[0]== 'comunista'){
    
    if (/image/g.test(mime)){
    
const qs = m.quoted ? m.quoted : m;
const mimee = (qs.msg || qs).mimetype || qs.mediaType || '';

  m.reply(`${langTOGGLE.smsAvisoIIG()}❖─┅──┅ \n🕯️📜 𝐄𝐦 𝐛𝐫𝐞𝐯𝐞 𝐭𝐫𝐚𝐫𝐞𝐢 𝐚 𝐢𝐦𝐚𝐠𝐞𝐦 𝐝𝐞𝐬𝐨𝐥𝐚𝐝𝐨𝐫𝐚 𝐩𝐚𝐫𝐚 𝐭𝐮𝐚 𝐯𝐢𝐬𝐚𝐨. 𝐀𝐠𝐮𝐚𝐫𝐝𝐞 𝐮𝐦 𝐩𝐨𝐮𝐜𝐨 𝐩𝐞𝐥𝐨 𝐫𝐞𝐯𝐞𝐥𝐚𝐫 𝐝𝐨 𝐪𝐮𝐞 𝐬𝐮𝐛𝐣𝐚𝐳 𝐧𝐚𝐬 𝐩𝐫𝐨𝐟𝐮𝐧𝐝𝐞𝐳𝐚𝐬 𝐝𝐨 𝐦𝐞𝐮𝐬 𝐨𝐛𝐬𝐜𝐮𝐫𝐨𝐬 𝐭𝐫𝐞𝐜𝐡𝐨𝐬 𝐝𝐞 𝐜𝐨𝐝𝐢𝐠𝐨𝐬\n─┅──┅❖ `);
const datab = await qs.download?.();
const images = await uploadImage(datab);
try {
  
const anime = `https://api.popcat.xyz/communism?image=${images}`;


await conn.sendFile(m.chat, dawta,'')
} catch (e) {
  console.log(e)
throw `${langTOGGLE.smsAvisoFG()}❖─┅──┅\n𝗘𝗥𝗥𝗢 💀
𝗩𝗘𝗥𝗜𝗙𝗜𝗤𝗨𝗘 𝗦𝗘 𝗛Á 𝗗𝗘 𝗙𝗔𝗧𝗢 𝗔 𝗙𝗔𝗖𝗘 𝗗𝗘 𝗔𝗟𝗚𝗨𝗠𝗔 𝗣𝗢𝗕𝗥𝗘 𝗔𝗟𝗠𝗔 𝗡𝗘𝗦𝗧𝗔 𝗙𝗢𝗧𝗢\n─┅──┅❖ `
}

  
  
  
  }
  if (!/image/g.test(mime)){
    
    
  let dawta = global.API('https://api.popcat.xyz', '/communism', {
    
    image: await conn.profilePictureUrl(who, 'image').catch((_) => 'https://telegra.ph/file/24fa902ead26340f3df2c.png') })
    
    console.log(dawta)
      conn.sendFile(m.chat, dawta,'')
  console.log(who)
  
  }
    
    return 
  }
  
  
  if (/image/g.test(mime)){
     
 let styleMappings = {
  "aether": "aether",
  "airbender": "airbender",
  "anime": "anime",
  "avatar": "avatar",
  "baby": "baby",
  "barbie": "barbie",

  "blindbox": "blindbox",
  "block": "block",
  "chocolate": "chocolate",
  "christmas_3d": "christmas_3d",
  "christmas_anime": "christmas_anime",
  "christmas_cartoon": "christmas_cartoon",
  "christmas_comic": "christmas_comic",
  "christmas_pixar": "christmas_pixar",
  "cyberpunk": "cyberpunk",
  "danil": "danil",
  "firebender": "firebender",
  "ghair": "ghair",
  "gothic": "gothic",
  "gtav": "gtav",
  "hallowen": "hallowen",
  "hell": "hell",
  "heroes": "heroes",
  "horror": "horror",
  "illustration": "illustration",
  "impasto": "impasto",
  "jojo": "jojo",
  "junet": "junet",

  "luminous": "luminous",
  "old": "old",
  "onepiece": "onepiece",
  "papercut": "papercut",

  "pixar": "pixar",
  "pixar_2": "pixar_2",
  "pixel": "pixel",
  "pokemon": "pokemon",
  "rdr": "rdr",
  "retro": "retro",
  "rickmorty": "rickmorty",
  "spirited": "spirited",

  "surya": "surya",
  "synthwave": "synthwave",
  "tattoo":"tatoo",
  "thunder": "thunder",
  "wonka": "wonka",
  "zombie": "zombie",
  "palhaco": "palhaco",
  "coelho":"coelho",
  "grafiti":"grafiti"
};
    let styleId = styleMappings[args[0]];
console.log(styleId)

    if(args[0]=='gta'){
      const qs = m.quoted ? m.quoted : m;
const mimee = (qs.msg || qs).mimetype || qs.mediaType || '';

  m.reply(`${langTOGGLE.smsAvisoIIG()}❖─┅──┅ \n🕯️📜 𝐄𝐦 𝐛𝐫𝐞𝐯𝐞 𝐭𝐫𝐚𝐫𝐞𝐢 𝐚 𝐢𝐦𝐚𝐠𝐞𝐦 𝐝𝐞𝐬𝐨𝐥𝐚𝐝𝐨𝐫𝐚 𝐩𝐚𝐫𝐚 𝐭𝐮𝐚 𝐯𝐢𝐬𝐚𝐨. 𝐀𝐠𝐮𝐚𝐫𝐝𝐞 𝐮𝐦 𝐩𝐨𝐮𝐜𝐨 𝐩𝐞𝐥𝐨 𝐫𝐞𝐯𝐞𝐥𝐚𝐫 𝐝𝐨 𝐪𝐮𝐞 𝐬𝐮𝐛𝐣𝐚𝐳 𝐧𝐚𝐬 𝐩𝐫𝐨𝐟𝐮𝐧𝐝𝐞𝐳𝐚𝐬 𝐝𝐨 𝐦𝐞𝐮𝐬 𝐨𝐛𝐬𝐜𝐮𝐫𝐨𝐬 𝐭𝐫𝐞𝐜𝐡𝐨𝐬 𝐝𝐞 𝐜𝐨𝐝𝐢𝐠𝐨𝐬\n─┅──┅❖ `);
const datab = await qs.download?.();
const images = await uploadImage(datab);
try {
  
 
const requestBody = {
  init_image: images,
  style_id: 'gta',
  color: "default"

};

const apiUrl = 'https://api.itsrose.rest/image/_inference_style';
const authToken = itsrose;

let response = await fetch(apiUrl, {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Authorization': authToken,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(requestBody),
})
  .then(response =>{
    console.log(response)
    
return   response.json()})
    .then(data => {
      console.log(data)
  
       conn.sendFile(m.chat, data.result.images[0], 'error.jpg', null, m);
        
    
 
    })
  
  
  .catch(error => console.error('Error:', error));
    
    



} 
catch (e) {
  console.log(e)
throw `${langTOGGLE.smsAvisoFG()}❖─┅──┅\n𝗘𝗥𝗥𝗢 💀
𝗩𝗘𝗥𝗜𝗙𝗜𝗤𝗨𝗘 𝗦𝗘 𝗛Á 𝗗𝗘 𝗙𝗔𝗧𝗢 𝗔 𝗙𝗔𝗖𝗘 𝗗𝗘 𝗔𝗟𝗚𝗨𝗠𝗔 𝗣𝗢𝗕𝗥𝗘 𝗔𝗟𝗠𝗔 𝗡𝗘𝗦𝗧𝗔 𝗙𝗢𝗧𝗢\n─┅──┅❖ `
}

    
      
      return 
    }
   
   
 else if(!args[0]){
   m.reply(`─┅──┅❖ ༒︎ ❖─┅──┅ 
   𝑪𝒐𝒎𝒂𝒏𝒅𝒐 𝒊𝒏𝒗𝒂𝒍𝒊𝒅𝒐. ❌👁️
   𝑷𝒂𝒓𝒂 𝒖𝒔𝒂𝒓 𝒐𝒔 𝒆𝒇𝒆𝒊𝒕𝒐𝒔..
   𝒖𝒔𝒆 .𝒆𝒇𝒆𝒊𝒕𝒐 [𝒆𝒇𝒆𝒊𝒕𝒐]
   

𝙴𝚏𝚎𝚒𝚝𝚘𝚜 𝙸𝙰

♱ 𝙖𝙚𝙩𝙝𝙚𝙧
♱ 𝙖𝙞𝙧𝙗𝙚𝙣𝙙𝙚𝙧
♱ 𝙖𝙣𝙞𝙢𝙚
♱ 𝙖𝙫𝙖𝙩𝙖𝙧
♱ 𝙗𝙖𝙗𝙮
♱ 𝙗𝙖𝙧𝙗𝙞𝙚
♱ 𝙗𝙡𝙞𝙣𝙙𝙗𝙤𝙭
♱ 𝙗𝙡𝙤𝙘𝙠
♱ 𝙘𝙝𝙤𝙘𝙤𝙡𝙖𝙩𝙚
♱ 𝙘𝙝𝙧𝙞𝙨𝙩𝙢𝙖𝙨_3𝙙
♱ 𝙘𝙝𝙧𝙞𝙨𝙩𝙢𝙖𝙨_𝙖𝙣𝙞𝙢𝙚
♱ 𝙘𝙝𝙧𝙞𝙨𝙩𝙢𝙖𝙨_𝙘𝙖𝙧𝙩𝙤𝙤𝙣
♱ 𝙘𝙝𝙧𝙞𝙨𝙩𝙢𝙖𝙨_𝙘𝙤𝙢𝙞𝙘
♱ 𝙘𝙝𝙧𝙞𝙨𝙩𝙢𝙖𝙨_𝙥𝙞𝙭𝙚𝙡
♱ 𝙘𝙮𝙗𝙚𝙧𝙥𝙪𝙣𝙠
♱ 𝙙𝙖𝙣𝙞𝙡
𝙗𝙚𝙣𝙙𝙚𝙧
♱ 𝙜𝙝𝙖𝙞𝙧
♱ 𝙜𝙤𝙩𝙝𝙞𝙘
♱ 𝙜𝙩𝙖𝙫
♱ 𝙜𝙩𝙖
♱ 𝙝𝙖𝙡𝙡𝙤𝙬𝙚𝙚𝙣
♱ 𝙝𝙚𝙡𝙡
♱ 𝙝𝙚𝙧𝙤𝙚𝙨
♱ 𝙝𝙤𝙧𝙧𝙤𝙧
♱ 𝙄𝙡𝙡𝙪𝙨𝙩𝙧𝙖𝙩𝙞𝙤𝙣
♱ 𝙞𝙢𝙥𝙖𝙨𝙩𝙤
♱ 𝙟𝙤𝙟𝙤
♱ 𝙟𝙪𝙣𝙚𝙩
♱ 𝙡𝙪𝙢𝙞𝙣𝙤𝙪𝙨
♱ 𝙤𝙡𝙙
♱ 𝙤𝙣𝙚𝙥𝙞𝙚𝙘𝙚
♱ 𝙥𝙖𝙥𝙚𝙧𝙘𝙪𝙩
♱ 𝙥𝙞𝙭𝙚𝙡
♱ 𝙥𝙤𝙠𝙚𝙢𝙤𝙣
♱ 𝙧𝙙𝙧
♱ 𝙧𝙚𝙩𝙧𝙤
♱ 𝙧𝙞𝙘𝙠𝙢𝙤𝙧𝙩𝙮
♱ 𝙨𝙥𝙞𝙧𝙞𝙩𝙚𝙙
♱ 𝙨𝙪𝙧𝙮𝙖
♱ 𝙨𝙮𝙣𝙩𝙝𝙬𝙖𝙫𝙚
♱ 𝙩𝙖𝙩𝙩𝙤𝙤
♱ 𝙩𝙝𝙪𝙣𝙙𝙚𝙧
♱ 𝙬𝙤𝙣𝙠𝙖
♱ 𝙯𝙤𝙢𝙗𝙞𝙚

𝙵𝚒𝚕𝚝𝚛𝚘𝚜 𝚍𝚎 𝚒𝚖𝚊𝚐𝚎𝚖
♱ 𝙘𝙤𝙢𝙪𝙣𝙞𝙨𝙩𝙖
♱ 𝙘𝙖𝙛𝙚
♱ 𝙙𝙚𝙨𝙚𝙣𝙝𝙤
♱ 𝙩𝙞𝙣𝙩𝙖
♱ 𝙡𝙖𝙥𝙞𝙨
♱ 𝘃𝗼𝗰𝙚
♱ 𝗽𝗿𝗼𝗰𝘂𝗿𝗮𝗱𝗼
♱ 𝗴𝘂𝗻
♱ 𝗴𝗮𝘆
♱ 𝗴𝗿𝗮𝗳𝗶𝘁𝗶
♱ 𝗽𝗮𝗹𝗵𝗮𝗰𝗼
♱ 𝗰𝗼𝗲𝗹𝗵𝗼

─┅──┅❖ ִ𖤐 ❖─┅──┅   `)
return !0
 } //ok


 else if (args[0] && !styleId) {
          m.reply(`─┅──┅❖ ༒︎ ❖─┅──┅ 
   𝑪𝒐𝒎𝒂𝒏𝒅𝒐 𝒊𝒏𝒗𝒂𝒍𝒊𝒅𝒐. ❌👁️
   𝑷𝒂𝒓𝒂 𝒖𝒔𝒂𝒓 𝒐𝒔 𝒆𝒇𝒆𝒊𝒕𝒐𝒔..
   𝒖𝒔𝒆 .𝒆𝒇𝒆𝒊𝒕𝒐 [𝒆𝒇𝒆𝒊𝒕𝒐]
   

𝙴𝚏𝚎𝚒𝚝𝚘𝚜 𝙸𝙰

♱ 𝙖𝙚𝙩𝙝𝙚𝙧
♱ 𝙖𝙞𝙧𝙗𝙚𝙣𝙙𝙚𝙧
♱ 𝙖𝙣𝙞𝙢𝙚
♱ 𝙖𝙫𝙖𝙩𝙖𝙧
♱ 𝙗𝙖𝙗𝙮
♱ 𝙗𝙖𝙧𝙗𝙞𝙚
♱ 𝙗𝙡𝙞𝙣𝙙𝙗𝙤𝙭
♱ 𝙗𝙡𝙤𝙘𝙠
♱ 𝙘𝙝𝙤𝙘𝙤𝙡𝙖𝙩𝙚
♱ 𝙘𝙝𝙧𝙞𝙨𝙩𝙢𝙖𝙨_3𝙙
♱ 𝙘𝙝𝙧𝙞𝙨𝙩𝙢𝙖𝙨_𝙖𝙣𝙞𝙢𝙚
♱ 𝙘𝙝𝙧𝙞𝙨𝙩𝙢𝙖𝙨_𝙘𝙖𝙧𝙩𝙤𝙤𝙣
♱ 𝙘𝙝𝙧𝙞𝙨𝙩𝙢𝙖𝙨_𝙘𝙤𝙢𝙞𝙘
♱ 𝙘𝙝𝙧𝙞𝙨𝙩𝙢𝙖𝙨_𝙥𝙞𝙭𝙚𝙡
♱ 𝙘𝙮𝙗𝙚𝙧𝙥𝙪𝙣𝙠
♱ 𝙙𝙖𝙣𝙞𝙡
𝙗𝙚𝙣𝙙𝙚𝙧
♱ 𝙜𝙝𝙖𝙞𝙧
♱ 𝙜𝙤𝙩𝙝𝙞𝙘
♱ 𝙜𝙩𝙖𝙫
♱ 𝙜𝙩𝙖
♱ 𝙝𝙖𝙡𝙡𝙤𝙬𝙚𝙚𝙣
♱ 𝙝𝙚𝙡𝙡
♱ 𝙝𝙚𝙧𝙤𝙚𝙨
♱ 𝙝𝙤𝙧𝙧𝙤𝙧
♱ 𝙄𝙡𝙡𝙪𝙨𝙩𝙧𝙖𝙩𝙞𝙤𝙣
♱ 𝙞𝙢𝙥𝙖𝙨𝙩𝙤
♱ 𝙟𝙤𝙟𝙤
♱ 𝙟𝙪𝙣𝙚𝙩
♱ 𝙡𝙪𝙢𝙞𝙣𝙤𝙪𝙨
♱ 𝙤𝙡𝙙
♱ 𝙤𝙣𝙚𝙥𝙞𝙚𝙘𝙚
♱ 𝙥𝙖𝙥𝙚𝙧𝙘𝙪𝙩
♱ 𝙥𝙞𝙭𝙚𝙡
♱ 𝙥𝙤𝙠𝙚𝙢𝙤𝙣
♱ 𝙧𝙙𝙧
♱ 𝙧𝙚𝙩𝙧𝙤
♱ 𝙧𝙞𝙘𝙠𝙢𝙤𝙧𝙩𝙮
♱ 𝙨𝙥𝙞𝙧𝙞𝙩𝙚𝙙
♱ 𝙨𝙪𝙧𝙮𝙖
♱ 𝙨𝙮𝙣𝙩𝙝𝙬𝙖𝙫𝙚
♱ 𝙩𝙖𝙩𝙩𝙤𝙤
♱ 𝙩𝙝𝙪𝙣𝙙𝙚𝙧
♱ 𝙬𝙤𝙣𝙠𝙖
♱ 𝙯𝙤𝙢𝙗𝙞𝙚

𝙵𝚒𝚕𝚝𝚛𝚘𝚜 𝚍𝚎 𝚒𝚖𝚊𝚐𝚎𝚖
♱ 𝙘𝙤𝙢𝙪𝙣𝙞𝙨𝙩𝙖
♱ 𝙘𝙖𝙛𝙚
♱ 𝙙𝙚𝙨𝙚𝙣𝙝𝙤
♱ 𝙩𝙞𝙣𝙩𝙖
♱ 𝙡𝙖𝙥𝙞𝙨
♱ 𝘃𝗼𝗰𝙚
♱ 𝗽𝗿𝗼𝗰𝘂𝗿𝗮𝗱𝗼
♱ 𝗴𝘂𝗻
♱ 𝗴𝗮𝘆
♱ 𝗴𝗿𝗮𝗳𝗶𝘁𝗶
♱ 𝗽𝗮𝗹𝗵𝗮𝗰𝗼
♱ 𝗰𝗼𝗲𝗹𝗵𝗼

─┅──┅❖ ִ𖤐 ❖─┅──┅   `)
    } 
    
    
const qs = m.quoted ? m.quoted : m;
const mimee = (qs.msg || qs).mimetype || qs.mediaType || '';

  m.reply(`${langTOGGLE.smsAvisoIIG()}❖─┅──┅ \n🕯️📜 𝐄𝐦 𝐛𝐫𝐞𝐯𝐞 𝐭𝐫𝐚𝐫𝐞𝐢 𝐚 𝐢𝐦𝐚𝐠𝐞𝐦 𝐝𝐞𝐬𝐨𝐥𝐚𝐝𝐨𝐫𝐚 𝐩𝐚𝐫𝐚 𝐭𝐮𝐚 𝐯𝐢𝐬𝐚𝐨. 𝐀𝐠𝐮𝐚𝐫𝐝𝐞 𝐮𝐦 𝐩𝐨𝐮𝐜𝐨 𝐩𝐞𝐥𝐨 𝐫𝐞𝐯𝐞𝐥𝐚𝐫 𝐝𝐨 𝐪𝐮𝐞 𝐬𝐮𝐛𝐣𝐚𝐳 𝐧𝐚𝐬 𝐩𝐫𝐨𝐟𝐮𝐧𝐝𝐞𝐳𝐚𝐬 𝐝𝐨 𝐦𝐞𝐮𝐬 𝐨𝐛𝐬𝐜𝐮𝐫𝐨𝐬 𝐭𝐫𝐞𝐜𝐡𝐨𝐬 𝐝𝐞 𝐜𝐨𝐝𝐢𝐠𝐨𝐬\n─┅──┅❖ `);
const datab = await qs.download?.();
const images = await uploadImage(datab);
try {
  
 

let response = await  fetch('https://api.itsrose.rest/image/turnMe', {
  method: 'POST',
  headers: {
    'accept': 'application/json',
    'Authorization': itsrose,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "init_image": images,
    "style": styleId,
    "skin": "default",
    "image_num": 4,
    "prompt": estiloPrompt,
    "strength": 0.57
  })
})
.then(response => {
    console.log(response)
   return response.json()
  
    })
    .then(data => {
      console.log(data)
      if (data.status && data.result && data.result.images) {
    for (let i = 0; i < data.result.images.length; i++) {
       conn.sendFile(m.chat, data.result.images[i], 'error.jpg', null, m);
        
    }
} else {
    console.error('Invalid data format');
    m.react("⚠️")
}
    })
  
  .catch(error => console.error('Error:', error));
   





} catch (e) {
  console.log(e)
throw `${langTOGGLE.smsAvisoFG()}❖─┅──┅\n𝗘𝗥𝗥𝗢 💀
𝗩𝗘𝗥𝗜𝗙𝗜𝗤𝗨𝗘 𝗦𝗘 𝗛Á 𝗗𝗘 𝗙𝗔𝗧𝗢 𝗔 𝗙𝗔𝗖𝗘 𝗗𝗘 𝗔𝗟𝗚𝗨𝗠𝗔 𝗣𝗢𝗕𝗥𝗘 𝗔𝗟𝗠𝗔 𝗡𝗘𝗦𝗧𝗔 𝗙𝗢𝗧𝗢\n─┅──┅❖ `
}

  
  
  
  }
  if (!/image/g.test(mime)){
    
    let styleMappings = {
  "aether": "aether",
  "airbender": "airbender",
  "anime": "anime",
  "avatar": "avatar",
  "baby": "baby",
  "barbie": "barbie",

  "blindbox": "blindbox",
  "block": "block",
  "chocolate": "chocolate",
  "christmas_3d": "christmas_3d",
  "christmas_anime": "christmas_anime",
  "christmas_cartoon": "christmas_cartoon",
  "christmas_comic": "christmas_comic",
  "christmas_pixar": "christmas_pixar",
  "cyberpunk": "cyberpunk",
  "danil": "danil",
  "firebender": "firebender",
  "ghair": "ghair",
  "gothic": "gothic",
  "gtav": "gtav",
  "hallowen": "hallowen",
  "hell": "hell",
  "heroes": "heroes",
  "horror": "horror",
  "illustration": "illustration",
  "impasto": "impasto",
  "jojo": "jojo",
  "junet": "junet",

  "luminous": "luminous",
  "old": "old",
  "onepiece": "onepiece",
  "papercut": "papercut",

  "pixar": "pixar",
  "pixar_2": "pixar_2",
  "pixel": "pixel",
  "pokemon": "pokemon",
  "rdr": "rdr",
  "retro": "retro",
  "rickmorty": "rickmorty",
  "spirited": "spirited",

  "surya": "surya",
  "synthwave": "synthwave",
  "tattoo":"tatoo",
  "thunder": "thunder",
  "wonka": "wonka",
  "zombie": "zombie",
    "palhaco": "palhaco",
  "coelho":"coelho",
  "grafiti":"grafiti"
};
    let styleId = styleMappings[args[0]];
console.log(styleId)



 if(args[0]=='gta'){
      let profile = await conn.profilePictureUrl(who, 'image').catch((_) => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
    
  


const requestBody = {
  init_image: profile,
  style_id: 'gta',
};

const apiUrl = 'https://api.itsrose.rest/image/_inference_style';
const authToken = itsrose;

let response = await fetch(apiUrl, {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Authorization': authToken,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(requestBody),
})
  .then(response => {
    console.log(response)
   return response.json()
    })
  .then(data => {console.log(data)
  console.log(data.result.images)
   conn.sendFile(m.chat, data.result.images[0],'error.jpg',null,m)
  }
  )
  .catch(error => console.error('Error:', error));
    
    
    
     return 
    
    }
 
  else if(!args[0]){
   m.reply(`─┅──┅❖ ༒︎ ❖─┅──┅ 
   𝑪𝒐𝒎𝒂𝒏𝒅𝒐 𝒊𝒏𝒗𝒂𝒍𝒊𝒅𝒐. ❌👁️
   𝑷𝒂𝒓𝒂 𝒖𝒔𝒂𝒓 𝒐𝒔 𝒆𝒇𝒆𝒊𝒕𝒐𝒔..
   𝒖𝒔𝒆 .𝒆𝒇𝒆𝒊𝒕𝒐 [𝒆𝒇𝒆𝒊𝒕𝒐]
   

𝙴𝚏𝚎𝚒𝚝𝚘𝚜 𝙸𝙰

♱ 𝙖𝙚𝙩𝙝𝙚𝙧
♱ 𝙖𝙞𝙧𝙗𝙚𝙣𝙙𝙚𝙧
♱ 𝙖𝙣𝙞𝙢𝙚
♱ 𝙖𝙫𝙖𝙩𝙖𝙧
♱ 𝙗𝙖𝙗𝙮
♱ 𝙗𝙖𝙧𝙗𝙞𝙚
♱ 𝙗𝙡𝙞𝙣𝙙𝙗𝙤𝙭
♱ 𝙗𝙡𝙤𝙘𝙠
♱ 𝙘𝙝𝙤𝙘𝙤𝙡𝙖𝙩𝙚
♱ 𝙘𝙝𝙧𝙞𝙨𝙩𝙢𝙖𝙨_3𝙙
♱ 𝙘𝙝𝙧𝙞𝙨𝙩𝙢𝙖𝙨_𝙖𝙣𝙞𝙢𝙚
♱ 𝙘𝙝𝙧𝙞𝙨𝙩𝙢𝙖𝙨_𝙘𝙖𝙧𝙩𝙤𝙤𝙣
♱ 𝙘𝙝𝙧𝙞𝙨𝙩𝙢𝙖𝙨_𝙘𝙤𝙢𝙞𝙘
♱ 𝙘𝙝𝙧𝙞𝙨𝙩𝙢𝙖𝙨_𝙥𝙞𝙭𝙚𝙡
♱ 𝙘𝙮𝙗𝙚𝙧𝙥𝙪𝙣𝙠
♱ 𝙙𝙖𝙣𝙞𝙡
𝙗𝙚𝙣𝙙𝙚𝙧
♱ 𝙜𝙝𝙖𝙞𝙧
♱ 𝙜𝙤𝙩𝙝𝙞𝙘
♱ 𝙜𝙩𝙖𝙫
♱ 𝙜𝙩𝙖
♱ 𝙝𝙖𝙡𝙡𝙤𝙬𝙚𝙚𝙣
♱ 𝙝𝙚𝙡𝙡
♱ 𝙝𝙚𝙧𝙤𝙚𝙨
♱ 𝙝𝙤𝙧𝙧𝙤𝙧
♱ 𝙄𝙡𝙡𝙪𝙨𝙩𝙧𝙖𝙩𝙞𝙤𝙣
♱ 𝙞𝙢𝙥𝙖𝙨𝙩𝙤
♱ 𝙟𝙤𝙟𝙤
♱ 𝙟𝙪𝙣𝙚𝙩
♱ 𝙡𝙪𝙢𝙞𝙣𝙤𝙪𝙨
♱ 𝙤𝙡𝙙
♱ 𝙤𝙣𝙚𝙥𝙞𝙚𝙘𝙚
♱ 𝙥𝙖𝙥𝙚𝙧𝙘𝙪𝙩
♱ 𝙥𝙞𝙭𝙚𝙡
♱ 𝙥𝙤𝙠𝙚𝙢𝙤𝙣
♱ 𝙧𝙙𝙧
♱ 𝙧𝙚𝙩𝙧𝙤
♱ 𝙧𝙞𝙘𝙠𝙢𝙤𝙧𝙩𝙮
♱ 𝙨𝙥𝙞𝙧𝙞𝙩𝙚𝙙
♱ 𝙨𝙪𝙧𝙮𝙖
♱ 𝙨𝙮𝙣𝙩𝙝𝙬𝙖𝙫𝙚
♱ 𝙩𝙖𝙩𝙩𝙤𝙤
♱ 𝙩𝙝𝙪𝙣𝙙𝙚𝙧
♱ 𝙬𝙤𝙣𝙠𝙖
♱ 𝙯𝙤𝙢𝙗𝙞𝙚

𝙵𝚒𝚕𝚝𝚛𝚘𝚜 𝚍𝚎 𝚒𝚖𝚊𝚐𝚎𝚖
♱ 𝙜𝙪𝙣
♱ 𝙘𝙤𝙢𝙪𝙣𝙞𝙨𝙩𝙖
♱ 𝙘𝙖𝙛𝙚
♱ 𝙙𝙚𝙨𝙚𝙣𝙝𝙤
♱ 𝙩𝙞𝙣𝙩𝙖
♱ 𝙡𝙖𝙥𝙞𝙨
♱ 𝘃𝗼𝗰𝙚
♱ 𝗽𝗿𝗼𝗰𝘂𝗿𝗮𝗱𝗼
♱ 𝗴𝗮𝘆
♱ 𝗴𝗿𝗮𝗳𝗶𝘁𝗶
♱ 𝗽𝗮𝗹𝗵𝗮𝗰𝗼
♱ 𝗰𝗼𝗲𝗹𝗵𝗼

─┅──┅❖ ִ𖤐 ❖─┅──┅   `)
return !0
 }
 
 
 else if (args[0] && !styleId) {
             m.reply(`─┅──┅❖ ༒︎ ❖─┅──┅ 
   𝑪𝒐𝒎𝒂𝒏𝒅𝒐 𝒊𝒏𝒗𝒂𝒍𝒊𝒅𝒐. ❌👁️
   𝑷𝒂𝒓𝒂 𝒖𝒔𝒂𝒓 𝒐𝒔 𝒆𝒇𝒆𝒊𝒕𝒐𝒔..
   𝒖𝒔𝒆 .𝒆𝒇𝒆𝒊𝒕𝒐 [𝒆𝒇𝒆𝒊𝒕𝒐]
   

𝙴𝚏𝚎𝚒𝚝𝚘𝚜 𝙸𝙰

♱ 𝙖𝙚𝙩𝙝𝙚𝙧
♱ 𝙖𝙞𝙧𝙗𝙚𝙣𝙙𝙚𝙧
♱ 𝙖𝙣𝙞𝙢𝙚
♱ 𝙖𝙫𝙖𝙩𝙖𝙧
♱ 𝙗𝙖𝙗𝙮
♱ 𝙗𝙖𝙧𝙗𝙞𝙚
♱ 𝙗𝙡𝙞𝙣𝙙𝙗𝙤𝙭
♱ 𝙗𝙡𝙤𝙘𝙠
♱ 𝙘𝙝𝙤𝙘𝙤𝙡𝙖𝙩𝙚
♱ 𝙘𝙝𝙧𝙞𝙨𝙩𝙢𝙖𝙨_3𝙙
♱ 𝙘𝙝𝙧𝙞𝙨𝙩𝙢𝙖𝙨_𝙖𝙣𝙞𝙢𝙚
♱ 𝙘𝙝𝙧𝙞𝙨𝙩𝙢𝙖𝙨_𝙘𝙖𝙧𝙩𝙤𝙤𝙣
♱ 𝙘𝙝𝙧𝙞𝙨𝙩𝙢𝙖𝙨_𝙘𝙤𝙢𝙞𝙘
♱ 𝙘𝙝𝙧𝙞𝙨𝙩𝙢𝙖𝙨_𝙥𝙞𝙭𝙚𝙡
♱ 𝙘𝙮𝙗𝙚𝙧𝙥𝙪𝙣𝙠
♱ 𝙙𝙖𝙣𝙞𝙡
𝙗𝙚𝙣𝙙𝙚𝙧
♱ 𝙜𝙝𝙖𝙞𝙧
♱ 𝙜𝙤𝙩𝙝𝙞𝙘
♱ 𝙜𝙩𝙖𝙫
♱ 𝙜𝙩𝙖
♱ 𝙝𝙖𝙡𝙡𝙤𝙬𝙚𝙚𝙣
♱ 𝙝𝙚𝙡𝙡
♱ 𝙝𝙚𝙧𝙤𝙚𝙨
♱ 𝙝𝙤𝙧𝙧𝙤𝙧
♱ 𝙄𝙡𝙡𝙪𝙨𝙩𝙧𝙖𝙩𝙞𝙤𝙣
♱ 𝙞𝙢𝙥𝙖𝙨𝙩𝙤
♱ 𝙟𝙤𝙟𝙤
♱ 𝙟𝙪𝙣𝙚𝙩
♱ 𝙡𝙪𝙢𝙞𝙣𝙤𝙪𝙨
♱ 𝙤𝙡𝙙
♱ 𝙤𝙣𝙚𝙥𝙞𝙚𝙘𝙚
♱ 𝙥𝙖𝙥𝙚𝙧𝙘𝙪𝙩
♱ 𝙥𝙞𝙭𝙚𝙡
♱ 𝙥𝙤𝙠𝙚𝙢𝙤𝙣
♱ 𝙧𝙙𝙧
♱ 𝙧𝙚𝙩𝙧𝙤
♱ 𝙧𝙞𝙘𝙠𝙢𝙤𝙧𝙩𝙮
♱ 𝙨𝙥𝙞𝙧𝙞𝙩𝙚𝙙
♱ 𝙨𝙪𝙧𝙮𝙖
♱ 𝙨𝙮𝙣𝙩𝙝𝙬𝙖𝙫𝙚
♱ 𝙩𝙖𝙩𝙩𝙤𝙤
♱ 𝙩𝙝𝙪𝙣𝙙𝙚𝙧
♱ 𝙬𝙤𝙣𝙠𝙖
♱ 𝙯𝙤𝙢𝙗𝙞𝙚

𝙵𝚒𝚕𝚝𝚛𝚘𝚜 𝚍𝚎 𝚒𝚖𝚊𝚐𝚎𝚖
♱ 𝙘𝙤𝙢𝙪𝙣𝙞𝙨𝙩𝙖
♱ 𝙘𝙖𝙛𝙚
♱ 𝙩𝙞𝙣𝙩𝙖
♱ 𝙡𝙖𝙥𝙞𝙨
♱ 𝙙𝙚𝙨𝙚𝙣𝙝𝙤
♱ 𝘃𝗼𝗰𝙚
♱ 𝗽𝗿𝗼𝗰𝘂𝗿𝗮𝗱𝗼
♱ 𝗴𝘂𝗻
♱ 𝗴𝗮𝘆
♱ 𝗴𝗿𝗮𝗳𝗶𝘁𝗶
♱ 𝗽𝗮𝗹𝗵𝗮𝗰𝗼
♱ 𝗰𝗼𝗲𝗹𝗵𝗼

─┅──┅❖ ִ𖤐 ❖─┅──┅   `)
    } 
    let profile = await conn.profilePictureUrl(who, 'image').catch((_) => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
    
  

const apiUrl = 'https://api.itsrose.rest/image/turnMe';
const authToken = itsrose;



let response = await  fetch('https://api.itsrose.rest/image/turnMe', {
  method: 'POST',
  headers: {
    'accept': 'application/json',
    'Authorization': itsrose,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "init_image": profile,
    "style": styleId,
    "skin": "default",
    "image_num": 4,
    "prompt": estiloPrompt,
    "strength": 0.57
  })
})
.then(response => {
    console.log(response)
   return response.json()
  
    })
    .then(data => {
      console.log(data)
      if (data.status && data.result && data.result.images) {
    for (let i = 0; i < data.result.images.length; i++) {
       conn.sendFile(m.chat, data.result.images[i], 'error.jpg', null, m);
        
    }
} else {
    console.error('Invalid data format');
    m.react("⚠️")
}
    })
  
  .catch(error => console.error('Error:', error));
   



  
  }
  

 
  
  

  
  
  
  if (!mime) {}
};
handler.help = ['zombie', 'zumbi'];
handler.tags = ['maker'];
handler.command = ['efeito']
handler.level = 23
export default handler;

const getRandom = (ext) => { 
    return `${Math.floor(Math.random() * 10000)}${ext}`;
}