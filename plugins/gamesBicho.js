
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

import fetch from 'node-fetch'
import schedule from 'node-schedule'

let handler = async (m, { conn, text,groupMetadata, usedPrefix,isAdmin, command, participants,isOwner, args }) => {


  if(!(isAdmin || isOwner|| m.sender==global.cocriador) && global.db.data.chats[m.chat].jogos===false){
    m.react("❌")
    
    return !0;
  } 
 
  
 function convertDate(date) {
   
  const hours = ('0' + date.getHours()).slice(-2);
  const minutes = ('0' + date.getMinutes()).slice(-2);
  return hours + ':' + minutes;
 }

function checkTimeleft(){
  let currentTime = new Date();
let timeRemaining = new Date(global.db.data.chats[m.chat].bicho.horarioSorteio - currentTime);

// Format the time remaining
let hours = timeRemaining.getUTCHours();
let minutes = timeRemaining.getUTCMinutes();
let seconds = timeRemaining.getUTCSeconds();

// Convert hours and minutes to string format with leading zeros if necessary
let formattedHours = String(hours).padStart(2, '0');
let formattedMinutes = String(minutes).padStart(2, '0');
let formattedSeconds = String(seconds).padStart(2, '0');

let timeLeft = `${formattedMinutes}:${formattedSeconds}`;

console.log(`Time left: ${timeLeft}`);
return timeLeft
}

const key=m.chat

if(!global.db.data.chats[m.chat].bicho){
  global.db.data.chats[m.chat].bicho = {
    gameData: null,
    animais:  [
    'Harpia', 'Corvo', 'Gato caolho', 'Coruja', 'Serpente',    'Morcego', 'Mariposa', 'Lobo', 'Urutau', 'Escaravelho', 'Abutre', 'Viúva negra', 'Gavião', 'Sapo', 'Papagaio pesquet',
    'Diabo da Tasmânia', 'Dragão de Komodo', 'Ratazana', 'Bode',
    'Urubu', 'Pantera', 'Hiena', 'Centopéia',
    'Lebre', 'Capivara'],
    animal: null,
    horarioInicio: null,
    horarioSorteio: null,
    players: [],
    hasJoined: [],
    numero: null,
    aposta: 0,
    total: 0
  };
}
  let players =  global.db.data.chats[m.chat].bicho.players;
  let hasJoined = global.db.data.chats[m.chat].bicho.hasJoined;
  let gameData = global.db.data.chats[m.chat].bicho.gameData;
  
  const feature = args[0]?.toLowerCase  ();
  if((isOwner || m.sender == global.cocriador ) && feature=='apagar'){
    m.react("✅")
    clearInterval(global.intervaloBicho); // 
    delete global.db.data.chats[m.chat].bicho
  }
  if (feature === 'info') {
    
    await conn.sendFile(m.chat, `https://telegra.ph/file/95ec7c6d7187f5d246845.jpg`, 'besta.png', `╭──────────────────── ⛦...─╮
𖤐 𝑽𝒆𝒏𝒉𝒂𝒎, 𝒎𝒊𝒏𝒉𝒂𝒔 𝒄𝒓𝒊𝒂𝒏𝒄𝒂𝒔.
𝑩𝒆𝒎 𝒗𝒊𝒏𝒅𝒐𝒔 𝒂𝒐 𝒑𝒓𝒆𝒄𝒊𝒑𝒊𝒄𝒊𝒐 𝒅𝒂𝒔 𝒂𝒍𝒎𝒂𝒔 𝒂𝒇𝒐𝒓𝒕𝒖𝒏𝒂𝒅𝒂𝒔 𝒏𝒐 𝒈𝒂𝒎𝒃𝒍𝒊𝒏𝒈, 𝔍𝔬𝔤𝔬 𝔡𝔞 𝔅𝔢𝔰𝔱𝔞  

𝑶 𝑱𝒐𝒈𝒐 𝒅𝒂 𝑩𝒆𝒔𝒕𝒂 𝒄𝒐𝒏𝒔𝒊𝒔𝒕𝒆 𝒆𝒎 𝒕𝒆𝒏𝒕𝒂𝒓 𝒂 𝒔𝒐𝒓𝒕𝒆 𝒂𝒑𝒐𝒔𝒕𝒂𝒏𝒅𝒐 𝒆𝒎 𝒖𝒎 𝒂𝒏𝒊𝒎𝒂𝒍, 𝒕𝒆𝒏𝒅𝒐 25 𝒆𝒔𝒄𝒐𝒍𝒉𝒂𝒔 𝒏𝒐 𝒒𝒖𝒂𝒍 𝒄𝒂𝒅𝒂 𝒑𝒐𝒔𝒔𝒖𝒊 4 𝒅𝒆𝒛𝒆𝒏𝒂𝒔. 
𝑨𝒅𝒊𝒗𝒊𝒏𝒉𝒆 𝒐 𝒏𝒖𝒎𝒆𝒓𝒐 𝒂 𝒔𝒖𝒓𝒈𝒊𝒓 𝒆 𝒑𝒓𝒐𝒔𝒑𝒆𝒓𝒆. 𝑫𝒊𝒈𝒊𝒕𝒆 *".𝒃𝒆𝒔𝒕𝒂 𝒏𝒐𝒗𝒐"* 𝒑𝒂𝒓𝒂 𝒊𝒏𝒊𝒄𝒊𝒂𝒓 𝒖𝒎𝒂 𝒂𝒑𝒐𝒔𝒕𝒂, 𝒔𝒆𝒈𝒖𝒊𝒅𝒐 𝒅𝒆 *".𝒃𝒆𝒔𝒕𝒂 𝒂𝒑𝒐𝒔𝒕𝒂𝒓"* 𝒆 𝒇𝒂𝒄𝒂 𝒔𝒆𝒖 𝒍𝒂𝒏𝒄𝒆 𝒔𝒆𝒈𝒖𝒊𝒏𝒅𝒐 𝒐𝒔 𝒅𝒐𝒈𝒎𝒂𝒔 𝒒𝒖𝒆 𝒍𝒉𝒆 𝒔𝒆𝒓𝒂𝒐 𝒎𝒂𝒏𝒅𝒂𝒅𝒐𝒔.𝑨𝒕𝒆𝒏𝒕𝒆𝒎-𝒔𝒆, 𝒎𝒐𝒓𝒕𝒂𝒊𝒔!

𝑽𝒐𝒄𝒆𝒔 𝒕𝒆𝒎 1 𝒉𝒐𝒓𝒂 𝒂𝒕𝒆 𝒐 𝒃𝒂𝒅𝒂𝒍𝒂𝒓 𝒅𝒂 𝒎𝒐𝒓𝒕𝒆 𝒕𝒐𝒄𝒂𝒓 𝒐 𝒗𝒂𝒍𝒐𝒓 𝒏𝒖𝒎𝒆𝒓𝒊𝒄𝒐 𝒆 𝒐 𝒎𝒂𝒍𝒅𝒊𝒕𝒐 𝒏𝒖𝒎𝒆𝒓𝒐 𝒅𝒂 𝒎𝒂𝒊𝒔 𝒅𝒆𝒔𝒕𝒆𝒎𝒊𝒅𝒂 𝒄𝒓𝒊𝒂𝒕𝒖𝒓𝒂 𝒔𝒆 𝒅𝒆𝒔𝒗𝒆𝒍𝒂𝒓, 𝒑𝒓𝒐𝒄𝒍𝒂𝒎𝒂𝒏𝒅𝒐 𝒆𝒏𝒕𝒂𝒐, 𝒂 𝒇𝒐𝒓𝒕𝒖𝒏𝒂𝒅𝒂 𝒂𝒍𝒎𝒂 𝒂 𝒑𝒓𝒐𝒔𝒑𝒆𝒓𝒂𝒓 𝒅𝒂 𝒆𝒔𝒄𝒖𝒓𝒊𝒅𝒂𝒐 

╰─...𖤐────────────────────╯`, m,{mentions:[m.sender]});
 /*   return conn.reply(m.chat, `━━━━━━━━━⬣♟️𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂⬣━━━━━━━━

*${usedPrefix + command} novo* ➥ Cria uma partida de xadrez
*${usedPrefix + command} entrar* - ➥ Entra em uma partida em espera
*${usedPrefix + command} play* ➥ Inicia o jogo se a partida tiver 2 participantes
*${usedPrefix + command} delete* ➥ Apaga a partida existente 
*${usedPrefix + command} [posicao inicial] [posicao final]* ➥ Faz um movimento no jogo de xadrez

─┅──┅❖  _𝐄𝐱𝐞𝐦𝐩𝐥𝐨:_
*${usedPrefix + command} novo* Cria uma partida
*${usedPrefix + command} entrar* entra na partida existente
Após 2 jogadores entrarem, digite ${usedPrefix + command} play 
para movimentar peças, faça como o exemplo
${usedPrefix + command} h1 h3
 ━━━━━━━━━⬣ִ ࣪𖤐⬣━━━━━━━━
    `, m);*/
  }
  if (feature === 'novo') {
    
    global.intervaloBicho = setInterval(async () => {
    console.log('loop da besta')
   
    // If the current time has reached or passed the target time
  if(global.db.data.chats[m.chat].bicho && global.db.data.chats[m.chat].bicho !== 'undefined' && !global.db.data.chats[m.chat].bicho.horarioSorteio) clearInterval(interval);


 if (global.db.data.chats[m.chat].bicho !== 'undefined'  && new Date()>global.db.data.chats[m.chat].bicho?.horarioSorteio) {
        clearInterval(global.intervaloBicho); // 
    console.log("jogo da besta fim ")
        
            try {
         
          
 
 
 
 await   verificarVencedores()
    
    delete global.db.data.chats[m.chat].bicho
  
     
m.react("☑️")
       
 
  console.log('Executing scheduled task...');

 
 
    delete global.db.data.chats[m.chat].bicho
  
    
        console.log('Sorteio');
    } catch (error) {
      m.react("❌")
        console.error('Error sending message:', error);
    }
    }


}, 10000); // Check every second
m.react("🕰️")
    
    
    
    if (global.db.data.chats[m.chat].bicho !== 'undefined'  && global.db.data.chats[m.chat].bicho.gameData) {
      let left2 = checkTimeleft()
      return conn.reply(m.chat, `━━━━━━━━━⬣ 𖤍 ⬣━━━━━━━━
   𓄿 𝔍𝔞 𝔢𝔵𝔦𝔰𝔱𝔢 𝔲𝔪 𝔰𝔬𝔯𝔱𝔢𝔦𝔬 𝔭𝔞𝔯𝔞 𝔥𝔬𝔧𝔢.
   
       𝑨𝒈𝒖𝒂𝒓𝒅𝒆 ${left2} 𝒎𝒊𝒏𝒖𝒕𝒐𝒔 𝒆 𝒔𝒆𝒈𝒖𝒏𝒅𝒐𝒔 𝒑𝒆𝒍𝒂 𝒓𝒆𝒗𝒆𝒍𝒂𝒄𝒂𝒐
       
━━━━━━━━━⬣ ♱ ⬣━━━━━━━━`, m);
    }
    
    if (!global.db.data.chats[m.chat].bicho) {
    global.db.data.chats[m.chat].bicho = {
        gameData: 'running',
        animais: [
    'Harpia', 'Corvo', 'Gato caolho', 'Coruja', 'Serpente',    'Morcego', 'Mariposa', 'Lobo', 'Urutau', 'Escaravelho', 'Abutre', 'Viúva negra', 'Gavião', 'Sapo', 'Papagaio pesquet',
    'Diabo da Tasmânia', 'Dragão de Komodo', 'Ratazana', 'Bode',
    'Urubu', 'Pantera', 'Hiena', 'Centopéia',
    'Lebre', 'Capivara'],
        animal: null,
        currentTurn: null,
        players: [],
        hasJoined: [],
        numero: null,
        apostas: {},
        total: 0
    };
}
     
// Define a variável now com o horário atual
let now = new Date();
    let scheduledDate =  new Date(now);
    scheduledDate.setHours(now.getHours() + 1);
console.log(`Time started at: ${now}`);
global.db.data.chats[m.chat].bicho.gameData ='running'
// Calcula o horário para 8 horas no futuro
// let scheduledDate = new Date(now.getTime() + 10000);

    console.log(`
JOGO DA BESTA 🜏
------------------

    Hora atual: ${now}
    
    Marcada : ${scheduledDate}`)

    global.db.data.chats[m.chat].bicho.horarioSorteio = scheduledDate
    
    let left1 = checkTimeleft()
   conn.reply(m.chat,
`━━━━━━━━━⬣ ⋆ ⬣━━━━━━━━
𝑺𝒐𝒓𝒕𝒆𝒊𝒐 𝒊𝒏𝒊𝒄𝒊𝒂𝒅𝒐𓄿

𝑹𝒆𝒔𝒖𝒍𝒕𝒂𝒅𝒐 𝒊𝒓𝒂 𝒐𝒄𝒐𝒓𝒓𝒆𝒓 𝒂 𝒅𝒂𝒒𝒖𝒊 1 𝒉𝒐𝒓𝒂
━━━━━━━━━⬣ ✮ ⬣━━━━━━━━`
    , m);
  
  



  
return !0
  
}
// 
// ddd
if(feature == 'apostar') {
  if(global.db.data.chats[m.chat].bicho.gameData != 'running') {
  
    return conn.reply(m.chat,
`━━━━━━━━━⬣ ⋆ ⬣━━━━━━━━
𝑵𝒂𝒐 𝒉𝒂 𝒏𝒆𝒏𝒉𝒖𝒎 𝒋𝒐𝒈𝒐 𝒆𝒎 𝒂𝒏𝒅𝒂𝒎𝒆𝒏𝒕𝒐

𝒅𝒊𝒈𝒊𝒕𝒆 *.bicho novo* 𝒑𝒂𝒓𝒂 𝒄𝒐𝒎𝒆𝒄𝒂𝒓 𝒖𝒎 𝒏𝒐𝒗𝒐
━━━━━━━━━⬣ ✮ ⬣━━━━━━━━`
    , m);
   
  }
 else if(global.db.data.chats[m.chat].bicho.players.hasOwnProperty(m.sender)) {
      let left1 = checkTimeleft()
    return conn.reply(m.chat,
`━━━━━━━━━⬣ ⋆ ⬣━━━━━━━━
𝑽𝒐𝒄𝒆 𝒋𝒂 𝒇𝒆𝒛 𝒔𝒖𝒂 𝒂𝒑𝒐𝒔𝒕𝒂 𓄿

𝑹𝒆𝒔𝒖𝒍𝒕𝒂𝒅𝒐 𝒊𝒓𝒂 𝒐𝒄𝒐𝒓𝒓𝒆𝒓 𝒂𝒔 𝒅𝒂𝒒𝒖𝒊 ${left1} 𝒎𝒊𝒏𝒖𝒕𝒐𝒔 𝒆 𝒔𝒆𝒈𝒖𝒏𝒅𝒐𝒔
━━━━━━━━━⬣ ✮ ⬣━━━━━━━━`
    , m);
  }
 else if(!global.db.data.chats[m.chat].bicho.players.includes(m.sender)) {
  
    let textoP = `
┏━━❬ 𖤐 ❭━━┓
*┃* @${m.sender.split("@")[0]}
*┃* 𝑭𝒂𝒄𝒂 𝒂 𝒔𝒖𝒂 𝒂𝒑𝒐𝒔𝒕𝒂:
*┃* 𝑹𝒆𝒔𝒑𝒐𝒏𝒅𝒂 𝒄𝒐𝒎 𝒐 𝒏𝒖𝒎𝒆𝒓𝒐 𝒅𝒐 
*┃* 𝒂𝒏𝒊𝒎𝒂𝒍 𝒒𝒖𝒆 𝒅𝒆𝒔𝒆𝒋𝒂 𝒂𝒑𝒐𝒔𝒕𝒂𝒓
*┃* 
${global.db.data.chats[m.chat].bicho.animais.map((animal, index) => `*┃* ${index + 1}. ${animal}`).join('\n')}
┗━━━━━━━━━━━━━━━━`
if(!global.db.data.chats[m.chat].bicho.players[m.sender]){
  global.db.data.chats[m.chat].bicho.players[m.sender] = {
    regMsg: null,
    animal: null,
    sets:[],
    numero: 0,
  }
}

let mshg = await conn.reply(m.chat, textoP, m, { mentions: conn.parseMention(textoP) })
  global.db.data.chats[m.chat].bicho.players[m.sender].regMsg = mshg.key.id
  global.db.data.chats[m.chat].bicho.players[m.sender].regIndex = 0
  
  
  }
  
  
  
}
if (!feature){
  return conn.reply(m.chat, ` 
╭━━━━━━━━━⬣
┃
┃ ❌✒️𝐂𝐨𝐦𝐚𝐧𝐝𝐨 𝐢𝐧𝐜𝐨𝐫𝐫𝐞𝐭𝐨! 
┃ 𝐑𝐞𝐭𝐨𝐫𝐧𝐞 𝐧𝐨𝐯𝐚𝐦𝐞𝐧𝐭𝐞 𝐧𝐞𝐬𝐭𝐞 
┃ 𝐯𝐚𝐥𝐞 𝐬𝐨𝐦𝐛𝐫𝐢𝐨 𝐝𝐞 𝐭𝐫𝐮𝐪𝐮𝐞𝐬 𝐝𝐞 
┃ 𝐥𝐨𝐠𝐢𝐜𝐚 𝐜𝐨𝐦 𝐨 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 
┃ 𝐚𝐩𝐫𝐨𝐩𝐫𝐢𝐚𝐝𝐨
┃
┃ 𝐔𝐬𝐞 ${usedPrefix + command} info 𝐩𝐚𝐫𝐚 
┃ 𝐯𝐞𝐫 𝐚 𝐥𝐢𝐬𝐭𝐚 𝐝𝐨𝐬 𝐜𝐨𝐦𝐚𝐧𝐝𝐨𝐬
┃
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
┃ 𝙼𝚛. 𝚁𝚘𝚋𝚘𝚝 | ${vs}
╰━━━━━━━━━━━━━━━━━━⬣`, m);
}

async function verificarVencedores() {
  const vencedoresNumeroExato = [];
  const vencedoresAnimal = [];
  
  
// Sorteio de um número entre 1 e 100
let numer = Math.floor(Math.random() * 100) + 1;

// Encontrar o animal sorteado
const animalia= encontrarAnimal(numer);
global.db.data.chats[m.chat].bicho.animal = animalia
global.db.data.chats[m.chat].bicho.numero = numer

   let apostas = global.db.data.chats[m.chat].bicho.players
   let numeroSorteado =  global.db.data.chats[m.chat].bicho.numero
   
   let animalSorteado = global.db.data.chats[m.chat].bicho.animal
  Object.keys(apostas).forEach(jogador => {
    if (apostas[jogador].numero == numeroSorteado) {
      vencedoresNumeroExato.push(jogador);
    } else if (apostas[jogador].animal == animalSorteado) {
      vencedoresAnimal.push(jogador);
    }
  });

  if (vencedoresNumeroExato.length > 0) {
  
// Calculate prize per winner
let prizePerWinner = Math.floor(global.db.data.chats[m.chat].bicho.aposta / vencedoresNumeroExato.length);
let vencedores = ''
vencedoresNumeroExato.forEach(winner => {
  global.db.data.chats[m.chat].users[winner].money += prizePerWinner
vencedores += `\n @${winner.split('@')[0]}`
});



// List each winner and their share of the prize
    let txtA = `━━━━━━━━━⬣ 𖤐 ⬣━━━━━━━━ 
  𝔍𝔬𝔤𝔬 𝔡𝔞 𝔅𝔢𝔰𝔱𝔞 
     ⸸ _*${numeroSorteado}*_ ⸸
    𝑶 𝒂𝒏𝒊𝒎𝒂𝒍 𝒔𝒐𝒓𝒕𝒆𝒂𝒅𝒐 𝒇𝒐𝒊:
   *${animalSorteado}*
   
𝑨𝒍𝒎𝒂𝒔 𝒄𝒐𝒏𝒄𝒆𝒅𝒊𝒅𝒂𝒔 𝒂 𝒄𝒆𝒍𝒆𝒔𝒕𝒊𝒂𝒍 𝒇𝒐𝒓𝒕𝒖𝒏𝒂
    
  𝑫𝒆𝒔𝒗𝒆𝒏𝒅𝒂𝒓𝒂𝒎 𝒐 𝑵𝒖𝒎𝒆𝒓𝒐 𝒅𝒆𝒔𝒕𝒆𝒎𝒊𝒅𝒐: 
  ${vencedores}
  
   ━━━━━━━━━⬣⬣━━━━━━━━  `
       
       await conn.sendMessage(m.chat, {text: txtA, }  ,{mentions:participants.map(a => a.id)}
       );
       
     return !0
  } else if (vencedoresAnimal.length > 0) {
  
 // Calculate prize per winner
let prizePerWinner = Math.floor(global.db.data.chats[m.chat].bicho.aposta / vencedoresAnimal.length);
let vencedores = ''
vencedoresNumeroExato.forEach(winner => {
  global.db.data.chats[m.chat].users[winner].money += prizePerWinner
vencedores +=   `\n @${winner.split('@')[0]}`
});
  
       let txtB = `━━━━━━━━━⬣ 𖤐 ⬣━━━━━━━━
                          𝔍𝔬𝔤𝔬 𝔡𝔞 𝔅𝔢𝔰𝔱𝔞 
                            ⸸ _*${numeroSorteado}*_ ⸸
    𝑶 𝒂𝒏𝒊𝒎𝒂𝒍 𝒔𝒐𝒓𝒕𝒆𝒂𝒅𝒐 𝒇𝒐𝒊:
   *${animalSorteado}*
   
𝑨𝒍𝒎𝒂𝒔 𝒄𝒐𝒏𝒄𝒆𝒅𝒊𝒅𝒂𝒔 𝒂 𝒄𝒆𝒍𝒆𝒔𝒕𝒊𝒂𝒍 𝒇𝒐𝒓𝒕𝒖𝒏𝒂
    
  𝑫𝒆𝒔𝒗𝒆𝒏𝒅𝒂𝒓𝒂𝒎 𝒐 𝑵𝒖𝒎𝒆𝒓𝒐 𝒅𝒆𝒔𝒕𝒆𝒎𝒊𝒅𝒐: 
  ${vencedores}
  
   ━━━━━━━━━⬣⬣━━━━━━━━  `
    await conn.sendMessage(m.chat, {text: txtB, }  ,{ mentions: conn.parseMention(txtB) });
     return !0
  } else {
       let txtC = `━━━━━━━━━⬣ 𖤐 ⬣━━━━━━━━
                      𝔍𝔬𝔤𝔬 𝔡𝔞 𝔅𝔢𝔰𝔱𝔞 
                            ⸸ _*${numeroSorteado}*_ ⸸
    𝑶 𝒂𝒏𝒊𝒎𝒂𝒍 𝒔𝒐𝒓𝒕𝒆𝒂𝒅𝒐 𝒇𝒐𝒊:
   *${animalSorteado}*
   
  𝑵𝒆𝒏𝒉𝒖𝒎𝒂 𝒂𝒍𝒎𝒂 𝒑𝒓𝒆𝒔𝒆𝒏𝒕𝒆 𝒂𝒄𝒆𝒓𝒕𝒐𝒖 𝒆𝒔𝒕𝒆 𝒋𝒐𝒈𝒐
  
   ━━━━━━━━━⬣⬣━━━━━━━━  `
       await conn.sendMessage(m.chat, {text: txtC, }  ,{ mentions: conn.parseMention(txtC) });
     return !0
  }
}
  function encontrarAnimal(numeroSorteado) {
  for (let i = 0; i < global.db.data.chats[m.chat].bicho.animais.length; i++) {
    const numerosDoAnimal = [i * 4 + 1, i * 4 + 2, i * 4 + 3, i * 4 + 4];
    if (numerosDoAnimal.includes(numeroSorteado)) {
      return global.db.data.chats[m.chat].bicho.animais[i];
    }
  }
  return 'Animal não encontrado';
}

 
 
 

}
 
handler.command = ['besta'] 
handler.owner = false
export default handler
function wait(seconds) {
  return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}
