
 import { createCanvas, loadImage } from 'canvas'
import fs from 'fs'

import fetch from "node-fetch"; 
import request from 'request'
import uploadFile from '../lib/uploadFile.js'; 
import uploadImage from '../lib/uploadImage.js'; 
import { unlinkSync, readFileSync, writeFile } from 'fs'; 
import { join} from 'path'; 

let handler = async (m, { args,command,usedPrefix,__dirname,conn,text,isAdmin,isOwner}) => {

if(!(isAdmin || isOwner || m.sender==global.cocriador) && global.db.data.chats[m.chat].jogos===false){
   m.react("❌")
   
   return !0;
 } 
 

if(!global.db.data.chats[m.chat].sopa){
  global.db.data.chats[m.chat].sopa = {
    jogo:[],
    solucao:[],
    numeros:[],
    palavras:[],
    acertos:[],
    jogadores:[],
    start: 0
  }
}  
// Step 1: Generate Word List
const themes = {
  "Onde os Mortos Descansam": ["sarcofago", "cemiterio", "esqueleto", "espirito", "sepultura", "enterro"],
  "Beberroes de Sangue Eterno": ["sangue", "morcego", "imortalidade", "noite", "presas", "castelo"],
  "Vultos do Alem": ["assombracao", "ectoplasma", "poltergeist", "manifestacao", "espectro", "aparicao"],
  "Servos do Abismo Flamejante": ["possessao", "exorcismo", "maldicao", "inferno", "diabo", "invocacao"],
  "Feiticeiras da Noite": ["feitico", "caldeirao", "maleficio", "pacto", "sabbath", "conjuracao"],
  "Andarilhos da Carne Morta": ["apocalipse", "virus", "infectado", "ressurreicao", "decomposicao", "horda"],
  "Criaturas da Lua Cheia": ["lua cheia", "transformacao", "bestial", "uivo", "prata", "maldicao"],
  "Horrores Lovecraftianos": ["cthulhu", "lovecraft", "inominavel", "antigos", "aliens", "insanidade","Hastur","Dagon"],
  "Residencias dos Assombrados": ["mansao", "aparicoes", "segredos", "passagens ocultas", "ruinas", "portas rangentes"],
  "Tomo dos Condenados": ["grimorio", "ritual", "arcanos", "maldicao", "eldritch", "proibicoes"],
  "Devotos do culto": ["sacrificio", "ritual", "seita", "invocacao", "adoradores", "profecia"],
  "Elegancia da Decadencia": ["melancolia", "sombras", "decadencia", "nevoeiro", "torres", "gargulas"],
  "Maniacos da Mente Assassina": ["psicopata", "crime", "assassino", "investigacao", "medo", "panico"],
  "Visoes da Angustia Noturna": ["agonia", "terror", "inconsciente", "insonia", "surreal", "aflicao"]
};

  // Step 2: Create Word Grid
function createGrid(words, size = 20) {
  const grid = Array.from({ length: size }, () => Array(size).fill(''));
  const directions = [[1, 0], [0, 1], [1, 1], [-1, 1]];

  function placeWord(word) {
    const len = word.length;
    let placed = false;

    while (!placed) {
      const dir = directions[Math.floor(Math.random() * directions.length)];
      const startRow = Math.floor(Math.random() * size);
      const startCol = Math.floor(Math.random() * size);
      let endRow = startRow + dir[0] * (len - 1);
      let endCol = startCol + dir[1] * (len - 1);

      if (endRow >= 0 && endRow < size && endCol >= 0 && endCol < size) {
        let canPlace = true;
        for (let i = 0; i < len; i++) {
          const row = startRow + i * dir[0];
          const col = startCol + i * dir[1];
          if (grid[row][col] !== '' && grid[row][col] !== word[i]) {
            canPlace = false;
            break;
          }
        }

        if (canPlace) {
          for (let i = 0; i < len; i++) {
            const row = startRow + i * dir[0];
            const col = startCol + i * dir[1];
            grid[row][col] = word[i];
          }
          placed = true;
        }
      }
    }
  }
if(!global.db.data.chats[m.chat].sopa.start)
  for (const word of words) {
    global.db.data.chats[m.chat].sopa.palavras.push(word )
 
    placeWord(word);
  }

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (grid[i][j] === '') {
        grid[i][j] = String.fromCharCode(65 + Math.floor(Math.random() * 26));
      }
    }
  }

  return grid;
}

