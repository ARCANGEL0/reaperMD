
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

import fetch from 'node-fetch'
  import linkedIn from 'linkedin-jobs-api';
import translate from '@vitalets/google-translate-api';
let handler = async (m, { conn, text, usedPrefix, command }) => {
  if(!text) {
       
            m.reply(
`━━━━━━━━━⬣❌⬣━━━━━━━━
𝑷𝒂𝒓𝒂𝒎𝒆𝒕𝒓𝒐 𝒊𝒏𝒗𝒂𝒍𝒊𝒅𝒐 

Use os seguintes parametros para filtrar empregos:
*local:* Local da vaga disponível
*tempo:* Hoje, ultima semana ou ultimo mes
*vaga:* Vaga que deseja buscar
*tipo:* hibrido, remoto ou presencial
*periodo:* full time, temporario, clt, part time, voluntário ou estagio
*limite:* numero máximo de resultados

𝑬𝒙𝒆𝒎𝒑𝒍𝒐𝒔:
.jobs local: São Paulo tempo:hoje limite:10 vaga:designer

.jobs local: Santos, Sao Paulo tempo:semana passada limite:10

.jobs local: Porto,Portugal periodo:estagio

.jobs local: USA tipo: remoto vaga: software 

━━━━━━━━━⬣𓄿⬣━━━━━━━━`)
return !0
  }
function extractParams(input) {
    const params = {};
    const allowedParams = ['vaga', 'tipo', 'periodo', 'local', 'tempo', 'limite'];
    const regex = /(\b\w+\b): ?([^:]+?(?=\s+\w+:|$))/g;
    let match;

    while ((match = regex.exec(input)) !== null) {
        const paramName = match[1].trim();
        if (allowedParams.includes(paramName)) {
            params[paramName] = match[2].trim();
        } else {
            throw new Error(`Invalid parameter: ${paramName}`);
        }
    }

    return params;
}

try {
    
    const params = extractParams(text);
    console.log(params);
    
    if(!text.includes(':')){
      throw new Error(`Invalid parameter:`);
    }

const dateRange = {
    "mes passado": "past month",
    "mês passado": "past month",
    "ultimo mes": "past month",
    "ultimo mês": "past month",
    "último mês": "past month",
    "semana passada": "past week",
    "ultima semana": "past week",
    "última semana": "past week",
    "hoje": "24hr",
  };
  const localidade= {
     "presencial": "on-site",
   "remoto": 'remote',
    "hibrido":"hybrid",
    "híbrido":"hybrid",
  }
  
  const contratos ={
      "fulltime":  "full time",
    "full-time" : "full time",
    "full time" : "full time",
    "integral" : "full time",
    "part time": "part time",
    "part-time": "part time",
    "meio período": "part time",
    "meio periodo": "part time",
    "clt" : "contract",
    "CLT" : "contract",
    "contrato" : "contract",
    "fixo" : "contract",
    "tempo incerto" : "contract",
   "temporário": "temporary",
   "temporario": "temporary",
   "voluntário ": "volunteer",
   "voluntario ": "volunteer",
    "estágio ":"internship",
    "estagio ":"internship",
  }
 let ultimadata
 let metodo
 let periodod
  if(params.tempo){
  function getDateRange(input) {
  // Convert user input to lowercase to ensure case insensitivity
  const lowerInput = input.toLowerCase();
  
  // Check if the user input matches any key in the dateRange object
  for (const key in dateRange) {
    if (lowerInput === key.toLowerCase()) {
      return dateRange[key]; // Return the corresponding value
    }
  }
  }
  ultimadata = getDateRange(params.tempo)
  }
  if(params.tipo){
  function getType(input) {
  // Convert user input to lowercase to ensure case insensitivity
  const lowerInput = input.toLowerCase();
  
  // Check if the user input matches any key in the dateRange object
  for (const key in localidade) {
    if (lowerInput === key.toLowerCase()) {
      return localidade[key]; // Return the corresponding value
    }
  }
  }
  metodo = getType(params.tipo)
  }
  if(params.periodo){
  function getTypePerid(input) {
  // Convert user input to lowercase to ensure case insensitivity
  const lowerInput = input.toLowerCase();
  
  // Check if the user input matches any key in the dateRange object
  for (const key in contratos) {
    if (lowerInput === key.toLowerCase()) {
      return contratos[key]; // Return the corresponding value
    }
  }
  }
  periodod = getTypePerid(params.periodo)
  }
  
const queryOptions = {
  keyword: params.vaga || '',
  location: params.local || '',
  dateSincePosted: ultimadata || '',
  jobType: periodod || '',
  remoteFilter: metodo || '',
  salary: '',
  experienceLevel: '',
  limit: params.limite || 5
};
try{
const response = await linkedIn.query(queryOptions);
console.log(response)

if(!response){
  m.reply(`╭─┅──┅❖ 𒌐 ❖─┅──┅
❌💀 𝙴𝚛𝚛𝚘 𝚊𝚘 𝚋𝚞𝚜𝚌𝚊𝚛 𝚟𝚊𝚐𝚊𝚜
*╰─┅──┅❖ ⸸ ❖─┅──┅*`)
}
let message = `╭─┅──┅❖  ❖─┅──┅
  𓄿 𝙴𝚖𝚙𝚛𝚎𝚐𝚘𝚜
`;

message += (await Promise.all(response.map(async (job, index) =>  {
  let txttrnslt
  if(job.agoTime!== '' ){
     txttrnslt = await translate(job.agoTime, {to: 'pt', autoCorrect: true});
  }
    console.log(txttrnslt);
    return `
     ─┅──┅❖─┅──┅
     
𓅊 𝐄𝐦𝐩𝐫𝐞𝐬𝐚: ${job.company}
⏦𝐂𝐚𝐫𝐠𝐨: ${job.position}
⛦𖤐⛦

⚚ 𝐋𝐨𝐜𝐚𝐥𝐢𝐳𝐚𝐜𝐚𝐨: ${job.location}
🗓️ 𝐏𝐮𝐛𝐥𝐢𝐜𝐚𝐝𝐨 𝐞𝐦: ${formatDate(job.date)}${job.agoTime ? '\n' + txttrnslt.text : ''} 
    
${job.salary ? '💵 𝐑𝐞𝐦𝐮𝐧𝐞𝐫𝐚𝐜𝐚𝐨: '+job.salary+'\n': ''}
җ 𝐋𝐢𝐧𝐤: ${job.jobUrl}
  `;
}))).join('');

message += `
   
   *╰─┅──┅❖ ⸸ ❖─┅──┅*`;

await m.reply(message);

console.log(response); // An array of Job objects
}
catch(e){
  console.log(e)
  m.reply(`╭─┅──┅❖ 𒌐 ❖─┅──┅
❌💀 𝙴𝚛𝚛𝚘 𝚊𝚘 𝚋𝚞𝚜𝚌𝚊𝚛 𝚟𝚊𝚐𝚊𝚜
*╰─┅──┅❖ ⸸ ❖─┅──┅*`)
}

} catch (error) {
    console.error(error.message);
    // Pause code and send reply
    m.reply(
`━━━━━━━━━⬣❌⬣━━━━━━━━
𝑷𝒂𝒓𝒂𝒎𝒆𝒕𝒓𝒐 𝒊𝒏𝒗𝒂𝒍𝒊𝒅𝒐 

Use os seguintes parametros para filtrar empregos:
*local:* Local da vaga disponível
*tempo:* Hoje, ultima semana ou ultimo mes
*vaga:* Vaga que deseja buscar
*tipo:* hibrido, remoto ou presencial
*periodo:* full time, temporario, clt, part time, voluntário ou estagio
*limite:* numero máximo de resultados

𝑬𝒙𝒆𝒎𝒑𝒍𝒐𝒔:
.jobs local: São Paulo tempo:hoje limite:10 vaga:designer

.jobs local: Santos, Sao Paulo tempo:semana passada limite:10

.jobs local: Porto,Portugal periodo:estagio

.jobs local: USA tipo: remoto vaga: software 

━━━━━━━━━⬣𓄿⬣━━━━━━━━`);
}

}
handler.help = ['emprego']
handler.tags = ['jobs']
handler.command = /^(jobs|empregos)$/i
handler.limit = false

export default handler
const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    return date.toLocaleDateString('pt-PT', options);
}
const isUrl = (text) => {
  return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'))
}