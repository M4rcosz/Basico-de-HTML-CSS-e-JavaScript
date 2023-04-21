const botaoVoltarPag = document.createElement("button")
botaoVoltarPag.setAttribute("class", "btn")
botaoVoltarPag.innerHTML = "Botão para Página de Estudos"
document.querySelector("#botaoVoltarPagina").appendChild(botaoVoltarPag)

botaoVoltarPag.addEventListener("click", () => {
    window.location = "../index.html"
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
const criarNovoElemento = (curso) => {
    const novoElemento = document.createElement("div")
    novoElemento.setAttribute("id", "c" + indice)
    novoElemento.setAttribute("class", "curso c1")
    novoElemento.innerHTML = curso

    const comandos = document.createElement("div")
    comandos.setAttribute("class", "comandos")

    const rb = document.createElement("input")
    rb.setAttribute("type", "radio")
    rb.setAttribute("name", "rb_curso")

    comandos.appendChild(rb)

    novoElemento.appendChild(comandos)

    return novoElemento
}

cursos.map((el, chave) => {

    const novoElemento = criarNovoElemento(el)
    caixaCursos.appendChild(novoElemento)
    indice++

})
const radioSelected = () => {
    const todosRadios = [...document.querySelectorAll("input[type=radio]")]
    let radioSelecionado = todosRadios.filter((ele, ind, arr) => {
        return ele.checked
    })
    return radioSelecionado[0]
}



btnRemoverCurso.addEventListener("click", (evt) => {
    const rs = radioSelected()
    try {
        const cursoSelecionado = rs.parentNode.parentNode
        // cursoSelecionado.parentNode.removeChild(cursoSelecionado)
        cursoSelecionado.remove()
    }
    catch (expt) {
        alert("Selecione um curso!")
    }


})
btnCursoSelecionado.addEventListener("click", (evt) => {
    const rs = radioSelected()
    if (rs !== undefined) {
        const cursoSelecionado = rs.parentNode.previousSibling.textContent
        alert("Curso selecionado: " + cursoSelecionado)
    }
    else {
        alert("Selecione um curso!")
    }
    // console.log(todosRadios)
    // console.log(radioSelecionado)
    // console.log(cursoSelecionado)
})

btnAdicionarNovoCursoAntes.addEventListener("click", (evt) => {
    const rs = radioSelected()
    if (nomeCurso.value !== '') {
        const cursoSelecionado = rs.parentNode.parentNode
        const novoCurso = criarNovoElemento(nomeCurso.value)
        caixaCursos.insertBefore(novoCurso, cursoSelecionado)
    }
    else if (nomeCurso.value == '' && rs !== undefined) { alert("Preencha o campo com o nome do curso!") }

    else {
        alert("Selecione um curso!")
    }

})
btnAdicionarNovoCursoDepois.addEventListener("click", (evt) => {
    const rs = radioSelected()
    if (nomeCurso.value !== '') {
        const cursoSelecionado = rs.parentNode.parentNode
        const novoCurso = criarNovoElemento(nomeCurso.value)
        caixaCursos.insertBefore(novoCurso, cursoSelecionado.nextSibling)
    }
    else if (nomeCurso.value == '' && rs !== undefined) { alert("Preencha o campo com o nome do curso!") }
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
