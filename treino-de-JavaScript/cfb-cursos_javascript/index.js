// Botão página de exercícios
const botaoExercicios = document.createElement("button")
botaoExercicios.setAttribute("class", "btn")
botaoExercicios.innerHTML = "Botão para Página de Exercícios"
document.querySelector("#botaoPaginaExercicios").appendChild(botaoExercicios)

botaoExercicios.addEventListener("click", () => {
    window.location = "./cfb-cursos_js-exercicios_praticos/index.html"
})
// 1 - REST (...) - rest é um parâmetro que informa uma quantidade indefinida de valores.
// 1.1 - usando for
// CODE:
// function soma(...valores) {
//     let valorInicial = 0
//     for (i = 0; i < valores.length; i++) {
//         valorInicial += valores[i]
//     }
//     return valorInicial
// }
// console.log(soma(10, 11, 12, 45, 22));

// 1.2 - usando for of
// CODE:
// function soma(...valores) {
//     let valorInicial = 0
//     for (let v of valores) {
//         valorInicial += v
//     }
//     return valorInicial
// }
// console.log(soma(1, 2, 3, 4, 5, 15))

// 2 - Funções anônimas - funções anônimas não possuem um nome e só executada uma vez de acordo com a chamada da propriedade na qual está dentro.
// CODE:
// const soma2 = function (v1, v2) {
//     return v1 + v2
// }
// console.log(soma2(1, 2))

// 3 - Arrow Functions - arrow functions é uma forma diferente de "commandar" uma função, e possui suas vantagens e também suas desvantagens
// CODE:
// forma padrão de função anônima:
// const soma = function (v1, v2) {
//     return v1 + v2
// }
// console.log(soma(1, 2))

// arrow function:

// const soma = (v1, v2) => { return v1 + v2 };
// console.log(soma(33, 27))

// quando há apenas um parâmetro não é necessário o uso de barras()
// CODE:
// const nome = n => { return n }
// console.log(nome("Marcos"))

// quando a expressão numerica é simples não é necessário o uso de chaves{}
// CODE:
// const somaN = n => n + 10
// console.log(somaN(25))

// 4 - Funções aninhadas(funções dentro de outras funções) com arrow functions e rest
// CODE:
// const soma = (...valores) => {
//     const somar = val => {
//         let initValue = 0
//         for (v of val) {
//             initValue += v
//         }
//         return initValue
//     }
//     return somar(valores)
// }
// console.log(soma(22, 22, 22, 22, 22))

// funcionaria da mesma forma mesmo se as funções estivessem separadas, dessa forma:
// CODE:
// const somar = val => {
//     let initValue = 0
//     for (v of val) {
//         initValue += v
//     }
//     return initValue
// }
// const soma = (...valores) => {
//     return somar(valores)
// }
// console.log(soma(1, 2, 7))
// valor = [5, 5, 7, 1, 2, 3, 3, 333, 33, 33]
// console.log(soma(...valor));

// 5 - Geradores (Iterators)
// CODE:
// function* cores() {
//     yield "Azul"
//     yield "Vermelho"
//     yield "Verde"
// }
// let itc = cores()
// console.log(itc.next().value)
// console.log(itc.next().value)
// console.log(itc.next().value)
// console.log(itc.next().value)

// segundo exemplo
// CODE:
// function* perguntas() {
//     const nome = yield 'Qual o seu nome ?'
//     const jogo = yield 'Qual o seu jogo favorito?'
//     return "Seu nome é " + nome + ",e seu jogo favorito é " + jogo + "."
// }
// let itp = perguntas()
// console.log(itp.next().value)
// console.log(itp.next("Marcos").value)
// console.log(itp.next("Rainbow Six Siege").value)

// 6 - Map - usado para retornar valores de um array e assim percorrendo-o, de maneira mais atual[os parametros do map são 3, dentre eles = (elemento,indice,array) || (e,i,a)]
// CODE:
// const cursos = ["HTML", "CSS", "JavaScript", "Phyton", "React", "Bootstrap"]
// cursos.map((elemento, indice) => {
//     console.log("Curso de:" + elemento + ", ordem de estudos:" + ++indice)
// })
// let c = cursos.map((elemento, indice) => { return "<div>" + elemento + "</div>" })
// console.log(c)

// exemplos usando manipulação de DOM

// CODE:
// let el = document.getElementsByTagName("div");
// el = [...el]
// console.log(el)
// el.map((e, i) => {
//     e.style.backgroundColor = "purple"
//     e.style.border = "3px solid white"
// })

// outros exemplos

// CODE:
// const val = Array.prototype.map.call(el, ({ innerHTML }) => innerHTML)
// console.log(val)

// let num1 = ["1", "2", "3", "4", "5"]
// console.log(num1)

// const converterInteiro = (e) => parseInt(e)
// let num0 = ["1", "2", "3", "4", "5"].map(converterInteiro)
// console.log(num0)

// const dobrar = (e) => e * 2
// let num = ["1", "2", "3", "4", "5"].map(dobrar)
// console.log(num)

// 7 - Colection e Array na manipulação de DOM
// CODE:
// let obj1 = document.getElementsByTagName("div");
// let obj2 = [...document.getElementsByTagName("div")];

// obj2.forEach(element => { element.innerHTML = "mucho dodio" })

// console.log(obj1) - 'HTML Collection'
// console.log(obj2) - 'Array'

// 8 - this e vantagens de usar o arrow functions com função anônima
// CODE:
// function aluno(nome, nota) {
//     this.nome = nome
//     this.nota = nota
//     // função anônima sem arrow function(não reconheceu nome e nota dentro da função)
//     this.dados_anonimos = function () {
//         setTimeout(function () {
//             console.log(this.nome)
//             console.log(this.nota)
//         }, 2000)
//     }
//     // função anônima com arrow function (reconheceu nome e nota dentro da função)
//     this.dados_arrow = function () {
//         setTimeout(() => {
//             console.log(this.nome)
//             console.log(this.nota)
//         }, 2000)
//     }
// }
// const al1 = new aluno("Marcos", 100)
// al1.dados_anonimos()
// al1.dados_arrow()

// 9 - Manipulação de DOM
// 9.1 - getElementById - (pegar um elemento HTML pela sua Id e poder manipula-lo, mudando várias coisas, entre seu estilo à até adicionar uma função ou evento)
// CODE:
// const dc1 = document.getElementById("c1")
// const dc2 = document.getElementById("c2")
// const dc3 = document.getElementById("c3")
// const dc4 = document.getElementById("c4")
// const dc5 = document.getElementById("c5")
// const dc6 = document.getElementById("c6")

// dc1.innerHTML = "Alterando com getElementById"
// console.log(dc1)

// Adicionando vários desses elementos que foram "guardados" dentro de propriedades (dc1,dc2...), e assim criando um array com vários elementos pegos com suas Id's

// CODE:
// const arrayElementos = [dc1, dc2, dc3, dc4, dc5, dc6]
// for (div of arrayElementos)
//     div.innerHTML = "Mudei todos os elementos"

// Usando o map. junto do array function para manipular vários elementos dentro de um array

// CODE:
// arrayElementos.map((e) => {
//     e.innerHTML = "Alterei todos os elementos usando o map."
//     console.log(e)
// })

// 9.2 - getElementsByTagName - (pegar um ou vários elementos pelo nome de sua Tag)

// CODE:
// const dc1 = document.getElementById("c1")
// const dc2 = document.getElementById("c2")
// const dc3 = document.getElementById("c3")
// const dc4 = document.getElementById("c4")
// const dc5 = document.getElementById("c5")
// const dc6 = document.getElementById("c6")

// const arrayElementos = [dc1, dc2, dc3, dc4, dc5, dc6]

// const colecao = document.getElementsByTagName("div");

// diferença entre um array de elementos com um HTMLCollection é que suas funções são limitadas, não podendo utilizar de muitas como por exemplo o map

// CODE:
// colecao.map((e) => {
//     e.innerHTML = "Tentando usar o map em um HTMLCollection"
// })
// console.log(arrayElementos)
// console.log(colecao)

// transformando um HTMLCollection em um array de Elementos usando o spread (...)
// Spread é uma forma de "separar/espalhar", vários conteúdos de uma coleção transformando-os em elementos únicos dentro de um array

// CODE:
// const colecaoHTML = [...document.getElementsByTagName("div")];

// OR

// let colecaoHTML = document.getElementsByTagName("div");
// colecaoHTML = [...colecaoHTML]
// console.log(colecaoHTML)

// dessa forma vários elementos, como o map por exemplo, agora são de possível utilização

// CODE:
// colecaoHTML.map((e) => {
//     e.innerHTML = "convertendo um HTMLCollection em um array"
// })
// console.log(arrayElementos)
// console.log(colecaoHTML)

// 9.3 - getElementsByClassName - pegar elementos de acordo com o nome da classe
// CODE:
// const cursoTodos = [...document.getElementsByClassName("cursos")];
// const pacoteCurso1 = [...document.getElementsByClassName("pacote1")];
// const pacoteCurso2 = [...document.getElementsByClassName("pacote2")];
// const cursoEspecial = document.getElementsByClassName("cursos")[2]

// console.log(cursoTodos)
// console.log(pacoteCurso1)
// console.log(pacoteCurso2)
// console.log(cursoEspecial)

// adicionando uma classe à um ou vários elementos com JavaScript
// classList.add()

// CODE:
// cursoTodos.map((e) => {
//     e.classList.add("adicionarClasseComJavaScript")
// })

// 9.4 - querySelector & querySelectorAll - pegar elementos de forma mais generica/dinâmica, assim espercificando se é um Id,Class,TagName ou de outra forma.
// querySelector - retornar o primeiro elemento especificado que encontrar, por exemplo a TagName "div", ele irá pegar a primeira Tag div que encontrar nos conteúdos HTML

