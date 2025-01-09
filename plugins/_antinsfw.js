
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


import uploadImage from '../lib/uploadImage.js'
import { join } from 'path'
import sharp from 'sharp'
let handler = m => m
handler.before = async function (m,{isCriadora,isAdmin,groupMetadata ,participants,__dirname , conn}) {
  if(!global.db.data.chats[m.chat].initialBoot) return !1

if (!m.isGroup) return !1



async function classifyImage(imageUrl) {
  // Load the model
  const model = await nsfwjs.load();

  // Load the image from the URL
  const response = await fetch(imageUrl);
  const buffer = await response.buffer();
  const img = new Image();
  img.src = buffer;

  // Classify the image
  const predictions = await model.classify(img);
  return predictions;
}

// Example image URL
const imageUrl = 'YOUR_IMAGE_URL_HERE'; // Replace with your image URL

classifyImage(imageUrl)
  .then(predictions => {
      console.log('Predictions:', predictions);
  })
  .catch(error => {
      console.error('Error:', error);
  });


  
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

if(!global.db.data.chats[m.chat].ignored)
{
  global.db.data.chats[m.chat].ignored =[]
}

let user = global.db.data.chats[m.chat].users[m.sender]

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
if(!global.db.data.chats[m.chat].users[m.sender]){
  global.db.data.chats[m.chat].users[m.sender]={
    exp: 0,
        limit:0,
        role:'⌥ 𝚜𝚌𝚛𝚒𝚙𝚝 𝚔𝚒𝚍𝚍𝚒𝚎',
        money:0,
        level:0,
        adm: admcheck,
        legendary: false,
        banned:false,
        nsfwAdv:0,
        adv:0,
  }
}
async function firstWarning(){
  const warningMessageOne = global.db.data.chats[m.chat].language === 'pt'
    ? [
        `⚠️ Olha só, vou ser claro: nada de pornografia aqui. Não sei onde você acha que tá, mas isso é contra as regras. Você acabou de ganhar um aviso. 1/3. Três e você tá fora.`,
        `Mandar pornografia? Sério? Proibido, garoto. Aqui vai sua primeira advertência. 1/3. Três avisos e já era pra você.`,
        `Sério mesmo? Achou que pornografia passaria despercebida? Aqui não, campeão. Esse é seu primeiro aviso. 1/3.`,
        `Mandando conteúdo +18 aqui? Você entendeu completamente errado o tipo de lugar que isso é. Primeira advertência. 1/3. Três e você some.`,
        `Ei, regras existem por um motivo. Pornografia? Não, obrigado. Esse é seu primeiro strike. 1/3. Três e já era.`,
        `Vamos deixar claro: +18 aqui não passa. Isso é um aviso, seu primeiro. 1/3. Mais três e acabou.`,
        `Nada de conteúdo +18 aqui, parceiro. Primeiro aviso. 1/3. Com três, você sai.`,
        `Sério, pervertido? Achou que esse era o lugar para pornografia? Considera isso sua primeira advertência. 1/3. Três strikes e você some.`,
        `Sem espaço pra pornografia aqui. Esse é seu aviso número um. 1/3. Três e você desaparece.`,
        `Regras básicas: pornografia, proibido. Esse é seu primeiro strike. 1/3. Três strikes e tchau.`
    ]
    : [
        `⚠️ Let me be clear: no porn here. Not sure where you think you are, but that’s against the rules. You just earned yourself a warning. 1/3. Three strikes, and you're out.`,
        `Sending porn? Really? Forbidden, kid. Here’s your first warning. 1/3. Three strikes, and you're done.`,
        `Are you serious? Thought porn would fly under the radar? Not here, champ. That’s your first warning. 1/3.`,
        `Sending +18 content here? You completely misunderstood the kind of place this is. First warning. 1/3. Three, and you're out.`,
        `Hey, rules exist for a reason. Porn? Not happening. That’s your first strike. 1/3. Three, and you're done.`,
        `Let’s set things straight: no +18 content here. This is your warning, your first. 1/3. Three strikes, and you’re gone.`,
        `No +18 content here, pal. First warning. 1/3. With three, you’re out.`,
        `Seriously, pervert? Thought this was the spot for your porn collection? Consider this your first warning. 1/3. Three strikes, and you're gone.`,
        `There’s no room for porn here. This is your first warning. 1/3. Three, and you disappear.`,
        `Basic rule: porn, forbidden. That’s your first strike. 1/3. Three strikes, and goodbye.`
    ];
    return conn.sendMessage(m.chat, {text: `> robot@bytesec:~# uafw -m @${m.sender.split('@')[0]}
> . . . . . . . . . . . . . . . . . . . . . . .
> ‎ 
${warningMessageOne.getRandom()}
> ‎ 
> ╰─────────
`, mentions:
    [m.sender]}, {quoted: m})
}
async function secondWarning(){
  const warningMessageTwo = global.db.data.chats[m.chat].language === 'pt'
    ? [
        `⚠️ Então, você ignorou o primeiro aviso e mandou pornografia de novo. Proibido, parceiro. Esse é seu segundo strike. 2/3. Mais um e você tá fora.`,
        `De novo com a pornografia? Sério? Isso aqui não é lugar pra isso. Considera esse seu segundo aviso. 2/3. Com o próximo, já era.`,
        `Segunda tentativa com conteúdo +18? Parece que você tem problemas para entender as regras. Strike dois. 2/3. Próximo e você some.`,
        `Outra vez mandando pornografia? É, acho que você realmente não sabe onde está. Última chance. 2/3.`,
        `Ei, já falei que pornografia é proibida. Esse é o segundo strike. 2/3. Mais um e você tá fora.`,
        `Olha, te dei um aviso, mas parece que você não entendeu. Pornografia é proibida. Strike dois. 2/3. Com o próximo, já era.`,
        `De novo com conteúdo +18? Você realmente gosta de arriscar. Strike dois. 2/3. Próximo, você tá fora.`,
        `Sério, pervertido? Voltando com a pornografia? Esse é o segundo aviso. 2/3. No terceiro, acabou pra você.`,
        `Sério, isso de novo? Pornografia é proibida. Esse é seu segundo strike. 2/3. Mais um e você some.`,
        `Esse é seu segundo strike por pornografia. Um último aviso: mais um e já era pra você.`
    ]
    : [
        `⚠️ So you ignored the first warning and sent porn again. Forbidden, pal. That’s your second strike. 2/3. One more, and you're out.`,
        `Back with the porn? Really? This isn’t the place for that. Consider this your second warning. 2/3. Next one, you’re done.`,
        `Second attempt with +18 content? Seems like you’re having trouble with the rules. Strike two. 2/3. Next one, and you're gone.`,
        `Again sending porn? Yeah, I guess you really have no idea where you are. Last chance. 2/3.`,
        `Hey, I told you porn is off-limits. This is your second strike. 2/3. One more, and you're out.`,
        `Look, I gave you a warning, but it seems you didn’t get it. Porn is forbidden. Strike two. 2/3. Next one, you’re done.`,
        `Back at it with the +18 content? You really like to push it. Strike two. 2/3. Next one, you're out.`,
        `Seriously, pervert? Back with the porn again? This is your second warning. 2/3. One more, and you're out.`,
        `Seriously, this again? Porn is off-limits. That’s your second strike. 2/3. One more, and you're out.`,
        `This is your second strike for porn. One last warning: next time, and you're done.`
    ];
    return conn.sendMessage(m.chat, {text: `> robot@bytesec:~# uafw -m @${m.sender.split('@')[0]}
> . . . . . . . . . . . . . . . . . . . . . . .
> ‎ 
${warningMessageTwo.getRandom()}
> ‎ 
> ╰─────────
`, mentions:
    [m.sender]}, {quoted: m})
    

}
async function lastWarning(){
  const warningMessageThree = global.db.data.chats[m.chat].language === 'pt'
    ? [
        `⚠️ Strike 3. Sério? Que patético. Mandando pornografia em um grupo... você realmente precisa de ajuda. Banido.`,
        `Uau, terceiro strike. Eu quase fico com pena de você... quase. Isso é um grupo, não seu porão. Banido por pornografia.`,
        `Mandando pornografia de novo? E acha isso normal? Deplorável. Esse é o fim da linha. Banido.`,
        `Três strikes. Pra ser honesto, isso é deprimente. Acha que isso é o que alguém quer ver? Banido.`,
        `Strike 3. Chega a ser embaraçoso que você achou que isso era aceitável. Sem mais chances. Banido.`,
        `Parabéns, você conseguiu o impossível: me fazer sentir pena da sua falta de noção. Strike 3. Banido por conteúdo +18.`,
        `Sério? Três strikes por pornografia? Espero que encontre um hobby melhor. Porque aqui, acabou. Banido.`,
        `Último strike. Você realmente precisa de outra ocupação. Compartilhar isso aqui... deplorável. Banido.`,
        `Strike 3, por insistir em mandar pornografia. Patético, mas acabou pra você. Banido.`,
        `Parabéns, você é o motivo pelo qual temos regras. Três strikes, banido. Procure outro lugar pro seu “conteúdo”.`
    ]
    : [
        `⚠️ Strike 3. Really? Pathetic. Sending porn in a group… you seriously need help. Banned.`,
        `Wow, third strike. I almost feel sorry for you… almost. This is a group, not your basement. Banned for porn.`,
        `Sending porn again? And you think that’s normal? Deplorable. This is the end of the line. Banned.`,
        `Three strikes. Honestly, this is just sad. You thought anyone wanted to see that? Banned.`,
        `Strike 3. It’s actually embarrassing that you thought this was acceptable. No more chances. Banned.`,
        `Congrats, you did the impossible: made me feel sorry for your lack of awareness. Strike 3. Banned for +18 content.`,
        `Seriously? Three strikes for porn? I hope you find a better hobby. Because here, it’s over. Banned.`,
        `Final strike. You really need a new pastime. Sharing that here… deplorable. Banned.`,
        `Strike 3, for repeatedly sending porn. Pathetic, but it’s over for you. Banned.`,
        `Congrats, you’re why we have rules. Three strikes, banned. Go find somewhere else for your “content.”`
    ];


    await conn.sendMessage(m.chat, {text: `> robot@bytesec:~# uafw -m @${m.sender.split('@')[0]}
> . . . . . . . . . . . . . . . . . . . . . . .
> ‎ 
${warningMessageThree.getRandom()}
> ‎ 
> ╰─────────
`, mentions:
    [m.sender]}, {quoted: m})
    
}

   let q =  m; 
    let mime = m?.msg?.mimetype || ''
    if(/sticker/.test(m.mediaType)){
      console.log("👀")
   
    if (global.db.data.chats[m.chat].nsfw){
      
 
        try {
            let media3 = await q.download();
            let pngBuffer = await sharp(media3).png().toBuffer();
          
            console.log('Sticker converted and saved as PNG');
            
            let linkST = await uploadImage(pngBuffer)
             console.log("👀")
             console.log(linkST)
             console.log("👀")
  let checkSt = await fetch(`https://itzpire.com/tools/nsfwcheck?url=${linkST}`)
  let resSt= await checkSt.json()
  console.log(resSt)
  
const nsfwSt = resSt.data.find(e => e.label === 'nsfw');
  
const resultSt = nsfwSt && nsfwSt.score > 0.6;
console.log(`NSFW?: ${resultSt}`)
if(resultSt){
  console.log('nsfw detected')
  if(typeof global.db.data.chats[m.chat].users[m.sender].nsfwAdv
  =='undefined')global.db.data.chats[m.chat].users[m.sender].nsfwAdv =0

 global.db.data.chats[m.chat].users[m.sender].nsfwAdv += 1

let DELETEMESSAGEst = await conn.sendMessage(m.chat, { delete: m.key })
global.db.data.chats[m.chat].ignored.push(DELETEMESSAGEst.message.protocolMessage.key.id)

if(global.db.data.chats[m.chat].users[m.sender].nsfwAdv == 1) {
 console.log("🌙")
  await firstWarning()
}
if(global.db.data.chats[m.chat].users[m.sender].nsfwAdv == 2) {
  await secondWarning()
  
}
if(global.db.data.chats[m.chat].users[m.sender].nsfwAdv == 3) {
  await lastWarning()
  await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
global.db.data.chats[m.chat].users[m.sender].advLink = 0 

return !0
}
  
  
}
     
}
            
         catch (error) {
            console.error('Error converting sticker to PNG:', error);
        }
    }
    
    
}
    else if (/image/g.test(mime)){
         if (!(isAdmin || isOwner) && !global.db.data.chats[m.chat].nsfw){
       let media = await q.download()
let link = await uploadImage(media)
  console.log("🌙")
  let check = await fetch(`https://itzpire.com/tools/nsfwcheck?url=${link}`)
  let res= await check.json()
  console.log(res)
  
const nsfw = res.data.find(e => e.label === 'nsfw');
  
const result = nsfw && nsfw.score > 0.6;
console.log(`NSFW?: ${result}`)


if(result){
  
 global.db.data.chats[m.chat].users[m.sender].nsfwAdv += 1

let DELETEMESSAGEst = await conn.sendMessage(m.chat, { delete: m.key })
global.db.data.chats[m.chat].ignored.push(DELETEMESSAGEst.message.protocolMessage.key.id)
if(global.db.data.chats[m.chat].users[m.sender].nsfwAdv == 1) {
  await firstWarning()
}
if(global.db.data.chats[m.chat].users[m.sender].nsfwAdv == 2) {
  await secondWarning()
  
}
if(global.db.data.chats[m.chat].users[m.sender].nsfwAdv == 3) {
  await lastWarning()
  await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
global.db.data.chats[m.chat].users[m.sender].advLink = 0 

return !0
  
}
  
  
}

           
           
         }
   




}


}


export default handler
const getRandom = (ext) => { 
    return `${Math.floor(Math.random() * 10000)}${ext}`;
}