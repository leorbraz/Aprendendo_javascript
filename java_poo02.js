class Pessoa{
    nome;
    peso;
    altura;


    constructor (nome, peso, altura) {
        this.nome = nome
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc (){
        return this.peso / (Math.pow(this.altura , 2)); 
    }



    classificarImc(){
        const imc = this.calcularImc();
        if (imc < 18.5){
            return ("Abaixo do peso.");
        }
        else if (imc >= 18.5 && imc < 25){
            return ("Peso normal.");
        }
        else if (imc >= 25 && imc < 30){
            return ("Acima do peso.");
        }
        else if (imc >= 30 && imc <= 40){
            return ("Obeso.");
        }
        else{
            return ("Obesidade grave.");
        }
    }
}

const leo = new Pessoa('Leonardo', 80, 1.71);
console.log(leo.calcularImc());
console.log(leo.classificarImc());

const rany = new Pessoa('Rany', 65, 1.70);
console.log(rany.calcularImc());
console.log(rany.classificarImc());
