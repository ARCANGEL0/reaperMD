
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

/* By https://github.com/DIEGO-OFC/DORRAT-BOT-MD */

let handler = async (m, { conn, text}) => {

m.reply(` 
━━━⬣|𝙼𝚛. 𝚁𝚘𝚋𝚘𝚝|⬣━━━

_${pickRandom(global.poe)}_ 📜💀

 ━━━━━━━━━⬣⬣━━━━━━━━`)
}
handler.tags = ['frases']
handler.command = /^biografia|sobre/i
export default handler

function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]}


global.poe = [
  "Nasci em 19 de janeiro de 1809, em Boston, Massachusetts. Herdei uma sensibilidade aguçada e uma compreensão íntima da dor e da desolação, que iriam impregnar de maneira indelével a minha escrita.",
  "Estudei na Universidade de Virgínia, mas, devido ao meu pai ter me abandonado e a minha madrasta não ter condições financeiras de suportar meus estudos, acabei endividado e forçado a abandonar os mesmos.",
  "Em 1835, casei-me com Virginia Clemm, minha prima-irmã de apenas 13 anos de idade. Apesar da complexidade moral que tal união poderia suscitar nos espíritos mais puros, foi uma união cheia de amor e devoção que durou até a morte de Virginia, em 1847.\n A literatura foi meu refúgio e também minha paixão exuberante. Com uma escrita que mesclava melancolia e resplendor, tornei-me reconhecido tanto por minha prosa quanto por meus poemas. Não obstante, o reconhecimento tardio e o aprumo na solução de problemas estilísticos foram minha sina.",
  "Com obras como 'The Tell-Tale Heart', 'The Fall of the House of Usher' e 'The Masque of the Red Death', fui coroado como um dos progenitores da literatura de suspense e horror psicológico, que tantos corações aterrados tem incitado desde então.",
  "Apesar de meu aclamado pertencimento à temida e transgressora Contracultura dos Românticos Obscuros, no seio da comunidade literária eu me senti, muitas vezes, um deslocado. Tamanha sensibilidade e perspicácia podem ser sufocantes em um mundo ávido por vaidades e falsidades.",
  "Meu amor pela língua francesa e pelas tradições literárias europeias foi notório e influente para minha escrita, assim como meus estudos sobre o embebedar-se de focalizações enganosas, estruturas pervertidas e atmosferas angustiantes.",
  "Pese embora minhas intuições geniais, fui perseguido por um destino cruel, amargurado por um consumo exacerbado ao ópio e por uma lotação lamentável de considerações sombrias.",
  "Minha morte enfim veio. Encontrei meu derradeiro suspiro aos 40 e um anos de idade, em 7 de outubro de 1849, nas ruas de Baltimore, em circunstâncias misteriosas e não elucidadas até os dias de hoje. Cogita-se que minha morte tenha ocorrido devido a uma gangrena cerebral, mas a verdade irremediavelmente repousa nos abismos implacáveis da escuridão.",
  "Meus escritos, minha marca indelével, permanecem como testemunhas fidedignas de meu tormento e, simultaneamente, de meu tipo específico de beleza. Que meu legado seja uma gota sensível em meio à tempestade indiferente da existência."
  
  ,
  
    "Nasci em 19 de janeiro de 1809, na cidade de Boston, Estados Unidos. Fui o segundo filho de um casal de atores itinerantes, David Poe Jr. e Elizabeth Arnold Hopkins. Infelizmente, minha jornada neste mundo foi curta e triste, pois perdi meus pais ainda muito jovem e fui criado por John Allan, um rico tabaqueiro de Richmond.\n Embora tenha recebido uma educação privilegiada, meu espírito inquieto e insatisfeito não se encaixava em um mundo conformado. Em 1826, ingressei na Universidade da Virgínia, mas logo mergulhei na bebedeira e acabei me afastando das obrigações acadêmicas. Diante disso, meu tutor decidiu cortar minha mesada, o que me levou a abandonar a instituição.",

  "Ao longo dos anos, vivi uma vida errante e turbulenta, buscando minha identidade e lutando contra o infortúnio que me perseguia. Fui soldado, editor de jornal e escritor, sempre em busca do sublime, do belo, do macabro. Em 1835, casei-me com a minha prima Virginia Clemm que a altura possuia 13 anos, uma união conturbada e cheia de desafios.",

  "Foi somente no final da década de 1830 que comecei a alcançar um certo reconhecimento literário. Meus contos, frequentemente escuros e melancólicos, chamaram a atenção do público e dos críticos. Em 1845, finalmente, tive a chance de publicar meu poema mais famoso, 'O Corvo', que me tornou instantaneamente conhecido em todo o país e além-das-fronteiras.\n Porém, mesmo com o sucesso literário, minha vida estava repleta de tragédias e perdas. Minha amada esposa Virginia faleceu em 1847, vítima de tuberculose. Sua morte foi um golpe devastador para minha já instável saúde mental, e minha vida mergulhou em um abismo de solidão e desespero.",

  "Com o passar dos anos, minha saúde física e mental só piorou. Lutei contra a dependência de álcool e drogas, mas eles se transformaram em meus fiéis companheiros em minha jornada pelos corredores escuros da mente humana. Em 7 de outubro de 1849, aos 40 anos, fui encontrado delirando nas ruas de Baltimore e faleci pouco depois.\n Apesar de minha vida trágica e cheia de amarguras, meu legado como escritor persiste até hoje. Sou considerado o pai do romantismo obscuro e pioneiro nos gêneros do terror psicológico, do horror gótico e do romance policial. Meus contos, repletos de mistério e melancolia, continuam a intrigar e fascinar gerações após gerações, envolvendo-as em meu universo macabro e perturbador.",

  "Meu trabalho inspirou inúmeros autores e artistas ao longo dos séculos, deixando marcas profundas na literatura e na cultura pop. Minhas palavras, embora sombrias, são um retrato da condição humana, explorando os abismos mais profundos da alma e as tragédias que nos perseguem.\n Que a minha existência serva de inspiração para aquelus que buscam as profundezas do pensamento humano, que encontram beleza em meio à sombra e se deleitam com a melancolia da vida. Meu propósito foi e sempre será tocar as cordas do coração e da mente, deixando uma marca indelével nos anais da literatura mundial.",

 
]

