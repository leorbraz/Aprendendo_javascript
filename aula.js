

const numero = 0;

const numeroDivisivelPor5 = (numero % 5) === 0;
console.log(numeroDivisivelPor5);

if (numero == 0) {
    console.log("Inválido.");
} 
else if (numeroDivisivelPor5) {
    console.log("Sim");
} 
else {
    console.log("Não");
}

