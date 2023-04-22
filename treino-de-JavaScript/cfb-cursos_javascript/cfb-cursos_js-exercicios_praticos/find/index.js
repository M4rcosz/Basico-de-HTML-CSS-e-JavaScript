const botaoVoltarPag = document.createElement("button")
botaoVoltarPag.setAttribute("class", "btn")
botaoVoltarPag.innerHTML = "Botão Página de Estudos"
document.querySelector("#botaoVoltarPagina").appendChild(botaoVoltarPag)

botaoVoltarPag.addEventListener("click", () => {
    window.location = "../index.html"
})

// ex

const p_array = document.querySelector("#array")
const txt_pesquisar = document.querySelector("#txt_pesquisar")
const btnPesquisar = document.querySelector("#btnPesquisar")
const resultado = document.querySelector("#resultado")

let strings_array = ["html", "css", "javascript"];
let numbers_array = [1, 2, 3, 4, 5, 5, 10];
const elementos_array = numbers_array.concat(strings_array)

p_array.innerHTML = "[" + elementos_array + "]"

btnPesquisar.addEventListener("click", (evt) => {
    resultado.innerHTML = "Valor não encontrado"

    if (!isNaN(txt_pesquisar.value)) {
        numbers_array.find((e, i) => {
            if (e == txt_pesquisar.value) {
                resultado.innerHTML = "O valor encontrado foi " + e + " e foi encontrado na posição " + (1 + i)
            }
        })
    }
    else {
        strings_array.find((e, i) => {
            if (e.toLowerCase() == txt_pesquisar.value.toLowerCase()) {
                resultado.innerHTML = "O valor encontrado foi " + e + " e foi encontrado na posição " + (numbers_array.length + (i + 1))
            }
        })
    }

})