// Step 3: Render Grid with Node-Canvas


function renderGrid(grid, title, theme) {
  const cellSize = 40; // Increase the cell size for better visibility
  const headerHeight = 80; // Adjusted header height
  const canvasSize = grid.length * cellSize + headerHeight + 50;
  const canvas = createCanvas(canvasSize, canvasSize);
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, canvasSize, canvasSize);

  // Draw title
  ctx.fillStyle = 'black';
  ctx.font = '21px "Old English Text MT", "Goudy Old Style", "Book Antiqua", "Century Gothic", serif';
  ctx.fillText(title, 10, 40);

  // Draw theme
  ctx.font = '24px "Arial"';
  ctx.fillText(`Dica:`, 341, 20);
  ctx.font = '37px "Old English Text MT", "Goudy Old Style", "Book Antiqua", "Century Gothic", serif';
  ctx.fillText(theme, 252, 50);

  // Ensure sopa and jogo arrays are defined
  if (!global.db.data.chats[m.chat].sopa) {
    global.db.data.chats[m.chat].sopa = { jogo: [] };
  }
  if (!Array.isArray(global.db.data.chats[m.chat].sopa.jogo)) {
    global.db.data.chats[m.chat].sopa.jogo = [];
  }
  const acertos = global.db.data.chats[m.chat].sopa.acertos || [];
// Define the findWordCoords function
function findWordCoords(grid, word) {
  const directions = [
    { x: 1, y: 0 }, // Right
    { x: -1, y: 0 }, // Left
    { x: 0, y: 1 }, // Down
    { x: 0, y: -1 }, // Up
    { x: 1, y: 1 }, // Down-Right
    { x: 1, y: -1 }, // Up-Right
    { x: -1, y: 1 }, // Down-Left
    { x: -1, y: -1 } // Up-Left
  ];
  const coords = [];
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      for (const { x: dirX, y: dirY } of directions) {
        const wordCoords = [];
        for (let k = 0; k < word.length; k++) {
          const x = i + k * dirX;
          const y = j + k * dirY;
          if (x < 0 || y < 0 || x >= grid.length || y >= grid[x].length || grid[x][y] !== word[k]) {
            break;
          }
          wordCoords.push({ x, y });
        }
        if (wordCoords.length === word.length) {
          coords.push(...wordCoords);
        }
      }
    }
  }
  return coords;
}

// Collect all coordinates of found words
const wordCoords = acertos.flatMap(word => findWordCoords(grid, word.toUpperCase()));

// Loop through the grid and highlight found words
  // Draw grid and letters
  ctx.font = `${cellSize - 10}px Arial`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  
