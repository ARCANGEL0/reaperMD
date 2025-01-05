
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

if(!(isAdmin || isOwner || m.sender==global.cocriador) && global.db.data.chats[m.chat].jogos===false){
   m.react("❌")
   
   return !0;
 } 
 
 
const words = [
  { palavra: 'Corvo', dica: 'A ave negra associada a morte.' },
  { palavra: 'Caveira', dica: 'O simbolo do que resta apos a morte.' },
  { palavra: 'Escuridao', dica: 'A ausencia completa de luz.' },
  { palavra: 'Noite', dica: 'O periodo quando tudo fica escuro.' },
  { palavra: 'Espirito', dica: 'A presenca invisivel de alguém que se foi.' },
  { palavra: 'Sepultura', dica: 'O lugar onde os mortos sao enterrados.' },
  { palavra: 'Sombrio', dica: 'Um lugar ou situacao que provoca medo.' },
  { palavra: 'Cemitério', dica: 'O local de descanso final.' },
  { palavra: 'Abandonado', dica: 'Um lugar que foi deixado para tras.' },
  { palavra: 'Ritual', dica: 'Uma cerimônia com significado especial.' },
  { palavra: 'Lamento', dica: 'O som de alguém que esta triste ou chorando.' },
  { palavra: 'Mortalha', dica: 'O pano que cobre um corpo falecido.' },
  { palavra: 'Cripta', dica: 'Um espaco onde sao enterrados os mortos.' },
  { palavra: 'Hades', dica: 'O rei dos mortos na mitologia grega.' },
  { palavra: 'Inferno', dica: 'Local de tormento do pecado.' },
  { palavra: 'Vampiro', dica: 'Criatura que se alimenta do sangue.' },
  { palavra: 'Sarcofago', dica: 'Caixao de pedra para enterramento.' },
  { palavra: 'Gargula', dica: 'Escultura de pedra com forma de monstro.' },
  { palavra: 'Pesadelo', dica: 'Um terror frequente todas as noites em teu subconsciente.' },
  { palavra: 'Obscuro', dica: 'Algo que é misterioso e nao nefasto.' },
  { palavra: 'Necro', dica: 'Prefixo relacionado a morte e cadaveres.' },
  { palavra: 'Putrefacao', dica: 'O processo de decomposicao dos corpos.' },
  { palavra: 'Catacumbas', dica: 'Túneis subterrâneos usados como sepulturas.' },
  { palavra: 'Sepulcro', dica: 'Um lugar onde os mortos sao enterrados.' },
  { palavra: 'Gato Preto', dica: 'Um simbolo de supersticao e ma sorte.' },
  { palavra: 'Morcego', dica: 'A criatura noturna ligada ao vampirismo.' },
  { palavra: 'Rato', dica: 'Um animal associado a ambientes sombrios e decadentes.' },
  { palavra: 'Coracao Delator', dica: 'Historia de culpa crescente apos um assassinato.' },
  { palavra: 'O Poco e o Pendulo', dica: 'Historia de tortura e sobrevivencia em uma prisao.' },
  { palavra: 'O Retrato Oval', dica: 'Historia sobre um retrato e o custo de um amor destrutivo.' },
  { palavra: 'Os Assassinatos da Rua Morgue', dica: 'Primeira historia de detetive e romance policial feita no mundo, sobre um crime misterioso.' },
  { palavra: 'Corredor', dica: 'Passagem estreita, muitas vezes sombria, em edificios antigos.' },
  { palavra: 'Enigma', dica: 'Algo misterioso e dificil de entender.' },
  { palavra: 'Escapulario', dica: 'Pequeno amuleto usado como protecao.' },
  { palavra: 'Gotico', dica: 'Estilo arquitetônico e literario caracterizado por mistério e trevas.' },
  { palavra: 'Grave', dica: 'Relativo a algo sério e de grande importância.' },
  { palavra: 'Grito', dica: 'Som agudo associado ao medo e pavor.' },
  { palavra: 'Inferno', dica: 'Lugar de tormento eterno, segundo algumas crencas.' },
  { palavra: 'Labirinto', dica: 'Estrutura confusa que simboliza desorientacao.' },
  { palavra: 'Mistério', dica: 'Qualidade de algo desconhecido e intrigante.' },
  { palavra: 'Necromancia', dica: 'Arte de invocar os mortos.' },
  { palavra: 'Noturno', dica: 'Relativo a noite e ao mistério.' },
  { palavra: 'Ruinas', dica: 'Restos de uma construcao antiga e decaida.' },
  { palavra: 'Purgatorio', dica: 'Lugar de purificacao apos a morte.' },
  { palavra: 'Apocalipse', dica: 'Visao do fim dos tempos, frequentemente associada a cenarios sombrios.' },
  { palavra: 'Arcanjo', dica: 'Anjo de alta hierarquia.' },
  { palavra: 'Arcano', dica: 'Conhecimento secreto ou oculto, muitas vezes usado em rituais.' },
  { palavra: 'Anubis', dica: 'Deus com cabeca de chacal, guardiao dos mortos e da mumificacao.' },
  { palavra: 'Tim Burton', dica: 'Diretor conhecido por seus filmes com estética gotica e sombria.' },
  { palavra: 'Auguste Dupin', dica: 'Detetive criado por Edgar Allan Poe, precursor dos personagens de detetives na literatura.' },
  { palavra: 'Morte', dica: 'O fim de todas as coisas' }
];
if(!global.db.data.chats[m.chat].palavras){
  global.db.data.chats[m.chat].palavras = {
    jogo:[],
    solucao:[],
    numeros:[],
    clueNumbers:[],
    jogadores:[]
  }
}  
  
