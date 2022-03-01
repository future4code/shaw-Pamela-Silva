/**Exercícios de interpretação de código
 1-A) Será impresso nome e o os apelidos.
 2-A) Será criado um novo array com os nomes que será impresso no cosole.
 3-A) Vai filtrar todo os nomes e apelidos retornando em true ou false.**/

 /**Exercícios de escrita de código
  1-A)**/
  const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ] 
 const nomeDosPets = pets.map((pets, indice, array) => {
    return pets.nome

/**B)**/
const petsRaca = pets.filter((pets)=>{
return pets.raca === "salsicha"
}).map((pets)=> console.log(pets.raca))

/**C)**/
const petsNome = pets.filter((pets)=>{
    return pets.raca === "Poodles"
    }).map((pets)=> console.log(["Você ganhou um cupom de desconto de 10% para tosar o/a" ${apets.nome}]))

/**2-A)**/
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]
 const nomeDosProdutos = produtos.map((produtos, indice, array) => {
    return produtos.nome

/**B)**/
const produtosEmPromocao = (preco,calculo) => {
    if (preco / 5){
        const resultado = preco/2
        calculo(resultado)
    }
produtosEmPromocao(2, (calculo) => {
    console.log(calculo)
})
    /**C)**/
const produtosBebidas = produtos.filter((produtos)=>{
    return produtos.categoria === "bebidas"
    }).map((produtos)=> console.log(produtos.categoria))
    
    /**D)**/
    const produtosMarca = produtos.filter((produtos)=>{
        return produtos.nome === "Ypê"
        }).map((produtos)=> console.log(produtos.nome))
/**E)**/
const produtosNomeEPreco = produtos.filter((produtos)=>{
    return produtos.nome === "ypê"    
    produtos.preco
}).map((produtos)=>console.log(['Compre' ${produtos.nome} 'por' ${produtos.preco}']))

