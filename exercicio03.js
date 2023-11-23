
function aplicarDesconto(valor, desconto){
    return (valor - (valor * (desconto / 100)));
}

function aplicarJuros(valor, juros){
    return (valor + (valor * (juros / 100)));
}

const precoEtiqueta = 100;
const formaPagamento = 3;

if (formaPagamento === 1){
    console.log(aplicarDesconto(precoEtiqueta, 10));
}
else if (formaPagamento === 2){
     console.log(aplicarDesconto(precoEtiqueta, 15));
}
else if (formaPagamento === 3){
    console.log('Pagará o valor de ' + precoEtiqueta + ' reais em duas parcelas de ' + precoEtiqueta / 2 + ' reais.'); 
}
else if (formaPagamento === 4){
    console.log(aplicarJuros(precoEtiqueta, 10));
}