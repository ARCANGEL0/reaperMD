
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

const toxicRegex = /bolsomito|vadia|seu burro|sua burra|é burro|é burra|eh burro|eh burra|qenga|Quenga|Puta|imbecil|sua puta|vagabunda|lugar de mulher|esquerdalha|feminazi|seu merda|merdinha|é rodada|eh rodada|pedaço de merda|seu bosta|seu lixo|neguinho|preto de merda|crioulo vagabundo|selvagem africano|negro serviçal|sai da senzala|mulher negra promíscua|crioulo fedido|escravo inútil|negro burro|negro sujo|escória negra|crioulo malandro|negro ordinário|negro safado|crioulo traidor|negro delinquente|crioulo pilantra|negro favelado|crioulo sem vergonha|negro imprestável|crioulo sem caráter|negro maloqueiro|crioulo nojento|negro vagabundo|crioulo desgraçado|negro marginal|crioulo asqueroso|negro desgraçado|vadia|sua burra|é burra|eh burra|sua puta|lugar de mulher|esquerdalha|feminazi|seu merda|merdinha|é rodada|eh rodada|seu bosta|seu lixo|mulher no volante|mulher só serve para cozinha|frágil como uma mulher|mulher objeto|seja homem de verdade|bichinha delicada|sai do armário|sapatona de merda|mulherzinha fraca|mulher não sabe nada|mulher no volante|mulher só serve para cozinha|frágil como uma mulher|ela está naqueles dias|mulher é tudo igual|elas são emocionais demais|mulheres não deveriam trabalhar|ela estava pedindo por isso|mulheres são ruins em matemática|mulheres são histéricas|mulheres só querem atenção|mulheres falam demais|mulheres são volúveis|mulheres são complicadas|mulheres são fracas|mulheres são manipuladoras|mulheres são sensíveis demais|mulheres são fofoqueiras|mulheres são inferiores|mulheres não são confiáveis/i

