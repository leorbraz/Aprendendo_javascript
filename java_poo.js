
class Pessoa {
    nome;
    idade;
    anoNascimento;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoNascimento = 2022 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos.`);
    }
}

const vitor = new Pessoa('Vitor', 25);
//vitor.nome = 'Vitor J Guerra';
//vitor.idade = 25;
//vitor.descrever();

const renan = new Pessoa('Renan', 30);
//renan.nome = 'Renan J Guerra';
//renan.idade = 28;
//renan.descrever();

console.log(vitor);

//const atributo = 'idade';

//console.log(pessoa[`nome`]);

//pessoa.nome = 'Leor';
//pessoa.idade = 30;

//pessoa.descrever();

/*leonardo.altura = 1.71;

delete leonardo.nome;

console.log(leonardo);*/

/*console.log('nome: ' + leonardo.nome);
console.log('idade: ' + leonardo.idade);
console.log(leonardo);*/
