
/* Função para definir nomes. */

function sayMyName(name) {
    console.log("Seu nome é: " + name);
}

sayMyName("Leonardo");

/* Função para achar potência de um número. */

function quadrado (valor){
    return valor * valor;
}

console.log(quadrado(10));

/* Função para incrementar porcentagem de juros num determinado valor. */

function incrementarJuros(valor, percentualJuros) {
    const valorDeAcrescimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrescimo;
}

console.log(incrementarJuros(100, 10));
console.log(incrementarJuros(100, 20));