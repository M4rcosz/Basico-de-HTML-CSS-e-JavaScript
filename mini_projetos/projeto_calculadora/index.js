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
                el.classList.toggle("mouseClickSize")

            }
            else {
                el.style.backgroundColor = "white"
                el.classList.toggle("mouseClickSize")


            }
        }, 350);
        el.classList.toggle("mouseClickSize")
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
    if (inputTela.value !== "") {
        sinal = false
        virgula = false
        const res = eval(inputTela.value)
        inputTela.value = res
    }
})

// aba da calculadora
const aba_calc = document.querySelector("#aba_calc")
const calc = document.querySelector("#calc")
const aba_img = document.querySelector("#aba_img")

aba_calc.addEventListener("click", (evt) => {
    aba_calc.classList.remove("c")
    calc.classList.toggle("calc_pos")
    aba_calc.classList.toggle("b")
    aba_img.classList.toggle("aba_img_class")
    aba_calc.classList.add("aba_calc_class")
    aba_calc.classList.toggle("aba_calc_class")

    if (calc.classList.contains("calc_pos")) {
        aba_img.setAttribute("src", "./img/seta_baixo.svg")
    }
    else {
        aba_img.setAttribute("src", "./img/seta_cima.svg")
    }
})

aba_calc.addEventListener("mouseover", (evt) => {
    if (!aba_calc.classList.contains("b")) {
        aba_calc.classList.add("c")
        aba_calc.classList.remove("aba_calc_class")
    }
})
aba_calc.addEventListener("mouseout", (evt) => {
    if (!aba_calc.classList.contains("b")) {
        aba_calc.classList.add("aba_calc_class")
    }
})

