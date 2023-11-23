const precoCombustivel = 5.79;
const gasto_por_km = 12;
const distancia_em_km = 1580;

const litrosConsumidos = distancia_em_km / gasto_por_km;
const valorGasto = litrosConsumidos * precoCombustivel;

console.log(valorGasto.toFixed(2));