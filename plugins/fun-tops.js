
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

import util from 'util'
import path from 'path' 


function handler(m, { groupMetadata, command, usedPrefix, conn, text ,args}) {
  
  let number = args[0] 
  let txtt = args.slice(1).join(" ");
console.log(number);


   let user = a => '@' + a.split('@')[0] //'@' + a.split('@')[0]
   if (!txtt || !number || !(/^\d+$/.test(number) )) {
   throw `${langTOGGLE['smsAvisoMG']()}
╭━━━━━━━━━⬣
┃
┃ 🪶📜 𝐃𝐢𝐠𝐚-𝐦𝐞 𝐪𝐮𝐞 𝐩𝐫𝐨𝐩ó𝐬𝐢𝐭𝐨 
┃ 𝐝𝐞𝐬𝐭𝐢𝐧𝐚𝐝𝐨 𝐚 𝐬𝐞𝐥𝐞𝐜𝐢𝐨𝐧𝐚𝐫 𝐨𝐬 
┃ 𝐩𝐫𝐢𝐧𝐜𝐢𝐩𝐚𝐢𝐬 𝐝𝐞𝐬𝐭𝐞 𝐠𝐫𝐮𝐩𝐨 𝐚 
┃ 𝐪𝐮𝐚𝐥 𝐥𝐡𝐞 𝐯ê𝐦 𝐚 𝐦𝐞𝐧𝐭𝐞
┃
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
┃ 𝐄𝐱𝐞𝐦𝐩𝐥𝐨:
┃ *${usedPrefix + command}top10 mais nilistas do gp*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
┃ 𝙼𝚛. 𝚁𝚘𝚋𝚘𝚝 | ${vs}
╰━━━━━━━━━━━━━━━━━━⬣`   
}

let ps = groupMetadata.participants.map(v => v.id);

// Shuffle the array
for (let i = ps.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [ps[i], ps[j]] = [ps[j], ps[i]];
}

// Function to select unique members based on count
function selectTopMembers(ps, number) {
    return ps.slice(0, number);
}

// Function to generate the top list based on selected members
function generateTopList(selectedMembers, text) {
    let topList = `╭━━⬣[🕯️💀 *_TOP ${selectedMembers.length} ${txtt}_* ]⬣━━━━━━\n`;
    
    selectedMembers.forEach((member, index) => {
        topList += `*_${index + 1}. 🕯️ ${user(member)}_*\n`;
    });
    
    topList += "╰━━━━━[ 𝓔𝓭𝓰𝓪𝓻 𝓑𝓞𝓣  ]━━━━━━⬣*";
    
    return topList;
}


// Extract the number from the command


let selectedMembers = selectTopMembers(ps, number);
if(number>20)
{
  
return m.reply(`⎔⎓─────────────────
┃  ▂▃▅ 𝚂𝚎𝚛𝚟𝚒𝚌𝚘 𝚒𝚗𝚍𝚒𝚜𝚙𝚘𝚗𝚒𝚟𝚎𝚕 ▅▃▂
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ ঔৣ _𝐃𝐞𝐯𝐢𝐝𝐨 𝐚𝐬 𝐦𝐮𝐝𝐚𝐧𝐜𝐚𝐬 𝐧𝐨 𝐚𝐥𝐠𝐨𝐫𝐢𝐭𝐦𝐨 𝐝𝐚 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩 𝐈𝐧𝐜. 𝐍𝐚̃𝐨 𝐞́ 𝐦𝐚𝐢𝐬 𝐩𝐨𝐬𝐬𝐢𝐯𝐞𝐥 𝐦𝐚𝐫𝐜𝐚𝐫 𝐦𝐮𝐢𝐭𝐨𝐬 𝐦𝐞𝐦𝐛𝐫𝐨𝐬 𝐚𝐭𝐫𝐚𝐯𝐞𝐬 𝐝𝐨 𝐄𝐝𝐠𝐚𝐫._
╰─...⎔⎓──────────────`)

}
if (ps.length < number) {
    throw " É 𝚙𝚛𝚎𝚌𝚒𝚜𝚘 𝚖𝚊𝚒𝚜 𝚍𝚎 " + number + " 𝚊𝚕𝚖𝚊𝚜 𝚗𝚎𝚜𝚝𝚎 𝚐𝚛𝚞𝚙𝚘 𝚙𝚊𝚛𝚊 𝚞𝚜𝚊𝚛 𝚎𝚜𝚝𝚎 𝚛𝚎𝚌𝚞𝚛𝚜𝚘. . .";
}

let topList = generateTopList(selectedMembers, txtt);
m.reply(topList, null, { mentions: conn.parseMention(topList) });

}

handler.help = handler.command = ['top' ]
handler.tags = ['games']
handler.group = true
handler.admin = true
export default handler  
