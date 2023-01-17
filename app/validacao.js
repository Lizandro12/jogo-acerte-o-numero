function verificaValorValidoChute(chute){
    const numero = +chute;

    if(chuteForInvalido(numero)){
        elementoChute.innerHTML += '<div>Valor Inválido</div>';
    };

    if(numeroMaiorOuMenorPermitido(numero)){
        elementoChute.innerHTML += `<div>Valor inválido: O número secreto precisa estar entre ${menorValor} e ${maiorValor}</div>`;
    };

    if(numero === numeroSecreto){
        document.body.innerHTML = `
            <h2>Você acertou</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>

            <button id ="jogar-novamente" class ="btn-jogar">Jogar Novamente</button>
        `
    }else if(numero > numeroSecreto){

        elementoChute.innerHTML += `
        <div>O número secreto é menor</div> 
        `
    }else{
        elementoChute.innerHTML += `
        <div>O número secreto é maior</div> 
        `
    }

/*     if( chuteForInvalido(numero)){

        if(chute.toUpperCase() === "GAME OVER"){

            document.body.innerHTML =`
                <h2>Game Over!!!</h2>
                <h3>Pressione o botão para jogar novamente</h3>  
                <button id ="jogar-novamente" class ="btn-jogar">Jogar Novamente</button>  
            `
            
            document.body.style.backgroundColor = "black";
        }
    } */
}

function chuteForInvalido(numero){
    return Number.isNaN(numero);
}

function numeroMaiorOuMenorPermitido(numero){
    return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener("click", (e)=>{
    if(e.target.id == "jogar-novamente"){
        window.location.reload();

    }
})