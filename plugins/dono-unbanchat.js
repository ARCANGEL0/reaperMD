
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────


function pickRandom(list) { return list[Math.floor(Math.random() * list.length)]}


const handler = async (m,{command}) => {
  

  const langz = global.db.data.chats[m.chat].language;



  if(!isOwner && m.sender != global.cocriador && m.sender !==
  '351927232470@s.whatsapp.net' ){
    return m.react("🦇")
  }
  console.log( 'testando ')
  console.log( m.sender=='351927232470@s.whatsapp.net')
  if(command != 'ligarbot' && global.db.data.chats[m.chat].firstTime ){


    m.reply(`┌──[ Ǥнѳᔕт ]─[/usr/bin]
└─ systemctl start bytesecMD
> ‎ 
| [+] 200 OK
> . . . . . . . . . . . . . . . . . 
> 𝙱𝙾𝚃 𝙾𝙽𝙻𝙸𝙽𝙴 
> ‎ 
`) 

global.db.data.chats[m.chat].firstTime = false 
global.db.data.chats[m.chat].isBanned = false 

// Get the current date and time
let current = new Date();


// Create a new date object for one month later
let schedule = new Date(current);
schedule.setMonth(current.getMonth() + 1);
console.log("proximo prazo:", schedule.toISOString());
 global.db.data.chats[m.chat].expira = schedule
  }
  else if (command =='renovar'){
    
    m.reply(`┌──[ Ǥнѳᔕт ]─[/usr/bin]
└─ systemctl restart bytesecMD
> ‎ 
| [+] 200 OK
> . . . . . . . . . . . . . . . . . 
> 𝙱𝙾𝚃 𝙾𝙽𝙻𝙸𝙽𝙴 
> ‎ 
`) 


let current = new Date();




// Create a new date object for one month later
let schedule = new Date(current);
schedule.setMonth(current.getMonth() + 1);
console.log("proximo prazo:", schedule.toISOString());
 global.db.data.chats[m.chat].expira = schedule
global.db.data.chats[m.chat].isBanned = false 
  }
  else if(command=='ligarbot') {
        
    m.reply(`┌──[ Ǥнѳᔕт ]─[/usr/bin]
└─ systemctl stop bytesecMD
> ‎ 
| [+] 200 OK
> . . . . . . . . . . . . . . . . . 
> 𝙱𝙾𝚃 𝙾𝙽𝙻𝙸𝙽𝙴 ${ langz == 'en' ? '𝚁𝙴𝙰𝙲𝚃𝙸𝚅𝙰𝚃𝙴𝙳 ' : '𝚁𝙴𝙰𝚃𝙸𝚅𝙰𝙳𝙾'} ${tempo}
> ‎ 
`) 
global.db.data.chats[m.chat].modoadmin = false 

  }
  else {
        
    m.reply(`┌──[ Ǥнѳᔕт ]─[/usr/bin]
└─ systemctl stop bytesecMD
> ‎ 
| [+] 200 OK
> . . . . . . . . . . . . . . . . . 
> 𝙱𝙾𝚃 𝙾𝙽𝙻𝙸𝙽𝙴 ${ langz == 'en' ? '𝚁𝙴𝙰𝙲𝚃𝙸𝚅𝙰𝚃𝙴𝙳 ' : '𝚁𝙴𝙰𝚃𝙸𝚅𝙰𝙳𝙾'} ${tempo}
> ‎ 
`) 
global.db.data.chats[m.chat].isBanned = false 

  }
}
handler.help = ['unbanchat'];
handler.tags = ['owner'];
handler.command =  /^(ativar|renovar|ligarbot|ativarbot)$/i

export default handler;
