
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

const langz = global.db.data.chats[m.chat].language;

m.reply(`┌──[ Ǥнѳᔕт ]─[/usr/bin]
└─ systemctl stop bytesecMD
| [+] 200 OK
> . . . . . . . . . . . . . . . . . 
> 𝙱𝙾𝚃 𝙾𝙵𝙵𝙻𝙸𝙽𝙴 ${ langz == 'en' ? '𝙵𝙾𝚁' : '𝙿𝙾𝚁'} ${tempo}
`) 
  const horarioBot = new Date();
horarioBot.setHours(newScheduledTime.getHours(), newScheduledTime.getMinutes(),newScheduledTime.getSeconds() , 0)

 schedule.scheduleJob(horarioBot, async () => {

  console.log('Executing scheduled task...');

  
  global.db.data.chats[m.chat].isBanned = false
m.reply(`┌──[ Ǥнѳᔕт ]─[/usr/bin]
└─ systemctl restart bytesecMD
| [+] 200 OK
> . . . . . . . . . . . . . . . . . 
> 𝙱𝙾𝚃 𝙾𝙽𝙻𝙸𝙽𝙴 
`)
  }); 
  
  
  
    
    return !0
  }
  
  else if(!args[0]){
  
    m.reply(`┌──[ Ǥнѳᔕт ]─[/usr/bin]
      └─ systemctl stop bytesecMD
> ‎ 
| [+] 200 OK
> . . . . . . . . . . . . . . . . . 
> 𝙱𝙾𝚃 𝙾𝙵𝙵𝙻𝙸𝙽𝙴
`) 


      if(command='desligar'){
      chat.isBanned = true
    }
    else{
      chat.modoadmin = true
    }
  m.react("✅")
}}
catch(e){
    sendSystemErrorAlert(global.db.data.chats[m.chat].language);
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