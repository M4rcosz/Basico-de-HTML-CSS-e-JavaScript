// Calculadora
const botaoProjCalculadora = document.createElement("button")
botaoProjCalculadora.style = "background-image: linear-gradient(to left, red,black);"
botaoProjCalculadora.setAttribute("class", "btn")
botaoProjCalculadora.innerHTML = "Calculadora"
document.querySelector("#paginaExCalculadora").appendChild(botaoProjCalculadora)
botaoProjCalculadora.addEventListener("click", () => {
    window.location = "./projeto_calculadora/index.html"
})
// Bolinhas
const botaoProjBolinhas = document.createElement("button")
botaoProjBolinhas.setAttribute("class", "btn")
botaoProjBolinhas.innerHTML = "Gerador de Bolinhas"
document.querySelector("#paginaExBolinhas").appendChild(botaoProjBolinhas)
botaoProjBolinhas.addEventListener("click", () => {
    window.location = "./projeto_bolinhas/index.html"
})
// f cores aleatórias
const rgb = () => {
    for (i = 0; i < 10; i++) {
        let r = (Math.floor(Math.random() * 255))
        let g = (Math.floor(Math.random() * 255))
        let b = (Math.floor(Math.random() * 255))
        element.style = `text-shadow: 2px 1px 2px black, -2px 1px 2px black, 0px -2px 2px black;font-weight:bold;background-color: rgb(${r}, ${g}, ${b})`
    }
}
let element = botaoProjBolinhas
const intevalo = setInterval(rgb, 200)
// document.body.style.backgroundColor = `rgb(${rbg()},10,10)`
// 