// CODE:
// const query_todasDivs = document.querySelector("div")
// console.log(query_todasDivs)

// querySelectorAll - pega todos os elementos especificados, transformando os em um NodeList, que é tipo um HTMLCollection só que mais antigo.

// CODE:
// const query_todasDiv = [...document.querySelectorAll("div")]
// const query_cursos = [...document.querySelectorAll(".cursos")]
// const query_cursoEspecial = document.querySelector("#c2")
// const query_cursoEspecial2 = document.querySelectorAll("#c2")[0]

// console.log(query_todasDiv)
// console.log(query_cursos)
// console.log(query_cursoEspecial)
// console.log(query_cursoEspecial2)

// Também é possível especificar vários elementos diferentes juntos com o querySelectorAll

// CODE:
// const query_variosItems = [...document.querySelectorAll("div,.cursos,#cc2")]
// console.log(query_variosItems)

// Também é possível aumnetar o nível de especificidade de um elemento que você queira pegar com o querySelectorAll

// Pegar apenas divs que possuem uma Tag Class

// CODE:
// const query_divWithClass = [...document.querySelectorAll("div[class]")]
// console.log(query_divWithClass)

// Pegar um elemento dentro de outro, por exemplo, pegar um elemento 'p' direto dentro de uma div, ou seja, não está dentro de mais nada além da div que deseja especificar.

// CODE:
// const query_pInDiv = [...document.querySelectorAll("div > p")]
// console.log(query_pInDiv)

// Pegar um elemento dentro de outro sem que seja preciso ser um elemento direto,ou seja, esse elemento pode estar dentro de outro elemento, mas ainda será reconhecido

// CODE:
// const query_pInDivNoRestriction = [...document.querySelectorAll("div p")]
// console.log(query_pInDivNoRestriction)

// Também é possivel pegar elementos que não possuem uma class ou tag ou id em especifico,claro,especificando antes um elemento "limite", para acabar não pegando tudo do html,
// incluindo o body,html e tudo.

// CODE:
// const query_itemsNaoSelecionados = [...document.querySelectorAll(".cursos:not(.destaque)")]
// console.log(query_itemsNaoSelecionados)

// 10 - addEventListener - comando para adicionar uma evento atráves do JavaScript

// Adicionando evento de click com JS

// CODE:
// const msg = () => {
//     alert("função de click com addEventListener")
// }
// const elEventClick = document.querySelector("#eventClick")
// elEventClick.addEventListener("click", msg)

// Comando e forma para descobrir quem disparou o evento, qual elemento que disparou o evento,sendo uma div em especifico ou um button ou outra coisa,usando uma função anônima

// CODE:
// const quemDisparouOEvento = document.querySelector("#eventClick")
// quemDisparouOEvento.addEventListener("click", (evt) => {
//     const objQueDisparouOEvento = evt.target
//     objQueDisparouOEvento.classList.add("adicionarClasseComJavaScript")
// })

// adicionando um evento em vários elementos ao mesmo tempo utilizando o .map

// CODE:
// const disparandoUmEventoEmVariosEl = [...document.querySelectorAll(".cursos")]

// disparandoUmEventoEmVariosEl.map((e) => {
//     e.addEventListener("click", (evt) => {
//         const el = evt.target
//         el.style.backgroundColor = "black"
//         console.log(el.innerHTML + " foi clicado")
//     })
// })

// 11 - stopPropagation - utilizado para parar uma propagação de um evento, ou seja, quando um evento de click por exemplo foi adicionado à uma div que contenha outros elementos, como
// por exemplo outras divs, o evento ocorrerá mesmo se clicar nessas outras divs, e não apenas na div que foi adicionada o evento.

// CODE:
// const cointainer1 = document.querySelector("#box1")

// cointainer1.addEventListener("click", (evt) => {
//     let el = evt.target
//     console.log(el + " clicou")
// })

// Executando o stop propagation para impedir o evento nos elementos dentro da div

// CODE:

// const elementosCurso0 = [...document.querySelectorAll(".cursos")]

// elementosCurso0.map((e) => {
//     e.addEventListener("click", (evt) => {
//         evt.stopPropagation()
//     })

// })

// 12 - relação entre elementos do DOM, parentes,child,siblings (aula 38 cfb cursos)[lembrando que childNodes citas os items que também não elementos HTML como o text por exemplo]

// elementos filhos do box1 - HTMLCollection

// CODE:
// const box1 = document.querySelector("#box1")

// console.log(box1.children)
// console.log(box1.children[2])
// console.log(box1.lastElementChild)

// Verificando se um elemento possui filhos e respondendo no console com operador ternário

// CODE:

// const box1 = document.querySelector("#box1")
// const elementosCurso = [...document.querySelectorAll(".cursos")]

// console.log(box1.children.length > 0 ? "Possui filhos" : "NÂO possui filhos")
// console.log(elementosCurso[0].children.length > 0 ? "Possui filhos" : "NÂO possui filhos")

// console.log(elementosCurso[2])
// console.log(elementosCurso[2].children.length > 0 ? "Possui filhos" : "NÂO possui filhos")

// Alterando elementos especificos usando a children list

// CODE:

// const box1 = document.querySelector("#box1")

// console.log(box1.children[2])
// console.log(box1.children[2].innerHTML = "Alterei o child")

// pegando elemento pai e depois o elemento pai do elemento pai(avô)

// CODE:

// const filho = document.querySelector("#neto")

// console.log(filho.parentElement)
// console.log(filho.parentElement.parentElement)
// console.log(filho.parentElement.parentElement.children[4])

// 13 - Criando elementos novos com JavaScript - creatElement & setAttribute

// x.adotou(y) = appendChild

// CODE:

// const box2 = document.createElement("div")
// const main = document.querySelector("#mainBox")
// main.setAttribute("class", "mainBox")
// box2.setAttribute("class", "boxEl")
// main.appendChild(box2)

// const novosCursos = ["novo Curso 1", "novo Curso 2", "novo Curso 3", "novo Curso 4", "novo Curso 5", "novo Curso 6", "novo Curso 7", "novo Curso 8", "End"]

// novosCursos.map((e, i) => {
//     const novoElemento = document.createElement("div")
//     novoElemento.setAttribute("class", "cursos pacote2")
//     novoElemento.setAttribute("id", "c" + (i + 7))
//     novoElemento.innerHTML = e
//     box2.appendChild(novoElemento)
// })

// 14 - removendo elementos do DOM - removeChild

// x.desherdou(y) = removeChild

// CODE:

// const box2 = document.createElement("div")
// const main = document.querySelector("#mainBox")
// main.setAttribute("class", "mainBox")
// box2.setAttribute("class", "boxEl")
// main.appendChild(box2)

// const novosCursos = ["novo Curso 1", "novo Curso 2", "novo Curso 3", "novo Curso 4", "novo Curso 5", "novo Curso 6", "novo Curso 7", "novo Curso 8", "End"]

// novosCursos.map((e, i) => {
//     const novoElemento = document.createElement("div")
//     novoElemento.setAttribute("class", "cursos pacote2")
//     novoElemento.setAttribute("id", "c" + (i + 7))
//     novoElemento.innerHTML = e
//     novoElemento.addEventListener("click", (evt) => {
//         box2.removeChild(evt.target)
//     })
//     box2.appendChild(novoElemento)
// })

// 15 - filter - filtrar elementos de um array, assim criando um novo array com os elementos filtrados

// CODE:

// const idades = [10, 17, 15, 22, 31, 11, 90, 88, 47, 13, 18]

// const maior = idades.filter((valor, indice, array) => {
//     let idadeMaior = valor >= 18
//     return idadeMaior
// })
// const menor = idades.filter((valor, indice, array) => {
//     if (valor < 18)
//         return valor
// })

// console.log(idades)
// console.log(maior)
// console.log(menor)

// exercicio sobre filter - ir para a pagina de exercicios

// CODE:
// EX da pag de exercicios:(filtrando items selecionados do radio)

// const todosRadios = [...document.querySelectorAll("input[type=radio]")]
// let radioSelecionado = todosRadios.filter((ele, ind, arr) => {
//     return ele.checked
// })
// radioSelecionado = radioSelecionado[0]

// 16 - insertBefore - adicionar/adotar um novo item antes de outro [insertBefore(item1 antes do:, Item2)] - pag de exercicios filter

// 17 - toggle - classList.toggle - permite alterar uma classe a adicionando ou removendo de acordo com uma ação ou função ordenada

// CODE:
// const item = [...document.querySelectorAll(".cursos")]

// item.map((e) => {
//     e.addEventListener("click", (evt) => {
//         const el = evt.target
//         el.classList.toggle("adicionarClasseComJavaScript")
//     })
// })

// 18 - find - encontrar/procurar um numero dentro de um array e retonar true ou false se existe esse número dentro do array .find(e,i,a)

// CODE:

// const findExercicio = document.querySelector("#findExercicio")
// const p_array = document.querySelector("#array")
// const txt_pesquisar = document.querySelector("#txt_pesquisar")
// const btnPesquisar = document.querySelector("#btnPesquisar")
// const resultado = document.querySelector("#resultado")

// findExercicio.style.display = "block"

// const elementos_array = [10, 11, 12, 15, 17, 22, 78, 33, 66, 32, "html", "CSS", "JavaScript"]
// p_array.innerHTML = "[" + elementos_array + "]"

// btnPesquisar.addEventListener("click", (evt) => {
//     resultado.innerHTML = "Valor não encontrado"

//     let strings_array = [];
//     let numbers_array = [];

