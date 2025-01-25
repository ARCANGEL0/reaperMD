
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────
import {gpt} from 'gpti'
import JSON5 from 'json5'
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
    let id = m.chat;
    let currentQuestion = "";
let currentAnswer = "";




if (!text) {
    

    const categoryList = categories.map((category, index) => `> ${usedPrefix + command} ${index + 1} - ${category}`).join('\n');


    const quizHelp = global.idioma === 'en' ?
  
      `┌──[ BYΓΞSΞC ]─[~]─[${date}] 
└─ $ node quiz.mjs --help
> . . . . . . . . . . . . . . . . . . . . . . .
> 𝘏𝘦𝘺, 𝘬𝘪𝘥. 𝘞𝘢𝘯𝘵 𝘵𝘰 𝘱𝘶𝘵 𝘺𝘰𝘶𝘳 𝘬𝘯𝘰𝘸𝘭𝘦𝘥𝘨𝘦 𝘵𝘰 𝘵𝘩𝘦 𝘵𝘦𝘴𝘵? 
> 𝘛𝘩𝘦𝘯 𝘱𝘪𝘤𝘬 𝘢 𝘯𝘶𝘮𝘣𝘦𝘳 𝘧𝘳𝘰𝘮 𝘵𝘩𝘦 𝘤𝘢𝘵𝘦𝘨𝘰𝘳𝘪𝘦𝘴 𝘣𝘦𝘭𝘰𝘸 𝘢𝘯𝘥 𝘥𝘪𝘷𝘦 𝘪𝘯.  
> ‎ 
> 𝘐𝘧 𝘺𝘰𝘶𝘳 𝘮𝘪𝘯𝘥 𝘪𝘴 𝘣𝘭𝘢𝘯𝘬 𝘢𝘯𝘥 𝘺𝘰𝘶 𝘯𝘦𝘦𝘥 𝘵𝘩𝘦 𝘢𝘯𝘴𝘸𝘦𝘳, 𝘫𝘶𝘴𝘵 𝘶𝘴𝘦 𝘵𝘩𝘦 𝘤𝘰𝘮𝘮𝘢𝘯𝘥 '.𝘲𝘶𝘪𝘻 𝘳'. 𝘉𝘶𝘵 𝘭𝘦𝘵’𝘴 𝘣𝘦 𝘩𝘰𝘯𝘦𝘴𝘵, 𝘨𝘪𝘷𝘪𝘯𝘨 𝘶𝘱 𝘰𝘯 𝘵𝘩𝘪𝘯𝘬𝘪𝘯𝘨 𝘪𝘴 𝘢𝘯 𝘢𝘳𝘵 𝘵𝘩𝘢𝘵 𝘧𝘦𝘸 𝘮𝘢𝘴𝘵𝘦𝘳.
> ‎ 
[*] ʟᴏᴀᴅɪɴɢ. . . .
━━━━━━━━━━━━━━━━━━━━━━━━
${categoryList}
> ‎ 
> >>EOF<<
  ` :
     `┌──[ BYΓΞSΞC ]─[~]─[${date}] 
  └─ $ node quiz.mjs --help
> . . . . . . . . . . . . . . . . . . . . . . .
> 𝘌𝘪, 𝘨𝘢𝘳𝘰𝘵𝘰. 𝘘𝘶𝘦𝘳 𝘤𝘰𝘭𝘰𝘤𝘢𝘳 𝘴𝘦𝘶𝘴 𝘤𝘰𝘯𝘩𝘦𝘤𝘪𝘮𝘦𝘯𝘵𝘰𝘴 à 𝘱𝘳𝘰𝘷𝘢?
> 𝘌𝘯𝘵ã𝘰, 𝘦𝘴𝘤𝘰𝘭𝘩𝘦 𝘶𝘮 𝘯ú𝘮𝘦𝘳𝘰 𝘥𝘢𝘴 𝘤𝘢𝘵𝘦𝘨𝘰𝘳𝘪𝘢𝘴 𝘢𝘣𝘢𝘪𝘹𝘰 𝘦 𝘴𝘦 𝘫𝘰𝘨𝘢. 
> ‎ 
> 𝘚𝘦 𝘢 𝘴𝘶𝘢 𝘮𝘦𝘯𝘵𝘦 𝘦𝘴𝘵𝘪𝘷𝘦𝘳 𝘦𝘮 𝘣𝘳𝘢𝘯𝘤𝘰 𝘦 𝘷𝘰𝘤ê 𝘱𝘳𝘦𝘤𝘪𝘴𝘢𝘳 𝘥𝘢 𝘳𝘦𝘴𝘱𝘰𝘴𝘵𝘢, é 𝘴ó 𝘶𝘴𝘢𝘳 𝘰 𝘤𝘰𝘮𝘢𝘯𝘥𝘰 '.𝘲𝘶𝘪𝘻 𝘳'. 𝘔𝘢𝘴, 𝘤𝘰𝘯𝘷𝘦𝘯𝘩𝘢𝘮𝘰𝘴, 𝘥𝘦𝘴𝘪𝘴𝘵𝘪𝘳 𝘥𝘦 𝘱𝘦𝘯𝘴𝘢𝘳 é 𝘶𝘮𝘢 𝘢𝘳𝘵𝘦 𝘲𝘶𝘦 𝘱𝘰𝘶𝘤𝘰𝘴 𝘥𝘰𝘮𝘪𝘯𝘢𝘮.
> ‎ 
[*] ᴄᴀʀʀᴇɢᴀɴᴅᴏ . . . .
━━━━━━━━━━━━━━━━━━━━━━━━
${categoryList}
> ‎ 
> >>EOF<<` 
 
  
    throw categoryList
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
`> [!] 𝙷𝚎𝚢 𝚔𝚒𝚍𝚍𝚘, 𝚢𝚘𝚞'𝚛𝚎 𝚐𝚘𝚒𝚗' 𝚝𝚘𝚘 𝚏𝚊𝚜𝚝. 𝚈𝚘𝚞'𝚛𝚎 𝚜𝚎𝚗𝚍𝚒𝚗𝚐 𝚝𝚘𝚘 𝚖𝚊𝚗𝚢 𝚙𝚊𝚌𝚔𝚎𝚝𝚜 𝚝𝚘 𝚝𝚑𝚎 𝚑𝚘𝚜𝚝 𝚊𝚗𝚍 𝚜𝚝𝚊𝚗𝚍𝚒𝚗𝚐 𝚝𝚑𝚎𝚛𝚎 𝚠𝚒𝚝𝚑 𝟷𝟶𝟶% 𝚕𝚘𝚜𝚜. 𝚁𝚎𝚕𝚊𝚡 𝚔𝚒𝚍, 𝚊𝚗𝚍 𝚠𝚊𝚒𝚝 𝚊𝚋𝚘𝚞𝚝 ${remainingTimeInSeconds} 𝚜𝚎𝚌𝚘𝚗𝚍𝚜`
:
`> [!] 𝙴𝚒, 𝚐𝚊𝚛𝚘𝚝𝚘, 𝚟𝚘𝚌𝚎 𝚎𝚜𝚝𝚊 𝚒𝚗𝚍𝚘 𝚛𝚊𝚙𝚒𝚍𝚘 𝚍𝚎𝚖𝚊𝚒𝚜. 𝙴𝚜𝚝𝚊 𝚎𝚗𝚟𝚒𝚊𝚗𝚍𝚘 𝚖𝚞𝚒𝚝𝚘𝚜 𝚙𝚊𝚌𝚘𝚝𝚎𝚜 𝚙𝚊𝚛𝚊 𝚘 𝚑𝚘𝚜𝚝 𝚎 𝚏𝚒𝚌𝚊𝚗𝚍𝚘 𝚕𝚊 𝚌𝚘𝚖 𝟷𝟶𝟶% 𝚍𝚎 𝚙𝚎𝚛𝚍𝚊. 𝚁𝚎𝚕𝚊𝚡𝚊, 𝚐𝚊𝚛𝚘𝚝𝚘, 𝚎 𝚎𝚜𝚙𝚎𝚛𝚊 𝚌𝚎𝚛𝚌𝚊 𝚍𝚎 ${remainingTimeInSeconds} 𝚜𝚎𝚐𝚞𝚗𝚍𝚘𝚜.`
    return m.reply(timing)
  } 
  
