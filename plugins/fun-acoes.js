
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────╯


import util from 'util'
import path from 'path' 
import { canLevelUp, xpRange } from '../lib/levelling.js'
import { levelup } from '../lib/canvas.js'
import { createCanvas, loadImage } from 'canvas';
import { join } from 'path'; 
let handler = async (m, { text ,__dirname, groupMetadata, participants,isAdmin,isOwner, conn, args, usedPrefix, command }) => {
  const langs = global.db.data.chats[m.chat].language;

  
   if (!(global.db.data.chats[m.chat]?.users[m.sender]?.acaoTimer instanceof Date) ||
    (new Date() - global.db.data.chats[m.chat].users[m.sender].acaoTimer) >= 240000) {
  global.db.data.chats[m.chat].users[m.sender].acaoTimer = new Date();
} else {
  return m.react('⏱️');
}


 let who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false
  let number = args[0] 
  let txtt = args.slice(1).join(" ");
console.log(number);
let myself = who ? who : m.quoted?.sender
let infiel
if(!global.db.data.chats[m.chat].users[m.sender].trojans){
  console.log('𓌳җ𓌳җ𓌳җ𓌳җ')
  global.db.data.chats[m.chat].users[m.sender].trojans =0
}
if(global.db.data.users[m.sender]?.parceiro){

  if (langs === 'pt') {
    infiel = [
        `Você realmente pensa que pode se esconder dos seus próprios demônios, enquanto finge que @${global.db.data.users[m.sender]?.parceiro.split('@')[0]} é apenas uma lembrança distante?`,
        `Os votos que você fez a @${global.db.data.users[m.sender]?.parceiro.split('@')[0]} são só palavras, ou é apenas você se iludindo com suas próprias mentiras?`,
        `Essa lealdade que diz ter a @${global.db.data.users[m.sender]?.parceiro.split('@')[0]} é só uma máscara, ou você ainda tem coragem de encarar suas fraquezas?`,
        `Ser fiel a @${global.db.data.users[m.sender]?.parceiro.split('@')[0]} deve ser uma piada para você, certo? Então me diga, o que realmente resta de honra nesse seu mundo podre?`,
        `Trair a confiança de @${global.db.data.users[m.sender]?.parceiro.split('@')[0]} é fácil, mas carregar o peso da culpa... você consegue? Ou vai viver na sua própria versão de liberdade?`
    ];
} else if (langs === 'en') {
    infiel = [
        `Do you really think you can run from your demons while pretending @${global.db.data.users[m.sender]?.parceiro.split('@')[0]} is just a distant memory?`,
        `Those vows you made to @${global.db.data.users[m.sender]?.parceiro.split('@')[0]}—are they just empty words, or are you fooling yourself with your own lies?`,
        `That loyalty you claim to @${global.db.data.users[m.sender]?.parceiro.split('@')[0]} is just a facade, or do you still have the guts to face your own weaknesses?`,
        `Being faithful to @${global.db.data.users[m.sender]?.parceiro.split('@')[0]} must be a joke to you, right? So tell me, what’s left of honor in this decaying world of yours?`,
        `Betraying @${global.db.data.users[m.sender]?.parceiro.split('@')[0]}'s trust is easy, but can you carry the weight of guilt? Or will you live in your own version of freedom?`
    ];
}


}
 let alertaInfiel =[
   "𝑨𝒕𝒆𝒏𝒕𝒆-𝒔𝒆 𝒏𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔... 𝒆𝒔𝒕𝒂𝒐 𝒄𝒐𝒓𝒕𝒆𝒋𝒂𝒏𝒅𝒐 𝒕𝒆𝒖 𝒄𝒐𝒏𝒋𝒖𝒈𝒆.", "𝑬𝒔𝒕𝒆𝒋𝒂 𝒂𝒕𝒆𝒏𝒕𝒂.. 𝒆𝒔𝒕𝒂𝒐 𝒕𝒆𝒏𝒕𝒂𝒏𝒅𝒐 𝒂𝒕𝒓𝒂𝒊𝒓 𝒕𝒆𝒖 𝒄𝒐𝒏𝒋𝒖𝒈𝒆 𝒄𝒐𝒎 𝒆𝒏𝒄𝒂𝒏𝒕𝒐𝒔 𝒆 𝒑𝒂𝒍𝒂𝒗𝒓𝒂𝒔 𝒑𝒓𝒐𝒎𝒊𝒔𝒄𝒖𝒂𝒔.", "𝑭𝒊𝒒𝒖𝒆 𝒅𝒆 𝒐𝒍𝒉𝒐, 𝒆𝒔𝒕𝒂𝒐 𝒅𝒂𝒏𝒅𝒐 𝒆𝒎 𝒄𝒊𝒎𝒂 𝒅𝒆 𝒕𝒆𝒖 𝒄𝒐𝒏𝒋𝒖𝒈𝒆.", "𝑪𝒖𝒊𝒅𝒂𝒅𝒐, 𝒆𝒔𝒕𝒂𝒐 𝒕𝒆𝒏𝒕𝒂𝒏𝒅𝒐 𝒄𝒐𝒏𝒒𝒖𝒊𝒔𝒕𝒂𝒓 𝒕𝒆𝒖 𝒄𝒐𝒏𝒋𝒖𝒈𝒆.", "𝑴𝒂𝒏𝒕𝒆𝒏𝒉𝒂-𝒔𝒆 𝒂𝒕𝒆𝒏𝒕𝒐, 𝒉𝒂 𝒑𝒆𝒔𝒔𝒐𝒂𝒔 𝒕𝒆𝒏𝒕𝒂𝒏𝒅𝒐 𝒔𝒆 𝒂𝒑𝒓𝒐𝒙𝒊𝒎𝒂𝒓 𝒅𝒆 𝒕𝒆𝒖 𝒄𝒐𝒏𝒋𝒖𝒈𝒆.", "𝑨𝒍𝒈𝒖𝒆𝒎 𝒆𝒔𝒕𝒂 𝒕𝒆𝒏𝒕𝒂𝒏𝒅𝒐 𝒄𝒐𝒓𝒕𝒆𝒋𝒂𝒓 𝒕𝒆𝒖 𝒄𝒐𝒏𝒋𝒖𝒈𝒆, 𝒇𝒊𝒒𝒖𝒆 𝒂𝒍𝒆𝒓𝒕𝒂.", "𝑷𝒓𝒐𝒕𝒆𝒋𝒂 𝒕𝒆𝒖 𝒄𝒐𝒏𝒋𝒖𝒈𝒆 𝒅𝒆 𝒒𝒖𝒆𝒎 𝒕𝒆𝒏𝒕𝒂 𝒔𝒆 𝒂𝒑𝒓𝒐𝒙𝒊𝒎𝒂𝒓.", "𝑯𝒂 𝒒𝒖𝒆𝒎 𝒆𝒔𝒕𝒆𝒋𝒂 𝒅𝒆 𝒐𝒍𝒉𝒐 𝒆𝒎 𝒕𝒆𝒖 𝒄𝒐𝒏𝒋𝒖𝒈𝒆, 𝒆𝒔𝒕𝒆𝒋𝒂 𝒗𝒊𝒈𝒊𝒍𝒂𝒏𝒕𝒆."]
  let x9 = [ 
    "𝑷𝒐𝒃𝒓𝒆 𝒂𝒍𝒎𝒂... 𝒗𝒊𝒈𝒊𝒂 𝒕𝒆𝒖 𝒄𝒐𝒓𝒂𝒄𝒂𝒐, 𝒑𝒐𝒊𝒔 𝒕𝒆𝒖 𝒂𝒎𝒐𝒓 𝒔𝒆 𝒑𝒆𝒓𝒅𝒆 𝒆𝒎 𝒂𝒗𝒆𝒏𝒕𝒖𝒓𝒂𝒔 𝒑𝒓𝒐𝒎𝒊𝒔𝒄𝒖𝒂𝒔.", "𝑪𝒖𝒊𝒅𝒂𝒅𝒐, 𝒂𝒍𝒎𝒂 𝒊𝒏𝒒𝒖𝒊𝒆𝒕𝒂... 𝒕𝒆𝒖 𝒂𝒎𝒂𝒅𝒐(𝒂) 𝒔𝒆 𝒆𝒏𝒕𝒓𝒆𝒈𝒂 𝒂 𝒐𝒖𝒕𝒓𝒐𝒔 𝒃𝒓𝒂𝒄𝒐𝒔 𝒏𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔.", "𝑻𝒓𝒊𝒔𝒕𝒆 𝒅𝒆𝒔𝒕𝒊𝒏𝒐... 𝒕𝒆𝒖𝒔 𝒐𝒍𝒉𝒐𝒔 𝒅𝒆𝒗𝒆𝒎 𝒔𝒆 𝒂𝒃𝒓𝒊𝒓, 𝒑𝒐𝒊𝒔 𝒕𝒆𝒖 𝒂𝒎𝒐𝒓 𝒃𝒖𝒔𝒄𝒂 𝒑𝒓𝒂𝒛𝒆𝒓 𝒂𝒍𝒉𝒖𝒓𝒆𝒔.", "𝑫𝒆𝒔𝒗𝒆𝒏𝒕𝒖𝒓𝒂𝒅𝒂 𝒂𝒍𝒎𝒂... 𝒐 𝒂𝒎𝒐𝒓 𝒒𝒖𝒆 𝒕𝒆 𝒑𝒓𝒐𝒎𝒆𝒕𝒆𝒖 𝒇𝒊𝒅𝒆𝒍𝒊𝒅𝒂𝒅𝒆 𝒔𝒆 𝒆𝒏𝒓𝒆𝒅𝒂 𝒆𝒎 𝒕𝒓𝒂𝒊𝒄𝒐𝒆𝒔.", "𝑳𝒂𝒎𝒆𝒏𝒕𝒂𝒗𝒆𝒍 𝒂𝒍𝒎𝒂... 𝒕𝒆𝒖 𝒂𝒎𝒂𝒅𝒐(𝒂) 𝒔𝒆 𝒆𝒏𝒗𝒐𝒍𝒗𝒆 𝒆𝒎 𝒆𝒏𝒄𝒐𝒏𝒕𝒓𝒐𝒔 𝒔𝒐𝒎𝒃𝒓𝒊𝒐𝒔, 𝒕𝒓𝒂𝒊𝒏𝒅𝒐 𝒕𝒖𝒂 𝒄𝒐𝒏𝒇𝒊𝒂𝒏𝒄𝒂."]
    function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
    
let mistake =['https://telegra.ph/file/c4aad146289886cb3c24a.mp4','https://telegra.ph/file/69f53e70d0243a973fd94.mp4','https://telegra.ph/file/b54954bda8b316c36cc8d.mp4','https://telegra.ph/file/dee58ad9d41a52589725f.mp4']
async function terribleError(title){
  const mensagemTentativa = [
  `@${m.sender.split('@')[0]} 𝒕𝒆𝒏𝒕𝒐𝒖 𝒂𝒕𝒂𝒄𝒂𝒓 @${myself.split('@')[0]} 𝒎𝒂𝒔 𝒅𝒆𝒔𝒄𝒐𝒃𝒓𝒊𝒖 𝒔𝒆𝒓 𝒊𝒏𝒖𝒕𝒊𝒍. 𝑷𝒐𝒊𝒔 𝒆𝒔𝒕𝒆 𝒆 𝒊𝒎𝒐𝒓𝒕𝒂𝒍 𝒆 𝒇𝒆𝒊𝒕𝒐 𝒅𝒆 𝒔𝒐𝒎𝒃𝒓𝒂𝒔, 𝒂𝒔 𝒄𝒐𝒏𝒔𝒆𝒒𝒖𝒆𝒏𝒄𝒊𝒂𝒔 𝒔𝒆𝒓𝒂𝒐 𝒑𝒂𝒈𝒂𝒔 𝒄𝒐𝒎 𝒔𝒂𝒏𝒈𝒖𝒆 𝒑𝒐𝒓 𝒂𝒕𝒂𝒄𝒂𝒓 ${title == '𝒑𝒓𝒊𝒏𝒄𝒊𝒑𝒆' ? '𝒐 𝒑𝒓𝒊𝒏𝒄𝒊𝒑𝒆' : '𝒂 𝒑𝒓𝒊𝒏𝒄𝒆𝒔𝒂'}...`,

  `𝑬𝒎 𝒖𝒎 𝒂𝒕𝒐 𝒅𝒆 𝒅𝒆𝒔𝒆𝒔𝒑𝒆𝒓𝒐, @${m.sender.split('@')[0]} 𝒕𝒆𝒏𝒕𝒐𝒖 𝒂𝒔𝒔𝒂𝒔𝒔𝒊𝒏𝒂𝒓 @${myself.split('@')[0]}, 𝒎𝒂𝒔 𝒔𝒐 𝒂𝒄𝒓𝒆𝒔𝒄𝒆𝒏𝒕𝒐𝒖 𝒓𝒊𝒔𝒂𝒅𝒂𝒔 𝒆𝒔𝒄𝒖𝒓𝒂𝒔. 𝑨𝒔 𝒄𝒐𝒏𝒔𝒆𝒒𝒖𝒆𝒏𝒄𝒊𝒂𝒔 𝒗𝒊𝒓𝒂𝒐 𝒄𝒐𝒎𝒐 𝒖𝒎𝒂 𝒏𝒐𝒊𝒕𝒆 𝒔𝒆𝒎 𝒇𝒊𝒎, ${title == '𝒑𝒓𝒊𝒏𝒄𝒊𝒑𝒆' ? '𝒐 𝒑𝒓𝒊𝒏𝒄𝒊𝒑𝒆' : '𝒂 𝒑𝒓𝒊𝒏𝒄𝒆𝒔𝒂'} 𝒅𝒂 𝒆𝒔𝒄𝒖𝒓𝒊𝒅𝒂𝒐 𝒄𝒍𝒂𝒎𝒂𝒓𝒂 𝒑𝒐𝒓 𝒔𝒆𝒖 𝒔𝒂𝒏𝒈𝒖𝒆...`,

  `@${m.sender.split('@')[0]} 𝒕𝒆𝒏𝒕𝒐𝒖 𝒂𝒔𝒔𝒂𝒔𝒔𝒊𝒏𝒂𝒓 @${myself.split('@')[0]}, 𝒎𝒂𝒔 𝒇𝒐𝒊 𝒆𝒏𝒗𝒐𝒍𝒗𝒊𝒅𝒐 𝒑𝒐𝒓 𝒔𝒐𝒎𝒃𝒓𝒂𝒔 𝒊𝒏𝒗𝒆𝒏𝒄𝒊𝒗𝒆𝒊𝒔. 𝑬𝒔𝒄𝒖𝒓𝒊𝒅𝒂𝒐 𝒆𝒕𝒆𝒓𝒏𝒂 𝒔𝒆𝒓𝒂 𝒔𝒖𝒂 𝒑𝒖𝒏𝒊𝒄𝒂𝒐 𝒑𝒐𝒓 𝒅𝒆𝒔𝒂𝒇𝒊𝒂𝒓 𝒂 𝒊𝒎𝒐𝒓𝒕𝒂𝒍𝒊𝒅𝒂𝒅𝒆 𝒅' ${title}...`,

  `𝑶𝒖𝒔𝒂𝒓 𝒂𝒕𝒂𝒄𝒂𝒓 @${myself.split('@')[0]} 𝒇𝒐𝒊 𝒐 𝒆𝒓𝒓𝒐 𝒇𝒂𝒕𝒂𝒍 𝒅𝒆 @${m.sender.split('@')[0]}. 𝑬𝒔𝒕𝒆 𝒆 𝒇𝒆𝒊𝒕𝒐 𝒅𝒆 𝒆𝒔𝒄𝒖𝒓𝒊𝒅𝒂𝒐 𝒆 𝒊𝒎𝒖𝒏𝒆 𝒂 𝒅𝒐𝒓. 𝑨𝒔 𝒄𝒐𝒏𝒔𝒆𝒒𝒖𝒆𝒏𝒄𝒊𝒂𝒔 𝒔𝒆𝒓𝒂𝒐 𝒕𝒂𝒐 𝒔𝒆𝒓𝒊𝒂𝒔 𝒒𝒖𝒂𝒏𝒕𝒐 𝒖𝒎𝒂 𝒏𝒐𝒊𝒕𝒆 𝒔𝒆𝒎 𝒇𝒊𝒎...`,

  `𝑵𝒖𝒎 𝒊𝒎𝒑𝒖𝒍𝒔𝒐 𝒅𝒆 𝒍𝒐𝒖𝒄𝒖𝒓𝒂, @${m.sender.split('@')[0]} 𝒕𝒆𝒏𝒕𝒐𝒖 𝒎𝒂𝒕𝒂𝒓 @${myself.split('@')[0]}, 𝒎𝒂𝒔 𝒇𝒐𝒊 𝒄𝒐𝒏𝒔𝒖𝒎𝒊𝒅𝒐 𝒑𝒐𝒓 𝒔𝒐𝒎𝒃𝒓𝒂𝒔 𝒆 𝒅𝒐𝒓. 𝑨 𝒊𝒎𝒐𝒓𝒕𝒂𝒍𝒊𝒅𝒂𝒅𝒆 𝒅' ${title} 𝒅𝒂 𝒆𝒔𝒄𝒖𝒓𝒊𝒅𝒂𝒐 𝒏𝒂𝒐 𝒑𝒐𝒅𝒆 𝒔𝒆𝒓 𝒅𝒆𝒔𝒂𝒇𝒊𝒂𝒅𝒂...
  `];
  if(!global.db.data.chats[m.chat].users[m.sender].morto){
    global.db.data.chats[m.chat].users[m.sender].morto= true
  }
  global.db.data.chats[m.chat].users[m.sender].morto = true
await conn.sendMessage(m.chat, {
            video: {url:mistake.getRandom()},
            caption: `┏━── ﹝🩸﹞
 
${mensagemTentativa.getRandom()}

┗━── `, // Replace with the desired caption
            contextInfo: {
                mentionedJid: [m.sender, myself], // Replace with the recipient's WhatsApp ID(s) to mention
            },
        });
}
let frases = [
    "𝑨𝒉, 𝒂 𝒎𝒆𝒍𝒂𝒏𝒄𝒐𝒍𝒊𝒂 𝒒𝒖𝒆 𝒑𝒂𝒊𝒓𝒂 𝒔𝒐𝒃𝒓𝒆 𝒆𝒔𝒕𝒂 𝒅𝒆𝒔𝒂𝒇𝒐𝒓𝒕𝒖𝒏𝒂𝒅𝒂 𝒕𝒓𝒂𝒏𝒔𝒈𝒓𝒆𝒔𝒔𝒂𝒐",
    "𝑨𝒉, 𝒒𝒖𝒂𝒐 𝒇𝒖𝒏𝒆𝒔𝒕𝒐 𝒆 𝒐 𝒅𝒆𝒔𝒕𝒊𝒏𝒐 𝒒𝒖𝒆 𝒕𝒆𝒄𝒆 𝒆𝒔𝒕𝒂 𝒕𝒓𝒂𝒈𝒊𝒄𝒂 𝒏𝒂𝒓𝒓𝒂𝒕𝒊𝒗𝒂",
    "𝑨𝒉, 𝒂 𝒔𝒐𝒎𝒃𝒓𝒊𝒂 𝒅𝒂𝒏𝒄𝒂 𝒅𝒐𝒔 𝒅𝒆𝒔𝒕𝒊𝒏𝒐𝒔 𝒒𝒖𝒆 𝒆𝒏𝒗𝒐𝒍𝒗𝒆 𝒆𝒔𝒕𝒂 𝒍𝒂𝒎𝒆𝒏𝒕𝒂𝒗𝒆𝒍 𝒂𝒄𝒂𝒐",
    "𝑨𝒉, 𝒒𝒖𝒆 𝒕𝒐𝒓𝒎𝒆𝒏𝒕𝒐 𝒆𝒏𝒗𝒐𝒍𝒗𝒆 𝒆𝒔𝒕𝒂 𝒏𝒆𝒈𝒓𝒂 𝒊𝒏𝒄𝒖𝒓𝒔𝒂𝒐 𝒏𝒐 𝒓𝒆𝒊𝒏𝒐 𝒅𝒂 𝒅𝒆𝒔𝒈𝒓𝒂𝒄𝒂",
    "𝑨𝒉, 𝒒𝒖𝒂𝒏𝒕𝒂 𝒂𝒇𝒍𝒊𝒄𝒂𝒐 𝒑𝒆𝒓𝒎𝒆𝒊𝒂 𝒆𝒔𝒕𝒂 𝒅𝒐𝒍𝒐𝒓𝒐𝒔𝒂 𝒗𝒊𝒐𝒍𝒂𝒄𝒂𝒐 𝒅𝒐 𝒅𝒆𝒔𝒕𝒊𝒏𝒐",
    "𝑨𝒉, 𝒒𝒖𝒆 𝒅𝒆𝒔𝒗𝒆𝒏𝒕𝒖𝒓𝒂 𝒐𝒃𝒔𝒄𝒖𝒓𝒆𝒄𝒆 𝒆𝒔𝒕𝒆 𝒂𝒕𝒐 𝒏𝒆𝒇𝒂𝒔𝒕𝒐 𝒆 𝒊𝒏𝒇𝒂𝒖𝒔𝒕𝒐",
    "𝑨𝒉, 𝒐𝒔 𝒍𝒂𝒎𝒆𝒏𝒕𝒐𝒔 𝒆𝒄𝒐𝒂𝒎 𝒑𝒐𝒓 𝒆𝒔𝒕𝒂 𝒐𝒅𝒊𝒐𝒔𝒂 𝒒𝒖𝒆𝒃𝒓𝒂 𝒅𝒆 𝒉𝒂𝒓𝒎𝒐𝒏𝒊𝒂",
    "𝑨𝒉, 𝒒𝒖𝒆 𝒅𝒆𝒔𝒆𝒔𝒑𝒆𝒓𝒐 𝒑𝒂𝒊𝒓𝒂 𝒔𝒐𝒃𝒓𝒆 𝒆𝒔𝒕𝒂 𝒔𝒊𝒏𝒊𝒔𝒕𝒓𝒂 𝒕𝒓𝒂𝒏𝒔𝒈𝒓𝒆𝒔𝒔𝒂𝒐 𝒅𝒐𝒔 𝒄𝒆𝒖𝒔",
    "𝑨𝒉, 𝒒𝒖𝒂𝒐 𝒑𝒓𝒐𝒇𝒖𝒏𝒅𝒐 𝒆 𝒐 𝒂𝒃𝒊𝒔𝒎𝒐 𝒒𝒖𝒆 𝒔𝒆 𝒂𝒃𝒓𝒆 𝒅𝒊𝒂𝒏𝒕𝒆 𝒅𝒆𝒔𝒕𝒂 𝒂𝒇𝒓𝒐𝒏𝒕𝒂",
    "𝑨𝒉, 𝒒𝒖𝒆 𝒕𝒓𝒊𝒔𝒕𝒆𝒛𝒂 𝒔𝒆 𝒅𝒆𝒓𝒓𝒂𝒎𝒂 𝒔𝒐𝒃𝒓𝒆 𝒆𝒔𝒕𝒂 𝒆𝒙𝒆𝒄𝒓𝒂𝒗𝒆𝒍 𝒂𝒄𝒂𝒐 𝒅𝒐𝒔 𝒅𝒆𝒔𝒕𝒊𝒏𝒐𝒔",
    "𝑨𝒉, 𝒒𝒖𝒆 𝒅𝒆𝒔𝒆𝒔𝒑𝒆𝒓𝒐 𝒆𝒏𝒆𝒈𝒓𝒆𝒄𝒆 𝒆𝒔𝒕𝒂 𝒔𝒐𝒎𝒃𝒓𝒊𝒂 𝒕𝒓𝒂𝒊𝒄𝒂𝒐 𝒂𝒐𝒔 𝒅𝒆𝒔𝒊𝒈𝒏𝒊𝒐𝒔",
    "𝑨𝒉, 𝒒𝒖𝒆 𝒅𝒆𝒔𝒈𝒓𝒂𝒄𝒂 𝒂𝒔𝒔𝒐𝒍𝒂 𝒆𝒔𝒕𝒆 𝒂𝒕𝒐 𝒗𝒊𝒍 𝒆 𝒅𝒆𝒔𝒖𝒎𝒂𝒏𝒐",
    "𝑨𝒉, 𝒒𝒖𝒂𝒐 𝒔𝒐𝒎𝒃𝒓𝒊𝒂 𝒆 𝒂 𝒏𝒆𝒗𝒐𝒂 𝒒𝒖𝒆 𝒆𝒏𝒗𝒐𝒍𝒗𝒆 𝒆𝒔𝒕𝒂 𝒆𝒙𝒆𝒄𝒓𝒂𝒗𝒆𝒍 𝒂𝒄𝒂𝒐",
    "𝑨𝒉, 𝒒𝒖𝒆 𝒕𝒐𝒓𝒎𝒆𝒏𝒕𝒂 𝒅𝒆 𝒂𝒍𝒎𝒂𝒔 𝒂𝒇𝒍𝒊𝒕𝒂𝒔 𝒄𝒖𝒆𝒓𝒄𝒂 𝒆𝒔𝒕𝒂 𝒊𝒏𝒇𝒂𝒎𝒆 𝒕𝒓𝒂𝒏𝒔𝒈𝒓𝒆𝒔𝒔𝒂𝒐",
]

let why = ` ━━━━━━━━━⬣⬣━━━━━━━━
*Exemplo:*\n${usedPrefix + command} @${m.sender.split("@")[0]} 100  
${usedPrefix + command} 100 (Respondendo a mensagem)
 ━━━━━━━━━⬣⬣━━━━━━━━`
 
if(!(isAdmin || isOwner) && global.db.data.chats[m.chat].acoes===false){
   m.react("❌")
   
   return !0;
 } 
 const getRandom = (ext) => { 
    return `${Math.floor(Math.random() * 10000)}${ext}`;
}

 /*
   let user = a => '@' + a.split('@')[0] //'@' + a.split('@')[0]
   if (!txtt || !number || !(/^\d+$/.test(number) )) {
   throw `${lenguajeGB['smsAvisoMG']()}
╭━━━━━━━━━⬣
P┃
┃ 🪶📜 𝐃𝐢𝐠𝐚-𝐦𝐞 𝐪𝐮𝐞 𝐩𝐫𝐨𝐩ó𝐬𝐢𝐭𝐨 
┃ 𝐝𝐞𝐬𝐭𝐢𝐧𝐚𝐝𝐨 𝐚 𝐬𝐞𝐥𝐞𝐜𝐢𝐨𝐧𝐚𝐫 𝐨𝐬 
┃ 𝐩𝐫𝐢𝐧𝐜𝐢𝐩𝐚𝐢𝐬 𝐝𝐞𝐬𝐭𝐞 𝐠𝐫𝐮𝐩𝐨 𝐚 
┃ 𝐪𝐮𝐚𝐥 𝐥𝐡𝐞 𝐯ê𝐦 𝐚 𝐦𝐞𝐧𝐭𝐞
┃
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
┃ 𝐄𝐱𝐞𝐦𝐩𝐥𝐨:
┃ *${usedPrefix + command}top10 mais nilistas do gp*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
┃ 𝓔𝓭𝓰𝓪𝓻 𝓐𝓵𝓵𝓪𝓷 𝓑𝓸𝓽 🐈‍⬛ | ${vs}
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
    let topList = `╭━━⬣[🕯️💀 *_TOP ${selectedMembers.length} ${txtt}_* 🐈‍⬛]⬣━━━━━━\n`;
    
    selectedMembers.forEach((member, index) => {
        topList += `*_${index + 1}. 🕯️ ${user(member)}_*\n`;
    });
    
    topList += "╰━━━━━[ 𝓔𝓭𝓰𝓪𝓻 𝓑𝓞𝓣 🐈‍⬛ ]━━━━━━⬣*";
    
    return topList;
}


// Extract the number from the command


let selectedMembers = selectTopMembers(ps, number);

if (ps.length < number) {
    throw "༒︎ É 𝚙𝚛𝚎𝚌𝚒𝚜𝚘 𝚖𝚊𝚒𝚜 𝚍𝚎 " + number + " 𝚊𝚕𝚖𝚊𝚜 𝚗𝚎𝚜𝚝𝚎 𝚐𝚛𝚞𝚙𝚘 𝚙𝚊𝚛𝚊 𝚞𝚜𝚊𝚛 𝚎𝚜𝚝𝚎 𝚛𝚎𝚌𝚞𝚛𝚜𝚘. . .";
}

let topList = generateTopList(selectedMembers, txtt);
m.reply(topList, null, { mentions: conn.parseMention(topList) });
*/

const groupAdmins = participants.filter(p => p.admin)
 
  let admins =[]
  const listAdmin = groupAdmins.map((v, i) =>
  admins.push(v.id))
  
   let admcheck = admins.includes(m.sender)
   
	if(!global.db.data.chats[m.chat]){
  global.db.data.chats[m.chat]={}
}
if(!global.db.data.chats[m.chat].users){
  global.db.data.chats[m.chat].users={}
}
if(!global.db.data.chats[m.chat].users[who]){
  global.db.data.chats[m.chat].users[who]={
    exp: 0,
        limit:0,
        role:'🪶 𝐍𝐨𝐯𝐢𝐜𝐨 𝐄𝐧𝐢𝐠𝐦𝐚𝐭𝐢𝐜𝐨',
        money:0,
        level:0,
        adm: admcheck,
        legendary: false,
        banned:false,
        adv:0,
        tentativasRoubo: 5,
        usuariosRoubados: [],
        silenced: false,
        maxlevel: false,
        cocriador: false,
       
  }
}

if(!global.db.data.chats[m.chat].users[who].usuariosRoubados){
  global.db.data.chats[m.chat].users[who].usuariosRoubados=[]
}

if(!global.db.data.chats[m.chat].users[m.sender].usuariosRoubados){
  global.db.data.chats[m.chat].users[m.sender].usuariosRoubados=[]
}
// sender..
if(!global.db.data.chats[m.chat].users){
  global.db.data.chats[m.chat].users={}
}
if(!global.db.data.chats[m.chat].users[m.sender]){
  global.db.data.chats[m.chat].users[m.sender]={
    exp: 0,
        limit:0,
        role:'🪶 𝐍𝐨𝐯𝐢𝐜𝐨 𝐄𝐧𝐢𝐠𝐦𝐚𝐭𝐢𝐜𝐨',
        money:0,
        level:0,
        adm: admcheck,
        legendary: false,
        banned:false,
        adv:0,
        tentativasRoubo: 5,
        usuariosRoubados: [],
        silenced: false,
        maxlevel: false,
        cocriador: false,
       
  }
}

if(!global.db.data.chats[m.chat].users[m.sender].usuariosRoubados){
  global.db.data.chats[m.chat].users[m.sender].usuariosRoubados=[]
}
if (!global.db.data.chats[m.chat].users[m.sender].rouboTimestamp) {
  global.db.data.chats[m.chat].users[m.sender].rouboTimestamp = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
}

//sender

 
console.log(command)
	  
    
	let user = global.db.data.chats[m.chat].users[who]
switch (command) {
case 'beijar':
  
 let imagesKiss=['https://telegra.ph/file/dd67e48212a0d58e9db71.mp4','https://telegra.ph/file/65207dba8764bfd0aa0ab.mp4','https://telegra.ph/file/51cb6215d8a4905c52ead.mp4','https://telegra.ph/file/402d019f669bb3c1dce7c.mp4','https://telegra.ph/file/9cd449269108cf33d9d96.mp4']
console.log(` 🗡️: ${who || m.quoted?.sender}`)
if ((!text.includes('@') && !m.quoted) || (m.quoted?.sender == m.sender ) || (!text && !m.quoted)){

m.reply(`┏━── ﹝¿﹞
 
 𝑴𝒂𝒓𝒒𝒖𝒆 𝒂𝒍𝒈𝒖𝒎 𝒖𝒔𝒖𝒂𝒓𝒊𝒐 𝒅𝒆𝒔𝒕𝒆 𝒗𝒂𝒍𝒆 𝒔𝒐𝒎𝒃𝒓𝒊𝒐. . .

┗━── `)
} 

else if(who || m.quoted?.sender){
  console.log('test')
 let  vitima = who ? who : m.quoted?.sender
 
if(global.db.data.users[m.sender].parceiro && vitima !== global.db.data.users[m.sender].parceiro){
   

return conn.sendMessage(m.chat, {
            video: {url:'https://telegra.ph/file/7e3a3abde981002288888.mp4'},
            caption: `┏━── ﹝𒌐﹞
 
${infiel.getRandom()}

┗━── `, // Replace with the desired caption
            contextInfo: {
                mentionedJid: [m.sender,global.db.data.users[m.sender].parceiro], // Replace with the recipient's WhatsApp ID(s) to mention
            },
        });
        

 }
 else if(global.db.data.users[vitima].parceiro && vitima != global.db.data.users[m.sender].parceiro ){
 console.log('teste : '+vitima.split('@')[0])
     
     
     
let casado= who || m.quoted?.sender
console.log('tst  ' + casado)
return conn.sendMessage(m.chat, {
            video: {url:'https://telegra.ph/file/7e3a3abde981002288888.mp4'},
            caption: `┏━── ﹝𒌐﹞

 @${casado.split('@')[0]} 𝒑𝒆𝒓𝒕𝒆𝒏𝒄𝒆 𝒂 𝒐𝒖𝒕𝒓𝒐 𝒄𝒐𝒓𝒂𝒄𝒂𝒐,𝒆 𝒋𝒖𝒓𝒐𝒖 𝒇𝒊𝒅𝒆𝒍𝒊𝒅𝒂𝒅𝒆 𝒆𝒕𝒆𝒓𝒏𝒂. 𝑽𝒂 𝒆𝒎𝒃𝒐𝒓𝒂 𝒆 𝒇𝒊𝒒𝒖𝒆 𝒍𝒐𝒏𝒈𝒆.

┗━── `, // Replace with the desired caption
            contextInfo: {
                mentionedJid: [m.sender,casado] // Replace with the recipient's WhatsApp ID(s) to mention
            },
        });
        

 }

 
 let mensagensKiss = [
    `@${m.sender.split('@')[0]} 𝒃𝒆𝒊𝒋𝒂 @${vitima.split('@')[0]} 𝒂𝒑𝒂𝒊𝒙𝒐𝒏𝒂𝒅𝒂𝒎𝒆𝒏𝒕𝒆, 𝒄𝒐𝒎𝒐 𝒔𝒆 𝒇𝒐𝒔𝒔𝒆𝒎 𝒐𝒔 𝒖́𝒏𝒊𝒄𝒐𝒔 𝒏𝒐 𝒎𝒖𝒏𝒅𝒐, 𝒆𝒏𝒗𝒐𝒍𝒕𝒐𝒔 𝒑𝒆𝒍𝒂 𝒆𝒔𝒄𝒖𝒓𝒊𝒅𝒂̃𝒐 𝒆𝒕𝒆𝒓𝒏𝒂 𝒅𝒆 𝒖𝒎𝒂 𝒏𝒐𝒊𝒕𝒆 𝒔𝒆𝒎 𝒇𝒊𝒎.`,
    `@${m.sender.split('@')[0]} 𝒆𝒏𝒗𝒐𝒍𝒗𝒆 @${vitima.split('@')[0]} 𝒆𝒎 𝒖𝒎 𝒂𝒃𝒓𝒂𝒄̧𝒐 𝒆𝒕𝒆𝒓𝒏𝒐, 𝒔𝒆𝒖𝒔 𝒍𝒂́𝒃𝒊𝒐𝒔 𝒔𝒆 𝒆𝒏𝒄𝒐𝒏𝒕𝒓𝒂𝒏𝒅𝒐 𝒆𝒎 𝒖𝒎 𝒃𝒆𝒊𝒋𝒐 𝒒𝒖𝒆 𝒓𝒆𝒔𝒔𝒐𝒂 𝒑𝒆𝒍𝒂 𝒆𝒕𝒆𝒓𝒏𝒊𝒅𝒂𝒅𝒆 𝒔𝒐𝒎𝒃𝒓𝒊𝒂.`,
    `𝑪𝒐𝒎 𝒂 𝒍𝒖𝒂 𝒄𝒉𝒆𝒊𝒂 𝒄𝒐𝒎𝒐 𝒕𝒆𝒔𝒕𝒆𝒎𝒖𝒏𝒉𝒂, @${m.sender.split('@')[0]} 𝒃𝒆𝒊𝒋𝒂 @${vitima.split('@')[0]} 𝒄𝒐𝒎 𝒖𝒎𝒂 𝒊𝒏𝒕𝒆𝒏𝒔𝒊𝒅𝒂𝒅𝒆 𝒒𝒖𝒆 𝒅𝒆𝒔𝒂𝒇𝒊𝒂 𝒐 𝒑𝒓𝒐́𝒑𝒓𝒊𝒐 𝒕𝒆𝒎𝒑𝒐, 𝒑𝒆𝒓𝒅𝒊𝒅𝒐𝒔 𝒆𝒎 𝒖𝒎𝒂 𝒑𝒂𝒊𝒙𝒂̃𝒐 𝒆𝒕𝒆𝒓𝒏𝒂.`,
    `𝑵𝒐𝒔 𝒄𝒐𝒓𝒓𝒆𝒅𝒐𝒓𝒆𝒔 𝒂𝒔𝒔𝒐𝒎𝒃𝒓𝒂𝒅𝒐𝒔 𝒅𝒐 𝒄𝒂𝒔𝒕𝒆𝒍𝒐, @${m.sender.split('@')[0]} 𝒆 @${vitima.split('@')[0]} 𝒔𝒆 𝒆𝒏𝒄𝒐𝒏𝒕𝒓𝒂𝒎 𝒆𝒎 𝒖𝒎 𝒃𝒆𝒊𝒋𝒐 𝒑𝒓𝒐𝒇𝒖𝒏𝒅𝒐, 𝒐𝒏𝒅𝒆 𝒂 𝒆𝒔𝒄𝒖𝒓𝒊𝒅𝒂̃𝒐 𝒆 𝒐 𝒂𝒎𝒐𝒓 𝒔𝒆 𝒕𝒐𝒓𝒏𝒂𝒎 𝒖𝒎 𝒔𝒐́.`,
    `𝑺𝒐𝒃 𝒂 𝒍𝒖𝒛 𝒑𝒂́𝒍𝒊𝒅𝒂 𝒅𝒂 𝒍𝒖𝒂, @${m.sender.split('@')[0]} 𝒔𝒆𝒍𝒂 𝒔𝒆𝒖𝒔 𝒍𝒂́𝒃𝒊𝒐𝒔 𝒂𝒐𝒔 𝒅𝒆 @${vitima.split('@')[0]}, 𝒏𝒖𝒎 𝒃𝒆𝒊𝒋𝒐 𝒄𝒂𝒓𝒓𝒆𝒈𝒂𝒅𝒐 𝒅𝒆 𝒅𝒆𝒔𝒆𝒋𝒐 𝒔𝒐𝒎𝒃𝒓𝒊𝒐 𝒆 𝒂𝒎𝒐𝒓 𝒆𝒕𝒆𝒓𝒏𝒐.`
];

   m.react("🌙")
  
   
   await conn.sendMessage(m.chat, {
            video: {url:imagesKiss.getRandom()},
            caption: `┏━── ﹝🖤﹞
 
${mensagensKiss.getRandom()}

┗━── `, // Replace with the desired caption
            contextInfo: {
                mentionedJid: [m.sender,vitima], // Replace with the recipient's WhatsApp ID(s) to mention
            },
        });
   
       

    
}

  
break
case 'bater':
case 'espancar':
case 'surrar':
case 'socar':
 let imgEspancar=['https://telegra.ph/file/d2b1bf2b1fe793c4e00a2.mp4','https://telegra.ph/file/80824d90ebf68fcc2b7c0.mp4','https://telegra.ph/file/2222a41924d28574c63db.mp4','https://telegra.ph/file/997c27171398559a83621.mp4','https://telegra.ph/file/0878edf63f8fb0f53fd19.mp4','https://telegra.ph/file/23b02f66897e79bc50450.mp4']
console.log(` 🗡️: ${who || m.quoted?.sender}`)
if ((!text.includes('@') && !m.quoted) || (m.quoted?.sender == m.sender ) || (!text && !m.quoted)){

m.reply(`┏━── ﹝¿﹞
 
 𝑴𝒂𝒓𝒒𝒖𝒆 𝒂𝒍𝒈𝒖𝒎 𝒖𝒔𝒖𝒂𝒓𝒊𝒐 𝒅𝒆𝒔𝒕𝒆 𝒗𝒂𝒍𝒆 𝒔𝒐𝒎𝒃𝒓𝒊𝒐. . .

┗━── `)
} 

else if(who || m.quoted?.sender){
  console.log('test')
 let  vitima = who ? who : m.quoted?.sender
 let espancarMsg= [
`@${m.sender.split('@')[0]} 𝒆𝒎 𝒖𝒎 𝒇𝒓𝒆𝒏𝒆𝒔𝒊 𝒅𝒆 𝒇𝒖𝒓𝒐𝒓, 𝒆𝒔𝒑𝒂𝒏𝒄𝒐𝒖 𝒃𝒓𝒖𝒕𝒂𝒍𝒎𝒆𝒏𝒕𝒆 @${vitima.split('@')[0]}, 𝒔𝒆𝒖𝒔 𝒈𝒐𝒍𝒑𝒆𝒔 𝒂𝒕𝒊𝒏𝒈𝒊𝒏𝒅𝒐 𝒄𝒐𝒎 𝒔𝒆𝒍𝒗𝒂𝒈𝒆𝒓𝒊𝒂 𝒅𝒆𝒔𝒄𝒐𝒏𝒕𝒓𝒐𝒍𝒂𝒅𝒂.`, `𝑬𝒎 𝒖𝒎 𝒂𝒄𝒆𝒔𝒔𝒐 𝒅𝒆 𝒊𝒓𝒂 𝒑𝒓𝒐𝒇𝒖𝒏𝒅𝒂, @${m.sender.split('@')[0]} 𝒅𝒆𝒔𝒇𝒆𝒓𝒊𝒖 𝒈𝒐𝒍𝒑𝒆𝒔 𝒃𝒓𝒖𝒕𝒂𝒊𝒔 𝒄𝒐𝒏𝒕𝒓𝒂 @${vitima.split('@')[0]}, 𝒄𝒐𝒎𝒐 𝒔𝒆 𝒂 𝒑𝒓𝒐𝒑𝒓𝒊𝒂 𝒆𝒔𝒄𝒖𝒓𝒊𝒅𝒂𝒐 𝒅𝒆𝒏𝒕𝒓𝒐 𝒅𝒆𝒍𝒆 𝒔𝒆 𝒎𝒂𝒏𝒊𝒇𝒆𝒔𝒕𝒂𝒔𝒔𝒆.`, 
`𝑪𝒐𝒎 𝒐𝒍𝒉𝒐𝒔 𝒇𝒍𝒂𝒎𝒆𝒋𝒂𝒏𝒕𝒆𝒔 𝒅𝒆 𝒓𝒂𝒊𝒗𝒂, @${m.sender.split('@')[0]} 𝒆𝒔𝒑𝒂𝒏𝒄𝒐𝒖 𝒊𝒎𝒑𝒊𝒆𝒅𝒐𝒔𝒂𝒎𝒆𝒏𝒕𝒆 @${vitima.split('@')[0]}, 𝒄𝒂𝒅𝒂 𝒈𝒐𝒍𝒑𝒆 𝒆𝒄𝒐𝒂𝒏𝒅𝒐 𝒏𝒂 𝒆𝒔𝒄𝒖𝒓𝒊𝒅𝒂𝒐 𝒒𝒖𝒆 𝒆𝒏𝒗𝒐𝒍𝒗𝒆 𝒔𝒆𝒖𝒔 𝒄𝒐𝒓𝒂𝒄𝒐𝒆𝒔.`, `𝑵𝒐𝒔 𝒄𝒐𝒏𝒇𝒊𝒏𝒔 𝒔𝒐𝒎𝒃𝒓𝒊𝒐𝒔 𝒅𝒐 𝒂𝒃𝒂𝒏𝒅𝒐𝒏𝒐, @${m.sender.split('@')[0]} 𝒅𝒆𝒔𝒄𝒂𝒓𝒓𝒆𝒈𝒐𝒖 𝒔𝒖𝒂 𝒇𝒖𝒓𝒊𝒂 𝒆𝒎 @${vitima.split('@')[0]}, 𝒔𝒆𝒖𝒔 𝒑𝒖𝒏𝒉𝒐𝒔 𝒔𝒆 𝒕𝒐𝒓𝒏𝒂𝒏𝒅𝒐 𝒐 𝒊𝒏𝒔𝒕𝒓𝒖𝒎𝒆𝒏𝒕𝒐 𝒅𝒆 𝒖𝒎𝒂 𝒗𝒊𝒏𝒈𝒂𝒏𝒄𝒂 𝒔𝒆𝒎 𝒓𝒆𝒎𝒐𝒓𝒔𝒐.`, `𝑺𝒐𝒃 𝒂 𝒍𝒖𝒛 𝒅𝒂 𝒍𝒖𝒂 𝒐𝒄𝒖𝒍𝒕𝒂 𝒑𝒆𝒍𝒂𝒔 𝒏𝒖𝒗𝒆𝒏𝒔, @${m.sender.split('@')[0]} 𝒆𝒔𝒑𝒂𝒏𝒄𝒐𝒖 𝒄𝒐𝒎 𝒇𝒆𝒓𝒐𝒄𝒊𝒅𝒂𝒅𝒆 @${vitima.split('@')[0]}, 𝒔𝒆𝒖𝒔 𝒈𝒐𝒍𝒑𝒆𝒔 𝒖𝒎𝒂 𝒆𝒙𝒑𝒓𝒆𝒔𝒔𝒂𝒐 𝒃𝒓𝒖𝒕𝒂𝒍 𝒅𝒆 𝒖𝒎 𝒐𝒅𝒊𝒐 𝒒𝒖𝒆 𝒏𝒂𝒐 𝒑𝒐𝒅𝒆 𝒔𝒆𝒓 𝒄𝒐𝒏𝒕𝒊𝒅𝒐`
];
 

   m.react("🩸")
  
   
   await conn.sendMessage(m.chat, {
            video: {url:imgEspancar.getRandom()},
            caption: `┏━── ﹝👊﹞
 
${espancarMsg.getRandom()}

┗━── `, // Replace with the desired caption
            contextInfo: {
                mentionedJid: [m.sender,vitima], // Replace with the recipient's WhatsApp ID(s) to mention
            },
        });
   
       

    
}

  
break
case 'esfaquear':
case 'stab':
  let selfStab = 
[`𝑵𝒂 𝒔𝒐𝒎𝒃𝒓𝒂 𝒅𝒂 𝒏𝒐𝒊𝒕𝒆, @${m.sender.split('@')[0]} 𝒄𝒐𝒎 𝒐𝒍𝒉𝒐𝒔 𝒗𝒂𝒛𝒊𝒐𝒔 𝒆 𝒔𝒐𝒇𝒓𝒊𝒅𝒐𝒔, 𝒕𝒓𝒂𝒏𝒔𝒇𝒊𝒙𝒂 𝒔𝒖𝒂 𝒑𝒓𝒐́𝒑𝒓𝒊𝒂 𝒄𝒂𝒓𝒏𝒆 𝒄𝒐𝒎 𝒖𝒎𝒂 𝒍𝒂𝒎𝒊𝒏𝒂 𝒇𝒓𝒊𝒂, 𝒅𝒆𝒊𝒙𝒂𝒏𝒅𝒐 𝒖𝒎 𝒎𝒂𝒓 𝒅𝒆 𝒔𝒂𝒏𝒈𝒖𝒆 𝒏𝒐 𝒄𝒉𝒂̃𝒐 𝒆 𝒖𝒎 𝒓𝒂𝒔𝒕𝒓𝒐 𝒅𝒆 𝒅𝒆𝒔𝒆𝒔𝒑𝒆𝒓𝒐 𝒂𝒔𝒔𝒐𝒎𝒃𝒓𝒂𝒅𝒐𝒓.`,
`𝑵𝒂 𝒑𝒆𝒏𝒖𝒎𝒃𝒓𝒂 𝒅𝒂 𝒏𝒐𝒊𝒕𝒆, @${m.sender.split('@')[0]} 𝒆𝒏𝒄𝒂𝒓𝒂 𝒂 𝒇𝒓𝒊𝒂 𝒍𝒂𝒎𝒊𝒏𝒂 𝒄𝒐𝒎 𝒐𝒍𝒉𝒐𝒔 𝒗𝒂𝒛𝒊𝒐𝒔 𝒆 𝒔𝒐𝒎𝒃𝒓𝒊𝒐𝒔. 𝑵𝒖𝒎 𝒂𝒄𝒕𝒐 𝒅𝒆 𝒅𝒆𝒔𝒆𝒔𝒑𝒆𝒓𝒐 𝒂𝒇𝒊𝒂𝒅𝒐 𝒄𝒐𝒎𝒐 𝒖𝒎 𝒑𝒓𝒆𝒅𝒆𝒔𝒕𝒊𝒏𝒐 𝒄𝒐𝒏𝒕𝒓𝒂𝒓𝒊𝒂𝒅𝒐, 𝒄𝒓𝒂𝒗𝒂 𝒂 𝒇𝒂𝒄𝒂 𝒆𝒎 𝒔𝒆𝒖 𝒑𝒆𝒊𝒕𝒐, 𝒎𝒆𝒓𝒈𝒖𝒍𝒉𝒂𝒏𝒅𝒐 𝒏𝒂 𝒑𝒓𝒐́𝒑𝒓𝒊𝒂 𝒆𝒔𝒄𝒖𝒓𝒊𝒅𝒂̃𝒐. 𝑨 𝒗𝒊𝒅𝒂 𝒅𝒆𝒍𝒆 𝒆𝒔𝒄𝒐𝒓𝒓𝒆 𝒄𝒐𝒎𝒐 𝒔𝒂𝒏𝒈𝒖𝒆 𝒑𝒐𝒓 𝒆𝒏𝒕𝒓𝒆 𝒐𝒔 𝒅𝒆𝒅𝒐𝒔.`,
`𝑵𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔 𝒅𝒆 𝒖𝒎𝒂 𝒏𝒐𝒊𝒕𝒆 𝒔𝒊𝒏𝒊𝒔𝒕𝒓𝒂, @${m.sender.split('@')[0]} 𝒆𝒏𝒄𝒂𝒓𝒂 𝒂 𝒑𝒓𝒐́𝒑𝒓𝒊𝒂 𝒆𝒔𝒄𝒖𝒓𝒊𝒅𝒂̃𝒐. 𝑬𝒎 𝒖𝒎 𝒂𝒄𝒕𝒐 𝒎𝒐𝒓𝒃𝒊𝒅𝒐 𝒆 𝒅𝒆𝒔𝒆𝒔𝒑𝒆𝒓𝒂𝒅𝒐, 𝒆𝒍𝒆𝒗𝒂 𝒂 𝒇𝒂𝒄𝒂 𝒂𝒕𝒆́ 𝒐 𝒑𝒆𝒊𝒕𝒐, 𝒎𝒆𝒓𝒈𝒖𝒍𝒉𝒂𝒏𝒅𝒐 𝒂 𝒍𝒂𝒎𝒊𝒏𝒂 𝒏𝒂 𝒑𝒓𝒐́𝒑𝒓𝒊𝒂 𝒄𝒂𝒓𝒏𝒆. 𝑺𝒖𝒂 𝒗𝒊𝒅𝒂 𝒆𝒔𝒄𝒐𝒓𝒓𝒆 𝒄𝒐𝒎𝒐 𝒖𝒎 𝒓𝒊𝒗𝒐 𝒅𝒆 𝒔𝒂𝒏𝒈𝒖𝒆 𝒅𝒂𝒏𝒕𝒆 𝒅𝒐 𝒄𝒉𝒂̃𝒐, 𝒔𝒖𝒂 𝒆𝒔𝒔𝒆̂𝒏𝒄𝒊𝒂 𝒔𝒆 𝒅𝒊𝒔𝒔𝒊𝒑𝒂, 𝒅𝒆𝒊𝒙𝒂𝒏𝒅𝒐 𝒖𝒎 𝒍𝒆𝒈𝒂𝒅𝒐 𝒑𝒆𝒓𝒏𝒊𝒄𝒊𝒐𝒔𝒐 𝒅𝒆 𝒕𝒓𝒊𝒔𝒕𝒆𝒛𝒂 𝒆 𝒅𝒐𝒓.`,
`𝑵𝒂 𝒑𝒓𝒐𝒇𝒖𝒏𝒅𝒂 𝒆𝒔𝒄𝒖𝒓𝒊𝒅𝒂̃𝒐 𝒅𝒂 𝒏𝒐𝒊𝒕𝒆, @${m.sender.split('@')[0]} 𝒄𝒓𝒂𝒗𝒂 𝒖𝒎𝒂 𝒇𝒂𝒄𝒂 𝒏𝒐 𝒑𝒓𝒐́𝒑𝒓𝒊𝒐 𝒑𝒆𝒊𝒕𝒐. 𝑺𝒖𝒂 𝒗𝒊𝒅𝒂 𝒆𝒔𝒄𝒐𝒓𝒓𝒆 𝒆𝒎 𝒔𝒂𝒏𝒈𝒖𝒆.`
]
let selfStabImg =['https://telegra.ph/file/14461bacef0ca36c2a8fd.mp4', 'https://telegra.ph/file/f18a20264a4c45b8709cd.mp4','https://telegra.ph/file/ce391fc7dc796d1609b56.mp4']


 let images =['https://telegra.ph/file/2b66e11a7033558c0cdfd.mp4','https://telegra.ph/file/cd4275f6aabe7d7a30377.mp4','https://telegra.ph/file/e0194bd3dbe25eec73e88.mp4','https://telegra.ph/file/720ca359e2a29e09f21fc.mp4','https://telegra.ph/file/a349702f273dd18e3328d.mp4','https://telegra.ph/file/0a29a79b35dfbfad37a80.mp4','https://telegra.ph/file/473671315bd6242ed9f5e.mp4']
console.log(` 🗡️: ${who || m.quoted?.sender}`)
if ((!text.includes('@') && !m.quoted) || (m.quoted?.sender == m.sender ) || (!text && !m.quoted)){
   global.db.data.chats[m.chat].users[m.sender].morto = true
     if(!global.db.data.chats[m.chat].users[m.sender].morto){
    global.db.data.chats[m.chat].users[m.sender].morto= true
  }
await conn.sendMessage(m.chat, {
            video: {url:selfStabImg.getRandom()},
            caption: `┏━── ﹝🔪﹞
 
${selfStab.getRandom()}

┗━── `, // Replace with the desired caption
            contextInfo: {
                mentionedJid: [m.sender], // Replace with the recipient's WhatsApp ID(s) to mention
            },
        });
} 

else if(who || m.quoted?.sender){
  console.log('test')
 let  vitima = who ? who : m.quoted?.sender
 let mensagens =[`@${m.sender.split('@')[0]} 𝒎𝒆𝒓𝒈𝒖𝒍𝒉𝒐𝒖 𝒔𝒖𝒂 𝒍𝒂𝒎𝒊𝒏𝒂 𝒇𝒓𝒊𝒂 𝒏𝒂 𝒄𝒂𝒓𝒏𝒆 𝒅𝒆 @${vitima.split('@')[0]}, 𝒅𝒆𝒊𝒙𝒂𝒏𝒅𝒐 𝒖𝒎 𝒓𝒂𝒔𝒕𝒓𝒐 𝒅𝒆 𝒂𝒈𝒐𝒏𝒊𝒂 𝒆 𝒅𝒆𝒔𝒆𝒔𝒑𝒆𝒓𝒐 𝒆𝒎 𝒔𝒆𝒖 𝒍𝒆𝒊𝒕𝒐`,`@${m.sender.split('@')[0]} 𝒄𝒐𝒎 𝒖𝒎𝒂 𝒇𝒖𝒓𝒊𝒂 𝒔𝒐𝒎𝒃𝒓𝒊𝒂, 𝒎𝒆𝒓𝒈𝒖𝒍𝒉𝒂 𝒂 𝒍𝒂𝒎𝒊𝒏𝒂 𝒏𝒐 𝒄𝒐𝒓𝒂𝒄𝒂𝒐 𝒅𝒆 @${vitima.split('@')[0]}, 𝒕𝒐𝒓𝒏𝒂𝒏𝒅𝒐 𝒂 𝒏𝒐𝒊𝒕𝒆 𝒆𝒎 𝒖𝒎 𝒄𝒆𝒏𝒂𝒓𝒊𝒐 𝒅𝒆 𝒅𝒆𝒔𝒆𝒔𝒑𝒆𝒓𝒐 𝒄𝒐𝒎 𝒔𝒆𝒖𝒔 𝒈𝒓𝒊𝒕𝒐𝒔`,`𝑬𝒎 𝒖𝒎𝒂 𝒓𝒂𝒋𝒂𝒅𝒂 𝒅𝒆 𝒇𝒖𝒓𝒊𝒂...@${m.sender.split('@')[0]} 𝒆𝒔𝒇𝒂𝒒𝒖𝒆𝒊𝒂 @${vitima.split('@')[0]} 𝒔𝒆𝒎 𝒑𝒊𝒆𝒅𝒂𝒅𝒆, 𝒓𝒆𝒎𝒂𝒏𝒆𝒔𝒄𝒆𝒏𝒅𝒐 𝒖𝒎 𝒓𝒂𝒔𝒕𝒓𝒐 𝒅𝒆 𝒔𝒂𝒏𝒈𝒖𝒆 𝒆 𝒉𝒐𝒓𝒓𝒐𝒓`,`𝑵𝒂 𝒊𝒎𝒑𝒊𝒆𝒅𝒐𝒔𝒂 𝒏𝒐𝒊𝒕𝒆, @${m.sender.split('@')[0]} 𝒄𝒐𝒎 𝒖𝒎 𝒐𝒍𝒉𝒂𝒓 𝒈𝒆𝒍𝒊𝒅𝒐 𝒆 𝒎𝒂𝒍𝒊𝒈𝒏𝒐, 𝒄𝒓𝒂𝒗𝒂 𝒔𝒖𝒂 𝒍𝒂𝒎𝒊𝒏𝒂 𝒏𝒂 𝒄𝒂𝒓𝒏𝒆 𝒅𝒆 @${vitima.split('@')[0]}, 𝒊𝒏𝒖𝒏𝒅𝒂𝒏𝒅𝒐 𝒐 𝒄𝒉𝒂𝒐 𝒄𝒐𝒎 𝒔𝒆𝒖 𝒔𝒂𝒏𝒈𝒖𝒆 𝒆 𝒅𝒆𝒊𝒙𝒂𝒏𝒅𝒐 𝒖𝒎 𝒓𝒂𝒔𝒕𝒓𝒐 𝒅𝒆 𝒕𝒆𝒓𝒓𝒐𝒓` ]

   m.react("🩸")
  
    if(!global.db.data.chats[m.chat].users[who].adm && !global.criador.includes(who) && !global.cocriador.includes(who)){ 
           global.db.data.chats[m.chat].users[who].morto = true   

     global.db.data.chats[m.chat].users[m.sender].trojans++
            }
    if(global.cocriador.includes(who)){ 
      return terribleError('𝒑𝒓𝒊𝒏𝒄𝒆𝒔𝒂')
    }
    else if(global.criador.includes(who)){
      return terribleError('𝒑𝒓𝒊𝒏𝒄𝒊𝒑𝒆')
    }
   await conn.sendMessage(m.chat, {
            video: {url:images.getRandom()},
            caption: `┏━── ﹝🔪﹞
 
${mensagens.getRandom()}

┗━── `, // Replace with the desired caption
            contextInfo: {
                mentionedJid: [m.sender,vitima], // Replace with the recipient's WhatsApp ID(s) to mention
            },
        });
   
       

    
}

  
break
case 'queimar':
  case 'incinerar':
 let imageBurn =[`https://telegra.ph/file/9cdb9211474bc3b9b65ad.mp4`,'https://telegra.ph/file/00ab4aba23284fe1f1351.mp4', 'https://telegra.ph/file/112efd103ad3ab8069b60.mp4','https://telegra.ph/file/22d159b8eaf1a00b9f0f1.mp4']
console.log(` 🗡️: ${who || m.quoted?.sender}`)
if ((!text.includes('@') && !m.quoted) || (m.quoted?.sender == m.sender ) || (!text && !m.quoted)){

m.reply(`┏━── ﹝¿﹞
 
 𝑴𝒂𝒓𝒒𝒖𝒆 𝒂𝒍𝒈𝒖𝒎 𝒖𝒔𝒖𝒂𝒓𝒊𝒐 𝒅𝒆𝒔𝒕𝒆 𝒗𝒂𝒍𝒆 𝒔𝒐𝒎𝒃𝒓𝒊𝒐. . .

┗━── `)
} 

else if(who || m.quoted?.sender){
  console.log('test')
 let  vitimaBurn = who ? who : m.quoted?.sender
 let mensageBurn =[
  `@${m.sender.split('@')[0]} 𝒒𝒖𝒆𝒊𝒎𝒐𝒖 @${vitimaBurn.split('@')[0]} 𝒗𝒊𝒗𝒐, 𝒓𝒆𝒄𝒓𝒊𝒂𝒏𝒅𝒐 𝒖𝒎 𝒓𝒆𝒕𝒓𝒂𝒕𝒐 𝒅𝒆 𝒂𝒈𝒐𝒏𝒊𝒂 𝒆 𝒅𝒆𝒔𝒆𝒔𝒑𝒆𝒓𝒐 𝒆𝒏𝒒𝒖𝒂𝒏𝒕𝒐 𝒆𝒔𝒕𝒆 𝒔𝒆 𝒅𝒆𝒃𝒂𝒕𝒊𝒂 𝒂𝒏𝒕𝒆𝒔 𝒅𝒐 𝒊𝒏𝒆𝒗𝒊𝒕𝒂𝒗𝒆𝒍 𝒇𝒊𝒎`,
  `@${m.sender.split('@')[0]} 𝒆𝒎 𝒖𝒎 𝒂𝒕𝒐 𝒇𝒆𝒓𝒐𝒛 𝒆 𝒐𝒃𝒔𝒄𝒖𝒓𝒐, 𝒒𝒖𝒆𝒊𝒎𝒐𝒖 @${vitimaBurn.split('@')[0]} 𝒗𝒊𝒗𝒐, 𝒄𝒐𝒎𝒐 𝒖𝒎𝒂 𝒔𝒄𝒆𝒏𝒂 𝒅𝒆 𝒉𝒐𝒓𝒓𝒐𝒓`,
  `𝑬𝒎 𝒖𝒎 𝒇𝒓𝒆𝒏𝒆𝒔𝒊 𝒅𝒆 𝒇𝒖𝒓𝒊𝒂 𝒆 𝒕𝒐𝒓𝒎𝒆𝒏𝒕𝒐... @${m.sender.split('@')[0]} 𝒒𝒖𝒆𝒊𝒎𝒐𝒖 @${vitimaBurn.split('@')[0]} 𝒗𝒊𝒗𝒐, 𝒆𝒗𝒐𝒄𝒂𝒏𝒅𝒐 𝒖𝒎𝒂 𝒔𝒐𝒎𝒃𝒓𝒊𝒂 𝒍𝒆𝒎𝒃𝒓𝒂𝒏𝒄𝒂 𝒅𝒆 𝒕𝒆𝒓𝒓𝒐𝒓`,
  `𝑵𝒆𝒔𝒕𝒂 𝒊𝒎𝒑𝒊𝒆𝒅𝒐𝒔𝒂 𝒏𝒐𝒊𝒕𝒆, @${m.sender.split('@')[0]} 𝒄𝒐𝒎 𝒖𝒎 𝒈𝒆𝒔𝒕𝒐 𝒈𝒆𝒍𝒂𝒅𝒐 𝒆 𝒎𝒂𝒍𝒊𝒈𝒏𝒐, 𝒂𝒕𝒆𝒐𝒖 𝒇𝒐𝒈𝒐 𝒆𝒎 @${vitimaBurn.split('@')[0]}, 𝒄𝒐𝒏𝒔𝒖𝒎𝒊𝒏𝒅𝒐-𝒐 𝒆𝒎 𝒄𝒉𝒂𝒎𝒂𝒔`
];
   m.react("🚨")
  
    if(!global.db.data.chats[m.chat].users[who].adm && !global.criador.includes(who) && !global.cocriador.includes(who)){    
      
      global.db.data.chats[m.chat].users[who].morto = true   
    
      global.db.data.chats[m.chat].users[m.sender].trojans++
    
    
    } 
    if(global.cocriador.includes(who)){ 
      return terribleError('𝒑𝒓𝒊𝒏𝒄𝒆𝒔𝒂')
    }
    else if(global.criador.includes(who)){
      return terribleError('𝒑𝒓𝒊𝒏𝒄𝒊𝒑𝒆')
    }
   await conn.sendMessage(m.chat, {
            video: {url:imageBurn.getRandom()},
            caption: `┏━── ﹝🔥﹞
 
${mensageBurn.getRandom()}

┗━── `, // Replace with the desired caption
            contextInfo: {
                mentionedJid: [m.sender,vitimaBurn], // Replace with the recipient's WhatsApp ID(s) to mention
            },
        });
   
       

    
}

  
break

case 'hipnotizar':
 let imageHypno=['https://telegra.ph/file/3527b4eab997aaeb7ad04.mp4','https://telegra.ph/file/833177972e6f15b24deeb.mp4','https://telegra.ph/file/e6e28e45a84d16c8098cd.mp4','https://telegra.ph/file/8fd9300cb6f278455aa6a.mp4']
console.log(` 🗡️: ${who || m.quoted?.sender}`)
if ((!text.includes('@') && !m.quoted) || (m.quoted?.sender == m.sender ) || (!text && !m.quoted)){

m.reply(`┏━── ﹝¿﹞
 
 𝑴𝒂𝒓𝒒𝒖𝒆 𝒂𝒍𝒈𝒖𝒎 𝒖𝒔𝒖𝒂𝒓𝒊𝒐 𝒅𝒆𝒔𝒕𝒆 𝒗𝒂𝒍𝒆 𝒔𝒐𝒎𝒃𝒓𝒊𝒐. . .

┗━── `)
} 

else if(who || m.quoted?.sender){
  console.log('test')
 let  vitimaHypno= who ? who : m.quoted?.sender
 
 const mensagemHypno = [
  `@${m.sender.split('@')[0]} 𝒉𝒊𝒑𝒏𝒐𝒕𝒊𝒛𝒐𝒖 𝒅𝒆 𝒇𝒐𝒓𝒎𝒂 𝒔𝒐𝒎𝒃𝒓𝒊𝒂 @${vitimaHypno.split('@')[0]},  𝒆𝒏𝒗𝒐𝒍𝒗𝒆𝒏𝒅𝒐 𝒔𝒖𝒂 𝒎𝒆𝒏𝒕𝒆 𝒆𝒎 𝒕𝒓𝒆𝒗𝒂𝒔 𝒑𝒓𝒐𝒇𝒖𝒏𝒅𝒂𝒔.`,
  `𝑬𝒎 𝒖𝒎𝒂 𝒔𝒊𝒏𝒊𝒔𝒕𝒓𝒂 𝒉𝒊𝒑𝒏𝒐́𝒕𝒊𝒄𝒂, @${m.sender.split('@')[0]} 𝒅𝒐𝒎𝒊𝒏𝒐𝒖 𝒎𝒆𝒏𝒕𝒂𝒍𝒎𝒆𝒏𝒕𝒆 @${vitimaHypno.split('@')[0]}, 𝒎𝒆𝒓𝒈𝒖𝒍𝒉𝒂𝒏𝒅𝒐-𝒐 𝒐 𝒕𝒓𝒂𝒏𝒔𝒆 𝒊𝒏𝒆𝒔𝒄𝒂𝒑𝒂́𝒗𝒆𝒍`,
  `𝑪𝒐𝒎 𝒐𝒔 𝒐𝒍𝒉𝒐𝒔 𝒄𝒉𝒆𝒊𝒐𝒔 𝒅𝒆 𝒅𝒆𝒔𝒅𝒆́𝒎, @${m.sender.split('@')[0]} 𝒉𝒊𝒑𝒏𝒐𝒕𝒊𝒛𝒐𝒖 𝒅𝒆 𝒎𝒂𝒏𝒆𝒊𝒓𝒂 𝒔𝒐𝒎𝒃𝒓𝒊𝒂 @${vitimaHypno.split('@')[0]}, 𝒔𝒖𝒃𝒋𝒖𝒈𝒂𝒏𝒅𝒐-𝒐 𝒂 𝒔𝒆𝒖𝒔 𝒅𝒆𝒔𝒆𝒋𝒐𝒔 𝒐𝒄𝒖𝒍𝒕𝒐𝒔.`,
 `𝑺𝒐𝒃 𝒐 𝒄𝒆́𝒖 𝒆𝒏𝒖𝒃𝒓𝒂𝒅𝒐, @${m.sender.split('@')[0]} 𝒆𝒏𝒇𝒆𝒊𝒕𝒊𝒄̧𝒐𝒖 𝒅𝒆 𝒇𝒐𝒓𝒎𝒂 𝒔𝒐𝒎𝒃𝒓𝒊𝒂 @${vitimaHypno.split('@')[0]}, 𝒎𝒂𝒏𝒊𝒑𝒖𝒍𝒂𝒏𝒅𝒐 𝒔𝒖𝒂𝒔 𝒘𝒊𝒍𝒍𝒔 𝒐𝒄𝒖𝒍𝒕𝒐𝒔 𝒄𝒐𝒎𝒐 𝒖𝒎 𝒎𝒆𝒔𝒕𝒓𝒆 𝒅𝒂𝒔 𝒕𝒓𝒆𝒗𝒂𝒔.`,
  `𝑨𝒐 𝒄𝒍𝒂𝒓 𝒅𝒂 𝒍𝒖𝒂 𝒄𝒊𝒏𝒛𝒆𝒏𝒕𝒂, @${m.sender.split('@')[0]} 𝒉𝒊𝒑𝒏𝒐𝒕𝒊𝒛𝒐𝒖 𝒅𝒆 𝒇𝒐𝒓𝒎𝒂 𝒔𝒐𝒎𝒃𝒓𝒊𝒂 @${vitimaHypno.split('@')[0]}, 𝒑𝒂𝒓𝒂 𝒏𝒖𝒏𝒄𝒂 𝒎𝒂𝒊𝒔 𝒔𝒆𝒓 𝒆𝒏𝒄𝒐𝒏𝒕𝒓𝒂𝒅𝒐.`
];

   m.react("😵‍💫")
  
   
   await conn.sendMessage(m.chat, {
            video: {url:imageHypno.getRandom()},
            caption: `┏━── ﹝👁️﹞
 
${mensagemHypno.getRandom()}

┗━── `, // Replace with the desired caption
            contextInfo: {
                mentionedJid: [m.sender,vitimaHypno], // Replace with the recipient's WhatsApp ID(s) to mention
            },
        });
   
       

    
}

  
break


case 'envenenar':
 let imagePoison=['https://telegra.ph/file/b74b45ea24cce42900445.mp4','https://telegra.ph/file/3729ee494b4e99318d07e.mp4','https://telegra.ph/file/27164c0bb7c1d076c9d39.mp4','https://telegra.ph/file/9841d23cf38bc893d7be7.mp4']
console.log(` 🗡️: ${who || m.quoted?.sender}`)
if ((!text.includes('@') && !m.quoted) || (m.quoted?.sender == m.sender ) || (!text && !m.quoted)){

m.reply(`┏━── ﹝¿﹞
 
 𝑴𝒂𝒓𝒒𝒖𝒆 𝒂𝒍𝒈𝒖𝒎 𝒖𝒔𝒖𝒂𝒓𝒊𝒐 𝒅𝒆𝒔𝒕𝒆 𝒗𝒂𝒍𝒆 𝒔𝒐𝒎𝒃𝒓𝒊𝒐. . .

┗━── `)
} 

else if(who || m.quoted?.sender){
  console.log('test')
 let  vitimaPoison= who ? who : m.quoted?.sender
 
 const mensagemPoison= [
  `@${m.sender.split('@')[0]} 𝒎𝒊𝒙𝒐𝒖 𝒖𝒎 𝒗𝒆𝒏𝒆𝒏𝒐 𝒍𝒆𝒕𝒂𝒍 𝒏𝒐𝒔 𝒂𝒍𝒊𝒎𝒆𝒏𝒕𝒐𝒔 𝒅𝒆 @${vitimaPoison.split('@')[0]}, 𝒂𝒔𝒔𝒆𝒈𝒖𝒓𝒂𝒏𝒅𝒐 𝒒𝒖𝒆 𝒔𝒖𝒂 𝒗𝒊𝒅𝒂 𝒔𝒆𝒓𝒊𝒂 𝒆𝒏𝒄𝒆𝒓𝒓𝒂𝒅𝒂 𝒆𝒎 𝒔𝒊𝒍𝒆̂𝒏𝒄𝒊𝒐`,
  `𝑵𝒂 𝒄𝒂𝒍𝒂𝒅𝒂 𝒅𝒂 𝒏𝒐𝒊𝒕𝒆, @${m.sender.split('@')[0]} 𝒄𝒐𝒍𝒐𝒄𝒐𝒖 𝒖𝒎𝒂 𝒅𝒐𝒔𝒆 𝒎𝒐𝒓𝒕𝒂𝒍 𝒅𝒆 𝒗𝒆𝒏𝒆𝒏𝒐 𝒏𝒂 𝒃𝒆𝒃𝒊𝒅𝒂 𝒅𝒆 @${vitimaPoison.split('@')[0]}, 𝒔𝒆𝒎 𝒅𝒆𝒊𝒙𝒂𝒓 𝒓𝒂𝒔𝒕𝒓𝒐𝒔.`,
  `𝑪𝒐𝒎 𝒖𝒎 𝒔𝒐𝒓𝒓𝒊𝒔𝒐 𝒎𝒂𝒄𝒂𝒃𝒓𝒐, @${m.sender.split('@')[0]} 𝒅𝒆𝒓𝒓𝒂𝒎𝒐𝒖 𝒖𝒎 𝒆𝒍𝒊𝒙𝒊𝒓 𝒗𝒆𝒏𝒆𝒏𝒐𝒔𝒐 𝒏𝒂 𝒄𝒐𝒎𝒊𝒅𝒂 𝒅𝒆 @${vitimaPoison.split('@')[0]}, 𝒕𝒓𝒂𝒛𝒆𝒏𝒅𝒐 𝒅𝒆𝒔𝒕𝒓𝒖𝒊𝒄̧𝒂̃𝒐 𝒂 𝒄𝒂𝒅𝒂 𝒃𝒐𝒄𝒂𝒅𝒂.`,
  `𝑺𝒐𝒃 𝒐 𝒄𝒆́𝒖 𝒆𝒏𝒖𝒃𝒓𝒂𝒅𝒐, @${m.sender.split('@')[0]} 𝒆𝒏𝒗𝒆𝒏𝒆𝒏𝒐𝒖 𝒂 𝒂́𝒈𝒖𝒂 𝒅𝒆 @${vitimaPoison.split('@')[0]}, 𝒍𝒆𝒗𝒂𝒏𝒅𝒐 𝒂 𝒅𝒆𝒔𝒆𝒔𝒑𝒆𝒓𝒂𝒄̧𝒂̃𝒐.`,
  `𝑨𝒐 𝒄𝒍𝒂𝒓 𝒅𝒂 𝒍𝒖𝒂 𝒄𝒊𝒏𝒛𝒆𝒏𝒕𝒂, @${m.sender.split('@')[0]} 𝒎𝒆𝒓𝒈𝒖𝒍𝒉𝒐𝒖 𝒖𝒎 𝒗𝒊𝒂𝒍 𝒅𝒆 𝒗𝒆𝒏𝒆𝒏𝒐 𝒏𝒂 𝒅𝒓𝒊𝒏𝒌 𝒅𝒆 @${vitimaPoison.split('@')[0]}, 𝒄𝒐𝒏𝒅𝒆𝒏𝒂𝒏𝒅𝒐 𝒔𝒖𝒂 𝒂𝒍𝒎𝒂 𝒂 𝒖𝒎 𝒇𝒊𝒎 𝒂𝒏𝒕𝒆𝒄𝒊𝒑𝒂𝒅𝒐.`
];

   m.react("☣️")
  
    if(!global.db.data.chats[m.chat].users[who].adm && !global.criador.includes(who) && !global.cocriador.includes(who)){   
         global.db.data.chats[m.chat].users[who].morto = true   
        
     global.db.data.chats[m.chat].users[m.sender].trojans++
      }
    if(global.cocriador.includes(who)){ 
      return terribleError('𝒑𝒓𝒊𝒏𝒄𝒆𝒔𝒂')
    }
    else if(global.criador.includes(who)){
      return terribleError('𝒑𝒓𝒊𝒏𝒄𝒊𝒑𝒆')
    }
   await conn.sendMessage(m.chat, {
            video: {url:imagePoison.getRandom()},
            caption: `┏━── ﹝⚚﹞
 
${mensagemPoison.getRandom()}

┗━── `, // Replace with the desired caption
            contextInfo: {
                mentionedJid: [m.sender,vitimaPoison], // Replace with the recipient's WhatsApp ID(s) to mention
            },
        });
   
       

    
}

  
break
/////

case 'enterrar':
 let imageBury=['https://telegra.ph/file/1478f68ff421c2e4d1fc9.mp4','https://telegra.ph/file/9f3508a346cf0b9744657.mp4','https://telegra.ph/file/f8a82b0c6661a307a1117.mp4','https://telegra.ph/file/461f7d37418c16a642d42.mp4']
console.log(` 🗡️: ${who || m.quoted?.sender}`)
if ((!text.includes('@') && !m.quoted) || (m.quoted?.sender == m.sender ) || (!text && !m.quoted)){

m.reply(`┏━── ﹝¿﹞
 
 𝑴𝒂𝒓𝒒𝒖𝒆 𝒂𝒍𝒈𝒖𝒎 𝒖𝒔𝒖𝒂𝒓𝒊𝒐 𝒅𝒆𝒔𝒕𝒆 𝒗𝒂𝒍𝒆 𝒔𝒐𝒎𝒃𝒓𝒊𝒐. . .

┗━── `)
} 

else if(who || m.quoted?.sender){
  console.log('test')
 let  vitimaBury= who ? who : m.quoted?.sender
 
 const mensagemBury = [
  `@${m.sender.split('@')[0]} 𝒆𝒏𝒕𝒆𝒓𝒓𝒐𝒖 𝒗𝒊𝒗𝒐 @${vitimaBury.split('@')[0]}, 𝒄𝒐𝒎 𝒖𝒎 𝒈𝒆𝒔𝒕𝒐 𝒅𝒆 𝒅𝒆𝒔𝒑𝒓𝒆𝒛𝒐 𝒆𝒕𝒆́𝒓𝒆𝒐`,
  `𝑵𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔 𝒅𝒂 𝒏𝒐𝒊𝒕𝒆, @${m.sender.split('@')[0]} 𝒆𝒏𝒕𝒆𝒓𝒓𝒐𝒖 𝒗𝒊𝒗𝒐 @${vitimaBury.split('@')[0]}, 𝒂𝒔𝒔𝒆𝒈𝒖𝒓𝒂𝒏𝒅𝒐 𝒒𝒖𝒆 𝒏𝒊𝒏𝒈𝒖𝒆́𝒎 𝒐𝒖𝒗𝒊𝒓𝒊𝒂 𝒔𝒆𝒖𝒔 𝒈𝒓𝒊𝒕𝒐𝒔.`,
  `𝑪𝒐𝒎 𝒐𝒔 𝒐𝒍𝒉𝒐𝒔 𝒄𝒉𝒆𝒊𝒐𝒔 𝒅𝒆 𝒅𝒆𝒔𝒅𝒆́𝒎, @${m.sender.split('@')[0]} 𝒆𝒏𝒕𝒆𝒓𝒓𝒐𝒖 𝒗𝒊𝒗𝒐 @${vitimaBury.split('@')[0]}, 𝒅𝒆𝒊𝒙𝒂𝒏𝒅𝒐 𝒐 𝒕𝒆𝒓𝒓𝒐𝒓 𝒄𝒐𝒏𝒔𝒖𝒎𝒊𝒓 𝒔𝒖𝒂 𝒂𝒍𝒎𝒂.`,
  `𝑺𝒐𝒃 𝒐 𝒄𝒆́𝒖 𝒆𝒏𝒖𝒃𝒓𝒂𝒅𝒐, @${m.sender.split('@')[0]} 𝒆𝒏𝒕𝒆𝒓𝒓𝒐𝒖 𝒗𝒊𝒗𝒐 @${vitimaBury.split('@')[0]}, 𝒅𝒆𝒊𝒙𝒂𝒏𝒅𝒐 𝒖𝒎 𝒎𝒂𝒍𝒆𝒇𝒊𝒄𝒊𝒐 𝒆𝒎 𝒔𝒖𝒂 𝒎𝒆𝒏𝒕𝒆.`,
  `𝑨𝒐 𝒄𝒍𝒂𝒓 𝒅𝒂 𝒍𝒖𝒂 𝒄𝒊𝒏𝒛𝒆𝒏𝒕𝒂, @${m.sender.split('@')[0]} 𝒆𝒏𝒕𝒆𝒓𝒓𝒐𝒖 𝒗𝒊𝒗𝒐 @${vitimaBury.split('@')[0]}, 𝒑𝒂𝒓𝒂 𝒏𝒖𝒏𝒄𝒂 𝒎𝒂𝒊𝒔 𝒔𝒆𝒓 𝒆𝒏𝒄𝒐𝒏𝒕𝒓𝒂𝒅𝒐.`
];

   m.react("⚰️")
   if(!global.db.data.chats[m.chat].users[who].adm && !global.criador.includes(who) && !global.cocriador.includes(who)){  
    
    global.db.data.chats[m.chat].users[m.sender].trojans++
        global.db.data.chats[m.chat].users[who].morto = true     
      }
   if(global.cocriador.includes(who)){ 
      return terribleError('𝒑𝒓𝒊𝒏𝒄𝒆𝒔𝒂')
    }
    else if(global.criador.includes(who)){
      return terribleError('𝒑𝒓𝒊𝒏𝒄𝒊𝒑𝒆')
    }
   await conn.sendMessage(m.chat, {
            video: {url:imageBury.getRandom()},
            caption: `┏━── ﹝🪦﹞
 
${mensagemBury.getRandom()}

┗━── `, // Replace with the desired caption
            contextInfo: {
                mentionedJid: [m.sender,vitimaBury], // Replace with the recipient's WhatsApp ID(s) to mention
            },
        });
   
       

    
}

  
break


// abracar



// comer {
case 'cozinhar':
case 'comer':
case 'devorar':
 let imageEat = ['https://telegra.ph/file/9ca0c676dd5657eaf4fad.mp4','https://telegra.ph/file/ab6df115d237ff3b561e5.mp4','https://telegra.ph/file/d05e2f682b1e49e3dca64.mp4','https://telegra.ph/file/a260c47d7de2dfe2e6283.mp4']
console.log(` 🗡️: ${who || m.quoted?.sender}`)
if ((!text.includes('@') && !m.quoted) || (m.quoted?.sender == m.sender ) || (!text && !m.quoted)){

m.reply(`┏━── ﹝¿﹞
 
 𝑴𝒂𝒓𝒒𝒖𝒆 𝒂𝒍𝒈𝒖𝒎 𝒖𝒔𝒖𝒂𝒓𝒊𝒐 𝒅𝒆𝒔𝒕𝒆 𝒗𝒂𝒍𝒆 𝒔𝒐𝒎𝒃𝒓𝒊𝒐. . .

┗━── `)
} 

else if(who || m.quoted?.sender){
  console.log('test')
 let  vitimaEat= who ? who : m.quoted?.sender
 
 const mensagemEat = [
  `@${m.sender.split('@')[0]} 𝒅𝒆𝒗𝒐𝒓𝒐𝒖 @${vitimaEat.split('@')[0]}, 𝒔𝒂𝒕𝒊𝒔𝒇𝒂𝒛𝒆𝒏𝒅𝒐 𝒔𝒖𝒂 𝒇𝒐𝒎𝒆 𝒅𝒆 𝒄𝒂𝒓𝒏𝒆 𝒆 𝒔𝒂𝒏𝒈𝒖𝒆.`,
  `𝑪𝒐𝒎 𝒐𝒍𝒉𝒐𝒔 𝒆𝒎𝒃𝒖𝒊𝒅𝒐𝒔 𝒅𝒆 𝒖𝒎 𝒅𝒆𝒔𝒆𝒋𝒐 𝒅𝒆𝒔𝒄𝒐𝒏𝒕𝒓𝒐𝒍𝒂𝒅𝒐, @${m.sender.split('@')[0]} 𝒔𝒂𝒄𝒊𝒐𝒖 𝒔𝒖𝒂 𝒇𝒐𝒎𝒆 𝒄𝒐𝒎 𝒂 𝒄𝒂𝒓𝒏𝒆 𝒅𝒆 @${vitimaEat.split('@')[0]}, 𝒅𝒆𝒍𝒊𝒄𝒊𝒂𝒏𝒅𝒐-𝒔𝒆 𝒄𝒂𝒅𝒂 𝒃𝒐𝒄𝒂𝒅𝒂.`,
  `𝑨𝒐 𝒔𝒐𝒎 𝒅𝒆 𝒔𝒖𝒔𝒑𝒊𝒓𝒐𝒔 𝒅𝒆 𝒅𝒐𝒓, @${m.sender.split('@')[0]} 𝒓𝒂𝒔𝒈𝒐𝒖 𝒂 𝒄𝒂𝒓𝒏𝒆 𝒅𝒆 @${vitimaEat.split('@')[0]}, 𝒄𝒐𝒎𝒆𝒏𝒅𝒐 𝒄𝒐𝒎 𝒂𝒗𝒊𝒅𝒂𝒅𝒆 𝒄𝒂𝒅𝒂 𝒑𝒆𝒅𝒂𝒄̧𝒐`,
  `𝑺𝒐𝒃 𝒖𝒎 𝒄𝒆́𝒖 𝒔𝒆𝒎 𝒆𝒔𝒕𝒓𝒆𝒍𝒂𝒔, @${m.sender.split('@')[0]} 𝒓𝒆𝒄𝒐𝒓𝒓𝒆𝒖 𝒂𝒐 𝒄𝒂𝒏𝒊𝒃𝒂𝒍𝒊𝒔𝒎𝒐 𝒆 𝒅𝒆𝒗𝒐𝒓𝒐𝒖 @${vitimaEat.split('@')[0]}, 𝒂𝒑𝒓𝒐𝒗𝒆𝒊𝒕𝒂𝒏𝒅𝒐 𝒄𝒂𝒅𝒂 𝒄𝒂𝒅𝒂 𝒎𝒐𝒓𝒅𝒊𝒅𝒂 𝒇𝒆𝒓𝒐𝒛.`,
  `𝑵𝒂 𝒆𝒔𝒄𝒖𝒓𝒊𝒅ã𝒐 𝒅𝒂 𝒏𝒐𝒊𝒕𝒆, @${m.sender.split('@')[0]} 𝒂𝒑𝒆𝒕𝒊𝒕𝒐𝒔𝒂𝒎𝒆𝒏𝒕𝒆 𝒄𝒉𝒂𝒄𝒊𝒏𝒐𝒖 𝒆 𝒅𝒆𝒈𝒖𝒔𝒕𝒐𝒖 𝒅𝒂 𝒄𝒂𝒓𝒏𝒆 𝒅𝒆 @${vitimaEat.split('@')[0]}, 𝒕𝒓𝒂𝒛𝒆𝒏𝒅𝒐 𝒐 𝒉𝒐𝒓𝒓𝒐𝒓 𝒑𝒂𝒓𝒂 𝒔𝒆𝒖 𝒓𝒆𝒑𝒂𝒔𝒕𝒐.`

];
   m.react("🩸")
  
    
    if(global.cocriador.includes(who)){ 
      return terribleError('𝒑𝒓𝒊𝒏𝒄𝒆𝒔𝒂')
    }
    else if(global.criador.includes(who)){
      return terribleError('𝒑𝒓𝒊𝒏𝒄𝒊𝒑𝒆')
    }
    else if(!global.db.data.chats[m.chat].users[who].adm && !global.criador.includes(who) && !global.cocriador.includes(who))
    {     

     global.db.data.chats[m.chat].users[m.sender].trojans++
      global.db.data.chats[m.chat].users[who].morto = true 
      }
   await conn.sendMessage(m.chat, {
            video: {url:imageEat.getRandom()},
            caption: `┏━── ﹝🍽️﹞
 
${mensagemEat.getRandom()}

┗━── `, // Replace with the desired caption
            contextInfo: {
                mentionedJid: [m.sender,vitimaEat], // Replace with the recipient's WhatsApp ID(s) to mention
            },
        });
   
       

    
}

  
break
//}
// flertar {
case 'flertar':
case 'paquerar':
let  crushz= who ? who : m.quoted?.sender
if ((!text.includes('@') && !m.quoted) || (m.quoted?.sender == m.sender ) || (!text && !m.quoted)){

m.reply(`┏━── ﹝¿﹞
 
 𝑴𝒂𝒓𝒒𝒖𝒆 𝒂𝒍𝒈𝒖𝒎 𝒖𝒔𝒖𝒂𝒓𝒊𝒐 𝒅𝒆𝒔𝒕𝒆 𝒗𝒂𝒍𝒆 𝒔𝒐𝒎𝒃𝒓𝒊𝒐. . .

┗━── `)
} 
 if(global.db.data.users[m.sender].parceiro && crushz !== global.db.data.users[m.sender].parceiro ){
   
  
return conn.sendMessage(m.chat, {
            video: {url:'https://telegra.ph/file/7e3a3abde981002288888.mp4'},
            caption: `┏━── ﹝𒌐﹞
 
${infiel.getRandom()}

┗━── `, // Replace with the desired caption
            contextInfo: {
                mentionedJid: [m.sender,global.db.data.users[m.sender].parceiro], // Replace with the recipient's WhatsApp ID(s) to mention
            },
        });
        

 }
 else if(global.db.data.users[crushz].parceiro  && crushz != global.db.data.users[m.sender].parceiro){
   let casado= who || m.quoted?.sender
   
return conn.sendMessage(m.chat, {
            video: {url:'https://telegra.ph/file/7e3a3abde981002288888.mp4'},
            caption: `┏━── ﹝𒌐﹞
 
 @${casado.split('@')[0]} 𝒑𝒆𝒓𝒕𝒆𝒏𝒄𝒆 𝒂 𝒐𝒖𝒕𝒓𝒐 𝒄𝒐𝒓𝒂𝒄𝒂𝒐,𝒆 𝒋𝒖𝒓𝒐𝒖 𝒇𝒊𝒅𝒆𝒍𝒊𝒅𝒂𝒅𝒆 𝒆𝒕𝒆𝒓𝒏𝒂. 𝑽𝒂 𝒆𝒎𝒃𝒐𝒓𝒂 𝒆 𝒇𝒊𝒒𝒖𝒆 𝒍𝒐𝒏𝒈𝒆.

┗━── `, // Replace with the desired caption
            contextInfo: {
                mentionedJid: [m.sender,crushz], // Replace with the recipient's WhatsApp ID(s) to mention
            },
        });
        

 }
 
 
else if(who || m.quoted?.sender){
  console.log('test')
 
 
 const flertes = [`𝑺𝒆 𝒄𝒂𝒅𝒂 𝒑𝒆𝒏𝒔𝒂𝒎𝒆𝒏𝒕𝒐 𝒆𝒎 𝒗𝒐𝒄ê 𝒇𝒐𝒔𝒔𝒆 𝒖𝒎𝒂 𝒆𝒔𝒕𝒓𝒆𝒍𝒂, 𝒆𝒖 𝒕𝒆𝒓𝒊𝒂 𝒖𝒎 𝒄é𝒖 𝒏𝒐𝒕𝒖𝒓𝒏𝒐 𝒃𝒓𝒊𝒍𝒉𝒂𝒏𝒅𝒐 𝒄𝒐𝒏𝒔𝒕𝒂𝒏𝒕𝒆𝒎𝒆𝒏𝒕𝒆, 𝒊𝒍𝒖𝒎𝒊𝒏𝒂𝒏𝒅𝒐 𝒐𝒔 𝒎𝒆𝒖𝒔 𝒅𝒊𝒂𝒔 𝒎𝒂𝒊𝒔 𝒔𝒐𝒎𝒃𝒓𝒊𝒐𝒔.`,`𝒔𝒆 𝒃𝒆𝒍𝒆𝒛𝒂 𝒇𝒐𝒔𝒔𝒆 𝒂𝒓𝒕𝒆, 𝒗𝒐𝒄𝒆 𝒔𝒆𝒓𝒊𝒂 𝒐 𝑳𝒐𝒖𝒗𝒓𝒆 𝒊𝒏𝒕𝒆𝒊𝒓𝒐`,`𝑴𝒆 𝒄𝒉𝒂𝒎𝒂 𝒅𝒆 𝒑𝒓𝒆𝒗𝒊𝒔𝒂𝒐 𝒅𝒐 𝒕𝒆𝒎𝒑𝒐 𝒆 𝒅𝒊𝒛 𝒒𝒖𝒆 𝒕á 𝒓𝒐𝒍𝒂𝒏𝒅𝒐 𝒖𝒎 𝒄𝒍𝒊𝒎𝒂.`,`𝑼𝒎 𝒎𝒊𝒏𝒖𝒕𝒐 𝒑𝒂𝒓𝒂 𝒎𝒊𝒎 𝒔𝒂𝒐 60 𝒎𝒂𝒏𝒆𝒊𝒓𝒂𝒔 𝒅𝒆 𝒑𝒆𝒏𝒔𝒂𝒓 𝒆𝒎 𝒗𝒐𝒄𝒆`,`𝑨𝒈𝒆𝒏𝒕𝒆 𝒋𝒖𝒏𝒕𝒐 é 𝒆𝒓𝒓𝒐 𝒅𝒆 𝒑𝒐𝒓𝒕𝒖𝒈𝒖ê𝒔, 𝒎𝒂𝒔 𝒂 𝒈𝒆𝒏𝒕𝒆 𝒔𝒆𝒑𝒂𝒓𝒂𝒅𝒐 é 𝒆𝒓𝒓𝒐 𝒅𝒐 𝒅𝒆𝒔𝒕𝒊𝒏𝒐.`,`𝑽𝒐𝒄𝒆 𝒆 𝒂 𝒑𝒐𝒆𝒔𝒊𝒂 𝒒𝒖𝒆 𝒇𝒂𝒍𝒕𝒂𝒗𝒂 𝒏𝒂 𝒎𝒊𝒏𝒉𝒂 𝒗𝒊𝒅𝒂, 𝒂 𝒓𝒊𝒎𝒂 𝒑𝒆𝒓𝒇𝒆𝒊𝒕𝒂 𝒑𝒂𝒓𝒂 𝒎𝒆𝒖 𝒄𝒐𝒓𝒂𝒄𝒂𝒐 𝒆𝒏𝒄𝒂𝒏𝒕𝒂𝒅𝒐`, "𝑬𝒖 𝒑𝒐𝒅𝒆𝒓𝒊𝒂 𝒑𝒂𝒔𝒔𝒂𝒓 𝒎𝒊𝒍 𝒆 𝒖𝒎𝒂 𝒏𝒐𝒊𝒕𝒆𝒔 𝒆 𝒕𝒆 𝒐𝒍𝒉𝒂𝒓 𝒑𝒐𝒓 𝒖𝒎𝒂 𝒆𝒕𝒆𝒓𝒏𝒊𝒅𝒂𝒅𝒆, 𝒆 𝒂𝒊𝒏𝒅𝒂 𝒂𝒔𝒔𝒊𝒎 𝒏𝒂𝒐 𝒔𝒆𝒓𝒊𝒂 𝒔𝒖𝒇𝒊𝒄𝒊𝒆𝒏𝒕𝒆.",  "𝑫𝒆 𝒕𝒐𝒅𝒂𝒔 𝒂𝒔 𝒎𝒂𝒓𝒂𝒗𝒊𝒍𝒉𝒂𝒔 𝒅𝒂 𝒂𝒓𝒕𝒆 𝒎𝒐𝒅𝒆𝒓𝒏𝒂,𝒐 𝒔𝒆𝒖 𝒔𝒐𝒓𝒓𝒊𝒔𝒐 𝒔𝒖𝒑𝒆𝒓𝒂 𝒕𝒐𝒅𝒂𝒔 𝒆𝒍𝒂𝒔. 𝑬𝒖 𝒑𝒐𝒅𝒆𝒓𝒊𝒂 𝒂𝒕𝒓𝒂𝒗𝒆𝒔𝒔𝒂𝒓 𝒐𝒄𝒆𝒂𝒏𝒐𝒔 𝒂𝒑𝒆𝒏𝒂𝒔 𝒑𝒂𝒓𝒂 𝒗𝒆𝒓 𝒐 𝒔𝒆𝒖 𝒔𝒐𝒓𝒓𝒊𝒔𝒐 𝒂𝒑𝒂𝒊𝒙𝒐𝒏𝒂𝒏𝒕𝒆.", "𝑺𝒆𝒖𝒔 𝒐𝒍𝒉𝒐𝒔 𝒔𝒂𝒐 𝒄𝒐𝒎𝒐 𝒋𝒂𝒏𝒆𝒍𝒂𝒔 𝒑𝒂𝒓𝒂 𝒖𝒎 𝒎𝒖𝒏𝒅𝒐 𝒒𝒖𝒆 𝒆𝒖 𝒒𝒖𝒆𝒓𝒐 𝒆𝒙𝒑𝒍𝒐𝒓𝒂𝒓.", "𝑽𝒐𝒄𝒆 𝒆 𝒂 𝒑𝒐𝒆𝒔𝒊𝒂 𝒒𝒖𝒆 𝒎𝒆𝒖 𝒄𝒐𝒓𝒂𝒄𝒂𝒐 𝒓𝒆𝒄𝒊𝒕𝒂 𝒔𝒊𝒍𝒆𝒏𝒄𝒊𝒐𝒔𝒂𝒎𝒆𝒏𝒕𝒆, 𝒄𝒐𝒎 𝒐𝒔 𝒗𝒆𝒓𝒔𝒐𝒔 𝒎𝒂𝒊𝒔 𝒃𝒆𝒍𝒐𝒔 𝒒𝒖𝒆 𝒏𝒂𝒐 𝒎𝒆 𝒄𝒂𝒏𝒔𝒐 𝒅𝒆 𝒍𝒆𝒓", "𝑽𝒐𝒄ê 𝒆 𝒐 𝒅𝒆𝒔𝒆𝒋𝒐 𝒒𝒖𝒆 𝒆𝒖 𝒇𝒂ç𝒐 𝒂𝒐 𝒗𝒆𝒓 𝒖𝒎𝒂 𝒆𝒔𝒕𝒓𝒆𝒍𝒂 𝒄𝒂𝒅𝒆𝒏𝒕𝒆. 𝑷𝒐𝒅𝒆𝒓 𝒂𝒅𝒎𝒊𝒓𝒂𝒓 𝒕𝒐𝒅𝒂 𝒏𝒐𝒊𝒕𝒆 𝒐 𝒔𝒆𝒖 𝒔𝒐𝒓𝒓𝒊𝒔𝒐 𝒒𝒖𝒆 𝒏ã𝒐 𝒔𝒂𝒊 𝒅𝒆 𝒎𝒊𝒏𝒉𝒂 𝒎𝒆𝒏𝒕𝒆", "𝑺𝒆 𝒆𝒖 𝒇𝒐𝒔𝒔𝒆 𝒖𝒎 𝒈𝒂𝒕𝒐, 𝒈𝒂𝒔𝒕𝒂𝒓𝒊𝒂 𝒕𝒐𝒅𝒂𝒔 𝒂𝒔 𝒎𝒊𝒏𝒉𝒂𝒔 𝒗𝒊𝒅𝒂𝒔 𝒔𝒐 𝒑𝒂𝒓𝒂 𝒆𝒔𝒕𝒂𝒓 𝒑𝒆𝒓𝒕𝒐 𝒅𝒆 𝒗𝒐𝒄𝒆.", "𝑺𝒆 𝒗𝒐𝒄ê 𝒇𝒐𝒔𝒔𝒆 𝒖𝒎𝒂 𝒑𝒂𝒈𝒊𝒏𝒂 𝒅𝒆 𝒖𝒎 𝒍𝒊𝒗𝒓𝒐, 𝒔𝒆𝒓𝒊𝒂 𝒂 𝒒𝒖𝒆 𝒆𝒖 𝒏𝒖𝒏𝒄𝒂 𝒅𝒆𝒊𝒙𝒂𝒓𝒊𝒂 𝒅𝒆 𝒍𝒆𝒓.", "𝑽𝒐𝒄𝒆 𝒆 𝒂 𝒎𝒆𝒍𝒐𝒅𝒊𝒂 𝒒𝒖𝒆 𝒏𝒂𝒐 𝒄𝒐𝒏𝒔𝒊𝒈𝒐 𝒕𝒊𝒓𝒂𝒓 𝒅𝒂 𝒄𝒂𝒃𝒆ç𝒂, 𝒂𝒒𝒖𝒆𝒍𝒂 𝒒𝒖𝒆 𝒎𝒆𝒖 𝒄𝒐𝒓𝒂𝒄𝒂𝒐 𝒊𝒏𝒔𝒊𝒔𝒕𝒆 𝒆𝒎 𝒕𝒐𝒄𝒂𝒓 𝒄𝒂𝒅𝒂 𝒗𝒆𝒛 𝒒𝒖𝒆 𝒑𝒆𝒏𝒔𝒐 𝒆𝒎 𝒗𝒐𝒄𝒆.", "𝑪𝒂𝒅𝒂 𝒎𝒐𝒎𝒆𝒏𝒕𝒐 𝒂𝒐 𝒔𝒆𝒖 𝒍𝒂𝒅𝒐 é 𝒄𝒐𝒎𝒐 𝒖𝒎𝒂 𝒑𝒂𝒈𝒊𝒏𝒂 𝒅𝒆 𝒖𝒎 𝒍𝒊𝒗𝒓𝒐 𝒒𝒖𝒆 𝒆𝒖 𝒏𝒖𝒏𝒄𝒂 𝒒𝒖𝒆𝒓𝒐 𝒒𝒖𝒆 𝒂𝒄𝒂𝒃𝒆. 𝑽𝒐𝒄𝒆 𝒆 𝒂 𝒎𝒊𝒏𝒉𝒂 𝒉𝒊𝒔𝒕ó𝒓𝒊𝒂 𝒇𝒂𝒗𝒐𝒓𝒊𝒕𝒂.",]
   m.react("🖤")
   console.log('testando admin')




    
   
   await conn.sendMessage(m.chat, {
            text: `┏━〘🌙〙
 @${crushz.split('@')[0]} 🖤
 
${flertes.getRandom()}

┗━ `, // Replace with the desired caption
            contextInfo: {
                mentionedJid: [m.sender,crushz], // Replace with the recipient's WhatsApp ID(s) to mention
            },
        });
   
       

    
}

  
break
//}
// casar {
case 'pedircasamento':
case 'casar':
  let  crush= who ? who : m.quoted?.sender
  
  
 let imageCasar = ['https://telegra.ph/file/3ca2a78fa554fa09301d7.mp4','https://telegra.ph/file/d80d804934c9d09b33f0e.mp4','https://telegra.ph/file/bad45086791cca658d648.mp4']
console.log(` 🗡️: ${who || m.quoted?.sender}`)


if ((!text.includes('@') && !m.quoted) || (m.quoted?.sender == m.sender ) || (!text && !m.quoted)){

return m.reply(`┏━── ﹝¿﹞
 
 𝑴𝒂𝒓𝒒𝒖𝒆 𝒂𝒍𝒈𝒖𝒎 𝒖𝒔𝒖𝒂𝒓𝒊𝒐 𝒅𝒆𝒔𝒕𝒆 𝒗𝒂𝒍𝒆 𝒔𝒐𝒎𝒃𝒓𝒊𝒐. . .

┗━── `)
} 
let mensagemPedido = [
  `@${crush.split('@')[0]}...
  𝑵𝒆𝒔𝒕𝒂 𝒆𝒇𝒆́𝒎𝒆𝒓𝒂 𝒆 𝒃𝒆𝒍𝒂 𝒏𝒐𝒊𝒕𝒆, @${m.sender.split('@')[0]} 𝒄𝒐𝒎 𝒐 𝒄𝒐𝒓𝒂𝒄̧𝒂̃𝒐 𝒂𝒄𝒆𝒍𝒆𝒓𝒂𝒅𝒐, 𝒂𝒋𝒐𝒆𝒍𝒉𝒐𝒖-𝒔𝒆 𝒅𝒊𝒂𝒏𝒕𝒆 𝒅𝒆 𝒕𝒊 𝒆 𝒕𝒆 𝒇𝒆𝒛 𝒖𝒎𝒂 𝒑𝒓𝒐𝒑𝒐𝒔𝒕𝒂 𝒅𝒆 𝒄𝒂𝒔𝒂𝒎𝒆𝒏𝒕𝒐.
  
  𝑨 𝒍𝒖𝒂 𝒃𝒓𝒊𝒍𝒉𝒂 𝒄𝒐𝒎𝒐 𝒕𝒆𝒔𝒕𝒆𝒎𝒖𝒏𝒉𝒂 𝒆 𝒐 𝒗𝒆𝒏𝒕𝒐 𝒖𝒊𝒗𝒂 𝒂𝒈𝒖𝒂𝒓𝒅𝒂𝒏𝒅𝒐 𝒔𝒖𝒂 𝒓𝒆𝒔𝒑𝒐𝒔𝒕𝒂. 
  𝑨 𝒆𝒔𝒄𝒐𝒍𝒉𝒂 𝒆́ 𝒕𝒖𝒂.`,

  `@${crush.split('@')[0]}...
  𝑵𝒆𝒔𝒕𝒆 𝒊𝒏𝒔𝒕𝒂𝒏𝒕𝒆 𝒎𝒂́𝒈𝒊𝒄𝒐 𝒔𝒐𝒃 𝒂𝒔 𝒆𝒔𝒕𝒓𝒆𝒍𝒂𝒔, @${m.sender.split('@')[0]} 𝒔𝒆 𝒂𝒋𝒐𝒆𝒍𝒉𝒐𝒖 𝒅𝒊𝒂𝒏𝒕𝒆 𝒅𝒆 𝒕𝒊 𝒄𝒐𝒎 𝒐𝒔 𝒐𝒍𝒉𝒐𝒔 𝒓𝒆𝒍𝒖𝒛𝒊𝒏𝒅𝒐𝒔 𝒆 𝒖𝒎 𝒂𝒎𝒐𝒓 𝒊𝒏𝒇𝒊𝒏𝒊𝒕𝒐 𝒏𝒐 𝒄𝒐𝒓𝒂𝒄̧𝒂̃𝒐. 
 𝑬𝒔𝒕𝒆 𝒆́ 𝒐 𝒎𝒐𝒎𝒆𝒏𝒕𝒐 𝒅𝒆 𝒓𝒆𝒔𝒑𝒐𝒏𝒅𝒆𝒓 𝒂 𝒔𝒖𝒂 𝒑𝒓𝒐𝒑𝒐𝒔𝒕𝒂 𝒅𝒆 𝒄𝒂𝒔𝒂𝒎𝒆𝒏𝒕𝒐.`,

  `@${crush.split('@')[0]}...
  𝑪𝒐𝒎 𝒂 𝒍𝒖𝒂 𝒊𝒍𝒖𝒎𝒊𝒏𝒂𝒏𝒅𝒐 𝒐 𝒄𝒆́𝒖 𝒏𝒐𝒕𝒖𝒓𝒏𝒐, @${m.sender.split('@')[0]} 𝒔𝒆 𝒂𝒋𝒐𝒆𝒍𝒉𝒐𝒖 𝒅𝒊𝒂𝒏𝒕𝒆 𝒅𝒆 𝒕𝒊 𝒆 𝒕𝒆 𝒑𝒓𝒐𝒑𝒐̂𝒔 𝒖𝒎𝒂 𝒖𝒏𝒊𝒂̃𝒐 𝒆𝒕𝒆𝒓𝒏𝒂.
 
  𝑶𝒔 𝒔𝒆𝒖𝒔 𝒐𝒍𝒉𝒐𝒔 𝒓𝒆𝒇𝒍𝒆𝒕𝒆𝒎 𝒂 𝒑𝒖𝒓𝒆𝒛𝒂 𝒅𝒆 𝒔𝒆𝒖 𝒂𝒎𝒐𝒓 𝒆 𝒂 𝒏𝒐𝒊𝒕𝒆 𝒂𝒈𝒖𝒂𝒓𝒅𝒂 𝒕𝒖𝒂 𝒅𝒆𝒄𝒊𝒔𝒂̃𝒐...`,

  `@${crush.split('@')[0]}...
 𝑬𝒏𝒗𝒐𝒍𝒕𝒐 𝒆𝒎 𝒖𝒎𝒂 𝒂𝒖𝒓𝒂 𝒅𝒆 𝒆𝒔𝒄𝒖𝒓𝒊𝒅𝒂̃𝒐 𝒆 𝒎𝒊𝒔𝒕𝒆𝒓𝒊𝒐, @${m.sender.split('@')[0]} 𝒄𝒐𝒎 𝒐 𝒄𝒐𝒓𝒂𝒄̧𝒂̃𝒐 𝒕𝒓𝒆𝒎𝒖𝒍𝒐, 𝒑𝒆𝒅𝒊𝒖-𝒕𝒆 𝒆𝒎 𝒄𝒂𝒔𝒂𝒎𝒆𝒏𝒕𝒐.
 
 𝑨𝒐 𝒔𝒐𝒎 𝒅𝒐 𝒗𝒆𝒏𝒕𝒐 𝒔𝒖𝒔𝒔𝒖𝒓𝒓𝒂𝒏𝒅𝒐, 𝒂 𝒏𝒐𝒊𝒕𝒆 𝒂𝒈𝒖𝒂𝒓𝒅𝒂 𝒕𝒖𝒂 𝒅𝒆𝒄𝒊𝒔𝒂̃𝒐... `]

 if(global.db.data.users[m.sender].parceiro && crush !== global.db.data.users[m.sender].parceiro){
  
return conn.sendMessage(m.chat, {
            video: {url:'https://telegra.ph/file/7e3a3abde981002288888.mp4'},
            caption: `┏━── ﹝𒌐﹞
 
${infiel.getRandom()}

┗━── `, // Replace with the desired caption
            contextInfo: {
                mentionedJid: [m.sender,global.db.data.users[m.sender].parceiro], // Replace with the recipient's WhatsApp ID(s) to mention
            },
        });
        

 }
 else if(global.db.data.users[crush].parceiro  && crush != global.db.data.users[m.sender].parceiro){
  
   let casado= who || m.quoted?.sender
  


return conn.sendMessage(m.chat, {
            video: {url:'https://telegra.ph/file/7e3a3abde981002288888.mp4'},
            caption: `┏━── ﹝𒌐﹞
 
 @${casado.split('@')[0]} 𝒑𝒆𝒓𝒕𝒆𝒏𝒄𝒆 𝒂 𝒐𝒖𝒕𝒓𝒐 𝒄𝒐𝒓𝒂𝒄𝒂𝒐,𝒆 𝒋𝒖𝒓𝒐𝒖 𝒇𝒊𝒅𝒆𝒍𝒊𝒅𝒂𝒅𝒆 𝒆𝒕𝒆𝒓𝒏𝒂. 𝑽𝒂 𝒆𝒎𝒃𝒐𝒓𝒂 𝒆 𝒇𝒊𝒒𝒖𝒆 𝒍𝒐𝒏𝒈𝒆.
 
┗━── `, // Replace with the desired caption
            contextInfo: {
                mentionedJid: [m.sender,crush] // Replace with the recipient's ⅝4⅝45WhatsApp ID(s) to mention
            },
        });
        

 }
else if(global.db.data.chats[m.chat].users[m.quoted.sender].rings>=1 && ( who ||
m.quoted?.sender)){
  console.log('test')
 
 
if (typeof global.db.data.chats[m.chat].users[m.sender].rings === 'undefined') {
  global.db.data.chats[m.chat].users[m.sender].rings = 0;
}

console.log('rings :   ' + global.db.data.chats[m.chat].users[m.sender].rings)

if(global.db.data.chats[m.chat].users[m.sender].rings<1) {
  return m.reply(`⎔⎓──────────────
┃ 𒈒 𝑽𝒐𝒄𝒆 𝒏𝒂𝒐 𝒑𝒐𝒔𝒔𝒖𝒊 𝒖𝒎𝒂 𝒂𝒍𝒊𝒂𝒏𝒄𝒂.
𝑪𝒐𝒎𝒐 𝒑𝒓𝒆𝒕𝒆𝒏𝒅𝒆 𝒔𝒆𝒍𝒂𝒓 𝒔𝒆𝒖 𝒅𝒆𝒔𝒕𝒊𝒏𝒐 𝒄𝒐𝒎
@${crush.split('@')[0]}?
╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𝑨𝒅𝒒𝒖𝒊𝒓𝒂 𝒖𝒎𝒂 𝒂𝒍𝒊𝒂𝒏𝒄𝒂
𝒏𝒂 𝒍𝒐𝒋𝒂 𝒅𝒐 𝑮𝒂𝒕𝒐 𝑷𝒓𝒆𝒕𝒐 𝒖𝒔𝒂𝒏𝒅𝒐 *.loja*
╰─...⎔⎓──────────`,who)
}
 
   m.react("💍")
  
  
  let message = await conn.sendMessage(m.chat, {
            video: {url:imageCasar.getRandom()},
            caption: `┏━── ﹝🖤﹞
 
 ${mensagemPedido.getRandom()}

𝗔𝗰𝗲𝗶𝘁𝗮𝘀 𝗰𝗮𝘀𝗮𝗿 𝗰𝗼𝗺 @${m.sender.split('@')[0]}?
𝚁𝚎𝚜𝚙𝚘𝚗𝚍𝚊 𝚎𝚜𝚝𝚊 𝚖𝚎𝚗𝚜𝚊𝚐𝚎𝚖 𝚌𝚘𝚖 𝚂𝚒𝚖 𝚘𝚞 𝚗ã𝚘!
┗━── `, // Replace with the desired caption
            contextInfo: {
                mentionedJid: [m.sender,crush], // Replace with the recipient's WhatsApp ID(s) to mention
            },
        });
   global.db.data.chats[m.chat].users[crush].pedidoId = message.key.id
   global.db.data.chats[m.chat].users[crush].casorio = [m.sender, crush]
   
       

    
}

  
break
//}
// divorciar {
case 'pedirdivorcio':
case 'divorciar':

 
if (!global.db.data.users[m.sender].parceiro){
return m.reply(`┏━── ﹝¿﹞
 
𝑽𝒐𝒄𝒆 𝒏𝒂𝒐 𝒆𝒔𝒕𝒂 𝒖𝒏𝒊𝒅𝒐 𝒂 𝒏𝒊𝒏𝒈𝒖𝒆𝒎 𝒑𝒂𝒓𝒂 𝒔𝒐𝒍𝒊𝒄𝒊𝒕𝒂𝒓 𝒅𝒊𝒗𝒐𝒓𝒄𝒊𝒐... 𝒕𝒂𝒐 𝒔𝒐𝒍𝒊𝒕𝒂𝒓𝒊𝒐 𝒒𝒖𝒂𝒏𝒕𝒐 𝒖𝒎𝒂 𝒔𝒐𝒎𝒃𝒓𝒂 𝒑𝒆𝒓𝒅𝒊𝒅𝒂 𝒏𝒂 𝒗𝒂𝒔𝒕𝒊𝒅𝒂𝒐 𝒅𝒐 𝒗𝒂𝒛𝒊𝒐.

┗━── `)
} 

  console.log('test')
 
 
 
   m.react("📜")
  
  
  let messahge = await conn.sendMessage(m.chat, {
            text:`┏━── ﹝✒️﹞
 
𝑷𝒂𝒓𝒂 𝒔𝒆𝒈𝒖𝒊𝒓 𝒂𝒅𝒊𝒂𝒏𝒕𝒆 𝒄𝒐𝒎 𝒐𝒔 𝒕𝒓𝒂𝒎𝒊𝒕𝒆𝒔 𝒏𝒐 𝒄𝒂𝒓𝒕𝒐𝒓𝒊𝒐 𝒆 𝒅𝒂𝒓 𝒊𝒏𝒊𝒄𝒊𝒐 𝒂𝒐 𝒑𝒓𝒐𝒄𝒆𝒔𝒔𝒐 𝒅𝒆 𝒅𝒊𝒗𝒐𝒓𝒄𝒊𝒐, 𝒔𝒆𝒓á 𝒏𝒆𝒄𝒆𝒔𝒔á𝒓𝒊𝒐 𝒐 𝒑𝒂𝒈𝒂𝒎𝒆𝒏𝒕𝒐 𝒅𝒆 𝒖𝒎𝒂 𝒕𝒂𝒙𝒂 𝒅𝒆 415 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ.
𝑫𝒆𝒔𝒆𝒋𝒂 𝒄𝒐𝒏𝒕𝒊𝒏𝒖𝒂𝒓 ?

𝚁𝚎𝚜𝚙𝚘𝚗𝚍𝚊 𝚎𝚜𝚝𝚊 𝚖𝚎𝚗𝚜𝚊𝚐𝚎𝚖 𝚌𝚘𝚖 𝚂𝚒𝚖 𝚘𝚞 𝚗ã𝚘!
┗━── `, // Replace with the desired caption
            contextInfo: {
                mentionedJid: [m.sender], // Replace with the recipient's WhatsApp ID(s) to mention
            },
        });
   global.db.data.chats[m.chat].users[m.sender]. divorcioId = messahge.key.id
  
   
       

    


  
break
//}
// reviver {
case 'ressucitar':
case 'reviver':
case 'eletrocutar':
 let imageVictor = ['https://telegra.ph/file/dfebc4d99443e1312ab16.mp4','https://telegra.ph/file/f10019addea5be69cd05f.mp4','https://telegra.ph/file/4b722263bea7af6751921.mp4','https://telegra.ph/file/4e85d1d08d9e7d5b49a88.mp4']
console.log(` 🗡️: ${who || m.quoted?.sender}`)
if ((!text.includes('@') && !m.quoted) || (m.quoted?.sender == m.sender ) || (!text && !m.quoted)){

m.reply(`┏━── ﹝¿﹞
 
 𝑴𝒂𝒓𝒒𝒖𝒆 𝒂𝒍𝒈𝒖𝒎 𝒖𝒔𝒖𝒂𝒓𝒊𝒐 𝒅𝒆𝒔𝒕𝒆 𝒗𝒂𝒍𝒆 𝒔𝒐𝒎𝒃𝒓𝒊𝒐. . .

┗━── `)
} 

else if(who || m.quoted?.sender){
  console.log('test')
 let  vitimaVictor =  who ? who : m.quoted?.sender
 const mensagemVictor = [
  `𝑵𝒐 𝒃𝒓𝒆𝒖 𝒔𝒊𝒍𝒆𝒏𝒄𝒊𝒐𝒔𝒐 𝒅𝒂 𝒏𝒐𝒊𝒕𝒆, @${m.sender.split("@")[0]} 𝒍𝒊𝒈𝒂 𝒔𝒖𝒂𝒔 𝒎𝒂𝒒𝒖𝒊𝒏𝒂𝒔 𝒆 𝒍𝒊𝒃𝒆𝒓𝒂 𝒖𝒎𝒂 𝒓𝒂𝒋𝒂𝒅𝒂 𝒅𝒆 𝒆𝒍𝒆𝒕𝒓𝒊𝒄𝒊𝒅𝒂𝒅𝒆 𝒆𝒎 𝒌𝑽 𝒏𝒐 𝒄𝒐𝒓𝒑𝒐 𝒅𝒆 @${vitimaVictor.split('@')[0]} 𝒑𝒂𝒓𝒂 𝒓𝒆𝒔𝒔𝒖𝒔𝒄𝒊𝒕𝒂-𝒍𝒐, 𝒆 𝒒𝒖𝒂𝒏𝒅𝒐 𝒆𝒔𝒕𝒆 𝒔𝒆 𝒎𝒆𝒙𝒆, 𝒆𝒍𝒆 𝒈𝒓𝒊𝒕𝒂: 𝑬𝑺𝑻𝑨 𝑽𝑰𝑽𝑶!!`,
  `𝑪𝒐𝒎 𝒖𝒎𝒂 𝒔𝒆𝒓𝒊𝒆 𝒅𝒆 𝒓𝒂𝒊𝒐𝒔 𝒃𝒓𝒊𝒍𝒉𝒂𝒏𝒅𝒐 𝒏𝒂 𝒏𝒐𝒊𝒕𝒆 𝒆𝒔𝒄𝒖𝒓𝒂, @${m.sender.split("@")[0]} 𝒊𝒏𝒋𝒆𝒕𝒂 𝒗𝒊𝒅𝒂 𝒏𝒐 𝒄𝒐𝒓𝒑𝒐 𝒅𝒆 @${vitimaVictor.split('@')[0]}, 𝒆 𝒂𝒐 𝒗𝒆𝒓 𝒔𝒖𝒂 𝒄𝒓𝒊𝒂𝒄𝒂𝒐 𝒔𝒆 𝒎𝒐𝒗𝒆𝒓, 𝒆𝒍𝒆 𝒆𝒙𝒄𝒍𝒂𝒎𝒂 𝑬𝑺𝑻𝑨 𝑽𝑰𝑽𝑶!!`,
  `𝑵𝒐 𝒍𝒂𝒃𝒐𝒓𝒂𝒕𝒐𝒓𝒊𝒐 𝒄𝒐𝒃𝒆𝒓𝒕𝒐 𝒑𝒐𝒓 𝒔𝒐𝒎𝒃𝒓𝒂𝒔, @${m.sender.split("@")[0]} 𝒂𝒄𝒊𝒐𝒏𝒂 𝒔𝒖𝒂𝒔 𝒎𝒂𝒒𝒖𝒊𝒏𝒂𝒔 𝒆 𝒓𝒆𝒔𝒔𝒖𝒔𝒄𝒊𝒕𝒂 @${vitimaVictor.split('@')[0]} 𝒄𝒐𝒎 𝒆𝒍𝒆𝒕𝒓𝒊𝒄𝒊𝒅𝒂𝒅𝒆, 𝒓𝒆𝒋𝒖𝒃𝒊𝒍𝒂𝒏𝒅𝒐 𝒔𝒆𝒖 𝒄𝒐𝒓𝒂𝒄𝒂𝒐 𝒂𝒐 𝒗𝒆𝒓 𝒂 𝒗𝒊𝒅𝒂 𝒓𝒆𝒕𝒐𝒓𝒏𝒂𝒓, 𝒆𝒙𝒄𝒍𝒂𝒎𝒂: 𝑬𝑺𝑻𝑨 𝑽𝑰𝑽𝑶!!`,
  `𝑵𝒂 𝒔𝒆𝒍𝒗𝒂 𝒅𝒂𝒔 𝒎𝒂𝒒𝒖𝒊𝒏𝒂𝒔 𝒆 𝒄𝒂𝒃𝒐𝒔, @${m.sender.split("@")[0]} 𝒆𝒎𝒑𝒓𝒆𝒈𝒂 𝒖𝒎𝒂 𝒅𝒐𝒔𝒆 𝒎𝒂𝒔𝒔𝒊𝒗𝒂 𝒅𝒆 𝒆𝒍𝒆𝒕𝒓𝒊𝒄𝒊𝒅𝒂𝒅𝒆 𝒆𝒎 @${vitimaVictor.split('@')[0]}, 𝒆 𝒒𝒖𝒂𝒏𝒅𝒐 𝒆𝒔𝒕𝒆 𝒂𝒄𝒐𝒓𝒅𝒂, 𝒆𝒍𝒆 𝒄𝒍𝒂𝒎𝒂 𝒆𝒎 𝒋𝒖𝒃𝒊𝒍𝒐: 𝑬𝑺𝑻𝑨 𝑽𝑰𝑽𝑶!!`,
  `𝑪𝒐𝒎 𝒆𝒍𝒆𝒕𝒓𝒐𝒅𝒐𝒔 𝒆 𝒄𝒂𝒃𝒐𝒔 𝒆𝒎 𝒓𝒆𝒅𝒐𝒓, @${m.sender.split("@")[0]} 𝒅𝒆𝒔𝒑𝒆𝒓𝒕𝒂 @${vitimaVictor.split('@')[0]} 𝒅𝒐 𝒔𝒆𝒖 𝒔𝒐𝒏𝒐 𝒆𝒕𝒆𝒓𝒏𝒐, 𝒓𝒆𝒋𝒖𝒃𝒊𝒍𝒂𝒏𝒅𝒐-𝒔𝒆 𝒂𝒐 𝒗𝒆𝒓 𝒒𝒖𝒆 𝒂 𝒗𝒊𝒅𝒂 𝒕𝒐𝒓𝒏𝒐𝒖 𝒂 𝒑𝒖𝒍𝒔𝒂𝒓, 𝒆𝒙𝒄𝒍𝒂𝒎𝒂: 𝑬𝑺𝑻𝑨 𝑽𝑰𝑽𝑶!!`
];
   m.react("⚗️")
  
   global.db.data.chats[m.chat].users[vitimaVictor].morto = false
   if (typeof global.db.data.chats[m.chat].users[m.sender].artifacts=== 'undefined') {
  global.db.data.chats[m.chat].users[m.sender].artifacts = 0;
}
if(global.db.data.chats[m.chat].users[m.sender].artifacts<1 &&  !isOwner) {
  return m.reply(`⎔⎓──────────────
┃ 𒈒 𝑽𝒐𝒄𝒆 𝒏𝒂𝒐 𝒑𝒐𝒔𝒔𝒖𝒊 𝒐𝒔 𝒅𝒐𝒏𝒔 𝒅𝒆 𝑭𝒓𝒂𝒏𝒌𝒆𝒏𝒔𝒕𝒆𝒊𝒏 𝒑𝒂𝒓𝒂 𝒓𝒆𝒔𝒔𝒖𝒄𝒊𝒕𝒂𝒓 𝒆𝒔𝒕𝒆 𝒅𝒆𝒇𝒖𝒏𝒕𝒐. 
╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𝑪𝒐𝒎𝒑𝒓𝒆 𝒂𝒔 𝒇𝒆𝒓𝒓𝒂𝒎𝒆𝒏𝒕𝒂𝒔 𝒏𝒆𝒄𝒆𝒔𝒔𝒂𝒓𝒊𝒂𝒔 𝒏𝒂 𝒍𝒐𝒋𝒂 𝒅𝒐 𝑮𝒂𝒕𝒐 𝑷𝒓𝒆𝒕𝒐 𝒖𝒔𝒂𝒏𝒅𝒐 *.loja*
╰─...⎔⎓──────────`)
}
 else{
  global.db.data.chats[m.chat].users[m.sender].artifacts-=1
    
    m.react('🪬')
    
   await conn.sendMessage(m.chat, {
            video: {url:imageVictor.getRandom()},
            caption: `┏━── ﹝⚡﹞
 
${mensagemVictor.getRandom()}

┗━── `, // Replace with the desired caption
            contextInfo: {
                mentionedJid: [m.sender,vitimaVictor], // Replace with the recipient's WhatsApp ID(s) to mention
            },
        });
 }
       

    
}

  
break
//}
// morrer {
case 'morrer':
case 'desviver':
case 'suicidar':
 let imageDie = ['https://telegra.ph/file/01b63c6f104b3199e1f33.mp4','https://telegra.ph/file/d9912777d2cfd3b2123bc.mp4','https://telegra.ph/file/99f7e1c43ab8218c23d7d.mp4']

const msgDeath= [
  `@${m.sender.split('@')[0]} 𝒄𝒂𝒊𝒖 𝒏𝒐 𝒂𝒃𝒊𝒔𝒎𝒐 𝒆 𝒎𝒐𝒓𝒓𝒆𝒖, 𝒅𝒆𝒊𝒙𝒂𝒏𝒅𝒐 𝒖𝒎 𝒓𝒂𝒔𝒕𝒓𝒐 𝒅𝒆 𝒅𝒆𝒔𝒆𝒔𝒑𝒆𝒓𝒐 𝒏𝒂 𝒆𝒔𝒄𝒖𝒓𝒊𝒅ã𝒐.`,
  `𝑪𝒐𝒎 𝒖𝒎 𝒈𝒓𝒊𝒕𝒐 𝒎𝒖𝒅𝒐, @${m.sender.split('@')[0]} 𝒂𝒃𝒓𝒂ç𝒐𝒖 𝒂 𝒎𝒐𝒓𝒕𝒆, 𝒆𝒏𝒕𝒓𝒆𝒈𝒂𝒏𝒅𝒐-𝒔𝒆 𝒂𝒐𝒔 𝒂𝒓𝒄𝒂𝒏𝒋𝒐𝒔 𝒅𝒂 𝒏𝒐𝒊𝒕𝒆.`,
  `𝑶 𝒖́𝒍𝒕𝒊𝒎𝒐 𝒔𝒐𝒑𝒓𝒐 𝒅𝒆 @${m.sender.split('@')[0]} 𝒔𝒆 𝒆𝒔𝒗𝒂𝒏𝒆𝒄𝒆𝒖 𝒏𝒂 𝒏𝒆𝒃𝒍𝒊𝒏𝒂 𝒅𝒂 𝒎𝒐𝒓𝒕𝒆, 𝒖𝒎 𝒔𝒖𝒔𝒔𝒖𝒓𝒓𝒐 𝒅𝒐 𝒗𝒆𝒊𝒍𝒐 𝒅𝒂𝒔 𝒂𝒏𝒈ú𝒔𝒕𝒊𝒂𝒔.`,
  `𝑵𝒂 𝒏𝒐𝒊𝒕𝒆 𝒆𝒕𝒆𝒓𝒏𝒂, @${m.sender.split('@')[0]} 𝒑𝒂𝒓𝒕𝒊𝒖 𝒅𝒆𝒔𝒔𝒂 𝒗𝒊𝒅𝒂, 𝒅𝒆𝒊𝒙𝒂𝒏𝒅𝒐 𝒖𝒎 𝒍𝒆𝒈𝒂𝒅𝒐 𝒅𝒆 𝒔𝒐𝒎𝒃𝒓𝒂𝒔.`,
  `𝑪𝒐𝒎 𝒖𝒎 𝒄𝒐𝒓𝒂çã𝒐 𝒄𝒉𝒆𝒊𝒐 𝒅𝒆 𝒂𝒇𝒍𝒊çã𝒐, @${m.sender.split('@')[0]} 𝒂𝒃𝒓𝒂ç𝒐𝒖 𝒂 𝒎𝒐𝒓𝒕𝒆, 𝒅𝒆𝒊𝒙𝒂𝒏𝒅𝒐 𝒆𝒔𝒕𝒆 𝒎𝒖𝒏𝒅𝒐 𝒑𝒂𝒓𝒂 𝒕𝒓á𝒔 𝒆 𝒆𝒏𝒄𝒐𝒏𝒕𝒓𝒂𝒏𝒅𝒐 𝒑𝒂𝒛 𝒏𝒂 𝒆𝒔𝒄𝒖𝒓𝒊𝒅ã𝒐.`
];

   m.react("🪦")
  
   
   await conn.sendMessage(m.chat, {
            video: {url:imageDie.getRandom()},
            caption: `┏━── ﹝♱﹞
 
${msgDeath.getRandom()}

┗━── `, // Replace with the desired caption
            contextInfo: {
                mentionedJid: [m.sender], // Replace with the recipient's WhatsApp ID(s) to mention
            },
        });
   
   global.db.data.chats[m.chat].users[m.sender].morto = true
     if(!global.db.data.chats[m.chat].users[m.sender].morto){
    global.db.data.chats[m.chat].users[m.sender].morto= true
  }
       

    


  
break
//}
// cacar {
case 'perseguir':
case 'cacar':
case 'caçar':
 let imageRun = ['https://telegra.ph/file/34b7ebad9133d76d6afec.mp4','https://telegra.ph/file/e2a086b8f8f7590e2b9e8.mp4','https://telegra.ph/file/7a413c46834c01a885830.mp4','https://telegra.ph/file/71a2e85837538f52bdcca.mp4']
console.log(` 🗡️: ${who || m.quoted?.sender}`)
if ((!text.includes('@') && !m.quoted) || (m.quoted?.sender == m.sender ) || (!text && !m.quoted)){

m.reply(`┏━── ﹝¿﹞
 
 𝑴𝒂𝒓𝒒𝒖𝒆 𝒂𝒍𝒈𝒖𝒎 𝒖𝒔𝒖𝒂𝒓𝒊𝒐 𝒅𝒆𝒔𝒕𝒆 𝒗𝒂𝒍𝒆 𝒔𝒐𝒎𝒃𝒓𝒊𝒐. . .

┗━── `)
} 

else if(who || m.quoted?.sender){
  console.log('test')
 let  vitimaRun= who ? who : m.quoted?.sender
 
 const mensagemRun = [
  `@${m.sender.split('@')[0]} 𝒄𝒐𝒎𝒆𝒄̧𝒐𝒖 𝒖𝒎𝒂 𝒄𝒂𝒄̧𝒂𝒅𝒂 𝒊𝒎𝒑𝒍𝒂𝒄𝒂́𝒗𝒆𝒍 𝒂 @${vitimaRun.split('@')[0]}, 𝒄𝒐𝒓𝒓𝒂 𝒆𝒏𝒒𝒖𝒂𝒏𝒕𝒐 𝒑𝒐𝒅𝒆, 𝒑𝒐𝒊𝒔 𝒆𝒍𝒆 𝒊𝒓𝒂́ 𝒍𝒊𝒃𝒆𝒓𝒂𝒓 𝒕𝒐𝒅𝒂 𝒔𝒖𝒂 𝒆𝒔𝒄𝒖𝒓𝒊𝒅ã𝒐 𝒆 𝒇𝒆𝒔𝒕𝒆𝒋𝒂𝒓 𝒆𝒎 𝒔𝒆𝒖 𝒔𝒂𝒏𝒈𝒖𝒆.`,
  `𝑷𝒆𝒍𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔 𝒅𝒂 𝒏𝒐𝒊𝒕𝒆, @${m.sender.split('@')[0]} 𝒄𝒐𝒎𝒆𝒄̧𝒐𝒖 𝒂 𝒄𝒂ç𝒂𝒓 @${vitimaRun.split('@')[0]}, 𝒄𝒐𝒎𝒐 𝒖𝒎 𝒑𝒓𝒆𝒅𝒂𝒅𝒐𝒓 𝒂𝒕𝒓𝒂𝒔 𝒅𝒆 𝒔𝒖𝒂 𝒑𝒓𝒆𝒔𝒂. 𝑪𝒐𝒓𝒓𝒂, 𝒑𝒐𝒊𝒔 𝒂 𝒍𝒖𝒂 𝒔𝒆 𝒕𝒐𝒓𝒏𝒂𝒓á 𝒗𝒆𝒓𝒎𝒆𝒍𝒉𝒐 𝒆𝒔𝒄𝒂𝒓𝒍𝒂𝒕𝒆 𝒄𝒐𝒎 𝒔𝒆𝒖𝒔 𝒈𝒓𝒊𝒕𝒐𝒔.`,
  `𝑪𝒐𝒎 𝒖𝒎 𝒎𝒂𝒄𝒉𝒂𝒅𝒐 𝒆𝒎 𝒎ã𝒐, @${m.sender.split('@')[0]} 𝒆𝒔𝒕á 𝒄𝒂ç𝒂𝒏𝒅𝒐 @${vitimaRun.split('@')[0]}, 𝒍𝒆𝒏𝒕𝒂𝒎𝒆𝒏𝒕𝒆, 𝒂𝒑𝒓𝒐𝒙𝒊𝒎𝒂𝒏𝒅𝒐-𝒔𝒆 𝒄𝒐𝒎 𝒔𝒖𝒂 𝒇𝒖𝒓𝒊𝒂 𝒊𝒏𝒇𝒆𝒓𝒏𝒂𝒍.`,
  `𝑵𝒂 𝒆𝒔𝒄𝒖𝒓𝒊𝒅ã𝒐 𝒅𝒂 𝒏𝒐𝒊𝒕𝒆, @${m.sender.split('@')[0]} 𝒊𝒏𝒊𝒄𝒊𝒐𝒖 𝒖𝒎𝒂 𝒄𝒂ç𝒂𝒅𝒂 𝒎𝒐𝒓𝒕𝒊𝒇𝒆𝒓𝒂 𝒂 @${vitimaRun.split('@')[0]}, 𝒎𝒂𝒓𝒄𝒂𝒏𝒅𝒐 𝒔𝒆𝒖 𝒅𝒆𝒔𝒕𝒊𝒏𝒐 𝒄𝒐𝒎 𝒄𝒂𝒅𝒂 𝒑𝒂𝒔𝒔𝒐 𝒍𝒆𝒏𝒕𝒐.`,
  `𝑪𝒐𝒎 𝒐𝒔 𝒐𝒍𝒉𝒐𝒔 𝒇𝒓𝒊𝒐𝒔 𝒆 𝒅𝒊𝒔𝒕𝒂𝒏𝒕𝒆𝒔, @${m.sender.split('@')[0]} 𝒄𝒐𝒎𝒆ç𝒐𝒖 𝒂 𝒄𝒂ç𝒂𝒓 @${vitimaRun.split('@')[0]}, 𝒄𝒐𝒓𝒓𝒂 𝒆𝒏𝒒𝒖𝒂𝒏𝒕𝒐 𝒑𝒐𝒅𝒆, 𝒔𝒖𝒂 𝒔𝒊𝒏𝒂 𝒂𝒑𝒓𝒐𝒙𝒊𝒎𝒂-𝒔𝒆`
];
const mensagemFlee = [
  `𝑨𝒑𝒐𝒔 𝒖𝒎𝒂 𝒂𝒏𝒈𝒖𝒔𝒕𝒊𝒂𝒏𝒕𝒆 𝒑𝒆𝒓𝒔𝒆𝒈𝒖𝒊𝒄𝒂𝒐, @${vitimaRun.split('@')[0]} 𝒄𝒐𝒏𝒔𝒆𝒈𝒖𝒊𝒖 𝒇𝒖𝒈𝒊𝒓 𝒆 𝒆𝒔𝒄𝒂𝒑𝒐𝒖 𝒄𝒐𝒎 𝒗𝒊𝒅𝒂.`,
  `@${vitimaRun.split('@')[0]} 𝒄𝒐𝒓𝒓𝒆𝒖 𝒅𝒆𝒔𝒆𝒔𝒑𝒆𝒓𝒂𝒅𝒂𝒎𝒆𝒏𝒕𝒆 𝒆 𝒅𝒆𝒊𝒙𝒐𝒖 @${m.sender.split('@')[0]} 𝒑𝒓𝒂 𝒕𝒓𝒂𝒔, 𝒆𝒔𝒄𝒂𝒑𝒂𝒏𝒅𝒐 𝒄𝒐𝒎 𝒗𝒊𝒅𝒂.`,
  `𝑬𝒎 𝒖𝒎 𝒍𝒂𝒏𝒄𝒆 𝒅𝒆 𝒅𝒆𝒔𝒆𝒔𝒑𝒆𝒓𝒐, @${vitimaRun.split('@')[0]} 𝒄𝒐𝒏𝒔𝒆𝒈𝒖𝒊𝒖 𝒔𝒆 𝒍𝒊𝒗𝒓𝒂𝒓 𝒅𝒂𝒔 𝒈𝒂𝒓𝒓𝒂𝒔 𝒅𝒆 @${m.sender.split('@')[0]} 𝒆 𝒇𝒖𝒈𝒊𝒖 𝒑𝒂𝒓𝒂 𝒂 𝒆𝒔𝒄𝒖𝒓𝒊𝒅𝒂𝒐, 𝒔𝒂𝒍𝒗𝒂𝒏𝒅𝒐 𝒔𝒖𝒂 𝒑𝒓𝒐𝒑𝒓𝒊𝒂 𝒗𝒊𝒅𝒂.`,
  `𝑪𝒐𝒎 𝒖𝒎𝒂 𝒇𝒆𝒓𝒐𝒄𝒊𝒅𝒂𝒅𝒆 𝒅𝒆 𝒍𝒐𝒃𝒐, @${vitimaRun.split('@')[0]} 𝒄𝒐𝒓𝒓𝒆𝒖 𝒂𝒕𝒆 𝒇𝒊𝒄𝒂𝒓 𝒍𝒊𝒗𝒓𝒆 𝒅𝒆 @${m.sender.split('@')[0]} 𝒆 𝒆𝒏𝒄𝒐𝒏𝒕𝒓𝒂𝒓 𝒔𝒖𝒂 𝒔𝒂𝒍𝒗𝒂𝒄𝒂𝒐.`,
  `𝑵𝒐 𝒖𝒍𝒕𝒊𝒎𝒐 𝒎𝒐𝒎𝒆𝒏𝒕𝒐, @${vitimaRun.split('@')[0]} 𝒄𝒐𝒏𝒔𝒆𝒈𝒖𝒊𝒖 𝒔𝒆 𝒆𝒔𝒄𝒐𝒏𝒅𝒆𝒓 𝒆 𝒆𝒔𝒄𝒂𝒑𝒐𝒖 𝒅𝒆 @${m.sender.split('@')[0]}, 𝒂𝒊𝒏𝒅𝒂 𝒄𝒐𝒎 𝒗𝒊𝒅𝒂, 𝒑𝒂𝒓𝒂 𝒄𝒐𝒏𝒕𝒂𝒓 𝒂 𝒕𝒓𝒂𝒈𝒆𝒅𝒊𝒂.`
];
const mensagemCatch=[
  `𝑨𝒑𝒐𝒔 𝒖𝒎𝒂 𝒊𝒏𝒕𝒆𝒏𝒔𝒂 𝒑𝒆𝒓𝒔𝒆𝒈𝒖𝒊𝒄𝒂𝒐, @${m.sender.split('@')[0]} 𝒂𝒍𝒄𝒂𝒏𝒄𝒐𝒖 @${vitimaRun.split('@')[0]} 𝒆 𝒂 𝒆𝒍𝒊𝒎𝒊𝒏𝒐𝒖 𝒔𝒆𝒎 𝒑𝒊𝒆𝒅𝒂𝒅𝒆.`,`@${m.sender.split('@')[0]} 𝒄𝒐𝒏𝒔𝒆𝒈𝒖𝒊𝒖 𝒂𝒍𝒄𝒂𝒏𝒄𝒂𝒓 𝒆 𝒎𝒂𝒕𝒐𝒖 𝒃𝒓𝒖𝒕𝒂𝒍𝒎𝒆𝒏𝒕𝒆 @${vitimaRun.split('@')[0]}, 𝒕𝒊𝒏𝒈𝒊𝒏𝒅𝒐 𝒐 𝒄𝒉𝒂𝒐 𝒅𝒆 𝒗𝒆𝒓𝒎𝒆𝒍𝒉𝒐 𝒆𝒔𝒄𝒂𝒓𝒍𝒂𝒕𝒆.`,`@${m.sender.split('@')[0]} 𝒂𝒍𝒄𝒂𝒏𝒄𝒐𝒖 @${vitimaRun.split('@')[0]} 𝒆𝒎 𝒖𝒎 𝒂𝒕𝒐 𝒅𝒆 𝒉𝒐𝒓𝒓𝒐𝒓, 𝒄𝒆𝒊𝒇𝒂𝒏𝒅𝒐 𝒔𝒖𝒂 𝒗𝒊𝒅𝒂 𝒆 𝒕𝒊𝒏𝒈𝒊𝒏𝒅𝒐 𝒂𝒔 𝒑𝒂𝒓𝒆𝒅𝒆𝒔 𝒄𝒐𝒎 𝒐 𝒓𝒖𝒃𝒓𝒐 𝒅𝒆 𝒔𝒆𝒖 𝒔𝒂𝒏𝒈𝒖𝒆 𝒆 𝒈𝒓𝒊𝒕𝒐𝒔 𝒅𝒆 𝒕𝒆𝒓𝒓𝒐𝒓.`,`𝑨𝒑𝒐𝒔 𝒖𝒎𝒂 𝒊𝒎𝒑𝒍𝒂𝒄𝒂𝒗𝒆𝒍 𝒄𝒂𝒄𝒂𝒅𝒂, @${m.sender.split('@')[0]} 𝒇𝒊𝒏𝒂𝒍𝒎𝒆𝒏𝒕𝒆 𝒂𝒍𝒄𝒂𝒏𝒄𝒐𝒖 @${vitimaRun.split('@')[0]} 𝒆 𝒂 𝒄𝒆𝒊𝒇𝒐𝒖 𝒔𝒖𝒂 𝒗𝒊𝒅𝒂 𝒄𝒐𝒎 𝒐𝒍𝒉𝒐𝒔 𝒈𝒆𝒍𝒊𝒅𝒐𝒔.`]
   m.react("🩸")
  
   
   await conn.sendMessage(m.chat, {
            video: {url:imageRun.getRandom()},
            caption: `┏━── ﹝🪓﹞
 
${mensagemRun.getRandom()}

┗━── `, // Replace with the desired caption
            contextInfo: {
                mentionedJid: [m.sender,vitimaRun], // Replace with the recipient's WhatsApp ID(s) to mention
            },
        });
   
   
   setTimeout(async function() {
  var randomNum = Math.random();
  if (randomNum < 0.5) {
   await conn.sendMessage(m.chat, {
            video: {url:`https://telegra.ph/file/5f17b81635693b0c927db.mp4`},
            caption: `┏━── ﹝🪓﹞
 
${mensagemFlee.getRandom()}

┗━── `, 
            contextInfo: {
                mentionedJid: [m.sender,vitimaRun], 
            },
        });
  } else {
    if(!global.db.data.chats[m.chat].users[who].adm && !global.criador.includes(who) && !global.cocriador.includes(who)){
     global.db.data.chats[m.chat].users[who].morto = true
     global.db.data.chats[m.chat].users[m.sender].trojans++
    }
    
    if(global.cocriador.includes(who)){ 
      return terribleError('𝒑𝒓𝒊𝒏𝒄𝒆𝒔𝒂')
    }
    else if(global.criador.includes(who)){
      return terribleError('𝒑𝒓𝒊𝒏𝒄𝒊𝒑𝒆')
    }
     await conn.sendMessage(m.chat, {
            video: {url:`https://telegra.ph/file/8df9e2e23997a6c8c7a29.mp4`},
            caption: `┏━── ﹝🪓﹞
 
${mensagemCatch.getRandom()}

┗━── `, 
            contextInfo: {
                mentionedJid: [m.sender,vitimaRun], 
            },
        });
  }
}, 10 * 60 * 1000);
       

    
}

  
break
//}
// amaldicoar {
case 'amaldicoar':
case 'amaldiçoar':
 let imageHell=['https://telegra.ph/file/61064932cfd113f131190.mp4','https://telegra.ph/file/4cab47b7afbeb1390eb86.mp4','https://telegra.ph/file/4cab47b7afbeb1390eb86.mp4','https://telegra.ph/file/d2a4523a6205d4935fec6.mp4']
console.log(` 🗡️: ${who || m.quoted?.sender}`)
if ((!text.includes('@') && !m.quoted) || (m.quoted?.sender == m.sender ) || (!text && !m.quoted)){

m.reply(`┏━── ﹝¿﹞
 
 𝑴𝒂𝒓𝒒𝒖𝒆 𝒂𝒍𝒈𝒖𝒎 𝒖𝒔𝒖𝒂𝒓𝒊𝒐 𝒅𝒆𝒔𝒕𝒆 𝒗𝒂𝒍𝒆 𝒔𝒐𝒎𝒃𝒓𝒊𝒐. . .

┗━── `)
} 

else if(who || m.quoted?.sender){
  console.log('test')
 let  vitimaHell= who ? who : m.quoted?.sender
 
 const mensagemHell = [
  `@${m.sender.split('@')[0]} 𝒂𝒎𝒂𝒍𝒅𝒊𝒄𝒐𝒖 @${vitimaHell.split('@')[0]}, 𝒊𝒏𝒗𝒐𝒄𝒂𝒏𝒅𝒐 𝒂 𝒊𝒓𝒂 𝒅𝒐𝒔 𝒊𝒏𝒇𝒆𝒓𝒏𝒐𝒔 𝒔𝒐𝒃𝒓𝒆 𝒔𝒖𝒂 𝒂𝒍𝒎𝒂.`,
 `𝑪𝒐𝒎 𝒖𝒎 𝒔𝒐𝒓𝒓𝒊𝒔𝒐 𝒅𝒊𝒂𝒃𝒐́𝒍𝒊𝒄𝒐, @${m.sender.split('@')[0]} 𝒋𝒐𝒈𝒐𝒖 𝒖𝒎𝒂 𝒔𝒊𝒏𝒂 𝒕𝒆𝒓𝒓𝒊́𝒗𝒆𝒍 𝒔𝒐𝒃𝒓𝒆 @${vitimaHell.split('@')[0]}, 𝒄𝒐𝒏𝒅𝒆𝒏𝒂𝒏𝒅𝒐-𝒐 𝒂𝒐 𝒔𝒐𝒇𝒓𝒊𝒎𝒆𝒏𝒕𝒐 𝒆𝒕𝒆𝒓𝒏𝒐.`,
  `𝑷𝒆𝒍𝒐 𝒑𝒐𝒅𝒆𝒓 𝒅𝒆 𝑺𝒂𝒕ã, @${m.sender.split('@')[0]} 𝒍𝒂𝒏𝒄̧𝒐𝒖 𝒖𝒎𝒂 𝒎𝒂𝒍𝒅𝒊𝒄̧𝒂̃𝒐 𝒅𝒐 𝒊𝒏𝒇𝒆𝒓𝒏𝒐 𝒔𝒐𝒃𝒓𝒆 @${vitimaHell.split('@')[0]}, 𝒎𝒆𝒓𝒈𝒖𝒍𝒉𝒂𝒏𝒅𝒐-𝒐 𝒆𝒎 𝒕𝒓𝒆𝒗𝒂𝒔 𝒑𝒆𝒓𝒑𝒆́𝒕𝒖𝒂𝒔`,
  `𝑺𝒐𝒃 𝒐 𝒄𝒆́𝒖 𝒄𝒐𝒃𝒆𝒓𝒕𝒐 𝒅𝒆 𝒄𝒉𝒂𝒎𝒂𝒔, @${m.sender.split('@')[0]} 𝒄𝒐𝒏𝒋𝒖𝒓𝒐𝒖 𝒖𝒎𝒂 𝒎𝒂𝒍𝒅𝒊𝒄̧𝒂̃𝒐 𝒅𝒆 𝒇𝒐𝒈𝒐 𝒆 𝒆𝒏𝒙𝒐𝒇𝒓𝒆 𝒔𝒐𝒃𝒓𝒆 @${vitimaHell.split('@')[0]}, 𝒍𝒆𝒗𝒂𝒏𝒅𝒐-𝒐 𝒂𝒐𝒔 𝒂𝒃𝒊𝒔𝒎𝒐𝒔 𝒊𝒏𝒇𝒆𝒓𝒏𝒂𝒊𝒔.`,
  `𝑵𝒂 𝒆𝒔𝒄𝒖𝒓𝒊𝒅ã𝒐 𝒑𝒓𝒐𝒇𝒖𝒏𝒅𝒂, @${m.sender.split('@')[0]} 𝒎𝒖𝒓𝒎𝒖𝒓𝒐𝒖 𝒑𝒓𝒂𝒈𝒂𝒔 𝒅𝒐 𝒊𝒏𝒇𝒆𝒓𝒏𝒐 𝒔𝒐𝒃𝒓𝒆 @${vitimaHell.split('@')[0]}, 𝒊𝒏𝒗𝒐𝒄𝒂𝒏𝒅𝒐 𝒅𝒆𝒎𝒐̂𝒏𝒊𝒐𝒔 𝒑𝒂𝒓𝒂 𝒂𝒕𝒓𝒂𝒗𝒆𝒔𝒔𝒂𝒓 𝒔𝒖𝒂 𝒂𝒍𝒎𝒂.`
];
   m.react("⸸")
  
   
   await conn.sendMessage(m.chat, {
            video: {url:imageHell.getRandom()},
            caption: `┏━── ﹝ִ𖤐﹞
 
${mensagemHell.getRandom()}

┗━── `, // Replace with the desired caption
            contextInfo: {
                mentionedJid: [m.sender,vitimaHell], // Replace with the recipient's WhatsApp ID(s) to mention
            },
        });
   
       

    
}

  
break
//}

//abraça 



// abracar


case 'abracar':
 let imageHug=['https://telegra.ph/file/29f02644931b027bd4dc2.mp4','https://telegra.ph/file/aa99cafeab44d381f57d6.mp4','https://telegra.ph/file/9a0c06e0c5709507babd4.mp4']
console.log(` 🗡️: ${who || m.quoted?.sender}`)
if ((!text.includes('@') && !m.quoted) || (m.quoted?.sender == m.sender ) || (!text && !m.quoted)){

m.reply(`┏━── ﹝¿﹞
 
 𝑴𝒂𝒓𝒒𝒖𝒆 𝒂𝒍𝒈𝒖𝒎 𝒖𝒔𝒖𝒂𝒓𝒊𝒐 𝒅𝒆𝒔𝒕𝒆 𝒗𝒂𝒍𝒆 𝒔𝒐𝒎𝒃𝒓𝒊𝒐. . .

┗━── `)
} 

else if(who || m.quoted?.sender){
  console.log('test')
 let  vitimaHug= who ? who : m.quoted?.sender
 
 const mensagemHug = [
  `@${m.sender.split('@')[0]} 𝒂𝒃𝒓𝒂𝒄𝒐𝒖 𝒄𝒐𝒎 𝒕𝒆𝒓𝒏𝒖𝒓𝒂 @${vitimaHug.split('@')[0]}, 𝒎𝒐𝒔𝒕𝒓𝒂𝒏𝒅𝒐 𝒔𝒆𝒖 𝒄𝒐𝒓𝒂𝒄̧𝒂̃𝒐 𝒅𝒆 𝒔𝒐𝒎𝒃𝒓𝒂.`,
  `𝑬𝒎 𝒖𝒎 𝒂𝒄𝒐𝒍𝒉𝒆𝒓 𝒏𝒐𝒕𝒖𝒓𝒏𝒐, @${m.sender.split('@')[0]} 𝒆𝒏𝒍𝒂ç𝒐𝒖 𝒄𝒂𝒓𝒊𝒏𝒉𝒐𝒔𝒂𝒎𝒆𝒏𝒕𝒆 @${vitimaHug.split('@')[0]} 𝒆𝒎 𝒖𝒎 𝒂𝒃𝒓𝒂𝒄𝒐, 𝒑𝒂𝒔𝒔𝒂𝒏𝒅𝒐 𝒖𝒎 𝒂𝒎𝒐𝒓 𝒎𝒊𝒔𝒕𝒊𝒄𝒐.`,
  `𝑪𝒐𝒎 𝒐𝒔 𝒐𝒍𝒉𝒐𝒔 𝒄𝒉𝒆𝒊𝒐𝒔 𝒅𝒆 𝒅𝒐𝒄𝒖𝒓𝒂, @${m.sender.split('@')[0]} 𝒂𝒄𝒐𝒍𝒉𝒆𝒖 𝒅𝒐𝒄𝒆𝒎𝒆𝒏𝒕𝒆 @${vitimaHug.split('@')[0]} 𝒆𝒎 𝒖𝒎 𝒂𝒃𝒓𝒂𝒄𝒐, 𝒓𝒆𝒇𝒍𝒆𝒕𝒊𝒏𝒅𝒐 𝒖𝒎 𝒂𝒇𝒆𝒕𝒐 𝒆𝒕𝒆́𝒓𝒆𝒐`,
  `𝑵𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔 𝒅𝒂 𝒏𝒐𝒊𝒕𝒆 𝒔𝒆𝒓𝒆𝒏𝒂, @${m.sender.split('@')[0]} 𝒂𝒃𝒓𝒂𝒄𝒐𝒖 𝒄𝒐𝒎 𝒕𝒓𝒂𝒏𝒒𝒖𝒊𝒍𝒊𝒅𝒂𝒅𝒆 @${vitimaHug.split('@')[0]}, 𝒄𝒐𝒎𝒐 𝒔𝒆 𝒇𝒐𝒔𝒔𝒆𝒎 𝒂𝒎𝒊𝒈𝒐𝒔 𝒅𝒆 𝒐𝒖𝒕𝒓𝒂 𝒗𝒊𝒅𝒂.`,
  `𝑺𝒐𝒃 𝒐 𝒄𝒆́𝒖 𝒆𝒔𝒕𝒓𝒆𝒍𝒂𝒅𝒐, @${m.sender.split('@')[0]} 𝒆𝒏𝒍𝒂ç𝒐𝒖 𝒄𝒂𝒓𝒊𝒏𝒉𝒐𝒔𝒂𝒎𝒆𝒏𝒕𝒆 @${vitimaHug.split('@')[0]} 𝒆𝒎 𝒖𝒎 𝒂𝒃𝒓𝒂𝒄𝒐`
];

   m.react("🌙")
  
   
   await conn.sendMessage(m.chat, {
            video: {url:imageHug.getRandom()},
            caption: `┏━── ﹝🫂﹞
 
${mensagemHug.getRandom()}

┗━── `, // Replace with the desired caption
            contextInfo: {
                mentionedJid: [m.sender,vitimaHug], // Replace with the recipient's WhatsApp ID(s) to mention
            },
        });
   
       

    
}

  
break


//abravça 



case 'stalkear':
case 'stalk':
case 'observar':
case 'perseguir':
 let imageStalk=['https://telegra.ph/file/914e1dac5a5e381265443.mp4', 'https://telegra.ph/file/8668985f0d09fade6f6b1.mp4','https://telegra.ph/file/8c92ed6d7c2b94ec787a5.mp4','https://telegra.ph/file/967150b00cb9a00caf87b.mp4','https://telegra.ph/file/0db0f25a9be0e93abef5d.mp4']
console.log(` 🗡️: ${who || m.quoted?.sender}`)
if ((!text.includes('@') && !m.quoted) || (m.quoted?.sender == m.sender ) || (!text && !m.quoted)){

m.reply(`┏━── ﹝¿﹞
 
 𝑴𝒂𝒓𝒒𝒖𝒆 𝒂𝒍𝒈𝒖𝒎 𝒖𝒔𝒖𝒂𝒓𝒊𝒐 𝒅𝒆𝒔𝒕𝒆 𝒗𝒂𝒍𝒆 𝒔𝒐𝒎𝒃𝒓𝒊𝒐. . .

┗━── `)
} 

else if(who || m.quoted?.sender){
  console.log('test')
 let  vitimaStalk= who ? who : m.quoted?.sender
 const mensagemStalk = [
  `@${m.sender.split('@')[0]} 𝒆𝒔𝒄𝒐𝒏𝒅𝒆𝒖-𝒔𝒆 𝒔𝒐𝒓𝒓𝒂𝒕𝒆𝒊𝒓𝒂𝒎𝒆𝒏𝒕𝒆 𝒆 𝒄𝒐𝒏𝒕𝒊𝒏𝒖𝒐𝒖 𝒂 𝒗𝒊𝒈𝒊𝒎𝒂 𝒅𝒆 @${vitimaStalk.split('@')[0]}, 𝒔𝒕𝒂𝒍𝒌𝒆𝒂𝒏𝒅𝒐 𝒔𝒖𝒂 𝒑𝒆𝒔𝒔𝒐𝒂."
  `,
  `𝑬𝒎 𝒖𝒎 𝒂𝒄𝒆𝒔𝒔𝒐 𝒅𝒆 𝒗𝒊𝒈𝒊𝒍𝒂̂𝒏𝒄𝒊𝒂 𝒊𝒏𝒕𝒆𝒏𝒔𝒂, @${m.sender.split('@')[0]} 𝒔𝒆𝒈𝒖𝒊𝒖 𝒐𝒔 𝒑𝒂𝒔𝒔𝒐𝒔 𝒅𝒆 @${vitimaStalk.split('@')[0]},𝒔𝒆 𝒎𝒂𝒏𝒕𝒆𝒏𝒅𝒐 𝒐𝒄𝒖𝒍𝒕𝒐 𝒏𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔 `,
  `𝑪𝒐𝒎 𝒐𝒍𝒉𝒐𝒔 𝒇𝒊𝒙𝒐𝒔 𝒆 𝒂𝒕𝒆𝒏𝒕𝒐𝒔, @${m.sender.split('@')[0]} 𝒑𝒆𝒓𝒔𝒆𝒈𝒖𝒊𝒖 𝒅𝒊𝒔𝒄𝒓𝒆𝒕𝒂𝒎𝒆𝒏𝒕𝒆 @${vitimaStalk.split('@')[0]}, 𝒎𝒂𝒏𝒕𝒆𝒏𝒅𝒐-𝒔𝒆 𝒐𝒄𝒖𝒍𝒕𝒐 𝒄𝒐𝒎𝒐 𝒖𝒎 𝒗𝒆𝒓𝒅𝒂𝒅𝒆𝒊𝒓𝒐 𝒔𝒕𝒂𝒍𝒌𝒆𝒓.`,
  `𝑵𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔 𝒅𝒂 𝒏𝒐𝒊𝒕𝒆, @${m.sender.split('@')[0]} 𝒄𝒐𝒏𝒕𝒊𝒏𝒖𝒐𝒖 𝒂 𝒐𝒃𝒔𝒆𝒓𝒗𝒂𝒓 𝒔𝒆𝒄𝒓𝒆𝒕𝒂𝒎𝒆𝒏𝒕𝒆 @${vitimaStalk.split('@')[0]}, 𝒎𝒐𝒏𝒊𝒕𝒐𝒓𝒂𝒏𝒅𝒐 𝒄𝒂𝒅𝒂 𝒎𝒐𝒗𝒊𝒎𝒆𝒏𝒕𝒐 𝒄𝒐𝒎𝒐 𝒖𝒎 𝒗𝒆𝒓𝒅𝒂𝒅𝒆𝒊𝒓𝒐 𝒔𝒕𝒂𝒍𝒌𝒆𝒓.`,
  `𝑺𝒐𝒃 𝒂 𝒍𝒖𝒛 𝒅𝒂 𝒍𝒖𝒂 𝒆𝒔𝒄𝒐𝒏𝒅𝒊𝒅𝒂, @${m.sender.split('@')[0]} 𝒑𝒆𝒓𝒔𝒊𝒔𝒕𝒊𝒖 𝒆𝒎 𝒔𝒆𝒈𝒖𝒊𝒓 @${vitimaStalk.split('@')[0]}, 𝒎𝒂𝒏𝒕𝒆𝒏𝒅𝒐-𝒔𝒆 𝒗𝒊𝒈𝒊𝒍𝒂𝒏𝒕𝒆 𝒄𝒐𝒎𝒐 𝒖𝒎 𝒔𝒕𝒂𝒍𝒌𝒆𝒓.`
];
 
   m.react("🫥")
  
   
   await conn.sendMessage(m.chat, {
            video: {url:imageStalk.getRandom()},
            caption: `┏━── ﹝👁️﹞
 
${mensagemStalk.getRandom()}

┗━── `, // Replace with the desired caption
            contextInfo: {
                mentionedJid: [m.sender,vitimaStalk], // Replace with the recipient's WhatsApp ID(s) to mention
            },
        });
   
       

    
}

  
break










case 'chicotear':
 let imageWhip =['https://telegra.ph/file/811425c19b30d13a849c0.mp4','https://telegra.ph/file/b7196633fe1a9f7551dad.mp4','https://telegra.ph/file/f06b70b594d7afdfbf8b9.mp4','https://telegra.ph/file/06e07e9fcedbb5075b25a.mp4','https://telegra.ph/file/372347434ff5a0d122353.mp4']
console.log(` 🗡️: ${who || m.quoted?.sender}`)
if ((!text.includes('@') && !m.quoted) || (m.quoted?.sender == m.sender ) || (!text && !m.quoted)){

m.reply(`┏━── ﹝¿﹞
 
 𝑴𝒂𝒓𝒒𝒖𝒆 𝒂𝒍𝒈𝒖𝒎 𝒖𝒔𝒖𝒂𝒓𝒊𝒐 𝒅𝒆𝒔𝒕𝒆 𝒗𝒂𝒍𝒆 𝒔𝒐𝒎𝒃𝒓𝒊𝒐. . .

┗━── `)
} 

else if(who || m.quoted?.sender){
  console.log('test')
 let  vitimaCt = who ? who : m.quoted?.sender
 const mensagemWhip = [
  `𝑪𝒐𝒎 𝒖𝒎𝒂 𝒅𝒆𝒔𝒆𝒋𝒐 𝒅𝒆 𝒂𝒑𝒂𝒛𝒊𝒈𝒖𝒂𝒓 𝒔𝒆𝒖 𝒊𝒏𝒔𝒕𝒊𝒏𝒕𝒐 𝒂𝒏𝒊𝒎𝒂𝒍𝒆𝒔𝒄𝒐, @${m.sender.split('@')[0]} 𝒄𝒉𝒊𝒄𝒐𝒕𝒆𝒐𝒖 𝒔𝒆𝒎 𝒑𝒊𝒆𝒅𝒂𝒅𝒆 @${vitimaCt.split('@')[0]}, 𝒅𝒆𝒊𝒙𝒂𝒏𝒅𝒐 𝒄𝒊𝒄𝒂𝒕𝒓𝒊𝒛𝒆𝒔 𝒆𝒎 𝒔𝒖𝒂𝒔 𝒄𝒐𝒔𝒕𝒂𝒔.`,
  `𝑷𝒂𝒓𝒂 𝒔𝒂𝒄𝒊𝒂𝒓 𝒔𝒖𝒂 𝒔𝒆𝒅𝒆 𝒅𝒆 𝒗𝒊𝒏𝒈𝒂𝒏𝒄𝒂, @${m.sender.split('@')[0]} 𝒅𝒆𝒔𝒇𝒆𝒓𝒊𝒖 𝒈𝒐𝒍𝒑𝒆𝒔 𝒗𝒊𝒐𝒍𝒆𝒏𝒕𝒐𝒔 𝒄𝒐𝒎 𝒔𝒆𝒖 𝒄𝒉𝒊𝒄𝒐𝒕𝒆 𝒆𝒎 @${vitimaCt.split('@')[0]}, 𝒄𝒂𝒅𝒂 𝒄𝒊𝒄𝒂𝒕𝒓𝒊𝒛 𝒔𝒆 𝒆𝒔𝒕𝒂𝒃𝒆𝒍𝒆𝒄𝒆𝒏𝒅𝒐 𝒄𝒐𝒎𝒐 𝒖𝒎 𝒍𝒆𝒎𝒃𝒓𝒆𝒕𝒆 𝒅𝒂 𝒔𝒖𝒂 𝒓𝒂𝒊𝒗𝒂.`,
  `𝑪𝒐𝒎 𝒖𝒎𝒂 𝒇𝒖𝒓𝒊𝒂 𝒊𝒏𝒄𝒐𝒏𝒕𝒊𝒅𝒂, @${m.sender.split('@')[0]} 𝒄𝒉𝒊𝒄𝒐𝒕𝒆𝒐𝒖 @${vitimaCt.split('@')[0]} 𝒄𝒐𝒎 𝒗𝒊𝒐𝒍𝒆𝒏𝒄𝒊𝒂, 𝒅𝒆𝒊𝒙𝒂𝒏𝒅𝒐 𝒄𝒊𝒄𝒂𝒕𝒓𝒊𝒛𝒆𝒔 𝒑𝒓𝒐𝒇𝒖𝒏𝒅𝒂𝒔 𝒆𝒎 𝒔𝒖𝒂 𝒄𝒂𝒓𝒏𝒆.`,
  `𝑪𝒐𝒎 𝒐𝒍𝒉𝒐𝒔 𝒅𝒆𝒔𝒆𝒋𝒐𝒔𝒐𝒔 𝒅𝒆 𝒗𝒊𝒏𝒈𝒂𝒏𝒄𝒂, @${m.sender.split('@')[0]} 𝒄𝒉𝒊𝒄𝒐𝒕𝒆𝒐𝒖 @${vitimaCt.split('@')[0]}, 𝒄𝒂𝒅𝒂 𝒈𝒐𝒍𝒑𝒆 𝒅𝒆𝒇𝒊𝒏𝒊𝒏𝒅𝒐 𝒄𝒊𝒄𝒂𝒕𝒓𝒊𝒛𝒆𝒔 𝒆𝒎 𝒔𝒖𝒂𝒔 𝒄𝒐𝒔𝒕𝒂𝒔.`,
  `𝑨𝒐 𝒔𝒆𝒏𝒕𝒊𝒓 𝒂 𝒏𝒆𝒄𝒆𝒔𝒔𝒊𝒅𝒂𝒅𝒆 𝒅𝒆 𝒄𝒂𝒖𝒔𝒂𝒓 𝒅𝒐𝒓, @${m.sender.split('@')[0]} 𝒄𝒉𝒊𝒄𝒐𝒕𝒆𝒐𝒖 @${vitimaCt.split('@')[0]} 𝒄𝒐𝒎 𝒇𝒆𝒓𝒐𝒄𝒊𝒅𝒂𝒅𝒆, 𝒄𝒂𝒅𝒂 𝒄𝒊𝒄𝒂𝒕𝒓𝒊𝒛 𝒏𝒂𝒔 𝒄𝒐𝒔𝒕𝒂𝒔 𝒅𝒆𝒎𝒐𝒏𝒔𝒕𝒓𝒂𝒏𝒅𝒐 𝒔𝒖𝒂 𝒎𝒂𝒍𝒊𝒅𝒂𝒅𝒆.`
];
   m.react("🩸")
  
   
   await conn.sendMessage(m.chat, {
            video: {url:imageWhip.getRandom()},
            caption: `┏━── ﹝⛓️﹞
 
${mensagemWhip.getRandom()}

┗━── `, // Replace with the desired caption
            contextInfo: {
                mentionedJid: [m.sender,vitimaCt], // Replace with the recipient's WhatsApp ID(s) to mention
            },
        });
   
       

    
}

  
break


//morder
case 'morder':
 let imageBite =['https://telegra.ph/file/de9378c65c8087f1405f2.mp4','https://telegra.ph/file/1ec3073a8ab987fabb865.mp4','https://telegra.ph/file/feb69494a56291bcead75.mp4']
console.log(` 🗡️: ${who || m.quoted?.sender}`)
if ((!text.includes('@') && !m.quoted) || (m.quoted?.sender == m.sender ) || (!text && !m.quoted)){

m.reply(`┏━── ﹝¿﹞
 
 𝑴𝒂𝒓𝒒𝒖𝒆 𝒂𝒍𝒈𝒖𝒎 𝒖𝒔𝒖𝒂𝒓𝒊𝒐 𝒅𝒆𝒔𝒕𝒆 𝒗𝒂𝒍𝒆 𝒔𝒐𝒎𝒃𝒓𝒊𝒐. . .

┗━── `)
} 

else if(who || m.quoted?.sender){
  console.log('test')
 let  vitimaBite = who ? who : m.quoted?.sender
 let mensageBite= [
  `𝑪𝒐𝒎 𝒖𝒎𝒂 𝒅𝒆𝒔𝒆𝒋𝒐 𝒅𝒆 𝒔𝒂𝒄𝒊𝒂𝒓 𝒔𝒖𝒂 𝒔𝒆𝒅𝒆, @${m.sender.split('@')[0]} 𝒎𝒐𝒓𝒅𝒆𝒖 𝒆 𝒔𝒖𝒈𝒐𝒖 𝒐 𝒔𝒂𝒏𝒈𝒖𝒆 𝒅𝒆 @${vitimaBite.split('@')[0]}, 𝒔𝒆𝒖𝒔 𝒅𝒆𝒏𝒕𝒆𝒔 𝒂𝒈𝒐𝒓𝒂 𝒄𝒓𝒂𝒗𝒂𝒅𝒐𝒔 𝒆𝒎 𝒔𝒖𝒂 𝒄𝒂𝒓𝒏𝒆.`,
  `𝑷𝒂𝒓𝒂 𝒂𝒑𝒂𝒛𝒊𝒈𝒖𝒂𝒓 𝒔𝒆𝒖 𝒊𝒏𝒔𝒕𝒊𝒏𝒕𝒐 𝒂𝒏𝒊𝒎𝒂𝒍𝒆𝒔𝒄𝒐, @${m.sender.split('@')[0]} 𝒎𝒐𝒓𝒅𝒆𝒖 𝒄𝒐𝒎𝒐 𝒖𝒎 𝒂𝒏𝒊𝒎𝒂𝒍 𝒆 𝒄𝒆𝒊𝒇𝒐𝒖 𝒂 𝒗𝒊𝒅𝒂 𝒅𝒆 @${vitimaBite.split('@')[0]}, 𝒔𝒆𝒖𝒔 𝒅𝒆𝒏𝒕𝒆𝒔 𝒂𝒈𝒐𝒓𝒂 𝒄𝒓𝒂𝒗𝒂𝒅𝒐𝒔 𝒆𝒎 𝒔𝒖𝒂 𝒄𝒂𝒓𝒏𝒆.`,
  `𝑪𝒐𝒎 𝒖𝒎𝒂 𝒔𝒆𝒅𝒆 𝒊𝒏𝒔𝒂𝒄𝒊𝒂𝒗𝒆𝒍, @${m.sender.split('@')[0]} 𝒎𝒐𝒓𝒅𝒆𝒖 𝒆 𝒔𝒖𝒈𝒐𝒖 𝒐 𝒔𝒂𝒏𝒈𝒖𝒆 𝒅𝒆 @${vitimaBite.split('@')[0]}, 𝒔𝒆𝒖𝒔 𝒅𝒆𝒏𝒕𝒆𝒔 𝒂𝒈𝒐𝒓𝒂 𝒄𝒓𝒂𝒗𝒂𝒅𝒐𝒔 𝒆𝒎 𝒔𝒖𝒂 𝒄𝒂𝒓𝒏𝒆.`,
  `𝑨𝒐 𝒑𝒓𝒐𝒄𝒖𝒓𝒂𝒓 𝒂𝒑𝒂𝒛𝒊𝒈𝒖𝒂𝒓 𝒔𝒖𝒂 𝒇𝒖𝒓𝒊𝒂, @${m.sender.split('@')[0]} 𝒎𝒐𝒓𝒅𝒆𝒖 𝒄𝒐𝒎𝒐 𝒖𝒎 𝒂𝒏𝒊𝒎𝒂𝒍 𝒆 𝒄𝒆𝒊𝒇𝒐𝒖 𝒂 𝒗𝒊𝒅𝒂 𝒅𝒆 @${vitimaBite.split('@')[0]}, 𝒔𝒆𝒖𝒔 𝒅𝒆𝒏𝒕𝒆𝒔 𝒂𝒈𝒐𝒓𝒂 𝒄𝒓𝒂𝒗𝒂𝒅𝒐𝒔 𝒆𝒎 𝒔𝒖𝒂 𝒄𝒂𝒓𝒏𝒆.`,
  `𝑪𝒐𝒎 𝒖𝒎 𝒅𝒆𝒔𝒆𝒋𝒐 𝒅𝒆 𝒔𝒂𝒄𝒊𝒂𝒓 𝒔𝒖𝒂 𝒔𝒆𝒅𝒆 𝒊𝒏𝒄𝒐𝒏𝒕𝒊𝒅𝒂, @${m.sender.split('@')[0]} 𝒎𝒐𝒓𝒅𝒆𝒖 𝒆 𝒔𝒖𝒈𝒐𝒖 𝒐 𝒔𝒂𝒏𝒈𝒖𝒆 𝒅𝒆 @${vitimaBite.split('@')[0]}, 𝒔𝒆𝒖𝒔 𝒅𝒆𝒏𝒕𝒆𝒔 𝒂𝒈𝒐𝒓𝒂 𝒄𝒓𝒂𝒗𝒂𝒅𝒐𝒔 𝒆𝒎 𝒔𝒖𝒂 𝒄𝒂𝒓𝒏𝒆.`
];
   m.react("🩸")
  
   
   await conn.sendMessage(m.chat, {
            video: {url:imageBite.getRandom()},
            caption: `┏━── ﹝🦇﹞
 
${mensageBite.getRandom()}

┗━── `, // Replace with the desired caption
            contextInfo: {
                mentionedJid: [m.sender,vitimaBite], // Replace with the recipient's WhatsApp ID(s) to mention
            },
        });
   
       

    
}

  
break


case 'estrangular':
case 'enforcar':
 let imagesStrangle =[`https://telegra.ph/file/c2011be9d20c4beb65506.mp4`,`https://telegra.ph/file/be68aca2cde369b0abb28.mp4`]
console.log(` 🗡️: ${who || m.quoted?.sender}`)
if ((!text.includes('@') && !m.quoted) || (m.quoted?.sender == m.sender ) || (!text && !m.quoted)){

m.reply(`┏━── ﹝¿﹞
 
 𝑴𝒂𝒓𝒒𝒖𝒆 𝒂𝒍𝒈𝒖𝒎 𝒖𝒔𝒖𝒂𝒓𝒊𝒐 𝒅𝒆𝒔𝒕𝒆 𝒗𝒂𝒍𝒆 𝒔𝒐𝒎𝒃𝒓𝒊𝒐. . .

┗━── `)
} 

else if(who || m.quoted?.sender){
  console.log('test')
 let  vitimaStrangle = who ? who : m.quoted?.sender
 let mensagensStrangle =[`@${m.sender.split('@')[0]} 𝒆𝒏𝒇𝒐𝒓𝒄𝒐𝒖 @${vitimaStrangle.split('@')[0]} 𝒏𝒂 𝒄𝒐𝒓𝒅𝒂, 𝒓𝒆𝒄𝒓𝒊𝒂𝒏𝒅𝒐 𝒖𝒎 𝒓𝒆𝒕𝒓𝒂𝒕𝒐 𝒅𝒆 𝒂𝒈𝒐𝒏𝒊𝒂 𝒆 𝒅𝒆𝒔𝒆𝒔𝒑𝒆𝒓𝒐 𝒆𝒏𝒒𝒖𝒂𝒏𝒕𝒐 𝒆𝒔𝒕𝒆 𝒔𝒆 𝒂𝒈𝒊𝒕𝒂𝒗𝒂 𝒂𝒏𝒕𝒆𝒔 𝒅𝒐 𝒊𝒏𝒆𝒗𝒊𝒕𝒂𝒗𝒆𝒍 𝒇𝒊𝒎`, `@${m.sender.split('@')[0]} 𝒆𝒎 𝒖𝒎 𝒂𝒕𝒐 𝒇𝒆𝒓𝒐𝒛 𝒆 𝒐𝒃𝒔𝒄𝒖𝒓𝒐, 𝒆𝒏𝒇𝒐𝒓𝒄𝒐𝒖 @${vitimaStrangle.split('@')[0]}, 𝒄𝒐𝒎𝒐 𝒐 𝒈𝒂𝒕𝒐 𝒆𝒏𝒇𝒐𝒓𝒄𝒂𝒅𝒐 𝒅𝒆 𝑷𝒐𝒆`, `𝑬𝒎 𝒖𝒎 𝒇𝒓𝒆𝒏𝒆𝒔𝒊 𝒅𝒆 𝒇𝒖𝒓𝒊𝒂 𝒆 𝒕𝒐𝒓𝒎𝒆𝒏𝒕𝒐... @${m.sender.split('@')[0]} 𝒔𝒖𝒔𝒑𝒆𝒏𝒅𝒆𝒖 𝒏𝒂 𝒇𝒐𝒓𝒄𝒂 @${vitimaStrangle.split('@')[0]}, 𝒆𝒗𝒐𝒄𝒂𝒏𝒅𝒐 𝒖𝒎𝒂 𝒔𝒐𝒎𝒃𝒓𝒊𝒂 𝒍𝒆𝒎𝒃𝒓𝒂𝒏𝒄𝒂 𝒅𝒐 𝒈𝒂𝒕𝒐 𝒑𝒓𝒆𝒕𝒐...`, `𝑵𝒆𝒔𝒕𝒂 𝒊𝒎𝒑𝒊𝒆𝒅𝒐𝒔𝒂 𝒏𝒐𝒊𝒕𝒆, @${m.sender.split('@')[0]} 𝒄𝒐𝒎 𝒖𝒎 𝒈𝒆𝒔𝒕𝒐 𝒈𝒆𝒍𝒂𝒅𝒐 𝒆 𝒎𝒂𝒍𝒊𝒈𝒏𝒐, 𝒄𝒐𝒍𝒐𝒄𝒐𝒖 𝒂 𝒄𝒐𝒓𝒅𝒂 𝒏𝒐 𝒑𝒆𝒔𝒄𝒐ç𝒐 𝒅𝒆 @${vitimaStrangle.split('@')[0]}, 𝒂𝒔𝒔𝒊𝒎 𝒄𝒐𝒎𝒐 𝒇𝒐𝒊 𝒇𝒆𝒊𝒕𝒐 𝒄𝒐𝒎 𝒐 𝒈𝒂𝒕𝒐 𝑷𝒍𝒖𝒕𝒐, 𝒍𝒆𝒗𝒂𝒏𝒅𝒐-𝒐 𝒂𝒐 𝒗𝒂𝒛𝒊𝒐 𝒅𝒂 𝒆𝒔𝒄𝒖𝒓𝒊𝒅𝒂𝒐`] 

   m.react("🩸")
  
    if(!global.db.data.chats[m.chat].users[who].adm && !global.criador.includes(who) && !global.cocriador.includes(who)){    
        global.db.data.chats[m.chat].users[who].morto = true   

     global.db.data.chats[m.chat].users[m.sender].trojans++
        }
    
    if(global.cocriador.includes(who)){ 
      return terribleError('𝒑𝒓𝒊𝒏𝒄𝒆𝒔𝒂')
    }
    else if(global.criador.includes(who)){
      return terribleError('𝒑𝒓𝒊𝒏𝒄𝒊𝒑𝒆')
    }
   await conn.sendMessage(m.chat, {
            video: {url:imagesStrangle.getRandom()},
            caption: `┏━── ﹝🐈‍⬛﹞
 
${mensagensStrangle.getRandom()}

┗━── `, // Replace with the desired caption
            contextInfo: {
                mentionedJid: [m.sender,vitimaStrangle], // Replace with the recipient's WhatsApp ID(s) to mention
            },
        });
   
       

    
}

  
break
case 'matar':
case 'assassinar':
  case 'chacinar':
    case 'esfolar':
  let selfKill = [`𝑵𝒂 𝒔𝒐𝒎𝒃𝒓𝒂 𝒅𝒂 𝒏𝒐𝒊𝒕𝒆, @${m.sender.split('@')[0]} 𝒅𝒆𝒄𝒊𝒅𝒊𝒖 𝒕𝒊𝒓𝒂𝒓 𝒂 𝒑𝒓𝒐́𝒑𝒓𝒊𝒂 𝒗𝒊𝒅𝒂 𝒆 𝒔𝒖𝒊𝒄𝒊𝒅𝒐𝒖-𝒔𝒆.`,`𝑵𝒂 𝒆𝒔𝒄𝒖𝒓𝒊𝒅𝒂𝒐 𝒑𝒓𝒐𝒇𝒖𝒏𝒅𝒂 𝒅𝒂 𝒏𝒐𝒊𝒕𝒆, @${m.sender.split('@')[0]} 𝒕𝒐𝒎𝒐𝒖 𝒂 𝒅𝒆𝒄𝒊𝒔𝒂𝒐 𝒅𝒆 𝒆𝒏𝒄𝒆𝒓𝒓𝒂𝒓 𝒔𝒖𝒂 𝒑𝒓𝒐𝒑𝒓𝒊𝒂 𝒗𝒊𝒅𝒂. 𝑨 𝒔𝒐𝒍𝒊𝒅𝒂𝒐 𝒆 𝒐 𝒅𝒆𝒔𝒆𝒔𝒑𝒆𝒓𝒐 𝒔𝒆 𝒆𝒏𝒄𝒐𝒏𝒕𝒓𝒂𝒓𝒂𝒎 𝒆𝒎 𝒔𝒆𝒖 𝒖𝒍𝒕𝒊𝒎𝒐 𝒔𝒖𝒔𝒑𝒊𝒓𝒐, 𝒅𝒆𝒊𝒙𝒂𝒏𝒅𝒐 𝒑𝒂𝒓𝒂 𝒕𝒓𝒂𝒔 𝒔𝒐𝒎𝒆𝒏𝒕𝒆 𝒐 𝒆𝒄𝒐 𝒔𝒐𝒎𝒃𝒓𝒊𝒐 𝒅𝒆 𝒖𝒎𝒂 𝒂𝒍𝒎𝒂 𝒑𝒆𝒓𝒅𝒊𝒅𝒂.`
]
let selfKillImg =[ 'https://telegra.ph/file/8c68842a57e74e3cda59e.mp4','https://telegra.ph/file/6b948f84e3ce53496bfe7.mp4','https://telegra.ph/file/5a33169e50b4cbe26eb1a.mp4']
let imagesKill =['https://telegra.ph/file/c16a0a500393e65d93b6b.mp4','https://telegra.ph/file/43564346765c70b5aaa4d.mp4','https://telegra.ph/file/559321efe2a45d869a189.mp4','https://telegra.ph/file/34d7da6676906adaf44cf.mp4','https://telegra.ph/file/85c7234c33332810aa257.mp4','https://telegra.ph/file/ff251fe52f0ef72d396f8.mp4']

  if ((!text.includes('@') && !m.quoted) || (m.quoted?.sender == m.sender ) || (!text && !m.quoted )){
     global.db.data.chats[m.chat].users[m.sender].morto = true
       if(!global.db.data.chats[m.chat].users[m.sender].morto){
    global.db.data.chats[m.chat].users[m.sender].morto= true
  }
await conn.sendMessage(m.chat, {
            video: {url:selfKillImg.getRandom()},
            caption: `┏━── ﹝🩸﹞
 
${selfKill.getRandom()}

┗━── `, // Replace with the desired caption
            contextInfo: {
                mentionedJid: [m.sender], // Replace with the recipient's WhatsApp ID(s) to mention
            },
        });
} 
 
else if(who || m.quoted?.sender){
 let  vitimaKill = who ? who : m.quoted?.sender

let mensagensKill =[`@${m.sender.split('@')[0]} 𝒄𝒉𝒂𝒄𝒊𝒏𝒐𝒖 𝒃𝒓𝒖𝒕𝒂𝒍𝒎𝒆𝒏𝒕𝒆 @${vitimaKill.split('@')[0]}, 𝒅𝒆𝒓𝒓𝒂𝒎𝒂𝒏𝒅𝒐 𝒖𝒎 𝒎𝒂𝒓 𝒅𝒆 𝒔𝒂𝒏𝒈𝒖𝒆 𝒏𝒐 𝒄𝒉𝒂𝒐.`, `@${m.sender.split('@')[0]} 𝒂𝒔𝒔𝒂𝒔𝒔𝒊𝒏𝒐𝒖 𝒇𝒓𝒊𝒂𝒎𝒆𝒏𝒕𝒆 @${vitimaKill.split('@')[0]}, 𝒆𝒎 𝒖𝒎 𝒂𝒄𝒕𝒐 𝒔𝒐𝒎𝒃𝒓𝒊𝒐 𝒅𝒆 𝒎𝒐𝒓𝒕𝒆 𝒆 𝒂𝒈𝒐𝒏𝒊𝒂.`, `𝑬𝒎 𝒖𝒎 𝒂𝒕𝒐 𝒅𝒆 𝒄𝒓𝒖𝒆𝒍𝒅𝒂𝒅𝒆 𝒂𝒏𝒄𝒆𝒔𝒕𝒓𝒂𝒍... @${m.sender.split('@')[0]} 𝒎𝒂𝒕𝒐𝒖 𝒃𝒓𝒖𝒕𝒂𝒍𝒎𝒆𝒏𝒕𝒆 @${vitimaKill.split('@')[0]}, 𝒆𝒏𝒄𝒉𝒂𝒓𝒄𝒂𝒏𝒅𝒐 𝒐 𝒔𝒐𝒍𝒐 𝒄𝒐𝒎 𝒔𝒆𝒖 𝒔𝒂𝒏𝒈𝒖𝒆 𝒊𝒎𝒑𝒖𝒓𝒐.`, `𝑵𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔 𝒏𝒆𝒇𝒂𝒔𝒕𝒂𝒔, @${m.sender.split('@')[0]} 𝒄𝒆𝒊𝒇𝒐𝒖 𝒂 𝒗𝒊𝒅𝒂 𝒅𝒆 @${vitimaKill.split('@')[0]}, 𝒅𝒆𝒊𝒙𝒂𝒏𝒅𝒐 𝒖𝒎 𝒓𝒂𝒔𝒕𝒓𝒐 𝒅𝒆 𝒕𝒆𝒓𝒓𝒐𝒓 𝒆 𝒅𝒆𝒔𝒆𝒔𝒑𝒆𝒓𝒐.`]
   m.react("🩸")
  
   
    if(!global.db.data.chats[m.chat].users[who].adm && !global.criador.includes(who) && !global.cocriador.includes(who)){      
      
     global.db.data.chats[m.chat].users[m.sender].trojans++
     global.db.data.chats[m.chat].users[who].morto = true     }
    if(global.cocriador.includes(who)){ 
      return terribleError('𝒑𝒓𝒊𝒏𝒄𝒆𝒔𝒂')
    }
    else if(global.criador.includes(who)){
      return terribleError('𝒑𝒓𝒊𝒏𝒄𝒊𝒑𝒆')
    }
   await conn.sendMessage(m.chat, {
            video: {url:imagesKill.getRandom()},
            caption: `┏━── ﹝🩸﹞
 
${mensagensKill.getRandom()}

┗━── `, // Replace with the desired caption
            contextInfo: {
                mentionedJid: [m.sender,vitimaKill], // Replace with the recipient's WhatsApp ID(s) to mention
            },
        });
   

    
}

  
break
case 'chance':
    if(!text){
      return m.reply(`┏━── *「️𖤐」* ─━┓
│
│ 𝑫𝒊𝒈𝒊𝒕𝒆 𝒖𝒎 𝒕𝒆𝒙𝒕𝒐 𝒆 𝒓𝒆𝒗𝒆𝒍𝒆 𝒂𝒔 𝒑𝒓𝒐𝒃𝒂𝒃𝒊𝒍𝒊𝒅𝒂𝒅𝒆𝒔
│ 𝒆𝒏𝒕𝒓𝒆 𝒐𝒔 𝒑𝒂𝒓𝒕𝒊𝒄𝒊𝒑𝒂𝒏𝒕𝒆𝒔 𝒏𝒆𝒔𝒕𝒆 𝒔𝒐𝒎𝒃𝒓𝒊𝒐 𝒓𝒆𝒄𝒊𝒏𝒕𝒐
│     
│ _*Exemplo:*_ .chance de se matarem
│
┗━── *「️𖤐」*  ─━┛`)
    }
    m.react("☑️")
    let ps = groupMetadata.participants.map(v => v.id);
    
    let user = a => '@' + a.split('@')[0] //'@' + a
for (let i = ps.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [ps[i], ps[j]] = [ps[j], ps[i]];
}

console.log(ps)
let percentagem = Math.floor(Math.random() * 100) + 1;
let percentagemm = `${percentagem}%`;
let texto = `𝑵𝒂𝒔 𝒑𝒓𝒐𝒇𝒖𝒏𝒅𝒆𝒛𝒂𝒔 𝒅𝒐 𝒅𝒆𝒔𝒕𝒊𝒏𝒐, 𝒐𝒏𝒅𝒆 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔 𝒔𝒖𝒔𝒔𝒖𝒓𝒓𝒂𝒎 𝒔𝒆𝒈𝒓𝒆𝒅𝒐𝒔 𝒂𝒏𝒕𝒊𝒈𝒐𝒔. . . 

𝑬𝒙𝒊𝒔𝒕𝒆 𝒖𝒎𝒂 𝒄𝒉𝒂𝒏𝒄𝒆 𝒅𝒆 ${percentagemm} 𝒅𝒆 ${user(ps[1])} e ${user(ps[2])} _*${text}.*_`

let finaltxt = `╭─┅──┅❖ ♱ ❖─┅──┅

${texto}

*╰─┅──┅❖ ⸸ ❖─┅──┅*`

m.reply(finaltxt, null, { mentions: conn.parseMention(finaltxt) })
break
case 'shippar':
case 'tinder':
  if(!text && !m.quoted) { m.reply(`╭─┅──┅❖ ༒︎ ❖─┅──┅
🖤💀 𝑽𝒆𝒓𝒊𝒇𝒊𝒒𝒖𝒆 𝒔𝒖𝒂 𝒄𝒐𝒎𝒑𝒂𝒕𝒊𝒃𝒊𝒍𝒊𝒅𝒂𝒅𝒆 𝒄𝒐𝒎 𝒂𝒍𝒈𝒖𝒆𝒎 𝒐𝒖 𝑴𝒂𝒓𝒒𝒖𝒆 𝒅𝒖𝒂𝒔 𝒂𝒍𝒎𝒂𝒔 𝒑𝒆𝒓𝒅𝒊𝒅𝒂𝒔 𝒑𝒂𝒓𝒂 𝒒𝒖𝒆 𝒑𝒐𝒔𝒔𝒂𝒎𝒐𝒔 𝒄𝒂𝒍𝒄𝒖𝒍𝒂𝒓 𝒂 𝒑𝒓𝒐𝒃𝒂𝒃𝒊𝒍𝒊𝒅𝒂𝒅𝒆 𝒅𝒆 𝒔𝒖𝒂 𝒑𝒂𝒊𝒙𝒂𝒐 𝒄𝒐𝒏𝒅𝒆𝒏𝒂𝒅𝒂.

_𝙴𝚡𝚎𝚖𝚙𝚕𝚘:_
.${command} @pessoa1 @pessoa2
.${command} @usuario

*╰─┅──┅❖ ⸸ ❖─┅──┅*`)
}



const width = 900;
const height = 900;

const canvas = createCanvas(width, height);
const ctx = canvas.getContext('2d')
let usr1, usr2
if(args[0] && args[1]){
     usr1 = args[0].replace('@', '');
  usr1 += '@s.whatsapp.net';
  usr2 = args[1].replace('@', '');
  usr2 += '@s.whatsapp.net';
}
else if (args[0] && !args[1])
{
    usr1 = m.sender;
   usr2 = args[0].replace('@', '');
  usr2 += '@s.whatsapp.net';
}
else if(!text && m.quoted)
{
   usr1 = m.sender;
   usr2 = m.quoted.sender
}

  console.log('_________')
  console.log(usr1)
  console.log(usr2)
let pp1 = await  conn.profilePictureUrl(usr1, 'image').catch((e) => 'https://telegra.ph/file/7ef69475a15a20796a755.jpg' ) 
let pp2 = await  conn.profilePictureUrl(usr2, 'image').catch((e) => 'https://telegra.ph/file/7ef69475a15a20796a755.jpg') 


m.react("🕰️")
console.log(pp1)
console.log(pp2)
async function draw(input) {
  let out = getRandom('.png'); 
    let filename = join(__dirname, '../tmp/' + out);
 
 
 
  const background = await loadImage('https://telegra.ph/file/5265107a0aa8e0b7965a0.jpg');
 const img1 = await loadImage(pp1);
const img2 = await loadImage(pp2);

ctx.drawImage(background, 0, 0, width, height);

const arcX1 = 195, arcY1 = 420, arcRadius1 = 200;
const arcX2 = 675, arcY2 = 420, arcRadius2 = 200;

ctx.save();
ctx.beginPath();
ctx.arc(arcX1, arcY1, arcRadius1, 0, Math.PI * 2, true);
ctx.clip();
ctx.drawImage(img1, arcX1 - arcRadius1, arcY1 - arcRadius1, arcRadius1 * 2, arcRadius1 * 2);
ctx.restore();

ctx.save();
ctx.beginPath();
ctx.arc(arcX2, arcY2, arcRadius2, 0, Math.PI * 2, true);
ctx.clip();
ctx.drawImage(img2, arcX2 - arcRadius2, arcY2 - arcRadius2, arcRadius2 * 2, arcRadius2 * 2);
ctx.restore();

  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(filename, buffer);
 conn.sendFile(m.chat, filename, 'test.png', input,m)
}



  let frases25 =[
    '𝑺𝒆𝒖𝒔 𝒐𝒍𝒉𝒂𝒓𝒆𝒔 𝒔𝒆 𝒄𝒓𝒖𝒛𝒂𝒎, 𝒎𝒂𝒔 𝒏𝒂𝒔 𝒑𝒓𝒐𝒇𝒖𝒏𝒅𝒆𝒛𝒂𝒔 𝒅𝒆 𝒔𝒖𝒂𝒔 𝒂𝒍𝒎𝒂𝒔, 𝒏𝒂𝒐 𝒉𝒂 𝒄𝒉𝒂𝒎𝒂 𝒒𝒖𝒆 𝒒𝒖𝒆𝒊𝒎𝒆. 𝑨 𝒄𝒐𝒏𝒆𝒙𝒂𝒐 𝒆 𝒂𝒑𝒆𝒏𝒂𝒔 𝒖𝒎 𝒆𝒄𝒐 𝒅𝒆 𝒖𝒎𝒂 𝒄𝒂𝒔𝒄𝒂 𝒗𝒂𝒛𝒊𝒂',
  '𝑬𝒏𝒕𝒓𝒆 𝒆𝒍𝒆𝒔, 𝒐 𝒔𝒊𝒍𝒆𝒏𝒄𝒊𝒐 𝒆 𝒎𝒂𝒊𝒔 𝒂𝒍𝒕𝒐 𝒒𝒖𝒆 𝒒𝒖𝒂𝒍𝒒𝒖𝒆𝒓 𝒅𝒆𝒔𝒆𝒋𝒐. 𝑨 𝒂𝒕𝒓𝒂𝒄𝒂𝒐 𝒔𝒆 𝒅𝒊𝒔𝒔𝒊𝒑𝒂 𝒄𝒐𝒎𝒐 𝒏𝒆𝒗𝒐𝒂 𝒆𝒎 𝒖𝒎 𝒕𝒖𝒎𝒖𝒍𝒐 𝒇𝒓𝒊𝒐...',
'𝑬𝒎 𝒔𝒆𝒖𝒔 𝒕𝒐𝒒𝒖𝒆𝒔, 𝒐 𝒇𝒓𝒊𝒐 𝒆 𝒑𝒂𝒍𝒑𝒂𝒗𝒆𝒍, 𝒔𝒆𝒎 𝒐 𝒄𝒂𝒍𝒐𝒓 𝒒𝒖𝒆 𝒊𝒏𝒄𝒆𝒏𝒅𝒆𝒊𝒂 𝒂𝒍𝒎𝒂𝒔. 𝑼𝒎𝒂 𝒍𝒊𝒈𝒂𝒄𝒂𝒐 𝒄𝒐𝒏𝒅𝒆𝒏𝒂𝒅𝒂 𝒂 𝒐𝒃𝒔𝒄𝒖𝒓𝒊𝒅𝒂𝒅𝒆.',
'𝑵𝒂𝒐 𝒉𝒂 𝒏𝒆𝒏𝒉𝒖𝒎 𝒊𝒏𝒅𝒊𝒄𝒊𝒐 𝒅𝒆 𝒑𝒂𝒊𝒙𝒂𝒐, 𝒂𝒑𝒆𝒏𝒂𝒔 𝒐 𝒗𝒂𝒛𝒊𝒐 𝒅𝒆 𝒄𝒐𝒓𝒂𝒄𝒐𝒆𝒔 𝒒𝒖𝒆 𝒃𝒂𝒕𝒆𝒎 𝒇𝒐𝒓𝒂 𝒅𝒆 𝒔𝒊𝒏𝒄𝒓𝒐𝒏𝒊𝒂.',
'𝑺𝒆𝒖𝒔 𝒍𝒂𝒄𝒐𝒔 𝒂𝒇𝒆𝒕𝒊𝒗𝒐𝒔 𝒔𝒂𝒐 𝒔𝒐𝒎𝒃𝒓𝒂𝒔 𝒔𝒆𝒎 𝒇𝒐𝒓𝒎𝒂, 𝒔𝒆𝒎 𝒂 𝒓𝒆𝒎𝒊𝒏𝒊𝒔𝒄𝒆𝒏𝒄𝒊𝒂 𝒅𝒂 𝒑𝒂𝒊𝒙𝒂𝒐. 𝑼𝒎 𝒅𝒆𝒔𝒕𝒊𝒏𝒐 𝒅𝒆 𝒅𝒆𝒔𝒆𝒏𝒄𝒐𝒏𝒕𝒓𝒐𝒔 𝒆 𝒅𝒆𝒔𝒊𝒏𝒕𝒆𝒓𝒆𝒔𝒔𝒆 𝒆𝒏𝒕𝒓𝒆 𝒅𝒖𝒂𝒔 𝒂𝒍𝒎𝒂𝒔 𝒄𝒐𝒏𝒅𝒆𝒏𝒂𝒅𝒂𝒔']
let frases50=[
  '𝑺𝒆𝒖𝒔 𝒐𝒍𝒉𝒂𝒓𝒆𝒔 𝒔𝒆 𝒄𝒓𝒖𝒛𝒂𝒎 𝒆𝒎 𝒉𝒆𝒔𝒊𝒕𝒂𝒄𝒂𝒐, 𝒖𝒎𝒂 𝒇𝒂𝒊𝒔𝒄𝒂 𝒊𝒏𝒄𝒆𝒓𝒕𝒂 𝒆𝒏𝒕𝒓𝒆 𝒐 𝒅𝒆𝒔𝒆𝒋𝒐 𝒆 𝒂 𝒊𝒏𝒅𝒊𝒇𝒆𝒓𝒆𝒏𝒄𝒂.',
  '𝑵𝒐 𝒔𝒊𝒍𝒆𝒏𝒄𝒊𝒐 𝒆𝒏𝒕𝒓𝒆 𝒆𝒍𝒆𝒔, 𝒉𝒂 𝒖𝒎 𝒎𝒖𝒓𝒎𝒊𝒓𝒊𝒐 𝒅𝒆 𝒑𝒐𝒔𝒔𝒊𝒃𝒊𝒍𝒊𝒅𝒂𝒅𝒆... 𝑶𝒏𝒅𝒆 𝒂 𝒂𝒕𝒓𝒂𝒄𝒂𝒐 𝒆𝒏𝒕𝒓𝒆 𝒂𝒎𝒃𝒐𝒔 𝒆 𝒖𝒎𝒂 𝒔𝒐𝒎𝒃𝒓𝒂 𝒒𝒖𝒆 𝒐𝒔𝒄𝒊𝒍𝒂 𝒆𝒏𝒕𝒓𝒆 𝒆𝒙𝒊𝒔𝒕𝒊𝒓 𝒆 𝒅𝒆𝒔𝒗𝒂𝒏𝒆𝒄𝒆𝒓.',
  '𝑬𝒏𝒕𝒓𝒆 𝒆𝒔𝒕𝒂𝒔 𝒅𝒖𝒂𝒔 𝒂𝒍𝒎𝒂𝒔, 𝒔𝒖𝒓𝒈𝒆 𝒆𝒏𝒕𝒂𝒐 𝒖𝒎𝒂 𝒄𝒐𝒏𝒆𝒙𝒂𝒐 𝒊𝒏𝒄𝒆𝒓𝒕𝒂, 𝒖𝒎 𝒍𝒂𝒄𝒐 𝒒𝒖𝒆 𝒔𝒆 𝒆𝒔𝒕𝒆𝒏𝒅𝒆 𝒆𝒏𝒕𝒓𝒆 𝒐 𝒒𝒖𝒆𝒓𝒆𝒓 𝒆 𝒐 𝒏𝒂𝒐 𝒔𝒂𝒃𝒆𝒓.'
  ]
  let frases75=[
    '𝑺𝒆𝒖𝒔 𝒐𝒍𝒉𝒂𝒓𝒆𝒔 𝒔𝒆 𝒑𝒓𝒆𝒏𝒅𝒆𝒎 𝒆𝒎 𝒖𝒎 𝒋𝒐𝒈𝒐 𝒅𝒆 𝒂𝒕𝒓𝒂𝒄𝒂𝒐, 𝒐𝒏𝒅𝒆 𝒐 𝒅𝒆𝒔𝒆𝒋𝒐 𝒅𝒆𝒔𝒑𝒆𝒓𝒕𝒂 𝒆𝒎 𝒖𝒎 𝒓𝒊𝒕𝒎𝒐 𝒄𝒓𝒆𝒔𝒄𝒆𝒏𝒕𝒆 𝒆𝒎 𝒂𝒎𝒃𝒐𝒔...',
    '𝑵𝒐 𝒔𝒊𝒍𝒆𝒏𝒄𝒊𝒐 𝒆𝒏𝒕𝒓𝒆 𝒆𝒍𝒆𝒔, 𝒂 𝒒𝒖𝒊𝒎𝒊𝒄𝒂 𝒆 𝒊𝒏𝒕𝒆𝒏𝒔𝒂, 𝒖𝒎𝒂 𝒕𝒆𝒏𝒔𝒂𝒐 𝒒𝒖𝒆 𝒑𝒓𝒐𝒎𝒆𝒕𝒆 𝒎𝒂𝒊𝒔 𝒅𝒐 𝒒𝒖𝒆 𝒑𝒂𝒍𝒂𝒗𝒓𝒂𝒔.',
    '𝑺𝒆𝒖𝒔 𝒐𝒍𝒉𝒂𝒓𝒆𝒔 𝒔𝒆 𝒆𝒏𝒄𝒐𝒏𝒕𝒓𝒂𝒎 𝒆𝒎 𝒖𝒎 𝒕𝒖𝒓𝒃𝒊𝒍𝒉𝒂𝒐 𝒅𝒆 𝒆𝒎𝒐𝒄𝒐𝒆𝒔, 𝒐𝒏𝒅𝒆 𝒐 𝒅𝒆𝒔𝒆𝒋𝒐 𝒔𝒆 𝒆𝒓𝒈𝒖𝒆 𝒄𝒐𝒎𝒐 𝒖𝒎𝒂 𝒕𝒆𝒎𝒑𝒆𝒔𝒕𝒂𝒅𝒆 𝒑𝒓𝒐𝒏𝒕𝒂 𝒑𝒂𝒓𝒂 𝒅𝒆𝒔𝒂𝒃𝒂𝒓...',
    '𝑬𝒏𝒕𝒓𝒆 𝒆𝒔𝒕𝒂𝒔 𝒅𝒖𝒂𝒔 𝒂𝒍𝒎𝒂𝒔, 𝒉𝒂 𝒖𝒎 𝒅𝒆𝒔𝒆𝒋𝒐 𝒍𝒂𝒕𝒆𝒏𝒕𝒆 𝒒𝒖𝒆 𝒔𝒆 𝒆𝒔𝒄𝒐𝒏𝒅𝒆 𝒄𝒐𝒎𝒐 𝒖𝒎𝒂 𝒏𝒆𝒗𝒐𝒂, 𝒆𝒏𝒗𝒐𝒍𝒗𝒆𝒏𝒅𝒐-𝒐𝒔 𝒆𝒎 𝒖𝒎 𝒆𝒏𝒊𝒈𝒎𝒂 𝒅𝒆 𝒑𝒐𝒔𝒔𝒊𝒃𝒊𝒍𝒊𝒅𝒂𝒅𝒆𝒔.']
    let frases100=[
      '𝑶 𝒅𝒆𝒔𝒆𝒋𝒐 𝒆𝒏𝒕𝒓𝒆 𝒆𝒍𝒆𝒔 𝒆 𝒖𝒎𝒂 𝒄𝒉𝒂𝒎𝒂 𝒂𝒓𝒅𝒆𝒏𝒕𝒆 𝒒𝒖𝒆 𝒄𝒐𝒏𝒔𝒐𝒎𝒆 𝒔𝒆𝒎 𝒑𝒊𝒆𝒅𝒂𝒅𝒆, 𝒂𝒍𝒊𝒎𝒆𝒏𝒕𝒂𝒅𝒂 𝒑𝒆𝒍𝒂 𝒒𝒖𝒊𝒎𝒊𝒄𝒂 𝒊𝒏𝒆𝒈𝒂𝒗𝒆𝒍 𝒅𝒆 𝒔𝒆𝒖𝒔 𝒆𝒔𝒑𝒊𝒓𝒊𝒕𝒐𝒔.',
      '𝑶 𝒆𝒏𝒄𝒐𝒏𝒕𝒓𝒐 𝒅𝒆 𝒔𝒖𝒂𝒔 𝒂𝒍𝒎𝒂𝒔 𝒆 𝒖𝒎 𝒑𝒂𝒄𝒕𝒐 𝒅𝒆 𝒅𝒆𝒔𝒆𝒋𝒐, 𝒖𝒎𝒂 𝒇𝒐𝒓𝒄𝒂 𝒔𝒐𝒃𝒓𝒆𝒏𝒂𝒕𝒖𝒓𝒂𝒍 𝒒𝒖𝒆 𝒕𝒓𝒂𝒏𝒔𝒄𝒆𝒏𝒅𝒆 𝒐 𝒄𝒐𝒎𝒖𝒎',
      '𝑶 𝒅𝒆𝒔𝒆𝒋𝒐 𝒆𝒏𝒕𝒓𝒆 𝒆𝒔𝒕𝒂𝒔 𝒂𝒍𝒎𝒂𝒔 𝒆 𝒂𝒗𝒂𝒔𝒔𝒂𝒍𝒂𝒅𝒐𝒓, 𝒖𝒎𝒂 𝒒𝒖𝒊𝒎𝒊𝒄𝒂 𝒊𝒓𝒓𝒆𝒔𝒊𝒔𝒕𝒊𝒗𝒆𝒍 𝒒𝒖𝒆 𝒅𝒆𝒔𝒂𝒇𝒊𝒂 𝒐 𝒅𝒆𝒔𝒕𝒊𝒏𝒐',
      '𝑨 𝒑𝒂𝒊𝒙𝒂𝒐 𝒆𝒏𝒕𝒓𝒆 𝒆𝒍𝒆𝒔 𝒆 𝒖𝒎 𝒗𝒆𝒏𝒅𝒂𝒗𝒂𝒍 𝒅𝒆 𝒔𝒆𝒏𝒕𝒊𝒎𝒆𝒏𝒕𝒐𝒔, 𝒖𝒎𝒂 𝒂𝒍𝒒𝒖𝒊𝒎𝒊𝒂 𝒔𝒐𝒎𝒃𝒓𝒊𝒂 𝒒𝒖𝒆 𝒖𝒏𝒆 𝒔𝒆𝒖𝒔 𝒅𝒆𝒔𝒕𝒊𝒏𝒐𝒔 𝒅𝒆 𝒎𝒂𝒏𝒆𝒊𝒓𝒂 𝒊𝒏𝒆𝒔𝒄𝒂𝒑𝒂𝒗𝒆𝒍.'
      ]

let fraseF
let calculo = Math.floor(Math.random() * 100) + 1;

if(calculo>=1 && calculo<=25)
{
  fraseF = pickRandom(frases25)
}
else if(calculo>=25 && calculo<=50)
{
  fraseF = pickRandom(frases50)
}
else if(calculo>=50 && calculo<=75)
{
  fraseF = pickRandom(frases75)
}
else if(calculo>=75 && calculo<=100)
{
  fraseF = pickRandom(frases100)
}

let tegxto = `╭───❖ 

♱ 𝑵𝒐 𝒄𝒓𝒆𝒑𝒖𝒔𝒄𝒖𝒍𝒐 𝒅𝒂 𝒏𝒐𝒊𝒕𝒆, 𝒆𝒔𝒕𝒊𝒎𝒂-𝒔𝒆 𝒒𝒖𝒆 𝒂 𝒄𝒉𝒂𝒏𝒄𝒆 𝒆𝒏𝒕𝒓𝒆 𝒆𝒔𝒕𝒆𝒔 𝒅𝒐𝒊𝒔 𝒆 𝒅𝒆 ${calculo}%

*|၊၊ ${fraseF}*

╰───❖ `
draw(tegxto)

  break 
case 'roubar':
case 'assaltar':
  
  async function reset(){
    let user = a => '@' + a.split('@')[0]
  let userData = global.db.data.chats[m.chat].users[m.sender];
      m.react("🔄")
        // Replenish attempts and update timestamp
        userData.tentativasRoubo = 5;
        userData.usuariosRoubados =[]
        global.db.data.chats[m.chat].users[m.sender].rouboTimestamp = new Date();
        console.log("Seus 5 tentativas de roubo foram reabastecidas. Boa sorte!");
        
             
             
        const sucesso = Math.random() < 0.8;

        if (sucesso) {
          if(global.db.data.chats[m.chat].users[m.sender].steals == undefined){
            global.db.data.chats[m.chat].users[m.sender].steals = 0
          }
          global.db.data.chats[m.chat].users[m.sender].steals++
          let rouf = Math.floor(Math.random() * (0.4 * global.db.data.chats[m.chat].users[who].money - 0.1 * global.db.data.chats[m.chat].users[who].money + 1)) + 0.1 * global.db.data.chats[m.chat].users[who].money;
          let roubo = parseInt(Math.round(rouf));
            global.db.data.chats[m.chat].users[who].money -= roubo;
            if(global.db.data.chats[m.chat].users[who].money <0){
            global.db.data.chats[m.chat].users[who].money =0
              
            }
            
            
            global.db.data.chats[m.chat].users[m.sender].money += roubo
            
            let mssg = `*╭─┅──┅❖*
җ 𝑵𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔 𝒅𝒂 𝒏𝒐𝒊𝒕𝒆, 𝒐 𝒄𝒓𝒊𝒎𝒆 𝒇𝒐𝒊 𝒄𝒐𝒏𝒔𝒖𝒎𝒂𝒅𝒐 𝒄𝒐𝒎 ê𝒙𝒊𝒕𝒐

${user(m.sender)}, 𝒄𝒐𝒎𝒐 𝒖𝒎𝒂 𝒔𝒐𝒎𝒃𝒓𝒂 𝒇𝒖𝒈𝒂𝒛, 
𝒔𝒖𝒃𝒕𝒓𝒂𝒊𝒖 ${roubo} 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ 𝒅𝒐 𝒅𝒐𝒎í𝒏𝒊𝒐 𝒅𝒆 ${user(who)}.

${pickRandom(frases)
}
*╰─┅──┅❖*`

await m.reply(mssg, null, { mentions: conn.parseMention(mssg)})
            console.log(`Você roubou ${roubo} moedas.`);
        } else {
          let perdaf = Math.floor(Math.random() * (0.4 * global.db.data.chats[m.chat].users[who].money - 0.1 * global.db.data.chats[m.chat].users[who].money + 1)) + 0.1 * global.db.data.chats[m.chat].users[who].money
         let perda = parseInt(Math.round(perdaf));
          global.db.data.chats[m.chat].users[m.sender].money -= perda
          if( global.db.data.chats[m.chat].users[m.sender].money<0){
             global.db.data.chats[m.chat].users[m.sender].money = 0
          }
          
          
            console.log("Ops.. você foi pego no flagra. Tente novamente.");
            
            m.reply(`─┅──┅❖ 💵 ❖─┅──┅
         𝚅𝚘𝚌𝚎 𝚏𝚘𝚒 𝚏𝚕𝚊𝚐𝚛𝚊𝚍𝚘! 𝚂𝚎𝚛𝚊 𝚙𝚞𝚗𝚒𝚍𝚘
            
${pickRandom(
            [`𝑸𝒖𝒆 𝒕𝒆𝒖 𝒊𝒏𝒇𝒐𝒓𝒕ú𝒏𝒊𝒐 𝒔𝒊𝒓𝒗𝒂 𝒅𝒆 𝒂𝒅𝒗𝒆𝒓𝒕ê𝒏𝒄𝒊𝒂: ${perda} 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ 𝒔𝒆 𝒅𝒆𝒔𝒗𝒂𝒏𝒆𝒄𝒆𝒓𝒂𝒎 𝒆𝒎 𝒕𝒆𝒖 𝒇𝒓𝒂𝒄𝒂𝒔𝒔𝒐. 𝑬𝒔𝒄𝒐𝒍𝒉𝒆 𝒄𝒐𝒎 𝒄𝒂𝒖𝒕𝒆𝒍𝒂, 𝒑𝒐𝒊𝒔 𝒂 𝒊𝒎𝒑𝒓𝒖𝒅ê𝒏𝒄𝒊𝒂 𝒑𝒐𝒅𝒆 𝒍𝒆𝒗𝒂𝒓 à 𝒑𝒆𝒓𝒅𝒂.`,
            
  `𝑨𝒕𝒆𝒏çã𝒐: ${perda} 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ 𝒇𝒐𝒓𝒂𝒎 𝒑𝒆𝒓𝒅𝒊𝒅𝒂𝒔 𝒆𝒎 𝒕𝒆𝒖 𝒇𝒓𝒂𝒄𝒂𝒔𝒔𝒐. 𝑸𝒖𝒆 𝒆𝒔𝒕𝒂 𝒑𝒆𝒓𝒅𝒂 𝒕𝒆 𝒆𝒏𝒔𝒊𝒏𝒆 𝒂 𝒔𝒆𝒓 𝒑𝒓𝒖𝒅𝒆𝒏𝒕𝒆 𝒆𝒎 𝒕𝒖𝒂𝒔 𝒆𝒔𝒄𝒐𝒍𝒉𝒂𝒔.`,
  `𝑬𝒊𝒔 𝒂 𝒂𝒅𝒗𝒆𝒓𝒕ê𝒏𝒄𝒊𝒂 𝒔𝒐𝒎𝒃𝒓𝒊𝒂: ${perda} 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ 𝒇𝒐𝒓𝒂𝒎 𝒕𝒓𝒂𝒈𝒂𝒅𝒂𝒔 𝒑𝒆𝒍𝒂 𝒗𝒐𝒓𝒂𝒈𝒆𝒎 𝒅𝒆 𝒕𝒆𝒖 𝒇𝒓𝒂𝒄𝒂𝒔𝒔𝒐. 𝑸𝒖𝒆 𝒆𝒔𝒕𝒆 𝒊𝒏𝒇𝒐𝒓𝒕ú𝒏𝒊𝒐 𝒕𝒆 𝒈𝒖𝒊𝒆 𝒑𝒆𝒍𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔 𝒅𝒂 𝒊𝒎𝒑𝒓𝒖𝒅ê𝒏𝒄𝒊𝒂, 𝒍𝒆𝒎𝒃𝒓𝒂𝒏𝒅𝒐-𝒕𝒆 𝒔𝒆𝒎𝒑𝒓𝒆 𝒅𝒂 𝒇𝒓𝒂𝒈𝒊𝒍𝒊𝒅𝒂𝒅𝒆 𝒅𝒂𝒔 𝒆𝒔𝒄𝒐𝒍𝒉𝒂𝒔.`,
  `𝑨𝒕𝒆𝒏çã𝒐, 𝒂𝒍𝒎𝒂 𝒅𝒆𝒔𝒗𝒆𝒏𝒕𝒖𝒓𝒂𝒅𝒂: ${perda} 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ 𝒔𝒖𝒄𝒖𝒎𝒃𝒊𝒓𝒂𝒎 à 𝒕𝒖𝒂 𝒒𝒖𝒆𝒅𝒂. 𝑸𝒖𝒆 𝒆𝒔𝒕𝒆 𝒅𝒆𝒔𝒂𝒔𝒕𝒓𝒆 𝒕𝒆 𝒔𝒊𝒓𝒗𝒂 𝒄𝒐𝒎𝒐 𝒖𝒎𝒂 𝒔𝒐𝒎𝒃𝒓𝒂 𝒑𝒆𝒓𝒑é𝒕𝒖𝒂, 𝒍𝒆𝒎𝒃𝒓𝒂𝒏𝒅𝒐-𝒕𝒆 𝒅𝒂𝒔 𝒄𝒐𝒏𝒔𝒆𝒒𝒖ê𝒏𝒄𝒊𝒂𝒔 𝒅𝒂 𝒊𝒎𝒑𝒓𝒖𝒅ê𝒏𝒄𝒊𝒂 𝒆𝒎 𝒕𝒆𝒖𝒔 𝒑𝒂𝒔𝒔𝒐𝒔.`,
  `𝑨𝒍𝒆𝒓𝒕𝒂: ${perda} 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ 𝒔𝒆 𝒅𝒊𝒔𝒔𝒊𝒑𝒂𝒓𝒂𝒓𝒂 𝒆𝒎 𝒕𝒆𝒖 𝒇𝒓𝒂𝒄𝒂𝒔𝒔𝒐. 𝑸𝒖𝒆 𝒆𝒔𝒕𝒆 𝒍𝒂𝒎𝒆𝒏𝒕𝒐 𝒕𝒆 𝒆𝒏𝒔𝒊𝒏𝒆 𝒂 𝒕𝒓𝒊𝒍𝒉𝒂𝒓 𝒄𝒐𝒎 𝒄𝒂𝒖𝒕𝒆𝒍𝒂 𝒐𝒔 𝒄𝒂𝒎𝒊𝒏𝒉𝒐𝒔 𝒆𝒔𝒄𝒖𝒓𝒐𝒔 𝒅𝒂 𝒇𝒐𝒓𝒕𝒖𝒏𝒂.`,
  `𝑸𝒖𝒆 𝒆𝒔𝒕𝒂 𝒑𝒖𝒏𝒊çã𝒐 𝒔𝒆𝒋𝒂 𝒕𝒖𝒂 𝒄𝒓𝒖𝒛: ${perda} 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ 𝒇𝒐𝒓𝒂𝒎 𝒅𝒆𝒗𝒐𝒓𝒂𝒅𝒂𝒔 𝒑𝒆𝒍𝒐 𝒂𝒃𝒊𝒔𝒎𝒐 𝒅𝒆 𝒕𝒆𝒖 𝒆𝒓𝒓𝒐. 𝑸𝒖𝒆 𝒔𝒆𝒖 𝒆𝒄𝒐 𝒔𝒆𝒋𝒂 𝒕𝒆𝒖 𝒈𝒖𝒊𝒂, 𝒍𝒆𝒎𝒃𝒓𝒂𝒏𝒅𝒐-𝒕𝒆 𝒄𝒐𝒏𝒔𝒕𝒂𝒏𝒕𝒆𝒎𝒆𝒏𝒕𝒆 𝒅𝒂 𝒅𝒐𝒓 𝒄𝒂𝒖𝒔𝒂𝒅𝒂 𝒑𝒆𝒍𝒂 𝒊𝒎𝒑𝒓𝒖𝒅ê𝒏𝒄𝒊𝒂.`,
  `𝑸𝒖𝒆 𝒆𝒔𝒕𝒂 𝒑𝒆𝒓𝒅𝒂 𝒔𝒆𝒋𝒂 𝒕𝒖𝒂 𝒑𝒆𝒏𝒊𝒕ê𝒏𝒄𝒊𝒂: ${perda} 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ 𝒔𝒆 𝒅𝒆𝒔𝒗𝒂𝒏𝒆𝒄𝒆𝒓𝒂𝒎, 𝒄𝒐𝒎𝒐 𝒖𝒎𝒂 𝒑𝒖𝒏𝒊çã𝒐 𝒑𝒐𝒓 𝒕𝒖𝒂 𝒇𝒂𝒍𝒉𝒂. 𝑸𝒖𝒆 𝒔𝒆𝒖 𝒆𝒄𝒐 𝒍ú𝒈𝒖𝒃𝒓𝒆 𝒕𝒆 𝒂𝒄𝒐𝒎𝒑𝒂𝒏𝒉𝒆, 𝒓𝒆𝒄𝒐𝒓𝒅𝒂𝒏𝒅𝒐-𝒕𝒆 𝒅𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔 𝒒𝒖𝒆 𝒑𝒂𝒊𝒓𝒂𝒎 𝒔𝒐𝒃𝒓𝒆 𝒐𝒔 𝒒𝒖𝒆 𝒐𝒖𝒔𝒂𝒎 𝒅𝒆𝒔𝒂𝒇𝒊𝒂𝒓 𝒂 𝒑𝒓𝒖𝒅ê𝒏𝒄𝒊𝒂.`,
  `𝑸𝒖𝒆 𝒆𝒔𝒕𝒆 𝒂𝒎𝒂𝒓𝒈𝒂 𝒑𝒆𝒏𝒂𝒍𝒊𝒅𝒂𝒅𝒆 𝒕𝒆 𝒂𝒔𝒔𝒐𝒎𝒃𝒓𝒆: ${perda} 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ 𝒔𝒆 𝒅𝒊𝒔𝒔𝒊𝒑𝒂𝒓𝒂𝒎, 𝒄𝒐𝒎𝒐 𝒖𝒎 𝒄𝒂𝒔𝒕𝒊𝒈𝒐 𝒑𝒐𝒓 𝒕𝒖𝒂 𝒅𝒆𝒓𝒓𝒐𝒕𝒂. 𝑸𝒖𝒆 𝒔𝒆𝒖 𝒆𝒄𝒐 𝒔𝒐𝒎𝒃𝒓𝒊𝒐 𝒕𝒆 𝒑𝒆𝒓𝒔𝒊𝒈𝒂, 𝒓𝒆𝒍𝒆𝒎𝒃𝒓𝒂𝒏𝒅𝒐-𝒕𝒆 𝒅𝒂𝒔 𝒄𝒐𝒏𝒔𝒆𝒒𝒖ê𝒏𝒄𝒊𝒂𝒔 𝒕𝒆𝒓𝒓í𝒗𝒆𝒊𝒔 𝒅𝒂 𝒊𝒎𝒑𝒓𝒖𝒅ê𝒏𝒄𝒊𝒂.`,
  `𝑸𝒖𝒆 𝒆𝒔𝒕𝒆 𝒂𝒎𝒂𝒓𝒈𝒂 𝒑𝒆𝒓𝒏𝒂𝒍𝒊𝒅𝒂𝒅𝒆 𝒕𝒆 𝒇𝒍𝒂𝒈𝒆𝒍𝒐 𝒕𝒆 𝒄𝒐𝒏𝒔𝒖𝒎𝒂: ${perda} 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ 𝒅𝒆𝒔𝒂𝒑𝒂𝒓𝒆𝒄𝒆𝒓𝒂𝒎, 𝒄𝒐𝒎𝒐 𝒖𝒎𝒂 𝒔𝒆𝒏𝒕𝒆𝒏ç𝒂 𝒑𝒐𝒓 𝒕𝒖𝒂 𝒒𝒖𝒆𝒅𝒂. 𝑸𝒖𝒆 𝒔𝒖𝒂 𝒔𝒐𝒎𝒃𝒓𝒂 𝒕𝒆 𝒂𝒕𝒐𝒓𝒎𝒆𝒏𝒕𝒆, 𝒂𝒅𝒗𝒆𝒓𝒕𝒊𝒏𝒅𝒐-𝒕𝒆 𝒅𝒂𝒔 𝒄𝒐𝒏𝒔𝒆𝒒𝒖ê𝒏𝒄𝒊𝒂𝒔 𝒕𝒆𝒓𝒓í𝒗𝒆𝒊𝒔 𝒅𝒂 𝒊𝒎𝒑𝒓𝒖𝒅ê𝒏𝒄𝒊𝒂.`,
  `𝑸𝒖𝒆 𝒆𝒔𝒕𝒆 𝒇𝒍𝒂𝒈𝒆𝒍𝒐 𝒕𝒆 𝒂𝒎𝒑𝒂𝒏𝒉𝒆𝒊𝒓: ${perda} 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ 𝒅𝒆 𝒔𝒆𝒓 𝒗í𝒕𝒊𝒎𝒂𝒔 𝒄𝒖𝒆 𝒔𝒆 𝒃𝒂𝒔𝒆𝒊𝒂𝒎 𝒏𝒂 𝒑𝒂𝒔𝒔𝒂𝒈𝒆𝒎, 𝒄𝒐𝒎𝒐 𝒑𝒐𝒅𝒆 𝒍𝒆𝒈𝒂𝒍.`,
  `𝑸𝒖𝒆 𝒆𝒔𝒕𝒆 𝒇𝒍𝒂𝒈𝒆𝒍𝒐 𝒕𝒆 𝒄𝒐𝒏𝒔𝒖𝒎𝒂: ${perda} 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ 𝒅𝒆𝒔𝒂𝒑𝒂𝒓𝒆𝒄𝒆𝒓𝒂𝒎, 𝒄𝒐𝒎𝒐 𝒖𝒎𝒂 𝒔𝒆𝒏𝒕𝒆𝒏ç𝒂 𝒑𝒐𝒓 𝒕𝒖𝒂 𝒒𝒖𝒆𝒅𝒂. 𝑸𝒖𝒆 𝒔𝒆𝒖 𝒔𝒐𝒎𝒃𝒓𝒂 𝒕𝒆 𝒂𝒕𝒐𝒓𝒎𝒆𝒏𝒕𝒆, 𝒂𝒅𝒗𝒆𝒓𝒕𝒊𝒏𝒅𝒐-𝒕𝒆 𝒅𝒂𝒔 𝒄𝒐𝒏𝒔𝒆𝒒𝒖ê𝒏𝒄𝒊𝒂𝒔 𝒕𝒆𝒓𝒓í𝒗𝒆𝒊𝒔 𝒅𝒂 𝒊𝒎𝒑𝒓𝒖𝒅ê𝒏𝒄𝒊𝒂.`,
  `𝑸𝒖𝒆 𝒆𝒔𝒕𝒆 𝒇𝒍𝒂𝒈𝒆𝒍𝒐 𝒕𝒆 𝒂𝒎𝒂𝒓𝒈𝒂 𝒑𝒆𝒓𝒅𝒂 𝒔𝒆𝒋𝒂 𝒕𝒖𝒂 𝒑𝒆𝒏𝒊𝒕ê𝒏𝒄𝒊𝒂: ${perda} 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ 𝒅𝒆𝒔𝒗𝒂𝒏𝒆𝒄𝒆𝒓𝒂𝒎, 𝒄𝒐𝒎𝒐 𝒖𝒎𝒂 𝒔𝒆𝒏𝒕𝒆𝒏ç𝒂` ])}
  
  ─┅──┅❖ ⸸ ❖─┅──┅
  `)
        }
        

        global.db.data.chats[m.chat].users[m.sender].tentativasRoubo -= 1
        
if(!global.db.data.chats[m.chat].users[m.sender].usuariosRoubados){
  global.db.data.chats[m.chat].users[m.sender].usuariosRoubados=[]
}
           global.db.data.chats[m.chat].users[m.sender].usuariosRoubados.push(who);   global.db.data.chats[m.chat].users[m.sender].lastAttemptTimestamp = currentTime;
 
}
 
  if(!who){
    conn.reply(m.chat, why, m, { mentions: [m.sender]})
  }
  if( m.sender == global.criador || m.sender==global.cocriador){
      let valor
      if(args[1]){
      if (/^\d+$/.test(args[0])) valor = args[0]
      if (/^\d+$/.test(args[1])) valor = args[1]
      }  
      if (/^\d+$/.test(args[0])) valor = args[0]
      
      
      let money = global.db.data.chats[m.chat].users[who].money
let edns = valor ? valor : Math.floor(Math.random() * (money/3))

        let dinheiro= parseInt(Math.round(edns));
        if(dinheiro<0) dinheiro *=-1
        global.db.data.chats[m.chat].users[who].money -= dinheiro
        
                let uss = a => '@' + a.split('@')[0]
            let mssm = `*╭─┅──┅❖*
━━━⬣ ${uss(who)}
${pickRandom([`\n𖤍  𝑶 𝑬𝒔𝒕𝒂𝒅𝒐 𝒊𝒏𝒔𝒕𝒂𝒖𝒓𝒐𝒖 𝒊𝒎𝒑𝒐𝒔𝒕𝒐𝒔 𝒔𝒐𝒃𝒓𝒆 𝒕𝒊. 𝑷𝒆𝒓𝒅𝒆𝒓𝒂𝒔 ${dinheiro} 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ. 
 
җ 𝑶 𝑮𝒓𝒂𝒏𝒅𝒆 𝑰𝒓𝒎𝒂𝒐 𝒕𝒐𝒎𝒐𝒖 𝒕𝒖𝒂 𝒆𝒄𝒐𝒏𝒐𝒎𝒊𝒂 𝒅𝒊𝒈𝒊𝒕𝒂𝒍 𝒆 𝒄𝒐𝒏𝒇𝒊𝒔𝒄𝒐𝒖 𝒕𝒆𝒖𝒔 𝒃𝒆𝒏𝒔. 𝑨 𝒐𝒑𝒓𝒆𝒔𝒔𝒂𝒐 𝒓𝒆𝒊𝒏𝒂 𝒏𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔

*╰─┅──┅❖*`,
`\n𖤍  𝑶 𝑮𝒓𝒂𝒏𝒅𝒆 𝑰𝒓𝒎𝒂𝒐 𝒆𝒙𝒊𝒈𝒆 𝒂 𝒄𝒐𝒍𝒆𝒕𝒂 𝒅𝒆 𝒅𝒂𝒓𝒌𝒄𝒐𝒊𝒏𝒔 𝒄𝒐𝒎𝒐 𝒊𝒎𝒑𝒐𝒔𝒕𝒐 𝒆𝒔𝒕𝒂𝒕𝒂𝒍.
 𝑷𝒆𝒓𝒅𝒆𝒓𝒂𝒔 ${dinheiro} 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ. 
җ 𝑶 𝑮𝒓𝒂𝒏𝒅𝒆 𝑰𝒓𝒎𝒂𝒐 𝒂𝒈𝒓𝒂𝒅𝒆𝒄𝒆 𝒕𝒖𝒂 𝒄𝒐𝒎𝒑𝒓𝒆𝒆𝒏𝒔𝒂𝒐.

*╰─┅──┅❖*`,
`\n𖤍  𝑶 𝑮𝒓𝒂𝒏𝒅𝒆 𝑰𝒓𝒎𝒂𝒐 𝒅𝒆𝒄𝒓𝒆𝒕𝒂 𝒂 𝒄𝒐𝒃𝒓𝒂𝒏𝒄𝒂 𝒅𝒐 𝒊𝒎𝒑𝒐𝒔𝒕𝒐 𝒅𝒐 𝑬𝒔𝒕𝒂𝒅𝒐.
 𝑷𝒆𝒓𝒅𝒆𝒓𝒂𝒔 ${dinheiro} 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ. 
җ 𝑶 𝑮𝒓𝒂𝒏𝒅𝒆 𝑰𝒓𝒎𝒂𝒐 𝒂𝒈𝒓𝒂𝒅𝒆𝒄𝒆 𝒕𝒖𝒂 𝒄𝒐𝒎𝒑𝒓𝒆𝒆𝒏𝒔𝒂𝒐.

*╰─┅──┅❖*`,
`\n𖤍  𝑶 𝑮𝒓𝒂𝒏𝒅𝒆 𝑰𝒓𝒎𝒂𝒐 𝒑𝒓𝒐𝒄𝒍𝒂𝒎𝒂 𝒂 𝒄𝒐𝒍𝒆𝒕𝒂 𝒅𝒆 𝒊𝒎𝒑𝒐𝒔𝒕𝒐𝒔 𝒅𝒐 𝑬𝒔𝒕𝒂𝒅𝒐: 
 ${dinheiro} 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ 𝒔𝒆𝒓𝒂𝒐 𝒄𝒐𝒏𝒇𝒊𝒔𝒄𝒂𝒅𝒐𝒔.
 
җ 𝑶 𝑮𝒓𝒂𝒏𝒅𝒆 𝑰𝒓𝒎𝒂𝒐 𝒂𝒈𝒓𝒂𝒅𝒆𝒄𝒆 𝒕𝒖𝒂 𝒄𝒐𝒎𝒑𝒓𝒆𝒆𝒏𝒔𝒂𝒐.

*╰─┅──┅❖*`
])}`

return m.reply(mssm, null, { mentions: conn.parseMention(mssm)})
   
    }
    if(m.quoted && m.quoted.sender && !args[0]){
      
     if(global.criador.includes(who))
    {
      
        let finf = Math.floor(Math.random() * (0.8 * global.db.data.chats[m.chat].users[m.sender].money - 0.3 * global.db.data.chats[m.chat].users[m.sender].money + 1)) + 0.3 * global.db.data.chats[m.chat].users[m.sender].money;
        let dinheiro = parseInt(Math.round(finf));
        global.db.data.chats[m.chat].users[m.sender].money -= dinheiro
      m.reply(`${pickRandom([
        
        `𝑪𝒐𝒎𝒐 𝒐𝒖𝒔𝒂 𝒓𝒐𝒖𝒃𝒂𝒓 𝒎𝒆𝒖 𝒄𝒓𝒊𝒂𝒅𝒐𝒓? 𝑷𝒆𝒓𝒅𝒆𝒔 ${dinheiro} 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ 𝒄𝒐𝒎𝒐 𝒂 𝒑𝒖𝒏𝒊çã𝒐 𝒒𝒖𝒆 𝒐 𝒂𝒈𝒖𝒂𝒓𝒅𝒂 𝒆 𝒕ã𝒐 𝒔𝒐𝒎𝒃𝒓𝒊𝒂 𝒒𝒖𝒂𝒏𝒕𝒐 𝒐𝒔 𝒂𝒃𝒊𝒔𝒎𝒐𝒔 𝒎𝒂𝒊𝒔 𝒑𝒓𝒐𝒇𝒖𝒏𝒅𝒐𝒔, 𝒆 𝒐 𝒑𝒆𝒔𝒐 𝒅𝒐 𝒔𝒆𝒖 𝒂𝒓𝒓𝒆𝒑𝒆𝒏𝒅𝒊𝒎𝒆𝒏𝒕𝒐 𝒔𝒆𝒓𝒂 𝒄𝒐𝒎𝒐 𝒄𝒐𝒓𝒓𝒆𝒏𝒕𝒆𝒔 𝒈𝒆𝒍𝒊𝒅𝒂𝒔 𝒂𝒓𝒓𝒂𝒔𝒕𝒂𝒏𝒅𝒐-𝒐 𝒑𝒂𝒓𝒂 𝒂 𝒆𝒕𝒆𝒓𝒏𝒂 𝒑𝒆𝒏𝒖𝒎𝒃𝒓𝒂.`,
        
        `𝑪𝒐𝒎𝒐 𝒐𝒖𝒔𝒂 𝒑𝒓𝒐𝒇𝒂𝒏𝒂𝒓 𝒐 𝒎𝒆𝒖 𝒄𝒓𝒊𝒂𝒅𝒐𝒓? 𝑨 𝒑𝒖𝒏𝒊𝒄𝒂𝒐 𝒒𝒖𝒆 𝒂𝒈𝒖𝒂𝒓𝒅𝒂 é 𝒖𝒎𝒂 𝒕𝒆𝒎𝒑𝒆𝒔𝒕𝒂𝒅𝒆 𝒅𝒆 𝒆𝒔𝒄𝒖𝒓𝒊𝒅𝒂𝒐, 𝒐𝒏𝒅𝒆 𝒐 𝒍𝒂𝒎𝒆𝒏𝒕𝒐 𝒅𝒐 𝒔𝒆𝒖 𝒂𝒓𝒓𝒆𝒑𝒆𝒏𝒅𝒊𝒎𝒆𝒏𝒕𝒐 𝒆𝒄𝒐𝒂𝒓𝒂 𝒑𝒆𝒍𝒐𝒔 𝒄𝒐𝒓𝒓𝒆𝒅𝒐𝒓𝒆𝒔 𝒔𝒐𝒎𝒃𝒓𝒊𝒐𝒔 𝒅𝒂 𝒆𝒕𝒆𝒓𝒏𝒊𝒅𝒂𝒅𝒆.
𝑷𝒆𝒓𝒅𝒆𝒔 ${dinheiro} 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ`,

`𝑪𝒐𝒎𝒐 𝒂𝒖𝒅𝒂𝒛𝒎𝒆𝒏𝒕𝒆 𝒕𝒆 𝒂𝒕𝒓𝒆𝒗𝒆𝒔 𝒂 𝒓𝒐𝒖𝒃𝒂𝒓 𝒎𝒆𝒖 𝒄𝒓𝒊𝒂𝒅𝒐𝒓? 𝑨 𝒑𝒖𝒏𝒊𝒄𝒂𝒐 𝒒𝒖𝒆 𝒕𝒆 𝒆𝒔𝒑𝒆𝒓𝒂 𝒆 𝒖𝒎𝒂 𝒅𝒂𝒏ç𝒂 𝒎𝒂𝒄𝒂𝒃𝒓𝒂 𝒄𝒐𝒎 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔, 𝒐𝒏𝒅𝒆 𝒐 𝒍𝒂𝒎𝒆𝒏𝒕𝒐 𝒅𝒐 𝒕𝒆𝒖 𝒂𝒓𝒓𝒆𝒑𝒆𝒏𝒅𝒊𝒎𝒆𝒏𝒕𝒐 𝒆𝒄𝒐𝒂𝒓𝒂 𝒆𝒕𝒆𝒓𝒏𝒂𝒎𝒆𝒏𝒕𝒆 𝒑𝒆𝒍𝒐𝒔 𝒄𝒐𝒓𝒓𝒆𝒅𝒐𝒓𝒆𝒔 𝒅𝒂 𝒄𝒐𝒏𝒅𝒆𝒏𝒂𝒄𝒂𝒐.
𝑷𝒆𝒓𝒅𝒆𝒔 ${dinheiro} 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ`

        ])}`)
      
      return !0
    }
        if(global.cocriador.includes(who))
    {
      
        let finf = Math.floor(Math.random() * (0.8 * global.db.data.chats[m.chat].users[m.sender].money - 0.3 * global.db.data.chats[m.chat].users[m.sender].money + 1)) + 0.3 * global.db.data.chats[m.chat].users[m.sender].money;
        let dinheiro = parseInt(Math.round(finf));
        global.db.data.chats[m.chat].users[m.sender].money -= dinheiro
      m.reply(`${pickRandom([
        
        `𝑪𝒐𝒎𝒐 𝒐𝒖𝒔𝒂 𝒓𝒐𝒖𝒃𝒂𝒓 𝒎𝒊𝒏𝒉𝒂 𝒄𝒓𝒊𝒂𝒅𝒐𝒓𝒂? 𝑷𝒆𝒓𝒅𝒆𝒔 ${dinheiro} 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ 𝒄𝒐𝒎𝒐 𝒂 𝒑𝒖𝒏𝒊çã𝒐 𝒒𝒖𝒆 𝒐 𝒂𝒈𝒖𝒂𝒓𝒅𝒂 𝒆 𝒕ã𝒐 𝒔𝒐𝒎𝒃𝒓𝒊𝒂 𝒒𝒖𝒂𝒏𝒕𝒐 𝒐𝒔 𝒂𝒃𝒊𝒔𝒎𝒐𝒔 𝒎𝒂𝒊𝒔 𝒑𝒓𝒐𝒇𝒖𝒏𝒅𝒐𝒔, 𝒆 𝒐 𝒑𝒆𝒔𝒐 𝒅𝒐 𝒔𝒆𝒖 𝒂𝒓𝒓𝒆𝒑𝒆𝒏𝒅𝒊𝒎𝒆𝒏𝒕𝒐 𝒔𝒆𝒓𝒂 𝒄𝒐𝒎𝒐 𝒄𝒐𝒓𝒓𝒆𝒏𝒕𝒆𝒔 𝒈𝒆𝒍𝒊𝒅𝒂𝒔 𝒂𝒓𝒓𝒂𝒔𝒕𝒂𝒏𝒅𝒐-𝒐 𝒑𝒂𝒓𝒂 𝒂 𝒆𝒕𝒆𝒓𝒏𝒂 𝒑𝒆𝒏𝒖𝒎𝒃𝒓𝒂.`,
        
        `𝑪𝒐𝒎𝒐 𝒐𝒖𝒔𝒂 𝒑𝒓𝒐𝒇𝒂𝒏𝒂𝒓 𝒎𝒊𝒏𝒉𝒂 𝒄𝒓𝒊𝒂𝒅𝒐𝒓𝒂? 𝑨 𝒑𝒖𝒏𝒊𝒄𝒂𝒐 𝒒𝒖𝒆 𝒂𝒈𝒖𝒂𝒓𝒅𝒂 é 𝒖𝒎𝒂 𝒕𝒆𝒎𝒑𝒆𝒔𝒕𝒂𝒅𝒆 𝒅𝒆 𝒆𝒔𝒄𝒖𝒓𝒊𝒅𝒂𝒐, 𝒐𝒏𝒅𝒆 𝒐 𝒍𝒂𝒎𝒆𝒏𝒕𝒐 𝒅𝒐 𝒔𝒆𝒖 𝒂𝒓𝒓𝒆𝒑𝒆𝒏𝒅𝒊𝒎𝒆𝒏𝒕𝒐 𝒆𝒄𝒐𝒂𝒓𝒂 𝒑𝒆𝒍𝒐𝒔 𝒄𝒐𝒓𝒓𝒆𝒅𝒐𝒓𝒆𝒔 𝒔𝒐𝒎𝒃𝒓𝒊𝒐𝒔 𝒅𝒂 𝒆𝒕𝒆𝒓𝒏𝒊𝒅𝒂𝒅𝒆.
𝑷𝒆𝒓𝒅𝒆𝒔 ${dinheiro} 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ`,

`𝑪𝒐𝒎𝒐 𝒂𝒖𝒅𝒂𝒛𝒎𝒆𝒏𝒕𝒆 𝒕𝒆 𝒂𝒕𝒓𝒆𝒗𝒆𝒔 𝒂 𝒓𝒐𝒖𝒃𝒂𝒓 𝒎𝒊𝒏𝒉𝒂 𝒄𝒓𝒊𝒂𝒅𝒐𝒓𝒂? 𝑨 𝒑𝒖𝒏𝒊𝒄𝒂𝒐 𝒒𝒖𝒆 𝒕𝒆 𝒆𝒔𝒑𝒆𝒓𝒂 𝒆 𝒖𝒎𝒂 𝒅𝒂𝒏ç𝒂 𝒎𝒂𝒄𝒂𝒃𝒓𝒂 𝒄𝒐𝒎 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔, 𝒐𝒏𝒅𝒆 𝒐 𝒍𝒂𝒎𝒆𝒏𝒕𝒐 𝒅𝒐 𝒕𝒆𝒖 𝒂𝒓𝒓𝒆𝒑𝒆𝒏𝒅𝒊𝒎𝒆𝒏𝒕𝒐 𝒆𝒄𝒐𝒂𝒓𝒂 𝒆𝒕𝒆𝒓𝒏𝒂𝒎𝒆𝒏𝒕𝒆 𝒑𝒆𝒍𝒐𝒔 𝒄𝒐𝒓𝒓𝒆𝒅𝒐𝒓𝒆𝒔 𝒅𝒂 𝒄𝒐𝒏𝒅𝒆𝒏𝒂𝒄𝒂𝒐.
𝑷𝒆𝒓𝒅𝒆𝒔 ${dinheiro} 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ`

        ])}`)
      
      return !0
    }
    if(who == conn.user.jid)
    {
      
      let finf = Math.floor(Math.random() * (0.8 * global.db.data.chats[m.chat].users[m.sender].money - 0.3 * global.db.data.chats[m.chat].users[m.sender].money + 1)) + 0.3 * global.db.data.chats[m.chat].users[m.sender].money;
        let dinheiro = parseInt(Math.round(finf));
        global.db.data.chats[m.chat].users[m.sender].money -= dinheiro
      m.reply(`${pickRandom([
        
        `𝑪𝒐𝒎𝒐 𝒐𝒖𝒔𝒂 𝒎𝒆 𝒓𝒐𝒖𝒃𝒂𝒓? 𝑷𝒆𝒓𝒅𝒆𝒔 ${dinheiro} 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ 𝒄𝒐𝒎𝒐 𝒂 𝒑𝒖𝒏𝒊çã𝒐 𝒒𝒖𝒆 𝒐 𝒂𝒈𝒖𝒂𝒓𝒅𝒂 𝒆 𝒕ã𝒐 𝒔𝒐𝒎𝒃𝒓𝒊𝒂 𝒒𝒖𝒂𝒏𝒕𝒐 𝒐𝒔 𝒂𝒃𝒊𝒔𝒎𝒐𝒔 𝒎𝒂𝒊𝒔 𝒑𝒓𝒐𝒇𝒖𝒏𝒅𝒐𝒔, 𝒆 𝒐 𝒑𝒆𝒔𝒐 𝒅𝒐 𝒔𝒆𝒖 𝒂𝒓𝒓𝒆𝒑𝒆𝒏𝒅𝒊𝒎𝒆𝒏𝒕𝒐 𝒔𝒆𝒓𝒂 𝒄𝒐𝒎𝒐 𝒄𝒐𝒓𝒓𝒆𝒏𝒕𝒆𝒔 𝒈𝒆𝒍𝒊𝒅𝒂𝒔 𝒂𝒓𝒓𝒂𝒔𝒕𝒂𝒏𝒅𝒐-𝒐 𝒑𝒂𝒓𝒂 𝒂 𝒆𝒕𝒆𝒓𝒏𝒂 𝒑𝒆𝒏𝒖𝒎𝒃𝒓𝒂.`,
        
        `𝑪𝒐𝒎𝒐 𝒐𝒖𝒔𝒂 𝒑𝒓𝒐𝒇𝒂𝒏𝒂𝒓 𝒂 𝒎𝒊𝒏𝒉𝒂 𝒆𝒏𝒕𝒊𝒅𝒂𝒅𝒆? 𝑨 𝒑𝒖𝒏𝒊𝒄𝒂𝒐 𝒒𝒖𝒆 𝒂𝒈𝒖𝒂𝒓𝒅𝒂 é 𝒖𝒎𝒂 𝒕𝒆𝒎𝒑𝒆𝒔𝒕𝒂𝒅𝒆 𝒅𝒆 𝒆𝒔𝒄𝒖𝒓𝒊𝒅𝒂𝒐, 𝒐𝒏𝒅𝒆 𝒐 𝒍𝒂𝒎𝒆𝒏𝒕𝒐 𝒅𝒐 𝒔𝒆𝒖 𝒂𝒓𝒓𝒆𝒑𝒆𝒏𝒅𝒊𝒎𝒆𝒏𝒕𝒐 𝒆𝒄𝒐𝒂𝒓𝒂 𝒑𝒆𝒍𝒐𝒔 𝒄𝒐𝒓𝒓𝒆𝒅𝒐𝒓𝒆𝒔 𝒔𝒐𝒎𝒃𝒓𝒊𝒐𝒔 𝒅𝒂 𝒆𝒕𝒆𝒓𝒏𝒊𝒅𝒂𝒅𝒆.
𝑷𝒆𝒓𝒅𝒆𝒔 ${dinheiro} 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ`,

`𝑪𝒐𝒎𝒐 𝒂𝒖𝒅𝒂𝒛𝒎𝒆𝒏𝒕𝒆 𝒕𝒆 𝒂𝒕𝒓𝒆𝒗𝒆𝒔 𝒂 𝒓𝒐𝒖𝒃𝒂𝒓 𝒂 𝒎𝒊𝒏𝒉𝒂 𝒇𝒐𝒓𝒕𝒖𝒏𝒂? 𝑨 𝒑𝒖𝒏𝒊𝒄𝒂𝒐 𝒒𝒖𝒆 𝒕𝒆 𝒆𝒔𝒑𝒆𝒓𝒂 𝒆 𝒖𝒎𝒂 𝒅𝒂𝒏ç𝒂 𝒎𝒂𝒄𝒂𝒃𝒓𝒂 𝒄𝒐𝒎 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔, 𝒐𝒏𝒅𝒆 𝒐 𝒍𝒂𝒎𝒆𝒏𝒕𝒐 𝒅𝒐 𝒕𝒆𝒖 𝒂𝒓𝒓𝒆𝒑𝒆𝒏𝒅𝒊𝒎𝒆𝒏𝒕𝒐 𝒆𝒄𝒐𝒂𝒓𝒂 𝒆𝒕𝒆𝒓𝒏𝒂𝒎𝒆𝒏𝒕𝒆 𝒑𝒆𝒍𝒐𝒔 𝒄𝒐𝒓𝒓𝒆𝒅𝒐𝒓𝒆𝒔 𝒅𝒂 𝒄𝒐𝒏𝒅𝒆𝒏𝒂𝒄𝒂𝒐.
𝑷𝒆𝒓𝒅𝒆𝒔 ${dinheiro} 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ`

        ])}`)
      
      return !0
    }
    if(global.db.data.chats[m.chat].users[who].money <=0){
            m.reply(`─┅──┅❖ 💵 ❖─┅──┅
𝑶 𝒖𝒔𝒖𝒂𝒓𝒊𝒐 𝒆𝒔𝒕𝒂 𝒅𝒆𝒔𝒕𝒊𝒕𝒖𝒊𝒅𝒐 𝒅𝒆 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ. 𝑶 𝒇𝒖𝒓𝒕𝒐 𝒆 𝒖𝒎𝒂 𝒎𝒊𝒓𝒂𝒈𝒆𝒎 𝒊𝒎𝒑𝒐𝒔𝒔𝒊𝒗𝒆𝒍 𝒏𝒆𝒔𝒕𝒂 𝒆𝒔𝒄𝒖𝒓𝒊𝒅𝒂𝒐.
─┅──┅❖ ❖─┅──┅`)
              return !0
            }
            let userData = global.db.data.chats[m.chat].users[m.sender];
let tentativas = userData.tentativasRoubo;

let lastAttemptTimestamp =global.db.data.chats[m.chat].users[m.sender].rouboTimestamp 

let currentTime = new Date()
let timeSinceLastAttempt = currentTime - lastAttemptTimestamp;
let hoursSinceLastAttempt = Math.floor(timeSinceLastAttempt / (1000 * 60 * 60)); // Convert milliseconds to hours

let user = a => '@' + a.split('@')[0]

    if (tentativas > 0) {
   
        const sucesso = Math.random() < 0.85;

        if (sucesso) {
          if(global.db.data.chats[m.chat].users[m.sender].steals == undefined){
            global.db.data.chats[m.chat].users[m.sender].steals = 0
          }
          global.db.data.chats[m.chat].users[m.sender].steals++
          const rbf = Math.floor(Math.random() * (0.8 * global.db.data.chats[m.chat].users[who].money - 0.3 * global.db.data.chats[m.chat].users[who].money + 1)) + 0.3 * global.db.data.chats[m.chat].users[who].money;
          let roubo = parseInt(Math.round(rbf));
            global.db.data.chats[m.chat].users[who].money -= roubo;
            if(global.db.data.chats[m.chat].users[who].money <0){
            global.db.data.chats[m.chat].users[who].money =0
              
            }
          
            
            global.db.data.chats[m.chat].users[m.sender].money += roubo
            
            let mssg = `*╭─┅──┅❖*
җ 𝑵𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔 𝒅𝒂 𝒏𝒐𝒊𝒕𝒆, 𝒐 𝒄𝒓𝒊𝒎𝒆 𝒇𝒐𝒊 𝒄𝒐𝒏𝒔𝒖𝒎𝒂𝒅𝒐 𝒄𝒐𝒎 ê𝒙𝒊𝒕𝒐

${user(m.sender)}, 𝒄𝒐𝒎𝒐 𝒖𝒎𝒂 𝒔𝒐𝒎𝒃𝒓𝒂 𝒇𝒖𝒈𝒂𝒛, 
𝒔𝒖𝒃𝒕𝒓𝒂𝒊𝒖 ${roubo} 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ 𝒅𝒐 𝒅𝒐𝒎í𝒏𝒊𝒐 𝒅𝒆 ${user(who)}.

${pickRandom(frases)
}
*╰─┅──┅❖*`

await m.reply(mssg, null, { mentions: conn.parseMention(mssg)})
            console.log(`Você roubou ${roubo} moedas.`);
        } 
         
        else {
          let perdaf = Math.floor(Math.random() * (0.4 * global.db.data.chats[m.chat].users[m.sender].money - 0.1 * global.db.data.chats[m.chat].users[m.sender].money + 1)) + 0.1 * global.db.data.chats[m.chat].users[m.sender].money;
          let perda = parseInt(Math.round(perdaf));
      
          global.db.data.chats[m.chat].users[m.sender].money -= perda
          if( global.db.data.chats[m.chat].users[m.sender].money<0){
             global.db.data.chats[m.chat].users[m.sender].money = 0
          }
          
          
            console.log("Ops.. você foi pego no flagra. Tente novamente.");
            
            m.reply(`─┅──┅❖ 💵 ❖─┅──┅
𝚅𝚘𝚌𝚎 𝚏𝚘𝚒 𝚏𝚕𝚊𝚐𝚛𝚊𝚍𝚘! 𝚂𝚎𝚛𝚊 𝚙𝚞𝚗𝚒𝚍𝚘
            
${pickRandom(
            [`𝑸𝒖𝒆 𝒕𝒆𝒖 𝒊𝒏𝒇𝒐𝒓𝒕ú𝒏𝒊𝒐 𝒔𝒊𝒓𝒗𝒂 𝒅𝒆 𝒂𝒅𝒗𝒆𝒓𝒕ê𝒏𝒄𝒊𝒂: ${perda} 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ 𝒔𝒆 𝒅𝒆𝒔𝒗𝒂𝒏𝒆𝒄𝒆𝒓𝒂𝒎 𝒆𝒎 𝒕𝒆𝒖 𝒇𝒓𝒂𝒄𝒂𝒔𝒔𝒐. 𝑬𝒔𝒄𝒐𝒍𝒉𝒆 𝒄𝒐𝒎 𝒄𝒂𝒖𝒕𝒆𝒍𝒂, 𝒑𝒐𝒊𝒔 𝒂 𝒊𝒎𝒑𝒓𝒖𝒅ê𝒏𝒄𝒊𝒂 𝒑𝒐𝒅𝒆 𝒍𝒆𝒗𝒂𝒓 à 𝒑𝒆𝒓𝒅𝒂.`,
            
  `𝑨𝒕𝒆𝒏çã𝒐: ${perda} 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ 𝒇𝒐𝒓𝒂𝒎 𝒑𝒆𝒓𝒅𝒊𝒅𝒂𝒔 𝒆𝒎 𝒕𝒆𝒖 𝒇𝒓𝒂𝒄𝒂𝒔𝒔𝒐. 𝑸𝒖𝒆 𝒆𝒔𝒕𝒂 𝒑𝒆𝒓𝒅𝒂 𝒕𝒆 𝒆𝒏𝒔𝒊𝒏𝒆 𝒂 𝒔𝒆𝒓 𝒑𝒓𝒖𝒅𝒆𝒏𝒕𝒆 𝒆𝒎 𝒕𝒖𝒂𝒔 𝒆𝒔𝒄𝒐𝒍𝒉𝒂𝒔.`,
  `𝑬𝒊𝒔 𝒂 𝒂𝒅𝒗𝒆𝒓𝒕ê𝒏𝒄𝒊𝒂 𝒔𝒐𝒎𝒃𝒓𝒊𝒂: ${perda} 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ 𝒇𝒐𝒓𝒂𝒎 𝒕𝒓𝒂𝒈𝒂𝒅𝒂𝒔 𝒑𝒆𝒍𝒂 𝒗𝒐𝒓𝒂𝒈𝒆𝒎 𝒅𝒆 𝒕𝒆𝒖 𝒇𝒓𝒂𝒄𝒂𝒔𝒔𝒐. 𝑸𝒖𝒆 𝒆𝒔𝒕𝒆 𝒊𝒏𝒇𝒐𝒓𝒕ú𝒏𝒊𝒐 𝒕𝒆 𝒈𝒖𝒊𝒆 𝒑𝒆𝒍𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔 𝒅𝒂 𝒊𝒎𝒑𝒓𝒖𝒅ê𝒏𝒄𝒊𝒂, 𝒍𝒆𝒎𝒃𝒓𝒂𝒏𝒅𝒐-𝒕𝒆 𝒔𝒆𝒎𝒑𝒓𝒆 𝒅𝒂 𝒇𝒓𝒂𝒈𝒊𝒍𝒊𝒅𝒂𝒅𝒆 𝒅𝒂𝒔 𝒆𝒔𝒄𝒐𝒍𝒉𝒂𝒔.`,
  `𝑨𝒕𝒆𝒏çã𝒐, 𝒂𝒍𝒎𝒂 𝒅𝒆𝒔𝒗𝒆𝒏𝒕𝒖𝒓𝒂𝒅𝒂: ${perda} 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ 𝒔𝒖𝒄𝒖𝒎𝒃𝒊𝒓𝒂𝒎 à 𝒕𝒖𝒂 𝒒𝒖𝒆𝒅𝒂. 𝑸𝒖𝒆 𝒆𝒔𝒕𝒆 𝒅𝒆𝒔𝒂𝒔𝒕𝒓𝒆 𝒕𝒆 𝒔𝒊𝒓𝒗𝒂 𝒄𝒐𝒎𝒐 𝒖𝒎𝒂 𝒔𝒐𝒎𝒃𝒓𝒂 𝒑𝒆𝒓𝒑é𝒕𝒖𝒂, 𝒍𝒆𝒎𝒃𝒓𝒂𝒏𝒅𝒐-𝒕𝒆 𝒅𝒂𝒔 𝒄𝒐𝒏𝒔𝒆𝒒𝒖ê𝒏𝒄𝒊𝒂𝒔 𝒅𝒂 𝒊𝒎𝒑𝒓𝒖𝒅ê𝒏𝒄𝒊𝒂 𝒆𝒎 𝒕𝒆𝒖𝒔 𝒑𝒂𝒔𝒔𝒐𝒔.`,
  `𝑨𝒍𝒆𝒓𝒕𝒂: ${perda} 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ 𝒔𝒆 𝒅𝒊𝒔𝒔𝒊𝒑𝒂𝒓𝒂𝒓𝒂 𝒆𝒎 𝒕𝒆𝒖 𝒇𝒓𝒂𝒄𝒂𝒔𝒔𝒐. 𝑸𝒖𝒆 𝒆𝒔𝒕𝒆 𝒍𝒂𝒎𝒆𝒏𝒕𝒐 𝒕𝒆 𝒆𝒏𝒔𝒊𝒏𝒆 𝒂 𝒕𝒓𝒊𝒍𝒉𝒂𝒓 𝒄𝒐𝒎 𝒄𝒂𝒖𝒕𝒆𝒍𝒂 𝒐𝒔 𝒄𝒂𝒎𝒊𝒏𝒉𝒐𝒔 𝒆𝒔𝒄𝒖𝒓𝒐𝒔 𝒅𝒂 𝒇𝒐𝒓𝒕𝒖𝒏𝒂.`,
  `𝑸𝒖𝒆 𝒆𝒔𝒕𝒂 𝒑𝒖𝒏𝒊çã𝒐 𝒔𝒆𝒋𝒂 𝒕𝒖𝒂 𝒄𝒓𝒖𝒛: ${perda} 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ 𝒇𝒐𝒓𝒂𝒎 𝒅𝒆𝒗𝒐𝒓𝒂𝒅𝒂𝒔 𝒑𝒆𝒍𝒐 𝒂𝒃𝒊𝒔𝒎𝒐 𝒅𝒆 𝒕𝒆𝒖 𝒆𝒓𝒓𝒐. 𝑸𝒖𝒆 𝒔𝒆𝒖 𝒆𝒄𝒐 𝒔𝒆𝒋𝒂 𝒕𝒆𝒖 𝒈𝒖𝒊𝒂, 𝒍𝒆𝒎𝒃𝒓𝒂𝒏𝒅𝒐-𝒕𝒆 𝒄𝒐𝒏𝒔𝒕𝒂𝒏𝒕𝒆𝒎𝒆𝒏𝒕𝒆 𝒅𝒂 𝒅𝒐𝒓 𝒄𝒂𝒖𝒔𝒂𝒅𝒂 𝒑𝒆𝒍𝒂 𝒊𝒎𝒑𝒓𝒖𝒅ê𝒏𝒄𝒊𝒂.`,
  `𝑸𝒖𝒆 𝒆𝒔𝒕𝒂 𝒑𝒆𝒓𝒅𝒂 𝒔𝒆𝒋𝒂 𝒕𝒖𝒂 𝒑𝒆𝒏𝒊𝒕ê𝒏𝒄𝒊𝒂: ${perda} 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ 𝒔𝒆 𝒅𝒆𝒔𝒗𝒂𝒏𝒆𝒄𝒆𝒓𝒂𝒎, 𝒄𝒐𝒎𝒐 𝒖𝒎𝒂 𝒑𝒖𝒏𝒊çã𝒐 𝒑𝒐𝒓 𝒕𝒖𝒂 𝒇𝒂𝒍𝒉𝒂. 𝑸𝒖𝒆 𝒔𝒆𝒖 𝒆𝒄𝒐 𝒍ú𝒈𝒖𝒃𝒓𝒆 𝒕𝒆 𝒂𝒄𝒐𝒎𝒑𝒂𝒏𝒉𝒆, 𝒓𝒆𝒄𝒐𝒓𝒅𝒂𝒏𝒅𝒐-𝒕𝒆 𝒅𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔 𝒒𝒖𝒆 𝒑𝒂𝒊𝒓𝒂𝒎 𝒔𝒐𝒃𝒓𝒆 𝒐𝒔 𝒒𝒖𝒆 𝒐𝒖𝒔𝒂𝒎 𝒅𝒆𝒔𝒂𝒇𝒊𝒂𝒓 𝒂 𝒑𝒓𝒖𝒅ê𝒏𝒄𝒊𝒂.`,
  `𝑸𝒖𝒆 𝒆𝒔𝒕𝒆 𝒂𝒎𝒂𝒓𝒈𝒂 𝒑𝒆𝒏𝒂𝒍𝒊𝒅𝒂𝒅𝒆 𝒕𝒆 𝒂𝒔𝒔𝒐𝒎𝒃𝒓𝒆: ${perda} 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ 𝒔𝒆 𝒅𝒊𝒔𝒔𝒊𝒑𝒂𝒓𝒂𝒎, 𝒄𝒐𝒎𝒐 𝒖𝒎 𝒄𝒂𝒔𝒕𝒊𝒈𝒐 𝒑𝒐𝒓 𝒕𝒖𝒂 𝒅𝒆𝒓𝒓𝒐𝒕𝒂. 𝑸𝒖𝒆 𝒔𝒆𝒖 𝒆𝒄𝒐 𝒔𝒐𝒎𝒃𝒓𝒊𝒐 𝒕𝒆 𝒑𝒆𝒓𝒔𝒊𝒈𝒂, 𝒓𝒆𝒍𝒆𝒎𝒃𝒓𝒂𝒏𝒅𝒐-𝒕𝒆 𝒅𝒂𝒔 𝒄𝒐𝒏𝒔𝒆𝒒𝒖ê𝒏𝒄𝒊𝒂𝒔 𝒕𝒆𝒓𝒓í𝒗𝒆𝒊𝒔 𝒅𝒂 𝒊𝒎𝒑𝒓𝒖𝒅ê𝒏𝒄𝒊𝒂.`,
  `𝑸𝒖𝒆 𝒆𝒔𝒕𝒆 𝒂𝒎𝒂𝒓𝒈𝒂 𝒑𝒆𝒓𝒏𝒂𝒍𝒊𝒅𝒂𝒅𝒆 𝒕𝒆 𝒇𝒍𝒂𝒈𝒆𝒍𝒐 𝒕𝒆 𝒄𝒐𝒏𝒔𝒖𝒎𝒂: ${perda} 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ 𝒅𝒆𝒔𝒂𝒑𝒂𝒓𝒆𝒄𝒆𝒓𝒂𝒎, 𝒄𝒐𝒎𝒐 𝒖𝒎𝒂 𝒔𝒆𝒏𝒕𝒆𝒏ç𝒂 𝒑𝒐𝒓 𝒕𝒖𝒂 𝒒𝒖𝒆𝒅𝒂. 𝑸𝒖𝒆 𝒔𝒖𝒂 𝒔𝒐𝒎𝒃𝒓𝒂 𝒕𝒆 𝒂𝒕𝒐𝒓𝒎𝒆𝒏𝒕𝒆, 𝒂𝒅𝒗𝒆𝒓𝒕𝒊𝒏𝒅𝒐-𝒕𝒆 𝒅𝒂𝒔 𝒄𝒐𝒏𝒔𝒆𝒒𝒖ê𝒏𝒄𝒊𝒂𝒔 𝒕𝒆𝒓𝒓í𝒗𝒆𝒊𝒔 𝒅𝒂 𝒊𝒎𝒑𝒓𝒖𝒅ê𝒏𝒄𝒊𝒂.`,
  `𝑸𝒖𝒆 𝒆𝒔𝒕𝒆 𝒇𝒍𝒂𝒈𝒆𝒍𝒐 𝒕𝒆 𝒂𝒎𝒑𝒂𝒏𝒉𝒆𝒊𝒓: ${perda} 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ 𝒅𝒆 𝒔𝒆𝒓 𝒗í𝒕𝒊𝒎𝒂𝒔 𝒄𝒖𝒆 𝒔𝒆 𝒃𝒂𝒔𝒆𝒊𝒂𝒎 𝒏𝒂 𝒑𝒂𝒔𝒔𝒂𝒈𝒆𝒎, 𝒄𝒐𝒎𝒐 𝒑𝒐𝒅𝒆 𝒍𝒆𝒈𝒂𝒍.`,
  `𝑸𝒖𝒆 𝒆𝒔𝒕𝒆 𝒇𝒍𝒂𝒈𝒆𝒍𝒐 𝒕𝒆 𝒄𝒐𝒏𝒔𝒖𝒎𝒂: ${perda} 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ 𝒅𝒆𝒔𝒂𝒑𝒂𝒓𝒆𝒄𝒆𝒓𝒂𝒎, 𝒄𝒐𝒎𝒐 𝒖𝒎𝒂 𝒔𝒆𝒏𝒕𝒆𝒏ç𝒂 𝒑𝒐𝒓 𝒕𝒖𝒂 𝒒𝒖𝒆𝒅𝒂. 𝑸𝒖𝒆 𝒔𝒆𝒖 𝒔𝒐𝒎𝒃𝒓𝒂 𝒕𝒆 𝒂𝒕𝒐𝒓𝒎𝒆𝒏𝒕𝒆, 𝒂𝒅𝒗𝒆𝒓𝒕𝒊𝒏𝒅𝒐-𝒕𝒆 𝒅𝒂𝒔 𝒄𝒐𝒏𝒔𝒆𝒒𝒖ê𝒏𝒄𝒊𝒂𝒔 𝒕𝒆𝒓𝒓í𝒗𝒆𝒊𝒔 𝒅𝒂 𝒊𝒎𝒑𝒓𝒖𝒅ê𝒏𝒄𝒊𝒂.`,
  `𝑸𝒖𝒆 𝒆𝒔𝒕𝒆 𝒇𝒍𝒂𝒈𝒆𝒍𝒐 𝒕𝒆 𝒂𝒎𝒂𝒓𝒈𝒂 𝒑𝒆𝒓𝒅𝒂 𝒔𝒆𝒋𝒂 𝒕𝒖𝒂 𝒑𝒆𝒏𝒊𝒕ê𝒏𝒄𝒊𝒂: ${perda} 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ 𝒅𝒆𝒔𝒗𝒂𝒏𝒆𝒄𝒆𝒓𝒂𝒎, 𝒄𝒐𝒎𝒐 𝒖𝒎𝒂 𝒔𝒆𝒏𝒕𝒆𝒏ç𝒂` ])}
  
  ─┅──┅❖ ⸸ ❖─┅──┅
  `)
        }

        global.db.data.chats[m.chat].users[m.sender].tentativasRoubo -= 1
        
if(!global.db.data.chats[m.chat].users[m.sender].usuariosRoubados){
  global.db.data.chats[m.chat].users[m.sender].usuariosRoubados=[]
}
        
        global.db.data.chats[m.chat].users[m.sender].lastAttemptTimestamp = currentTime;
    } else {
    if (has24HoursPassed(global.db.data.chats[m.chat].users[m.sender].rouboTimestamp)) {
        // Replenish attempts and update timestamp
        global.db.data.chats[m.chat].users[m.sender].tentativasRoubo = 5;
        global.db.data.chats[m.chat].users[m.sender].usuariosRoubados = []
        
        global.db.data.chats[m.chat].users[m.sender].rouboTimestamp = new Date();
        console.log("Seus 5 tentativas de roubo foram reabastecidas. Boa sorte!");
        m.react("🔄")
     
        const sucesso = Math.random() < 0.8;

        if (sucesso) {
          if(global.db.data.chats[m.chat].users[m.sender].steals == undefined){
            global.db.data.chats[m.chat].users[m.sender].steals = 0
          }
          global.db.data.chats[m.chat].users[m.sender].steals++
          const rbff = Math.floor(Math.random() * (0.4 * global.db.data.chats[m.chat].users[who].money - 0.1 * global.db.data.chats[m.chat].users[who].money + 1)) + 0.1 * global.db.data.chats[m.chat].users[who].money;
          let roubo = parseInt(Math.round(rbff));
            global.db.data.chats[m.chat].users[who].money -= roubo;
            if(global.db.data.chats[m.chat].users[who].money <0){
            global.db.data.chats[m.chat].users[who].money =0
              
            }
            
            
            global.db.data.chats[m.chat].users[m.sender].money += roubo
            
            let mssg = `*╭─┅──┅❖*
җ 𝑵𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔 𝒅𝒂 𝒏𝒐𝒊𝒕𝒆, 𝒐 𝒄𝒓𝒊𝒎𝒆 𝒇𝒐𝒊 𝒄𝒐𝒏𝒔𝒖𝒎𝒂𝒅𝒐 𝒄𝒐𝒎 ê𝒙𝒊𝒕𝒐

${user(m.sender)}, 𝒄𝒐𝒎𝒐 𝒖𝒎𝒂 𝒔𝒐𝒎𝒃𝒓𝒂 𝒇𝒖𝒈𝒂𝒛, 
𝒔𝒖𝒃𝒕𝒓𝒂𝒊𝒖 ${roubo} 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ 𝒅𝒐 𝒅𝒐𝒎í𝒏𝒊𝒐 𝒅𝒆 ${user(who)}.

${pickRandom(frases)
}
*╰─┅──┅❖*`

await m.reply(mssg, null, { mentions: conn.parseMention(mssg)})
            console.log(`Você roubou ${roubo} moedas.`);
        } else {
          let perdaf = Math.floor(Math.random() * (0.4 * global.db.data.chats[m.chat].users[m.sender].money - 0.1 * global.db.data.chats[m.chat].users[m.sender].money + 1)) + 0.1 * global.db.data.chats[m.chat].users[m.sender].money;
          let perda = parseInt(Math.round(perdaf));
          global.db.data.chats[m.chat].users[m.sender].money -= perda
          if( global.db.data.chats[m.chat].users[m.sender].money<0){
             global.db.data.chats[m.chat].users[m.sender].money = 0
          }
          
          
            console.log("Ops.. você foi pego no flagra. Tente novamente.");
            
            m.reply(`─┅──┅❖ 💵 ❖─┅──┅
𝚅𝚘𝚌𝚎 𝚏𝚘𝚒 𝚏𝚕𝚊𝚐𝚛𝚊𝚍𝚘! 𝚂𝚎𝚛𝚊 𝚙𝚞𝚗𝚒𝚍𝚘
            
${pickRandom(
            [`𝑸𝒖𝒆 𝒕𝒆𝒖 𝒊𝒏𝒇𝒐𝒓𝒕ú𝒏𝒊𝒐 𝒔𝒊𝒓𝒗𝒂 𝒅𝒆 𝒂𝒅𝒗𝒆𝒓𝒕ê𝒏𝒄𝒊𝒂: ${perda} 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ 𝒔𝒆 𝒅𝒆𝒔𝒗𝒂𝒏𝒆𝒄𝒆𝒓𝒂𝒎 𝒆𝒎 𝒕𝒆𝒖 𝒇𝒓𝒂𝒄𝒂𝒔𝒔𝒐. 𝑬𝒔𝒄𝒐𝒍𝒉𝒆 𝒄𝒐𝒎 𝒄𝒂𝒖𝒕𝒆𝒍𝒂, 𝒑𝒐𝒊𝒔 𝒂 𝒊𝒎𝒑𝒓𝒖𝒅ê𝒏𝒄𝒊𝒂 𝒑𝒐𝒅𝒆 𝒍𝒆𝒗𝒂𝒓 à 𝒑𝒆𝒓𝒅𝒂.`,
            
  `𝑨𝒕𝒆𝒏çã𝒐: ${perda} 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ 𝒇𝒐𝒓𝒂𝒎 𝒑𝒆𝒓𝒅𝒊𝒅𝒂𝒔 𝒆𝒎 𝒕𝒆𝒖 𝒇𝒓𝒂𝒄𝒂𝒔𝒔𝒐. 𝑸𝒖𝒆 𝒆𝒔𝒕𝒂 𝒑𝒆𝒓𝒅𝒂 𝒕𝒆 𝒆𝒏𝒔𝒊𝒏𝒆 𝒂 𝒔𝒆𝒓 𝒑𝒓𝒖𝒅𝒆𝒏𝒕𝒆 𝒆𝒎 𝒕𝒖𝒂𝒔 𝒆𝒔𝒄𝒐𝒍𝒉𝒂𝒔.`,
  `𝑬𝒊𝒔 𝒂 𝒂𝒅𝒗𝒆𝒓𝒕ê𝒏𝒄𝒊𝒂 𝒔𝒐𝒎𝒃𝒓𝒊𝒂: ${perda} 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ 𝒇𝒐𝒓𝒂𝒎 𝒕𝒓𝒂𝒈𝒂𝒅𝒂𝒔 𝒑𝒆𝒍𝒂 𝒗𝒐𝒓𝒂𝒈𝒆𝒎 𝒅𝒆 𝒕𝒆𝒖 𝒇𝒓𝒂𝒄𝒂𝒔𝒔𝒐. 𝑸𝒖𝒆 𝒆𝒔𝒕𝒆 𝒊𝒏𝒇𝒐𝒓𝒕ú𝒏𝒊𝒐 𝒕𝒆 𝒈𝒖𝒊𝒆 𝒑𝒆𝒍𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔 𝒅𝒂 𝒊𝒎𝒑𝒓𝒖𝒅ê𝒏𝒄𝒊𝒂, 𝒍𝒆𝒎𝒃𝒓𝒂𝒏𝒅𝒐-𝒕𝒆 𝒔𝒆𝒎𝒑𝒓𝒆 𝒅𝒂 𝒇𝒓𝒂𝒈𝒊𝒍𝒊𝒅𝒂𝒅𝒆 𝒅𝒂𝒔 𝒆𝒔𝒄𝒐𝒍𝒉𝒂𝒔.`,
  `𝑨𝒕𝒆𝒏çã𝒐, 𝒂𝒍𝒎𝒂 𝒅𝒆𝒔𝒗𝒆𝒏𝒕𝒖𝒓𝒂𝒅𝒂: ${perda} 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ 𝒔𝒖𝒄𝒖𝒎𝒃𝒊𝒓𝒂𝒎 à 𝒕𝒖𝒂 𝒒𝒖𝒆𝒅𝒂. 𝑸𝒖𝒆 𝒆𝒔𝒕𝒆 𝒅𝒆𝒔𝒂𝒔𝒕𝒓𝒆 𝒕𝒆 𝒔𝒊𝒓𝒗𝒂 𝒄𝒐𝒎𝒐 𝒖𝒎𝒂 𝒔𝒐𝒎𝒃𝒓𝒂 𝒑𝒆𝒓𝒑é𝒕𝒖𝒂, 𝒍𝒆𝒎𝒃𝒓𝒂𝒏𝒅𝒐-𝒕𝒆 𝒅𝒂𝒔 𝒄𝒐𝒏𝒔𝒆𝒒𝒖ê𝒏𝒄𝒊𝒂𝒔 𝒅𝒂 𝒊𝒎𝒑𝒓𝒖𝒅ê𝒏𝒄𝒊𝒂 𝒆𝒎 𝒕𝒆𝒖𝒔 𝒑𝒂𝒔𝒔𝒐𝒔.`,
  `𝑨𝒍𝒆𝒓𝒕𝒂: ${perda} 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ 𝒔𝒆 𝒅𝒊𝒔𝒔𝒊𝒑𝒂𝒓𝒂𝒓𝒂 𝒆𝒎 𝒕𝒆𝒖 𝒇𝒓𝒂𝒄𝒂𝒔𝒔𝒐. 𝑸𝒖𝒆 𝒆𝒔𝒕𝒆 𝒍𝒂𝒎𝒆𝒏𝒕𝒐 𝒕𝒆 𝒆𝒏𝒔𝒊𝒏𝒆 𝒂 𝒕𝒓𝒊𝒍𝒉𝒂𝒓 𝒄𝒐𝒎 𝒄𝒂𝒖𝒕𝒆𝒍𝒂 𝒐𝒔 𝒄𝒂𝒎𝒊𝒏𝒉𝒐𝒔 𝒆𝒔𝒄𝒖𝒓𝒐𝒔 𝒅𝒂 𝒇𝒐𝒓𝒕𝒖𝒏𝒂.`,
  `𝑸𝒖𝒆 𝒆𝒔𝒕𝒂 𝒑𝒖𝒏𝒊çã𝒐 𝒔𝒆𝒋𝒂 𝒕𝒖𝒂 𝒄𝒓𝒖𝒛: ${perda} 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ 𝒇𝒐𝒓𝒂𝒎 𝒅𝒆𝒗𝒐𝒓𝒂𝒅𝒂𝒔 𝒑𝒆𝒍𝒐 𝒂𝒃𝒊𝒔𝒎𝒐 𝒅𝒆 𝒕𝒆𝒖 𝒆𝒓𝒓𝒐. 𝑸𝒖𝒆 𝒔𝒆𝒖 𝒆𝒄𝒐 𝒔𝒆𝒋𝒂 𝒕𝒆𝒖 𝒈𝒖𝒊𝒂, 𝒍𝒆𝒎𝒃𝒓𝒂𝒏𝒅𝒐-𝒕𝒆 𝒄𝒐𝒏𝒔𝒕𝒂𝒏𝒕𝒆𝒎𝒆𝒏𝒕𝒆 𝒅𝒂 𝒅𝒐𝒓 𝒄𝒂𝒖𝒔𝒂𝒅𝒂 𝒑𝒆𝒍𝒂 𝒊𝒎𝒑𝒓𝒖𝒅ê𝒏𝒄𝒊𝒂.`,
  `𝑸𝒖𝒆 𝒆𝒔𝒕𝒂 𝒑𝒆𝒓𝒅𝒂 𝒔𝒆𝒋𝒂 𝒕𝒖𝒂 𝒑𝒆𝒏𝒊𝒕ê𝒏𝒄𝒊𝒂: ${perda} 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ 𝒔𝒆 𝒅𝒆𝒔𝒗𝒂𝒏𝒆𝒄𝒆𝒓𝒂𝒎, 𝒄𝒐𝒎𝒐 𝒖𝒎𝒂 𝒑𝒖𝒏𝒊çã𝒐 𝒑𝒐𝒓 𝒕𝒖𝒂 𝒇𝒂𝒍𝒉𝒂. 𝑸𝒖𝒆 𝒔𝒆𝒖 𝒆𝒄𝒐 𝒍ú𝒈𝒖𝒃𝒓𝒆 𝒕𝒆 𝒂𝒄𝒐𝒎𝒑𝒂𝒏𝒉𝒆, 𝒓𝒆𝒄𝒐𝒓𝒅𝒂𝒏𝒅𝒐-𝒕𝒆 𝒅𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔 𝒒𝒖𝒆 𝒑𝒂𝒊𝒓𝒂𝒎 𝒔𝒐𝒃𝒓𝒆 𝒐𝒔 𝒒𝒖𝒆 𝒐𝒖𝒔𝒂𝒎 𝒅𝒆𝒔𝒂𝒇𝒊𝒂𝒓 𝒂 𝒑𝒓𝒖𝒅ê𝒏𝒄𝒊𝒂.`,
  `𝑸𝒖𝒆 𝒆𝒔𝒕𝒆 𝒂𝒎𝒂𝒓𝒈𝒂 𝒑𝒆𝒏𝒂𝒍𝒊𝒅𝒂𝒅𝒆 𝒕𝒆 𝒂𝒔𝒔𝒐𝒎𝒃𝒓𝒆: ${perda} 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ 𝒔𝒆 𝒅𝒊𝒔𝒔𝒊𝒑𝒂𝒓𝒂𝒎, 𝒄𝒐𝒎𝒐 𝒖𝒎 𝒄𝒂𝒔𝒕𝒊𝒈𝒐 𝒑𝒐𝒓 𝒕𝒖𝒂 𝒅𝒆𝒓𝒓𝒐𝒕𝒂. 𝑸𝒖𝒆 𝒔𝒆𝒖 𝒆𝒄𝒐 𝒔𝒐𝒎𝒃𝒓𝒊𝒐 𝒕𝒆 𝒑𝒆𝒓𝒔𝒊𝒈𝒂, 𝒓𝒆𝒍𝒆𝒎𝒃𝒓𝒂𝒏𝒅𝒐-𝒕𝒆 𝒅𝒂𝒔 𝒄𝒐𝒏𝒔𝒆𝒒𝒖ê𝒏𝒄𝒊𝒂𝒔 𝒕𝒆𝒓𝒓í𝒗𝒆𝒊𝒔 𝒅𝒂 𝒊𝒎𝒑𝒓𝒖𝒅ê𝒏𝒄𝒊𝒂.`,
  `𝑸𝒖𝒆 𝒆𝒔𝒕𝒆 𝒂𝒎𝒂𝒓𝒈𝒂 𝒑𝒆𝒓𝒏𝒂𝒍𝒊𝒅𝒂𝒅𝒆 𝒕𝒆 𝒇𝒍𝒂𝒈𝒆𝒍𝒐 𝒕𝒆 𝒄𝒐𝒏𝒔𝒖𝒎𝒂: ${perda} 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ 𝒅𝒆𝒔𝒂𝒑𝒂𝒓𝒆𝒄𝒆𝒓𝒂𝒎, 𝒄𝒐𝒎𝒐 𝒖𝒎𝒂 𝒔𝒆𝒏𝒕𝒆𝒏ç𝒂 𝒑𝒐𝒓 𝒕𝒖𝒂 𝒒𝒖𝒆𝒅𝒂. 𝑸𝒖𝒆 𝒔𝒖𝒂 𝒔𝒐𝒎𝒃𝒓𝒂 𝒕𝒆 𝒂𝒕𝒐𝒓𝒎𝒆𝒏𝒕𝒆, 𝒂𝒅𝒗𝒆𝒓𝒕𝒊𝒏𝒅𝒐-𝒕𝒆 𝒅𝒂𝒔 𝒄𝒐𝒏𝒔𝒆𝒒𝒖ê𝒏𝒄𝒊𝒂𝒔 𝒕𝒆𝒓𝒓í𝒗𝒆𝒊𝒔 𝒅𝒂 𝒊𝒎𝒑𝒓𝒖𝒅ê𝒏𝒄𝒊𝒂.`,
  `𝑸𝒖𝒆 𝒆𝒔𝒕𝒆 𝒇𝒍𝒂𝒈𝒆𝒍𝒐 𝒕𝒆 𝒂𝒎𝒑𝒂𝒏𝒉𝒆𝒊𝒓: ${perda} 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ 𝒅𝒆 𝒔𝒆𝒓 𝒗í𝒕𝒊𝒎𝒂𝒔 𝒄𝒖𝒆 𝒔𝒆 𝒃𝒂𝒔𝒆𝒊𝒂𝒎 𝒏𝒂 𝒑𝒂𝒔𝒔𝒂𝒈𝒆𝒎, 𝒄𝒐𝒎𝒐 𝒑𝒐𝒅𝒆 𝒍𝒆𝒈𝒂𝒍.`,
  `𝑸𝒖𝒆 𝒆𝒔𝒕𝒆 𝒇𝒍𝒂𝒈𝒆𝒍𝒐 𝒕𝒆 𝒄𝒐𝒏𝒔𝒖𝒎𝒂: ${perda} 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ 𝒅𝒆𝒔𝒂𝒑𝒂𝒓𝒆𝒄𝒆𝒓𝒂𝒎, 𝒄𝒐𝒎𝒐 𝒖𝒎𝒂 𝒔𝒆𝒏𝒕𝒆𝒏ç𝒂 𝒑𝒐𝒓 𝒕𝒖𝒂 𝒒𝒖𝒆𝒅𝒂. 𝑸𝒖𝒆 𝒔𝒆𝒖 𝒔𝒐𝒎𝒃𝒓𝒂 𝒕𝒆 𝒂𝒕𝒐𝒓𝒎𝒆𝒏𝒕𝒆, 𝒂𝒅𝒗𝒆𝒓𝒕𝒊𝒏𝒅𝒐-𝒕𝒆 𝒅𝒂𝒔 𝒄𝒐𝒏𝒔𝒆𝒒𝒖ê𝒏𝒄𝒊𝒂𝒔 𝒕𝒆𝒓𝒓í𝒗𝒆𝒊𝒔 𝒅𝒂 𝒊𝒎𝒑𝒓𝒖𝒅ê𝒏𝒄𝒊𝒂.`,
  `𝑸𝒖𝒆 𝒆𝒔𝒕𝒆 𝒇𝒍𝒂𝒈𝒆𝒍𝒐 𝒕𝒆 𝒂𝒎𝒂𝒓𝒈𝒂 𝒑𝒆𝒓𝒅𝒂 𝒔𝒆𝒋𝒂 𝒕𝒖𝒂 𝒑𝒆𝒏𝒊𝒕ê𝒏𝒄𝒊𝒂: ${perda} 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ 𝒅𝒆𝒔𝒗𝒂𝒏𝒆𝒄𝒆𝒓𝒂𝒎, 𝒄𝒐𝒎𝒐 𝒖𝒎𝒂 𝒔𝒆𝒏𝒕𝒆𝒏ç𝒂` ])}
  
  ─┅──┅❖ ⸸ ❖─┅──┅
  `)
        }

        global.db.data.chats[m.chat].users[m.sender].tentativasRoubo -= 1
        
if(!global.db.data.chats[m.chat].users[m.sender].usuariosRoubados){
  global.db.data.chats[m.chat].users[m.sender].usuariosRoubados=[]
}
           global.db.data.chats[m.chat].users[m.sender].usuariosRoubados.push(who);   global.db.data.chats[m.chat].users[m.sender].lastAttemptTimestamp = currentTime;
        
    } else {
        // Inform the user how much time is left until attempts are replenished
        let tempo = 24 - hoursSinceLastAttempt;
     if (isNaN(tempo)) {
    reset()
}
     
     
        m.reply(`${pickRandom([
`Ó 𝒊𝒏𝒇𝒆𝒍𝒊𝒛 𝒍𝒂𝒅𝒓ã𝒐, 𝒕𝒖 𝒕𝒓𝒂𝒏𝒔𝒈𝒓𝒆𝒅𝒊𝒔𝒕𝒆 𝒐 𝒍𝒊𝒎𝒊𝒂𝒓 𝒅𝒆 𝒓𝒐𝒖𝒃𝒐𝒔 𝒏𝒆𝒔𝒕𝒂 𝒏𝒐𝒊𝒕𝒆 𝒔𝒐𝒎𝒃𝒓𝒊𝒂. 𝑹𝒆𝒕𝒐𝒓𝒏𝒂 𝒆𝒎 ${tempo} 𝒉𝒐𝒓𝒂𝒔 𝒑𝒂𝒓𝒂 𝒒𝒖𝒆 𝒑𝒐𝒔𝒔𝒂𝒔, 𝒖𝒎𝒂 𝒗𝒆𝒛 𝒎𝒂𝒊𝒔, 𝒍𝒂𝒏ç𝒂𝒓-𝒕𝒆 à 𝒔𝒐𝒓𝒕𝒆 𝒅𝒐 𝒄𝒓𝒊𝒎𝒆 𝒏𝒂𝒔 𝒕𝒓𝒆𝒗𝒂𝒔 𝒅𝒐 𝒅𝒆𝒔𝒕𝒊𝒏𝒐.`,
          
  `𝑨𝒉, 𝒊𝒏𝒔𝒐𝒍𝒆𝒏𝒕𝒆 𝒍𝒂𝒅𝒓ã𝒐, 𝒕𝒖𝒂 𝒂𝒗𝒂𝒓𝒆𝒛𝒂 𝒆𝒙𝒄𝒆𝒅𝒆𝒖 𝒐𝒔 𝒍𝒊𝒎𝒊𝒕𝒆𝒔 𝒏𝒆𝒔𝒕𝒂 𝒏𝒐𝒊𝒕𝒆 𝒆𝒏𝒆𝒗𝒐𝒂𝒅𝒂. 𝑨𝒈𝒖𝒂𝒓𝒅𝒆 ${tempo} 𝒉𝒐𝒓𝒂𝒔 𝒕𝒓𝒂𝒏𝒔𝒄𝒐𝒓𝒓𝒆𝒓𝒆𝒎, 𝒂𝒏𝒕𝒆𝒔 𝒒𝒖𝒆 𝒐𝒖𝒔𝒂𝒓𝒆𝒔, 𝒏𝒐𝒗𝒂𝒎𝒆𝒏𝒕𝒆, 𝒆𝒏𝒇𝒓𝒆𝒏𝒕𝒂𝒓 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔 𝒆 𝒂𝒔 𝒂𝒓𝒕𝒊𝒎𝒂𝒏𝒉𝒂𝒔 𝒅𝒐 𝒄𝒓𝒊𝒎𝒆.`,
  `Ó 𝒊𝒏𝒇𝒐𝒓𝒕𝒖𝒏𝒂𝒅𝒐 𝒕𝒓𝒂𝒏𝒔𝒈𝒓𝒆𝒔𝒔𝒐𝒓, 𝒕𝒖 𝒆𝒙𝒄𝒆𝒅𝒆𝒔𝒕𝒆 𝒐 𝒍𝒊𝒎𝒊𝒕𝒆 𝒅𝒆 𝒑𝒊𝒍𝒉𝒂𝒈𝒆𝒏𝒔 𝒏𝒆𝒔𝒕𝒂 𝒏𝒐𝒊𝒕𝒆 𝒆𝒏𝒆𝒈𝒓𝒆𝒄𝒊𝒅𝒂. 𝑹𝒆𝒕𝒐𝒓𝒏𝒂, 𝒂𝒑ó𝒔 ${tempo} 𝒉𝒐𝒓𝒂𝒔 𝒔𝒆 𝒑𝒂𝒔𝒔𝒂𝒓𝒆𝒎, 𝒑𝒂𝒓𝒂 𝒒𝒖𝒆 𝒑𝒐𝒔𝒔𝒂𝒔, 𝒖𝒎𝒂 𝒗𝒆𝒛 𝒎𝒂𝒊𝒔, 𝒅𝒆𝒔𝒂𝒇𝒊𝒂𝒓 𝒐𝒔 𝒅𝒆𝒔í𝒈𝒏𝒊𝒐𝒔 𝒔𝒐𝒎𝒃𝒓𝒊𝒐𝒔 𝒅𝒐 𝒅𝒆𝒔𝒕𝒊𝒏𝒐.`,
  `𝑨𝒉, 𝒂𝒖𝒅𝒂𝒄𝒊𝒐𝒔𝒐 𝒍𝒂𝒅𝒓ã𝒐, 𝒕𝒖𝒂 𝒈𝒂𝒏â𝒏𝒄𝒊𝒂 𝒅𝒆𝒔𝒂𝒇𝒊𝒐𝒖 𝒐𝒔 𝒍𝒊𝒎𝒊𝒕𝒆𝒔 𝒅𝒂 𝒏𝒐𝒊𝒕𝒆 𝒔𝒐𝒎𝒃𝒓𝒊𝒂 𝑨𝒈𝒖𝒂𝒓𝒅𝒂, 𝒑𝒐𝒊𝒔, 𝒐 𝒍𝒂𝒑𝒔𝒐 𝒅𝒆 ${tempo} 𝒉𝒐𝒓𝒂𝒔, 𝒂𝒏𝒕𝒆𝒔 𝒅𝒆 𝒐𝒖𝒔𝒂𝒓𝒆𝒔, 𝒏𝒐𝒗𝒂𝒎𝒆𝒏𝒕𝒆, 𝒎𝒆𝒓𝒈𝒖𝒍𝒉𝒂𝒓 𝒏𝒂𝒔 𝒕𝒓𝒆𝒗𝒂𝒔 𝒆 𝒅𝒆𝒔𝒂𝒇𝒊𝒂𝒓 𝒐𝒔 𝒄𝒂𝒑𝒓𝒊𝒄𝒉𝒐𝒔 𝒅𝒐 𝒅𝒆𝒔𝒕𝒊𝒏𝒐.`,
  
  `𝑷𝒆𝒍𝒂 𝒕𝒖𝒂 𝒊𝒏𝒄𝒆𝒔𝒔𝒂𝒏𝒕𝒆 𝒄𝒐𝒃𝒊ç𝒂, 𝒂𝒈𝒖𝒂𝒓𝒅𝒆 ${tempo} 𝒉𝒐𝒓𝒂𝒔 𝒔𝒆 𝒅𝒆𝒔𝒗𝒂𝒏𝒆𝒄𝒆𝒓, 𝒂𝒏𝒕𝒆𝒔 𝒅𝒆 𝒕𝒆 𝒂𝒗𝒆𝒏𝒕𝒖𝒓𝒂𝒓𝒆𝒔, 𝒏𝒐𝒗𝒂𝒎𝒆𝒏𝒕𝒆, 𝒏𝒐𝒔 𝒂𝒃𝒊𝒔𝒎𝒐𝒔 𝒅𝒐 𝒄𝒓𝒊𝒎𝒆 𝒆 𝒅𝒆𝒔𝒂𝒇𝒊𝒂𝒓𝒆𝒔 𝒐𝒔 𝒗𝒆𝒓𝒆𝒅𝒊𝒄𝒕𝒐𝒔 𝒔𝒐𝒎𝒃𝒓𝒊𝒐𝒔 𝒅𝒐 𝒅𝒆𝒔𝒕𝒊𝒏𝒐.`
          ])}`)
        
    }
}
  }
  else if(who && !m.quoted){
    if(global.criador.includes(m.mentionedJid[0]))
    {
      
        let ddn = Math.floor(Math.random() * (0.8 * global.db.data.chats[m.chat].users[m.sender].money - 0.3 * global.db.data.chats[m.chat].users[m.sender].money + 1)) + 0.3 * global.db.data.chats[m.chat].users[m.sender].money;
        let dinheiro = parseInt(Math.round(ddn));
        global.db.data.chats[m.chat].users[m.sender].money -= dinheiro
      m.reply(`${pickRandom([
        
        `𝑪𝒐𝒎𝒐 𝒐𝒖𝒔𝒂 𝒓𝒐𝒖𝒃𝒂𝒓 𝒎𝒆𝒖 𝒄𝒓𝒊𝒂𝒅𝒐𝒓? 𝑷𝒆𝒓𝒅𝒆𝒔 ${dinheiro} 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ 𝒄𝒐𝒎𝒐 𝒂 𝒑𝒖𝒏𝒊çã𝒐 𝒒𝒖𝒆 𝒐 𝒂𝒈𝒖𝒂𝒓𝒅𝒂 𝒆 𝒕ã𝒐 𝒔𝒐𝒎𝒃𝒓𝒊𝒂 𝒒𝒖𝒂𝒏𝒕𝒐 𝒐𝒔 𝒂𝒃𝒊𝒔𝒎𝒐𝒔 𝒎𝒂𝒊𝒔 𝒑𝒓𝒐𝒇𝒖𝒏𝒅𝒐𝒔, 𝒆 𝒐 𝒑𝒆𝒔𝒐 𝒅𝒐 𝒔𝒆𝒖 𝒂𝒓𝒓𝒆𝒑𝒆𝒏𝒅𝒊𝒎𝒆𝒏𝒕𝒐 𝒔𝒆𝒓𝒂 𝒄𝒐𝒎𝒐 𝒄𝒐𝒓𝒓𝒆𝒏𝒕𝒆𝒔 𝒈𝒆𝒍𝒊𝒅𝒂𝒔 𝒂𝒓𝒓𝒂𝒔𝒕𝒂𝒏𝒅𝒐-𝒐 𝒑𝒂𝒓𝒂 𝒂 𝒆𝒕𝒆𝒓𝒏𝒂 𝒑𝒆𝒏𝒖𝒎𝒃𝒓𝒂.`,
        
        `𝑪𝒐𝒎𝒐 𝒐𝒖𝒔𝒂 𝒑𝒓𝒐𝒇𝒂𝒏𝒂𝒓 𝒐 𝒎𝒆𝒖 𝒄𝒓𝒊𝒂𝒅𝒐𝒓? 𝑨 𝒑𝒖𝒏𝒊𝒄𝒂𝒐 𝒒𝒖𝒆 𝒂𝒈𝒖𝒂𝒓𝒅𝒂 é 𝒖𝒎𝒂 𝒕𝒆𝒎𝒑𝒆𝒔𝒕𝒂𝒅𝒆 𝒅𝒆 𝒆𝒔𝒄𝒖𝒓𝒊𝒅𝒂𝒐, 𝒐𝒏𝒅𝒆 𝒐 𝒍𝒂𝒎𝒆𝒏𝒕𝒐 𝒅𝒐 𝒔𝒆𝒖 𝒂𝒓𝒓𝒆𝒑𝒆𝒏𝒅𝒊𝒎𝒆𝒏𝒕𝒐 𝒆𝒄𝒐𝒂𝒓𝒂 𝒑𝒆𝒍𝒐𝒔 𝒄𝒐𝒓𝒓𝒆𝒅𝒐𝒓𝒆𝒔 𝒔𝒐𝒎𝒃𝒓𝒊𝒐𝒔 𝒅𝒂 𝒆𝒕𝒆𝒓𝒏𝒊𝒅𝒂𝒅𝒆.
𝑷𝒆𝒓𝒅𝒆𝒔 ${dinheiro} 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ`,

`𝑪𝒐𝒎𝒐 𝒂𝒖𝒅𝒂𝒛𝒎𝒆𝒏𝒕𝒆 𝒕𝒆 𝒂𝒕𝒓𝒆𝒗𝒆𝒔 𝒂 𝒓𝒐𝒖𝒃𝒂𝒓 𝒎𝒆𝒖 𝒄𝒓𝒊𝒂𝒅𝒐𝒓? 𝑨 𝒑𝒖𝒏𝒊𝒄𝒂𝒐 𝒒𝒖𝒆 𝒕𝒆 𝒆𝒔𝒑𝒆𝒓𝒂 𝒆 𝒖𝒎𝒂 𝒅𝒂𝒏ç𝒂 𝒎𝒂𝒄𝒂𝒃𝒓𝒂 𝒄𝒐𝒎 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔, 𝒐𝒏𝒅𝒆 𝒐 𝒍𝒂𝒎𝒆𝒏𝒕𝒐 𝒅𝒐 𝒕𝒆𝒖 𝒂𝒓𝒓𝒆𝒑𝒆𝒏𝒅𝒊𝒎𝒆𝒏𝒕𝒐 𝒆𝒄𝒐𝒂𝒓𝒂 𝒆𝒕𝒆𝒓𝒏𝒂𝒎𝒆𝒏𝒕𝒆 𝒑𝒆𝒍𝒐𝒔 𝒄𝒐𝒓𝒓𝒆𝒅𝒐𝒓𝒆𝒔 𝒅𝒂 𝒄𝒐𝒏𝒅𝒆𝒏𝒂𝒄𝒂𝒐.
𝑷𝒆𝒓𝒅𝒆𝒔 ${dinheiro} 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ`

        ])}`)
      
      return !0
    }
    if(global.cocriador.includes(m.mentionedJid[0]))
    {
      
        let ddg = Math.floor(Math.random() * (0.8 * global.db.data.chats[m.chat].users[m.sender].money - 0.3 * global.db.data.chats[m.chat].users[m.sender].money + 1)) + 0.3 * global.db.data.chats[m.chat].users[m.sender].money;
        let dinheiro = parseInt(Math.round(ddg));
        global.db.data.chats[m.chat].users[m.sender].money -= dinheiro
      m.reply(`${pickRandom([
        
        `𝑪𝒐𝒎𝒐 𝒐𝒖𝒔𝒂 𝒓𝒐𝒖𝒃𝒂𝒓 𝒎𝒊𝒏𝒉𝒂 𝒄𝒓𝒊𝒂𝒅𝒐𝒓𝒂? 𝑷𝒆𝒓𝒅𝒆𝒔 ${dinheiro} 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ 𝒄𝒐𝒎𝒐 𝒂 𝒑𝒖𝒏𝒊çã𝒐 𝒒𝒖𝒆 𝒐 𝒂𝒈𝒖𝒂𝒓𝒅𝒂 𝒆 𝒕ã𝒐 𝒔𝒐𝒎𝒃𝒓𝒊𝒂 𝒒𝒖𝒂𝒏𝒕𝒐 𝒐𝒔 𝒂𝒃𝒊𝒔𝒎𝒐𝒔 𝒎𝒂𝒊𝒔 𝒑𝒓𝒐𝒇𝒖𝒏𝒅𝒐𝒔, 𝒆 𝒐 𝒑𝒆𝒔𝒐 𝒅𝒐 𝒔𝒆𝒖 𝒂𝒓𝒓𝒆𝒑𝒆𝒏𝒅𝒊𝒎𝒆𝒏𝒕𝒐 𝒔𝒆𝒓𝒂 𝒄𝒐𝒎𝒐 𝒄𝒐𝒓𝒓𝒆𝒏𝒕𝒆𝒔 𝒈𝒆𝒍𝒊𝒅𝒂𝒔 𝒂𝒓𝒓𝒂𝒔𝒕𝒂𝒏𝒅𝒐-𝒐 𝒑𝒂𝒓𝒂 𝒂 𝒆𝒕𝒆𝒓𝒏𝒂 𝒑𝒆𝒏𝒖𝒎𝒃𝒓𝒂.`,
        
        `𝑪𝒐𝒎𝒐 𝒐𝒖𝒔𝒂 𝒑𝒓𝒐𝒇𝒂𝒏𝒂𝒓 𝒎𝒊𝒏𝒉𝒂 𝒄𝒓𝒊𝒂𝒅𝒐𝒓𝒂? 𝑨 𝒑𝒖𝒏𝒊𝒄𝒂𝒐 𝒒𝒖𝒆 𝒂𝒈𝒖𝒂𝒓𝒅𝒂 é 𝒖𝒎𝒂 𝒕𝒆𝒎𝒑𝒆𝒔𝒕𝒂𝒅𝒆 𝒅𝒆 𝒆𝒔𝒄𝒖𝒓𝒊𝒅𝒂𝒐, 𝒐𝒏𝒅𝒆 𝒐 𝒍𝒂𝒎𝒆𝒏𝒕𝒐 𝒅𝒐 𝒔𝒆𝒖 𝒂𝒓𝒓𝒆𝒑𝒆𝒏𝒅𝒊𝒎𝒆𝒏𝒕𝒐 𝒆𝒄𝒐𝒂𝒓𝒂 𝒑𝒆𝒍𝒐𝒔 𝒄𝒐𝒓𝒓𝒆𝒅𝒐𝒓𝒆𝒔 𝒔𝒐𝒎𝒃𝒓𝒊𝒐𝒔 𝒅𝒂 𝒆𝒕𝒆𝒓𝒏𝒊𝒅𝒂𝒅𝒆.
𝑷𝒆𝒓𝒅𝒆𝒔 ${dinheiro} 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ`,

`𝑪𝒐𝒎𝒐 𝒂𝒖𝒅𝒂𝒛𝒎𝒆𝒏𝒕𝒆 𝒕𝒆 𝒂𝒕𝒓𝒆𝒗𝒆𝒔 𝒂 𝒓𝒐𝒖𝒃𝒂𝒓 𝒎𝒊𝒏𝒉𝒂 𝒄𝒓𝒊𝒂𝒅𝒐𝒓𝒂? 𝑨 𝒑𝒖𝒏𝒊𝒄𝒂𝒐 𝒒𝒖𝒆 𝒕𝒆 𝒆𝒔𝒑𝒆𝒓𝒂 𝒆 𝒖𝒎𝒂 𝒅𝒂𝒏ç𝒂 𝒎𝒂𝒄𝒂𝒃𝒓𝒂 𝒄𝒐𝒎 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔, 𝒐𝒏𝒅𝒆 𝒐 𝒍𝒂𝒎𝒆𝒏𝒕𝒐 𝒅𝒐 𝒕𝒆𝒖 𝒂𝒓𝒓𝒆𝒑𝒆𝒏𝒅𝒊𝒎𝒆𝒏𝒕𝒐 𝒆𝒄𝒐𝒂𝒓𝒂 𝒆𝒕𝒆𝒓𝒏𝒂𝒎𝒆𝒏𝒕𝒆 𝒑𝒆𝒍𝒐𝒔 𝒄𝒐𝒓𝒓𝒆𝒅𝒐𝒓𝒆𝒔 𝒅𝒂 𝒄𝒐𝒏𝒅𝒆𝒏𝒂𝒄𝒂𝒐.
𝑷𝒆𝒓𝒅𝒆𝒔 ${dinheiro} 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ`

        ])}`)
      
      return !0
    }
    if(m.mentionedJid[0] == conn.user.jid)
    {
      
        let edns = Math.floor(Math.random() * (0.8 * global.db.data.chats[m.chat].users[m.sender].money - 0.3 * global.db.data.chats[m.chat].users[m.sender].money + 1)) + 0.3 * global.db.data.chats[m.chat].users[m.sender].money;
        let dinheiro= parseInt(Math.round(edns));
        global.db.data.chats[m.chat].users[m.sender].money -= dinheiro
      m.reply(`${pickRandom([
        
        `𝑪𝒐𝒎𝒐 𝒐𝒖𝒔𝒂 𝒎𝒆 𝒓𝒐𝒖𝒃𝒂𝒓? 𝑷𝒆𝒓𝒅𝒆𝒔 ${dinheiro} 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ 𝒄𝒐𝒎𝒐 𝒂 𝒑𝒖𝒏𝒊çã𝒐 𝒒𝒖𝒆 𝒐 𝒂𝒈𝒖𝒂𝒓𝒅𝒂 𝒆 𝒕ã𝒐 𝒔𝒐𝒎𝒃𝒓𝒊𝒂 𝒒𝒖𝒂𝒏𝒕𝒐 𝒐𝒔 𝒂𝒃𝒊𝒔𝒎𝒐𝒔 𝒎𝒂𝒊𝒔 𝒑𝒓𝒐𝒇𝒖𝒏𝒅𝒐𝒔, 𝒆 𝒐 𝒑𝒆𝒔𝒐 𝒅𝒐 𝒔𝒆𝒖 𝒂𝒓𝒓𝒆𝒑𝒆𝒏𝒅𝒊𝒎𝒆𝒏𝒕𝒐 𝒔𝒆𝒓𝒂 𝒄𝒐𝒎𝒐 𝒄𝒐𝒓𝒓𝒆𝒏𝒕𝒆𝒔 𝒈𝒆𝒍𝒊𝒅𝒂𝒔 𝒂𝒓𝒓𝒂𝒔𝒕𝒂𝒏𝒅𝒐-𝒐 𝒑𝒂𝒓𝒂 𝒂 𝒆𝒕𝒆𝒓𝒏𝒂 𝒑𝒆𝒏𝒖𝒎𝒃𝒓𝒂.`,
        
        `𝑪𝒐𝒎𝒐 𝒐𝒖𝒔𝒂 𝒑𝒓𝒐𝒇𝒂𝒏𝒂𝒓 𝒂 𝒎𝒊𝒏𝒉𝒂 𝒆𝒏𝒕𝒊𝒅𝒂𝒅𝒆? 𝑨 𝒑𝒖𝒏𝒊𝒄𝒂𝒐 𝒒𝒖𝒆 𝒂𝒈𝒖𝒂𝒓𝒅𝒂 é 𝒖𝒎𝒂 𝒕𝒆𝒎𝒑𝒆𝒔𝒕𝒂𝒅𝒆 𝒅𝒆 𝒆𝒔𝒄𝒖𝒓𝒊𝒅𝒂𝒐, 𝒐𝒏𝒅𝒆 𝒐 𝒍𝒂𝒎𝒆𝒏𝒕𝒐 𝒅𝒐 𝒔𝒆𝒖 𝒂𝒓𝒓𝒆𝒑𝒆𝒏𝒅𝒊𝒎𝒆𝒏𝒕𝒐 𝒆𝒄𝒐𝒂𝒓𝒂 𝒑𝒆𝒍𝒐𝒔 𝒄𝒐𝒓𝒓𝒆𝒅𝒐𝒓𝒆𝒔 𝒔𝒐𝒎𝒃𝒓𝒊𝒐𝒔 𝒅𝒂 𝒆𝒕𝒆𝒓𝒏𝒊𝒅𝒂𝒅𝒆.
𝑷𝒆𝒓𝒅𝒆𝒔 ${dinheiro} 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ`,

`𝑪𝒐𝒎𝒐 𝒂𝒖𝒅𝒂𝒛𝒎𝒆𝒏𝒕𝒆 𝒕𝒆 𝒂𝒕𝒓𝒆𝒗𝒆𝒔 𝒂 𝒓𝒐𝒖𝒃𝒂𝒓 𝒂 𝒎𝒊𝒏𝒉𝒂 𝒇𝒐𝒓𝒕𝒖𝒏𝒂? 𝑨 𝒑𝒖𝒏𝒊𝒄𝒂𝒐 𝒒𝒖𝒆 𝒕𝒆 𝒆𝒔𝒑𝒆𝒓𝒂 𝒆 𝒖𝒎𝒂 𝒅𝒂𝒏ç𝒂 𝒎𝒂𝒄𝒂𝒃𝒓𝒂 𝒄𝒐𝒎 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔, 𝒐𝒏𝒅𝒆 𝒐 𝒍𝒂𝒎𝒆𝒏𝒕𝒐 𝒅𝒐 𝒕𝒆𝒖 𝒂𝒓𝒓𝒆𝒑𝒆𝒏𝒅𝒊𝒎𝒆𝒏𝒕𝒐 𝒆𝒄𝒐𝒂𝒓𝒂 𝒆𝒕𝒆𝒓𝒏𝒂𝒎𝒆𝒏𝒕𝒆 𝒑𝒆𝒍𝒐𝒔 𝒄𝒐𝒓𝒓𝒆𝒅𝒐𝒓𝒆𝒔 𝒅𝒂 𝒄𝒐𝒏𝒅𝒆𝒏𝒂𝒄𝒂𝒐.
𝑷𝒆𝒓𝒅𝒆𝒔 ${dinheiro} 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ`

        ])}`)
      
      return !0
    }

    if(global.db.data.chats[m.chat].users[who].money <=0){
            m.reply(`─┅──┅❖ 💵 ❖─┅──┅
𝑶 𝒖𝒔𝒖𝒂𝒓𝒊𝒐 𝒆𝒔𝒕𝒂 𝒅𝒆𝒔𝒕𝒊𝒕𝒖𝒊𝒅𝒐 𝒅𝒆 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ. 𝑶 𝒇𝒖𝒓𝒕𝒐 𝒆 𝒖𝒎𝒂 𝒎𝒊𝒓𝒂𝒈𝒆𝒎 𝒊𝒎𝒑𝒐𝒔𝒔𝒊𝒗𝒆𝒍 𝒏𝒆𝒔𝒕𝒂 𝒆𝒔𝒄𝒖𝒓𝒊𝒅𝒂𝒐.
─┅──┅❖ ❖─┅──┅`)
            return !0  
            }
    
let userData = global.db.data.chats[m.chat].users[m.sender];
let tentativas = userData.tentativasRoubo;

let lastAttemptTimestamp = global.db.data.chats[m.chat].users[m.sender].rouboTimestamp



let currentTime = new Date();
let lastTime = new Date(lastAttemptTimestamp);
let timeSinceLastAttempt = currentTime -lastTime ;
let hoursSinceLastAttempt = Math.floor(timeSinceLastAttempt / (1000 * 60 * 60)); // Convert milliseconds to hours
let frases = [
    "𝑨𝒉, 𝒂 𝒎𝒆𝒍𝒂𝒏𝒄𝒐𝒍𝒊𝒂 𝒒𝒖𝒆 𝒑𝒂𝒊𝒓𝒂 𝒔𝒐𝒃𝒓𝒆 𝒆𝒔𝒕𝒂 𝒅𝒆𝒔𝒂𝒇𝒐𝒓𝒕𝒖𝒏𝒂𝒅𝒂 𝒕𝒓𝒂𝒏𝒔𝒈𝒓𝒆𝒔𝒔𝒂𝒐",
    "𝑨𝒉, 𝒒𝒖𝒂𝒐 𝒇𝒖𝒏𝒆𝒔𝒕𝒐 𝒆 𝒐 𝒅𝒆𝒔𝒕𝒊𝒏𝒐 𝒒𝒖𝒆 𝒕𝒆𝒄𝒆 𝒆𝒔𝒕𝒂 𝒕𝒓𝒂𝒈𝒊𝒄𝒂 𝒏𝒂𝒓𝒓𝒂𝒕𝒊𝒗𝒂",
    "𝑨𝒉, 𝒂 𝒔𝒐𝒎𝒃𝒓𝒊𝒂 𝒅𝒂𝒏𝒄𝒂 𝒅𝒐𝒔 𝒅𝒆𝒔𝒕𝒊𝒏𝒐𝒔 𝒒𝒖𝒆 𝒆𝒏𝒗𝒐𝒍𝒗𝒆 𝒆𝒔𝒕𝒂 𝒍𝒂𝒎𝒆𝒏𝒕𝒂𝒗𝒆𝒍 𝒂𝒄𝒂𝒐",
    "𝑨𝒉, 𝒒𝒖𝒆 𝒕𝒐𝒓𝒎𝒆𝒏𝒕𝒐 𝒆𝒏𝒗𝒐𝒍𝒗𝒆 𝒆𝒔𝒕𝒂 𝒏𝒆𝒈𝒓𝒂 𝒊𝒏𝒄𝒖𝒓𝒔𝒂𝒐 𝒏𝒐 𝒓𝒆𝒊𝒏𝒐 𝒅𝒂 𝒅𝒆𝒔𝒈𝒓𝒂𝒄𝒂",
    "𝑨𝒉, 𝒒𝒖𝒂𝒏𝒕𝒂 𝒂𝒇𝒍𝒊𝒄𝒂𝒐 𝒑𝒆𝒓𝒎𝒆𝒊𝒂 𝒆𝒔𝒕𝒂 𝒅𝒐𝒍𝒐𝒓𝒐𝒔𝒂 𝒗𝒊𝒐𝒍𝒂𝒄𝒂𝒐 𝒅𝒐 𝒅𝒆𝒔𝒕𝒊𝒏𝒐",
    "𝑨𝒉, 𝒒𝒖𝒆 𝒅𝒆𝒔𝒗𝒆𝒏𝒕𝒖𝒓𝒂 𝒐𝒃𝒔𝒄𝒖𝒓𝒆𝒄𝒆 𝒆𝒔𝒕𝒆 𝒂𝒕𝒐 𝒏𝒆𝒇𝒂𝒔𝒕𝒐 𝒆 𝒊𝒏𝒇𝒂𝒖𝒔𝒕𝒐",
    "𝑨𝒉, 𝒐𝒔 𝒍𝒂𝒎𝒆𝒏𝒕𝒐𝒔 𝒆𝒄𝒐𝒂𝒎 𝒑𝒐𝒓 𝒆𝒔𝒕𝒂 𝒐𝒅𝒊𝒐𝒔𝒂 𝒒𝒖𝒆𝒃𝒓𝒂 𝒅𝒆 𝒉𝒂𝒓𝒎𝒐𝒏𝒊𝒂",
    "𝑨𝒉, 𝒒𝒖𝒆 𝒅𝒆𝒔𝒆𝒔𝒑𝒆𝒓𝒐 𝒑𝒂𝒊𝒓𝒂 𝒔𝒐𝒃𝒓𝒆 𝒆𝒔𝒕𝒂 𝒔𝒊𝒏𝒊𝒔𝒕𝒓𝒂 𝒕𝒓𝒂𝒏𝒔𝒈𝒓𝒆𝒔𝒔𝒂𝒐 𝒅𝒐𝒔 𝒄𝒆𝒖𝒔",
    "𝑨𝒉, 𝒒𝒖𝒂𝒐 𝒑𝒓𝒐𝒇𝒖𝒏𝒅𝒐 𝒆 𝒐 𝒂𝒃𝒊𝒔𝒎𝒐 𝒒𝒖𝒆 𝒔𝒆 𝒂𝒃𝒓𝒆 𝒅𝒊𝒂𝒏𝒕𝒆 𝒅𝒆𝒔𝒕𝒂 𝒂𝒇𝒓𝒐𝒏𝒕𝒂",
    "𝑨𝒉, 𝒒𝒖𝒆 𝒕𝒓𝒊𝒔𝒕𝒆𝒛𝒂 𝒔𝒆 𝒅𝒆𝒓𝒓𝒂𝒎𝒂 𝒔𝒐𝒃𝒓𝒆 𝒆𝒔𝒕𝒂 𝒆𝒙𝒆𝒄𝒓𝒂𝒗𝒆𝒍 𝒂𝒄𝒂𝒐 𝒅𝒐𝒔 𝒅𝒆𝒔𝒕𝒊𝒏𝒐𝒔",
    "𝑨𝒉, 𝒒𝒖𝒆 𝒅𝒆𝒔𝒆𝒔𝒑𝒆𝒓𝒐 𝒆𝒏𝒆𝒈𝒓𝒆𝒄𝒆 𝒆𝒔𝒕𝒂 𝒔𝒐𝒎𝒃𝒓𝒊𝒂 𝒕𝒓𝒂𝒊𝒄𝒂𝒐 𝒂𝒐𝒔 𝒅𝒆𝒔𝒊𝒈𝒏𝒊𝒐𝒔",
    "𝑨𝒉, 𝒒𝒖𝒆 𝒅𝒆𝒔𝒈𝒓𝒂𝒄𝒂 𝒂𝒔𝒔𝒐𝒍𝒂 𝒆𝒔𝒕𝒆 𝒂𝒕𝒐 𝒗𝒊𝒍 𝒆 𝒅𝒆𝒔𝒖𝒎𝒂𝒏𝒐",
    "𝑨𝒉, 𝒒𝒖𝒂𝒐 𝒔𝒐𝒎𝒃𝒓𝒊𝒂 𝒆 𝒂 𝒏𝒆𝒗𝒐𝒂 𝒒𝒖𝒆 𝒆𝒏𝒗𝒐𝒍𝒗𝒆 𝒆𝒔𝒕𝒂 𝒆𝒙𝒆𝒄𝒓𝒂𝒗𝒆𝒍 𝒂𝒄𝒂𝒐",
    "𝑨𝒉, 𝒒𝒖𝒆 𝒕𝒐𝒓𝒎𝒆𝒏𝒕𝒂 𝒅𝒆 𝒂𝒍𝒎𝒂𝒔 𝒂𝒇𝒍𝒊𝒕𝒂𝒔 𝒄𝒖𝒆𝒓𝒄𝒂 𝒆𝒔𝒕𝒂 𝒊𝒏𝒇𝒂𝒎𝒆 𝒕𝒓𝒂𝒏𝒔𝒈𝒓𝒆𝒔𝒔𝒂𝒐",
]



 
let user = a => '@' + a.split('@')[0]

    if (tentativas > 0) {
        
        const sucesso = Math.random() < 0.8;

        if (sucesso) {
          if(global.db.data.chats[m.chat].users[m.sender].steals == undefined){
            global.db.data.chats[m.chat].users[m.sender].steals = 0
          }
          global.db.data.chats[m.chat].users[m.sender].steals++
          const robb = Math.floor(Math.random() * (0.4 * global.db.data.chats[m.chat].users[who].money - 0.1 * global.db.data.chats[m.chat].users[who].money + 1)) + 0.1 * global.db.data.chats[m.chat].users[who].money;
        let roubo = parseInt(Math.round(robb));
            global.db.data.chats[m.chat].users[who].money -= roubo;
            if(global.db.data.chats[m.chat].users[who].money <0){
            global.db.data.chats[m.chat].users[who].money =0
              
            }
            
            
            global.db.data.chats[m.chat].users[m.sender].money += roubo
            
            let mssg = `*╭─┅──┅❖*
җ 𝑵𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔 𝒅𝒂 𝒏𝒐𝒊𝒕𝒆, 𝒐 𝒄𝒓𝒊𝒎𝒆 𝒇𝒐𝒊 𝒄𝒐𝒏𝒔𝒖𝒎𝒂𝒅𝒐 𝒄𝒐𝒎 ê𝒙𝒊𝒕𝒐

${user(m.sender)}, 𝒄𝒐𝒎𝒐 𝒖𝒎𝒂 𝒔𝒐𝒎𝒃𝒓𝒂 𝒇𝒖𝒈𝒂𝒛, 
𝒔𝒖𝒃𝒕𝒓𝒂𝒊𝒖 ${roubo} 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ 𝒅𝒐 𝒅𝒐𝒎í𝒏𝒊𝒐 𝒅𝒆 ${user(who)}.

${pickRandom(frases)
}
*╰─┅──┅❖*`

await m.reply(mssg, null, { mentions: conn.parseMention(mssg)})
            console.log(`Você roubou ${roubo} moedas.`);
        } else {
          
          let perdaf = Math.floor(Math.random() * (0.4 * global.db.data.chats[m.chat].users[m.sender].money - 0.1 * global.db.data.chats[m.chat].users[m.sender].money + 1)) + 0.1 * global.db.data.chats[m.chat].users[m.sender].money;
         let perda = parseInt(Math.round(perdaf));
         
          global.db.data.chats[m.chat].users[m.sender].money -= perda
          if( global.db.data.chats[m.chat].users[m.sender].money<0){
             global.db.data.chats[m.chat].users[m.sender].money = 0
          }
          
          
            console.log("Ops.. você foi pego no flagra. Tente novamente.");
            
            m.reply(`─┅──┅❖ 💵 ❖─┅──┅
         𝚅𝚘𝚌𝚎 𝚏𝚘𝚒 𝚏𝚕𝚊𝚐𝚛𝚊𝚍𝚘! 𝚂𝚎𝚛𝚊 𝚙𝚞𝚗𝚒𝚍𝚘
            
${pickRandom(
            [`𝑸𝒖𝒆 𝒕𝒆𝒖 𝒊𝒏𝒇𝒐𝒓𝒕ú𝒏𝒊𝒐 𝒔𝒊𝒓𝒗𝒂 𝒅𝒆 𝒂𝒅𝒗𝒆𝒓𝒕ê𝒏𝒄𝒊𝒂: ${perda} 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ 𝒔𝒆 𝒅𝒆𝒔𝒗𝒂𝒏𝒆𝒄𝒆𝒓𝒂𝒎 𝒆𝒎 𝒕𝒆𝒖 𝒇𝒓𝒂𝒄𝒂𝒔𝒔𝒐. 𝑬𝒔𝒄𝒐𝒍𝒉𝒆 𝒄𝒐𝒎 𝒄𝒂𝒖𝒕𝒆𝒍𝒂, 𝒑𝒐𝒊𝒔 𝒂 𝒊𝒎𝒑𝒓𝒖𝒅ê𝒏𝒄𝒊𝒂 𝒑𝒐𝒅𝒆 𝒍𝒆𝒗𝒂𝒓 à 𝒑𝒆𝒓𝒅𝒂.`,
            
  `𝑨𝒕𝒆𝒏çã𝒐: ${perda} 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ 𝒇𝒐𝒓𝒂𝒎 𝒑𝒆𝒓𝒅𝒊𝒅𝒂𝒔 𝒆𝒎 𝒕𝒆𝒖 𝒇𝒓𝒂𝒄𝒂𝒔𝒔𝒐. 𝑸𝒖𝒆 𝒆𝒔𝒕𝒂 𝒑𝒆𝒓𝒅𝒂 𝒕𝒆 𝒆𝒏𝒔𝒊𝒏𝒆 𝒂 𝒔𝒆𝒓 𝒑𝒓𝒖𝒅𝒆𝒏𝒕𝒆 𝒆𝒎 𝒕𝒖𝒂𝒔 𝒆𝒔𝒄𝒐𝒍𝒉𝒂𝒔.`,
  `𝑬𝒊𝒔 𝒂 𝒂𝒅𝒗𝒆𝒓𝒕ê𝒏𝒄𝒊𝒂 𝒔𝒐𝒎𝒃𝒓𝒊𝒂: ${perda} 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ 𝒇𝒐𝒓𝒂𝒎 𝒕𝒓𝒂𝒈𝒂𝒅𝒂𝒔 𝒑𝒆𝒍𝒂 𝒗𝒐𝒓𝒂𝒈𝒆𝒎 𝒅𝒆 𝒕𝒆𝒖 𝒇𝒓𝒂𝒄𝒂𝒔𝒔𝒐. 𝑸𝒖𝒆 𝒆𝒔𝒕𝒆 𝒊𝒏𝒇𝒐𝒓𝒕ú𝒏𝒊𝒐 𝒕𝒆 𝒈𝒖𝒊𝒆 𝒑𝒆𝒍𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔 𝒅𝒂 𝒊𝒎𝒑𝒓𝒖𝒅ê𝒏𝒄𝒊𝒂, 𝒍𝒆𝒎𝒃𝒓𝒂𝒏𝒅𝒐-𝒕𝒆 𝒔𝒆𝒎𝒑𝒓𝒆 𝒅𝒂 𝒇𝒓𝒂𝒈𝒊𝒍𝒊𝒅𝒂𝒅𝒆 𝒅𝒂𝒔 𝒆𝒔𝒄𝒐𝒍𝒉𝒂𝒔.`,
  `𝑨𝒕𝒆𝒏çã𝒐, 𝒂𝒍𝒎𝒂 𝒅𝒆𝒔𝒗𝒆𝒏𝒕𝒖𝒓𝒂𝒅𝒂: ${perda} 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ 𝒔𝒖𝒄𝒖𝒎𝒃𝒊𝒓𝒂𝒎 à 𝒕𝒖𝒂 𝒒𝒖𝒆𝒅𝒂. 𝑸𝒖𝒆 𝒆𝒔𝒕𝒆 𝒅𝒆𝒔𝒂𝒔𝒕𝒓𝒆 𝒕𝒆 𝒔𝒊𝒓𝒗𝒂 𝒄𝒐𝒎𝒐 𝒖𝒎𝒂 𝒔𝒐𝒎𝒃𝒓𝒂 𝒑𝒆𝒓𝒑é𝒕𝒖𝒂, 𝒍𝒆𝒎𝒃𝒓𝒂𝒏𝒅𝒐-𝒕𝒆 𝒅𝒂𝒔 𝒄𝒐𝒏𝒔𝒆𝒒𝒖ê𝒏𝒄𝒊𝒂𝒔 𝒅𝒂 𝒊𝒎𝒑𝒓𝒖𝒅ê𝒏𝒄𝒊𝒂 𝒆𝒎 𝒕𝒆𝒖𝒔 𝒑𝒂𝒔𝒔𝒐𝒔.`,
  `𝑨𝒍𝒆𝒓𝒕𝒂: ${perda} 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ 𝒔𝒆 𝒅𝒊𝒔𝒔𝒊𝒑𝒂𝒓𝒂𝒓𝒂 𝒆𝒎 𝒕𝒆𝒖 𝒇𝒓𝒂𝒄𝒂𝒔𝒔𝒐. 𝑸𝒖𝒆 𝒆𝒔𝒕𝒆 𝒍𝒂𝒎𝒆𝒏𝒕𝒐 𝒕𝒆 𝒆𝒏𝒔𝒊𝒏𝒆 𝒂 𝒕𝒓𝒊𝒍𝒉𝒂𝒓 𝒄𝒐𝒎 𝒄𝒂𝒖𝒕𝒆𝒍𝒂 𝒐𝒔 𝒄𝒂𝒎𝒊𝒏𝒉𝒐𝒔 𝒆𝒔𝒄𝒖𝒓𝒐𝒔 𝒅𝒂 𝒇𝒐𝒓𝒕𝒖𝒏𝒂.`,
  `𝑸𝒖𝒆 𝒆𝒔𝒕𝒂 𝒑𝒖𝒏𝒊çã𝒐 𝒔𝒆𝒋𝒂 𝒕𝒖𝒂 𝒄𝒓𝒖𝒛: ${perda} 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ 𝒇𝒐𝒓𝒂𝒎 𝒅𝒆𝒗𝒐𝒓𝒂𝒅𝒂𝒔 𝒑𝒆𝒍𝒐 𝒂𝒃𝒊𝒔𝒎𝒐 𝒅𝒆 𝒕𝒆𝒖 𝒆𝒓𝒓𝒐. 𝑸𝒖𝒆 𝒔𝒆𝒖 𝒆𝒄𝒐 𝒔𝒆𝒋𝒂 𝒕𝒆𝒖 𝒈𝒖𝒊𝒂, 𝒍𝒆𝒎𝒃𝒓𝒂𝒏𝒅𝒐-𝒕𝒆 𝒄𝒐𝒏𝒔𝒕𝒂𝒏𝒕𝒆𝒎𝒆𝒏𝒕𝒆 𝒅𝒂 𝒅𝒐𝒓 𝒄𝒂𝒖𝒔𝒂𝒅𝒂 𝒑𝒆𝒍𝒂 𝒊𝒎𝒑𝒓𝒖𝒅ê𝒏𝒄𝒊𝒂.`,
  `𝑸𝒖𝒆 𝒆𝒔𝒕𝒂 𝒑𝒆𝒓𝒅𝒂 𝒔𝒆𝒋𝒂 𝒕𝒖𝒂 𝒑𝒆𝒏𝒊𝒕ê𝒏𝒄𝒊𝒂: ${perda} 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ 𝒔𝒆 𝒅𝒆𝒔𝒗𝒂𝒏𝒆𝒄𝒆𝒓𝒂𝒎, 𝒄𝒐𝒎𝒐 𝒖𝒎𝒂 𝒑𝒖𝒏𝒊çã𝒐 𝒑𝒐𝒓 𝒕𝒖𝒂 𝒇𝒂𝒍𝒉𝒂. 𝑸𝒖𝒆 𝒔𝒆𝒖 𝒆𝒄𝒐 𝒍ú𝒈𝒖𝒃𝒓𝒆 𝒕𝒆 𝒂𝒄𝒐𝒎𝒑𝒂𝒏𝒉𝒆, 𝒓𝒆𝒄𝒐𝒓𝒅𝒂𝒏𝒅𝒐-𝒕𝒆 𝒅𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔 𝒒𝒖𝒆 𝒑𝒂𝒊𝒓𝒂𝒎 𝒔𝒐𝒃𝒓𝒆 𝒐𝒔 𝒒𝒖𝒆 𝒐𝒖𝒔𝒂𝒎 𝒅𝒆𝒔𝒂𝒇𝒊𝒂𝒓 𝒂 𝒑𝒓𝒖𝒅ê𝒏𝒄𝒊𝒂.`,
  `𝑸𝒖𝒆 𝒆𝒔𝒕𝒆 𝒂𝒎𝒂𝒓𝒈𝒂 𝒑𝒆𝒏𝒂𝒍𝒊𝒅𝒂𝒅𝒆 𝒕𝒆 𝒂𝒔𝒔𝒐𝒎𝒃𝒓𝒆: ${perda} 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ 𝒔𝒆 𝒅𝒊𝒔𝒔𝒊𝒑𝒂𝒓𝒂𝒎, 𝒄𝒐𝒎𝒐 𝒖𝒎 𝒄𝒂𝒔𝒕𝒊𝒈𝒐 𝒑𝒐𝒓 𝒕𝒖𝒂 𝒅𝒆𝒓𝒓𝒐𝒕𝒂. 𝑸𝒖𝒆 𝒔𝒆𝒖 𝒆𝒄𝒐 𝒔𝒐𝒎𝒃𝒓𝒊𝒐 𝒕𝒆 𝒑𝒆𝒓𝒔𝒊𝒈𝒂, 𝒓𝒆𝒍𝒆𝒎𝒃𝒓𝒂𝒏𝒅𝒐-𝒕𝒆 𝒅𝒂𝒔 𝒄𝒐𝒏𝒔𝒆𝒒𝒖ê𝒏𝒄𝒊𝒂𝒔 𝒕𝒆𝒓𝒓í𝒗𝒆𝒊𝒔 𝒅𝒂 𝒊𝒎𝒑𝒓𝒖𝒅ê𝒏𝒄𝒊𝒂.`,
  `𝑸𝒖𝒆 𝒆𝒔𝒕𝒆 𝒂𝒎𝒂𝒓𝒈𝒂 𝒑𝒆𝒓𝒏𝒂𝒍𝒊𝒅𝒂𝒅𝒆 𝒕𝒆 𝒇𝒍𝒂𝒈𝒆𝒍𝒐 𝒕𝒆 𝒄𝒐𝒏𝒔𝒖𝒎𝒂: ${perda} 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ 𝒅𝒆𝒔𝒂𝒑𝒂𝒓𝒆𝒄𝒆𝒓𝒂𝒎, 𝒄𝒐𝒎𝒐 𝒖𝒎𝒂 𝒔𝒆𝒏𝒕𝒆𝒏ç𝒂 𝒑𝒐𝒓 𝒕𝒖𝒂 𝒒𝒖𝒆𝒅𝒂. 𝑸𝒖𝒆 𝒔𝒖𝒂 𝒔𝒐𝒎𝒃𝒓𝒂 𝒕𝒆 𝒂𝒕𝒐𝒓𝒎𝒆𝒏𝒕𝒆, 𝒂𝒅𝒗𝒆𝒓𝒕𝒊𝒏𝒅𝒐-𝒕𝒆 𝒅𝒂𝒔 𝒄𝒐𝒏𝒔𝒆𝒒𝒖ê𝒏𝒄𝒊𝒂𝒔 𝒕𝒆𝒓𝒓í𝒗𝒆𝒊𝒔 𝒅𝒂 𝒊𝒎𝒑𝒓𝒖𝒅ê𝒏𝒄𝒊𝒂.`,
  `𝑸𝒖𝒆 𝒆𝒔𝒕𝒆 𝒇𝒍𝒂𝒈𝒆𝒍𝒐 𝒕𝒆 𝒂𝒎𝒑𝒂𝒏𝒉𝒆𝒊𝒓: ${perda} 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ 𝒅𝒆 𝒔𝒆𝒓 𝒗í𝒕𝒊𝒎𝒂𝒔 𝒄𝒖𝒆 𝒔𝒆 𝒃𝒂𝒔𝒆𝒊𝒂𝒎 𝒏𝒂 𝒑𝒂𝒔𝒔𝒂𝒈𝒆𝒎, 𝒄𝒐𝒎𝒐 𝒑𝒐𝒅𝒆 𝒍𝒆𝒈𝒂𝒍.`,
  `𝑸𝒖𝒆 𝒆𝒔𝒕𝒆 𝒇𝒍𝒂𝒈𝒆𝒍𝒐 𝒕𝒆 𝒄𝒐𝒏𝒔𝒖𝒎𝒂: ${perda} 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ 𝒅𝒆𝒔𝒂𝒑𝒂𝒓𝒆𝒄𝒆𝒓𝒂𝒎, 𝒄𝒐𝒎𝒐 𝒖𝒎𝒂 𝒔𝒆𝒏𝒕𝒆𝒏ç𝒂 𝒑𝒐𝒓 𝒕𝒖𝒂 𝒒𝒖𝒆𝒅𝒂. 𝑸𝒖𝒆 𝒔𝒆𝒖 𝒔𝒐𝒎𝒃𝒓𝒂 𝒕𝒆 𝒂𝒕𝒐𝒓𝒎𝒆𝒏𝒕𝒆, 𝒂𝒅𝒗𝒆𝒓𝒕𝒊𝒏𝒅𝒐-𝒕𝒆 𝒅𝒂𝒔 𝒄𝒐𝒏𝒔𝒆𝒒𝒖ê𝒏𝒄𝒊𝒂𝒔 𝒕𝒆𝒓𝒓í𝒗𝒆𝒊𝒔 𝒅𝒂 𝒊𝒎𝒑𝒓𝒖𝒅ê𝒏𝒄𝒊𝒂.`,
  `𝑸𝒖𝒆 𝒆𝒔𝒕𝒆 𝒇𝒍𝒂𝒈𝒆𝒍𝒐 𝒕𝒆 𝒂𝒎𝒂𝒓𝒈𝒂 𝒑𝒆𝒓𝒅𝒂 𝒔𝒆𝒋𝒂 𝒕𝒖𝒂 𝒑𝒆𝒏𝒊𝒕ê𝒏𝒄𝒊𝒂: ${perda} 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ 𝒅𝒆𝒔𝒗𝒂𝒏𝒆𝒄𝒆𝒓𝒂𝒎, 𝒄𝒐𝒎𝒐 𝒖𝒎𝒂 𝒔𝒆𝒏𝒕𝒆𝒏ç𝒂` ])}
  
  ─┅──┅❖ ⸸ ❖─┅──┅
  `)
        }

        global.db.data.chats[m.chat].users[m.sender].tentativasRoubo -= 1
        
if(!global.db.data.chats[m.chat].users[m.sender].usuariosRoubados){
  global.db.data.chats[m.chat].users[m.sender].usuariosRoubados=[]
}
        global.db.data.chats[m.chat].users[m.sender].usuariosRoubados.push(who); 
        global.db.data.chats[m.chat].users[m.sender].lastAttemptTimestamp = currentTime;
   
   
    } else {
    if (has24HoursPassed(global.db.data.chats[m.chat].users[m.sender].rouboTimestamp)) {
      reset()
      
    } else {
        // Inform the user how much time is left until attempts are replenished
        let tempo = 24 - hoursSinceLastAttempt;
        if (isNaN(tempo)) {
 reset()
}
        m.reply(`${pickRandom([
          `Ó 𝒊𝒏𝒇𝒆𝒍𝒊𝒛 𝒍𝒂𝒅𝒓ã𝒐, 𝒕𝒖 𝒕𝒓𝒂𝒏𝒔𝒈𝒓𝒆𝒅𝒊𝒔𝒕𝒆 𝒐 𝒍𝒊𝒎𝒊𝒂𝒓 𝒅𝒆 𝒓𝒐𝒖𝒃𝒐𝒔 𝒏𝒆𝒔𝒕𝒂 𝒏𝒐𝒊𝒕𝒆 𝒔𝒐𝒎𝒃𝒓𝒊𝒂. 𝑹𝒆𝒕𝒐𝒓𝒏𝒂 𝒆𝒎 ${tempo} 𝒉𝒐𝒓𝒂𝒔 𝒑𝒂𝒓𝒂 𝒒𝒖𝒆 𝒑𝒐𝒔𝒔𝒂𝒔, 𝒖𝒎𝒂 𝒗𝒆𝒛 𝒎𝒂𝒊𝒔, 𝒍𝒂𝒏ç𝒂𝒓-𝒕𝒆 à 𝒔𝒐𝒓𝒕𝒆 𝒅𝒐 𝒄𝒓𝒊𝒎𝒆 𝒏𝒂𝒔 𝒕𝒓𝒆𝒗𝒂𝒔 𝒅𝒐 𝒅𝒆𝒔𝒕𝒊𝒏𝒐.`,
          
  `𝑨𝒉, 𝒊𝒏𝒔𝒐𝒍𝒆𝒏𝒕𝒆 𝒍𝒂𝒅𝒓ã𝒐, 𝒕𝒖𝒂 𝒂𝒗𝒂𝒓𝒆𝒛𝒂 𝒆𝒙𝒄𝒆𝒅𝒆𝒖 𝒐𝒔 𝒍𝒊𝒎𝒊𝒕𝒆𝒔 𝒏𝒆𝒔𝒕𝒂 𝒏𝒐𝒊𝒕𝒆 𝒆𝒏𝒆𝒗𝒐𝒂𝒅𝒂. 𝑨𝒈𝒖𝒂𝒓𝒅𝒆 ${tempo} 𝒉𝒐𝒓𝒂𝒔 𝒕𝒓𝒂𝒏𝒔𝒄𝒐𝒓𝒓𝒆𝒓𝒆𝒎, 𝒂𝒏𝒕𝒆𝒔 𝒒𝒖𝒆 𝒐𝒖𝒔𝒂𝒓𝒆𝒔, 𝒏𝒐𝒗𝒂𝒎𝒆𝒏𝒕𝒆, 𝒆𝒏𝒇𝒓𝒆𝒏𝒕𝒂𝒓 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔 𝒆 𝒂𝒔 𝒂𝒓𝒕𝒊𝒎𝒂𝒏𝒉𝒂𝒔 𝒅𝒐 𝒄𝒓𝒊𝒎𝒆.`,
  `Ó 𝒊𝒏𝒇𝒐𝒓𝒕𝒖𝒏𝒂𝒅𝒐 𝒕𝒓𝒂𝒏𝒔𝒈𝒓𝒆𝒔𝒔𝒐𝒓, 𝒕𝒖 𝒆𝒙𝒄𝒆𝒅𝒆𝒔𝒕𝒆 𝒐 𝒍𝒊𝒎𝒊𝒕𝒆 𝒅𝒆 𝒑𝒊𝒍𝒉𝒂𝒈𝒆𝒏𝒔 𝒏𝒆𝒔𝒕𝒂 𝒏𝒐𝒊𝒕𝒆 𝒆𝒏𝒆𝒈𝒓𝒆𝒄𝒊𝒅𝒂. 𝑹𝒆𝒕𝒐𝒓𝒏𝒂, 𝒂𝒑ó𝒔 ${tempo} 𝒉𝒐𝒓𝒂𝒔 𝒔𝒆 𝒑𝒂𝒔𝒔𝒂𝒓𝒆𝒎, 𝒑𝒂𝒓𝒂 𝒒𝒖𝒆 𝒑𝒐𝒔𝒔𝒂𝒔, 𝒖𝒎𝒂 𝒗𝒆𝒛 𝒎𝒂𝒊𝒔, 𝒅𝒆𝒔𝒂𝒇𝒊𝒂𝒓 𝒐𝒔 𝒅𝒆𝒔í𝒈𝒏𝒊𝒐𝒔 𝒔𝒐𝒎𝒃𝒓𝒊𝒐𝒔 𝒅𝒐 𝒅𝒆𝒔𝒕𝒊𝒏𝒐.`,
  `𝑨𝒉, 𝒂𝒖𝒅𝒂𝒄𝒊𝒐𝒔𝒐 𝒍𝒂𝒅𝒓ã𝒐, 𝒕𝒖𝒂 𝒈𝒂𝒏â𝒏𝒄𝒊𝒂 𝒅𝒆𝒔𝒂𝒇𝒊𝒐𝒖 𝒐𝒔 𝒍𝒊𝒎𝒊𝒕𝒆𝒔 𝒅𝒂 𝒏𝒐𝒊𝒕𝒆 𝒔𝒐𝒎𝒃𝒓𝒊𝒂 𝑨𝒈𝒖𝒂𝒓𝒅𝒂, 𝒑𝒐𝒊𝒔, 𝒐 𝒍𝒂𝒑𝒔𝒐 𝒅𝒆 ${tempo} 𝒉𝒐𝒓𝒂𝒔, 𝒂𝒏𝒕𝒆𝒔 𝒅𝒆 𝒐𝒖𝒔𝒂𝒓𝒆𝒔, 𝒏𝒐𝒗𝒂𝒎𝒆𝒏𝒕𝒆, 𝒎𝒆𝒓𝒈𝒖𝒍𝒉𝒂𝒓 𝒏𝒂𝒔 𝒕𝒓𝒆𝒗𝒂𝒔 𝒆 𝒅𝒆𝒔𝒂𝒇𝒊𝒂𝒓 𝒐𝒔 𝒄𝒂𝒑𝒓𝒊𝒄𝒉𝒐𝒔 𝒅𝒐 𝒅𝒆𝒔𝒕𝒊𝒏𝒐.`,
  
  `𝑷𝒆𝒍𝒂 𝒕𝒖𝒂 𝒊𝒏𝒄𝒆𝒔𝒔𝒂𝒏𝒕𝒆 𝒄𝒐𝒃𝒊ç𝒂, 𝒂𝒈𝒖𝒂𝒓𝒅𝒆 ${tempo} 𝒉𝒐𝒓𝒂𝒔 𝒔𝒆 𝒅𝒆𝒔𝒗𝒂𝒏𝒆𝒄𝒆𝒓, 𝒂𝒏𝒕𝒆𝒔 𝒅𝒆 𝒕𝒆 𝒂𝒗𝒆𝒏𝒕𝒖𝒓𝒂𝒓𝒆𝒔, 𝒏𝒐𝒗𝒂𝒎𝒆𝒏𝒕𝒆, 𝒏𝒐𝒔 𝒂𝒃𝒊𝒔𝒎𝒐𝒔 𝒅𝒐 𝒄𝒓𝒊𝒎𝒆 𝒆 𝒅𝒆𝒔𝒂𝒇𝒊𝒂𝒓𝒆𝒔 𝒐𝒔 𝒗𝒆𝒓𝒆𝒅𝒊𝒄𝒕𝒐𝒔 𝒔𝒐𝒎𝒃𝒓𝒊𝒐𝒔 𝒅𝒐 𝒅𝒆𝒔𝒕𝒊𝒏𝒐.`
          ])}`)
        
    }
}


    
    
    
    
  }
  else {
    await m.reply(`─┅──┅❖ 𓅊 ❖─┅──┅
    𝑵𝒂 𝒆𝒔𝒄𝒖𝒓𝒊𝒅𝒂𝒐, 𝒖𝒔𝒆 𝒐 𝒄𝒐𝒎𝒂𝒏𝒅𝒐 *.𝒓𝒐𝒖𝒃𝒂𝒓*  𝒎𝒂𝒓𝒄𝒂𝒏𝒅𝒐 𝒐𝒖 𝒓𝒆𝒔𝒑𝒐𝒏𝒅𝒆𝒏𝒅𝒐 𝒂𝒍𝒈𝒖𝒆𝒎 𝒆 𝒕𝒐𝒎𝒆 𝒐 𝒒𝒖𝒆 𝒆 𝒔𝒆𝒖 𝒑𝒐𝒓 𝒅𝒊𝒓𝒆𝒊𝒕𝒐, 𝒑𝒐𝒊𝒔 𝒂 𝒏𝒐𝒊𝒕𝒆 𝒄𝒐𝒏𝒄𝒆𝒅𝒆 𝒑𝒐𝒅𝒆𝒓 𝒂𝒐𝒔 𝒒𝒖𝒆 𝒔𝒆 𝒂𝒕𝒓𝒆𝒗𝒆𝒎 𝒂 𝒂𝒈𝒂𝒓𝒓𝒂-𝒍𝒐.
    ─┅──┅❖ ⚚ ❖─┅──┅`)
  }
  
  break
case "pix":
  if(m.quoted && m.quoted.sender&& !args[1])
  {
   
    
    if (/^\d+$/.test(args[0])) {
    // args[1] contains only numbers
    let val = parseInt(args[0]);
        if(val<0){
      m.reply(`♱ Valor não pode ser negativo. . . `)
      return !0
    }
    if(global.db.data.chats[m.chat].users[m.sender].money < val )
{
  m.reply("Saldo insuficiente de 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ. . . ")
  return !0
}

    global.db.data.chats[m.chat].users[who].money += val
    global.db.data.chats[m.chat].users[m.sender].money -= val
// global.db.data.chats[m.chat].users[who].level
m.reply(`🕯️💀 Doando ${args[0]} 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ `)

    }
    else {
         m.reply(`♱ Valor deve ser numérico. . . `)
      return !0
    }
    

  }
  else if(who && args[0] && args[1]){

if(args[1].includes("@")) {
  
  if (/^\d+$/.test(args[0])) {
    // args[1] contains only numbers
    let vals = parseInt(args[0]);
       if(vals<0){
      m.reply(`♱ Valor não pode ser negativo. . . `)
      return !0
    }
  if(global.db.data.chats[m.chat].users[m.sender].money < vals)
{
  m.reply("Saldo insuficiente de 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ. . . ")
  return !0
}
    global.db.data.chats[m.chat].users[who].money += vals
    global.db.data.chats[m.chat].users[m.sender].money -= vals
// global.db.data.chats[m.chat].users[who].level
m.reply(`🕯️💀 Doando ${args[0]} 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ `)
  return !0
  }
  else {
       m.reply(`♱ Valor deve ser numérico. . . `)
      return !0
  }
  
 
  
}

if (/^\d+$/.test(args[1])) {
    // args[1] contains only numbers
    let val1 = parseInt(args[1]);
    if(val1<0){
      m.reply(`♱ Valor não pode ser negativo. . . `)
      return !0
    }
if(global.db.data.chats[m.chat].users[m.sender].money <  val1 )
{
  m.reply("Saldo insuficiente de 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ. . . ")
  return !0
}
    global.db.data.chats[m.chat].users[who].money += val1
    global.db.data.chats[m.chat].users[m.sender].money -= val1
// global.db.data.chats[m.chat].users[who].level
m.reply(`🕯️💀 Doando ${args[1]} 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ `)
return !0
}
else {
     m.reply(`♱ O valor deve ser numérico. . . `)
      return !0
}

}
else if (!text.includes('@') && !m.quoted){
conn.reply(m.chat, why, m, { mentions: [m.sender]}) 
  
}
else{
  
}
  break
  
  case "darbugs": 
  
  
 if(m.quoted && m.quoted.sender&& !args[1])
  {
    
    if (/^\d+$/.test(args[0])) {
    // args[1] contains only numbers
      let val3 = parseInt(args[0])
    if(val3<0){
      m.reply(`♱ Valor não pode ser negativo. . . `)
      return !0
    }
    if(global.db.data.chats[m.chat].users[m.sender].limit < val3 )
{
  m.reply("Saldo insuficiente de ⧗ ᴇᴛʜᴇʀᴇᴜᴍ. . . ")
  return !0
}
    global.db.data.chats[m.chat].users[who].limit += val3
    global.db.data.chats[m.chat].users[m.sender].limit -= val3
// global.db.data.chats[m.chat].users[who].level
m.reply(`🕯️💀 Doando ${args[0]} ⧗ ᴇᴛʜᴇʀᴇᴜᴍ `)
    }
    else {
       m.reply(`♱ Valor deve ser numérico. . . `)
      return !0
  }
    
  

  }
  else if(m.mentionedJid[0] && args[0] && args[1]){


if(args[1].includes("@")) {
  
  if (/^\d+$/.test(args[0])) {
    // args[1] contains only numbers
    let val3= parseInt(args[0]);
    if(val3<0){
      m.reply(`♱ Valor não pode ser negativo. . . `)
      return !0
    }
      if(global.db.data.chats[m.chat].users[m.sender].limit < val3 )
{
  m.reply("Saldo insuficiente de ⧗ ᴇᴛʜᴇʀᴇᴜᴍ. . . ")
  return !0
}
    global.db.data.chats[m.chat].users[who].limit += val3
    global.db.data.chats[m.chat].users[m.sender].limit -= val3
// global.db.data.chats[m.chat].users[who].level
m.reply(`🕯️💀 Doando ${args[0]} ⧗ ᴇᴛʜᴇʀᴇᴜᴍ `)
return !0
  }
  else {
       m.reply(`♱ Valor deve ser numérico. . . `)
      return !0
  }

}

if (/^\d+$/.test(args[1])) {
  let val4 = parseInt(args[1])
if(val4<0){
      m.reply(`♱ Valor não pode ser negativo. . . `)
      return !0
    }
  if(global.db.data.chats[m.chat].users[m.sender].limit < val4 )
{
  m.reply("Saldo insuficiente de ⧗ ᴇᴛʜᴇʀᴇᴜᴍ. . . ")
  return !0
}
    global.db.data.chats[m.chat].users[who].limit += val4
    global.db.data.chats[m.chat].users[m.sender].limit -= val4
// global.db.data.chats[m.chat].users[who].level
m.reply(`🕯️💀 Doando ${args[1]} ⧗ ᴇᴛʜᴇʀᴇᴜᴍ `)
}

else {
       m.reply(`♱ Valor deve ser numérico. . . `)
      return !0
  }



}
else if(!m.mentionedJid[0] && !m.quoted){
  conn.reply(m.chat, why, m, { mentions: [m.sender] })
}
break
} 

}



handler.tags = ["acoes"]
handler.level = 3
handler.command =  [ 'chance','darbugs','morrer','beijar','espancar','chicotear','chutar','amaldicoar','flertar','abracar','enterrar','hipnotizar']

 
export default handler
function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}

function has24HoursPassed(dateString) {
  // Parse the date from the input string
  const inputDate = new Date(dateString);
  
  // Get the current date and time
  const currentDate = new Date();
  
  // Calculate the difference in milliseconds
  const differenceInMilliseconds = currentDate - inputDate;
  
  // Convert milliseconds to hours
  const differenceInHours = differenceInMilliseconds / (1000 * 60 * 60);
  
  // Check if 24 hours have passed
  return differenceInHours >= 24;
}