const getRandom = (ext) => { 
    return `${Math.floor(Math.random() * 10000)}${ext}`;
}


const randomWords = words.sort(() => 0.4 - Math.random()).slice(0, 12);

const boardSize = 15;
let board = Array.from({ length: boardSize }, () => Array(boardSize).fill(null));
let solution = Array.from({ length: boardSize }, () => Array(boardSize).fill(null));
let numbering = Array.from({ length: boardSize }, () => Array(boardSize).fill(null));


// Funcao para verificar se uma palavra pode ser colocada em uma posicao com intersecao

// Funcao para colocar a palavra no tabuleiro
function canPlaceWord(word, x, y, direction) {
  if (direction === 'horizontal') {
    if (x < 0 || x + word.length > boardSize || y < 0 || y >= boardSize) return false;
    let hasIntersection = false;
    for (let i = 0; i < word.length; i++) {
      if (board[y][x + i] !== null) {
        if (board[y][x + i] !== word[i]) return false;
        hasIntersection = true;
      } else {
        if (y > 0 && board[y-1][x+i] !== null) return false;
        if (y < boardSize - 1 && board[y+1][x+i] !== null) return false;
      }
    }
    // Verificar se nao ha palavras horizontais adjacentes
    if (x > 0 && board[y][x-1] !== null) return false;
    if (x + word.length < boardSize && board[y][x+word.length] !== null) return false;
    return hasIntersection || board.flat().filter(cell => cell !== null).length === 0;
  } else { // vertical
    if (x < 0 || x >= boardSize || y < 0 || y + word.length > boardSize) return false;
    let hasIntersection = false;
    for (let i = 0; i < word.length; i++) {
      if (board[y + i][x] !== null) {
        if (board[y + i][x] !== word[i]) return false;
        hasIntersection = true;
      } else {
        if (x > 0 && board[y+i][x-1] !== null) return false;   
        if (x < boardSize - 1 && board[y+i][x+1] !== null) return false;
      }
    }
    // Verificar se nao ha palavras verticais adjacentes
    if (y > 0 && board[y-1][x] !== null) return false;
    if (y + word.length < boardSize && board[y+word.length][x] !== null) return false;
    return hasIntersection || board.flat().filter(cell => cell !== null).length === 0;
  }
}

function placeWord(word, x, y, direction) {
  if (direction === 'horizontal') {
    for (let i = 0; i < word.length; i++) {
      if (board[y][x + i] === null) {
        board[y][x + i] = word[i];
        solution[y][x + i] = word[i];
         
      }
    }
  } else {
    for (let i = 0; i < word.length; i++) {
      if (board[y + i][x] === null) {
        board[y + i][x] = word[i];
        solution[y + i][x] = word[i];
       
      }
    }
  }
}

