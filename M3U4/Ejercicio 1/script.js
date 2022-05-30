const cuadrados = document.querySelectorAll("div")
const html = document.querySelector("html")
const colores = ["#95b8f6", "#fdfd96", "#fdcae1"]

cuadrados.forEach((cuadrado, i) => {
    cuadrado.style.backgroundColor = colores[i]
    cuadrado.addEventListener('click', ()=> {
        html.style.backgroundColor = cuadrado.style.backgroundColor;
    })
})