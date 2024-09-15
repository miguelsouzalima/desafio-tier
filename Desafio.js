// Criação das Variaveis em Array

let heroi = [{nome: "Miguel", xp: 10500}]

// ----- ~~~*Criando o Laço de Repetição
for (let repetiçao = 0; repetiçao < heroi.length; repetiçao ++)
    
   {
       
    let nomeHeroi = heroi[repetiçao].nome
    let xpHeroi = heroi[repetiçao].xp
    let tier = ''
   

 // ----- ~~~* Estrutura de Decisão* ----- ~~~*


 if (xpHeroi <= 1000) { Tier="Ferro"}

 else if (xpHeroi >= 1001 && xpHeroi < 2000)
  {tier ="Bronze"}
 else if (xpHeroi >= 2001 && xpHeroi < 5000)
    {tier ="Prata"}
 else if (xpHeroi >= 5001 && xpHeroi < 7000)
    {tier ="Ouro"}
 else if (xpHeroi >= 7001 && xpHeroi < 8000)
    {tier ="Platina"}
 else if (xpHeroi >= 8001 && xpHeroi < 9000)
    {tier ="Ascendente"}
 else if (xpHeroi >= 9001 && xpHeroi < 10000)
    {tier ="Imortal"}
 else if (xpHeroi >= 10001)
  {tier ="Radiante"}
// ----- ~~~*Mensagem de Saida* ----- ~~~*
console.log("O Heroi " + nomeHeroi + ", Está no Tier: " + tier)

}