
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

//Créditos a Katashi Fukushima

import fs from 'fs'

const handler = async (m, {conn, participants, groupMetadata,isAdmin, isOwner, text, args, usedPrefix, command, reply}) => {
  
  if(!(isAdmin || isOwner) && global.db.data.chats[m.chat].jogos===false){
   m.react("❌")
   
   return !0;
 } 
if (['del', 'delete', 'apagar', 'deletar', 'sair', 'fim', 'reset'].includes(args[0])) {
   global.db.data.chats[m.chat].forca.isGame = false;
            global.db.data.chats[m.chat].forca.forcaID = '';
            
    await m.reply(`𓄿 𝑷𝒂𝒓𝒕𝒊𝒅𝒂 𝒅𝒆𝒍𝒆𝒕𝒂𝒅𝒂. . .`)
return !0
}


if(!global.db.data.chats[m.chat]){
  global.db.data.chats[m.chat]={}
}


if(!global.db.data.chats[m.chat].forca){
  global.db.data.chats[m.chat].forca={
    isGame:false,
    forcaID: '',
    palavra: '',
    currentStatus: '',
    currentStage: '',
    
  }
  
}


if(global.db.data.chats[m.chat].forca.isGame){
  m.react("👁️")
  m.reply(
`━━━━━━━━━⬣🌕⬣━━━━━━━━
𝙿𝚊𝚛𝚝𝚒𝚍𝚊 𝚎𝚖 𝚊𝚗𝚍𝚊𝚖𝚎𝚗𝚝𝚘..
𝚃𝚎𝚛𝚖𝚒𝚗𝚎-𝚊 𝚊𝚗𝚝𝚎𝚜 𝚍𝚎 𝚐𝚎𝚛𝚊𝚛 𝚞𝚖 𝚗𝚘𝚟𝚘 𝚓𝚘𝚐𝚘
━━━━━━━━━⬣⬣━━━━━━━━`)
return !0
}
function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]}

