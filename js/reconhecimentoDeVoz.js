window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

//instancia de reconhecimento
const recognition = new SpeechRecognition();
//pega a div do elemento chute
const elementoChute = document.getElementById('chute');

recognition.lang = "pt-br";
recognition.start();

recognition.addEventListener('result', onSpeak);



function onSpeak(e){
    console.log(e.target.lang);
    var chute = e.results[0][0].transcript;
    exibeChuteNaTela(chute);
    verificaSeOChutePossuiUmValorValido(chute);
    
}

function exibeChuteNaTela(chute){
    
    
    elementoChute.innerHTML = `
    <div>Você disse:</div>
    <span class="box">${chute}</span>`;

}

recognition.addEventListener('end', () => recognition.start());



