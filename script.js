let numSec = Math.floor(Math.random()*10) +1;
console.log(numSec);

let acerto = document.getElementById("acerto");
let erro = document.getElementById("erro");

function star() {
    document.getElementById("batata").innerText = "Aguardando resultado...";
    document.getElementById("cabra").src = "https://media.tenor.com/MasOG_oGxBsAAAAM/itachi-uchiha-fortnite.gif";
    load.currentTime = 0;
    load.play();

    setTimeout(verificarresulatd0, 5005);
}

function start() {
console.log("text");
    document.getElementById("batata").innerText = "Aguardando resultado...";
    document.getElementById("cabra").src = "https://media.tenor.com/MasOG_oGxBsAAAAM/itachi-uchiha-fortnite.gif";

    setTimeout(verificarResultado, 5000);

}

function verificarResultado() {
    let palpite = parseInt(document.getElementById("chute").value);

    if(numSec == palpite){
    document.getElementById("batata").innerText= "Acertou Miseravi!";
    document.getElementById("cabra").src= "https://www.gifcen.com/wp-content/uploads/2023/07/obito-gif-6.gif";
    acerto.currentTime= 0;
    acerto.play();
    }else {
        document.getElementById("batata").innerText = "Errou";
        document.getElementById("cabra").src=  "https://media1.tenor.com/m/vGb2WN6W2kEAAAAd/naruto-funny-face.gif";
        erro.currentTime= 0;
        erro.play();
    } 

}

function reset() {
    window.location.reload();
}

