
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

import fetch from 'node-fetch';
import {googleIt} from '@bochilteam/scraper';
import google from 'google-it';
let handler = async (m, { conn, text, usedPrefix, command }) => {

    
if (!global.db.data.settings.banco) {
global.db.data.settings.banco = {
  clientes:{},
  rendimento: 0.000025
};
}

	let imgBank =[
  'https://telegra.ph/file/4a420f637e59355fc8e67.jpg',
  'https://telegra.ph/file/94ab584871df52caa61e4.jpg',
  'https://telegra.ph/file/679182de80f3e5d4f0b86.jpg',
]

try { 
  if(!global.db.data.settings.banco.clientes[m.sender])
{
    let notRegistered =`╔═━━━───•───━━━═╗
     𝖄𝖍𝖊 𝕻𝖊𝖓𝖉𝖚𝖑𝖚𝖒 𝕭𝖆𝖓𝖐
  ╚═━━━───•───━━━═╝
  ╭⋟────────────────╮
  𝐁𝐞𝐦-𝐯𝐢𝐧𝐝𝐨 𝐚𝐨 𝐏𝐞𝐧𝐝𝐮𝐥𝐮𝐦 𝐁𝐚𝐧𝐤, 𝐨𝐧𝐝𝐞 𝐚𝐬 𝐬𝐨𝐦𝐛𝐫𝐚𝐬 𝐠𝐮𝐚𝐫𝐝𝐚𝐦 𝐫𝐢𝐪𝐮𝐞𝐳𝐚𝐬 𝐞𝐧𝐭𝐫𝐞 𝐚 𝐞𝐬𝐜𝐮𝐫𝐢𝐝𝐚̃𝐨!
  
  𝑁𝑜 𝑒𝑛𝑡𝑎𝑛𝑡𝑜, 𝑣𝑜𝑐𝑒̂ 𝑎𝑖𝑛𝑑𝑎 𝑛𝑎̃𝑜 𝑝𝑜𝑠𝑠𝑢𝑖 𝑢𝑚𝑎 𝑐𝑜𝑛𝑡𝑎 𝑒𝑛𝑡𝑟𝑒 𝑛𝑜́𝑠.
  𝑅𝑒𝑠𝑝𝑜𝑛𝑑𝑎 𝑒𝑠𝑡𝑎 𝑚𝑒𝑛𝑠𝑎𝑔𝑒𝑚 𝑐𝑜𝑚 𝑎 𝑝𝑎𝑙𝑎𝑣𝑟𝑎 𝒂𝒃𝒓𝒊𝒓 𝑝𝑎𝑟𝑎 𝑞𝑢𝑒 𝑜𝑠 𝑝𝑜𝑟𝑡𝑜̃𝑒𝑠 𝑠𝑜𝑚𝑏𝑟𝑖𝑜𝑠 𝑠𝑒 𝑎𝑏𝑟𝑎𝑚 𝑒 𝑡𝑒𝑢 𝑛𝑜𝑚𝑒 𝑠𝑒𝑗𝑎 𝑟𝑒𝑔𝑖𝑠𝑡𝑟𝑎𝑑𝑜 𝑒𝑛𝑡𝑟𝑒 𝑛𝑜́𝑠
  
  𝙉𝙤𝙩𝙖: 𝘖 𝘳𝘪𝘵𝘶𝘢𝘭 𝘥𝘦 𝘢𝘣𝘦𝘳𝘵𝘶𝘳𝘢 𝘳𝘦𝘲𝘶𝘦𝘳 𝘶𝘮 𝘥𝘦𝘱𝘰́𝘴𝘪𝘵𝘰 𝘥𝘦 100 ʙʏᴛᴇᴄᴏɪɴꜱ
  ╰──────────────˒≪𖥳≫`
  let message = await  conn.sendFile(m.chat, imgBank.getRandom(), 'loja.jpg',
  notRegistered, m)
  
  global.db.data.chats[m.chat].bankID = message.key
 
  
}
else if(!text || command=='bank' || command =='banco')
{
  
  // Função para obter o nome do mês por extenso
function getMonthName(monthIndex) {
    const months = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", 
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];
    return months[monthIndex];
}

// Função para obter a estação do ano
function getSeason(monthIndex) {
    const seasons = ["Verão", "Outono", "Inverno", "Primavera"];
    // Exemplo para o hemisfério sul
    if (monthIndex >= 2 && monthIndex <= 4) return seasons[3]; // Mar-Mai: Outono
    if (monthIndex >= 5 && monthIndex <= 7) return seasons[2]; // Jun-Ago: Inverno
    if (monthIndex >= 8 && monthIndex <= 10) return seasons[1]; // Set-Nov: Primavera
    return seasons[0]; // Dez-Fev: Verão
}

// Função para obter a data e hora por extenso
function getFormattedDate() {
    const today = new Date();
    const day = today.getUTCDate();
    const monthIndex = today.getUTCMonth();
    const year = today.getUTCFullYear();
    const hours = String(today.getUTCHours()).padStart(2, '0');
    const minutes = String(today.getUTCMinutes()).padStart(2, '0');

    const monthName = getMonthName(monthIndex);
    const season = getSeason(monthIndex);

    return `Hoje é dia ${day} de ${monthName} de ${year}, às ${hours}:${minutes} em UTC +00:00.`;
}





console.log(getFormattedDate());

// Função para verificar o status do mercado
function getMarketStatus() {
    const isBullish = global.db.data.settings.cotacaoPercentual>0; // Alterar para true se o mercado estiver bullish

    return isBullish ? 'O mercado apresenta indicações bullish' : 'O mercado apresenta indicações bearish';
}

// Retornar a data por extenso e o status do mercado
function getMarketInformation() {
    const dateString = getFormattedDate();
    const marketStatus = getMarketStatus();

    return `${dateString} ${marketStatus}`;
}


let variac = global.db.data.settings.cotacaoPercentual
let cliente = global.db.data.settings.banco.clientes[m.sender]
// Exibir as informações
console.log(getMarketInformation());

    let banks =`╔═━━━───•───━━━═╗
     𝖄𝖍𝖊 𝕻𝖊𝖓𝖉𝖚𝖑𝖚𝖒 𝕭𝖆𝖓𝖐
  ╚═━━━───•───━━━═╝
  ╭⋟────────────────╮
  𝐁𝐞𝐦-𝐯𝐢𝐧𝐝𝐨 𝐚𝐨 𝐏𝐞𝐧𝐝𝐮𝐥𝐮𝐦 𝐁𝐚𝐧𝐤, 𝐨𝐧𝐝𝐞 𝐚𝐬 𝐬𝐨𝐦𝐛𝐫𝐚𝐬 𝐠𝐮𝐚𝐫𝐝𝐚𝐦 𝐫𝐢𝐪𝐮𝐞𝐳𝐚𝐬 𝐞𝐧𝐭𝐫𝐞 𝐚 𝐞𝐬𝐜𝐮𝐫𝐢𝐝𝐚̃𝐨!
  
 「${variac>0 ? '𓃓' : '𓃯'}」  ${getMarketInformation()}
  
\`𝙲𝚘𝚝𝚊𝚌̧𝚊̃𝚘 𝙳𝙺𝙲\`
> ${variac>0 ? '📈 +' : '📉 -'}${Math.floor(parseFloat(variac) * 100) / 100}%
 
𒈞  𝚂𝚞𝚊 𝚌𝚘𝚗𝚝𝚊:
_Saldo:_ ${parseFloat(cliente.saldo).toFixed(2)} 🜅 𝙳𝚊𝚛𝚔𝚌𝚘𝚒𝚗𝚜
_Títular:_ ${cliente.titular}
_Número da Conta_: ${cliente.conta}
_Código SEPA:_ ${cliente.sepa}
_Carteira Digital:_ ${cliente.wallet}

𝑷𝒂𝒓𝒂 𝒅𝒆𝒑𝒐𝒔𝒊𝒕𝒂𝒓 𝒅𝒊𝒏𝒉𝒆𝒊𝒓𝒐 𝒆𝒎 𝒔𝒖𝒂 𝒄𝒐𝒏𝒕𝒂, 𝒖𝒔𝒆 𝒐 𝒄𝒐𝒎𝒂𝒏𝒅𝒐 .𝘥𝘦𝘱𝘰𝘴𝘪𝘵𝘢𝘳 (𝘷𝘢𝘭𝘰𝘳)

𝑷𝒂𝒓𝒂 𝒔𝒂𝒄𝒂𝒓 𝒅𝒊𝒏𝒉𝒆𝒊𝒓𝒐 𝒅𝒆 𝒔𝒆𝒖 𝒔𝒂𝒍𝒅𝒐, 𝒖𝒕𝒊𝒍𝒊𝒛𝒆 .𝘴𝘢𝘤𝘢𝘳 (𝘷𝘢𝘭𝘰𝘳)
  ╰──────────────˒≪𖥳≫`
  let message = await  conn.sendFile(m.chat, imgBank.getRandom(), 'loja.jpg',
  banks, m)
  
  
  
}
else if (command == 'depositar' && /^\d+(\.\d{1,2})?$/.test(text)) {
  
  if(text>global.db.data.chats[m.chat].users[m.sender].money)
  {
   m.react("❌")
   return m.reply(`╔═━━━───•───━━━═╗
ʙʏᴛᴇᴄᴏɪɴꜱ 𝐼𝑚𝑠𝑢𝑓𝑖𝑐𝑖𝑒𝑛𝑡𝑒𝑠 𝑝𝑎𝑟𝑎 𝑑𝑒𝑝𝑜𝑠𝑖𝑡𝑎𝑟. . . 𒂝
╚═━━━───•───━━━═╝`)
  }
  
  
  global.db.data.settings.banco.clientes[m.sender].saldo += parseFloat(text)
   global.db.data.chats[m.chat].users[m.sender].money -= parseFloat(text)
       let dpst =`╔═━━━───•───━━━═╗
     𝖄𝖍𝖊 𝕻𝖊𝖓𝖉𝖚𝖑𝖚𝖒 𝕭𝖆𝖓𝖐
  ╚═━━━───•───━━━═╝
  ╭⋟────────────────╮
𝐴𝑠 𝑡𝑟𝑎𝑛𝑠𝑎𝑐̧𝑜̃𝑒𝑠 𝑓𝑖𝑛𝑎𝑛𝑐𝑒𝑖𝑟𝑎𝑠 𝑠𝑒 𝑒𝑛𝑟𝑒𝑑𝑎𝑚 𝑛𝑎 𝑒𝑠𝑐𝑢𝑟𝑖𝑑𝑎̃𝑜. 𝐷𝑒𝑝𝑜́𝑠𝑖𝑡𝑜 𝑑𝑒 ${Math.floor(parseFloat(text) * 100) / 100} 𝙳𝚊𝚛𝚔𝚌𝚘𝚒𝚗𝚜 𝑓𝑒𝑖𝑡𝑜 𝑐𝑜𝑚 𝑠𝑢𝑐𝑒𝑠𝑠𝑜; 𝑎𝑔𝑜𝑟𝑎, 𝑎𝑠 𝑠𝑜𝑚𝑏𝑟𝑎𝑠 𝑧𝑒𝑙𝑎𝑟𝑎̃𝑜 𝑝𝑜𝑟 𝑠𝑢𝑎 𝑟𝑖𝑞𝑢𝑒𝑧𝑎. ☥

 \`𝑵𝒐𝒗𝒐 𝒔𝒂𝒍𝒅𝒐:\`
> ➢ ${Math.floor(parseFloat(global.db.data.settings.banco.clientes[m.sender].saldo) * 100) / 100} 🜅 𝙳𝚊𝚛𝚔𝚌𝚘𝚒𝚗𝚜

  ╰──────────────˒≪𖥳≫`
   let message = await  conn.sendFile(m.chat, imgBank.getRandom(), 'loja.jpg',
  dpst, m)
  
  
}
else if (command == 'sacar' && /^\d+(\.\d{1,2})?$/.test(text)) {
  if(global.db.data.settings.banco.clientes[m.sender].limiteSaque === undefined)
  {
    global.db.data.settings.banco.clientes[m.sender].limiteSaque =0
  }
  if(text>global.db.data.settings.banco.clientes[m.sender].saldo)
  {
   m.react("❌")
   return m.reply(`╔═━━━───•───━━━═╗
𝑉𝑜𝑐𝑒 𝑛𝑎̃𝑜 𝑡𝑒𝑚 𝑡𝑢𝑑𝑜 𝑖𝑠𝑡𝑜 𝑛𝑜 𝑠𝑎𝑙𝑑𝑜. . . 𒆜
╚═━━━───•───━━━═╝`)
  }
  global.db.data.settings.banco.clientes[m.sender].saldo -= parseFloat(text)
  
  global.db.data.settings.banco.clientes[m.sender].limiteSaque+=1
  if(global.db.data.settings.banco.clientes[m.sender].limiteSaque>3){
    
    setTimeout(() => {
        global.db.data.settings.banco.clientes[m.sender].limiteSaque = 0;
    }, 86400000)

let fee = parseFloat(text) * 0.18;
let amountAfterFee = parseFloat(text) - fee;
global.db.data.chats[m.chat].users[m.sender].money += amountAfterFee;

    let dpstaxa =`╔═━━━───•───━━━═╗
     𝖄𝖍𝖊 𝕻𝖊𝖓𝖉𝖚𝖑𝖚𝖒 𝕭𝖆𝖓𝖐
  ╚═━━━───•───━━━═╝
  ╭⋟────────────────╮
𝐴𝑠 𝑡𝑟𝑎𝑛𝑠𝑎𝑐̧𝑜̃𝑒𝑠 𝑓𝑖𝑛𝑎𝑛𝑐𝑒𝑖𝑟𝑎𝑠 𝑠𝑒 𝑒𝑛𝑟𝑒𝑑𝑎𝑚 𝑛𝑎
𝑒𝑠𝑐𝑢𝑟𝑖𝑑𝑎̃𝑜. 𝑆𝑒𝑢 𝑠𝑎𝑞𝑢𝑒 𝑑𝑒 ${parseFloat(text).toFixed(2)}
𝙳𝚊𝚛𝚔𝚌𝚘𝚒𝚗𝚜 𝑓𝑜𝑖 𝑟𝑒𝑎𝑙𝑖𝑧𝑎𝑑𝑜 𝑐𝑜𝑚 𝑠𝑢𝑐𝑒𝑠𝑠𝑜; 𝑺𝒖𝒂𝒔
𝒎𝒐𝒆𝒅𝒂𝒔 𝒃𝒓𝒊𝒍𝒉𝒂𝒎 𝒏𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔 𝒅𝒆 𝒔𝒆𝒖 𝒅𝒐𝒎𝒊𝒏𝒊𝒐 ☥

𝐕𝐨𝐜𝐞 𝐞𝐱𝐜𝐞𝐝𝐞𝐮 𝐨 𝐥𝐢𝐦𝐢𝐭𝐞 𝐝𝐞 𝟑 𝐬𝐚𝐪𝐮𝐞𝐬 𝐠𝐫𝐚𝐭𝐮𝐢𝐭𝐨𝐬
𝐩𝐨𝐫 𝐡𝐨𝐣𝐞 𝐞 𝐟𝐨𝐢 𝐜𝐨𝐛𝐫𝐚𝐝𝐨 ${fee} 🜅 𝙳𝚊𝚛𝚔𝚌𝚘𝚒𝚗𝚜 𝐝𝐞 𝐢𝐦𝐩𝐨𝐬𝐭𝐨

\`𝑵𝒐𝒗𝒐 𝒔𝒂𝒍𝒅𝒐:\`
> ➢ ${parseFloat(global.db.data.settings.banco.clientes[m.sender].saldo).toFixed(2)} 🜅 𝙳𝚊𝚛𝚔𝚌𝚘𝚒𝚗𝚜

  ╰──────────────˒≪𖥳≫`
   let message = await  conn.sendFile(m.chat, imgBank.getRandom(), 'loja.jpg',
  dpstaxa, m)
  
  }
  else{
   global.db.data.chats[m.chat].users[m.sender].money += parseFloat(text)
       let dpst =`╔═━━━───•───━━━═╗
     𝖄𝖍𝖊 𝕻𝖊𝖓𝖉𝖚𝖑𝖚𝖒 𝕭𝖆𝖓𝖐
  ╚═━━━───•───━━━═╝
  ╭⋟────────────────╮
𝐴𝑠 𝑡𝑟𝑎𝑛𝑠𝑎𝑐̧𝑜̃𝑒𝑠 𝑓𝑖𝑛𝑎𝑛𝑐𝑒𝑖𝑟𝑎𝑠 𝑠𝑒 𝑒𝑛𝑟𝑒𝑑𝑎𝑚 𝑛𝑎
𝑒𝑠𝑐𝑢𝑟𝑖𝑑𝑎̃𝑜. 𝑆𝑒𝑢 𝑠𝑎𝑞𝑢𝑒 𝑑𝑒
${parseFloat(text).toFixed(2)}
𝙳𝚊𝚛𝚔𝚌𝚘𝚒𝚗𝚜 𝑓𝑜𝑖 𝑟𝑒𝑎𝑙𝑖𝑧𝑎𝑑𝑜 𝑐𝑜𝑚 𝑠𝑢𝑐𝑒𝑠𝑠𝑜; 𝑺𝒖𝒂𝒔
𝒎𝒐𝒆𝒅𝒂𝒔 𝒃𝒓𝒊𝒍𝒉𝒂𝒎 𝒏𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔 𝒅𝒆 𝒔𝒆𝒖 𝒅𝒐𝒎𝒊𝒏𝒊𝒐 ☥

\`𝑵𝒐𝒗𝒐 𝒔𝒂𝒍𝒅𝒐:\`
> ➢ ${parseFloat(global.db.data.settings.banco.clientes[m.sender].saldo).toFixed(2)} 🜅 𝙳𝚊𝚛𝚔𝚌𝚘𝚒𝚗𝚜

  ╰──────────────˒≪𖥳≫`
   let message = await  conn.sendFile(m.chat, imgBank.getRandom(), 'loja.jpg',
  dpst, m)
  
  }
}

} catch(e){
    console.log(e)
    m.react("💀")
    m.reply(`╭─❖ ❌ *Um erro inesperado ocorreu* ❖─
  𝑵𝒂 𝒆𝒔𝒄𝒖𝒓𝒊𝒅𝒂𝒐 𝒔𝒆𝒑𝒖𝒍𝒄𝒓𝒂𝒍 𝒅𝒆 𝒎𝒆𝒖 𝒄𝒐𝒅𝒊𝒈𝒐, 𝒐 𝒄𝒐𝒎𝒂𝒏𝒅𝒐 𝒇𝒂𝒍𝒉𝒐𝒖 𝒄𝒐𝒎𝒐 𝒖𝒎𝒂 𝒑𝒓𝒆𝒄𝒆 𝒏𝒂𝒐 𝒂𝒕𝒆𝒏𝒅𝒊𝒅𝒂.
  
  𝑼𝒔𝒆 *.report* 𝒑𝒂𝒓𝒂 𝒓𝒆𝒍𝒂𝒕𝒂𝒓 𝒆𝒔𝒕𝒂 𝒎𝒊𝒔𝒆𝒓𝒂𝒗𝒆𝒍 𝒇𝒂𝒍𝒉𝒂.
  *╰┅─❖ ⸸ ❖─┅*`)
  }
 
}

handler.command = ['banco','bank','depositar','sacar']


export default handler;
const getRandom = (ext) => { 
    return `${Math.floor(Math.random() * 10000)}${ext}`;
}