for (let i = 0; i < grid.length; i++) {
  if (!Array.isArray(global.db.data.chats[m.chat].sopa.jogo[i])) {
    global.db.data.chats[m.chat].sopa.jogo[i] = [];
  }
  for (let j = 0; j < grid[i].length; j++) {
    let color = 'black';
    let letter = grid[i][j].toUpperCase();
    global.db.data.chats[m.chat].sopa.jogo[i][j] = letter;

    // Check if the letter is part of a found word
    if (wordCoords.some(coord => coord.x === i && coord.y === j)) {
      ctx.fillStyle = 'black'; // Fill the square with black color
      ctx.fillRect(j * cellSize + 50, i * cellSize + headerHeight, cellSize, cellSize);
      color = 'white';
    }

    ctx.fillStyle = color;
    ctx.fillText(letter, j * cellSize + cellSize / 2 + 50, i * cellSize + cellSize / 2 + headerHeight);
  }
}

  // Draw grid lines
  ctx.strokeStyle = 'black';
  ctx.lineWidth = 1;
  for (let i = 0; i <= grid.length; i++) {
    ctx.beginPath();
    ctx.moveTo(50, i * cellSize + headerHeight);
    ctx.lineTo(canvasSize - 50, i * cellSize + headerHeight);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(i * cellSize + 50, headerHeight);
    ctx.lineTo(i * cellSize + 50, canvasSize - 50);
    ctx.stroke();
  }

  // Add row and column indices
  ctx.font = 'bold 14px Arial';
  ctx.textAlign = 'center';
  for (let i = 0; i < grid.length; i++) {
    ctx.fillText(i.toString(), 25, i * cellSize + cellSize / 2 + headerHeight);
    ctx.fillText(i.toString(), i * cellSize + cellSize / 2 + 50, headerHeight - 10);
  }

  const buffer = canvas.toBuffer('image/png');
  const words1 = `${Date.now()}.png`;
  const fileGame = join(__dirname, '../tmp/' + words1);

  fs.writeFileSync(fileGame, buffer);
 if (acertos.length === 0) {
    // put message here
 return conn.sendFile(m.chat, fileGame, 'crossword.png', `╭─┅──┅❖ ༒ ❖─┅──┅
  𖤐 𝑺𝑶𝑷𝑨 𝑫𝑬 𝑳𝑬𝑻𝑹𝑨𝑺 𝒆 𝒖𝒎 𝒎𝒂𝒄𝒂𝒃𝒓𝒐 𝒋𝒐𝒈𝒐 𝒅𝒆 𝒓𝒂𝒄𝒊𝒐𝒄𝒊́𝒏𝒊𝒐 𝒆 𝒆𝒔𝒕𝒓𝒂𝒕𝒆𝒈𝒊𝒂 𝒒𝒖𝒆 𝒄𝒐𝒏𝒔𝒊𝒔𝒕𝒆 𝒆𝒎 𝒆𝒏𝒄𝒐𝒏𝒕𝒓𝒂𝒓 𝒑𝒂𝒍𝒂𝒗𝒓𝒂𝒔 𝒆𝒔𝒄𝒐𝒏𝒅𝒊𝒅𝒂𝒔 𝒅𝒆𝒏𝒕𝒓𝒐 𝒅𝒆 𝒖𝒎𝒂 𝒎𝒂𝒕𝒓𝒊𝒛 𝒅𝒆 𝒍𝒆𝒕𝒓𝒂𝒔, 𝒔𝒆𝒈𝒖𝒊𝒏𝒅𝒐  𝒑𝒊𝒔𝒕𝒂𝒔 𝒆𝒏𝒊𝒈𝒎𝒂́𝒕𝒊𝒄𝒂𝒔 𝒑𝒂𝒓𝒂 𝒅𝒆𝒔𝒄𝒐𝒃𝒓𝒊𝒓 𝒂𝒔 𝒑𝒐𝒔𝒊𝒄̧𝒐̃𝒆𝒔 𝒅𝒂𝒔 𝒑𝒂𝒍𝒂𝒗𝒓𝒂𝒔.

𝑷𝒂𝒓𝒂 𝒋𝒐𝒈𝒂𝒓, 𝒊𝒏𝒅𝒊𝒒𝒖𝒆 𝒂 𝒍𝒊𝒏𝒉𝒂 𝒅𝒂 𝒑𝒓𝒊𝒎𝒆𝒊𝒓𝒂 𝒍𝒆𝒕𝒓𝒂, 𝒂 𝒄𝒐𝒍𝒖𝒏𝒂 𝒅𝒂 𝒑𝒓𝒊𝒎𝒆𝒊𝒓𝒂 𝒍𝒆𝒕𝒓𝒂, 𝒂 𝒍𝒊𝒏𝒉𝒂 𝒅𝒂 𝒖́𝒍𝒕𝒊𝒎𝒂 𝒍𝒆𝒕𝒓𝒂 𝒆 𝒂 𝒄𝒐𝒍𝒖𝒏𝒂 𝒅𝒂 𝒖́𝒍𝒕𝒊𝒎𝒂 𝒍𝒆𝒕𝒓𝒂 𝒑𝒂𝒓𝒂 𝒎𝒂𝒓𝒄𝒂𝒓 𝒂 𝒑𝒂𝒍𝒂𝒗𝒓𝒂.

𝑬𝒙𝒆𝒎𝒑𝒍𝒐:
𝒂 𝒑𝒂𝒍𝒂𝒗𝒓𝒂 𝒄𝒐𝒎𝒆𝒄̧𝒂 𝒆𝒎
[15][6] 𝒆 𝒕𝒆𝒓𝒎𝒊𝒏𝒂 𝒆𝒎 [21][6]

𝒐 𝒖𝒔𝒖𝒂́𝒓𝒊𝒐 𝒅𝒆𝒗𝒆 𝒅𝒊𝒈𝒊𝒕𝒂𝒓:
*.sopa 15 6 21 6*
*╰─┅──┅❖ ⸸ ❖─┅──┅*`, m);
  }
  
  if (JSON.stringify((acertos || []).slice().sort()) === JSON.stringify((global.db.data.chats[m.chat].sopa.palavras || []).slice().sort())) {
    global.db.data.chats[m.chat].users[m.sender].money += 25
  global.db.data.chats[m.chat].users[m.sender].exp += 1
  global.db.data.chats[m.chat].users[m.sender].pontos++
  const users = global.db.data.chats[m.chat].users


Object.keys(users).forEach(user => {
  users[user].money += 125;
  users[user].exp += 300;
  users[user].pontos++;
});
  conn.sendFile(m.chat, fileGame, 'crossword.png', `⎔⎓─────────────.
─┅❖ 𝔉𝔦𝔪 𝔡𝔢 𝔍𝔬𝔤𝔬 ❖┅─
𝑶 𝒋𝒐𝒈𝒐 𝒆𝒏𝒊𝒈𝒎𝒂𝒕𝒊𝒄𝒐 𝒆𝒏𝒄𝒐𝒏𝒕𝒓𝒐𝒖 𝒔𝒆𝒖 𝒊𝒏𝒆𝒙𝒐𝒓𝒂𝒗𝒆𝒍 𝒅𝒆𝒔𝒇𝒆𝒄𝒉𝒐. 𝑷𝒂𝒓𝒂𝒃𝒆𝒏𝒔 𝒂𝒐𝒔 𝒒𝒖𝒆 𝒐𝒖𝒔𝒂𝒓𝒂𝒎 𝒅𝒆𝒔𝒂𝒇𝒊𝒂𝒓 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔 𝒅𝒐 𝒆𝒏𝒊𝒈𝒎𝒂

𝙾𝚜 𝚓𝚘𝚐𝚊𝚍𝚘𝚛𝚎𝚜 𝚚𝚞𝚎 𝚙𝚊𝚛𝚝𝚒𝚌𝚒𝚙𝚊𝚛𝚊𝚖 𝚐𝚊𝚗𝚑𝚊𝚛𝚊𝚘

+𝟷 𝚙𝚘𝚗𝚝𝚘
+𝟷𝟸𝟻 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ
+𝟹𝟶𝟶 𝚡𝚙
╰─...⎔⎓──────────`,m);
  }
  
  else {
  global.db.data.chats[m.chat].users[m.sender].money += 75
  global.db.data.chats[m.chat].users[m.sender].exp += 100
  global.db.data.chats[m.chat].users[m.sender].pontos++
  
  conn.sendFile(m.chat, fileGame, 'crossword.png', `⎔⎓─────────────.
✞︎ 𝚅𝚘𝚌𝚎 𝚊𝚌𝚎𝚛𝚝𝚘𝚞!
𝙶𝚊𝚗𝚑𝚊𝚛a:

+𝟷 𝚙𝚘𝚗𝚝𝚘
+𝟽𝟻 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ
+𝟷𝟶𝟶 𝚡𝚙
╰─...⎔⎓──────────`,m);
  }

}