if (global.db.data.chats[m.chat].quiz.modo && global.db.data.chats[m.chat].quiz.perguntaAndamento) {
   
const awaitNew  = global.db.data.chats[m.chat].language === 'en' ? 
`> [!] 𝙷𝚎𝚢 𝚔𝚒𝚍𝚍𝚘, 𝚍𝚘𝚗'𝚝 𝚐𝚘 𝚊𝚛𝚘𝚞𝚗𝚍 𝚜𝚔𝚒𝚙𝚙𝚒𝚗𝚐 𝚝𝚑𝚎 𝚚𝚞𝚎𝚜𝚝𝚒𝚘𝚗𝚜. 𝙰𝚗𝚜𝚠𝚎𝚛 𝚝𝚑𝚎 𝚕𝚊𝚜𝚝 𝚘𝚗𝚎 𝙸 𝚐𝚊𝚟𝚎 𝚢𝚘𝚞 𝚏𝚒𝚛𝚜𝚝 𝚋𝚎𝚏𝚘𝚛𝚎 𝙸 𝚐𝚎𝚗𝚎𝚛𝚊𝚝𝚎 𝚊𝚗𝚘𝚝𝚑𝚎𝚛 𝚚𝚞𝚎𝚜𝚝𝚒𝚘𝚗.`
:
`> [!] 𝙴𝚒, 𝚐𝚊𝚛𝚘𝚝𝚘, 𝚗𝚊𝚘 𝚏𝚒𝚚𝚞𝚎 𝚙𝚞𝚕𝚊𝚗𝚍𝚘 𝚊𝚜 𝚙𝚎𝚛𝚐𝚞𝚗𝚝𝚊𝚜. 𝚁𝚎𝚜𝚙𝚘𝚗𝚍𝚊 𝚊 𝚞𝚕𝚝𝚒𝚖𝚊 𝚚𝚞𝚎 𝚎𝚞 𝚝𝚎 𝚍𝚎𝚒 𝚙𝚛𝚒𝚖𝚎𝚒𝚛𝚘, 𝚊𝚗𝚝𝚎𝚜 𝚚𝚞𝚎 𝚎𝚞 𝚐𝚎𝚛𝚎 𝚘𝚞𝚝𝚛𝚊 𝚙𝚎𝚛𝚐𝚞𝚗𝚝𝚊.`
  

return m.reply(awaitNew)
  }
  if(global.db.data.chats[m.chat].quiz.loading===true){

    const onWait  = global.db.data.chats[m.chat].language === 'en' ? 
`> [!] 𝙷𝚎𝚢 𝚔𝚒𝚍, 𝚠𝚊𝚒𝚝 𝚏𝚘𝚛 𝚖𝚎 𝚝𝚘 𝚐𝚎𝚗𝚎𝚛𝚊𝚝𝚎 𝚝𝚑𝚎 𝚚𝚞𝚎𝚜𝚝𝚒𝚘𝚗 𝚋𝚎𝚏𝚘𝚛𝚎 𝚊𝚜𝚔𝚒𝚗𝚐 𝚏𝚘𝚛 𝚊𝚗𝚘𝚝𝚑𝚎𝚛 𝚘𝚗𝚎. 𝙰𝚛𝚎 𝚢𝚘𝚞 𝚊𝚗𝚡𝚒𝚘𝚞𝚜`
:
`> [!] 𝚀𝚞𝚊𝚕𝚎 𝚐𝚊𝚛𝚘𝚝𝚘, 𝚎𝚜𝚙𝚎𝚛𝚊 𝚎𝚞 𝚐𝚎𝚛𝚊𝚛 𝚊 𝚙𝚎𝚛𝚐𝚞𝚗𝚝𝚊 𝚊𝚗𝚝𝚎𝚜 𝚍𝚎 𝚖𝚎 𝚙𝚎𝚍𝚒𝚛 𝚘𝚞𝚝𝚛𝚊, 𝚎𝚜𝚝𝚊 𝚊𝚗𝚜𝚒𝚘𝚜𝚘?`
  

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
      const response = await fetch('http://89.117.96.108:8330/aiQuiz', {
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
      rawResponse = assistantResponse.replace(/```json\s*/i, '').replace(/```/g, '').trim();

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
    `> [!] 𝙷𝚎𝚢 𝚔𝚒𝚍𝚍𝚘, 𝚢𝚘𝚞'𝚛𝚎 𝚐𝚘𝚒𝚗' 𝚝𝚘𝚘 𝚏𝚊𝚜𝚝. 𝚈𝚘𝚞'𝚛𝚎 𝚜𝚎𝚗𝚍𝚒𝚗𝚐 𝚝𝚘𝚘 𝚖𝚊𝚗𝚢 𝚙𝚊𝚌𝚔𝚎𝚝𝚜 𝚝𝚘 𝚝𝚑𝚎 𝚑𝚘𝚜𝚝 𝚊𝚗𝚍 𝚜𝚝𝚊𝚗𝚍𝚒𝚗𝚐 𝚝𝚑𝚎𝚛𝚎 𝚠𝚒𝚝𝚑 𝟷𝟶𝟶% 𝚕𝚘𝚜𝚜. 𝚁𝚎𝚕𝚊𝚡 𝚔𝚒𝚍, 𝚊𝚗𝚍 𝚠𝚊𝚒𝚝 𝚊𝚋𝚘𝚞𝚝 ${remainingTimeInSeconds} 𝚜𝚎𝚌𝚘𝚗𝚍𝚜`
    :
    `> [!] 𝙴𝚒, 𝚐𝚊𝚛𝚘𝚝𝚘, 𝚟𝚘𝚌𝚎 𝚎𝚜𝚝𝚊 𝚒𝚗𝚍𝚘 𝚛𝚊𝚙𝚒𝚍𝚘 𝚍𝚎𝚖𝚊𝚒𝚜. 𝙴𝚜𝚝𝚊 𝚎𝚗𝚟𝚒𝚊𝚗𝚍𝚘 𝚖𝚞𝚒𝚝𝚘𝚜 𝚙𝚊𝚌𝚘𝚝𝚎𝚜 𝚙𝚊𝚛𝚊 𝚘 𝚑𝚘𝚜𝚝 𝚎 𝚏𝚒𝚌𝚊𝚗𝚍𝚘 𝚕𝚊 𝚌𝚘𝚖 𝟷𝟶𝟶% 𝚍𝚎 𝚙𝚎𝚛𝚍𝚊. 𝚁𝚎𝚕𝚊𝚡𝚊, 𝚐𝚊𝚛𝚘𝚝𝚘, 𝚎 𝚎𝚜𝚙𝚎𝚛𝚊 𝚌𝚎𝚛𝚌𝚊 𝚍𝚎 ${remainingTimeInSeconds} 𝚜𝚎𝚐𝚞𝚗𝚍𝚘𝚜.`
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
> ‎  
> >>EOF<<`);

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
> ‎  
> >>EOF<<`);

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
> ‎  
> >>EOF<<`);

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
> ‎  
> >>EOF<<`);

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
      `┌──[robot@bytesec]──[~/ϙυιȥ] 
└─► get_status -e
> ‎ 
[!] ᴛʜɪꜱ ɢᴀᴍᴇ ᴀʟʀᴇᴀᴅʏ ᴇɴᴅᴇᴅ, ᴋɪᴅ
> ‎ 
` : 
      `┌──[robot@bytesec]──[~/ϙυιȥ] 
└─► get_status -e
> ‎ 
[!] ᴇꜱꜱᴇ ᴊᴏɢᴏ ᴊᴀ ᴀᴄᴀʙᴏᴜ, ɢᴀʀᴏᴛᴏ
> ‎ 
`


        await m.reply(quizEnd)
      }
  
     else if(global.db.data.chats[m.chat].quiz.cp)
     
      {

        const getAnswer = global.db.data.chats[m.chat].language === 'en' ? 
        `┌──[robot@bytesec]──[~/ϙυιȥ] 
└─► get_reply -n

[+] 𝙲𝙾𝚁𝚁𝙴𝙲𝚃 𝙾𝙿𝚃𝙸𝙾𝙽: ${global.db.data.chats[m.chat].quiz.ca} 
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
> ‎ 
> ${global.db.data.chats[m.chat].quiz.cm}
> ‎` : 
        `┌──[robot@bytesec]──[~/ϙυιȥ] 
└─► get_reply -n

[+] 𝙾𝙿𝙲𝙰𝙾 𝙲𝙾𝚁𝚁𝙴𝚃𝙰: ${global.db.data.chats[m.chat].quiz.ca} 
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
> ‎ 
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
    
    else if(text=== 'apagar'){
      m.react("✅")
      delete global.db.data.chats[m.chat].quiz
    }
    else if(text.length>3) {
   
       
  
        
   // Assuming you have these variables defined somewhere in your script
if(!global.db.data.chats[m.chat].quiz.modo){
  global.db.data.chats[m.chat].quiz.modo =false
}

// Your existing code...

const selectedCategory = text

global.db.data.chats[m.chat].quiz.categoria = selectedCategory



  const timeDifference = currentTime - global.db.data.chats[m.chat].quiz.time;
 
  if (!global.db.data.chats[m.chat].quiz.modo && timeDifference < delayBetweenQuestions) {
    // If the user attempts to ask a question too soon, provide a warning
    const remainingTime = delayBetweenQuestions - timeDifference;
    
    const remainingTimeInSeconds = Math.ceil(remainingTime / 1000);


const timing  = global.db.data.chats[m.chat].language === 'en' ? 
`> [!] 𝙷𝚎𝚢 𝚔𝚒𝚍𝚍𝚘, 𝚢𝚘𝚞'𝚛𝚎 𝚐𝚘𝚒𝚗' 𝚝𝚘𝚘 𝚏𝚊𝚜𝚝. 𝚈𝚘𝚞'𝚛𝚎 𝚜𝚎𝚗𝚍𝚒𝚗𝚐 𝚝𝚘𝚘 𝚖𝚊𝚗𝚢 𝚙𝚊𝚌𝚔𝚎𝚝𝚜 𝚝𝚘 𝚝𝚑𝚎 𝚑𝚘𝚜𝚝 𝚊𝚗𝚍 𝚜𝚝𝚊𝚗𝚍𝚒𝚗𝚐 𝚝𝚑𝚎𝚛𝚎 𝚠𝚒𝚝𝚑 𝟷𝟶𝟶% 𝚕𝚘𝚜𝚜. 𝚁𝚎𝚕𝚊𝚡 𝚔𝚒𝚍, 𝚊𝚗𝚍 𝚠𝚊𝚒𝚝 𝚊𝚋𝚘𝚞𝚝 ${remainingTimeInSeconds} 𝚜𝚎𝚌𝚘𝚗𝚍𝚜`
:
`> [!] 𝙴𝚒, 𝚐𝚊𝚛𝚘𝚝𝚘, 𝚟𝚘𝚌𝚎 𝚎𝚜𝚝𝚊 𝚒𝚗𝚍𝚘 𝚛𝚊𝚙𝚒𝚍𝚘 𝚍𝚎𝚖𝚊𝚒𝚜. 𝙴𝚜𝚝𝚊 𝚎𝚗𝚟𝚒𝚊𝚗𝚍𝚘 𝚖𝚞𝚒𝚝𝚘𝚜 𝚙𝚊𝚌𝚘𝚝𝚎𝚜 𝚙𝚊𝚛𝚊 𝚘 𝚑𝚘𝚜𝚝 𝚎 𝚏𝚒𝚌𝚊𝚗𝚍𝚘 𝚕𝚊 𝚌𝚘𝚖 𝟷𝟶𝟶% 𝚍𝚎 𝚙𝚎𝚛𝚍𝚊. 𝚁𝚎𝚕𝚊𝚡𝚊, 𝚐𝚊𝚛𝚘𝚝𝚘, 𝚎 𝚎𝚜𝚙𝚎𝚛𝚊 𝚌𝚎𝚛𝚌𝚊 𝚍𝚎 ${remainingTimeInSeconds} 𝚜𝚎𝚐𝚞𝚗𝚍𝚘𝚜.`
    return m.reply(timing)
  } 
  