//     for (let i = 0; i < elementos_array.length; i++) {
//         if (typeof elementos_array[i] === "string") {
//             strings_array.push(elementos_array[i])
//         }
//         else if (typeof elementos_array[i] === "number") {
//             numbers_array.push(elementos_array[i])
//         }
//     }
//     if (!isNaN(txt_pesquisar.value)) {
//         numbers_array.find((e, i) => {
//             if (e == txt_pesquisar.value) {
//                 resultado.innerHTML = "O valor encontrado foi " + e + " e foi encontrado na posição " + (1 + i)
//             }
//         })
//     }
//     else {
//         strings_array.find((e, i) => {
//             if (e.toLowerCase() == txt_pesquisar.value.toLowerCase()) {
//                 resultado.innerHTML = "O valor encontrado foi " + e + " e foi encontrado na posição " + (numbers_array.length + (i + 1))
//             }
//         })
//     }
// })

// 19 - every - verificar se todos os elementos possuem a especificação do return, e retornar true ou false se todos tiverem "OK" com essa especificação em comum .every(e,i,a)
// return true se todos(every) elementos(e) for = [especificação]

// CODE:

// const findExercicio = document.querySelector("#findExercicio");
// const p_array = document.querySelector("#array");
// const txt_pesquisar = document.querySelector("#txt_pesquisar");
// const btnPesquisar = document.querySelector("#btnPesquisar");
// const resultado = document.querySelector("#resultado");
// txt_pesquisar.style.display = "none";
// btnPesquisar.innerHTML = "Verificar"
// findExercicio.style.display = "block"

// const elementos_array = [18, 20, 78, 3, 66, 32]
// p_array.innerHTML = "[" + elementos_array + "]"

// btnPesquisar.addEventListener("click", (evt) => {

//     const ret = elementos_array.every((e, i) => {

//         if (e < 18) {
//             resultado.innerHTML = "Array não conforme na posição " + (i + 1)
//         }
//         return e >= 18
//     })
//     if (ret) {
//         resultado.innerHTML = "OK"
//     }

// })

// 20 - soma - verificar se pelo menos um elemento possue a especificação do return, e retornar true ou false se pelo menos um estiver "OK" com essa especificação .some(e,i,a)
// return true se algum(some) elemento(e) for = [especificação]

// CODE:

// const findExercicio = document.querySelector("#findExercicio");
// const p_array = document.querySelector("#array");
// const txt_pesquisar = document.querySelector("#txt_pesquisar");
// const btnPesquisar = document.querySelector("#btnPesquisar");
// const resultado = document.querySelector("#resultado");
// txt_pesquisar.style.display = "none";
// btnPesquisar.innerHTML = "Verificar"
// findExercicio.style.display = "block"

// const elementos_array = [9, 20, 78, 33, 66, 32]
// p_array.innerHTML = "[" + elementos_array + "]"

// btnPesquisar.addEventListener("click", (evt) => {

//     const ret = elementos_array.some((e, i) => {
//         if (e > 18) {
//             resultado.innerHTML = "Array não conforme"
//         }
//         return e <= 18
//     })
//     if (ret) {
//         resultado.innerHTML = "OK"

//     }

// })


// 21 - reduce - método para reduzir um array .reduce(elementoAnterior,elemento,indice,array)

// CODE:

// const findExercicio = document.querySelector("#findExercicio");
// const p_array = document.querySelector("#array");
// const txt_pesquisar = document.querySelector("#txt_pesquisar");
// const btnPesquisar = document.querySelector("#btnPesquisar");
// const resultado = document.querySelector("#resultado");
// txt_pesquisar.style.display = "none";
// btnPesquisar.innerHTML = "Reduzir"
// findExercicio.style.display = "block"

// const elementos_array = [1, 2, 3, 4, 5]
// let anterior = []
// let atual = []
// let dobro = []
// p_array.innerHTML = "[" + elementos_array + "]"

// btnPesquisar.addEventListener("click", (evt) => {
//     dobro.push(elementos_array[0] * 2)
//     resultado.innerHTML = elementos_array.reduce((anteriorR, atualR, indiceR, arrayR) => {
//         anterior.push(anteriorR)
//         atual.push(atualR)
//         dobro.push(atualR * 2)
//         return anteriorR + atualR
//     })
//     resultado.innerHTML += "<br/>Valor anterior:" + anterior + "<br/>Valor atual:" + atual + "<br/>Valor dobro:" + dobro
// })

// 22 - Iteradores - iteradores são funções que podem iterar, ou seja, podem passar por elemento em elemento até chegar á um final, (done: true)

// Coleções iteráveis:
// Arrays
// Strings
// Map
// Sets

// CODE:

// const valores = [11, 12, 3, 4]

// const it_valores = valores[Symbol.iterator]()

// console.log(valores)
// console.log(it_valores.next())
// console.log(it_valores.next())
// console.log(it_valores.next())
// console.log(it_valores.next())
// console.log(it_valores.next())

// const texto = "Youtube"

// const it_texto = texto[Symbol.iterator]()

// console.log(texto)
// console.log(it_texto.next())
// console.log(it_texto.next())
// console.log(it_texto.next())
// console.log(it_texto.next())
// console.log(it_texto.next())
// console.log(it_texto.next())
// console.log(it_texto.next())
// console.log(it_texto.next())

// 23 - Manipulação de Arrays

// CODE:

// const caixaA52 = document.querySelector("#A52")

// caixaA52.style.display = "flex"

// let cores = ["red", "blue", "green", "yellow"]
// let arrayA52 = ["HTML", "CSS", "JavaScript", cores]

// // arrayA52.push(["Python", "DataBase", "MySQL"])
// // arrayA52.pop()
// // arrayA52.unshift("First")
// // arrayA52.shift()
// // arrayA52.pop()
// console.log(arrayA52)
// console.log(arrayA52[3])
// console.log(arrayA52[3][2])


// arrayA52.map((e) => {
//     const p = document.createElement("p")
//     p.innerHTML = e
//     caixaA52.appendChild(p)

// })

// 24 - Funções em Arrays

// CODE:

// const caixaA52 = document.querySelector("#A52")

// caixaA52.style.display = "flex"

// let valores = [4, 3, 2]

// let op = [
//     (val) => {
//         let res = 0
//         for (v of val) {
//             res += v
//         }
//         return res
//     },
//     (val) => {
//         let res = 1
//         for (v of val) {
//             res *= v
//         }
//         return res
//     },
//     (val) => {
//         for (v of val) {
//             console.log(v)
//         }
//     }
// ]
// const op1 = (op[0](valores))
// const op2 = (op[1](valores))
// const op3 = (op[2](valores))

// let op_array = [op1, op2, valores]
// op_array.map((e) => {
//     const p = document.createElement("p")
//     p.innerHTML = e
//     caixaA52.appendChild(p)

// })

// Exercicio simples calculadora sobre funções em arrays - A53

// CODE:
// const titleA53 = document.createElement("h2")
// titleA53.innerHTML = "Exercicio Calculadora"
// const divA53 = document.createElement("div")
// document.body.appendChild(titleA53)
// document.body.appendChild(divA53)

// titleA53.style = "position:relative;left:47.6%;cursor:default"
// divA53.style = "border: 3px solid black; padding: 30px; display: flex; flex-direction: column; align-self:center;width: 100px; height:150px;position:relative;left:50%; justify-content:center;align-items:center"
// document.body.style = "padding-bottom: 400px"

// const calculadora = document.createElement("h3")
// const valor1 = document.createElement("input")
// const divButtons = document.createElement("div")
// const valor2 = document.createElement("input")
// const igual = document.createElement("p")
// const resultado = document.createElement("p")
// divA53.appendChild(calculadora)
// divA53.appendChild(valor1)
// divA53.appendChild(divButtons)
// divA53.appendChild(valor2)
// divA53.appendChild(igual)
// divA53.appendChild(resultado)

// calculadora.style = "margin-top:10px;cursor:default"
// calculadora.innerHTML = "Calculadora"
// igual.innerHTML = "="
// igual.style = "cursor:default"
// valor1.style = "margin-bottom: 1px;width:90px; border: 2px solid black;cursor:default;text-align:center"
// valor2.style = "margin-top: 1px;width:90px; border: 2px solid black;cursor:default;text-align:center"
// resultado.style = "border: 2px solid black; width:90px; text-align:center;cursor:default"
// valor1.setAttribute("placeholder", "Valor1:")
// valor1.setAttribute("type", "text")
// valor2.setAttribute("type", "text")
// valor2.setAttribute("placeholder", "Valor2:")

// const botaoAdicao = document.createElement("div")
// const botaoSubtracao = document.createElement("div")
// const botaoMultiplicacao = document.createElement("div")
// const botaoDivisao = document.createElement("div")

// divButtons.appendChild(botaoAdicao)
// divButtons.appendChild(botaoSubtracao)
// divButtons.appendChild(botaoMultiplicacao)
// divButtons.appendChild(botaoDivisao)

// divButtons.style = "display:flex; flex-direction: row"
// botaoAdicao.style = "width:22px; border: 2px solid black;border-right:0;text-align:center;cursor:pointer"
// botaoSubtracao.style = "width:22px; border: 2px solid black;border-right:0;text-align:center;cursor:pointer"
// botaoMultiplicacao.style = "width:22px; border: 2px solid black;border-right:0;text-align:center;cursor:pointer"
// botaoDivisao.style = "width:22px; border: 2px solid black;text-align:center;cursor:pointer"


// botaoAdicao.innerHTML = "+"
// botaoSubtracao.innerHTML = "-"
// botaoMultiplicacao.innerHTML = "x"
// botaoDivisao.innerHTML = "/"
// resultado.innerHTML = 0


