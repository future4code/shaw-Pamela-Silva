/**Exercícios de interpretação de código
1-A) Séra impresso a multiplicação de 2*5 e 10*5,(10)(50).
1-B) Não apareceria nada no console pois não receberá ess comando.
2-A) pediria para o usúario colocar um texto e serviria para deixar as letras minuscula e se tiver a palavra "cenoura" iria aparecer true se não false.
2-B) As três entradas vão dar o mesmo resutado todas com letras minusculas e o booleano true**/

/**Exercícios de escrita de código**/
/**1-A)**/
console.log("Eu sou Pâmela, tenho 23, moro em Senador Canedo e sou estudante")

/**2-B)**/
Eu sou [NOME], tenho [IDADE] anos, moro em [CIDADE] e sou [PROFISSÃO]
function mensagem (nome,idade,endereço,profissão){
    let Nome = "Pâmela"
    let idade = "23"
    let cidade = "Senador Canedo"
    let Profissao = "Estudante"
    return "Eu sou" + nome + "tenho" + idade + "anos" + "moro em" + cidade + "e sou" + profissão "."
}
console.log(mensagem(Pâmela, 23, Senador Canedo , Estudante))