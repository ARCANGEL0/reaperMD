
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────


const handler = async (m, {conn, participants, groupMetadata,isAdmin, isOwner, text, args, usedPrefix, command, reply}) => {
  const currentTime = new Date().getTime() 
  let delayBetweenQuestions = 60000
  if(!(isAdmin || isOwner) && global.db.data.chats[m.chat].jogos===false){
   m.react("❌")
   
   return !0;
 } 

 function getCurrentDate(format) {
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  const date = new Date();
  return format === 'pt' ? date.toLocaleDateString('pt-BR', options) : date.toLocaleDateString('en-US', options);
}
   m.react('💽')
   
    const date = getCurrentDate(global.db.data.chats[m.chat].language);


  if(!global.xppergunta){
    global.xppergunta = {}
  }
  
  if(global.xppergunta[m.chat]){
    global.xppergunta[m.chat]=false
  }
  if(!global.quiz ) global.quiz  = {}
  if(!global.quizxp ) global.quizxp  = {}
  if(!global.db.data.chats[m.chat].quiz) global.db.data.chats[m.chat].quiz  = {}
  if(!global.quizxp[m.chat] ) global.quizxp[m.chat]  = {}
  
  
global.db.data.chats[m.chat].quiz = global.db.data.chats[m.chat].quiz ? global.db.data.chats[m.chat].quiz : {}
global.quizxp[m.chat] = global.quizxp[m.chat] ? global.quizxp[m.chat] : {}

global.xppergunta[m.chat]= global.xppergunta[m.chat] ? global.xppergunta[m.chat] : false
if(!global.db.data.chats[m.chat].quiz){
  global.db.data.chats[m.chat].quiz=  {
    perguntaAndamento: false,
    pergunta: {}
  }
}
if (global.db.data.chats[m.chat].quiz.perguntaAndamento === undefined) {
    global.db.data.chats[m.chat].quiz.perguntaAndamento = false;
}
if (global.db.data.chats[m.chat].quiz.loading === undefined) {
    global.db.data.chats[m.chat].quiz.loading = false;
}
if (global.db.data.chats[m.chat].quiz.modo === undefined || !global.db.data.chats[m.chat].quiz.modo) {
    global.db.data.chats[m.chat].quiz.modo = true;
}


function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]}



  const categories = global.db.data.chats[m.chat].language === 'en' ? [
    'General',
    'History',
    'Mythology',
    'Art',
    'Technology',
    'Computer Science',
    'Programming',
    'Physics',
    'Chemistry',
    'Biology',
    'Mathematics',
    'Music',
    'Philosophy',
    'Literature',
    'Medicine',
    'Economics',
    'Politics',
    'Astronomy',
    'Psychology',
    'Sociology',
    'Archaeology',
    'Criminology',
    'Photography',
    'Culture',
    'Law'
] : [
    'Geral',
    'História',
    'Mitologia',
    'Arte',
    'Tecnologia',
    'Informática',
    'Programação',
    'Física',
    'Química',
    'Biologia',
    'Matemática',
    'Música',
    'Filosofia',
    'Literatura',
    'Medicina',
    'Economia',
    'Política',
    'Astronomia',
    'Psicologia',
    'Sociologia',
    'Arqueologia',
    'Criminologia',
    'Fotografia',
    'Cultura',
    'Direito'
];
  

const categoryList = categories.map((category, index) => `> ${usedPrefix + command} ${index + 1} - ${category}`).join('\n');


const quizHelp = global.idioma === 'en' ?

  `┌──[ 𝗥𝝣𝝠𝗣𝗘𝗥 𝑣${vs} ]─[~]─[${date}] 
└─ $ node quiz.mjs --help
> . . . . . . . . . . . . . . . . . . . . . . .
/// Iɴɪᴛɪᴀᴛɪɴɢ ᴋɴᴏᴡʟᴇᴅɢᴇ ᴇᴠᴀʟᴜᴀᴛɪᴏɴ.
> [-] sᴇʟᴇᴄᴛ ᴀ ɴᴜᴍʙᴇʀ ꜰʀᴏᴍ ᴛʜᴇ ᴄᴀᴛᴇɢᴏʀɪᴇs ʙᴇʟᴏᴡ ᴛᴏ ᴄᴏɴᴛɪɴᴜᴇ.
> [-] Tᴏ ʀᴇᴠᴇᴀʟ ᴛʜᴇ ᴀɴsᴡᴇʀ, ᴜsᴇ '.𝗊𝗎𝗂𝗓 𝗋'. 
> ‎ 
[*] ʟᴏᴀᴅɪɴɢ. . . .
━━━━━━━━━━━━━━━━━━━━━━━━
${categoryList}
> ‎ 
> ❬❬𝖤𝖮𝖥
` :
 `┌──[ 𝗥𝝣𝝠𝗣𝗘𝗥 𝑣${vs} ]─[~]─[${date}] 
└─ $ node quiz.mjs --help
> . . . . . . . . . . . . . . . . . . . . . . .
/// Iɴɪᴄɪᴀɴᴅᴏ ᴍᴏᴅᴜʟᴏ ᴅᴇ ǫᴜɪᴢ.
> [-] Sᴇʟᴇᴄɪᴏɴᴇ ᴜᴍ ɴᴜ́ᴍᴇʀᴏ ᴅᴀs ᴄᴀᴛᴇɢᴏʀɪᴀs ᴀʙᴀɪxᴏ ᴘᴀʀᴀ ᴄᴏɴᴛɪɴᴜᴀʀ.
> [-] Pᴀʀᴀ ʀᴇᴠᴇʟᴀʀ ᴀ ʀᴇsᴘᴏsᴛᴀ, ᴜsᴇ '.𝗊𝗎𝗂𝗓 𝗋'. 
> ‎ 
[*] ᴄᴀʀʀᴇɢᴀɴᴅᴏ . . . .
━━━━━━━━━━━━━━━━━━━━━━━━
${categoryList}
> ‎ 
> ❬❬𝖤𝖮𝖥` 



