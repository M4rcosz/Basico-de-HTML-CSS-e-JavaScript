const paginaMiniProjetos = document.createElement("button")
paginaMiniProjetos.setAttribute("class", "btn")
paginaMiniProjetos.innerHTML = "Mini-Projetos"
document.querySelector("#paginaMiniProjetos").appendChild(paginaMiniProjetos)

paginaMiniProjetos.addEventListener("click", () => {
    window.location = "../index.html"
})

// Calculadora

const todasTeclas = [...document.querySelectorAll(".btnTeclas")]
const todasTeclaseEx = [...document.querySelectorAll(".all")]
const todasTeclaseOP = [...document.querySelectorAll(".todasTeclaseOP")]
const on_cl = document.getElementById("on_cl")
const del = document.getElementById("delete")
const inputTela = document.getElementById("iDTelaCalculadora")
const igual = document.getElementById("igual")

todasTeclas.map((e) => {
    e.addEventListener("mousedown", (evt) => {
        let el = evt.target
        let destaque = el.classList.contains("teclasDestaque")
        if (destaque === true) {
            el.style.backgroundColor = "rgb(150, 0, 50)"
        }
        if (destaque === false) {
            el.style.backgroundColor = "rgb(160, 160, 160)"
        }
        setTimeout(() => {
            if (destaque === true) {
                el.style.backgroundColor = "rgb(255, 0, 85)"
            }
            else {
                el.style.backgroundColor = "white"

            }
        }, 350);

    })
})
on_cl.addEventListener("click", () => {
    sinal = false
    virgula = false
    if (!inputTela.hasAttribute("placeholder")) {
        inputTela.setAttribute("placeholder", "0")
    }
    else if (inputTela.value !== "") {
        inputTela.value = ""

    }
    else if (inputTela.value === "") {
        inputTela.removeAttribute("placeholder")

    }



})
let sinal = false
let virgula = false
todasTeclaseEx.map((e) => {
    e.addEventListener("click", (evt) => {
        const el = evt.target
        if (inputTela.hasAttribute("placeholder")) {
            sinal = false
            if (el.innerHTML === ",") {
                if (!virgula) {
                    virgula = true
                    inputTela.value += "."
                }
            } else {
                inputTela.value += el.innerHTML
            }
        }
    })
})
todasTeclaseOP.map((e) => {
    e.addEventListener("click", (evt) => {
        const el = evt.target
        if (inputTela.hasAttribute("placeholder")) {
            if (!sinal) {
                sinal = true
                virgula = false
                if (el.innerHTML === "x") {
                    inputTela.value += "*"
                } else {
                    inputTela.value += el.innerHTML

                }
            }
        }
    })
})

del.addEventListener("click", () => {
    let pop = [...inputTela.value]
    pop.pop()
    let pop1 = pop
    inputTela.value = ""
    pop1.map((e) => {
        if (e.value == "+" || e.value == "*" || e.value == "-" || e.value == "/" || e.value == ".") {
            sinal = true
            virgula = true
        } else {
            inputTela.value += e
            sinal = false
            virgula = false
        }
    })

})

igual.addEventListener("click", () => {
    sinal = false
    virgula = false
    const res = eval(inputTela.value)
    inputTela.value = res
})