// Step 4: User Interaction
function checkWord(input, grid) {
  // Split the input coordinates and convert them to integers
  let [startRow, startCol, endRow, endCol] = input.split(' ').map(Number);
startRow++
startCol++
endCol++
endRow++
  // Validate coordinates are within grid bounds
  if (isNaN(startRow) || isNaN(startCol) || isNaN(endRow) || isNaN(endCol)) {
    return  m.reply(`⎔⎓─────────────.
𝙲𝚘𝚘𝚛𝚍𝚎𝚗𝚊𝚍𝚊𝚜 𝚎𝚛𝚛𝚊𝚍𝚊𝚜!! ✞︎
╰─...⎔⎓──────────`)
    return;
  }

  if (startRow < 1 || startRow > grid.length || startCol < 1 || startCol > grid[0].length ||
      endRow < 1 || endRow > grid.length || endCol < 1 || endCol > grid[0].length) {
        return  m.reply(`⎔⎓─────────────.
𝙲𝚘𝚘𝚛𝚍𝚎𝚗𝚊𝚍𝚊𝚜 𝚎𝚛𝚛𝚊𝚍𝚊𝚜!! ✞︎
╰─...⎔⎓──────────`)
    return;
  }

  // Adjust coordinates to be zero-based
  const zeroBasedStartRow = startRow - 1;
  const zeroBasedStartCol = startCol - 1;
  const zeroBasedEndRow = endRow - 1;
  const zeroBasedEndCol = endCol - 1;

  

  // Determine the direction of the word
  const rowDiff = zeroBasedEndRow - zeroBasedStartRow;
  const colDiff = zeroBasedEndCol - zeroBasedStartCol;

  

  // Check if the word is horizontal, vertical, or diagonal
  const isHorizontal = rowDiff === 0;
  const isVertical = colDiff === 0;
  const isDiagonal = Math.abs(rowDiff) === Math.abs(colDiff);

  if (!isHorizontal && !isVertical && !isDiagonal) {
        return  m.reply(`⎔⎓─────────────.
𝙲𝚘𝚘𝚛𝚍𝚎𝚗𝚊𝚍𝚊𝚜 𝚎𝚛𝚛𝚊𝚍𝚊𝚜!! ✞︎
╰─...⎔⎓──────────`)
    return;
  }

  // Calculate the length of the word
  const length = Math.max(Math.abs(rowDiff), Math.abs(colDiff)) + 1;

  // Build the word from the grid
  let constructedWord = '';
  for (let i = 0; i < length; i++) {
    const row = zeroBasedStartRow + i * (rowDiff === 0 ? 0 : rowDiff / Math.abs(rowDiff));
    const col = zeroBasedStartCol + i * (colDiff === 0 ? 0 : colDiff / Math.abs(colDiff));
    if (row >= 0 && row < grid.length && col >= 0 && col < grid[0].length) {
      constructedWord += grid[row][col];
    } else {
     return  m.reply(`⎔⎓─────────────.
𝙲𝚘𝚘𝚛𝚍𝚎𝚗𝚊𝚍𝚊𝚜 𝚍𝚊 𝚙𝚊𝚕𝚊𝚟𝚛𝚊 𝚎𝚛𝚛𝚊𝚍𝚊𝚜!! ✞︎
╰─...⎔⎓──────────`)
      return;
    }
  }

  // Convert constructed word to lowercase
  const wordToCheck = constructedWord.toLowerCase();

let acertos =global.db.data.chats[m.chat].sopa.acerto || []
  // Check if the word exists in the list
  const found = global.db.data.chats[m.chat].sopa.palavras.includes(wordToCheck);

  if (found) {
    if(acertos.includes(wordToCheck)){
      m.react("👁️")
    return  m.reply(`⎔⎓─────────────.
𝙴𝚜𝚝𝚊 𝚙𝚊𝚕𝚊𝚟𝚛𝚊 𝚓𝚊 𝚎𝚜𝚝𝚊 𝚍𝚎𝚜𝚝𝚊𝚌𝚊𝚍𝚊! ✞︎
╰─...⎔⎓──────────`)
    }
    // Add the word to the list of correct words
    if (!global.db.data.chats[m.chat].sopa.acertos) {
      global.db.data.chats[m.chat].sopa.acertos = [];
    }
    global.db.data.chats[m.chat].sopa.acertos.push(wordToCheck);

    // Reply with correct
    m.react("✔️")
    renderGrid(grid, title, global.db.data.chats[m.chat].sopa.tema, global.db.data.chats[m.chat].sopa.palavras);
  } else {
    m.react("✖️")
    // Reply with incorrect
            return m.reply(`⎔⎓─────────────.
✞︎ 𝙴𝚛𝚛𝚊𝚍𝚘. 𝚃𝚎𝚗𝚝𝚎 𝚗𝚘𝚟𝚊𝚖𝚎𝚗𝚝𝚎
╰─...⎔⎓──────────`)
  }
}

