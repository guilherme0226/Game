let numSec = Math.floor(Math.random()*10) +1;
console.log(numSec);

function start() {

let palpite = parseInt(document.getElementById("chute").value);


if(numSec == palpite){
    document.getElementById("batata").innerText = "Acertou Miseravi!";
    document.getElementById("cabra").src = "https://alusolda.com.br/wp-content/uploads/2018/02/atributos-de-um-2.jpg";
    acerto.currentTime = 0;
    acerto.play();
}else{
    document.getElementById("batata").innerText = "Errou!";
    document.getElementById("cabra").src = "https://wallpapers.com/images/hd/naruto-uzumaki-crying-y5po3bycwb1pjh4y.jpg";
    erro.currentTime = 0;
    erro.play();
} 
}