// const hoverEl = (x) => {
//     x.addEventListener("mouseover", () => {
//         x.style.backgroundColor = "gray"
//     })
//     x.addEventListener("mouseout", () => {
//         x.style.backgroundColor = ""
//     })
// }

// hoverEl(botaoAdicao)
// hoverEl(botaoSubtracao)
// hoverEl(botaoMultiplicacao)
// hoverEl(botaoDivisao)
// hoverEl(resultado)

// let op = [
//     (v1, v2) => {
//         return Number(v1) + Number(v2)
//     },
//     (v1, v2) => {
//         return Number(v1) - Number(v2)
//     },
//     (v1, v2) => {
//         return Number(v1) * Number(v2)
//     },
//     (v1, v2) => {
//         return Number(v1) / Number(v2)
//     }
// ]

// botaoAdicao.addEventListener("click", () => { resultado.innerHTML = op[0](valor1.value, valor2.value) })
// botaoSubtracao.addEventListener("click", () => { resultado.innerHTML = op[1](valor1.value, valor2.value) })
// botaoMultiplicacao.addEventListener("click", () => { resultado.innerHTML = op[2](valor1.value, valor2.value) })
// botaoDivisao.addEventListener("click", () => { resultado.innerHTML = op[3](valor1.value, valor2.value) })
// resultado.addEventListener("click", () => { resultado.innerHTML = 0; valor1.value = ""; valor2.value = "" })

// 25 - Coleção new Map

// CODE:

// const caixaA54 = document.querySelector("#A52")
// caixaA54.style.display = "flex"

// const mapa = new Map()

// mapa.set("cursos", "JavaScript")
// mapa.set(1, "my")
// mapa.set(2, 100)
// mapa.set("Dinheiro", 1000)

// console.log(mapa)

// if (mapa.has("Dinheiro")) {
//     caixaA54.innerHTML = "Tem dinheiro" + " (" + mapa.get("Dinheiro") + ")"
// } else {
//     caixaA54.innerHTML = "Não tem dinheiro"
// }
// // caixaA54.innerHTML = mapa.get("cursos")

// 26 - Coleção Set - não permite entradas duplicadas, ou seja, não permite dois elementos iguais[principal caracteristica]

// CODE:

// const caixaA55 = document.querySelector("#A52")
// caixaA55.style.display = "flex"

// const musicas = new Set(["musica 1", "musica 2", "musica 3"])

// musicas.add("musica 4")

// musicas.delete("musica 1")

// musicas.forEach((e) => {
//     caixaA55.innerHTML += e + "<br/>"
// })
// musicas.clear()
// console.log(musicas)

// 27 - Templates Strings - nova forma de tratar strings (``)

// CODE:

// const caixaA56 = document.querySelector("#A52")
// caixaA56.style.display = "flex"

// const curso = `JavaScript`
// const canal = `CFB Cursos`

// const frase = `Este é o curso de ${curso} do canal <br/>\n ${canal}`

// caixaA56.innerHTML = frase

// const carros = ["Carro 1", "Carro 2", "Carro 3", "Carro 4"]

// let ul = `<ul>`
// carros.map((e) => {
//     ul += `<li>${e}</li>`
// })
// ul + `</ul>`

// caixaA56.innerHTML += ul

// 28 - Objetos
// 28.1 - class{constructor()} - classe construtora

// CODE:

// const caixaA57 = document.querySelector("#A52")
// caixaA57.style.display = "flex"

// class Pessoa {
//     constructor(nome) {
//         this.nome = nome
//     }
// }

// const p1 = new Pessoa("Marcos")
// const p2 = new Pessoa("Bruno")
// const p3 = new Pessoa("Davi")

// caixaA57.innerHTML = `${p1.nome} <br/> ${p2.nome} <br/> ${p3.nome}`

// console.log(p1)
// console.log(p2)
// console.log(p3)

// 28.2 - class

// CODE:

// const caixaA58 = document.querySelector("#A52")
// caixaA58.style.display = "flex"

// class Carro {
//     constructor(nome, tipo) {
//         this.nome = nome
//         if (tipo == 1) {
//             this.tipo = "Esportivo"
//             this.velMax = 300
//         } else if (tipo == 2) {
//             this.tipo = "Utilitário"
//             this.velMax = 100
//         }
//         else if (tipo == 3) {
//             this.tipo = "Passeio"
//             this.velMax = 150
//         }
//         else {
//             this.tipo = "Militar"
//             this.velMax = 180
//         }
//     }
//     setNome(nome) {
//         return this.nome = nome
//     }
//     setTipo(tipo) {
//         return this.tipo = tipo
//     }
//     setVelMax(velMax) {
//         return this.velMax = velMax
//     }
//     getNome() {
//         return this.nome
//     }
//     getTipo() {
//         return this.tipo
//     }
//     getVelMax() {
//         return this.velMax
//     }
//     getInfo() {
//         return [this.nome, this.tipo, this.velMax]
//     }
//     info() {
//         console.log(`Nome: ${this.nome}`)
//         console.log(`Tipo: ${this.tipo}`)
//         console.log(`VelMax: ${this.velMax}`)
//         console.log(`--------------------`)
//     }
// }
// const c1 = new Carro("Ferrari", 1)
// const c2 = new Carro("Gol", 2)
// const c3 = new Carro("Trailer", 3)
// const c4 = new Carro("Tanque", 4)

// c1.setNome("Lamborghini")

// c1.info()
// c1.getNome()
// console.log(c1.getInfo())

// c1.getInfo().map((e) => {
//     caixaA58.innerHTML += `${e}<br/>`
// })

// caixaA58.innerHTML += `<br/>Nome: ${c1.nome}<br/> Tipo: ${c1.tipo}<br/> VelMax: ${c1.velMax}`

// 28.3 - objeto A59 - ex pratico

// 28.4 - objeto A60 - class -> function - modelo construtor usando function

// 28.5 - objeto A61 - objetos literais

// 28.6 - herança - classe que herda outra classe - super()= pegar os parametros do pai(this.),[extends = definir a ligação de herança, filho->pai/base]

// CODE:

// class Carro{
//     constructor(nome,portas){
//         this.nome=nome
//         this.portas=portas
//     }
//     setCor=function(){
//         this.cor=cor
//     }
// }

// class Esportivo extends Carro{
//     constructor(nome,portas,velocidade){
//     super(nome,portas)
//     this.velocidade=velocidade
//     }
// }

// 27 - classes - exercicios A63 e A64

// 28 - Conversões em JSON - [stringify(obj) = Converte objeto em string JSON] [parse(stringJSON)= Converte string JSON em objeto]

// CODE:

// const pc = {
//     processador: "ryzen 5 4600G",
//     placa_mae: "ASRock A320"
// }

// const s_json_pc = JSON.stringify(pc)
// const o_json_pc = JSON.parse(s_json_pc)

// console.log(s_json_pc)
// console.log(o_json_pc)

// 29 - static - metodo para indicar uma propriedade ou método para a classe toda

// CODE:

// class Pc {
//     static ligado = false
//     constructor(processador, placa_mae) {
//         this.processador = processador
//         this.placa_mae = placa_mae
//     }
//     info = function () {
//         console.log(`Processador: ${this.processador}`)
//         console.log(`Placa-Mãe: ${this.placa_mae}`)
//         console.log(`Ligado: ${(Pc.ligado ? "Sim" : "Não")}`)
//         console.log(`---------------------------`)
//     }
//     static ligar = function () {
//         Pc.ligado = true
//     }
// }

// const pc1 = new Pc("Ryzen 5 4600G", "ASRock A320")
// const pc2 = new Pc("Ryzen 5 5600G", "ASRock B420")

// pc1.info()
// pc2.info()

// Pc.ligar()

// pc1.info()
// pc2.info()

// 30 - Prototype - adicionar propriedades ou métodos após a classe já ter sido estanciada

// CODE:

// const Pc = function (processador, placa_mae) {
//     this.processador = processador,
//         this.placa_mae = placa_mae
// }

// const pc1 = new Pc("Ryzen 5 4600G", "ASRock A320")

// Pc.prototype.preco = 2000

// console.log(Pc)
// console.log(pc1)
// console.log(Pc.prototype.preco)

// 31 - Polomorfismo - A68 - métodos ou funções com o mesmo nome de sua classe pai - pegar um método do pai que possui o mesmo nome do metodo do filho super.metodo()

// CODE:

// class Carro{
//     constructor(a,b){
//         this.a=a
//         this.b=b
//     }
//     info(){
//         console.log(itemA)
//         console.log(itemB)
//     }
// }

// class Militar extends Carro{
//     constructor(){
//         super(a,b)
//     }
//     info(){
//         super.info()
//         console.log(itemC)
//     }
// }

// 32 - Abstract - A69 - usar uma classe como base e adicionar condições para que ela não seja utilizada e que obrigatoriamente um metodo ou propriedade seja usado em seus herdeiros

// CODE:

// class CarroPadrao {
//     constructor() {
//         this.portas = 4
//         this.rodas = 4
//         if (this.constructor === CarroPadrao) {
//             throw new TypeError("Esta classe não pode ser instânciada")
//         }
//         if (this.ligar === undefined) {
//             throw new TypeError("É obrigatório o implemento do método ligar")
//         }
//     }
// }

// class Carro extends CarroPadrao {
//     constructor(a, b) {
//         super()
//         this.a = a
//         this.b = b
//     }
//     info() {
//         console.log(itemA)
//         console.log(itemB)
//     }
//     ligar() { }
// }

// class Militar extends Carro {
//     constructor() {
//         super(a, b)
//     }
//     info() {
//         super.info()
//         console.log(itemC)
//     }
// }

