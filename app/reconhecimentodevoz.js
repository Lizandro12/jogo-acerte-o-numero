const elementoChute = document.querySelector("#chute");  
  
window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = "pt-Br";
recognition.start();

recognition.addEventListener("result", onSpeak);

function onSpeak( event){
    const chute = event.results[0][0].transcript;
    exibeChuteNaTela(chute);
    verificaValorValidoChute(chute);

};

function exibeChuteNaTela(chute){
        elementoChute.innerHTML = `
            <div>Você falou:</div>
            <span class = "box" >${chute}</span>
        `
};

recognition.addEventListener("end", () => recognition.start());