function findBestPosition(word) {
  const directions = ['horizontal', 'vertical'];
  const attempts = 1000;

  for (let i = 0; i < attempts; i++) {
    const direction = directions[Math.floor(Math.random() * directions.length)];
    for (let y = 0; y < boardSize; y++) {
      for (let x = 0; x < boardSize; x++) {
        if (canPlaceWord(word.palavra.toUpperCase(), x, y, direction)) {
          placeWord(word.palavra.toUpperCase(), x, y, direction);
          return { x, y, direction };
        }
      }
    }
  }

  return null;
}



function placeAllWords() {
  let placedWords = [];
  for (let word of randomWords) {
    const position = findBestPosition(word);
    if (position) {
      placedWords.push({ ...word, ...position });
    }
  }
  return placedWords;
}



// Numerar as casas
function numberSquares() {
  let number = 1;
  for (let y = 0; y < boardSize; y++) {
    for (let x = 0; x < boardSize; x++) {
      if (board[y][x] !== null) {
        numbering[y][x] = number++

        
        
      }
    }
  }
 
}

// Ajustar dicas com numeracao correta
function adjustHints(placedWords) {
  global.db.data.chats[m.chat].palavras.clueNumbers = placedWords.map(word => {
    const startNumber = numbering[word.y][word.x];
    return `${startNumber}. ${word.dica}`;
  });
}

// 

