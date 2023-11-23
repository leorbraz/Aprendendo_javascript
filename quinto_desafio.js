const precoNormal = 100;
const formaPagamento = 4;

if (formaPagamento === 1){
    const precoDebito = (precoNormal - (precoNormal * 0.10));
    console.log(precoDebito);
}
else if (formaPagamento === 2){
    const precoPix = (precoNormal - (precoNormal * 0.15));
    console.log(precoPix);
}
else if (formaPagamento === 3){
    const precoParcelado2x = (precoNormal / 2); 
    console.log("Pagará em duas parcelas de: " + precoParcelado2x);
}
else if (formaPagamento === 4){
    const Parcelado_3x_ou_Mais = (precoNormal + (precoNormal * 0.10));
    console.log(Parcelado_3x_ou_Mais);
}