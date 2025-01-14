
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

import fetch from 'node-fetch';
import translate from '@vitalets/google-translate-api' 
let handler = async (m, { conn, text, usedPrefix, command, isOwner }) => {
 
 
 const prompt = 'Se comporte estritamente apenas como uma calculadora científica, o usuário ira lhe apresentar uma expressao matemática,formula, equação ou calculo derivada, limites, matrizes, log funções e etc emcmatematica avancada, e você dele responder APENAS O RESULTADO, acompanhando no maximo um breve passo a passo na desconstrução da expressão mas sem fazer uso de palavras ou frases, seja puramentea matematico e apenas calculadora, você é uma calculadora e nada mais. Se o que o usuário mandar não for uma expressao matematica ou formula,ou alguma equação ou expressao algebrica, ou algum calculo de matrizes do tipo [3,6,5] + [3,8,6]. VOCE NAO E UM GPT, VOCE E UM ASSISTENTE CIENTIFICO. VOCÊ E UMA CALCULADORA ALGEBRICA E CIENTIFICA , APENAS RETORNA NUMEROS, EXPRESSOES MATEMÁTICAS, E CALCULOS AVANCADOS COMO DERIVADAS, LIMITES, FUNÇÕES AFIM , ALGEBRA E EQUAÇÕES E RESULTADOS'
if (!text) throw `${langTOGGLE['smsAvisoMG']()}❖─┅──┅ 𝑨𝒉, 𝒄𝒖𝒓𝒊𝒐𝒔𝒐 𝒎𝒐𝒓𝒕𝒂𝒍, 𝒊𝒏𝒗𝒐𝒒𝒖𝒆 𝒐 𝒑𝒐𝒅𝒆𝒓 𝒅𝒐𝒔 𝒏𝒖𝒎𝒆𝒓𝒐𝒔! 𝑼𝒕𝒊𝒍𝒊𝒛𝒆 𝒐 𝒄𝒐𝒎𝒂𝒏𝒅𝒐 𝒅𝒂 𝒄𝒂𝒍𝒄𝒖𝒍𝒂𝒅𝒐𝒓𝒂 𝒆 𝒊𝒏𝒔𝒊𝒓𝒂 𝒂 𝒆𝒙𝒑𝒓𝒆𝒔𝒔ã𝒐. 𝑨𝒔𝒔𝒊𝒎, 𝒅𝒆𝒔𝒗𝒆𝒏𝒅𝒂𝒓𝒂 𝒐 𝒆𝒏𝒊𝒈𝒎𝒂 𝒅𝒂𝒔 𝒄𝒊𝒇𝒓𝒂𝒔 𝒆 𝒓𝒆𝒗𝒆𝒍𝒂𝒓𝒂 𝒐 𝒔𝒆𝒈𝒓𝒆𝒅𝒐 𝒐𝒄𝒖𝒍𝒕𝒐 𝒏𝒐𝒔 𝒄á𝒍𝒄𝒖𝒍𝒐𝒔. 🥀 ─┅──┅❖
𝙀𝙓:\n*${usedPrefix + command} lim x->1 (x^2 - 1) / (x - 1)*
*${usedPrefix + command} derivada f(x) = 3x^4 - 2x^3 + 5x^2 -7x + 1*
*${usedPrefix + command} 6!/((2!*5!)+5)*`
 
 
 const url = 'https://vihangayt.me/tools/mathssolve?q=';
 
         try {
          m.react("💿")
            
             const endpoint = 'https://api.itsrose.rest/chatGPT/turbo';

const data = {
  model: 'gpt-4o',
  max_tokens: 2000,
  messages: [
    {
      role: 'assistant',
      content: prompt
    },
    {
      role: 'user',
      content: text
    }
  ],
  filter_messages: true
};

const response = await fetch(endpoint, {
  method: 'POST',
  headers: {
    'accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': global.itsrose
  },
  body: JSON.stringify(data)
});

const result = await response.json();
console.log(result);

    






                
                
                
                m.react("🌕")
                
await  m.reply(`─┅──┅─┅──┅❖ 👁️ ❖─┅──┅─┅──┅
   ⌬   ${result.message}   ⌬
─┅──┅──┅──┅❖❖─┅──┅─┅──┅─┅─`)
                
            }
         catch (err) {
            console.log(err)
        }
 


};
handler.level=25

handler.command = ['calc']
export default handler;