if (!text) {
    

   
  
    throw quizHelp
}
else {
  
  
  
    const selectedCategoryIndex = parseInt(text) - 1;
    
     
    if (selectedCategoryIndex >= 0 && selectedCategoryIndex < categories.length) {
   
       
  
        
   // Assuming you have these variables defined somewhere in your script
if(!global.db.data.chats[m.chat].quiz.modo){
  global.db.data.chats[m.chat].quiz.modo =false
}

// Your existing code...

const selectedCategory = categories[selectedCategoryIndex];

global.db.data.chats[m.chat].quiz.categoria = selectedCategory



  const timeDifference = currentTime - global.db.data.chats[m.chat].quiz.time;
 
  if (!global.db.data.chats[m.chat].quiz.modo && timeDifference < delayBetweenQuestions) {
    // If the user attempts to ask a question too soon, provide a warning
    const remainingTime = delayBetweenQuestions - timeDifference;
    
    const remainingTimeInSeconds = Math.ceil(remainingTime / 1000);


const timing  = global.db.data.chats[m.chat].language === 'en' ? 
`> ⫻ 𓉘𝆺𝅥𓉝 𝙎𝙮𝙨𝙩𝙚𝙢 𝙬𝙖𝙧𝙣𝙞𝙣𝙜
> 100% ʟᴏss.
> Pʟᴇᴀsᴇ ᴡᴀɪᴛ ${remainingTimeInSeconds} sᴇᴄᴏnds.`
:
`> ⫻ 𓉘𝆺𝅥𓉝 𝙎𝙮𝙨𝙩𝙚𝙢 𝙀𝙧𝙧𝙤𝙧
> 100% ᴅᴇ ᴘᴇʀᴅᴀ.
> ᴀɢᴜᴀʀᴅᴇ ${remainingTimeInSeconds} sᴇɢᴜɴᴅᴏs.`

return m.reply(timing)
  } 
  
if (global.db.data.chats[m.chat].quiz.modo && global.db.data.chats[m.chat].quiz.perguntaAndamento) {
   
const awaitNew  = global.db.data.chats[m.chat].language === 'en' ? 
`> ⫻ 𓉘𝆺𝅥𓉝 𝙎𝙮𝙨𝙩𝙚𝙢 𝙬𝙖𝙧𝙣𝙞𝙣𝙜
> [*] ᴘᴇɴᴅɪɴɢ ᴘɪᴅ
> [!] ᴘʀᴇᴠɪᴏᴜs ǫᴜᴇsᴛɪᴏɴ ᴍᴜsᴛ ʙᴇ ᴀɴsᴡᴇʀᴇᴅ ʙᴇꜰᴏʀᴇ ɴᴇᴡ ɢᴇɴᴇʀᴀᴛɪᴏɴ
> [!] ᴛᴏ ᴋɪʟʟ ᴘʀᴏᴄᴇss, ᴜsᴇ '.quiz delete `
:
`> ⫻ 𓉘𝆺𝅥𓉝 𝙎𝙮𝙨𝙩𝙚𝙢 𝙬𝙖𝙧𝙣𝙞𝙣𝙜
> [*] ᴘɪᴅ ᴇᴍ ᴀɴᴅᴀᴍᴇɴᴛᴏ
> [!] ᴜʟᴛɪᴍᴀ ᴘᴇʀɢᴜɴᴛᴀ ᴅᴇᴠᴇ sᴇʀ ʀᴇsᴘᴏɴᴅɪᴅᴀ ᴀɴᴛᴇs ᴅᴇ ɢᴇʀᴀʀ ᴜᴍᴀ ɴᴏᴠᴀ
> [!] ᴘᴀʀᴀ ᴇɴᴄᴇʀʀᴀʀ ᴀ ᴛᴀʀᴇꜰᴀ, ᴜsᴇ'.quiz apagar `  

return m.reply(awaitNew)
  }
  if(global.db.data.chats[m.chat].quiz.loading===true){

    const onWait  = global.db.data.chats[m.chat].language === 'en' ? 
`> ⫻ 𓉘𝆺𝅥𓉝 𝙎𝙮𝙨𝙩𝙚𝙢 𝙬𝙖𝙧𝙣𝙞𝙣𝙜
> [*] ᴘᴇɴᴅɪɴɢ ᴘɪᴅ
> [!] ǫᴜᴇsᴛɪᴏɴ ʙᴇɪɴɢ ɢᴇɴᴇʀᴀᴛᴇᴅ, ᴡᴀɪᴛ
> [!] ɪꜰ ᴘʀᴏᴄᴄᴇss ɪs sᴛᴜᴄᴋ, ᴜsᴇ '.quiz delete`
:
`> ⫻ 𓉘𝆺𝅥𓉝 𝙎𝙮𝙨𝙩𝙚𝙢 𝙬𝙖𝙧𝙣𝙞𝙣𝙜
> [*] ᴘɪᴅ ᴇᴍ ᴀɴᴅᴀᴍᴇɴᴛᴏ
> [!] ɢᴇʀᴀɴᴅᴏ ᴘᴇʀɢᴜɴᴛᴀ
> [!] sᴇ ᴀ ᴛᴀʀᴇꜰᴀ ᴇsᴛɪᴠᴇʀ ᴄᴏᴍ ʙᴜɢ, ᴜsᴇ'.quiz apagar`  
  

    return m.reply(onWait);
  }
     m.react("⏳")
 global.db.data.chats[m.chat].quiz.loading=true
if (!global.db.data.chats[m.chat].quiz.historico ||
global.db.data.chats[m.chat].quiz.historico.length === 0){
  global.db.data.chats[m.chat].quiz.historico  = [

    {
        "role": "system",
        "content": `Voce é uma IA assistente para gerar quiz, perguntas e vestibulares
voce deve criar objetos em JS para perguntas, con alternativas, resposta e explicação seguindo este modelo:


       { 
         Pergunta: 'Pergunta dentro do TEMA DA CATEGORIA',
    Opcoes: {
      A: 'Opcao',
      B: 'Opcao',
      C: 'Opcao',
      D: 'Opcao'
    },
    Pontos: 'Valor de acordo com a dificuldade',
     Money: 'Valor por dificuldade',
     XP: 'Valor por dificuldade',
    Resposta: 'Opcao certa A, B, C ou D',
    Motivo: 'Explicacao detalhada da resposta'
  }


Retorne UM OBJETO JSON COMO PLAIN TEXT E NADA MAIS!!!
no atributo Resposta, voce deve colocar apenas a letra certa!!
FACA AS PERGUNTAS NO IDIOMA DA CATEGORIA E DO USUARIO!!! 
SE A CATEGORIA É INGLES, A PERGUNTA É EM INGLES
SE A CATEGORIA É EM PORTUGUES, A PERGUNTA É EM PORTUGUES
faca perguntas dificeis e complexas adequadas a um vestibular referente ao tema
Ajuste o valor de Pontos, Money e XP de acordo com a complexidade e tema da
, os valores minimos sao 25 pontos, 50 Money e 200xp, faca os valores serem
dinamicos e variaveis conforme a complexidade!
Evite repetir as mesmas perguntas`
    },
    ]
}
 global.db.data.chats[m.chat].quiz.historico = [
...global.db.data.chats[m.chat].quiz.historico,

    {
        "role": "user",
        "content": `Agora siga as instrucoes que te foram dada  e crie o objeto JSON de uma pergunta com os MESNMOS CAMPOS/PROPRIEDADES no exemplo!!! { Pergunta: \"Pergunta dentro do TEMA DA CATEGORIA\", Opcoes: { A: \"Opcao\", B: \"Opcao\", C: \"Opcao\", D: \"Opcao\" }, Pontos: \"Valor de acordo com a dificuldade\", Money: \"Valor por dificuldade\", XP: \"Valor por dificuldade\", Resposta: \"Opcao certa A, B, C ou D\", Motivo: \"Explicacao detalhada da resposta\" } Retorne APENAS UM OBJETO JSON E MAIS NADA! use o \" nas propriedades do objeto. o usuario ira lhe passar a categoria que deseja, e voce deve gerar uma pergunta baseada no IDIOMA da categoria!! Se for SCIENCE, a pergunta deve ser ingles. Se for CIENCIA, a pergunta deve ser portugues. Se for MEDICINE, deve ser em ingles. se for MEDICINA, deve ser em portugues, etc.
       
       ${global.db.data.chats[m.chat].quiz.categoria
        == 'Historia' ? `Unificação do Egito (História Antiga), Revolução
        Francesa (História Moderna), Descobrimento do Brasil (História do
        Brasil), Revolução Industrial (História Econômica), Primeira Guerra
        Mundial (História Contemporânea), Queda de Constantinopla (História
        Medieval), Guerra Fria (História Política), Abolição da Escravatura
        (História Social), Reforma Protestante (História Religiosa), Civilização
        Maia (História da América Latina), Revolta dos Búzios (História da
        Bahia), Independência dos Estados Unidos (História das Américas),
        Império Napoleônico (História Militar), Invasões Bárbaras (História da
        Europa), Era Meiji no Japão (História da Ásia), Independência da Índia
        (História Colonial), Guerra do Paraguai (História da América do Sul),
        Revolta de Espártaco (História da Roma Antiga), Reforma Agrária no
        Brasil (História Agrária), Revolução Russa (História do Século XX),
        Expansão Islâmica (História do Oriente Médio), Inquisição Espanhola
        (História da Religião), Primeiras Civilizações Mesopotâmicas (História
        Pré-Histórica), Conferência de Berlim (História da África), Queda do
        Muro de Berlim (História do Pós-Guerra), Guerras Médicas (História da
        Grécia Antiga), Renascimento Cultural (História da Arte), Revolução
        Haitiana (História da América Central), Tratado de Tordesilhas (História
        Diplomática), Guerra do Vietnã (História dos Conflitos). e muito mais` : ''}
  NAO MANDE PERGUNTAS SEMELHANTES AUE VOCE JA TENHA ME ENVIADO, SEJA CRIATIVO E
 CRIE perguntas complexas e didiceis, finja que isto e um vestibular da maior
 faculdade que há, o vestibular tem que ser dificil
        Categoria:
        [${global.db.data.chats[m.chat].quiz.categoria}${global.db.data.chats[m.chat].quiz.categoria
        == 'Historia' ? ' Geral - Tudo sobre historia' : ''}]`
    }
 ]
 
 console.log('begin quiz')

 async function getRobot(messagem,category) { 
   
  messagem.push({
    "role": "user",
    "content": `${category}`
  });
 
  try {
      m.react('💿')
      const response = await fetch(global.arcangeloAPI + '/aiQuiz', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              conversation: messagem,
              question: category,
          }),
      });
      if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
      }
      

      const data = await response.json()

      const assistantResponse = data.response; 
      const rawResponse = assistantResponse.replace(/```json\s*/i, '').replace(/```/g, '').trim();

  let aiReply = rawResponse
     /* 
      
*/




      messagem.push({
        "role": "assistant",
        "content": `${aiReply}`
      });
         m.react('📀')
         console.log('question added')
         global.db.data.chats[m.chat].quiz.pergunta = aiReply

         

  if(global.db.data.chats[m.chat].quiz.modo==false){
    console.log('Modo xp false')
  if(global.db.data.chats[m.chat].quiz != null) {
  console.log("Current Time: " + currentTime);
  console.log("Last Question Time: " + global.db.data.chats[m.chat].quiz.time);

    const timeDifference = currentTime - global.db.data.chats[m.chat].quiz.time;
  console.log("Time Difference: " + timeDifference);
  console.log("Delay: " + delayBetweenQuestions);
console.log('time  ' + timeDifference < delayBetweenQuestions)

console.log('porra')
  if (timeDifference < delayBetweenQuestions) {
    // If the user attempts to ask a question too soon, provide a warning
    const remainingTime = delayBetweenQuestions - timeDifference;
    

    const remainingTimeInSeconds = Math.ceil(remainingTime / 1000);


    const timing  = global.db.data.chats[m.chat].language === 'en' ? 
`> ⫻ 𓉘𝆺𝅥𓉝 𝙎𝙮𝙨𝙩𝙚𝙢 𝙬𝙖𝙧𝙣𝙞𝙣𝙜
> 100% ʟᴏss.
> Pʟᴇᴀsᴇ ᴡᴀɪᴛ ${remainingTimeInSeconds} sᴇᴄᴏnds.`
:
`> ⫻ 𓉘𝆺𝅥𓉝 𝙎𝙮𝙨𝙩𝙚𝙢 𝙀𝙧𝙧𝙤𝙧
> 100% ᴅᴇ ᴘᴇʀᴅᴀ.
> ᴀɢᴜᴀʀᴅᴇ ${remainingTimeInSeconds} sᴇɢᴜɴᴅᴏs.`
   return m.reply(timing)

    
  } 
  else {
    console.log(global.db.data.chats[m.chat].quiz.pergunta)
    m.react('💿')
        console.log('1 🦇')
        
        
    global.db.data.chats[m.chat].quiz.pergunta = JSON.parse(global.db.data.chats[m.chat].quiz.pergunta) 
    const { Pergunta, XP,Pontos, Money, Opcoes, Resposta, Motivo } = global.db.data.chats[m.chat].quiz.pergunta
    console.log('2 🦇')
    console.log(global.db.data.chats[m.chat].quiz.pergunta)
    const optionsString = Object.entries(Opcoes)
      .map(([key, value]) => `> ${key}: ${value}`)
      .join("\n");
      
    console.log('3 🦇')

 // Update the current question and answer
    global.db.data.chats[m.chat].quiz= {
              ...global.db.data.chats[m.chat].quiz,
      "cp": Pergunta,
      "ca": Resposta,
      "cm": Motivo,
      "time": new Date().getTime(),
      loading:false
    };
    
     if (selectedCategoryIndex == 11 || selectedCategory == 'Matematica') {
     global.db.data.chats[m.chat].quiz.math = true;
    } else {
     global.db.data.chats[m.chat].quiz.math = false;
    }
    // Send the question
 
    await m.reply(`$ ./quiz.py -c ${selectedCategory} 
> ‎ 
> [*] ${Pergunta}
> ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
> ‎ 
${optionsString}
> ‎  
> ❬❬𝖤𝖮𝖥`);

    // Update the last question time after sending a new question
    
    // Additional code specific to your application logic can go here...
    // For example, you might want to handle user responses or perform other actions.
  }
  }
  else {
 
    global.db.data.chats[m.chat].quiz.pergunta = JSON.parse(global.db.data.chats[m.chat].quiz.pergunta)
    console.log('1 🦇')
    const { Pergunta, XP,Pontos, Money, Opcoes, Resposta, Motivo } = global.db.data.chats[m.chat].quiz.pergunta
    console.log('2 🦇')
    const optionsString = Object.entries(Opcoes)
      .map(([key, value]) => `> ${key}: ${value}`)
      .join("\n");
    console.log('3 🦇')

 // Update the current question and answer
    global.db.data.chats[m.chat].quiz= {
              ...global.db.data.chats[m.chat].quiz,
      "cp": Pergunta,
      "ca": Resposta,
      "cm": Motivo,
      "time": new Date().getTime(),
      loading: false
    };
    
     if (selectedCategoryIndex == 11 || selectedCategory == 'Matematica') {
     global.db.data.chats[m.chat].quiz.math = true;
    } else {
     global.db.data.chats[m.chat].quiz.math = false;
    }
    // Send the question
  
    await m.reply(`$ ./quiz.py -c ${selectedCategory} 
> ‎ 
> [*] ${Pergunta}
> ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
> ‎ 
${optionsString}
> ‎  
> ❬❬𝖤𝖮𝖥`);

    // Update the last question time after sending a new question
    
    // Additional code specific to your application logic can go here...
    // For example, you might want to handle user responses or perform other actions.
  
  }
 
  }
  else if(global.db.data.chats[m.chat].quiz.modo==true){
  console.log('modo xp trur')
  
    
    if(global.db.data.chats[m.chat].quiz!= null) {
 
    global.db.data.chats[m.chat].quiz.pergunta = JSON.parse(global.db.data.chats[m.chat].quiz.pergunta) 
    const { Pergunta, XP, Money, Pontos, Opcoes, Resposta, Motivo } =
    global.db.data.chats[m.chat].quiz.pergunta;
    const optionsString = Object.entries(Opcoes)
      .map(([key, value]) => `> ${key}: ${value}`)
      .join("\n");
    global.db.data.chats[m.chat].quiz.perguntaAndamento = true
    
    
    let qid = await m.reply(`$ ./quiz.py -c ${selectedCategory} 
> ‎ 
> [*] ${Pergunta}
> ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
> ‎ 
${optionsString}
> ‎  
> ❬❬𝖤𝖮𝖥`);

 // Update the current question and answer
    global.db.data.chats[m.chat].quiz= {
      ...global.db.data.chats[m.chat].quiz,
      "cp": Pergunta,
      "ca": Resposta,
      "cm": Motivo,
            "xp": XP,
     "pontos": Pontos,
        "mony": Money,
      "id": qid.id,
      "time": new Date().getTime(),
      loading:false
    };
    
     if (selectedCategoryIndex == 11 || selectedCategory == 'Matematica') {
     global.db.data.chats[m.chat].quiz.math = true;
    } else {
     global.db.data.chats[m.chat].quiz.math = false;
    }
    
    console.log("on quiz  "+ global.db.data.chats[m.chat].quiz)
    // Send the question
    

    // Update the last question time after sending a new question
    
    // Additional code specific to your application logic can go here...
    // For example, you might want to handle user responses or perform other actions.
  
  }
  else {
    
    global.db.data.chats[m.chat].quiz.pergunta = JSON.parse(global.db.data.chats[m.chat].quiz.pergunta)
    const { Pergunta, XP, Money, Pontos, Opcoes, Resposta, Motivo} =
    global.db.data.chats[m.chat].quiz.pergunta;
    const optionsString = Object.entries(Opcoes)
      .map(([key, value]) => `> ${key}: ${value}`)
      .join("\n");
    global.xppergunta[m.chat]= true
 // Update the current question and answer
    console.log("test" + global.db.data.chats[m.chat].quiz.modo)
    // Send the question
  global.db.data.chats[m.chat].quiz.perguntaAndamento = true
  
  


  
   let qid = await m.reply(`$ ./quiz.py -c ${selectedCategory} 
> ‎ 
> [*] ${Pergunta}
> ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
> ‎ 
${optionsString}
> ‎ 
> ❬❬𝖤𝖮𝖥`);

global.db.data.chats[m.chat].quiz = {
        ...global.db.data.chats[m.chat].quiz,
  "math":false,
      "cp": Pergunta,
      "ca": Resposta,
      "cm": Motivo,
            "xp": XP,
     "pontos": Pontos,
        "mony": Money,
      "id": qid.id,
      "time": new Date().getTime(),
     loading: false
    };
    
    
     if (selectedCategoryIndex == 11 || selectedCategory == 'Matematica') {
     global.db.data.chats[m.chat].quiz.math = true;
    } else {
     global.db.data.chats[m.chat].quiz.math = false;
    }
    console.log("on quiz  "+ global.db.data.chats[m.chat].quiz.id)
    // Updte the last question time after sending a new question
    
    // Additional code specific to your application logic can go here...
    // For example, you might want to handle user responses or perform other actions.
  }
   //fim estado pergunta
  } // fim elseif if competitivo
  

 

         
