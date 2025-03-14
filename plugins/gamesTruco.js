
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

import fetch from 'node-fetch'
import poker from 'poker-hands'
let handler = async (m, { conn, text,groupMetadata, usedPrefix, command,isAdmin, isOwner, args }) => {
console.log(poker.judgeWinner(['9S 5C 6C 6S 7S 3H KD', '2C 3S 8S TD TD TD TD']))
const key=m.chat
if(!(isAdmin || isOwner || m.sender==global.cocriador) && global.db.data.chats[m.chat].jogos===false){
   m.react("❌")
   
   return !0;
 } 
 
 
if(!global.db.data.chats[m.chat].truco){
  global.db.data.chats[m.chat].truco = {
    gameData: null,
    table: {},
    man:[],
    manImg:[],
    currentTurn: null,
    players: [],
    hasJoined: [],
    hands:{},
    handsImg:{},
    xp: 0,
    coins: 0,
    eth:0,
    total: 1,
    isTruco: false,
    valoresCartas:{},
    valoresNaipe:{},
    stats:{}
  };
}
  let players = global.db.data.chats[m.chat].truco.players;
  let hasJoined = global.db.data.chats[m.chat].truco.hasJoined;
  let gameData = global.db.data.chats[m.chat].truco.gameData;
  
  const feature = args[0]?.toLowerCase();
  if((isAdmin || isOwner) && feature=='apagar'){
    m.react("✅")
    delete global.db.data.chats[m.chat].truco
  }
  else if (!feature || feature === 'info') {
    return conn.sendFile(m.chat, `https://telegra.ph/file/b75eb60e98359f392cde8.jpg`,'error.jpg', `
    _A sequência de cartas no truco é: 4, 5, 6, 7, Q, J, K, A, 2, 3. O naipe da carta jogada determina a vencedora, enquanto a manilha é a carta seguinte à virada, tornando-se mais forte que o 3 e definindo o trunfo da rodada._
  
    ━━━━━⬣𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂⬣━━━━

*${usedPrefix + command} novo* ➥ Cria uma mesa
*${usedPrefix + command} entrar* - ➥ Entra em uma mesa em espera
*${usedPrefix + command} jogar* ➥ Inicia o jogo e distribui as cartas
*${usedPrefix + command} sair* ➥ Sai da mesa

_Jogando:_

*Suas cartas serão enviadas no pv*
*Responda a mensagem em seu turno com F para queimar uma carta (mandar virada), ou responda com o numero da carta escolhida, as cartas serao enviadas com numeração de 1, 2 e 3 e voce deve responder o numero da carta ou responda com t para pedir truco*

 ━━━━━━━━━⬣ִ ࣪𖤐⬣━━━━━━━━`, m);
   
   
  }
  else if (feature === 'novo') {
    if (global.db.data.chats[m.chat].truco.gameData) {
      return conn.reply(m.chat, `━━━━━━━━━⬣ ♣️ ⬣━━━━━━━━
🕰️ 𝙿𝚊𝚛𝚝𝚒𝚍𝚊 𝚎𝚖 𝚙𝚛𝚘𝚐𝚛𝚎𝚜𝚜𝚘
━━━━━━━━━⬣ ♠️ ⬣━━━━━━━━`, m);
    }
    global.db.data.chats[m.chat].truco.gameData = "lobby";
    return conn.reply(m.chat,
`━━━━━━━━━⬣ ♠️ ⬣━━━━━━━━
𝙿𝚊𝚛𝚝𝚒𝚍𝚊 𝚒𝚗𝚒𝚌𝚒𝚊𝚍𝚊
𝙰𝚐𝚞𝚊𝚛𝚍𝚊𝚗𝚍𝚘 𝚓𝚘𝚐𝚊𝚍𝚘𝚛𝚎𝚜. . .
━━━━━━━━━⬣ ♣️ ⬣━━━━━━━━`
    , m);
  }
else if(feature=='sair'){
  const userId = m.sender;
  if (!players.includes(userId)) {
        return conn.reply(m.chat,
`━━━━━━━━━⬣ ♠️ ⬣━━━━━━━━
❌ 𝘝𝘰𝘤𝘦 𝘯𝘢𝘰 𝘦𝘴𝘵𝘢 𝘯𝘦𝘴𝘵𝘢 𝘱𝘢𝘳𝘵𝘪𝘥𝘢
━━━━━━━━━⬣ ♣️ ⬣━━━━━━━━`, m);
    }
if (!global.db.data.chats[m.chat].truco.gameData || global.db.data.chats[m.chat].truco.gameData !== 'lobby') {
      return conn.reply(m.chat,
`━━━━━━━━━⬣ ♣️ ⬣━━━━━━━━
𝘚𝘦𝘮 𝘱𝘢𝘳𝘵𝘪𝘥𝘢𝘴 𝘦𝘮 𝘦𝘴𝘱𝘦𝘳𝘢. . .
𝘋𝘪𝘨𝘪𝘵𝘦 ${usedPrefix + command} novo 𝘱𝘢𝘳𝘢 𝘨𝘦𝘳𝘢𝘳 𝘶𝘮𝘢
━━━━━━━━━⬣ ♠️ ⬣━━━━━━━━`, m);
    }
    
    // Remove user from players array
    const playerIndex = players.indexOf(userId);
    players.splice(playerIndex, 1);

    // Remove user from hasJoined array
    const joinedIndex = hasJoined.indexOf(userId);
    hasJoined.splice(joinedIndex, 1);

    let message = `━━━━━━━━━⬣ ♠️ ⬣━━━━━━━━
🂱 𝑻𝒓𝒖𝒄𝒐 🃜

𝘑𝘰𝘨𝘢𝘥𝘰𝘳𝘦𝘴:\n`

players.forEach(player => {
    message += `⋆ @${player.split("@")[0]}\n`;
});

message += `━━━━━━━━━⬣ ♣️ ⬣━━━━━━━━`
   return conn.reply(m.chat, message, m, { mentions: hasJoined });
}
else if (feature === 'entrar') {
    const senderId = m.sender;
    if (players.includes(senderId)) {
      return conn.reply(m.chat,
`━━━━━━━━━⬣ ♠️ ⬣━━━━━━━━
❌ 𝘝𝘰𝘤𝘦 𝘫𝘢 𝘦𝘴𝘵𝘢 𝘯𝘦𝘴𝘵𝘢 𝘱𝘢𝘳𝘵𝘪𝘥𝘢
━━━━━━━━━⬣ ♣️ ⬣━━━━━━━━`, m);
    }
    if (!global.db.data.chats[m.chat].truco.gameData || global.db.data.chats[m.chat].truco.gameData !== 'lobby') {
      return conn.reply(m.chat,
`━━━━━━━━━⬣ ♣️ ⬣━━━━━━━━
𝘚𝘦𝘮 𝘱𝘢𝘳𝘵𝘪𝘥𝘢𝘴 𝘦𝘮 𝘦𝘴𝘱𝘦𝘳𝘢. . .
𝘋𝘪𝘨𝘪𝘵𝘦 ${usedPrefix + command} novo 𝘱𝘢𝘳𝘢 𝘨𝘦𝘳𝘢𝘳 𝘶𝘮𝘢
━━━━━━━━━⬣ ♠️ ⬣━━━━━━━━`, m);
    }
    if (players.length == 2) {
      return conn.reply(m.chat,
`━━━━━━━━━⬣ 🂱 ⬣━━━━━━━━
 𝑻𝒓𝒖𝒄𝒐 🃜
 
 ᴹᵉˢᵃ ᶜᵒᵐ ⁿᵘᵐᵉʳᵒ ᵐᵃˣⁱᵐᵒ ᵈᵉ ʲᵒᵍᵃᵈᵒʳᵉˢ!
━━━━━━━━━⬣ ✮ ⬣━━━━━━━━`, m);

    }
    if(players.length<= 2){
    players.push(senderId);
    hasJoined.push(senderId);
   
   let message = `━━━━━━━━━⬣ ♠️ ⬣━━━━━━━━
🂱 𝑻𝒓𝒖𝒄𝒐 🃜

𝘑𝘰𝘨𝘢𝘥𝘰𝘳𝘦𝘴:\n`

players.forEach(player => {
    message += `⋆ @${player.split("@")[0]}\n`;
});

message += `━━━━━━━━━⬣ ♣️ ⬣━━━━━━━━`
   return conn.reply(m.chat, message, m, { mentions: hasJoined });

    }
    if(global.db.data.chats[m.chat].truco.gameData == 'playing'){
          return conn.reply(m.chat,
`━━━━━━━━━⬣ ♠️ ⬣━━━━━━━━
❌ Ｍｅｓａ ｏｃｕｐａｄａ！ 
Ａｇｕａｒｄｅ ｅｎｃｅｒｒａｒｅｍ ｏ ｊｏｇｏ．
━━━━━━━━━⬣ ♣️ ⬣━━━━━━━━`, m);
    }
  }

else if(feature=='teste'){
  
 

  
}
else if(feature=='jogar'){
  if (!gameData){
       return conn.reply(m.chat,
`━━━━━━━━━⬣ 🂱 ⬣━━━━━━━━
🂱 𝑻𝒓𝒖𝒄𝒐 🃜

𝘚𝘦𝘮 𝘱𝘢𝘳𝘵𝘪𝘥𝘢𝘴 𝘦𝘮 𝘦𝘴𝘱𝘦𝘳𝘢. . .
𝘋𝘪𝘨𝘪𝘵𝘦 ${usedPrefix + command} novo 𝘱𝘢𝘳𝘢 𝘨𝘦𝘳𝘢𝘳 𝘶𝘮𝘢
━━━━━━━━━⬣ 𖤍 ⬣━━━━━━━━`, m);
  }
  if (gameData=='playing'){
       return conn.reply(m.chat,
`━━━━━━━━━⬣ 🂱 ⬣━━━━━━━━
🂱 𝑻𝒓𝒖𝒄𝒐 🃜

𝙿𝚊𝚛𝚝𝚒𝚍𝚊 𝚎𝚖 𝚊𝚗𝚍𝚊𝚖𝚎𝚗𝚝𝚘,
𝚊𝚐𝚞𝚊𝚛𝚍𝚎 𝚘 𝚓𝚘𝚐𝚘 𝚎𝚗𝚌𝚎𝚛𝚛𝚊𝚛
━━━━━━━━━⬣ 𖤍 ⬣━━━━━━━━`, m);
  }
  
  if(players.length==1){
    return conn.reply(m.chat,
`━━━━━━━━━⬣ 🂱 ⬣━━━━━━━━
🂱 𝑻𝒓𝒖𝒄𝒐 🃜

𝚅𝚘𝚌𝚎 𝚗𝚊𝚘 𝚙𝚘𝚍𝚎 𝚓𝚘𝚐𝚊𝚛 𝚜𝚘𝚣𝚒𝚗𝚑𝚘, 𝚖𝚘𝚛𝚝𝚊𝚕 𝚒𝚐𝚗𝚘𝚛𝚊𝚗𝚝𝚎...
━━━━━━━━━⬣ 𖤍 ⬣━━━━━━━━`, m);
  }
  
  if(players.length<=2){
    global.db.data.chats[m.chat].truco.gameData = 'playing'
           conn.reply(m.chat,
`━━━━━━━━━⬣ 🂱 ⬣━━━━━━━━
🂱 𝑻𝒓𝒖𝒄𝒐 🃜

𝙸𝚗𝚒𝚌𝚒𝚊𝚗𝚍𝚘 𝚙𝚊𝚛𝚝𝚒𝚍𝚊 . . .
𝙴𝚗𝚝𝚛𝚎𝚐𝚊𝚗𝚍𝚘 𝚊𝚜 𝚌𝚊𝚛𝚝𝚊𝚜 🂱
━━━━━━━━━⬣ 𖤍 ⬣━━━━━━━━`, m);
  

  global.db.data.chats[m.chat].truco.valoresCartas = {
  '4': 1,
  '5': 2,
  '7': 3,
  '8': 4,
  '9': 5,
  '10': 6,
  'J': 7,
  'Q': 8,
  'K': 9,
  'A': 10,
  '2': 11,
  '3': 12
};

  global.db.data.chats[m.chat].truco.valoresNaipe = {
  'C': 4,
  'H': 3,
  'S': 2,
  'D': 1
};

function getManilha(turnCard) {
  const turnValue = turnCard.slice(0, -1); // Extract the card value from the turn card
  const turnNaipe = turnCard.slice(-1); // Extract the card naipe from the turn card
  
  // Calculate the turn card value index
  const turnValueIndex = global.db.data.chats[m.chat].truco.valoresCartas[turnValue];
  
  // Calculate the manilha value index
  let manilhaIndex = turnValueIndex + 1;
  if (manilhaIndex > 12) manilhaIndex = 1; // Wrap around to 1 if it exceeds 12
  
  // Get the manilha value and naipe
  let manilhaValue;
  for (const [key, value] of Object.entries(global.db.data.chats[m.chat].truco.valoresCartas)) {
    if (value === manilhaIndex) {
      manilhaValue = key;
      break;
    }
  }
  const manilhaNaipe = Object.keys(global.db.data.chats[m.chat].truco.valoresNaipe).find(key => global.db.data.chats[m.chat].truco.valoresNaipe[key] === global.db.data.chats[m.chat].truco.valoresNaipe[turnNaipe]);
  
  return manilhaValue + manilhaNaipe; // Return the manilha card
}

// Example usage

  
  let newDeck = await fetch('https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
const data = await newDeck.json();
let id = data.deck_id
global.db.data.chats[m.chat].truco.deckID = id
  
let manilha = await fetch(`https://www.deckofcardsapi.com/api/deck/${id}/draw/?count=1`);
  const datas = await manilha.json();
  let turnimg = datas.cards[0].image;
  let turncode = datas.cards[0].code;
const manilhaCard = getManilha(turncode);



global.db.data.chats[m.chat].truco.man = manilhaCard
global.db.data.chats[m.chat].truco.manImg = turnimg

conn.sendFile(m.chat, turnimg, 'error.jpg', `𝙼𝚊𝚗𝚒𝚕𝚑𝚊 🂭`, m);




let players = global.db.data.chats[m.chat].truco.players
let msg = `─┅──┅❖ ♱ ❖─┅──┅
🂱 𝑻𝒓𝒖𝒄𝒐 🃜

*GRUPO:* ${groupMetadata.subject}
𝙸𝚗𝚒𝚌𝚒𝚊𝚗𝚍𝚘 𝚙𝚊𝚛𝚝𝚒𝚍𝚊 . . .
𝙴𝚗𝚝𝚛𝚎𝚐𝚊𝚗𝚍𝚘 𝚊𝚜 𝚌𝚊𝚛𝚝𝚊𝚜 🂱


𝐏𝐚𝐫𝐚 𝐣𝐨𝐠𝐚𝐫, 𝐫𝐞𝐬𝐩𝐨𝐧𝐝𝐚 𝐦𝐢𝐧𝐡𝐚 𝐦𝐞𝐧𝐬𝐚𝐠𝐞𝐦 𝐧𝐨 𝐠𝐫𝐮𝐩𝐨 𝐧𝐨 𝐪𝐮𝐚𝐥 𝐞𝐬𝐭𝐚 𝐣𝐨𝐠𝐚𝐧𝐝𝐨 𝐜𝐨𝐦 𝐨 𝐧𝐮𝐦𝐞𝐫𝐨 𝐝𝐚 𝐜𝐚𝐫𝐭𝐚 𝐪𝐮𝐞 𝐝𝐞𝐬𝐞𝐣𝐚 𝐞𝐧𝐯𝐢𝐚𝐫.

𝑬𝒔𝒕𝒂𝒔 𝒔𝒂𝒐 𝒔𝒖𝒂𝒔 𝒄𝒂𝒓𝒕𝒂𝒔:`

for (let i = 0; i < players.length; i++) {
  const player = players[i];
  console.log('player loop: ' + player);

  
  let newcards = await fetch(`https://www.deckofcardsapi.com/api/deck/${id}/draw/?count=3`);
  const datas = await newcards.json();
  let png1 = datas.cards[0].image;
  let png2 = datas.cards[1].image;
  let png3 = datas.cards[2].image;
  let card1 = datas.cards[0].code;
  let card2 = datas.cards[1].code;
  let card3 = datas.cards[2].code;
global.db.data.chats[m.chat].truco.hands[player] =[card1, card2, card3]
global.db.data.chats[m.chat].truco.handsImg[player] =[png1, png2, png3]
global.db.data.chats[m.chat].truco.stats[player] = { 
  pontos: 0,
  cartasUsadas:[]
}
  conn.reply(player, msg, null, m);
  conn.sendFile(player, png1, 'error.jpg', `_Carta *1*_`, m);
  conn.sendFile(player, png2, 'error.jpg', `_Carta *2*_`, m);
  conn.sendFile(player, png3, 'error.jpg', `_Carta *3*_`, m);
  
}
// Up here.. users cards are given 
global.db.data.chats[m.chat].truco.bet = 5
let pot = global.db.data.chats[m.chat].truco.bet
global.db.data.chats[m.chat].truco.round = 1
let currentUser = global.db.data.chats[m.chat].truco.currentTurn

global.db.data.chats[m.chat].truco.currentTurn = players[0]
global.db.data.chats[m.chat].truco.xp += Math.floor(Math.random() * 50) + 1;

// Increment coins by a random number between 1 and 10
global.db.data.chats[m.chat].truco.coins += Math.floor(Math.random() * 10) + 1;
global.db.data.chats[m.chat].truco.firstRound= true
console.log(global.db.data.chats[m.chat].truco.hands)

 let sgk = `━━━━━━━━━⬣ 🂱 ⬣━━━━━━━━
🂱 𝑻𝒓𝒖𝒄𝒐 🃜

𝙋𝙤𝙩:  ${pot} 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ
𝘛𝘶𝘳𝘯𝘰 𝘥𝘦: @${global.db.data.chats[m.chat].truco.currentTurn.split("@")[0]}

*Opções:*
*(t)* _Truco: Pede truco_
*(1,2 ou 3)* _Carta: digite o numero da carta que ira jogar_
*(f1, f2, ou f3)* _Fold: Entregar carta escolhida virada_
━━━━━━━━━⬣ 𖤍 ⬣━━━━━━━━`
let turnMsg = await conn.reply(m.chat, sgk, m, { mentions: [currentUser] });
global.db.data.chats[m.chat].truco.key = turnMsg.key.id

}
}
// ddd
  else {
    return conn.sendFile(m.chat, `https://telegra.ph/file/b75eb60e98359f392cde8.jpg`,'error.jpg', `
    _A sequência de cartas no truco é: 4, 5, 6, 7, Q, J, K, A, 2, 3. O naipe da carta jogada determina a vencedora, enquanto a manilha é a carta seguinte à virada, tornando-se mais forte que o 3 e definindo o trunfo da rodada._
  
    ━━━━━⬣𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂⬣━━━━

*${usedPrefix + command} novo* ➥ Cria uma mesa
*${usedPrefix + command} entrar* - ➥ Entra em uma mesa em espera
*${usedPrefix + command} jogar* ➥ Inicia o jogo e distribui as cartas
*${usedPrefix + command} sair* ➥ Sai da mesa

_Jogando:_

*Suas cartas serão enviadas no pv*
*Responda a mensagem em seu turno com F e o codigo ds carta para queimar uma carta (mandar virada), ou responda com o numero da carta escolhida, as cartas serao enviadas com numeração de 1, 2 e 3 e voce deve responder o numero da carta ou responda com t para pedir truco*

 ━━━━━━━━━⬣ִ ࣪𖤐⬣━━━━━━━━`, m);
   
  }
}


handler.command = ['truco'] 
export default handler
function wait(seconds) {
  return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}
