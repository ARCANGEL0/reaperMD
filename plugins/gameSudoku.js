
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

  import { createCanvas } from 'canvas';
import {getSudoku} from 'sudoku-gen';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

let handler = async (m, { conn, text,groupMetadata, usedPrefix, isAdmin,command, participants,isOwner, args }) => {
if(!(isAdmin || isOwner|| m.sender==global.cocriador) && global.db.data.chats[m.chat].jogos===false){
   m.react("❌")
   
   return !0;
 } 
 
  if(  !global.db.data.chats[m.chat].sudoku){
      global.db.data.chats[m.chat].sudoku = {
    gameData: null ,
    singleplayer: null,
    jogadores:[],
    jogadas:{},
    regMsg: null,
    
  }
  }
  if(text == 'novo'){
  if(global.db.data.chats[m.chat].sudoku.gameData) {
    await m.reply(`╭─┅──┅❖ ༒ ❖─┅──┅
|           𝕤𝕦𝕕𝕠𝕜𝕦
|  𝑱𝒐𝒈𝒐 𝒆𝒎 𝒂𝒏𝒅𝒂𝒎𝒆𝒏𝒕𝒐
*╰─┅──┅❖ ⸸ ❖─┅──┅*`)
  }
  else {
  let introh = await conn.sendFile(m.chat, `https://telegra.ph/file/2af2af5307c7e3f7416ad.jpg`, 'sudoku.png', `*╭─┅──┅❖  ❖─┅──┅*
|           𝕤𝕦𝕕𝕠𝕜𝕦
| 𝑫𝒊𝒈𝒊𝒕𝒆 𝒂 𝒐𝒑𝒄𝒂𝒐 𝒅𝒆 𝒋𝒐𝒈𝒐. . .
| 1. *Singleplayer*
| 2. *Multiplayer*
|
*╰─┅──┅❖ ⸸ ❖─┅──┅*`, m);
      
    global.db.data.chats[m.chat].sudoku.regMsg = introh.key.id
  // Generate a new Sudoku puzzle

  // Cria o canvas
}
}

if(text == 'entrar' && global.db.data.chats[m.chat].sudoku.singleplayer == false){
  if(global.db.data.chats[m.chat].sudoku.gameData) {
    await m.reply(`╭─┅──┅❖ ༒ ❖─┅──┅
|           𝕤𝕦𝕕𝕠𝕜𝕦
|  𝑱𝒐𝒈𝒐 𝒆𝒎 𝒂𝒏𝒅𝒂𝒎𝒆𝒏𝒕𝒐
*╰─┅──┅❖ ⸸ ❖─┅──┅*`)
return !0
}
  if(global.db.data.chats[m.chat].sudoku.jogadores.includes(m.sender)){
       await m.reply(`╭─┅──┅❖ ༒ ❖─┅──┅
|           𝕤𝕦𝕕𝕠𝕜𝕦
| 𝑽𝒐𝒄𝒆 𝒋𝒂 𝒆𝒔𝒕𝒂 𝒂𝒔𝒔𝒊𝒈𝒏𝒂𝒅𝒐 𝒂 𝒖𝒎 𝒋𝒐𝒈𝒐. . .
*╰─┅──┅❖ ⸸ ❖─┅──┅*`)
return !0
  }
  global.db.data.chats[m.chat].sudoku.jogadores.push(m.sender);
    let message = `━━━━━━━━━⬣ 𖤐 ⬣━━━━━━━━

𝘑𝘰𝘨𝘢𝘥𝘰𝘳𝘦𝘴:
`

global.db.data.chats[m.chat].sudoku.jogadores.forEach(player => {
    message += `⛦ @${player.split("@")[0]}\n`;
});

message += `━━━━━━━━⬣━━━━━━━━`
   return conn.reply(m.chat, message, m, { mentions: global.db.data.chats[m.chat].sudoku.jogadores });
   
   
}

if (text === 'apagar' && (m.sender === global.criador || m.sender === global.cocriador || global.db.data.chats[m.chat].sudoku.jogadores.includes(m.sender)))   {
    delete global.db.data.chats[m.chat].sudoku
    
    m.react("✅")
  }
  
  if(text == 'iniciar' && global.db.data.chats[m.chat].sudoku.singleplayer == false)
  {
    
    const puzzle = getSudoku('hard'); // You can choose the difficulty
  console.log('%%%%%%%%')
  console.log(puzzle)
  console.log('%%%%%%%%')
  
    global.db.data.chats[m.chat].sudoku.gameData = puzzle
  global.db.data.chats[m.chat].sudoku.gameData.status = puzzle.puzzle
  const canvasSize = 500; // tamanho s
  const canvas = createCanvas(canvasSize, canvasSize);
  const ctx = canvas.getContext('2d');
  
  // config grade
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = 'black';
  ctx.lineWidth = 1;
  ctx.font = '20px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = 'black'; // Texto cor
  
  // offset pra guias
  const offset = 25; // Offset pra numeros e letras
  
  // desenha a grade com guias
  for (let i = 0; i <= 9; i++) {
    for (let j = 0; j <= 9; j++) {
      // linhas verticais
      ctx.lineWidth = (i % 3 === 0 && i !== 0) ? 2 : 1;
      ctx.beginPath();
      ctx.moveTo(offset + i * 50, offset);
      ctx.lineTo(offset + i * 50, canvasSize - offset);
      ctx.stroke();
  
      // linhas horizontais
      ctx.lineWidth = (j % 3 === 0 && j !== 0) ? 2 : 1;
      ctx.beginPath();
      ctx.moveTo(offset, offset + j * 50);
      ctx.lineTo(canvasSize - offset, offset + j * 50);
      ctx.stroke();
    }
  }
  
  // números horizontais (1-9)
  for (let i = 1; i <= 9; i++) {
    ctx.fillText(i.toString(), offset + (i - 1) * 50 + 25, offset / 2);
  }
  
  // letras verticais (A-I)
  for (let i = 0; i < 9; i++) {
    ctx.fillText(String.fromCharCode(65 + i), offset / 2, offset + i * 50 + 25);
  }
  
  // Numeros do puzzle 
  for (let i = 0; i < 81; i++) {
    const num = puzzle.puzzle[i];
    if (num !== '-') { // Celula com numero
      const x = (i % 9) * 50 + 25 + offset;
      const y = Math.floor(i / 9) * 50 + 25 + offset;
      ctx.fillText(num, x, y);
    }
  }
  
  // Generate a random code for the filename
  const randomCode = Math.random().toString(36).substring(2, 8);
  
  // Define the base directory and tmp folder path
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const tmpDir = join(__dirname, 'tmp');
  
  // Ensure the tmp directory exists
  if (!fs.existsSync(tmpDir)) {
    fs.mkdirSync(tmpDir);
  }
  
  // Save the canvas to an image in the tmp folder
  const filePath = join(tmpDir, `sudoku_${randomCode}.png`);
  const out = fs.createWriteStream(filePath);
  const stream = canvas.createPNGStream();
  stream.pipe(out);
  out.on('finish', async () => {
    console.log(`The Sudoku image was saved as ${filePath}`);
    // Now that the file is written, send it
    try {
         let msgh = await conn.sendFile(m.chat, filePath, 'sudoku.png', `┅──┅❖┅──┅
𖤐 𝑺𝑼𝑫𝑶𝑲𝑼 é 𝒖𝒎 𝒍𝒖𝒈𝒖𝒃𝒓𝒆 𝒋𝒐𝒈𝒐 𝒋𝒂𝒑𝒐𝒏𝒆𝒔 𝒅𝒆 𝒍𝒐𝒈𝒊𝒄𝒂 𝒆 𝒆𝒔𝒕𝒓𝒂𝒕𝒆𝒈𝒊𝒂 𝒒𝒖𝒆 𝒄𝒐𝒏𝒔𝒊𝒔𝒕𝒆 𝒆𝒎 𝒇𝒐𝒓𝒎𝒂𝒓 9 𝒑𝒆𝒏𝒐𝒔𝒂𝒔 𝒍𝒊𝒏𝒉𝒂𝒔 𝒆 𝒄𝒐𝒍𝒖𝒏𝒂𝒔 𝒑𝒓𝒆𝒆𝒏𝒄𝒉𝒊𝒅𝒂𝒔 𝒄𝒐𝒎 𝒂 𝒎𝒂𝒊𝒔 𝒂𝒔𝒔𝒐𝒎𝒃𝒓𝒐𝒔𝒂 𝒏𝒖𝒎𝒆𝒓𝒂𝒄𝒂𝒐 𝒅𝒆 1 𝒂 9 𝒏𝒂𝒐 𝒑𝒆𝒓𝒎𝒊𝒕𝒊𝒏𝒅𝒐 𝒐 𝒆𝒄𝒐 𝒗𝒂𝒛𝒊𝒐 𝒅𝒂𝒔 𝒓𝒆𝒑𝒆𝒕𝒊𝒄𝒐𝒆𝒔 𝒏𝒂𝒔 𝒉𝒐𝒓𝒊𝒛𝒐𝒏𝒕𝒂𝒊𝒔 𝒆 𝒗𝒆𝒓𝒕𝒊𝒄𝒂𝒊𝒔.

𝑷𝒂𝒓𝒂 𝒋𝒐𝒈𝒂𝒓 𝒆𝒔𝒔𝒂 𝒕𝒐𝒓𝒕𝒖𝒐𝒔𝒂 𝒅𝒊𝒔𝒑𝒖𝒕𝒂 𝒅𝒆 𝒑𝒓𝒆𝒆𝒏𝒄𝒉𝒆𝒓 𝒗𝒂𝒛𝒊𝒐𝒔 𝒆𝒙𝒊𝒔𝒕𝒆𝒏𝒄𝒊𝒂𝒊𝒔 𝒓𝒆𝒔𝒑𝒐𝒏𝒅𝒂 𝒂 𝒑𝒐𝒔𝒊𝒄𝒂𝒐 𝒅𝒆 𝒍𝒊𝒏𝒉𝒂 + 𝒄𝒐𝒍𝒖𝒏𝒂 + 𝒕𝒂𝒍 𝒄𝒐𝒃𝒊𝒄𝒂𝒅𝒐 𝒏𝒖𝒎𝒆𝒓𝒐 𝒅𝒆𝒔𝒆𝒋𝒂𝒅𝒐.
𝑬𝒙𝒆𝒎𝒑𝒍𝒐.: 𝑫5 7
┅──┅❖┅──┅
      `, m);
      
    global.db.data.chats[m.chat].sudoku.regMsg = msgh.key.id
      console.log('File sent!', msgh);
    } catch (error) {
      console.error('Failed to send file:', error);
    }
  });
  
    
  }
  if(!text || text == 'info'){
    
   await m.reply(`╭─┅──┅❖─┅──┅
|               𝕤𝕦𝕕𝕠𝕜𝕦
|
| 𖤐 𝑺𝑼𝑫𝑶𝑲𝑼 é 𝒖𝒎 𝒍𝒖𝒈𝒖𝒃𝒓𝒆 𝒋𝒐𝒈𝒐 𝒋𝒂𝒑𝒐𝒏𝒆𝒔 𝒅𝒆 𝒍𝒐𝒈𝒊𝒄𝒂 𝒆 𝒆𝒔𝒕𝒓𝒂𝒕𝒆𝒈𝒊𝒂 𝒒𝒖𝒆 𝒄𝒐𝒏𝒔𝒊𝒔𝒕𝒆 𝒆𝒎 𝒇𝒐𝒓𝒎𝒂𝒓 9 𝒑𝒆𝒏𝒐𝒔𝒂𝒔 𝒍𝒊𝒏𝒉𝒂𝒔 𝒆 𝒄𝒐𝒍𝒖𝒏𝒂𝒔 𝒑𝒓𝒆𝒆𝒏𝒄𝒉𝒊𝒅𝒂𝒔 𝒄𝒐𝒎 𝒂 𝒎𝒂𝒊𝒔 𝒂𝒔𝒔𝒐𝒎𝒃𝒓𝒐𝒔𝒂 𝒏𝒖𝒎𝒆𝒓𝒂𝒄𝒂𝒐 𝒅𝒆 1 𝒂 9 𝒏𝒂𝒐 𝒑𝒆𝒓𝒎𝒊𝒕𝒊𝒏𝒅𝒐 𝒐 𝒆𝒄𝒐 𝒗𝒂𝒛𝒊𝒐 𝒅𝒂𝒔 𝒓𝒆𝒑𝒆𝒕𝒊𝒄𝒐𝒆𝒔 𝒏𝒂𝒔 𝒉𝒐𝒓𝒊𝒛𝒐𝒏𝒕𝒂𝒊𝒔 𝒆 𝒗𝒆𝒓𝒕𝒊𝒄𝒂𝒊𝒔.

𝑷𝒂𝒓𝒂 𝒋𝒐𝒈𝒂𝒓 , 𝒅𝒊𝒈𝒊𝒕𝒆 *.𝒔𝒖𝒅𝒐𝒌𝒖 𝒏𝒐𝒗𝒐* 𝒑𝒂𝒓𝒂 𝒊𝒏𝒊𝒄𝒊𝒂𝒓
      
*╰─┅──┅❖ ⸸ ❖─┅──┅*`)
return !0
  }
  
}

handler.command = ['sudoku','sdk'] 
export default handler
function wait(seconds) {
  return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}
 