const palavras = [
  "demonio",
  "inferno",
  "maldicao",
  "blasfemia",
  "diabo",
  "pecado",
  "perdicao",
  "tentacao",
  "chamas",
  "abismo",
  "trevas",
  "tortura",
  "sofrimento",
  "possessao",
  "destruicao",
  "ruina",
  "escuridao",
  "calabouco",
  "agonia",
  "bruxaria",
  "malevolencia",
  "purgatorio",
  "maldade",
  "obscuridade",
  "fantasma",
  "infernal",
  "maledicencia",
  "exorcismo",
  "condenacao",
  "sacrificio",
  "avareza",
  "pecaminoso",
  "sinistro",
  "desespero",
  "hades",
  "aterrorizante",
  "demoniaco",
  "desgraca",
  "perdido",
  "tenebroso",
  "possuido",
  "luxuria",
  "satanico",
  "blasfemo",
  "malefico",
  "penumbra",
  "vulcao",
  "depravado",
  "maligno",
  "abominavel",
  "infernizar",
  "malicioso",
  "tenebroso",
  "sinistro",
  "aterrorizante",
  "medonho",
  "satanico",
  "macabro",
  "pacto",
  "invocar",
  "lugubre",
  "assombracao",
  "perverso",
  "infernal",
  "pecaminoso",
  "tormento",
  "maligno",
  "possuido",
  "malevolente",
  "calamidade",
  "aberracao",
  "terrivel",
  "tortura",
  "demoniaco",
  "vodu",
  "perigoso",
  "maldoso",
  "sinistro",
  "horrendo",
  "blasfemo",
  "maldizer",
  "derradeiro",
  "endemoniado",
  "maculado",
  "sombrio",
  "diabolico",
  "condenar",
  "pernicioso",
  "malvado",
  "misterioso",
  "maleficio",
  "imundo",
  "execravel",
  "profano",
  "repugnante",
  "terrivel",
  "desumano",
  "aterrorizador",
  "vulto",
  "vibora",
  "cemiterio",
  "sombrio",
  "escuridao",
  "fantasma",
  "vampiro",
  "bruxa",
  "lobisomem",
  "corvo",
  "morcego",
  "maldicao",
  "necromancia",
  "assombracao",
  "sussurro",
  "tumulo",
  "espectral",
  "desespero",
  "macabro",
  "sinistro",
  "melancolia",
  "crepusculo",
  "horror",
  "mortuario",
  "misterio",
  "calabouco",
  "catacumba",
  "agonia",
  "sepultura",
  "abismo",
  "blasfemia",
  "sacrificio",
  "obscuridade",
  "cruz",
  "brumas",
  "desolacao",
  "horripilante",
  "demoniaco",
  "assombroso",
  "gotico",
  "livro",
  "poema",
  "autor",
  "poeira",
  "candelabro",
  "medo",
  "terror",
  "trevas",
  "fogos-fatuos",
  "esqueleto",
  "maldito",
  "bruxaria",
  "seculo",
  "abandono",
  "caverna",
  "fantasma",
    "vulto",
  "misterioso",
  "agonizante",
  "pavor",
  "ruina",
  "solitario",
  "calafrio",
  "praga",
  "moribundo",
  "profano",
  "tenebroso",
  "coveiro",
  "oculto",
  "esquecido",
  "lapide",
  "assombro",
  "exilio",
  "condenado",
  "ruido",
  "pesadelo",
  "lagrimas",
  "desgraca",
  "horrorivel",
  "escuridao",
  "neblina",
  "abandonado",
  "crenca",
  "purgatorio",
  "rancor",
  "transeunte",
  "paranormal",
  "sacrificio",
  "cicatriz",
  "atormentado",
  "ocultismo",
  "caos",
  "sobrenatural",
  "decomposicao",
  "sombra",
  "cadaver",
  "profundezas",
  "lua",
  "afligir",
  "conspiracao",
  "lamento",
  "sussurros",
  "sinete",
  "escuridao",
  "caixao",
  "penumbra",
  "sepulcro",
  "bruxedo",
  "lugubre",
  "subterraneo",
  "calmo",
  "aparicao",
  "cicatriz",
  "estigma",
  "pranto",
  "cruel",
  "destruicao",
  "ninho",
  "inquietante",
  "enigma",
    "efemero",
  "eficacia",
  "insolito",
  "plenitude",
  "efervescencia",
  "perplexidade",
  "resiliencia",
  "paradoxo",
  "apogeu",
  "aliteracao",
  "acrimonia",
  "procrastinacao",
  "vicissitude",
  "perspicacia",
  "elocubracao",
  "equanimidade",
  "efusividade",
  "meticuloso",
  "sagacidade",
  "efetividade",
  "ambiguidade",
  "imperturbavel",
  "ascendente",
  "contundente",
  "exacerbar",
  "faceta",
  "magnanimo",
  "obnubilar",
  "sucumbir",
  "sublime",
  "vivaz",
  "proficuo",
  "exotico",
  "acolito",
  "exortacao",
  "proposito",
  "efemera",
  "sintetico",
  "prosodia",
  "ascetico",
  "elucidar",
  "eximio",
  "astucia",
  "remanescente",
  "plenipotenciario",
  "austeridade",
  "difuso",
  "exacerbacao",
  "circunspecção",
  "soturno",
  
  ]
const palavraAleatoria = palavras[Math.floor(Math.random() * palavras.length)];
global.db.data.chats[m.chat].forca.palavra = palavraAleatoria
let palavraDescoberta = '';
for (let i = 0; i < palavraAleatoria.length; i++) {
    palavraDescoberta += '_';
}
global.db.data.chats[m.chat].forca.currentStatus = palavraDescoberta



