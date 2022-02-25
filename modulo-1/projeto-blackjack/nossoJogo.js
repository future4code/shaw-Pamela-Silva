if (confirm("Seja bem vindos ao jogo de Blackjackl\n Quer iniciar uma nova rodada?")) {
 const naipe = ["copas", "Paus", "Ouros","Espadas"]
 const pegarCartas = [A, 2, 3, 4, 5, 6, 7, 8, 9, 10, J , Q, K]
 const valor = [pegarCartas.naipe]
   let computadorCartas= [] 
   computadorCartas.push(pegarCarta())
   computadorCartas.push(pegarCarta())
   let usuarioCarta = []
   usuarioCarta.push(pegarCarta())
   usuarioCarta.push(pegarCarta())
   
}
while (computadorCartas[0].texto.includes("A") && usuarioCarta[1].texto.includes("A")) { 
   computadorCartas[0] =  pegarCarta()
   computadorCartas[1] = pegarCarta()
 }
 while (usuarioCarta[0].texto.includes("A") && computadorCartas[1].texto.includes ("A"){
   cartaUsuario[0] = pegarCarta() 
   cartaUsuario[1] =pegarCarta()
}
const computadorPontos = computadorcartas[0].valor + computadorCartas[1].valor
const usuarioPontos = usuarioCarta [0] + usuarioCarta [1].valor
let jogada = true
while (usuarioPontos <= 21 && jogada) {
    let mensagem = ""
    for (i = 0; i < usuarioCarta.length; i++){
   mensagem + = ${usuarioCarta[i].texto}
   }
   if (confirm('Suas cartas são' ${mensagem}. 'A carta revelada do computador é' ${computadorCartas[0].texto},'\n Deseja comprar mais uma carta')){
    usuarioCarta.push(pegarCarta())
    usuarioPontos + = usuarioCarta[usuarioCarta.length - 1].valor
   } else {
      jogada = false
   }
}   
while (computadorPontos < usuarioPontos && usuarioPontos <= 21){
     computadorCartas.push(pegarCarta())
}     
     computadorPontos + = computadorCartas[computadorCartas.length -1].valor
     let resultado = ""
     let usuarioMensagem = ""
     let computadorMensagem = ""
     if (usuarioPontos > 21 || computadorPontos <= 21 && > usuarioPontos){
        resutado = "O computador ganhou."
      } else if (usuarioPontos === computadorPontos){
         resultado = "O usuario eo computador empataram."
      } else{
         resutado = "O usuario ganhou."
      }
      for(carta of computadorcartas){
         usuarioMensagem + = ${carta.texto}
      }
      for(carta of usuarioCarta){
         computadorMensagem + = ${carta.texto}
      }
      alert(`Usuário - cartas:` + usuarioMensagem + `- Pomtuação:` + usuarioPontos+`
      `\nComputador - cartas: + computadorMensagem + `- Pontuação` + computadorPontos +
      \n + resultado )
}else {
   alert("O jogo acabou!");
}