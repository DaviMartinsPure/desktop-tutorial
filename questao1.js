console.log("Estágio - Ribeirão Preto")// Dados a sequência Fibonacci

let numero1 = 0
let numero2 = 1

const quantidadeTermos = 10; 

console.log(numero1); 
console.log(numero2); 

for (let i = 2; i < quantidadeTermos; i++) {
    const proximoTermo = numero1 + numero2;

    console.log(proximoTermo);

    numero1 = numero2;
    numero2 = proximoTermo;
}








