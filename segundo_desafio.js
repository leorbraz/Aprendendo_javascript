
const precoEtanol = 3.49;
const precoGasolina = 5.79;
const tipoCombustivel = 'Etanol';
const kmPorLitros = 10;
const distancia_em_km = 100;

const combustivelConsumido = distancia_em_km / kmPorLitros;

if (tipoCombustivel == 'Etanol') {
    valorGasto = combustivelConsumido * precoEtanol;
}
else {
    valorGasto = combustivelConsumido * precoGasolina;
}

console.log(valorGasto.toFixed(2));

