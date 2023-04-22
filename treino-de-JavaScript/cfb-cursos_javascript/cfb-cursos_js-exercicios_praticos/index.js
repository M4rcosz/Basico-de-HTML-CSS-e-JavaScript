const botaoVoltarPag = document.createElement("button")
botaoVoltarPag.setAttribute("class", "btn")
botaoVoltarPag.innerHTML = "Botão para Página de Estudos"
document.querySelector("#botaoVoltarPagina").appendChild(botaoVoltarPag)

botaoVoltarPag.addEventListener("click", () => {
    window.location = "../index.html"
})
// FIND BUTTON
const paginaExFind = document.createElement("button")
paginaExFind.setAttribute("class", "btn")
paginaExFind.innerHTML = "Botão Exercícios Find"
document.querySelector("#paginaExFind").appendChild(paginaExFind)

paginaExFind.addEventListener("click", () => {
    window.location = "./find/index.html"
})

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

// Arquivos Aula 43 cfb cursos
const caixaCursos = document.querySelector("#caixaCursos")
const btn_c = [...document.querySelectorAll(".curso")]
const c1_2 = document.querySelector("#c1_2")
const cursos = ["HTML", "CSS", "Javascript", "PHP", "React", "MySQL", "ReactNative"]
const btnCursoSelecionado = document.getElementById("btnCursoSelecionado")
const btnRemoverCurso = document.getElementById("btnRemoverCurso")
const btnAdicionarNovoCursoAntes = document.getElementById("btnAdicionarNovoCursoAntes")
const btnAdicionarNovoCursoDepois = document.getElementById("btnAdicionarNovoCursoDepois")
const nomeCurso = document.getElementById("nomeCurso")

let indice = 0

const tirarSelecao = () => {
    const cursosSelecionados = [...document.querySelectorAll(".selecionado")]
    cursosSelecionados.map((e) => {
        e.classList.remove("selecionado")
    })

}

const criarNovoElemento = (curso) => {
    const novoElemento = document.createElement("div")
    novoElemento.setAttribute("id", "c" + indice)
    novoElemento.setAttribute("class", "curso c1")
    novoElemento.innerHTML = curso
    novoElemento.addEventListener("click", (evt) => {
        tirarSelecao()
        evt.target.classList.toggle("selecionado")
    })

    const comandos = document.createElement("div")
    comandos.setAttribute("class", "comandos")

    const rb = document.createElement("div")

    comandos.appendChild(rb)

    return novoElemento
}

cursos.map((el, chave) => {

    const novoElemento = criarNovoElemento(el)
    caixaCursos.appendChild(novoElemento)
    indice++

})
const cursosSelected = () => {
    const cursosSelect = [...document.querySelectorAll(".selecionado")]
    return cursosSelect[0]
}



btnRemoverCurso.addEventListener("click", (evt) => {

    try {
        // cursoSelecionado.parentNode.removeChild(cursoSelecionado)
        cursosSelected().remove()
    }
    catch (expt) {
        alert("Selecione um curso!")
    }


})
btnCursoSelecionado.addEventListener("click", (evt) => {

    if (cursosSelected() !== undefined) {

        alert("Curso selecionado: " + cursosSelected().textContent)
    }
    else {
        alert("Selecione um curso!")
    }
    // console.log(todosRadios)
    // console.log(radioSelecionado)
    // console.log(cursoSelecionado)
})

btnAdicionarNovoCursoAntes.addEventListener("click", (evt) => {
    if (nomeCurso.value !== '') {
        const novoCurso = criarNovoElemento(nomeCurso.value)
        caixaCursos.insertBefore(novoCurso, cursosSelected())
    }
    else if (nomeCurso.value == '' && cursosSelected() !== true) { alert("Preencha o campo com o nome do curso!") }

    else {
        alert("Selecione um curso!")
    }

})
btnAdicionarNovoCursoDepois.addEventListener("click", (evt) => {
    if (nomeCurso.value !== '') {
        const novoCurso = criarNovoElemento(nomeCurso.value)
        caixaCursos.insertBefore(novoCurso, cursosSelected().nextSibling)
    }
    else if (nomeCurso.value == '' && cursosSelected() !== true) { alert("Preencha o campo com o nome do curso!") }
    else {
        alert("Selecione um curso!")
    }

})

// parentNode
// childNodes[nodenumber]
// firstChild
// lastChild
// nextSibling
// previousSibling

// Arquivos Aula 43 cfb cursos - End
