

console.log('carreguei sortear numero');


const menorValor = 1;
const maiorValor = 1000;

const elementoMenorValor = document.getElementById('menor');
const elementoMaiorValor = document.getElementById('maior');



elementoMenorValor.innerHTML = menorValor;
elementoMaiorValor.innerHTML = maiorValor;

function geraNumero(){
    return parseInt(Math.random() *  (menorValor - maiorValor - 1) + (maiorValor + 1));
}
const numeroSorteado = geraNumero();





console.log(numeroSorteado);