return !0
  } catch (error) {
      console.log('erro !!!!! ')
      console.log('///////////////// ')
      console.log(error)
    sendSystemErrorAlert(global.db.data.chats[m.chat].language);
  }
   
}



getRobot(global.db.data.chats[m.chat].quiz.historico, categories[text -1])

  

}
    else if(text === "r"){
      
      
     if(!global.db.data.chats[m.chat].quiz.pergunta){

      const quizEnd = global.db.data.chats[m.chat].language === 'en' ? 
      `┌──[ 𝗥𝝣𝝠𝗣𝗘𝗥 𝑣${vs} ]──[~/ϙυιȥ] 
└─► get_status -e
> ‎ 
[!] ᴛʜɪꜱ ɢᴀᴍᴇ ᴀʟʀᴇᴀᴅʏ ᴇɴᴅᴇᴅ
> ‎ 
` : 
      `┌──[ 𝗥𝝣𝝠𝗣𝗘𝗥 𝑣${vs} ]──[~/ϙυιȥ] 
└─► get_status -e
> ‎ 
[!] ᴊᴏɢᴏ ᴇɴᴄᴇʀʀᴀᴅᴏ
> ‎ 
`


        await m.reply(quizEnd)
      }
  
     else if(global.db.data.chats[m.chat].quiz.cp)
     
      {

        const getAnswer = global.db.data.chats[m.chat].language === 'en' ? 
        `┌──[ 𝗥𝝣𝝠𝗣𝗘𝗥 𝑣${vs} ]──[~/ϙυιȥ] 
└─► get_reply -n
[+] 𝙲𝙾𝚁𝚁𝙴𝙲𝚃 𝙾𝙿𝚃𝙸𝙾𝙽: ${global.db.data.chats[m.chat].quiz.ca} 
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
> ${global.db.data.chats[m.chat].quiz.cm}
> ‎` : 
        `┌──[ 𝗥𝝣𝝠𝗣𝗘𝗥 𝑣${vs} ]──[~/ϙυιȥ] 
└─► get_reply -n
[+] 𝙾𝙿𝙲𝙰𝙾 𝙲𝙾𝚁𝚁𝙴𝚃𝙰: ${global.db.data.chats[m.chat].quiz.ca} 
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
> ${global.db.data.chats[m.chat].quiz.cm}
> ‎`


      await m.reply(getAnswer)
      
          global.db.data.chats[m.chat].quiz.perguntaAndamento = false
          global.db.data.chats[m.chat].quiz.pergunta = {}
      
        global.db.data.chats[m.chat].quiz= {
                  ...global.db.data.chats[m.chat].quiz,
        "math": false,
      "cp": '',
      "ca": '',
      "cm": '',
      "xp": 0,
      "id": '',
      "time": ''

    }
    
    }
    }
    
    else if(text=== 'apagar' || text=='delete'){
      m.react("✅")
      const delmsg = global.db.data.chats[m.chat].language === 'en' ? 
      `𓉘✓𓉝 ᴛᴀsᴋ ᴋɪʟʟᴇᴅ`
      :
      `𓉘✓𓉝 ᴘʀᴏᴄᴇssᴏ ᴇɴᴄᴇʀʀᴀᴅᴏ`
      m.reply(delmsg)
      delete global.db.data.chats[m.chat].quiz
    }
    else if(text.length>3) {
   
       
  
        
if(!global.db.data.chats[m.chat].quiz.modo){
  global.db.data.chats[m.chat].quiz.modo =false
}

const selectedCategory = text

global.db.data.chats[m.chat].quiz.categoria = selectedCategory



  const timeDifference = currentTime - global.db.data.chats[m.chat].quiz.time;
 
  if (!global.db.data.chats[m.chat].quiz.modo && timeDifference < delayBetweenQuestions) {
    // If the user attempts to ask a question too soon, provide a warning
    const remainingTime = delayBetweenQuestions - timeDifference;
    
    const remainingTimeInSeconds = Math.ceil(remainingTime / 1000);


const timing  = global.db.data.chats[m.chat].language === 'en' ? 
`> ⫻ 𓉘𝆺𝅥𓉝 𝙎𝙮𝙨𝙩𝙚𝙢 𝙬𝙖𝙧𝙣𝙞𝙣𝙜
> 100% ʟᴏss.
> Pʟᴇᴀsᴇ ᴡᴀɪᴛ ${remainingTimeInSeconds} sᴇᴄᴏnds.`
:
`> ⫻ 𓉘𝆺𝅥𓉝 𝙎𝙮𝙨𝙩𝙚𝙢 𝙀𝙧𝙧𝙤𝙧
> 100% ᴅᴇ ᴘᴇʀᴅᴀ.
> ᴀɢᴜᴀʀᴅᴇ ${remainingTimeInSeconds} sᴇɢᴜɴᴅᴏs.`
   return m.reply(timing)
  } 
  
if (global.db.data.chats[m.chat].quiz.modo && global.db.data.chats[m.chat].quiz.perguntaAndamento) {
   
const awaitNew  = global.db.data.chats[m.chat].language === 'en' ? 
`> ⫻ 𓉘𝆺𝅥𓉝 𝙎𝙮𝙨𝙩𝙚𝙢 𝙬𝙖𝙧𝙣𝙞𝙣𝙜
> [*] ᴘᴇɴᴅɪɴɢ ᴘɪᴅ
> [!] ᴘʀᴇᴠɪᴏᴜs ǫᴜᴇsᴛɪᴏɴ ᴍᴜsᴛ ʙᴇ ᴀɴsᴡᴇʀᴇᴅ ʙᴇꜰᴏʀᴇ ɴᴇᴡ ɢᴇɴᴇʀᴀᴛɪᴏɴ
> [!] ᴛᴏ ᴋɪʟʟ ᴘʀᴏᴄᴇss, ᴜsᴇ '.quiz delete `
:
`> ⫻ 𓉘𝆺𝅥𓉝 𝙎𝙮𝙨𝙩𝙚𝙢 𝙬𝙖𝙧𝙣𝙞𝙣𝙜
> [*] ᴘɪᴅ ᴇᴍ ᴀɴᴅᴀᴍᴇɴᴛᴏ
> [!] ᴜʟᴛɪᴍᴀ ᴘᴇʀɢᴜɴᴛᴀ ᴅᴇᴠᴇ sᴇʀ ʀᴇsᴘᴏɴᴅɪᴅᴀ ᴀɴᴛᴇs ᴅᴇ ɢᴇʀᴀʀ ᴜᴍᴀ ɴᴏᴠᴀ
> [!] ᴘᴀʀᴀ ᴇɴᴄᴇʀʀᴀʀ ᴀ ᴛᴀʀᴇꜰᴀ, ᴜsᴇ'.quiz apagar `

return m.reply(awaitNew)
  }
  if(global.db.data.chats[m.chat].quiz.loading===true){

    const onWait  = global.db.data.chats[m.chat].language === 'en' ? 
`> ⫻ 𓉘𝆺𝅥𓉝 𝙎𝙮𝙨𝙩𝙚𝙢 𝙬𝙖𝙧𝙣𝙞𝙣𝙜
> [*] ᴘᴇɴᴅɪɴɢ ᴘɪᴅ
> [!] ǫᴜᴇsᴛɪᴏɴ ʙᴇɪɴɢ ɢᴇɴᴇʀᴀᴛᴇᴅ, ᴡᴀɪᴛ
> [!] ɪꜰ ᴘʀᴏᴄᴄᴇss ɪs sᴛᴜᴄᴋ, ᴜsᴇ '.quiz delete`
:
`> ⫻ 𓉘𝆺𝅥𓉝 𝙎𝙮𝙨𝙩𝙚𝙢 𝙬𝙖𝙧𝙣𝙞𝙣𝙜
> [*] ᴘɪᴅ ᴇᴍ ᴀɴᴅᴀᴍᴇɴᴛᴏ
> [!] ɢᴇʀᴀɴᴅᴏ ᴘᴇʀɢᴜɴᴛᴀ
> [!] sᴇ ᴀ ᴛᴀʀᴇꜰᴀ ᴇsᴛɪᴠᴇʀ ᴄᴏᴍ ʙᴜɢ, ᴜsᴇ'.quiz apagar`  


    return m.reply(onWait);
  }
     m.react("⏳")
 global.db.data.chats[m.chat].quiz.loading=true
if (!global.db.data.chats[m.chat].quiz.historico ||
global.db.data.chats[m.chat].quiz.historico.length === 0){
  global.db.data.chats[m.chat].quiz.historico  = [

    {
        "role": "system",
        "content": `Voce é uma IA assistente para gerar quiz, perguntas e vestibulares
voce deve criar objetos em JS para perguntas, con alternativas, resposta e explicação seguindo este modelo:


       { 
         Pergunta: 'Pergunta dentro do TEMA DA CATEGORIA',
    Opcoes: {
      A: 'Opcao',
      B: 'Opcao',
      C: 'Opcao',
      D: 'Opcao'
    },
    Pontos: 'Valor de acordo com a dificuldade',
     Money: 'Valor por dificuldade',
     XP: 'Valor por dificuldade',
    Resposta: 'Opcao certa A, B, C ou D',
    Motivo: 'Explicacao detalhada da resposta'
  }


Retorne UM OBJETO JSON COMO PLAIN TEXT E NADA MAIS!!!
no atributo Resposta, voce deve colocar apenas a letra certa!!
FACA AS PERGUNTAS NO IDIOMA DA CATEGORIA E DO USUARIO!!! 
SE A CATEGORIA É INGLES, A PERGUNTA É EM INGLES
SE A CATEGORIA É EM PORTUGUES, A PERGUNTA É EM PORTUGUES
faca perguntas dificeis e complexas adequadas a um vestibular referente ao tema
Ajuste o valor de Pontos, Money e XP de acordo com a complexidade e tema da
, os valores minimos sao 25 pontos, 50 Money e 200xp, faca os valores serem
dinamicos e variaveis conforme a complexidade!
Evite repetir as mesmas perguntas`
    },
    ]
}
 global.db.data.chats[m.chat].quiz.historico = [
...global.db.data.chats[m.chat].quiz.historico,

    {
        "role": "user",
        "content": `Agora siga as instrucoes que te foram dada  e crie o objeto JSON de uma pergunta com os MESNMOS CAMPOS/PROPRIEDADES no exemplo!!! { Pergunta: \"Pergunta dentro do TEMA DA CATEGORIA\", Opcoes: { A: \"Opcao\", B: \"Opcao\", C: \"Opcao\", D: \"Opcao\" }, Pontos: \"Valor de acordo com a dificuldade\", Money: \"Valor por dificuldade\", XP: \"Valor por dificuldade\", Resposta: \"Opcao certa A, B, C ou D\", Motivo: \"Explicacao detalhada da resposta\" } Retorne APENAS UM OBJETO JSON E MAIS NADA! use o \" nas propriedades do objeto. o usuario ira lhe passar a categoria que deseja, e voce deve gerar uma pergunta baseada no IDIOMA da categoria!! Se for SCIENCE, a pergunta deve ser ingles. Se for CIENCIA, a pergunta deve ser portugues. Se for MEDICINE, deve ser em ingles. se for MEDICINA, deve ser em portugues, etc.
       
       ${global.db.data.chats[m.chat].quiz.categoria
        == 'Historia' ? `Unificação do Egito (História Antiga), Revolução
        Francesa (História Moderna), Descobrimento do Brasil (História do
        Brasil), Revolução Industrial (História Econômica), Primeira Guerra
        Mundial (História Contemporânea), Queda de Constantinopla (História
        Medieval), Guerra Fria (História Política), Abolição da Escravatura
        (História Social), Reforma Protestante (História Religiosa), Civilização
        Maia (História da América Latina), Revolta dos Búzios (História da
        Bahia), Independência dos Estados Unidos (História das Américas),
        Império Napoleônico (História Militar), Invasões Bárbaras (História da
        Europa), Era Meiji no Japão (História da Ásia), Independência da Índia
        (História Colonial), Guerra do Paraguai (História da América do Sul),
        Revolta de Espártaco (História da Roma Antiga), Reforma Agrária no
        Brasil (História Agrária), Revolução Russa (História do Século XX),
        Expansão Islâmica (História do Oriente Médio), Inquisição Espanhola
        (História da Religião), Primeiras Civilizações Mesopotâmicas (História
        Pré-Histórica), Conferência de Berlim (História da África), Queda do
        Muro de Berlim (História do Pós-Guerra), Guerras Médicas (História da
        Grécia Antiga), Renascimento Cultural (História da Arte), Revolução
        Haitiana (História da América Central), Tratado de Tordesilhas (História
        Diplomática), Guerra do Vietnã (História dos Conflitos). e muito mais` : ''}
  NAO MANDE PERGUNTAS SEMELHANTES AUE VOCE JA TENHA ME ENVIADO, SEJA CRIATIVO E
 CRIE perguntas complexas e didiceis, finja que isto e um vestibular da maior
 faculdade que há, o vestibular tem que ser dificil
        Categoria:
        [${global.db.data.chats[m.chat].quiz.categoria}${global.db.data.chats[m.chat].quiz.categoria
        == 'Historia' ? ' Geral - Tudo sobre historia' : ''}]`
    }
 ]
 
 console.log('begin quiz')

 async function getRobot(messagem,category) { 
   
  messagem.push({
    "role": "user",
    "content": `${category}`
  });
 
  try {
      m.react('💿')
      const response = await fetch(global.arcangeloAPI + '/aiQuiz', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              conversation: messagem,
              question: category,
          }),
      });
      if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
      }
      

      const data = await response.json()

      const assistantResponse = data.response; 
  let aiReply = assistantResponse
  
  




      messagem.push({
        "role": "assistant",
        "content": `${aiReply}`
      });
         m.react('📀')
         console.log('question added')
         global.db.data.chats[m.chat].quiz.pergunta = aiReply

         

  if(global.db.data.chats[m.chat].quiz.modo==false){
    console.log('Modo xp false')
  if(global.db.data.chats[m.chat].quiz != null) {
  console.log("Current Time: " + currentTime);
  console.log("Last Question Time: " + global.db.data.chats[m.chat].quiz.time);

    const timeDifference = currentTime - global.db.data.chats[m.chat].quiz.time;
  console.log("Time Difference: " + timeDifference);
  console.log("Delay: " + delayBetweenQuestions);
console.log('time  ' + timeDifference < delayBetweenQuestions)

console.log('porra')
  if (timeDifference < delayBetweenQuestions) {
    // If the user attempts to ask a question too soon, provide a warning
    const remainingTime = delayBetweenQuestions - timeDifference;
    

    const remainingTimeInSeconds = Math.ceil(remainingTime / 1000);


    const timing  = global.db.data.chats[m.chat].language === 'en' ? 
`> ⫻ 𓉘𝆺𝅥𓉝 𝙎𝙮𝙨𝙩𝙚𝙢 𝙬𝙖𝙧𝙣𝙞𝙣𝙜
> [*] ᴘᴇɴᴅɪɴɢ ᴘɪᴅ
> [!] ᴘʀᴇᴠɪᴏᴜs ǫᴜᴇsᴛɪᴏɴ ᴍᴜsᴛ ʙᴇ ᴀɴsᴡᴇʀᴇᴅ ʙᴇꜰᴏʀᴇ ɴᴇᴡ ɢᴇɴᴇʀᴀᴛɪᴏɴ
> [!] ᴛᴏ ᴋɪʟʟ ᴘʀᴏᴄᴇss, ᴜsᴇ '.quiz delete `
:
`> ⫻ 𓉘𝆺𝅥𓉝 𝙎𝙮𝙨𝙩𝙚𝙢 𝙬𝙖𝙧𝙣𝙞𝙣𝙜
> [*] ᴘɪᴅ ᴇᴍ ᴀɴᴅᴀᴍᴇɴᴛᴏ
> [!] ᴜʟᴛɪᴍᴀ ᴘᴇʀɢᴜɴᴛᴀ ᴅᴇᴠᴇ sᴇʀ ʀᴇsᴘᴏɴᴅɪᴅᴀ ᴀɴᴛᴇs ᴅᴇ ɢᴇʀᴀʀ ᴜᴍᴀ ɴᴏᴠᴀ
> [!] ᴘᴀʀᴀ ᴇɴᴄᴇʀʀᴀʀ ᴀ ᴛᴀʀᴇꜰᴀ, ᴜsᴇ'.quiz apagar `
      return m.reply(timing)

    
  } 
  else {
    console.log(global.db.data.chats[m.chat].quiz.pergunta)
    m.react('💿')
        console.log('1 🦇')
        
        
    global.db.data.chats[m.chat].quiz.pergunta = JSON.parse(global.db.data.chats[m.chat].quiz.pergunta) 
    const { Pergunta, XP,Pontos, Money, Opcoes, Resposta, Motivo } = global.db.data.chats[m.chat].quiz.pergunta
    console.log('2 🦇')
    console.log(global.db.data.chats[m.chat].quiz.pergunta)
    const optionsString = Object.entries(Opcoes)
      .map(([key, value]) => `> ${key}: ${value}`)
      .join("\n");
      
    console.log('3 🦇')

 // Update the current question and answer
    global.db.data.chats[m.chat].quiz= {
              ...global.db.data.chats[m.chat].quiz,
      "cp": Pergunta,
      "ca": Resposta,
      "cm": Motivo,
      "time": new Date().getTime(),
      loading:false
    };
    
     if (selectedCategoryIndex == 11 || selectedCategory == 'Matematica') {
     global.db.data.chats[m.chat].quiz.math = true;
    } else {
     global.db.data.chats[m.chat].quiz.math = false;
    }
    // Send the question
 
    await m.reply(`$ ./quiz.py -c ${selectedCategory} 
> ‎ 
> [*] ${Pergunta}
> ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
> ‎ 
${optionsString}
> ‎  
> ❬❬𝖤𝖮𝖥`);

    // Update the last question time after sending a new question
    
    // Additional code specific to your application logic can go here...
    // For example, you might want to handle user responses or perform other actions.
  }
  }
  else {
 
    global.db.data.chats[m.chat].quiz.pergunta = JSON.parse(global.db.data.chats[m.chat].quiz.pergunta)
    console.log('1 🦇')
    const { Pergunta, XP,Pontos, Money, Opcoes, Resposta, Motivo } = global.db.data.chats[m.chat].quiz.pergunta
    console.log('2 🦇')
    const optionsString = Object.entries(Opcoes)
      .map(([key, value]) => `> ${key}: ${value}`)
      .join("\n");
    console.log('3 🦇')

 // Update the current question and answer
    global.db.data.chats[m.chat].quiz= {
              ...global.db.data.chats[m.chat].quiz,
      "cp": Pergunta,
      "ca": Resposta,
      "cm": Motivo,
      "time": new Date().getTime(),
      loading: false
    };
    
     if (selectedCategoryIndex == 11 || selectedCategory == 'Matematica') {
     global.db.data.chats[m.chat].quiz.math = true;
    } else {
     global.db.data.chats[m.chat].quiz.math = false;
    }
    // Send the question
  
    await m.reply(`$ ./quiz.py -c ${selectedCategory} 
> ‎ 
> [*] ${Pergunta}
> ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
> ‎ 
${optionsString} 
> ‎  
> ❬❬𝖤𝖮𝖥`);

    // Update the last question time after sending a new question
    
    // Additional code specific to your application logic can go here...
    // For example, you might want to handle user responses or perform other actions.
  
  }
 
  }
  else if(global.db.data.chats[m.chat].quiz.modo==true){
  console.log('modo xp trur')
  
    
    if(global.db.data.chats[m.chat].quiz!= null) {
 
    global.db.data.chats[m.chat].quiz.pergunta = JSON.parse(global.db.data.chats[m.chat].quiz.pergunta) 
    const { Pergunta, XP, Money, Pontos, Opcoes, Resposta, Motivo } =
    global.db.data.chats[m.chat].quiz.pergunta;
    const optionsString = Object.entries(Opcoes)
      .map(([key, value]) => `> ${key}: ${value}`)
      .join("\n");
    global.db.data.chats[m.chat].quiz.perguntaAndamento = true
    
    
    let qid = await m.reply(`$ ./quiz.py -c ${selectedCategory} 
> ‎ 
> [*] ${Pergunta}
> ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
> ‎ 
${optionsString}
> ‎  
> ❬❬𝖤𝖮𝖥`);

 // Update the current question and answer
    global.db.data.chats[m.chat].quiz= {
      ...global.db.data.chats[m.chat].quiz,
      "cp": Pergunta,
      "ca": Resposta,
      "cm": Motivo,
            "xp": XP,
     "pontos": Pontos,
        "mony": Money,
      "id": qid.id,
      "time": new Date().getTime(),
      loading:false
    };
    
     if (selectedCategoryIndex == 11 || selectedCategory == 'Matematica') {
     global.db.data.chats[m.chat].quiz.math = true;
    } else {
     global.db.data.chats[m.chat].quiz.math = false;
    }
    
    console.log("on quiz  "+ global.db.data.chats[m.chat].quiz)
    // Send the question
    

    // Update the last question time after sending a new question
    
    // Additional code specific to your application logic can go here...
    // For example, you might want to handle user responses or perform other actions.
  
  }
  else {
    
    global.db.data.chats[m.chat].quiz.pergunta = JSON.parse(global.db.data.chats[m.chat].quiz.pergunta)
    const { Pergunta, XP, Money, Pontos, Opcoes, Resposta, Motivo} =
    global.db.data.chats[m.chat].quiz.pergunta;
    const optionsString = Object.entries(Opcoes)
      .map(([key, value]) => `> ${key}: ${value}`)
      .join("\n");
    global.xppergunta[m.chat]= true
 // Update the current question and answer
    console.log("test" + global.db.data.chats[m.chat].quiz.modo)
    // Send the question
  global.db.data.chats[m.chat].quiz.perguntaAndamento = true
  
  


  
   let qid = await m.reply(`$ ./quiz.py -c ${selectedCategory} 
> ‎ 
> [*] ${Pergunta}
> ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
> ‎ 
${optionsString}
> ‎  
> ❬❬𝖤𝖮𝖥`);

global.db.data.chats[m.chat].quiz = {
        ...global.db.data.chats[m.chat].quiz,
  "math":false,
      "cp": Pergunta,
      "ca": Resposta,
      "cm": Motivo,
            "xp": XP,
     "pontos": Pontos,
        "mony": Money,
      "id": qid.id,
      "time": new Date().getTime(),
     loading: false
    };
    
    
     if (selectedCategoryIndex == 11 || selectedCategory == 'Matematica') {
     global.db.data.chats[m.chat].quiz.math = true;
    } else {
     global.db.data.chats[m.chat].quiz.math = false;
    }
    console.log("on quiz  "+ global.db.data.chats[m.chat].quiz.id)
    
  }
   //fim estado pergunta
  } // fim elseif if competitivo
  

 

         