if (global.db.data.chats[m.chat].quiz.modo && global.db.data.chats[m.chat].quiz.perguntaAndamento) {
   
const awaitNew  = global.db.data.chats[m.chat].language === 'en' ? 
`> [!] 𝙷𝚎𝚢 𝚔𝚒𝚍𝚍𝚘, 𝚍𝚘𝚗'𝚝 𝚐𝚘 𝚊𝚛𝚘𝚞𝚗𝚍 𝚜𝚔𝚒𝚙𝚙𝚒𝚗𝚐 𝚝𝚑𝚎 𝚚𝚞𝚎𝚜𝚝𝚒𝚘𝚗𝚜. 𝙰𝚗𝚜𝚠𝚎𝚛 𝚝𝚑𝚎 𝚕𝚊𝚜𝚝 𝚘𝚗𝚎 𝙸 𝚐𝚊𝚟𝚎 𝚢𝚘𝚞 𝚏𝚒𝚛𝚜𝚝 𝚋𝚎𝚏𝚘𝚛𝚎 𝙸 𝚐𝚎𝚗𝚎𝚛𝚊𝚝𝚎 𝚊𝚗𝚘𝚝𝚑𝚎𝚛 𝚚𝚞𝚎𝚜𝚝𝚒𝚘𝚗.`
:
`> [!] 𝙴𝚒, 𝚐𝚊𝚛𝚘𝚝𝚘, 𝚗𝚊𝚘 𝚏𝚒𝚚𝚞𝚎 𝚙𝚞𝚕𝚊𝚗𝚍𝚘 𝚊𝚜 𝚙𝚎𝚛𝚐𝚞𝚗𝚝𝚊𝚜. 𝚁𝚎𝚜𝚙𝚘𝚗𝚍𝚊 𝚊 𝚞𝚕𝚝𝚒𝚖𝚊 𝚚𝚞𝚎 𝚎𝚞 𝚝𝚎 𝚍𝚎𝚒 𝚙𝚛𝚒𝚖𝚎𝚒𝚛𝚘, 𝚊𝚗𝚝𝚎𝚜 𝚚𝚞𝚎 𝚎𝚞 𝚐𝚎𝚛𝚎 𝚘𝚞𝚝𝚛𝚊 𝚙𝚎𝚛𝚐𝚞𝚗𝚝𝚊.`
  

return m.reply(awaitNew)
  }
  if(global.db.data.chats[m.chat].quiz.loading===true){

    const onWait  = global.db.data.chats[m.chat].language === 'en' ? 
`> [!] 𝙷𝚎𝚢 𝚔𝚒𝚍, 𝚠𝚊𝚒𝚝 𝚏𝚘𝚛 𝚖𝚎 𝚝𝚘 𝚐𝚎𝚗𝚎𝚛𝚊𝚝𝚎 𝚝𝚑𝚎 𝚚𝚞𝚎𝚜𝚝𝚒𝚘𝚗 𝚋𝚎𝚏𝚘𝚛𝚎 𝚊𝚜𝚔𝚒𝚗𝚐 𝚏𝚘𝚛 𝚊𝚗𝚘𝚝𝚑𝚎𝚛 𝚘𝚗𝚎. 𝙰𝚛𝚎 𝚢𝚘𝚞 𝚊𝚗𝚡𝚒𝚘𝚞𝚜`
:
`> [!] 𝚀𝚞𝚊𝚕𝚎 𝚐𝚊𝚛𝚘𝚝𝚘, 𝚎𝚜𝚙𝚎𝚛𝚊 𝚎𝚞 𝚐𝚎𝚛𝚊𝚛 𝚊 𝚙𝚎𝚛𝚐𝚞𝚗𝚝𝚊 𝚊𝚗𝚝𝚎𝚜 𝚍𝚎 𝚖𝚎 𝚙𝚎𝚍𝚒𝚛 𝚘𝚞𝚝𝚛𝚊, 𝚎𝚜𝚝𝚊 𝚊𝚗𝚜𝚒𝚘𝚜𝚘?`
  

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
      const response = await fetch('http://89.117.96.108:8330/aiQuiz', {
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
    `> [!] 𝙷𝚎𝚢 𝚔𝚒𝚍𝚍𝚘, 𝚢𝚘𝚞'𝚛𝚎 𝚐𝚘𝚒𝚗' 𝚝𝚘𝚘 𝚏𝚊𝚜𝚝. 𝚈𝚘𝚞'𝚛𝚎 𝚜𝚎𝚗𝚍𝚒𝚗𝚐 𝚝𝚘𝚘 𝚖𝚊𝚗𝚢 𝚙𝚊𝚌𝚔𝚎𝚝𝚜 𝚝𝚘 𝚝𝚑𝚎 𝚑𝚘𝚜𝚝 𝚊𝚗𝚍 𝚜𝚝𝚊𝚗𝚍𝚒𝚗𝚐 𝚝𝚑𝚎𝚛𝚎 𝚠𝚒𝚝𝚑 𝟷𝟶𝟶% 𝚕𝚘𝚜𝚜. 𝚁𝚎𝚕𝚊𝚡 𝚔𝚒𝚍, 𝚊𝚗𝚍 𝚠𝚊𝚒𝚝 𝚊𝚋𝚘𝚞𝚝 ${remainingTimeInSeconds} 𝚜𝚎𝚌𝚘𝚗𝚍𝚜`
    :
    `> [!] 𝙴𝚒, 𝚐𝚊𝚛𝚘𝚝𝚘, 𝚟𝚘𝚌𝚎 𝚎𝚜𝚝𝚊 𝚒𝚗𝚍𝚘 𝚛𝚊𝚙𝚒𝚍𝚘 𝚍𝚎𝚖𝚊𝚒𝚜. 𝙴𝚜𝚝𝚊 𝚎𝚗𝚟𝚒𝚊𝚗𝚍𝚘 𝚖𝚞𝚒𝚝𝚘𝚜 𝚙𝚊𝚌𝚘𝚝𝚎𝚜 𝚙𝚊𝚛𝚊 𝚘 𝚑𝚘𝚜𝚝 𝚎 𝚏𝚒𝚌𝚊𝚗𝚍𝚘 𝚕𝚊 𝚌𝚘𝚖 𝟷𝟶𝟶% 𝚍𝚎 𝚙𝚎𝚛𝚍𝚊. 𝚁𝚎𝚕𝚊𝚡𝚊, 𝚐𝚊𝚛𝚘𝚝𝚘, 𝚎 𝚎𝚜𝚙𝚎𝚛𝚊 𝚌𝚎𝚛𝚌𝚊 𝚍𝚎 ${remainingTimeInSeconds} 𝚜𝚎𝚐𝚞𝚗𝚍𝚘𝚜.`
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
> ‎  
> >>EOF<<`);

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
> ‎  
> >>EOF<<`);

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
> ‎  
> >>EOF<<`);

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
> ‎  
> >>EOF<<`);

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
┌──[robot@bytesec]──[~/ϙυιȥ] 
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
  const categoryList = categories
    .map((category, index) => `┃ ${usedPrefix + command} ${index + 1} - ${category}`)
    .join('\n');

    const helpMenu = global.db.data.chats[m.chat].language === 'en' ?
    `┌──[ BYΓΞSΞC ]─[~]─[${date}] 
 └─ $ node quiz.mjs --help
> . . . . . . . . . . . . . . . . . . . . . . .
> 𝘌𝘪, 𝘨𝘢𝘳𝘰𝘵𝘰. 𝘘𝘶𝘦𝘳 𝘤𝘰𝘭𝘰𝘤𝘢𝘳 𝘴𝘦𝘶𝘴 𝘤𝘰𝘯𝘩𝘦𝘤𝘪𝘮𝘦𝘯𝘵𝘰𝘴 à 𝘱𝘳𝘰𝘷𝘢?
> 𝘌𝘯𝘵ã𝘰, 𝘦𝘴𝘤𝘰𝘭𝘩𝘦 𝘶𝘮 𝘯ú𝘮𝘦𝘳𝘰 𝘥𝘢𝘴 𝘤𝘢𝘵𝘦𝘨𝘰𝘳𝘪𝘢𝘴 𝘢𝘣𝘢𝘪𝘹𝘰 𝘦 𝘴𝘦 𝘫𝘰𝘨𝘢. 
> ‎ 
> 𝘚𝘦 𝘢 𝘴𝘶𝘢 𝘮𝘦𝘯𝘵𝘦 𝘦𝘴𝘵𝘪𝘷𝘦𝘳 𝘦𝘮 𝘣𝘳𝘢𝘯𝘤𝘰 𝘦 𝘷𝘰𝘤ê 𝘱𝘳𝘦𝘤𝘪𝘴𝘢𝘳 𝘥𝘢 𝘳𝘦𝘴𝘱𝘰𝘴𝘵𝘢, é 𝘴ó 𝘶𝘴𝘢𝘳 𝘰 𝘤𝘰𝘮𝘢𝘯𝘥𝘰 '.𝘲𝘶𝘪𝘻 𝘳'. 𝘔𝘢𝘴, 𝘤𝘰𝘯𝘷𝘦𝘯𝘩𝘢𝘮𝘰𝘴, 𝘥𝘦𝘴𝘪𝘴𝘵𝘪𝘳 𝘥𝘦 𝘱𝘦𝘯𝘴𝘢𝘳 é 𝘶𝘮𝘢 𝘢𝘳𝘵𝘦 𝘲𝘶𝘦 𝘱𝘰𝘶𝘤𝘰𝘴 𝘥𝘰𝘮𝘪𝘯𝘢𝘮.
> ‎ 
[*] ᴄᴀʀʀᴇɢᴀɴᴅᴏ . . . .
━━━━━━━━━━━━━━━━━━━━━━━━
${categoryList}
> ‎ 
> >>EOF<<` 
    :
     `┌──[ BYΓΞSΞC ]─[~]─[${date}] 
└─ $ node quiz.mjs --help
> . . . . . . . . . . . . . . . . . . . . . . .
> 𝘏𝘦𝘺, 𝘬𝘪𝘥. 𝘞𝘢𝘯𝘵 𝘵𝘰 𝘱𝘶𝘵 𝘺𝘰𝘶𝘳 𝘬𝘯𝘰𝘸𝘭𝘦𝘥𝘨𝘦 𝘵𝘰 𝘵𝘩𝘦 𝘵𝘦𝘴𝘵? 
> 𝘛𝘩𝘦𝘯 𝘱𝘪𝘤𝘬 𝘢 𝘯𝘶𝘮𝘣𝘦𝘳 𝘧𝘳𝘰𝘮 𝘵𝘩𝘦 𝘤𝘢𝘵𝘦𝘨𝘰𝘳𝘪𝘦𝘴 𝘣𝘦𝘭𝘰𝘸 𝘢𝘯𝘥 𝘥𝘪𝘷𝘦 𝘪𝘯.  
> ‎ 
> 𝘐𝘧 𝘺𝘰𝘶𝘳 𝘮𝘪𝘯𝘥 𝘪𝘴 𝘣𝘭𝘢𝘯𝘬 𝘢𝘯𝘥 𝘺𝘰𝘶 𝘯𝘦𝘦𝘥 𝘵𝘩𝘦 𝘢𝘯𝘴𝘸𝘦𝘳, 𝘫𝘶𝘴𝘵 𝘶𝘴𝘦 𝘵𝘩𝘦 𝘤𝘰𝘮𝘮𝘢𝘯𝘥 '.𝘲𝘶𝘪𝘻 𝘳'. 𝘉𝘶𝘵 𝘭𝘦𝘵’𝘴 𝘣𝘦 𝘩𝘰𝘯𝘦𝘴𝘵, 𝘨𝘪𝘷𝘪𝘯𝘨 𝘶𝘱 𝘰𝘯 𝘵𝘩𝘪𝘯𝘬𝘪𝘯𝘨 𝘪𝘴 𝘢𝘯 𝘢𝘳𝘵 𝘵𝘩𝘢𝘵 𝘧𝘦𝘸 𝘮𝘢𝘴𝘵𝘦𝘳.
> ‎ 
[*] ʟᴏᴀᴅɪɴɢ. . . .
━━━━━━━━━━━━━━━━━━━━━━━━
${categoryList}
> ‎ 
> >>EOF<<
 `

 
   throw helpMenu
}
}
}

  
  

handler.help = ['curiosidades'];
handler.tags = ['tools'];
handler.command = ['quiz']

export default handler;
