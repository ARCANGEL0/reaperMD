

 const userSpamData = {}
let handler = m => m
handler.before = async function (m, {conn, isAdmin, isBotAdmin,participants, isROwner, isPrems}) {
const chat = global.db.data.chats[m.chat]
if (!m.isGroup) return
if (chat.modoadmin) return  
if (!chat.antiSpam) return
// if (global.isOwner || isROwner || isAdmin) return
  
let user = global.db.data.chats[m.chat].users[m.sender]
const sender = m.sender
const currentTime = new Date().getTime()
const timeWindow = 5000 // tiempo límite 
const messageLimit = 6

let time, time2, time3, mensaje, motive
time = 30000 // 30 seg
time2 = 60000 // 1 min
time3 = 120000 // 2 min

if(!user.lastMessageTime) user.lastMessageTime = currentTime


const timeDifference = currentTime - user.lastMessageTime


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
        messageCount: 0,
        adv:0,
        lastMessageTime:'',
        silenced: false
  }
}




if (user.messageCount>8 && timeDifference <= timeWindow) {
  
  
  
user.messageCount += 1

  if (!user.silenced && user.messageCount >= messageLimit) {
    
  global.db.data.chats[m.chat].users[m.sender].silenced = true
    console.log('SPAM DETECTADO!!!!')
const mention = `@${sender.split("@")[0]}`

if(!global.db.data.chats[m.chat].users[m.sender].adv){ 
     global.db.data.chats[m.chat].users[m.sender].adv = 0
   }
if(global.db.data.chats[m.chat].users[m.sender].adv>=3){
  
  
await conn.reply(m.chat,`${lenguajeGB['smsAdveu7']()}\n*@${m.sender.split(`@`)[0]}* ${lenguajeGB['smsAdveu8']()}`, m, { mentions: [m.sender] })

await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove') //@${who.split`@`[0]}
global.db.data.chats[m.chat].users[m.sender].adv =0
  return !0
  
}

   
console.log('spam flow starting, running procedures')
const spamWarningMsg = global.db.data.chats[m.chat].language === 'pt'
    ? [
        `> BYΓΞSΞC:~# ./silence.py --mute 1 -p
> . . . . . . . . . . . . . . . . . . . . . . . .

[+] Spam detectado:
> >>> ${mention}, aqui não toleramos spam, garoto.
> Você tá flodando o chat demais. Vou te deixar em silêncio por 30 minutos pra repensar suas atitudes.
|
> BYΓΞSΞC:~# _
> # Vigilância ativa - ΒYƬΣSΞC-MĐ
`,

        `> BYΓΞSΞC:~# ./silence.py --mute 1 -p
. . . . . . . . . . . . . . . . . . . . . . . .

[+] Spam detectado:
> >>> ${mention}, parece que você se perdeu no conceito de conversa.
> Silenciado por 30 minutos pra ver se você entende que spam não é bem-vindo.
|
> BYΓΞSΞC:~# _
> # Vigilância ativa - ΒYƬΣSΞC-MĐ
`,

        `> BYΓΞSΞC:~# ./silence.py --mute 1 -p
. . . . . . . . . . . . . . . . . . . . . . . .

[+] Spam detectado:
> >>> ${mention}, você tá espalhando ruído desnecessário.
> 30 minutos de silêncio pra ver se você entende que isso aqui não é bagunça.
|
> BYΓΞSΞC:~# _
> # Vigilância ativa - ΒYƬΣSΞC-MĐ
`,

        `> BYΓΞSΞC:~# ./silence.py --mute 1 -p
. . . . . . . . . . . . . . . . . . . . . . . .

[+] Spam detectado:
> >>> ${mention}, flodando o chat com spam? Péssima ideia.
> Vou te dar 30 minutos de silêncio. Hora de repensar as regras por aqui.
|
> BYΓΞSΞC:~# _
> # Vigilância ativa - ΒYƬΣSΞC-MĐ
`,

        `> BYΓΞSΞC:~# ./silence.py --mute 1 -p
. . . . . . . . . . . . . . . . . . . . . . . .

[+] Spam detectado:
> >>> ${mention}, aqui não toleramos spam.
> 30 minutos no mudo. Pode usar esse tempo pra refletir.
|
> BYΓΞSΞC:~# _
> # Vigilância ativa - ΒYƬΣSΞC-MĐ
`,
        `> BYΓΞSΞC:~# ./silence.py --mute 1 -p
. . . . . . . . . . . . . . . . . . . . . . . .

[+] Executand daemon:
> >>> ${mention}, insistir em spam? Só te leva ao silêncio.
> Aproveite os 30 minutos pra pensar se vale a pena continuar assim.
|
> BYΓΞSΞC:~# _
> # Vigilância ativa - ΒYƬΣSΞC-MĐ
`,

        `> BYΓΞSΞC:~# ./silence.py --mute 1 -p
. . . . . . . . . . . . . . . . . . . . . . . .

[+] Spam detectado:
> >>> ${mention}, chat é pra conversar, não pra flodar.
> 30 minutos de silêncio. Talvez assim você entenda o básico.
|
> BYΓΞSΞC:~# _
> # Vigilância ativa - ΒYƬΣSΞC-MĐ
`,
        `> BYΓΞSΞC:~# ./silence.py --mute 1 -p
. . . . . . . . . . . . . . . . . . . . . . . .

[+] Spam detectado:
> >>> ${mention}, spam tem preço, e é o silêncio.
> Silenciado por 30 minutos. Lembre-se: aqui é um chat para conversar, e não flodar com suas coisas por aqui
|
> BYΓΞSΞC:~# _
> # Vigilância ativa - ΒYƬΣSΞC-MĐ
`,

        `> BYΓΞSΞC:~# ./silence.py --mute 1 -p
. . . . . . . . . . . . . . . . . . . . . . . .

[+] Spam detectado:
> >>> ${mention}, chat não é lugar pra poluição de mensagens.
> 30 minutos de silêncio. Melhor assim.
|
> BYΓΞSΞC:~# _
> # Vigilância ativa - ΒYƬΣSΞC-MĐ
`,

        `> BYΓΞSΞC:~# ./silence.py --mute 1 -p
. . . . . . . . . . . . . . . . . . . . . . . .

[+] Spam detectado:
> >>> ${mention}, flodando por aqui? Sem chance.
> 30 minutos no mudo. Hora de reavaliar o conceito de respeito.
|
> BYΓΞSΞC:~# _
> # Vigilância ativa - ΒYƬΣSΞC-MĐ
`
    ]
    : [
        `> BYΓΞSΞC:~# ./silence.py --mute 1 -p
. . . . . . . . . . . . . . . . . . . . . . . .

[+] Spam detected:
> >>> ${mention}, we don’t tolerate spam here, kid.
> You’re flooding the chat too much. 30 minutes of silence to rethink your choices.
|
> BYΓΞSΞC:~# _
> # Monitored by - ΒYƬΣSΞC-MĐ`,

        `> BYΓΞSΞC:~# ./silence.py --mute 1 -p
. . . . . . . . . . . . . . . . . . . . . . . .

[+] Spam detected:
> >>> ${mention}, seems you forgot what a conversation is.
> Silenced for 30 minutes to remind you that spam isn’t welcome here.
|
> BYΓΞSΞC:~# _
> # Monitored by - ΒYƬΣSΞC-MĐ`,

        `> BYΓΞSΞC:~# ./silence.py --mute 1 -p
. . . . . . . . . . . . . . . . . . . . . . . .

[+] Spam detected:
> >>> ${mention}, spreading useless noise?
> 30 minutes of silence to understand this isn’t a free-for-all.
|
> BYΓΞSΞC:~# _
> # Monitored by - ΒYƬΣSΞC-MĐ`,
        `> BYΓΞSΞC:~# ./silence.py --mute 1 -p
. . . . . . . . . . . . . . . . . . . . . . . .

[+] Spam detected:
> >>> ${mention}, flooding the chat with spam? Bad move.
> 30 minutes of silence. Time to rethink the rules around here.
|
> BYΓΞSΞC:~# _
> # Monitored by - ΒYƬΣSΞC-MĐ`,

        `> BYΓΞSΞC:~# ./silence.py --mute 1 -p
. . . . . . . . . . . . . . . . . . . . . . . .

[+] Spam detected:
> >>> ${mention}, spam isn’t allowed here.
> 30 minutes in silence. Use the time to reflect on that.
|
> BYΓΞSΞC:~# _
> # Monitored by - ΒYƬΣSΞC-MĐ`,

        `> BYΓΞSΞC:~# ./silence.py --mute 1 -p
. . . . . . . . . . . . . . . . . . . . . . . .

[+] Spam detected:
> >>> ${mention}, persisting in spam? Only leads to silence.
> Enjoy the 30 minutes to consider if it’s worth it.
|
> BYΓΞSΞC:~# _
> # Monitored by - ΒYƬΣSΞC-MĐ`,

        `> BYΓΞSΞC:~# ./silence.py --mute 1 -p
. . . . . . . . . . . . . . . . . . . . . . . .

[+] Spam detected:
> >>> ${mention}, chat’s for conversation, not for flooding.
> 30 minutes in silence. Maybe then you’ll understand the basics.
|
> BYΓΞSΞC:~# _
> # Monitored by - ΒYƬΣSΞC-MĐ`,


        `> BYΓΞSΞC:~# ./silence.py --mute 1 -p
. . . . . . . . . . . . . . . . . . . . . . . .

[+] Spam detected:
> >>> ${mention}, spam has a price, and it’s silence.
> 30 minutes out of the conversation. Remember: this isn’t your bulletin board.
|
> BYΓΞSΞC:~# _
> # Monitored by - ΒYƬΣSΞC-MĐ`,

        `> BYΓΞSΞC:~# ./silence.py --mute 1 -p
. . . . . . . . . . . . . . . . . . . . . . . .

[+] Spam detected:
> >>> ${mention}, chat isn’t a place for message pollution.
> 30 minutes in silence. Better that way.
|
> BYΓΞSΞC:~# _
> # Monitored by - ΒYƬΣSΞC-MĐ`,


        `> BYΓΞSΞC:~# ./silence.py --mute 1 -p
. . . . . . . . . . . . . . . . . . . . . . . .

[+] Spam detected:
> >>> ${mention}, flooding here? Not happening.
> 30 minutes in silence. Time to reevaluate the concept of respect.
|
> BYΓΞSΞC:~# _
> # Monitored by - ΒYƬΣSΞC-MĐ`
    ];
console.log(spamWarningMsg.getRandom())
await conn.reply(m.chat, spamWarningMsg.getRandom() , m, { mentions: [m.sender] })  

 setTimeout( async () => {
   global.db.data.chats[m.chat].users[m.sender].adv += 1
   
  global.db.data.chats[m.chat].users[m.sender].silenced = false;
   const desmutemsg = global.db.data.chats[m.chat].language === 'pt'
    ? [
        `> BYΓΞSΞC:~# ./silence.py --mute 0 -p
. . . . . . . . . . . . . . . . . . . . . . . .

[+] Executando daemon:
> >>> Usuário: ${mention}
> Você foi “liberado”. Aproveite, mas cuidado.
|
| Avisos: ${global.db.data.chats[m.chat].users[m.sender].adv}/3
|
> ${global.db.data.chats[m.chat].users[m.sender].adv==2 ? "_Última advertência, garoto. Mais um passo em falso, e você tá fora._ ⨻" : ""}
|
> BYΓΞSΞC:~# _
> # Monitorado por - ΒYƬΣSΞC-MĐ`,

        `> BYΓΞSΞC:~# ./silence.py --mute 0 -p
. . . . . . . . . . . . . . . . . . . . . . . .

[+] Executando daemon:
> >>> Usuário: ${mention}.
> Você foi desmutado, garoto… mas não se engane, ainda estamos de olho.
|
| Avisos: ${global.db.data.chats[m.chat].users[m.sender].adv}/3
|
> ${global.db.data.chats[m.chat].users[m.sender].adv==2 ? "_Última chance. Mais uma dessas e você desaparece._" : ""}
|
> BYΓΞSΞC:~# _
> # Monitorado por - ΒYƬΣSΞC-MĐ`,

        `> BYΓΞSΞC:~# ./silence.py --mute 0 -p
. . . . . . . . . . . . . . . . . . . . . . . .

[+] Executando daemon:
> >>> Usuário: ${mention}
> O silêncio acabou… por enquanto. Use essa chance com sabedoria.
|
| Avisos: ${global.db.data.chats[m.chat].users[m.sender].adv}/3
|
> ${global.db.data.chats[m.chat].users[m.sender].adv==2 ? "_Último aviso: mais um deslize e é o fim da linha._" : ""}
|
> BYΓΞSΞC:~# _
> # Monitorado por - ΒYƬΣSΞC-MĐ`
    ]
    : [
        `> BYΓΞSΞC:~# ./silence.py --mute 0 -p
. . . . . . . . . . . . . . . . . . . . . . . .

[+] Running daemon:
> >>> User: ${mention}
> You've been “freed.” Enjoy it… but tread carefully.
|
| Warnings: ${global.db.data.chats[m.chat].users[m.sender].adv}/3
|
> ${global.db.data.chats[m.chat].users[m.sender].adv==2 ? "_Last warning. One more strike and you're out._" : ""}
|
> BYΓΞSΞC:~# _
> # Monitored by - ΒYƬΣSΞC-MĐ`,

        `> BYΓΞSΞC:~# ./silence.py --mute 0 -p
. . . . . . . . . . . . . . . . . . . . . . . .

[+] Running daemon:
> >>> User: ${mention} .
> You got unmuted, kid… but don’t get too comfy, we're still watching.
|
| Warnings: ${global.db.data.chats[m.chat].users[m.sender].adv}/3
|
> ${global.db.data.chats[m.chat].users[m.sender].adv==2 ? "_Final chance. One more, and you're out._" : ""}
|
> BYΓΞSΞC:~# _
> # Monitored by - ΒYƬΣSΞC-MĐ`,

        `> BYΓΞSΞC:~# ./silence.py --mute 0 -p
. . . . . . . . . . . . . . . . . . . . . . . .

[+] Running daemon:
> >>> User: ${mention}
> Just unmuted you, kiddo. Try paying attetions to the rule for now.
|
| Warnings: ${global.db.data.chats[m.chat].users[m.sender].adv}/3
|
> ${global.db.data.chats[m.chat].users[m.sender].adv==2 ? "_Last warning: one more slip, and it’s the end of the line._" : ""}
|
> BYΓΞSΞC:~# _
> # Monitored by - ΒYƬΣSΞC-MĐ`
    ];
  
  
  await conn.reply(m.chat, desmutemsg.getRandom(), m, { mentions: [m.sender] })  
},1800000);





// reset 
//userData.messageCount = 1
                
  
  
}

  
} 
// dim



else {
if (timeDifference >= 2000) {
  console.log('comecandklo spam')
user.messageCount = 1
console.log('spammmmmnn')
console.log(timeDifference <= timeWindow)
}
  else {
    user.messageCount += 1
  }
}
user.lastMessageTime = currentTime

  
  
}

export default handler


const getRandom = (ext) => { 
    return `${Math.floor(Math.random() * 10000)}${ext}`;
}