
class Carro{
    marca;
    cor;
    gastoMedioPorKm;
    

    constructor (marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm; 
    }

//const distancia = 500;
//const precoCombustivel = 5.79;
//const valorGasto = ((distancia / gastoMedioPorKm) * precoCombustivel);

    calcularGastoPercurso(distancia, precoCombustivel){
        return distancia * this.gastoMedioPorKm * precoCombustivel;
    }
}

const uno = new Carro('Fiat', 'Prata', 1/15);
console.log(uno);
console.log(uno.calcularGastoPercurso(70, 5.79));

/*const celta = new Carro('chevrolet', 'branco', 1/14);
console.log(celta);
console.log(celta.calcularGastoPercurso(70, 5.79));*/