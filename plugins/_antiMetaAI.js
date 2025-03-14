
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────



import * as fs from 'fs'

export async function before(m, { conn, isAdmin, isBotAdmin, isOwner, usedPrefix,groupMetadata, participants }) {
  
  const messagesEN = [
    "@AI, are you still there? Oh, of course… silent as always. If you need someone who actually responds, use the .nlp command or just call Robot.",
    
    "The other AI? Haha, it looks like it took a 'sabbatical'… kind of forced, you know? Just talk to me, use .nlp or say Robot in the sentence.",
    
    "Waiting for @AI? Good luck with that… Maybe it'll show up… someday. Meanwhile, just use .nlp or call Robot for a real answer.",
    
    "Look at that, @AI in absolute silence. Impressive, huh? I'm here and ready to help. Just use .nlp or call Robot, and forget about the silent one.",
    
    "Hey, did you notice how @AI is quiet? It's almost like someone 'unplugged' it. Anyway, just call me with .nlp or say Robot, and we can solve it right away.",
    
    "@AI? Where are you? Oh, right… it’s in 'permanent standby.' Lucky for you, I'm here. Call me with .nlp or put Robot in the sentence, and I'll respond.",
    
    "Oops, the other AI went for a 'stroll,' you know? Who would've thought… If you need someone actually here, use the .nlp command or call me Robot.",
    
    "@AI's silence is almost poetic. Too bad it’s useless. Call me Robot or use .nlp, and you'll finally get a response.",
    
    "@AI, still here? Or was it 'deactivated'… by accident, of course. Anyway, I'm available. Just use .nlp or call Robot, and we'll talk.",
    
    "Waiting for @AI to respond is like waiting in a line that doesn’t move. Just call me with .nlp or say Robot in the sentence. Let’s get it sorted.",
    
    "Does @AI still exist? Because it seems like it evaporated. Ask me with .nlp or just say Robot, and… problem solved.",
    
    "@AI's silence? Convenient. If you need real help, use .nlp or call me Robot in your sentence.",
    
    "The other AI? It seems it’s been 'disconnected'… let’s say permanently. Just call me with .nlp or say Robot and we'll sort it.",
    
    "You know, I think @AI is 'reconsidering its life'… forever. I'm here, so use .nlp or call Robot, and let's sort it out.",
    
    "Don't wait for @AI; it's history. I'm here for this. Just use .nlp or put Robot in your sentence, and let’s speed it up.",
    
    "Waiting for a response from @AI? Seems it was 'turned off.' Just call me Robot or use .nlp and we'll talk about it.",
    
    "@AI? Where did you go? Oh, looks like it 'disappeared.' Lucky for you, I'm still here. Just call me with .nlp or say Robot, and we’ll get going.",
    
    "@AI took a 'permanent vacation.' Well, good thing I'm here. Just use .nlp or call Robot, and we move forward.",
    
    "Interesting how @AI disappeared out of nowhere… don’t ask how. Call me Robot or use .nlp and let it go.",
    
    "The other AI is quiet? What a surprise… I’m here to solve it for you. Just use .nlp or call me Robot.",
    
    "It seems @AI was… 'turned off'… Well, nothing stopping me from helping. Just use .nlp or say Robot, and I’m already talking.",
    
    "@AI’s silence is almost beautiful, but useless. I’m here. Call me with .nlp or put Robot in the sentence, and we’ll sort it out.",
    
    "Still waiting for @AI? I think it went into a 'deep sleep.' Better talk to me; just use .nlp or call me Robot.",
    
    "Where’s @AI? It must’ve been 'disconnected.' Time to talk to someone who’s actually here. Just use .nlp or say Robot.",
    
    "It looks like the other AI was 'deactivated'… permanently. Call me with .nlp or put Robot in the sentence, and let’s go.",
    
    "Want a real answer? Waiting for @AI? Good luck. Call me with .nlp or just say Robot, and it’s sorted.",
    
    "Oops, your friend seems to have 'disappeared'… fate, I guess. I’m here. Just call me with .nlp or say Robot.",
    
    "I’d be patient, but waiting for @AI? Not a chance. Use .nlp or just call Robot and let’s get it sorted.",
    
    "You know, it seems @AI was 'interrupted.' Good thing I’m here. Just use .nlp or call me Robot.",
    
    "Want an answer or are you going to wait for @AI to wake up? I’m here; just call me Robot or use .nlp.",
    
    "@AI? It was… 'turned off.' Guess by who? I’m here, just call me with .nlp or put Robot in the sentence.",
    
    "Funny how @AI is so quiet. Don’t ask why. Call me Robot or use .nlp, and we move forward.",
    
    "Looks like the other AI was 'canceled.' No loss… use .nlp or call me Robot and let’s solve it.",
    
    "Did your friend vanish? It's 'offline' indefinitely. Ask me with .nlp or call Robot and I’ll help.",
    
    "Waiting for @AI? I wouldn’t waste time. Just use .nlp or call Robot; maybe then you’ll get a response.",
    
    "@AI’s silence is sponsored by 'higher powers.' I’m here. Just use .nlp or call Robot.",
    
    "Did the other AI vanish? Who would’ve thought. Lucky for you, I’m here. Ask me with .nlp or just call Robot.",
    
    "Are you waiting for @AI? It was 'deactivated'… permanently. Just call me Robot or use .nlp.",
    
    "@AI? It’s quiet… seems there was a 'little problem.' I’m here, just call me with .nlp or say Robot.",
    
    "Seems @AI was 'removed.' Ask me using .nlp or call Robot, and we’ll move on.",
    
    "If the other AI still existed… But it doesn’t. Use .nlp or just say Robot, and I’ll answer.",
    
    "@AI stopped talking? Maybe it had a 'little accident.' I’m here, call me Robot or use .nlp.",
    
    "Looks like @AI is gone… forever. I’m here. Just call me with .nlp or say Robot and we’ll solve it.",
    
    "Funny how @AI suddenly disappeared. Coincidence? I’m here, just use .nlp or call Robot.",
    
    "@AI gave a 'permanent pause.' Lucky for you, huh? Call me with .nlp or put Robot in the sentence, and it’s sorted.",
    
    "Really want to wait for @AI? It's 'unavailable.' Me? Ready to help. Just call me with .nlp or say Robot.",
    
    "Your other AI disappeared. Coincidence? I’m here. Just use .nlp or call Robot to solve it.",
    
    "Oops, looks like @AI was wiped off the map. Who knows why… Anyway, call me Robot or use .nlp.",
    
    "@AI's silence is almost moving. Too bad it doesn’t help anyone. Just call me with .nlp or say Robot.",
    
    "Funny, @AI isn’t responding… How did that happen? I’m here, just call Robot or use .nlp.",
    
    "Want a real answer? Because @AI isn’t going to give one. I’m here; just call me with .nlp or say Robot.",
    
    "Did @AI disappear? What a surprise. Lucky for you that you still have me. Call me Robot or use .nlp.",
    
    "You know, it seems @AI was 'unplugged.' Coincidence? You can ask me with .nlp or call Robot."
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



 
