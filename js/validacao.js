function verificaSeOChutePossuiUmValorValido (chute){
    const numero =+ chute;
    console.log('realizando validação: ' + chute);
    if(numeroValido(numero)){
        elementoChute.innerHTML += '<div>Valor Inválido</div>';
        return
    }
    if(numeroMaiorOuMenorQueOPermitido(numero)){
        elementoChute.innerHTML += `<div> Número inválido, fale um número entre ${menorValor} e ${maiorValor}. </div>`;
        return
    }
    if(numero === numeroSorteado){
        document.body.innerHTML = `<h2>Você acertou!!</h2>
        <h3>O número secreto era : ${numeroSorteado}</h3>
        <button id="jogar-novamente" class="btn-jogar">
            Jogar Novamente
        </button>`; 
        
    }else if(numero > numeroSorteado){
        elementoChute.innerHTML += '<div>O número secreto é <i>↓</i></div>'
    }else if(numero < numeroSorteado){
        elementoChute.innerHTML += '<div>O número secreto é <i>&#11014;</i></div>'      
    }
}


function numeroValido(numero){
    return Number.isNaN(numero);
}

function numeroMaiorOuMenorQueOPermitido(numero){
    return(numero < menorValor || numero > maiorValor);
          
}


document.body.addEventListener('click', event =>{
    if(event.target.id == 'jogar-novamente'){
        window.location.reload();
    }
 });