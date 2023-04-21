const box1 = document.querySelector("#container1")
const box2 = document.querySelector("#container2")
const btn = document.querySelector("#btn")

const elementosCurso = [...document.querySelectorAll(".cursos")]

elementosCurso.map((e) => {
    e.addEventListener("click", (evt) => {
        const el = evt.target
        el.classList.toggle("destaque")
    })
})

btn.addEventListener("click", () => {
    const elementosSelecionados = [...document.querySelectorAll(".destaque")]
    const elementosNaoSelecionados = [...document.querySelectorAll(".cursos:not(.destaque)")]
    elementosNaoSelecionados.map((e) => {
        box1.appendChild(e)
    })
    elementosSelecionados.map((e) => {
        box2.appendChild(e)
    })
})