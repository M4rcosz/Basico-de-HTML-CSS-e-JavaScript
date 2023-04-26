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

// 27 - 

