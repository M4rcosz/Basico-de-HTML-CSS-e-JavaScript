{/* 0 - <script src="js/curso.js"></script> - comando que é utilizado para linkar o JavaScript externo com a página
em HTML, sempre utilizar esse link no final do corpo body, para ser o último a ser carregado pelo sistema,
assim evitando problemas no carregamento e processamento da página. */}

// 1 - innerHTML - Imprimir texto com JavaScript

document.getElementById("text").innerHTML = 'Meu texto em <b>JavaScript</b>';

// 1.2 - document.write - Outra forma de imprimir algo na tela, mas de forma direto no próprio HTML.

// <script>
// document.write("atráves do document.write");
// </script>

// 1.3 - alert - Literalmente imprimir uma mensagem de alerta na tela

// alert("AVISOO");

// 1.4 - console.log - Imprimir mensagens ou resultados no console da página

// console.log("este é um console.log");

// 2 - Declarações - Declarações no JavaScript são como os códigos que escrevemos e separamos com(;)

// Ex:
// let a = 2; - Uma Declaração
// let b = 3; - Outra Declaração
// a= 2; b=5; - Duas Declarações na mesma linha, separadas pelo (;)

// 2.1 - Espaços Vazios e Quebra de Linha - O JavaScript ignora completamento os espaços vazios, então
// não faz diferença se você der um espaço após um (=) por exemplo, e também, o JavaScript permite quebras de
// linha nos códigos desde que tenha um (;) no final.

//  3 - this. - é possível utiliza-lo para pegar um valor de ums propriedade dentro de um Objeto

// Ex:
// const carro = {
//     nome: 'Shotaro',
//     ano: 2023,
//     marca: 'Lamborghini',
//     completo: function () {
//         return 'Nome do carro é ' + this.nome + ' do ano de ' + this.ano + ' e sua marca é a ' + this.marca
//     }
// }
// console.log(carro.completo());
// document.getElementById('text1').innerHTML = carro.completo();

/* 4 - EVENTOS( IMPORTANTE!) - Eventos são ações disparadas pela interação dos usuários na página.
 É o correto manejo desses eventos que tornam as páginas interativas e dinâmicas.

 Existem muitos eventos. Veja os mais utilizados:

 1  - onclick -> Disparado quando recebe um click.
 2  - ondblclick -> Disparado quando clique duplo.
 3  - onmouseover -> Disparado quando o mouse está sobre.
 4  - onmouseout -> Disparado quando o mouse é movido para fora do elemento.
 5  - onmousemove -> Disparado quando o mouse é movido no elemento.
 6  - onmousedown -> Disparado quando o click do botão foi pressionado.
 7  - onmouseup -> Disparado quando o click do botão é liberado.
 8  - onfocus -> Disparado quando o elemento recebe o foco. Válido para input, s
 9  - onchange -> Disparado quando existe uma mudança no conteúdo. "Ao mudar".
 10 - onblur -> Disparado quando o elemento perde o foco.
 11 - onkeydown -> Disparado quando uma tecla é pressionada.
 12 - onkeypress -> Disparado quando uma tecla é pressionada e solta.
 13 - onkeyup -> Disparado quando uma tecla é solta sobre um elemento.
 14 - onload -> Disparado quando a página terminou de ser carregada. body.
 15 - onresize -> Disparado quando há um redimencionamento da janela.
 */
// 4.1 - onclick

// function eventoClick() {
//     document.body.style.backgroundColor = "green";
// }

// 4.2 - ondblclick

// function eventoDblClick() {
//     document.body.style.backgroundColor = "red";
// }

// 4.3 - onmouseover

function eventoOnMouseOver() {
    let divTeste1 = document.getElementById("onMouseOver");
    divTeste1.style.backgroundColor = "Black";
}

// 4.4 - onmouseout

function eventoVoltarCor() {
    let divTeste1 = document.getElementById('onMouseOver');
    divTeste1.style.backgroundColor = 'Blue';
}

// 4.5 - onmousemove

// function eventoOnMouseMove() {
//     let mouseMove = document.getElementById('text1');
//     mouseMove.append('1');
// }

// 4.6 - onmousedown

// Ex:
// <body onmousedown="alert(você clicou e segurou o click na tela)">

// 4.7 - onmouseup

// Ex:
// <body onmouseup="alert(você deixou de segurar o click na tela)">

// 4.8 - onfocus

function limparTexto() {
    document.getElementById('campoTexto').value = ''
}

// 4.9 - onchange

function mudou() {
    console.log('mudou');
}

// 4.10 - onblur

function retornarTexto() {
    document.getElementById('campoTexto').value = 'Digite alguma coisa aqui.'
}

// 4.11 - onkeydown

function onKeyDown() {
    let input = document.getElementById('onkeydown').value;
    console.log(input);
}
// 4.12 - onkeypress

function onKeyPress() {
    let input = document.getElementById('onkeypress').value;
    console.log(input);
}
// 4.13 - onkeyup

function onKeyUp() {
    let input = document.getElementById('onkeyup').value;
    console.log(input);
}
// 4.14 - onload

// <body onload="alert(A Página terminou de carregar.)">

// 4.15 - onresize

// <body onresize="console.log('Houve um redimensionamento)"