if(!global.db.data.chats[m.chat].forca.stages){
  global.db.data.chats[m.chat].forca={
    palavra: palavraAleatoria,
      isGame:true,
    forcaID: '',
    
    currentStatus: palavraDescoberta,
    currentStageIndex: 0,
    stages: [
      `♱ 𝑻𝒉𝒆 𝒉𝒂𝒏𝒈𝒎𝒂𝒏
      
╭─┅──┅❖
|                   |
|                   |
|                   
|
|
|
|
|
|                             𓄿
*╰─┅──┅┅❖ ⸸ ❖─┅*

`,
      `♱ 𝑻𝒉𝒆 𝒉𝒂𝒏𝒈𝒎𝒂𝒏
      
╭─┅──┅❖
|                   |
|                   |
|                   O
|
|
|
|
|
|                             𓄿
*╰─┅──┅┅❖ ⸸ ❖─┅*

`,
      `♱ 𝑻𝒉𝒆 𝒉𝒂𝒏𝒈𝒎𝒂𝒏
 
╭─┅──┅❖
|                   |
|                   |
|                   O
|                   |
|
|
|
|
|
|                             𓄿
*╰─┅──┅┅❖ ⸸ ❖─┅*

`,
      `♱ 𝑻𝒉𝒆 𝒉𝒂𝒏𝒈𝒎𝒂𝒏
      
╭─┅──┅❖
|                   |
|                   |
|                   O
|                  /|
|
|
|
|
|
|                             𓄿
*╰─┅──┅┅❖ ⸸ ❖─┅*

`,
      
      `♱ 𝑻𝒉𝒆 𝒉𝒂𝒏𝒈𝒎𝒂𝒏
      
╭─┅──┅❖
|                   |
|                   |
|                   O
|                  /|\\
|
|
|
|
|
|                             𓄿
*╰─┅──┅┅❖ ⸸ ❖─┅*

`,
      `♱ 𝑻𝒉𝒆 𝒉𝒂𝒏𝒈𝒎𝒂𝒏
      
╭─┅──┅❖
|                   |
|                   |
|                   O
|                  /|\\
|                  /
|
|
|
|
|
|                             𓄿
*╰─┅──┅┅❖ ⸸ ❖─┅*

`,
      `♱ 𝑻𝒉𝒆 𝒉𝒂𝒏𝒈𝒎𝒂𝒏
      
╭─┅──┅❖
|                   |
|                   |
|                   O
|                  /|\\
|                  / \\
|
|
|
|
|
|                             𓄿
*╰─┅──┅┅❖ ⸸ ❖─┅*

`

]
  }
 
  }
console.log("Jogo da Forca!");
console.log("Adivinhe a palavra: " + palavraAleatoria);

global.db.data.chats[m.chat].forca.currentStageIndex = 0
let index = global.db.data.chats[m.chat].forca.currentStageIndex
global.db.data.chats[m.chat].forca.isGame= true


let separatedStatus = [...global.db.data.chats[m.chat].forca.currentStatus].join(' ');

let message = await  conn.sendFile(m.chat, global.imagen8, 'edgar.jpg', `♱ 𝑻𝒉𝒆 𝒉𝒂𝒏𝒈𝒎𝒂𝒏
      
╭─┅──┅❖
|                   |       𝙲𝚘𝚖𝚘 𝙹𝚘𝚐𝚊𝚛:
|                   |          𝑹𝒆𝒔𝒑𝒐𝒏𝒅𝒂 𝒂 
|                            𝒎𝒆𝒏𝒔𝒂𝒈𝒆𝒎 𝒅𝒐 𝑬𝒅𝒈𝒂𝒓 𝒄𝒐𝒎 
|                       𝒂 𝒓𝒆𝒔𝒑𝒆𝒄𝒕𝒊𝒗𝒂 𝒍𝒆𝒕𝒓𝒂 𝒐𝒖 𝒑𝒂𝒍𝒂𝒗𝒓𝒂 
|                             𝒒𝒖𝒆 𝒂𝒄𝒉𝒂𝒔 𝒄𝒐𝒓𝒓𝒆𝒕𝒂
|
|
|
|                             𓄿
*╰─┅──┅┅❖ ⸸ ❖─┅*

ִ ࣪𖤐 ${separatedStatus}`, m)

global.db.data.chats[m.chat].forca.forcaID= message.key
  
}

handler.help = ['forca']
handler.tags = ['jogos']
handler.command = /^(forca)$/i

export default handler