// const c2 = new Carro("a", "b")
// const c1 = new CarroPadrao()

// 33 - Exercício calculadora - A70 - página de exercicios

// 34 - clipboard - navigator.clipboard.writeText([x]var||input||campoDeTexto)[copiar Texto] - navigator.clipboard.readText([x]var||input||campoDeTexto)[colar Texto]
// ATENÇÃO: usar x.select() e x.setSelectionRange(caracter x, até,caracter y[0,99999])

// comando de copiar, pode ser usado em botao para copiar um campo ou texto especifico

// CODE:

// test.select()
// test.setSelectionRange(0,99999)
// navigator.clipboard.writeText(test.value)
// navigator.clipboard.readText(test.value)

// 35 - Criando ABA/Gaveta para calculadora do Mini-Projeto A74

// 36 - Promise - A75 e A76 - promise é como um função de classe para indicar uma promessa de retorno, que após um determinado tempo de processamento como o timeout, apos isso ele
// promete retornar um conteúdo, A75 e A76 V76 e V77 CFB Cursos JavaScript PlayList

// 37 - Data e Hora - principais métodos

// CODE:

// getDate() = Dia do Mês
// getDay() = Dia da Semana(número)
// getFullYear() = Ano com 4 digitos
// getHours() = Horas
// getMilliseconds() = Milisegundos
// getMinutes() = Minutos
// getMonth() = Mês
// getSeconds() = Segundos
// getTime() = Timestamp(milisegundos desde 1 de Janeiro de 1970, 00: 00: 00 UTC)
// Date.now() = Timestamp(milisegundos desde 1 de Janeiro de 1970, 00: 00: 00 UTC)
// getTimezoneOffset() = Timezone da localidade
// setDate() = Define um dia do mês para a data
// setMonth() = Define um mês para a data
// setFullYear() = Define um ano para a data
// setHours() = Define horas
// setMinutes() = Define minutos
// setSeconds() = Define segundos
// setMilliseconds() = Define milisegundos
// toDateString() = Retorna somente a data
// setTimeout() = Colocar um tempo de esperar para executar algum código
// setInterval() = Colocar um intervalo para executar algum código
// clearInterval() = Parar um intervalo de execução
// NOTA IMPORTANTE: Caso utilizar o setInterval com uma função com parâmentro, utilizar uma função anônima e dentro a função em questão

// data com formato (dia/mês/ano)

// CODE:

// const caixaA77 = document.querySelector("#A52")
// caixaA77.style.display = "flex"

// const data = new Date()

// let dia = data.getDay()
// dia = dia < 10 ? "0" + dia : dia

// let mes = data.getMonth()
// mes = mes < 10 ? "0" + (mes + 1) : (mes + 1)

// caixaA77.innerHTML = `Data:(${dia}/${(mes)}/${data.getFullYear()})`

// const relogio = () => {
//     const data = new Date()
//     let hora = data.getHours()
//     hora = hora < 10 ? "0" + hora : hora
//     let minuto = data.getMinutes()
//     minuto = minuto < 10 ? "0" + minuto : minuto
//     let segundo = data.getSeconds()
//     segundo = segundo < 10 ? "0" + segundo : segundo
//     caixaA77.innerHTML = `Data:(${dia}/${(mes)}/${data.getFullYear()})<br/> Relógio: ${hora}:${minuto}:${segundo}`
// }
// relogio()
// const intevalo = setInterval(relogio, 1000)

// 38 - Biblioteca matemática - A80/V81 CFB Cursos

// CODE:

// Math.METHOD()/PROPERTY
// Math.floor() // arredondar com o menor valor
// Math.round() // arredondar com o maior valor
// Math.random()*x // gerar um numero aleatorio de 0 até o valor que desejar, no caso o "x"
// Math.pow() // calculo de potencia [(x,y)], numero x representa o valor da potencia, e y o numero a ser elevado
// Math.PI // gera o valor de PI

// 38.1 - Exercicio de rotação de olhos com mousemove - A81/V82 CFB Cursos

// 39 - Exercicio de Classe com bolinhas - A82 a A86/ V83 a V87 CFB Cursos

// 40 - window.location & window.history [extra(html) = onsubmit="event.preventDefault()" {CANCELAR O EVENTO}]

// CODE:

// window.location="./index.html"
// window.location="https://www.google.com.br"
// window.location.replace("https://www.google.com.br") // Deleta a URL corrente do Histórico
// window.location.assign("https://www.google.com.br") // NÃO deleta a URL corrente do Histórico
// window.location.reload() // Recarregar a página
// window.history.back() // Voltar uma página no histórico
// window.history.forward() // Avançar uma página no histórico
// window.history.go(1)// Escolher quantas páginas avançar ou voltar[1=avançar 1 pagina, -1=voltar 1 pagina]

// 41 - Caixas de Diálogos - alert,confirm,prompt - São os 3 padrões mas é possível criar sua própria caixa de diálogo

// CODE:

// const a = alert("Você foi alertado") //Nenhum retorno (void)
// console.log(a)

// const c = confirm("Quer ser alertado ?") //Retorna true se pressionar OK ou false se pressionar cancelar
// console.log(c)

// const p = prompt("Qual seu nome ?", "Texto padrão")//Retorna a string que foi digitada quando apertar OK ou null se apertar CANCELAR
// console.log(p)

// 42 - Criando PDF e Imprimindo conteúdo da página em HTML

//CODE:

// //Criando o conteúdo (HTML e CSS)
// const conteudo = document.createElement("div")
// conteudo.setAttribute("id", "conteudo")
// conteudo.style = "border:2px solid black;width:300px;height:300px;margin:20px 0 0 700px;justify-content:center;display:flex;align-items:center;position:absolute;top:300px"
// document.body.appendChild(conteudo)
// conteudo.innerHTML = "Teste de impressão e pdf"

// //Botão de Impressão
// const botao = document.createElement("button")
// botao.innerHTML = "Imprimir"
// botao.style = "margin: 10px 0 0 775px"
// document.body.appendChild(botao)

// //Impressão e PDF
// botao.addEventListener("click", (evt) => {
//     const conteud = document.getElementById("conteudo").innerHTML

//     let estilo = "<style>"
//     estilo += " #conteudo {border:2px solid black;width:300px;height:300px;margin:20px 0 0 700px;justify-content:center;display:flex;align-items:center}"
//     estilo += "</style>"

//     const win = window.open("", "", "height=700,width=700")

//     win.document.write("<html><head>")
//     win.document.write("<title>Imprimindo ou PDF</title>")
//     win.document.write(estilo)
//     win.document.write("</head><body>")
//     win.document.write(conteud)
//     win.document.write("</body></html>")

//     win.print()
//     win.close()
// })

// 43 - Objetos Literais A90&A91 V91&A92

//CODE:

//Criando o conteúdo (HTML e CSS)
// const conteudo = document.createElement("div")
// conteudo.setAttribute("id", "conteudo")
// conteudo.style = "border:2px solid black;width:300px;height:500px;margin:20px 0 0 700px;justify-content:center;display:flex;align-items:center;position:absolute;top:300px"
// document.body.appendChild(conteudo)

//Objeto Literal

// const computador = {
//     processador: "i9",//Propriedades
//     ram: "32GB",
//     sdd: "1TB",
//     info: function () { console.log(this.processador) }, //Método com function [i9]
//     info2: () => { console.log(this.processador) } //Método com arrow function [undefined]

// }
// console.log(computador)
// computador.info() //Chamando o método com function
// computador.info2() //Chamando o método com arrow function
// conteudo.innerHTML = `Processador:${computador.processador}<br/>Memória RAM${computador.ram}<br/>SDD:${computador.sdd}` //Imprimindo na tela o conteúdo

//Array de Objetos Literais

// const computadores = [
//     {
//         processador: "i9",
//         ram: "32GB",
//         sdd: "1TB",
//         info: () => { console.log(computadores[0].processador) }
//     },
//     {
//         processador: "i7",
//         ram: "16GB",
//         sdd: "1TB",
//         info: () => { console.log(computadores[1].processador) }
//     },
//     {
//         processador: "i5",
//         ram: "8GB",
//         sdd: "1TB",
//         info: () => { console.log(computadores[2].processador) }
//     }
// ]
// console.log(computadores)
// computadores[0].info() //Chamando método de um objeto literal dentro de um array
// computadores[1].info()
// computadores[2].info()

// computadores.map((e, i) => {
//     computadores[i].placaVideo = "RTX" //Adicionando nova Propriedade, maneira 1
//     computadores[i]["fonte"] = "GameMax" //Adicionando nova Propriedade, maneira 2
//     conteudo.innerHTML += `Computador ${(i + 1)}:<br/><br/>`
//     conteudo.innerHTML += `Processador: ${computadores[i].processador}<br/>`
//     conteudo.innerHTML += `Memória RAM: ${computadores[i].ram}<br/>`
//     conteudo.innerHTML += `Armazenamento: ${computadores[i].sdd}<br/>`
//     conteudo.innerHTML += `Placa-de-video: ${computadores[i].placaVideo}<br/>`
//     conteudo.innerHTML += `Fonte: ${computadores[i].fonte}<br/>`
//     conteudo.innerHTML += `-----------------------------------------------<br/>`
//     console.log(computadores)
// }) // Imprimindo um array de objetos literais na tela

//Clonando e Criando novos objetos literais apartir de outro

// const computador = {
//     processador: "",//Propriedades
//     ram: "32GB",
//     sdd: "1TB",
//     info: function () { console.log("Processador:" + this.processador) }, //Método com function [i9]
//     info2: () => { console.log(this.processador) } //Método com arrow function [undefined]

