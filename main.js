const $cambiarInterruptor = document.getElementById("cambiarInterruptor");
const $cambiarFoco = document.getElementById("cambiarFoco");
const $switche = document.querySelector(".switch");

function cambiarImagenes() {
    if($cambiarFoco.src.match("./img/encendido-1.png") && $cambiarInterruptor.src.match("/img/on-or.png")){
        $cambiarFoco.src = "./img/apagado-1.png";
        $cambiarInterruptor.src = "./img/off-or.png";
    } else {
    $cambiarFoco.src = "/img/encendido-1.png";
    $cambiarInterruptor.src = "/img/on-or.png"
    }
}

$switche.addEventListener("click", cambiarImagenes)