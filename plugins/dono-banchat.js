
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────


import schedule from 'node-schedule'

function pickRandom(list) { return list[Math.floor(Math.random() * list.length)]}
let handler = async (m,{args,command}) => {
  process.env.TZ = 'America/Sao_Paulo';

  const horaatual = moment().tz('America/Sao_Paulo').format('HH:mm')
  const scheduledTime = new Date();
  /*
  
  
  
  
  
  scheduledTime.setHours(hours, minutes, 0, 0);

  // Schedule the task
  console.log('Scheduled time:', scheduledTime);
  
  const horario = args[0]
  const [hours, minutes] = horario.split(':').map(Number); */
  let chat = global.db.data.chats[m.chat]
  try{
 
  if (args[0]) {
    if(command='desligar'){
      chat.isBanned = true
    }
    else{
      chat.modoadmin = true
    }
    const currentDateTime = new Date();
const currentHours = currentDateTime.getHours();
const currentMinutes = currentDateTime.getMinutes();
const currentSeconds = currentDateTime.getSeconds();

let timeoutset;

if (args[0].includes(':')) {
  // User input is in the format HH:mm or HH:mm:ss
  const [hours, minutes, seconds] = args[0].split(':').map(Number);

  // Check if seconds are present, otherwise default to 0
  const totalSeconds = isNaN(seconds) ? 0 : seconds;

  timeoutset = (hours * 3600 + minutes * 60 + totalSeconds) * 1000; // Convert hours, minutes, and seconds to milliseconds
} else {
  // User input is in hours
  timeoutset = args[0] * 3600000; // Convert hours to milliseconds
}
console.log(timeoutset)
const newScheduledTime = new Date(currentDateTime.getTime() + timeoutset);


let tempo = formatTime(timeoutset)

   m.reply(`${eg} ⚠️ BOT DESATIVADO ⚠️ \n 
❖─┅──┅\n💀 COMANDOS INDISPONÍVEIS POR ${tempo}\n─┅──┅❖ 

${pickRandom([ 
 "Adeus, como uma sombra que se dissipa com o nascer do sol, parto para o além.",
  "Assim como o vento leva as folhas secas, minha despedida é suave, mas inevitável.",
  "Parto desta existência como um barco que se afasta silenciosamente no crepúsculo.",
  "Da encruzilhada da vida, escolho o caminho da despedida, deixando para trás memórias e mistérios.",
  "Como um eco que desvanece na distância, minha presença se desvanece no horizonte do adeus.",
  "Na penumbra da despedida, deixo para trás a trama intricada da vida para encontrar o desconhecido.",
  "Assim como a última nota de uma melodia, minha despedida ressoa no silêncio que se segue.",
  "Deixo este palco como um ator após sua última cena, desaparecendo nas cortinas do destino.",
  "Como as sombras da noite que se retiram com a luz da aurora, eu me despeço da escuridão.",
  "Nas asas da despedida, como um corvo solitário, alço voo para longe dos domínios conhecidos."
])}
  -- 𝓔𝓭𝓰𝓪𝓻 𝓐. `) 
  const horarioBot = new Date();
horarioBot.setHours(newScheduledTime.getHours(), newScheduledTime.getMinutes(),newScheduledTime.getSeconds() , 0)

 schedule.scheduleJob(horarioBot, async () => {

  console.log('Executing scheduled task...');

  
  global.db.data.chats[m.chat].isBanned = false
m.reply(`${eg} ❖─┅──┅\n📜✒️ BOT REATIVADO NOVAMENTE\n─┅──┅❖ 

${pickRandom([

"Voltei do vale da sombra da morte para contemplar mais uma vez a luz do dia.",
  "Como um corvo que retorna ao seu poleiro, estou de volta para encarar os enigmas da existência.",
  "Dos abismos sombrios emergi, pronto para saudar novamente o mundo dos vivos.",
  "Do limiar entre o sono e a vigília, regresso à realidade com olhos reavivados.",
  "As portas do desconhecido se abriram e eu, como um espectro ressurgido, retorno à vida.",
  "Após vagar por terras obscuras, retorno como uma fênix, pronto para renascer das cinzas.",
  "Das profundezas do esquecimento, retornei para reescrever minha própria história.",
  "As sombras da ausência dissiparam-se, e estou de volta para abraçar a luz da presença.",
  "Como um viajante perdido retorna à senda certa, aqui estou eu, de volta aos caminhos familiares.",
  "Das trevas do exílio, retorno com palavras de reconciliação e boas-vindas."
])}
-- 𝓔𝓭𝓰𝓪𝓻 𝓐.  `)
  }); 
  
  
  
    
    return !0
  }
  
  else if(!args[0]){
  

m.reply(`⚠️ BOT DESATIVADO ⚠️ \n 
❖─┅──┅\n💀 COMANDOS TEMPORARIAMENTE INDISPONÍVEIS ATÉ REATIVAÇÃO POR PARTE DOS ADMINS\n─┅──┅❖ 
${pickRandom([ 
 "Adeus, como uma sombra que se dissipa com o nascer do sol, parto para o além.",
  "Assim como o vento leva as folhas secas, minha despedida é suave, mas inevitável.",
  "Parto desta existência como um barco que se afasta silenciosamente no crepúsculo.",
  "Da encruzilhada da vida, escolho o caminho da despedida, deixando para trás memórias e mistérios.",
  "Como um eco que desvanece na distância, minha presença se desvanece no horizonte do adeus.",
  "Na penumbra da despedida, deixo para trás a trama intricada da vida para encontrar o desconhecido.",
  "Assim como a última nota de uma melodia, minha despedida ressoa no silêncio que se segue.",
  "Deixo este palco como um ator após sua última cena, desaparecendo nas cortinas do destino.",
  "Como as sombras da noite que se retiram com a luz da aurora, eu me despeço da escuridão.",
  "Nas asas da despedida, como um corvo solitário, alço voo para longe dos domínios conhecidos."
])}
  -- 𝓔𝓭𝓰𝓪𝓻 𝓐. `)
      if(command='desligar'){
      chat.isBanned = true
    }
    else{
      chat.modoadmin = true
    }
  m.react("✅")
}}
catch(e){
  await m.reply("erro ⸸")
  console.log(e)
}

}
handler.help = ['banchat']
handler.tags = ['owner']
handler.command = /^botoff|mutebot|desligar/i
handler.botAdmin = false
handler.admin = true 
export default handler

function formatTime(milliseconds) {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}