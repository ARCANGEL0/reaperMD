
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

import fetch from 'node-fetch';
import translate from '@vitalets/google-translate-api' 
import {gpt} from 'gpti'
let handler = async (m, { conn, text, usedPrefix, command, isOwner }) => {
 
 
 const prompt = `Se comporte estritamente como um dicionario de múltiplos idiomas, nao responda como uma pessoa ou assistente, nao forneça textos ou coisas do tipo. O usuário ira lhe fornecer uma palavra podendo ser em qualquer idioma e voce irá tetornar as definições daquela palavra, sinônimos e exemplos de frase como no seguinte exemplo, SIGA ESTE MODELO DE MENSAGEM APENAS. SÓ RESPONDA ASSIM!!!: 
" Significado de *Pejorativo*

adj.
1. Que é depreciativo;
2. Diz-se do que tem conotação negativa ou possui um significado descortês ou ofensivo para aquilo a que se refere;
3. Que manifesta desprezo; que humilha;
4. Que manifesta desaprovação, crítica ou repreensão.
(Etm. pejorar + tivo)
──┅❖┅──
Sinónimos de *Pejorativo*
depreciativo, insultuoso, ultrajante, vilipendioso
──┅❖┅──
Exemplo de frase:
⌬ As vidas marginalizadas estão cada vez mais no foco das atenções, mas muitas vezes ainda retratadas de modo raso ou *pejorativo*
⌬ Algumas pessoas nos tratam de um modo *Pejorativo* que me causa repulsa na maioria das vezes."
Você agora irá agir como um dicionario, e responder a palavra a definição da palavra que o usuario lhe digitar seguindo este modelo de mensagem como exemplo, fornecendo definição da palavra, sinonimos e exemplos de frase.
`
if (!text) throw `${langTOGGLE['smsAvisoMG']()}❖─┅──┅ 𝑨𝒉, 𝑪𝒂𝒓𝒐 𝒎𝒐𝒓𝒕𝒂𝒍, 𝒄𝒐𝒏𝒕𝒆-𝒎𝒆 𝒒𝒖𝒂𝒍 𝒑𝒂𝒍𝒂𝒗𝒓𝒂 𝒆 𝒇𝒓𝒖𝒕𝒐 𝒅𝒆 𝒗𝒐𝒔𝒔𝒂 𝒄𝒖𝒓𝒊𝒐𝒔𝒊𝒅𝒂𝒅𝒆 𝒒𝒖𝒆 𝒍𝒉𝒆 𝒅𝒊𝒓𝒆𝒊 𝒔𝒖𝒂 𝒅𝒆𝒇𝒊𝒏𝒊𝒄𝒂𝒐 𝒆 𝒔𝒊𝒈𝒏𝒊𝒇𝒊𝒄𝒂𝒅𝒐 🥀 ─┅──┅❖
𝙀𝙓:\n*${usedPrefix + command} sublime
*${usedPrefix + command} léxico 
*${usedPrefix + command} arcaico`
 
 
 const url = 'https://vihangayt.me/tools/mathssolve?q=';
 
         try {
  
  
     let history = [
    {
      role: 'assistant',
      content: prompt
    },
    {
      role: 'user',
      content: text
    }
  ]


gpt.v2({
    messages: history,
    markdown: false,
    stream: false
},async (err, data) => {
    if(err != null){
        console.log(err);
    } else {
        console.log(data);
        
      await  m.reply(`─┅──┅─┅──┅❖ 👁️ ❖─┅──┅─┅──┅
  ${data.message}   
─┅──┅──┅──┅❖❖─┅──┅─┅──┅─┅─`)
                
                  
    }
});

                
                
                
                
                m.react("🌕")
                

            
            
         }
         catch(e){
  console.log(e)
  m.react("💀")
  m.reply(`╭─❖ ❌ *Um erro inesperado ocorreu* ❖─
𝑵𝒂 𝒆𝒔𝒄𝒖𝒓𝒊𝒅𝒂𝒐 𝒔𝒆𝒑𝒖𝒍𝒄𝒓𝒂𝒍 𝒅𝒆 𝒎𝒆𝒖 𝒄𝒐𝒅𝒊𝒈𝒐, 𝒐 𝒄𝒐𝒎𝒂𝒏𝒅𝒐 𝒇𝒂𝒍𝒉𝒐𝒖 𝒄𝒐𝒎𝒐 𝒖𝒎𝒂 𝒑𝒓𝒆𝒄𝒆 𝒏𝒂𝒐 𝒂𝒕𝒆𝒏𝒅𝒊𝒅𝒂.

𝑼𝒔𝒆 *.report* 𝒑𝒂𝒓𝒂 𝒓𝒆𝒍𝒂𝒕𝒂𝒓 𝒆𝒔𝒕𝒂 𝒎𝒊𝒔𝒆𝒓𝒂𝒗𝒆𝒍 𝒇𝒂𝒍𝒉𝒂.
*╰┅─❖ ⸸ ❖─┅*`)
}
 


};
handler.level=1
handler.command = ['def']
export default handler;