// Main function to run the game

const themeKeys = Object.keys(themes);
const randomKey = themeKeys[Math.floor(Math.random() * themeKeys.length)];

const theme = randomKey;
const words = themes[theme];
const grid = createGrid(words);
const title = `Edgar ${vs}`;

  

  // More user interactions can be handled here
if(!text){
  if(global.db.data.chats[m.chat].sopa.jogo.length !== 0){
  return m.reply(`⎔⎓─────────────.
  𝙹𝚘𝚐𝚘 𝚎𝚖 𝚊𝚗𝚍𝚊𝚖𝚎𝚗𝚝𝚘! ✞︎
╰─...⎔⎓──────────`)
}
else{
  m.react("⏳")
global.db.data.chats[m.chat].sopa.start = 1
console.log('─┅──┅❖ ─┅──┅❖ ')
global.db.data.chats[m.chat].sopa.tema = theme
renderGrid(grid, title, theme, global.db.data.chats[m.chat].sopa.palavras);
}

}
if(text== 'apagar'){
  if(!global.db.data.chats[m.chat].sopa.jogo){
    m.reply(`𝑵𝒂𝒐 𝒆𝒙𝒊𝒔𝒕𝒆 𝒏𝒆𝒏𝒉𝒖𝒎 𝒋𝒐𝒈𝒐 𝒆𝒎 𝒂𝒃𝒆𝒓𝒕𝒐!`)
  }
  else{
    let messg = await m.reply(`җ 𝑷𝒐𝒃𝒓𝒆 𝒂𝒍𝒎𝒂, 𝒕𝒆𝒏𝒔 𝒄𝒆𝒓𝒕𝒆𝒛𝒂 𝒒𝒖𝒆 𝒅𝒆𝒔𝒆𝒋𝒂𝒊 𝒆𝒏𝒄𝒆𝒓𝒓𝒂𝒓 𝒆𝒔𝒕𝒆 𝒋𝒐𝒈𝒐?
    
    𝑺𝑰𝑴 ✔️
    𝑵𝑨𝑶 ✖️`)
    global.db.data.chats[m.chat].sopa.delMsg=messg.key.id
  }
}

let regex = /^\d{1,2}\s\d{1,2}\s\d{1,2}\s\d{1,2}$/
if(global.db.data.chats[m.chat].sopa.jogo.length  !== 0 && regex.test(text)){
  global.db.data.chats[m.chat].sopa.jogadores.push(m.sender)
  checkWord(text, global.db.data.chats[m.chat].sopa.jogo)
  
  
}

}
handler.help = ['buscarpalavras', 'sopa', 'palaavras', 'spdepalabras']
handler.tags = ['jogos']

handler.command = ['sopa']

handler.register = true

export default handler
