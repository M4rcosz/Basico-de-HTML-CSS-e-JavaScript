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
    console.log("!")
    let r = []
    let g = []
    let b = []
    for (i = 0; i < 10; i++) {
        r.push(Math.floor(Math.random() * 255))
        g.push(Math.floor(Math.random() * 255))
        b.push(Math.floor(Math.random() * 255))
    }
    botaoProjBolinhas.style = `text-shadow: 2px 1px 2px rgb(${r[1]}, ${g[1]}, ${b[1]}), -2px 1px 2px rgb(${r[3]}, ${g[3]}, ${b[3]}), 0px -2px 2px rgb(${r[5]}, ${g[5]}, ${b[5]});font-weight:bold;background-image: linear-gradient(to  left, rgb(${r[0]}, ${g[0]}, ${b[0]}),rgb(${r[1]}, ${g[1]}, ${b[1]}),rgb(${r[2]}, ${g[2]}, ${b[2]}),rgb(${r[3]}, ${g[3]}, ${b[3]}),rgb(${r[4]}, ${g[4]}, ${b[4]}),rgb(${r[5]}, ${g[5]}, ${b[5]}),rgb(${r[6]}, ${g[6]}, ${b[6]}),rgb(${r[7]}, ${g[7]}, ${b[7]}),rgb(${r[8]}, ${g[8]}, ${b[8]}));`
}
const intevalo = setInterval(rgb, 130)
// document.body.style.backgroundColor = `rgb(${rbg()},10,10)`
// 