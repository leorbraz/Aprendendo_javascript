
const pessoa = {
    nome: 'Leonardo Ribeiro',
    idade: 25,

    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};

const atributo = 'idade';

console.log(pessoa[`nome`]);

//pessoa.nome = 'Leor';
//pessoa.idade = 30;

//pessoa.descrever();

/*leonardo.altura = 1.71;

delete leonardo.nome;

console.log(leonardo);*/

/*console.log('nome: ' + leonardo.nome);
console.log('idade: ' + leonardo.idade);
console.log(leonardo);*/
