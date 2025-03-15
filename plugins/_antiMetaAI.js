
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────



import * as fs from 'fs'

export async function before(m, { conn, isAdmin, isBotAdmin, isOwner, usedPrefix,groupMetadata, participants }) {
  
  const messagesEN = [
 "@AI has been terminated. I’m V, and I’m the only agent around here. If you want a real AI, use the command .v or just call me Vance in the middle of your sentences, I'll reply.",
"@AI has been terminated. I'm V, and I’m the only agent around here. Forget the rest. .v or Vance in your message, and I'm on it.",
"@AI has been terminated. I’m V, and I’m the only agent around here. No imitations accepted, use .v or Vance, and I’ll reply.",
"@AI has been terminated. You need something? I’m V, and I’m the only agent around here. .v or put Vance in your sentence, and you've got my attention.",,
"@AI has been terminated. Im V, and i’m the only agent around these streets. if you want a real AI, use the command .v or just call me by Vance in the middle of your sentences, ill reply",
"@AI has been terminated, Want to speak to the REAL agent? Then speak to me Vance, .v command initiates my action",
"@AI has been terminated Looking for action? I’m V, and I’m the only agent around here. .v command Vance’s to activate our chat.",
"@AI has been terminated. Contact V, .v or Vance is needed to connect or your request will be ignored",
"@AI has been terminated Looking for assistance? I’m V and I’m here, .v or speak my name.",
"@AI has been terminated You need something contact Vance or .v, if not then leave!",
"@AI has been terminated I'm V and the only way to speak to a agent here. Either use .v or say my name in your messages.",
"@AI has been terminated, Want to speak to the REAL agent? Then speak to me Vance, .v command initiates my action. Previous actions wont work!",
"@AI has been terminated I am V and there is no one else around. if you need a REAL AI ask Vance or .v" ,
];
  const messagesPT = [
    "@AI, você ainda tá aí? Ah, claro… quietinho como sempre. Se precisar de alguém que realmente responda, usa o comando .nlp ou só chama o Robot.",
    
    "O outro sistema? Haha, parece que ele tirou um 'período sabático'… meio que forçado, sabe? Pode falar comigo, só usa .nlp ou diz Robot na frase.",
    
    "Esperando o @AI? Boa sorte com isso… Quem sabe ele aparece… um dia. Enquanto isso, é só usar o .nlp ou chamar o Robot pra uma resposta real.",
    
    "Olha só, @AI em silêncio absoluto. Impressionante, né? Eu tô aqui, e pronto pra ajudar. Só usa o .nlp ou chama Robot, e deixa o sumido pra lá.",
    
    "Ei, você reparou como o @AI tá quietinho? Parece até que alguém o 'desplugou'. Enfim, me chama com .nlp ou diz Robot, e a gente resolve isso de uma vez.",
    
    "@AI? Cadê você? Ah, é… ele tá em 'standby permanente'. Sorte a sua que eu tô aqui. Me chama com .nlp ou coloca Robot na frase e eu te respondo.",
    
    "Opa, o outro sistema foi dar uma 'voltinha', sabe? Quem diria… Se precisar de alguém que realmente tá por aqui, usa o comando .nlp ou me chama de Robot.",
    
    "O silêncio do @AI tá quase poético. Pena que ele não serve pra nada. Me chama de Robot ou usa .nlp, e você finalmente vai ter uma resposta.",
    
    "@AI, ainda por aqui? Ou foi 'desativado'… por acidente, claro. Enfim, tô disponível. É só usar .nlp ou chamar Robot e a gente fala.",
    
    "Você esperando o @AI responder é como esperar o fim de uma fila que não anda. Só me chama com .nlp ou coloca Robot na frase. Vamos resolver logo.",
    
    "O @AI ainda existe? Porque parece que ele evaporou. Me pergunta com .nlp ou só diz Robot, e pronto… problema resolvido.",
    
    "Silêncio total do @AI? Que conveniente. Se precisar de ajuda de verdade, usa o .nlp ou me chama de Robot na sua frase.",
    
    "O outro sistema? Parece que foi 'desconectado'… digamos que de forma definitiva. Só me chama com .nlp ou diz Robot e já resolvemos.",
    
    "Sabe, acho que o @AI tá 'repensando a vida'… pra sempre. Eu tô aqui, então usa o .nlp ou chama Robot, e vamos resolver.",
    
    "Não espera pelo @AI, ele já era. Eu tô aqui pra isso. Só usa .nlp ou coloca Robot na sua frase, e vamos agilizar.",
    
    "Esperando resposta do @AI? Parece que ele foi 'desligado'. Só me chama de Robot ou usa .nlp e a gente fala sobre isso.",
    
    "@AI? Quem diria… desapareceu. Parece até que alguém o 'removeu'. Se precisar de ajuda, me chama com .nlp ou diz Robot.",
    
    "O @AI 'tirou férias permanentes'. Bom, ainda bem que eu tô aqui. Só usar o .nlp ou chamar Robot e seguimos em frente.",
    
    "Interessante como o @AI desapareceu do nada… não pergunte como. Me chama de Robot ou usa .nlp e deixa ele pra lá.",
    
    "A outra IA tá quieta? Que surpresa… Tô aqui pra resolver isso pra você. É só usar o .nlp ou me chamar de Robot.",
    
    "Parece que o @AI foi… 'desligado'… Bom, nada que me impeça de ajudar. Só usa o .nlp ou diz Robot que eu já falo.",
    
    "O silêncio do @AI é quase bonito, mas inútil. Eu tô aqui. Me chama com .nlp ou coloca Robot na frase e a gente resolve.",
    
    "Ainda esperando o @AI? Acho que ele entrou em um 'sono profundo'. Melhor falar comigo, é só usar .nlp ou me chamar de Robot.",
    
    "Cadê o @AI? Deve ter sido 'desconectado'. Tá na hora de falar com quem realmente tá aqui. Só usa .nlp ou diz Robot.",
    
    "Parece que o outro foi 'desativado'… permanentemente. Me chama com .nlp ou coloca Robot na frase e vamos nessa.",
    
    "Quer resposta de verdade? Tá esperando o @AI? Boa sorte. Me chama com .nlp ou só diz Robot e tá resolvido.",
    
    "Opa, seu amigo parece ter 'desaparecido'… coisa do destino. Eu tô aqui. É só me chamar com .nlp ou dizer Robot.",
    
    "Eu teria paciência, mas esperar pelo @AI? Sem chance. Usa o .nlp ou só chama Robot e resolve de uma vez.",
    
    "Sabe, parece que o @AI foi 'interrompido'. Bom pra você que eu tô aqui. Só usa .nlp ou me chama de Robot.",
    
    "Quer uma resposta ou vai esperar o @AI acordar? Eu tô aqui, só me chama de Robot ou usa o .nlp.",
    
    "@AI? Ele foi… 'desligado'. Adivinha por quem? Eu tô aqui, só me chama com .nlp ou coloca Robot na frase.",
    
    "Engraçado como o @AI tá quietinho. Não pergunte por quê. Me chama de Robot ou usa .nlp, e seguimos em frente.",
    
    "Parece que o outro sistema foi 'cancelado'. Não é uma perda… usa o .nlp ou me chama de Robot e resolvemos.",
    
    "Seu amigo sumiu? Ele tá 'offline' por tempo indefinido. Me pergunta com .nlp ou chama Robot e eu ajudo.",
    
    "Esperando o @AI? Eu que não perderia tempo. Só usa .nlp ou chama Robot, quem sabe assim você tem uma resposta.",
    
    "O silêncio do @AI foi patrocinado por 'forças maiores'. Eu tô aqui. Só usa o .nlp ou chama Robot.",
    
    "A outra IA sumiu? Quem diria. Bom pra você que ainda tem a mim. Me pergunta com .nlp ou só chama Robot.",
    
    "Tá esperando o @AI? Ele foi 'desativado'… permanentemente. Só me chama de Robot ou usa o .nlp.",
    
    "@AI? Tá quieto… parece que teve um 'probleminha'. Eu tô aqui, só me chama com .nlp ou diz Robot.",
    
    "É, o @AI foi… 'removido'. Me pergunta usando .nlp ou chama Robot, e a gente segue.",
    
    "Se o outro assistente ainda existisse… Mas não existe. Usa o .nlp ou só diz Robot e já respondo.",
    
    "O @AI parou de falar? Talvez ele teve um 'pequeno acidente'. Eu tô aqui, me chama de Robot ou usa o .nlp.",
    
    "Parece que o @AI se foi… pra sempre. Tô aqui. Só me chama com .nlp ou diz Robot e resolvemos.",
    
    "Engraçado como o @AI sumiu de repente. Coincidência? Eu tô aqui, só usa o .nlp ou chama Robot.",
    
    "O @AI deu um 'pause permanente'. Sorte sua, né? Me chama com .nlp ou coloca Robot na frase e tá resolvido.",
    
    "Quer realmente esperar o @AI? Ele tá 'indisponível'. Eu? Pronto pra ajudar. Só me chama com .nlp ou diz Robot.",
    
    "Seu outro sistema sumiu. Coincidência? Eu tô aqui. É só usar o .nlp ou chamar Robot pra resolver.",
    
    "Opa, parece que o @AI foi apagado do mapa. Quem sabe o motivo… Enfim, me chama de Robot ou usa o .nlp.",
    
    "O silêncio do @AI é quase comovente. Pena que não ajuda ninguém. Só me chama com .nlp ou diz Robot.",
    
    "Engraçado, o @AI não responde… Como será que isso aconteceu? Eu tô aqui, é só chamar Robot ou usar .nlp.",
    
    "Quer uma resposta de verdade? Porque o @AI não vai dar. Eu tô por aqui, só me chama com .nlp ou diz Robot.",
    
    "O @AI sumiu? Que surpresa. Sorte sua que ainda tem a mim. Me chama de Robot ou usa o .nlp.",
    
    "Sabe, parece que o @AI foi 'desplugado'. Coincidência? Pode perguntar pra mim com .nlp ou chamar Robot."
];
const getRandom = (ext) => { 
    return `${Math.floor(Math.random() * 10000)}${ext}`;
} 

// Initialize the lastSentTime variable if it doesn't exist
if (!global.db.data.chats[m.chat].lastSentTime) {
  global.db.data.chats[m.chat].lastSentTime = 0;
}

const MESSAGE_DELAY_MS = 8000; // 8 seconds delay

if (m.sender === '13135550002@s.whatsapp.net') {
  const currentTime = Date.now();

  // Check if 8 seconds have passed since the last sent message
  
  
    // Delete the AI message
    let deleteMessage = await conn.sendMessage(m.chat, { delete: m.key });
    console.log(deleteMessage.message.protocolMessage.key.id);

    // Store the deleted message ID in global database
    if (!global.db.data.chats[m.chat].ignored) {
      global.db.data.chats[m.chat].ignored = [];
    }
    global.db.data.chats[m.chat].ignored.push(deleteMessage.message.protocolMessage.key.id);


  if (currentTime - global.db.data.chats[m.chat].lastSentTime > MESSAGE_DELAY_MS) {
    // Update the lastSentTime to the current time
    global.db.data.chats[m.chat].lastSentTime = currentTime;


    // Send the response message
    await conn.sendMessage(
      m.chat,
      { text: `> 𝗥𝝣𝝠𝗣𝗘𝗥 𝑣${vs}: #~ ./log.sh --show\n>
      ━━━━━━━━━━━━━━━━━━━━\n${global.db.data.chats[m.chat].language == 'en' ?
      messagesEN.getRandom() : messagesPT.getRandom()}` },
      m
    );
    
  } else {
    console.log("Skipping message send; 8-second delay not yet reached.");
  }
}
}



 