// }
// console.log("Original")
// console.log(computador)
// computador.info()
// const c1 = Object.assign({}, computador) //Clonando um objeto literal [{}=objeto literal vazio fundiu com(,computador)]
// console.log("Clone")
// console.log(c1)

// //Fundindo vários objetos literais

// const c2 = { obj1: "1" }
// const c3 = { obj2: "2" }
// const c4 = { obj3: "3" }
// const fusao = Object.assign(c2, c3, c4)
// console.log("Fusão")
// console.log(fusao)

// //Criando um novo objeto a partir de um já existente (quase como se fosse uma class)

// const o1 = Object.create(computador)
// o1.processador = "i9    "
// console.log("Novo")
// o1.info()
// console.log(o1)

// 44 - Módulos - A92 V93 - Reutilizar códigos de outros arquivos script

//CODE:

// arquivo1.js - Arquivo no qual quero importar/trazer um código de outro arquivo
// HTML:

//     <script src="arquivo1.js" type:module></script>

// JavaScript:

// import { cursos } from "arquivo2.js"


// arquivo2.js - Arquivo no qual você enviará/exportará um código para outro
// JavaScript:

// const cursos=["curso1","curso2","curso3"]
// export {cursos}

// EXEMPLO:
//--------- EXPORT: ----------//

// const asdasdasda = 20000

// export { asdasdasda } //exportação

// export default carros //exportação como padrão de um arquvo, só pode ter uma exportação como padrão por arquivo

//--------- IMPORT -----------// (NÃO ESQUECE DE COLOCAR .JS NO FINAL)

// import { cursos } from "./modules.js" // - importando um elemento
// console.log(cursos)

// import { rgb, cursos } from "./modules.js" // - importando dois ou mais elementos
// console.log(cursos)
// setInterval(() => { rgb(botaoExercicios) }, 5000) // NOTA IMPORTANTE: Caso utilizar o setInterval com uma função com parâmentro, utilizar uma função anônima e dentro a função em questão

// import carros from "./modules.js" //Chamando uma exportação padrão (não precisa utilizar o mesmo nome na exportação default[o "carros" poderia ser qualquer valor que seria a mesma coisa])
// carros()

// import { cursos as cursao } from "./modules.js" //Mudando o valor/nome do item importado
// console.log(cursao)

// import * as allImport from "./modules.js" //Importando todos os elementos que foram exportados do arquivo(./modules.js)
// allImport.default()
// console.log(allImport.cursos)
// setInterval(() => { allImport.rgb(botaoExercicios) }, 5000)

// import { Cursos as cursote } from "./modules.js" //Importando classes (sem o construtor)
// console.log(cursote.cursos1)
// cursote.addCursos("Curso EXTRA")
// console.log(cursote.cursos1)

// 44.2 - Exercicio pratico - A92-A97 V93-V98

// 45 - SYMBOL - A98-A100 - Traz um identificador único para o item Symbol, tal identificador apenas utilizado no próprio arquivo .js,ou seja não se pode utiliza-lo no DOM.

//CODE:

// const s1 = Symbol() //Passa ao item um identificador único ainda não definido
// const s2 = Symbol()
// const s3 = Symbol.for("chave") //Passa ao item um identificador global definido como parâmetro ("chave")
// const s4 = Symbol.for("chave") //Pode utilizar um identificador global para dois items, o que os torna "iguais"

// console.log(s1)
// console.log(s1 === s2)
// console.log(s3 === s4)
// console.log(Symbol.keyFor(s1))//Procurando pela chave global do item symbol [undefined]
// console.log(Symbol.keyFor(s3))//Procurando pela chave global do item symbol ["chave"]

//46 - Funções para manipulação de Strings - A101-A103

//CODE:

// let nome = new String("Marcos") //Class (new String) foi utilizada para melhor observação do conteúdo no console [objeto String]
// let canal = " zHacks a "

// console.log(nome) //Clara diferença no console para análise
// console.log(typeof (nome)) //Object string
// console.log(canal)
// console.log(typeof (canal)) //var String

// console.log(nome.charAt(0)) //Impressão do carácter na posição definida no parâmetro(0) [como se a string fosse um array e cada letra/character fosse um elemento dentro desse array]
// console.log(canal.charAt(1))

// console.log(nome.charCodeAt(0))//Impressão do código do carácter

// console.log(nome.concat(canal)) //Impressão da fusão/concatenação do item nome com o item canal [apenas retornou no console, os items em si não se fundiram ainda]
// console.log(nome)
// nome = nome.concat(canal) //Fusão item nome com canal para com a variável "nome"
// nome = new String(nome) //Transformei o valor nome para com a classe new String como parâmetro e valor (nome) também
// console.log(nome)
// console.log(nome.indexOf("a")) //Retorna o indice do primeiro item com o valor do parâmetro("a")
// console.log(nome.lastIndexOf("a")) //Retorna o indice do último item com o valor do parâmetro("a")

// let n1 = new String("Davi")
// let n2 = new String("Davi")

// console.log(n1.localeCompare(n2)) //Comparar dois Object String,se retornar 0 são iguais,se retornar 1 a primeira string é diferente e maior que a segunda,se retornar -1 a primeira string é diferente e menor que a segunda

// let n3 = new String("Lucas") //Maior e diferente
// let n4 = new String("Davi") //Menor e Diferente

// console.log(n3.localeCompare(n4)) //1
// console.log(n4.localeCompare(n3)) //-1

// console.log(nome.replace("Marcos", "M4rcosz")) //Replace/Recolocar/Substituir pega o primeiro parâmetro como um valor dentro do array/object string e substitui pelo segundo parâmetro

// console.log(nome.search("zHacks")) //Search/Pesquisar está associado a Regex que será apresentado no conteúdo (47) [Basicamente pesquisa a string e retorna o indice do primeiro carácter]

// console.log(nome.slice(7, 13)) //Recortar como se fosse um CRTL + X, retorna o exato valor recortado com o primeiro parameter como o indice do começo do recorte e o segundo parameter como o indice do final do  recorte

// console.log(nome.split("")) //Separa/Dividir os elementos de acordo com o que apresenta no primeiro parameter("")[string vazia, vai dividir tudo,todas as letras e espoaço e tudo]
// console.log(nome.split("", 2))//Segundo parameter indica o número de items que serão divididos/separados e "adicionado" em um array de items separados
// console.log(nome.split(" ")) //Separa/Dividir os elementos de acordo com o que apresenta no primeiro parameter(" ")[string com espaço, vai dividir tudo que está entre espaços]

// console.log(nome.substring(7, 13)) //Semelhante ao slice

// console.log(nome.substr(7, 6)) //Separa de acordo com o primeiro parameter com o indice do começo da separação e o segundo parameter como o número de carácteres após o começo a ser dividido

// console.log(nome.toUpperCase())//Imprime todo o conteúdo em letra maiúscula
// console.log(nome.toLocaleUpperCase())
// console.log(nome.toLowerCase())//Imprime todo o conteúdo em letra minuscula
// console.log(nome.toLocaleLowerCase())

// console.log(nome)
// console.log(nome.valueOf()) //Retorna o valor do objeto, ou seja a string em si

// let num = 10
// console.log(num.toString())//Imprimiu o valor número convertido para String
// console.log(typeof (num))
// num = num.toString()
// console.log(typeof (num))

// console.log(nome.startsWith("Mar"))//Retorna true or false se o array/string começa com o valor do parameter("Mar")

// console.log(n3.endsWith("as"))//Retorna true or false se o array/string termina com o valor do parameter("as")

// console.log(nome.includes("z"))//Retorna true or false se o array/string inclui o valor do parameter("z")

// console.log(n4.repeat(4))//Imprimiu a string com o número de vezes indicado no pameter(4)

// console.log(String.fromCodePoint(77, 65, 100, 101))//Retorna carácteres/números de acordo com o seu CodePoint

// 47 - RegEx(Expressões Regulares) A105 e A106 [RegExp] - Verificar se o método aceita o RegExp

// CODE:

// let nome = new String("Marcos Paulo Freire 123456789 ooooooo")

// console.log(nome.search("paulo")) //Valor não encontrado devido ao CaseSensitive, assim, o CodePoint do valor p minusculo e o P maiúsculo são diferentes

// console.log(nome.search(/paulo/i)) //Usando as // dessas forma, e colocando uns inscrimento/modificador como por exemplo o i, que no RegEx significa para não utilizar o CasaSensitive

// console.log(nome.match("o")) //Match/Corresponder ao valor do parameter, só que dessa forma ele apenas retornará o primero "o" que for encontrado

// console.log(nome.match(/o/g)) //Com o Modificador g, significando como global, ele vai buscar e corresponder todos os valor com "o" e retornar

// console.log(nome.match(/O/ig)) //Também é possível combinar os modificadores, assim, como nessa função,ignorando o CaseSensitive e pegando todos os valores correspondentes globais

// console.log(nome.replace(/marcos/i, "M4rcosz"))

// console.log(nome.replace(/a/ig, 4))

// console.log(nome.match(/[oa]/ig)) //Retorna todos os "o" e "a" presente no "nome"

// console.log(nome.match(/[a-e]/ig)) //Retorna as letras de "a" até(-) "e"

// console.log(nome.match(/[a-e|1-7]/ig)) //Retorna as letras de "a" até(-) "e" e também(|) os números de "1" até "7"

// //Metacarácteres

// console.log(nome.match(/\d/ig)) //Retorna apenas digitos/valores númericos

// console.log(nome.match(/\s/ig)) //Retorna apenas espaços " "

// console.log(nome.match(/\bP/ig)) //DWORD

// //Quantificadores (+,*)