return !0
  } catch (error) {
      console.log('erro !!!!! ')
      console.log('///////////////// ')
      console.log(error)
    sendSystemErrorAlert(global.db.data.chats[m.chat].language);
  }
   
}



getRobot(global.db.data.chats[m.chat].quiz.historico, categories[text -1])

  

}
    
    
   else if (text.includes("placar")) {
console.log(global.db.data.chats[m.chat].jogadores)
  if (!global.db.data.chats[m.chat].jogadores) {
    global.db.data.chats[m.chat].jogadores = {};
  }
  let players = global.db.data.chats[m.chat].users
  
let sortedPlayers

console.log(m.chat)
console.log("CHAT")
console.log("teste inicio -------+")
console.log(players)
console.log("teste fim--------+")
const users = participants.map((u) => conn.decodeJid(u.id));
  
  

  console.log(players);
  console.log("acima e topjogadores")
  let formattedMessage = `
┌──[ 𝗥𝝣𝝠𝗣𝗘𝗥 𝑣${vs} ]──[~/ϙυιȥ] 
└─► cat ranking.md
`;
let mentionedId = [];

  // Extract keys, sort by xp in descending order, and limit to top 5
  const top5Users = Object.keys(players)
    .sort((a, b) => players[b].pontos - players[a].pontos)
    .slice(0, 5);

  
  top5Users.forEach((key) => {
    const { pontos, name } = players[key];
    mentionedId.push(key);

    formattedMessage += `. . . . . . . . . . . . . 
> [+] @${key.split('@')[0]} 
> 𝛌 ${pontos} ${global.db.data.chats[m.chat].language === 'en' ? '𝙥𝙤𝙞𝙣𝙩𝙨' : '𝙥𝙤𝙣𝙩𝙤𝙨'}

`;
  })

  

// Example usage

console.log('Mentioned IDs:', mentionedId);

conn.sendMessage(m.chat, { text: formattedMessage, mentions: mentionedId});

// Reset mentionedId for the next cycle
mentionedId = [];
  
  players = {}


  }

    
 
 
else {


   throw quizHelp
}
}
}

  
  

handler.help = ['curiosidades'];
handler.tags = ['tools'];
handler.command = ['quiz']

export default handler;