export async function before(m, { conn, isAdmin, isBotAdmin, isOwner }) {
  
  function getDataAtual() {
    const hoje = new Date();
    const dia = String(hoje.getDate()).padStart(2, '0');
    const mes = String(hoje.getMonth() + 1).padStart(2, '0'); // Mês começa do zero, então é necessário adicionar 1
    const ano = hoje.getFullYear();

    return `${dia}/${mes}/${ano}`;
}
function generateRandomCode() {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    let code = '';

    // Generate 4 random numbers
    for (let i = 0; i < 4; i++) {
        code += numbers.charAt(Math.floor(Math.random() * numbers.length));
    }

    // Generate 1 random letter
    code += letters.charAt(Math.floor(Math.random() * letters.length));

    return code;
}


let tempBanimento = async (motivo) => {
  global.db.data.chats[m.chat].users[m.sender].tempBan = true
  
  console.log('1🌙')
    const groupAdms = participants.filter(p => p.admin)

 let adms =[]
 const listaAdmin = groupAdms.map((v, i) =>
 adms.push(v.id))
 
  console.log('2🌙')
 console.log(adms)
// Example usage:
adms = adms.filter(adm => adm !== conn.user.jid);
const adminAleatorio = adms.getRandom()
let destino = global.db.data.chats[m.chat].reportchat || adminAleatorio

  console.log('3🌙')

 let teks;

 if (global.db.data.chats[m.chat].language === 'pt') {
         teks = `
     > robot@bytesec: #/users/ cat ${generateRandomCode()}.log
     > ---------------------------------------

     [!] ALERTA: Usuário Banido
     ────────────────────────────────
     > Protocolo: ${generateRandomCode()}
     > Data: ${getDataAtual()}

     >>> DETALHES DO USUÁRIO
     ────────────────────────────────
     > [+] Nome: ${m.name}
     > [+] Contato: @${m.sender.split`@`[0]}
     > [+] Grupo: ${groupMetadata.subject}

     >>> MOTIVO DO EXÍLIO
     ────────────────────────────────
     > ${motivo}

     > # Operação realizada pela ByteSec. 
     > # Monitoramento constante.
     ────────────────────────────────
         `;
} else if (global.db.data.chats[m.chat].language === 'en') {
   teks = `
> robot@bytesec: #/users/ cat ${generateRandomCode()}.log
> ---------------------------------------

[!] ALERT: User Banned
────────────────────────────────
> Protocol: ${generateRandomCode()}
> Date: ${getDataAtual()}

>>> USER DETAILS
────────────────────────────────
> [+] Name: ${m.name}
> [+] Contact: @${m.sender.split`@`[0]}
> [+] Group: ${groupMetadata.subject}

>>> REASON FOR EXILE
────────────────────────────────
> ${motivo}
> ‎ 
> # Operation conducted by ByteSec.
> # Under continuous surveillance.
────────────────────────────────
   `;
}
  
  m.reply(teks,destino)


//No longer available
let DELETEMESSAGE = await conn.sendMessage(m.chat, { delete: m.key })
   
  
console.log(DELETEMESSAGE.message.protocolMessage.key.id)

if(!global.db.data.chats[m.chat].ignored)
{
 global.db.data.chats[m.chat].ignored =[]
}
global.db.data.chats[m.chat].ignored.push(DELETEMESSAGE.message.protocolMessage.key.id)


await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')

return !0
}


if (m.isBaileys && m.fromMe)
return !0
if (!m.isGroup)
return !1
if (global.db.data.chats[m.chat].isBanned)
return !1
  let user = global.db.data.users[m.sender]
  if (!user.warn) {
    user.warn=0
  }
  let chat = global.db.data.chats[m.chat]
  let bot = global.db.data.settings[this.user.jid] || {}
  let img = gataImg.getRandom()	
 const isToxic = toxicRegex.exec(m.text)
    
if (isToxic && chat.antitoxic && !isOwner && !isAdmin) {
global.db.data.chats[m.chat].users[m.sender].adv  += 1
if (!(global.db.data.chats[m.chat].users[m.sender].adv >= 3)) await m.reply(`━━━━━━━⬣⚠️⬣━━━━━━
@${m.sender.split`@`[0]}* җ

${langTOGGLE['smsToxic1']()}
${langTOGGLE['smsToxic2']()} 

   ⚠ *${global.db.data.chats[m.chat].users[m.sender].adv}/4*
   
${wm}`, false, { mentions: [m.sender] })}
/*await conn.sendButton(m.chat,`${user.warn == 1 ? `*@${m.sender.split`@`[0]}*` : `*@${m.sender.split`@`[0]}*`} *${langTOGGLE['smsToxic1']()} (${isToxic}) ${langTOGGLE['smsToxic2']()}*`, `${langTOGGLE['smsToxic3']()} *${user.warn}/4*\n\n${wm}`, img, [
[langTOGGLE.smsToxic4(), 'ok'],
[langTOGGLE.smsToxic5(), '.off antitoxic'],
[langTOGGLE.smsConMenu(), '/menu']], false, { mentions: [m.sender] })}*/

if (global.db.data.chats[m.chat].users[m.sender].adv >= 3) {
global.db.data.chats[m.chat].users[m.sender].adv  = 0
await m.reply(`*${langTOGGLE['smsToxic6']()}*\n*@${m.sender.split`@`[0]} ${langTOGGLE['smsToxic7']()}*`, false, { mentions: [m.sender] })


const banExplanationsEN = [
  "Just banned him for dropping some offensive nonsense in the group. Not on my watch.",
  "Gave him three strikes for disrespecting our laws on discrimination. Guess he didn’t get the memo.",
  "That’s right, kiddo. Banned him for being a total jerk to everyone here.",
  "Banned for spreading toxicity like it’s his job. Not happening in this space.",
  "Told him the third strike would be his last. He clearly didn’t take me seriously."
];

// Phrases in Portuguese
const banExplanationsPT = [
  "Acabei de banir ele por jogar algumas ofensas no grupo. Não sob minha vigilância.",
  "Dei a ele três chances por desrespeitar nossas regras sobre discriminação. Parece que ele não pegou o recado.",
  "Isso mesmo, meu chapa. Banido por ser um completo idiota com todos aqui.",
  "Banido por espalhar toxicidade como se fosse seu trabalho. Não vai rolar neste espaço.",
  "Avisei que a terceira chance seria a última. Ele claramente não levou a sério."
];

let explanations = global.db.data.chats[m.chat].language === 'pt' ? banExplanationsPT : banExplanationsEN;

await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
  await tempBanimento(explanations.getRandom())
//await this.updateBlockStatus(m.sender, 'block')
}
return !1
}