// console.log(nome.match(/o+/ig)) //Retorna os caracteres que estão junto como se fosse apenas um carácter

// console.log(nome.match(/os/ig)) //Retorna caracteres com "os"

// console.log(nome.match(/os*/ig)) //Retorna caracteres que comecem com o primero caracter de "os"("o") e o resto que continua com o ultimo caracter [Padrão]

// let num = "1 10 100 1000 10000"

// console.log(num)
// console.log(num.match(/10/ig))
// console.log(num.match(/10+/ig))
// console.log(num.match(/10*/ig))
// console.log(num.match(/10?/ig)) //Retorna apenas as primeras ocorrencias do 1 e do 0

// 48 Animação com JavaScript Puro

// CODE:
// A107
////Estruturação e Estilização (HTML e CSS)

// const carro = document.createElement("div")
// carro.style = "width:200px;height:50px;background-color:red;margin: 30px 0 0 0"
// document.body.style = "margin:0;padding:0"
// document.body.appendChild(carro)
// const btn_left = document.createElement("button")
// const btn_right = document.createElement("button")
// btn_left.style = "margin: 0 10px 0 0"
// document.body.appendChild(btn_left)
// document.body.appendChild(btn_right)
// btn_left.innerHTML = "<--"
// btn_right.innerHTML = "-->"

// ////Animação CODES

// const init = (x) => {
//     x.style.position = "relative"
//     x.style.left = "0px"
// }
// init(carro)
// let parar = false
// let parar2 = false
// // let itv = null //M1]
// let tamMax = window.innerWidth - parseInt(carro.style.width)
// window.addEventListener("resize", () => {
//     tamMax = window.innerWidth - parseInt(carro.style.width)
//     if ((pos + parseInt(carro.style.width)) > window.innerWidth) {
//         pos = tamMax
//         carro.style.left = `${pos}px`
//     }
// })
// let pos = null
// const mover = (dir) => {
//     pos = parseInt(carro.style.left)
//     pos += dir
//     carro.style.left = `${pos}px`
//     console.log(pos)
//     if (pos <= 0) {
//         pos = 0
//         carro.style.left = `${pos}px`
//     }
//     else if (pos >= (tamMax)) {
//         pos = (tamMax)
//         carro.style.left = `${pos}px`


//     }
// }

// let intervalo = {
//     nome: null,
//     ativar: function (dir) {
//         this.nome = setInterval(mover, 10, dir)
//     },
//     desativar: function () {
//         clearInterval(this.nome)
//     }
// }//M2/M3

// btn_left.addEventListener("click", (evt) => {
//     // clearInterval(itv)//M1
//     // intervalo.desativar()//M2
//     clearInterval(intervalo.nome)//M3
//     if (parar2) {
//         if (!parar) {
//             // clearInterval(itv) //M1
//             // itv = setInterval(mover, 10, -10) //M1
//             // intervalo.desativar()//M2
//             clearInterval(intervalo.nome)//M3
//             intervalo.ativar(-10)//M2
//             parar = true
//         }
//         else if (parar) {
//             // clearInterval(itv)//M1
//             // intervalo.desativar()//M2
//             clearInterval(intervalo.nome)//M3
//             parar = false
//         }
//     }
//     else {
//         // clearInterval(itv)//M1
//         // itv = setInterval(mover, 10, -10)//M1
//         // intervalo.desativar()//M2
//         clearInterval(intervalo.nome)//M3
//         intervalo.ativar(-10)//M2
//         parar2 = true
//     }
// })

// btn_right.addEventListener("click", (evt) => {
//     // clearInterval(itv)//M1
//     // intervalo.desativar()//M2
//     clearInterval(intervalo.nome)//M3
//     if (!parar2) {
//         if (!parar) {
//             // clearInterval(itv)//M1
//             // itv = setInterval(mover, 10, 10)//M1
//             // intervalo.desativar()//M2
//             clearInterval(intervalo.nome)//M3
//             intervalo.ativar(10)//M2
//             parar = true
//         }
//         else if (parar) {
//             // clearInterval(itv)//M1
//             // intervalo.desativar()//M2
//             clearInterval(intervalo.nome)//M3
//             parar = false
//         }
//     }
//     else {
//         // clearInterval(itv)//M1
//         // itv = setInterval(mover, 10, 10)//M1
//         // intervalo.desativar()//M2
//         clearInterval(intervalo.nome)//M3
//         intervalo.ativar(10)//M2
//         parar2 = false
//     }

// })

// 48.2 - A111 - Breve utilização do event keydown com condições evt.code="ArrowUp"

// 49 - getBoundingClientRect() - Método MUITO IMPORTANTE E ÚTIL para descobrir as propriedades de um elemento HTML, dessas propriedades são=(x,y,left,right,top,bottom,width,heigth)

// CODE:

// const mainBox = document.getElementById("mainBox")

// let domRect_mainbox = mainBox.getBoundingClientRect() //Todos os 8 valores
// console.log(domRect_mainbox) //Todos os 8 valores

// console.log(`x = ${domRect_mainbox.x}`) //Valor da posição x
// console.log(`y = ${domRect_mainbox.y}`) //Valor da posição y
// console.log(`top = ${domRect_mainbox.top}`) //Valor do top
// console.log(`right = ${domRect_mainbox.right}`) //Valor do right
// console.log(`bottom = ${domRect_mainbox.bottom}`)//Valor do bottom
// console.log(`left = ${domRect_mainbox.left}`) //Valor do left
// console.log(`width = ${domRect_mainbox.width}`) //Valor da largura(width)
// console.log(`height = ${domRect_mainbox.height}`) //Valor da altura(height)

// 50 - Propriedade acessKey - com ela você define uma tecla para acessar um elemento HTML em questão, como se estivesse clicando no elemento, para utiliza-la deve usar Alt + a tecla definida

// CODE:

// botaoExercicios.accessKey = "m" //Quando pressionado Alt + M, o botão de ir para página de exercicios será acionado

// console.log(botaoExercicios.accessKey) //Imprimir a tecla de acesso ao elemento

// 51 - Desestruturação - associar dados de objetos ou arrays em variáveis distintas

// CODE:

// let a, b, c, d; //Criar as var

// [a, b = 0, c, d] = [1, 2, 3, "quatro"]; //Associar as var de acordo com os item do array

// console.log(a);
// console.log(b); //Alterou o valor de 0, para o inserido no array
// console.log(c);
// console.log(d);

// let e, f, g, h;;

// ({ e, f, g, h } = { e: 1, f: "2", g: 3, h: d }); //Desestruturação com objetos

// console.log(e);
// console.log(f);
// console.log(g);
// console.log(h);

// const numeros = () => {
//     return [10, 20, 30, 40]
// };

// [a, b, c, d] = numeros(); //Desestruturação com função

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// let num = [11, 22, 33];

// [e, f, g, h] = num; //Desest. com var array com valores incompletos

// console.log(e);
// console.log(f);
// console.log(g);
// console.log(h);

// let [z, y, w] = num; //Desest. com var array com valores completos

// console.log(z)
// console.log(y)
// console.log(w)

// let l = 10;
// let i = 20;

// [l, i] = [i, l] //Trocando valores de var

// console.log(l)
// console.log(i)

// let ar_numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// let [o, u, ...n] = ar_numeros; //Usando o rest/spread

// console.log(o);
// console.log(u);
// console.log(n);

// const fa = () => {
//     return [1, 2, 3, 4, 5]
// };

// [a, b, c, , d] = fa(); //Escolhendo o valor a ser designado do retorno de uma função

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// const obj = { nome: "marcos", idade: 18 };

// let { nome, idade } = obj; //Designando var à propriedades de um obj literal de forma indireta


// let texto = "Curso de Javascript";

// let [t] = texto;
// console.log(t);

// let [t1, t2] = texto.split(" ");
// console.log(texto.split(" "));
// console.log(t1);
// console.log(t2);

// let [...tudo] = texto.split(" ");
// console.log(tudo);

// tudo = JSON.stringify(tudo);
// console.log(tudo);
// tudo = new String(tudo)
// console.log(tudo);

// 52 - Geolocalização - A116 - Se permitida a utilização da localização pelo navegador, é possivel adquirir alguns elementos como timestamp,longitude,latitude do usuário

// 53 - Casos em que é obrigatório o uso de Ponto e Vírgula(;) no JS - CFB Cursos A117 e A118

// 54 - Validação nativa - verificar a validação de um campo de preenchimento e poder fazer certas ações, como por exemplo gerar uma mensagem de alerta padrão para cada tipo de invalidação

////////Métodos de validação do DOM:
////checkValidity() - if(se) for validado true [Checar Validade]
////setCustomValidity() - personalizar a mensagem de validação

////////Propriedade de validação do DOM
////validity
////validationMessage

////////Propriedades de validação - checkValidity faz a validação de todas as seguintes constantes
/*
customError: true, se uma mensagem de validação personalizada for definida.
patternMismatch: true, se o valor de um elemento não corresponder ao seu atributo padrão.
rangeOverflow: true, se o valor de um elemento for maior que seu atributo max.
rangeUnderflow: true, se o valor de um elemento for menor que seu atributo min.
stepMismatch: true, se o valor de um elemento for inválido por seu atributo step.
tooLong: true, se o valor de um elemento exceder seu atributo maxLength.
tooShort: true, se o valor de um elemento for menor que seu atributo minLength.
typeMismatch: true, se o valor de um elemento for inválido por seu atributo type.
valueMissing: true, se um elemento (com um atributo obrigatório) não tiver valor.
valid: true, se o valor de um elemento for válido.
*/

// Estrutura HTML/CSS//

