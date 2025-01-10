
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────


import schedule from 'node-schedule'

let handler = async (m, { conn, text, usedPrefix, isAdmin,participants, isOwner,command, args}) => {
  


let user, number, bot, bant, ownerNumber, aa, users, usr, q, mime, img
try {
let user = global.db.data.users[m.sender]
let groups = Object.keys(await conn.groupFetchAllParticipating())

// Set the timezone to 'America/Sao_Paulo'
  
  
if (!text || !args[1] || !/^\d{1,2}(:\d{2}){0,2}$/.test(args[0])) return conn.reply(m.chat, `
╭━━━━━━━━━⬣
┃
┃ ✒️📜 𝐃𝐢𝐠𝐚-𝐦𝐞 𝐪𝐮𝐚𝐥 𝐦𝐞𝐧𝐬𝐚𝐠𝐞𝐦 
┃ 𝐝𝐞𝐬𝐞𝐣𝐚 𝐞𝐜𝐨𝐚𝐫 𝐩𝐞𝐥𝐨𝐬 𝐜𝐚𝐧𝐭𝐨𝐬 
┃ 𝐬𝐨𝐦𝐛𝐫𝐢𝐨𝐬 𝐣𝐮𝐧𝐭𝐚𝐦𝐞𝐧𝐭𝐞 𝐜𝐨𝐦 𝐨 
┃ 𝐡𝐨𝐫á𝐫𝐢𝐨 𝐞𝐬𝐭𝐢𝐩𝐮𝐥𝐚𝐝𝐨
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
┃ 𝐄𝐱𝐞𝐦𝐩𝐥𝐨:
┃ *${usedPrefix + command} 02:35:02 Lembrete para expurgar as almas de meu calabouço*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
┃ 𝙼𝚛. 𝚁𝚘𝚋𝚘𝚝 | ${vs}
╰━━━━━━━━━━━━━━━━━━⬣`, null, m)               


if ( /^\d{1,2}(:\d{2}){0,2}$/.test(args[0]) && args[1]){
  const lembrete = args.slice(1).join(' ');
  const horario = args[0]
const timeArg = args[0];
    const timeObject = parseTimeArgument(timeArg);
    console.log(timeObject)
  let   { hours, minutes, seconds } = timeObject
    
    let tempo =''
    if(hours>0){
    tempo += `${hours} 𝒉𝒐𝒓𝒂𝒔`
    }
    if(minutes>0 && seconds<0){
      tempo += `,𝒆 ${minutes} 𝒎𝒊𝒏𝒖𝒕𝒐𝒔 `
    }
    if(minutes<0&& seconds>0 ){

      tempo+= `${seconds} 𝒔𝒆𝒈𝒖𝒏𝒅𝒐𝒔`
    }
    
    
      const now =new Date();
    let scheduledDate =  new Date(now);
if(hours<0) hours =0 
if(minutes <0) minutes = 0 
if(seconds<0) seconds=0
    scheduledDate.setHours(now.getHours() + hours);
    scheduledDate.setMinutes(now.getMinutes() + minutes);
    scheduledDate.setSeconds(now.getSeconds() + seconds);
    console.log(`
    Horas: ${hours}
    Minutos: ${minutes}
    Segundos: ${seconds}
    Hora atual: ${now}
    
    Marcada : ${scheduledDate}`)
let msgheader = `┏━── *「️𖤍」*  ─━┓
𝕷𝖊𝖒𝖇𝖗𝖊𝖙𝖊 𝖉𝖊 @${m.sender.split('@')[0]}, 𝖒𝖆𝖗𝖈𝖆𝖉𝖔 𝖕𝖆𝖗𝖆 ${new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}

│▢  ${lembrete}

┗━── *「️𖤐」*  ─━┛`

global.db.data.chats[m.chat].noticeMsg = msgheader
global.db.data.chats[m.chat].noticeTime = new Date(scheduledDate)

  

    
   
    
const interval = setInterval(async () => {
    const now = new Date();
    console.log("checking ")
    console.log(now)
    const timeDifference = scheduledDate - now;
console.log(timeDifference)
    // If the current time has reached or passed the target time
    if (new Date()> global.db.data.chats[m.chat].noticeTime) {
        clearInterval(interval); // Clear the interval to stop checking
            try {
       
        // Assuming `m.chat` is the chat you want to send the message to
        return m.reply(msgheader, null, { mentions: conn.parseMention(msgheader)})
        
        console.log('Message sent successfully!');
    } catch (error) {
        console.error('Error sending message:', error);
    }
    }
}, 5000); // Check every second
   /*
   /*
   const currentDate = new Date();

// Set the current date to the start and end times
const startDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), parseInt(horaatual.split(":")[0]), parseInt(horaatual.split(":")[1]), 0);
const endDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), parseInt(horario.split(":")[0]), parseInt(horario.split(":")[1]), 0);

// Calculate the difference in minutes
const timeoutset = endDate - startDate;


   
   
  console.log("hora atual    "+horaatual+"\ntipo:  "+typeof horaatual)
  console.log("hora definida    "+horario+"\ntipo   "+typeof horario)
  console.log(timeoutset*/
  let DELETEMESSAGE = await conn.sendMessage(m.chat, { delete: m.key })
    
   
console.log(DELETEMESSAGE.message.protocolMessage.key.id)

if(!global.db.data.chats[m.chat].ignored)
{
  global.db.data.chats[m.chat].ignored =[]
}
global.db.data.chats[m.chat].ignored.push(DELETEMESSAGE.message.protocolMessage.key.id)

let msgg = `━━━━━━━━━⬣⬣━━━━━━━━
🌕 *@${m.sender.split("@")[0]}* 𝐚𝐠𝐞𝐧𝐝𝐨𝐮 𝐮𝐦𝐚 𝐦𝐞𝐧𝐬𝐚𝐠𝐞𝐦 𝐩𝐚𝐫𝐚 𝐞𝐜𝐨𝐚𝐫 𝐞𝐧𝐭𝐫𝐞 𝐚𝐬 𝐚𝐥𝐦𝐚𝐬 𝐩𝐞𝐫𝐝𝐢𝐝𝐚𝐬 𝐝𝐨 𝐠𝐫𝐮𝐩𝐨, 𝐦𝐚𝐫𝐜𝐚𝐧𝐝𝐨 𝐨 𝐥𝐞𝐦𝐛𝐫𝐞𝐭𝐞 𝐩𝐚𝐫𝐚 𝒅𝒂𝒒𝒖𝒊 *${tempo}*
 ━━━━━━━━━⬣⬣━━━━━━━━`
  
 await conn.sendMessage(m.chat, { text: msgg, mentions:[m.sender] });
}}
   catch (e) {
await conn.reply(m.chat, langTOGGLE.smsPropban7(usedPrefix, command, number), null, m)
console.log(e) 
}}
handler.command = ['lembrete']
handler.level = 22
handler.rowner = false

export default handler

function parseTimeArgument(timeArg) {
    const timeParts = timeArg.split(':');

    // Validate input
    if (timeParts.some(part => isNaN(part))) {
        throw new Error("Invalid time format. Please provide time in one of these formats: H, H:M, H:M:S");
    }

    // Parse hours, minutes, and seconds
    const hours = parseInt(timeParts[0], 10) || -1;
    const minutes = parseInt(timeParts[1], 10) || -1;
    const seconds = parseInt(timeParts[2], 10) || -1;

    return { hours, minutes, seconds };
}

// Function to calculate scheduled date