// Renderizar o tabuleiro
async function renderBoard() {
  global.db.data.chats[m.chat].palavras.numeros =numbering
  global.db.data.chats[m.chat].palavras.solucao = solution
  global.db.data.chats[m.chat].palavras.jogo = Array.from({ length: boardSize }, () => Array(boardSize).fill(null));
  
  const cellSize = 40;
  const hintsBoxHeight = 130;
  const titleHeight = 30;
  const canvas = createCanvas(boardSize * cellSize, boardSize * cellSize + hintsBoxHeight + titleHeight);
  const ctx = canvas.getContext('2d');

  // Desenhar fundo branco


 
  // { Desenhar titulo
  ctx.fillStyle = 'white';
ctx.font = '18px "Old English Text MT", "Goudy Old Style", "Book Antiqua", "Century Gothic", serif';
  ctx.textAlign = 'center';
  ctx.fillText(`Edgar Allan Bot v${vs}`, canvas.width / 2, 20);
//} 
   
   
  // Desenhar grade
  ctx.textAlign = 'left';
  ctx.font = '12px Arial';
  for (let y = 0; y < boardSize; y++) {
    for (let x = 0; x < boardSize; x++) {
      ctx.strokeRect(x * cellSize, y * cellSize + titleHeight, cellSize, cellSize);
      let letra = global.db.data.chats[m.chat].palavras.jogo[y][x] ==null ? '' : global.db.data.chats[m.chat].palavras.jogo[y][x]
      if (solution[y][x] !== null) {
              ctx.fillStyle = 'white';
        ctx.fillRect(x * cellSize, y * cellSize + titleHeight, cellSize, cellSize);
        ctx.font = '20px Arial';
        ctx.fillStyle = 'black';
        ctx.textAlign = 'center';
        ctx.fillText(letra, x * cellSize + cellSize / 2, y * cellSize + cellSize / 2 + titleHeight + 7);
        ctx.textAlign = 'left';
        ctx.font = '12px Arial';
  
      if (numbering[y][x] !== null) {

       
       
        ctx.fillText(numbering[y][x], x * cellSize + 2, y * cellSize + 12 + titleHeight);
      }
      } else {
        ctx.fillStyle = 'black';
        ctx.fillRect(x * cellSize, y * cellSize + titleHeight, cellSize, cellSize);

      }
    }
  }

  // Desenhar dicas
  const lineHeight = 7.5;
  ctx.fillStyle = 'white';
  ctx.font = '8px Arial';
  for (let i = 0; i < global.db.data.chats[m.chat].palavras.clueNumbers.length; i++) {
    ctx.fillText(global.db.data.chats[m.chat].palavras.clueNumbers[i], 10, boardSize * cellSize + titleHeight + lineHeight * (i + 1));
  }

  // Salvar imagem em um arquivo
  const buffer = canvas.toBuffer('image/png');
   let words1 = getRandom('.png'); 
    let fileGame = join(__dirname, '../tmp/' + words1);
    
    fs.writeFileSync(fileGame, buffer);
  // Enviar arquivo, assumindo que a variavel `conn` e o método `m.chat` estao definidos no contexto do codigo
  conn.sendFile(m.chat, fileGame, 'crossword.png', `╭─┅──┅❖ ༒ ❖─┅──┅
  𖤐 𝑷𝑨𝑳𝑨𝑽𝑹𝑨𝑺 𝑪𝑹𝑼𝒁𝑨𝑫𝑨𝑺 é 𝒖𝒎 𝒎𝒂𝒄𝒂𝒃𝒓𝒐 𝒋𝒐𝒈𝒐 𝒅𝒆 𝒓𝒂𝒄𝒊𝒐𝒄𝒊́𝒏𝒊𝒐 𝒆 𝒆𝒔𝒕𝒓𝒂𝒕𝒆𝒈𝒊𝒂 𝒒𝒖𝒆 𝒄𝒐𝒏𝒔𝒊𝒔𝒕𝒆 𝒆𝒎 𝒇𝒐𝒓𝒎𝒂𝒓 𝒑𝒂𝒍𝒂𝒗𝒓𝒂𝒔 𝒄𝒓𝒖𝒛𝒂𝒏𝒅𝒐 𝒍𝒆𝒕𝒓𝒂𝒔 𝒆𝒎 𝒍𝒊𝒏𝒉𝒂𝒔 𝒆 𝒄𝒐𝒍𝒖𝒏𝒂𝒔, 𝒔𝒆𝒈𝒖𝒊𝒏𝒅𝒐 𝒑𝒊𝒔𝒕𝒂𝒔 𝒆𝒏𝒊𝒈𝒎𝒂́𝒕𝒊𝒄𝒂𝒔 𝒑𝒂𝒓𝒂 𝒑𝒓𝒆𝒆𝒏𝒄𝒉𝒆𝒓 𝒐 𝒕𝒂𝒃𝒖𝒍𝒆𝒊𝒓𝒐 𝒔𝒆𝒎 𝒅𝒆𝒊𝒙𝒂𝒓 𝒆𝒔𝒑𝒂𝒄𝒐𝒔 𝒗𝒂𝒛𝒊𝒐𝒔.

𝑷𝒂𝒓𝒂 𝒋𝒐𝒈𝒂𝒓, 𝒊𝒏𝒅𝒊𝒒𝒖𝒆 𝒂 𝒑𝒐𝒔𝒊𝒄̧𝒂̃𝒐 + 𝒂 𝒍𝒆𝒕𝒓𝒂 𝒅𝒆𝒔𝒆𝒋𝒂𝒅𝒂.
𝑬𝒙𝒆𝒎𝒑𝒍𝒐: .plv 22 B

*╰─┅──┅❖ ⸸ ❖─┅──┅*`,m);
}
async function typeNew() {
 
  
  const cellSize = 40;
  const hintsBoxHeight = 130;
  const titleHeight = 30;
  const canvas = createCanvas(boardSize * cellSize, boardSize * cellSize + hintsBoxHeight + titleHeight);
  const ctx = canvas.getContext('2d');

  // Desenhar fundo branco


 
  // { Desenhar titulo
  ctx.fillStyle = 'white';
ctx.font = '18px "Old English Text MT", "Goudy Old Style", "Book Antiqua", "Century Gothic", serif';
  ctx.textAlign = 'center';
  ctx.fillText(`Edgar Allan Bot v${vs}`, canvas.width / 2, 20);
//} 
   
   
  // Desenhar grade
  ctx.textAlign = 'left';
  ctx.font = '12px Arial';
  for (let y = 0; y < boardSize; y++) {
    for (let x = 0; x < boardSize; x++) {
      ctx.strokeRect(x * cellSize, y * cellSize + titleHeight, cellSize, cellSize);
      let letra = global.db.data.chats[m.chat].palavras.jogo[y][x] ==null ? '' : global.db.data.chats[m.chat].palavras.jogo[y][x]
      if (global.db.data.chats[m.chat].palavras.solucao[y][x] !== null) {
              ctx.fillStyle = 'white';
        ctx.fillRect(x * cellSize, y * cellSize + titleHeight, cellSize, cellSize);
        ctx.font = '20px Arial';
        ctx.fillStyle = 'black';
        ctx.textAlign = 'center';
        ctx.fillText(letra, x * cellSize + cellSize / 2, y * cellSize + cellSize / 2 + titleHeight + 7);
        ctx.textAlign = 'left';
        ctx.font = '12px Arial';
  
      if (global.db.data.chats[m.chat].palavras.numeros[y][x] !== null) {

       
       
        ctx.fillText(global.db.data.chats[m.chat].palavras.numeros[y][x], x * cellSize + 2, y * cellSize + 12 + titleHeight);
      }
      } else {
        ctx.fillStyle = 'black';
        ctx.fillRect(x * cellSize, y * cellSize + titleHeight, cellSize, cellSize);

      }
    }
  }

  // Desenhar dicas
  const lineHeight = 7.5;
  ctx.fillStyle = 'white';
  ctx.font = '8px Arial';
  for (let i = 0; i < global.db.data.chats[m.chat].palavras.clueNumbers.length; i++) {
    ctx.fillText(global.db.data.chats[m.chat].palavras.clueNumbers[i], 10, boardSize * cellSize + titleHeight + lineHeight * (i + 1));
  }

  // Salvar imagem em um arquivo
  const buffer = canvas.toBuffer('image/png');
   let wordNew1 = getRandom('.png'); 
    let filenWord = join(__dirname, '../tmp/' + wordNew1);
    
  fs.writeFileSync(filenWord, buffer);
  // Enviar arquivo, assumindo que a variavel `conn` e o método `m.chat` estao definidos no contexto do codigo
  m.react("✔️")
  if(isGameComplete()){
      global.db.data.chats[m.chat].users[m.sender].money += 25
  global.db.data.chats[m.chat].users[m.sender].exp += 1
  global.db.data.chats[m.chat].users[m.sender].pontos++
  const users = global.db.data.chats[m.chat].users


Object.keys(users).forEach(user => {
  users[user].money += 125;
  users[user].exp += 300;
  users[user].pontos++;
});
  conn.sendFile(m.chat, filenWord, 'crossword.png', `⎔⎓─────────────.
─┅❖ 𝔉𝔦𝔪 𝔡𝔢 𝔍𝔬𝔤𝔬 ❖┅─
𝑶 𝒋𝒐𝒈𝒐 𝒆𝒏𝒊𝒈𝒎𝒂𝒕𝒊𝒄𝒐 𝒆𝒏𝒄𝒐𝒏𝒕𝒓𝒐𝒖 𝒔𝒆𝒖 𝒊𝒏𝒆𝒙𝒐𝒓𝒂𝒗𝒆𝒍 𝒅𝒆𝒔𝒇𝒆𝒄𝒉𝒐. 𝑷𝒂𝒓𝒂𝒃𝒆𝒏𝒔 𝒂𝒐𝒔 𝒒𝒖𝒆 𝒐𝒖𝒔𝒂𝒓𝒂𝒎 𝒅𝒆𝒔𝒂𝒇𝒊𝒂𝒓 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔 𝒅𝒐 𝒆𝒏𝒊𝒈𝒎𝒂

𝙾𝚜 𝚓𝚘𝚐𝚊𝚍𝚘𝚛𝚎𝚜 𝚚𝚞𝚎 𝚙𝚊𝚛𝚝𝚒𝚌𝚒𝚙𝚊𝚛𝚊𝚖 𝚐𝚊𝚗𝚑𝚊𝚛𝚊𝚘

+𝟷 𝚙𝚘𝚗𝚝𝚘
+𝟷𝟸𝟻 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ
+𝟹𝟶𝟶 𝚡𝚙
╰─...⎔⎓──────────`,m);



  }else{
  global.db.data.chats[m.chat].users[m.sender].money += 25
  global.db.data.chats[m.chat].users[m.sender].exp += 60
  global.db.data.chats[m.chat].users[m.sender].pontos++
  
  conn.sendFile(m.chat, filenWord, 'crossword.png', `⎔⎓─────────────.
✞︎ 𝚅𝚘𝚌𝚎 𝚊𝚌𝚎𝚛𝚝𝚘𝚞!
𝙶𝚊𝚗𝚑𝚊𝚛a:

+𝟷 𝚙𝚘𝚗𝚝𝚘
+𝟸𝟻 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ
+𝟼𝟶 𝚡𝚙
╰─...⎔⎓──────────`,m);
}
}