// const container = document.createElement("div")
// document.body.appendChild(container)
// container.style = "width:300px;height:300px;border:3px solid black;position:absolute;left:700px;bottom:400px;display:flex;flex-direction: column;justify-content:center;align-items:center"
// const form = document.createElement("form")
// const input_txt = document.createElement("input")
// const input_number = document.createElement("input")
// const btn_validation = document.createElement("button")
// container.appendChild(form)
// form.appendChild(input_txt)
// form.appendChild(input_number)
// form.appendChild(btn_validation)
// input_txt.setAttribute("type", "text")
// input_txt.setAttribute("minLength", "4")
// input_txt.setAttribute("maxLength", "8")
// input_txt.setAttribute("required", "")
// input_number.setAttribute("type", "number")
// input_number.setAttribute("min", "0")
// input_number.setAttribute("max", "10")
// input_number.setAttribute("required", "")
// input_number.style = "margin:10px 0 0 0;width:180px"
// input_txt.style = "width:180px"
// form.style = "display:flex;flex-direction:column;justify-content:center;align-items:center"
// btn_validation.classList.add("btn")
// btn_validation.innerHTML = "Validar"
// const valMsg = document.createElement("p")
// form.appendChild(valMsg)

//CODE:

//Mensagens padrões de validação
// input_txt.removeAttribute("required")
// btn_validation.addEventListener("click", (evt) => {
//     let msg = null
//     if (!input_number.checkValidity()) {
//         msg = input_number.validationMessage
//     }
//     input_number.reportValidity()
//     valMsg.innerHTML = msg
//     evt.preventDefault()
// })

//Mensagens personalizadas de validação

// input_txt.removeAttribute("required")
// btn_validation.addEventListener("click", (evt) => {
//     let estadoValidacao = input_number.validity
//     if (estadoValidacao.valueMissing) {
//         input_number.setCustomValidity("Mensagem de validação personalizada")
//     } else if (estadoValidacao.rangeOverflow) {
//         input_number.setCustomValidity("GRANDÃO DEMAIS")
//     }
//     else if (estadoValidacao.rangeUnderflow) {
//         input_number.setCustomValidity("PEQUENINHO DEMAIS")
//     }

//     // input_number.reportValidity()//Reportar validade, com isso aciona para mostrar o mini alert com a mensagem customizada [aciona o mini alerta msm com o preventDefault ativado]
//     valMsg.innerHTML = input_number.validationMessage//Dessa forma a mensagem de validação customizada vai ser inserida nesse innerHTML.
//     evt.preventDefault()
// })

//Outra Maneira de fazer a mensagem personalizada para um campo innerHTML

// input_txt.removeAttribute("required")
// btn_validation.addEventListener("click", (evt) => {
//     let msg = null
//     let estadoValidacao = input_number.validity
//     if (estadoValidacao.valueMissing) {
//         msg = "Preencha alguma coisa :("
//     } else if (estadoValidacao.rangeOverflow) {
//         msg = "Valor acima do limite :/"
//     }
//     else if (estadoValidacao.rangeUnderflow) {
//         msg = "Valor menor que o minímo :/"
//     }
//     input_number.setCustomValidity(msg) //Aparecer uma mensagem customizada como mini alerta, de acordo com o parameter(msg)
//     input_number.reportValidity() //Se desativado o mini alerta com o preventDefault, utilizar o reportValidity
//     valMsg.innerHTML = msg
//     evt.preventDefault()
// })

// 55 - WebStorage - localStorage = armazenamento local das chaves e valores que são mantidas mesmo após fechar o browser sessionStorage = igual o localStorage só que quando fechado o browser as informações são perdidas

// CODE:Ir em application para poder observar as chaves inseridas

// window.localStorage.clear()//Limpa todas as chaves
// localStorage.setItem("chave", "valor")//Adiciona uma chave e um valor associado à ela
// console.log(localStorage.length) //Propriedade com o tamanho do armazenamento,ou seja,q quantas chaves com valores possuem
// console.log(localStorage.getItem("chave")) //Método para obter o valor de uma chave
// localStorage.setItem("chave2", "valor2")
// localStorage.setItem("chave3", "valor3")
// console.log(localStorage.key(0)) //Retorna a key/chave de acordo com o indice[funcionamente/lógica da ordem não compreendida]
// localStorage.removeItem("chave2")
// localStorage.clear()

// sessionStorage. //sessionStorage possui os mesmo códigos e métodos de utilização que o localStorage, única diferença é no seu fundamento como WebStorage

// 56 - FETCH para consumo de APIs - A122 - basicamente com isso é possível acessar dados de uma API externa e trabalhar com eles, e até mesmo alterar/escrever esses dados

//CAMPO HTML/CSS//

// const app = document.createElement("p")
// document.body.appendChild(app)

// CODE:[Lembrando que o fetch é uma promise que retorna uma response(resposta)]

///Maneira 1 - fetch e .then - [then espera a promessa ser resolvida e recebe o retorno do item anterior]
/* ACESSANDO DADOS */

// const fet = fetch("https://ranekapi.origamid.dev/json/api/produto") //Não usar (;) porque a continuação do código é considerado como se fosse apenas uma line de código.
//     .then(resposta => {
//         console.log(resposta) //Imprimindo a response[os dados que a API está retornando]
//         return resposta.json()//Método que funciona apenas para respostas de uma promessa [basicamente transforma a response em um objeto json/array de objetos json]
//     })/////////////////////////Há vários outros métodos para o response de um promise, possivel ver os métodos através do console.log da response
//     .then(respostaJSON => {
//         console.log(respostaJSON)//Imprimiu o retorno do algumento(resposta) [resposta.json()]
//         let item1 = JSON.stringify(respostaJSON[2]) //Transformando JSON em string
//         console.log(item1) // Imprimindo o JSON transformado em string
//         app.innerHTML = respostaJSON[2].nome //Imprimindo do arrayJSON no indice(2), a propriedade "nome"
//         app.innerHTML += "<br/>Preço:" + respostaJSON[2].preco //Imprimindo a propriedade "preco"
//     });
// console.log(fet); // Imprimindo a promise

// /* ALTERANDO/ADICIONANDO DADOS - (https://ranek.origamid.dev/login) - alterar dados e "criar" uma conta nesse site utilizando a API*/

// const dados = {
//     id: "marcoscos",
//     nome: "Marcos",
//     email: "marcos@marcos.com",
//     senha: "123456",
//     cep: "123456",
//     rua: "Rua Acre",
//     numero: "999",
//     bairro: "Dino",
//     cidade: "Jurrasic",
//     estado: "Park"
// };//Dados do usuario do site


// fetch("https://ranekapi.origamid.dev/json/api/usuario", {
//     method: "POST",//Método de POST[Colocando uma informação no servidor]
//     headers: {
//         "Content-Type": "application/json"
//     },//Cabeçalho[Qual o tipo de conteúdo que está sendo enviado para o servidor(Aplicação json)]
//     body: JSON.stringify(dados) //Corpo[o que será enviado para o servidor](precisa ser mandado em formato de string por isso o stringify)
// });


///Maneira 2 - fetch e async/await

//podemos colocar try{} catch(e){}
//para lidarmos com erros

// async function fet(url) {
//     const resposta = await fetch(url); //Com o await, a variavel "resposta" espera a promesa "fetch()" terminar de executar, para ai então armazenar seu valor que é a "response" da "promise"
//     console.log(resposta); //Conteúdo "resposta" com o retorno da promise aguardada(usando o await)[retornou uma RESPONSE]
//     const resposta2 = fetch(url);
//     console.log(resposta2);//Conteúdo "resposta2" sem o retorno da promise aguardada(sem o await)[retornou uma PROMISE]
//     const json = await resposta.json(); //Método json() também é uma promise porque ele aguarda o valor de outro promessa(o fetch dentro da resposta), ou seja, sem o await, retornaria[PROMISE] ao invés de um json
//     return json;
// };//Com isso, já é possível acessar o response que foi convertido em obeject/array json.[função assincrona que espera(await) o promise]

// fet("https://ranekapi.origamid.dev/json/api/produto").then(any => app.innerHTML = any[0].nome)

//Fetch - CFB Cursos - A122-A127

//57 - Chart.js - Biblioteca para criação e desenvolvimento de gráficos. A126 e A128

//58 - Exercicio criando um cronômetro super preciso CFB Cursos - A129-A132

//59 - Criando um topo reaproveitável A133 e A134 (topo.js e topo.css)

// CODE:[PARTE HTML (Apenas colocar o script do arquivo topo e automaticamente o topo será criado)]

/* <script src="topo.js"></script> */ //Colocar o script do topo antes dos outros scripts

// CODE:[PARTE JS (Usar esse código em um arquivo diferente "topo.js" por exemplo)]

// const head = document.head
// const body = document.body

// const estilo = "<link rel='stylesheet' type='text/css' href='topo.css'/>"

// head.innerHTML += estilo

// const topo = document.createElement("div")
// topo.setAttribute("id", "topo")
// topo.setAttribute("class", "topo")
// body.prepend(topo)//prepend é o oposto de apendChild, ele coloca o conteúdo no começo ao invés do final

// /*Formato de construção para o HTML do topo */

// const logo =
//     "<div id='logo' class='logo'>" +
//     "<img src='ANY' title='ANY'/>" +
//     "</div>"
// topo.innerHTML += logo

// const login =
//     "<div id='login' class='login'>" +
//     "<p id='email'>Email:<span></span></p>" +
//     "<p id='senha'>Senha:<span></span></p>" +
//     "</div>"
// topo.innerHTML += login

// //Para utilizar do css(topo.css), apenas utilizar as IDs e Class acima que foram criadas

// 60 - 