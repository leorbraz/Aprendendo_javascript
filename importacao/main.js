
const { gets, print } = require ('./funcoes_auxiliares');

//const funcoes = require ('./funcoes_auxiliares');  // importando as funcoes de outro arquivo js

//console.log(funcoes.gets()); 

//const numeroSorteados = [];

const quandtidadeAlunos = gets();
let maiorValorEncontrado = 0;

for (let i = 0; i < quandtidadeAlunos; i++) {
    const numeroSorteado = gets();
     if (numeroSorteado > maiorValorEncontrado){
        maiorValorEncontrado = numeroSorteado;
     }
}

/*let maiorValor = 0;

for (let i = 0; i < numeroSorteados.length; i++) {
    const numeroSorteado = numeroSorteados[i];
    if (numeroSorteado > maiorValor){
        maiorValor = numeroSorteado;
    }
    
}*/

//print(numeroSorteados);
print(maiorValorEncontrado);