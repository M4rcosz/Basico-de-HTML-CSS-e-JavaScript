const head = document.head
const body = document.body

// const estilo = "<link rel='stylesheet' type='text/css' href='topo.css'/>" //Usando um arquivo.css

// head.innerHTML += estilo //Usando um arquivo.css
const estiloTopo =
    "background-color: rgb(180, 102, 253);" +
    "height: 100px;"

const topo = document.createElement("div")
topo.setAttribute("id", "topo")
topo.setAttribute("style", estiloTopo)
// topo.setAttribute("class", "topo") //Usando um arquivo.css
body.prepend(topo)


const logo =
    "<div id='logo' class='logo'>" +
    "<img src='ANY' title='ANY'/>" +
    "</div>"
topo.innerHTML += logo

const estiloLogin =
    "color:red";
const login =
    "<div id='login' class='login' style='" + estiloLogin + "'>" +
    "<p id='email'>Email:<span></span></p>" +
    "<p id='senha'>Senha:<span></span></p>" +
    "</div>"
topo.innerHTML += login