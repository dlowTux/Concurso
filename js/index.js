let c1 = document.getElementById("c1")
let c2 = document.getElementById("c2")
let c3 = document.getElementById("c3")
let c4 = document.getElementById("c4")

let titulo = document.getElementById("exampleModalLabel");
let cantidad = 0;
let suma = 0
let video
//Variables para el cronometro
let contador_s = 0;
let contador_m = 0;
let crono;
let contenido = document.getElementById("contenido");
//Esta variable es para actualizar el total acumulado
const total = document.getElementById("total_cantidad");
//Boton de datos 
const boton_terminado = document.getElementById("btnsumar");
//Modal
var myModal = new bootstrap.Modal(document.getElementById('exampleModal'))

const ReloadVideo = () => {

    contenido.innerHTML = `
    <video controls autoplay id="conteo" class="video">
                        <source src="img/Conta.mp4">
                    </video>`
    video = document.getElementById("conteo")

    video.addEventListener("play", () => {
        contador_s = 0;
        contador_m = 0;
        Cronometro()
    })
    video.addEventListener("pause", () => {
        clearInterval(crono)

    })
}

c1.addEventListener("click", async (e) => {

    cantidad = 500;
    ReloadVideo()
    CambiarTitulo();
})


c2.addEventListener("click", async (e) => {
    cantidad = 200;
    ReloadVideo()

    CambiarTitulo();

})
c3.addEventListener("click", async (e) => {
    cantidad = 100;
    ReloadVideo()

    CambiarTitulo();

})
c4.addEventListener("click", async (e) => {
    cantidad = 50;
    ReloadVideo()

    CambiarTitulo();

})
boton_terminado.addEventListener("click", () => {
    suma += cantidad;
    total.innerText = "Acumulado $" + suma
    myModal.toggle()

    video.pause()
    alert("Ganaste " + suma)
})
const CambiarTitulo = () => {
    titulo.innerText = "Cantidad " + cantidad
}
const Cronometro = () => {

    const minu = 3
    const segun = 7
    crono = setInterval(() => {
        if (contador_s == 60) {
            contador_s = 0;
            contador_m++;
            if (contador_m == 0) {
                contador_m = 0;
            }
        }
        contador_s++;
        console.log(contador_m + ":" + contador_s)
        if (minu == contador_m && segun == contador_s) {

            alert('Perdiste')
        }
    }, 1000)
}
