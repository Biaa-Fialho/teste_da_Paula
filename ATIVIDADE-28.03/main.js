//-------Atividade Array
// 1. Faça um programa, seguindo os passos:
    
//a) Crie um array vazio e guarde-o em uma variável, chamada `tarefas`

const tarefas = [] 

//b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
    
const usuario00 = prompt("Digite uma tarefa que você precisa realizar hoje ")
const usuario01 = prompt("Digite a segunda tarefa que você precisa realizar hoje ")
const usuario02 = prompt("Digite a terceira tarefa que você precisa realizar hoje ")

// c) Imprima o array no console
    
tarefas.push(usuario00, usuario01, usuario02)
console.log(tarefas)

//d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 

const indice = prompt("Digite indice de uma das tarefas que você já realizou: ")
    
//e) Remova da lista o item de índice que o usuário escolheu.
    
tarefas.splice(indice-1 ,1)

//f) Imprima o array no console

console.log(tarefas)


// -------Atividade-----

// A) Escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome, a idade, endereço e uma profissão. Ela deve retornar uma string que unifique todas as informações da pessoa em uma só mensagem.

// Exemplo: Eu sou (nome), tenho (idade) anos, moro em (endereço) e sou (profissão).

function fraseN(nome, idade, endereco, profissao){
    console.log(`Eu sou, ${nome} , tenho ${idade} anos, moro em ${endereco} e sou ${profissao} .  `);
}
let meuNome = prompt("digite seu nome: ");
let minhaIdade = prompt("digite sua idade: ");
let meuEndereco = prompt("digite seu endereço: ");
let minhaProfissao = prompt("digite sua profissão: ");
fraseN(meuNome , minhaIdade , meuEndereco , minhaProfissao);


// B) Escreva uma função que receba 2 números como parâmentros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.

function  calcularSoma(numero01, numero02){
    const soma = numero01 + numero02;
    return soma;
}
console.log(calcularSoma(2, 4));

// C) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é **maior ou igual** ao segundo.

function  funcaoBooleano(numero001, numero002){
    const maiorIgual = numero001 >= numero002;
    return maiorIgual;
}
console.log(funcaoBooleano(2, 4));

// D) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não

function  funcaoPar(numero1){
    const numeroPar = numero1 % 2 === 0; 
 
    return numeroPar;
}
console.log(funcaoPar(7));

// E) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.

function  fraseTam(){
    const frase = prompt("Digite uma frase: ");

    console.log(frase.length);
    console.log(frase.toUpperCase());
}
fraseTam()


// F) Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão).
// Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento.b

function  calcularSom(numero01, numero02){
    const soma = numero01 + numero02
    return soma

}

function  calcularSub(numero1, numero2){
    const subtracao = numero1 - numero2
    return subtracao

}


function  calcularMul(numero001, numero002){
    const multiplicacao = numero001 * numero002
    return multiplicacao

}

function  calcularDiv(numero0001, numero0002){
    const divisao = numero0001 / numero0002
    return divisao

}
const numeros = parseInt(prompt("Digite um número: "));
const numero02 = parseInt(prompt("Digite outro número: "));
console.log(calcularSom(numeros, numero02));
console.log(calcularSub(numeros, numero02));
console.log(calcularMul(numeros, numero02));
console.log(calcularDiv(numeros, numero02));
