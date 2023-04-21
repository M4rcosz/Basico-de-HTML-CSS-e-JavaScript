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


