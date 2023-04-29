const botaoProjCalculadora = document.createElement("button")
botaoProjCalculadora.setAttribute("class", "btn")
botaoProjCalculadora.innerHTML = "Calculadora"
document.querySelector("#paginaExCalculadora").appendChild(botaoProjCalculadora)

botaoProjCalculadora.addEventListener("click", () => {
    window.location = "./projeto_calculadora/index.html"
})