function isGameComplete() {
  for (let y = 0; y < boardSize; y++) {
    for (let x = 0; x < boardSize; x++) {
      if (global.db.data.chats[m.chat].palavras.solucao[y][x] !== null &&
          global.db.data.chats[m.chat].palavras.jogo[y][x] === null) {
        return false;
      }
    }
  }
  return true;
}

function tentativaJogo(textInput) {
  const [numeroStr, letra] = textInput.split(' ');
  const numero = parseInt(numeroStr);
  const letraUpper = letra.toUpperCase();

  let x = -1, y = -1;
  
  // Find the position of the number in the numbering array
  for (let i = 0; i < boardSize; i++) {
    for (let j = 0; j < boardSize; j++) {
      if (global.db.data.chats[m.chat].palavras.numeros[i][j] === numero) {
        x = j;
        y = i;
        break;
      }
    }
    if (x !== -1 && y !== -1) break;
  }

  // Check if the position was found and if the letter matches the solution
  if (x !== -1 && y !== -1) {
    if (global.db.data.chats[m.chat].palavras.solucao[y][x] === letraUpper) {
      if(global.db.data.chats[m.chat].palavras.solucao[y][x] == global.db.data.chats[m.chat].palavras.jogo[y][x]){
          return m.reply(`⎔⎓─────────────.
𝙴𝚜𝚝𝚊 𝚕𝚎𝚝𝚛𝚊 𝚓𝚊 𝚏𝚘𝚒 𝚙𝚛𝚎𝚎𝚗𝚌𝚑𝚒𝚍𝚊 ✞︎
╰─...⎔⎓──────────`)
      }
      
      
      
      global.db.data.chats[m.chat].palavras.jogo[y][x] = letraUpper;
      console.log('Acertou!');
      typeNew();
    } else {
        return m.reply(`⎔⎓─────────────.
✞︎ 𝙴𝚛𝚛𝚊𝚍𝚘. 𝚃𝚎𝚗𝚝𝚎 𝚗𝚘𝚟𝚊𝚖𝚎𝚗𝚝𝚎
╰─...⎔⎓──────────`)
      console.log('Falhou!');
      m.react('✖️');
    }
  } else {
    console.log('Número nao encontrado no tabuleiro.');
    
    m.react('❗');
  }
}
// Processo principal
if(!text){
  if(global.db.data.chats[m.chat].palavras.jogo.length  !== 0){
  return m.reply(`⎔⎓─────────────.
  𝙹𝚘𝚐𝚘 𝚎𝚖 𝚊𝚗𝚍𝚊𝚖𝚎𝚗𝚝𝚘! ✞︎
╰─...⎔⎓──────────`)
}
else{
  m.react("⏳")
const placedWords = placeAllWords();
console.log(solution)
console.log('─┅──┅❖ ─┅──┅❖ ')
  global.db.data.chats[m.chat].palavras.solucao = solution
numberSquares();
adjustHints(placedWords);
renderBoard();
}

}
if(text== 'apagar'){
  if(!global.db.data.chats[m.chat].palavras.jogo){
    m.reply(`𝑵𝒂𝒐 𝒆𝒙𝒊𝒔𝒕𝒆 𝒏𝒆𝒏𝒉𝒖𝒎 𝒋𝒐𝒈𝒐 𝒆𝒎 𝒂𝒃𝒆𝒓𝒕𝒐!`)
  }
  else{
    let messg = await m.reply(`җ 𝑷𝒐𝒃𝒓𝒆 𝒂𝒍𝒎𝒂, 𝒕𝒆𝒏𝒔 𝒄𝒆𝒓𝒕𝒆𝒛𝒂 𝒒𝒖𝒆 𝒅𝒆𝒔𝒆𝒋𝒂𝒊 𝒆𝒏𝒄𝒆𝒓𝒓𝒂𝒓 𝒆𝒔𝒕𝒆 𝒋𝒐𝒈𝒐?
    
    𝑺𝑰𝑴 ✔️
    𝑵𝑨𝑶 ✖️`)
    global.db.data.chats[m.chat].palavras.delMsg=messg.key.id
  }
}

let regex = /^\d{1,2}\s+[a-zA-Z]$/;
if(global.db.data.chats[m.chat].palavras.jogo.length  !== 0 && regex.test(text)){
  global.db.data.chats[m.chat].palavras.jogadores.push(m.sender)
  tentativaJogo(text)
  
  
}
} 

handler.help = ['zombie', 'zumbi'];
handler.tags = ['maker'];
handler.command = ['plv']

export default handler;

const getRandom = (ext) => { 
    return `${Math.floor(Math.random() * 10000)}${ext}`;
}