const numBolinhas = document.getElementById("numBolinhas")
const inputBolinhas = document.getElementById("inputBolinhas")
const btnAddBolinhas = document.getElementById("btnAddBolinhas")
const btnremoverBolinhas = document.getElementById("btnremoverBolinhas")
const btncolorBolinhas = document.getElementById("btncolorBolinhas")
const caixaBolinhas = document.getElementById("caixaBolinhas")
const miniProj = document.getElementById("miniProj")
const aumentar = document.getElementById("aumentar")
const diminuir = document.getElementById("diminuir")
const velPiscada = document.getElementById("velPiscada")

miniProj.addEventListener("click", () => {
    window.location = "../index.html"
})

// caixaBolinhas.addEventListener("mousemove", (evt) => {
//     console.log(`Y:${evt.clientY}`)
//     console.log(`X:${evt.clientX}`)

// })

let larguraCaixa = caixaBolinhas.offsetWidth
let alturaCaixa = caixaBolinhas.offsetHeight
let ar_bolinhas = []
let numBolas = 0

window.addEventListener("resize", () => {
    larguraCaixa = caixaBolinhas.offsetWidth
    alturaCaixa = caixaBolinhas.offsetHeight
})
class Bola {
    constructor(arrayBolinhas, caixaBolinhas) {
        this.tam = Math.floor(Math.random() * 15) + 10
        this.posX = Math.floor(Math.random() * (larguraCaixa - this.tam))
        this.posY = Math.floor(Math.random() * (alturaCaixa - this.tam))
        this.r = Math.floor(Math.random() * 255)
        this.g = Math.floor(Math.random() * 255)
        this.b = Math.floor(Math.random() * 255)
        this.velx = Math.floor(Math.random() * 2) + 0.5
        this.vely = Math.floor(Math.random() * 2) + 0.5
        this.dirX = (Math.random() * 10) > 5 ? 1 : -1
        this.dirY = (Math.random() * 10) > 5 ? 1 : -1
        this.caixaBolinhas = caixaBolinhas
        this.arrayBolinhas = arrayBolinhas
        this.id = Date.now() + "_" + Math.floor(Math.random() * 100000000000000000000)
        this.desenhar()
        this.controle = setInterval(this.controlar, 10)
        this.eu = document.getElementById(this.id)
        numBolas++
        numBolinhas.innerHTML = numBolas
        this.color = setInterval(this.colorido, c_vel)
        clearInterval(this.color)
    }
    minhasPos = () => {
        this.arrayBolinhas.indexOf(this)
    }
    remover = () => {
        clearInterval(this.controle)
        ar_bolinhas = ar_bolinhas.filter((b) => {
            if (b.id != this.id) {
                return b
            }
            this.eu.remove()
            numBolas--
            numBolinhas.innerHTML = numBolas
        })
    }
    desenhar = () => {
        const div = document.createElement("div")
        div.setAttribute("id", this.id)
        div.setAttribute("class", "bolinhas")
        div.setAttribute("style", `left:${this.posX}px;top:${this.posY}px;width:${this.tam}px;height:${this.tam}px;background-color: rgb(${this.r},${this.g},${this.b})`)
        this.caixaBolinhas.appendChild(div)
    }
    controle_bordas = () => {
        if (this.posX + this.tam >= larguraCaixa) {
            this.dirX = -1
        } else if (this.posX <= 0) {
            this.dirX = 1
        }
        if (this.posY + this.tam >= alturaCaixa) {
            this.dirY = -1
        } else if (this.posY <= 0) {
            this.dirY = 1
        }
    }
    controlar = () => {
        this.controle_bordas()
        this.posX += this.dirX * this.velx
        this.posY += this.dirY * this.vely
        this.eu.setAttribute("style", `left:${this.posX}px;top:${this.posY}px;width:${this.tam}px;height:${this.tam}px;background-color: rgb(${this.r},${this.g},${this.b})`)
        if ((this.posX > larguraCaixa || this.posY > alturaCaixa)) {
            this.remover()
        }
    }
    colorido = () => {
        if (!this.eu.classList.contains("piscar")) {
            this.color = setInterval(this.colorido, c_vel)
        }
        this.eu.classList.add("piscar")
        this.r = Math.floor(Math.random() * 255)
        this.g = Math.floor(Math.random() * 255)
        this.b = Math.floor(Math.random() * 255)
        this.eu.setAttribute("style", `left:${this.posX}px;top:${this.posY}px;width:${this.tam}px;height:${this.tam}px;background-color: rgb(${this.r},${this.g},${this.b})`)
    }
    remove_colorido = () => {
        clearInterval(this.color)
        this.eu.classList.remove("piscar")
    }
}

btnAddBolinhas.addEventListener("click", (evt) => {
    for (let i = 0; i < inputBolinhas.value; i++) {
        ar_bolinhas.push(new Bola(ar_bolinhas, caixaBolinhas))
    }
})
btnremoverBolinhas.addEventListener("click", (evt) => {
    ar_bolinhas.map((e) => {
        e.remover()

    })
    c_vel = 0
    velPiscada.innerHTML = c_vel + " Milissegundos"
    btncolorBolinhas.classList.remove("piscar")
})
let c_vel = 0

let intervalo = null;
btncolorBolinhas.addEventListener("click", (evt) => {
    if (numBolas > 0) {

        btncolorBolinhas.classList.toggle("piscar")
        if (btncolorBolinhas.classList.contains("piscar")) {
            ar_bolinhas.map((e) => {
                e.colorido()
            })
            const rgb = () => {
                for (i = 0; i < 10; i++) {
                    let r = (Math.floor(Math.random() * 255))
                    let g = (Math.floor(Math.random() * 255))
                    let b = (Math.floor(Math.random() * 255))
                    btncolorBolinhas.style = `color:white;text-shadow: 2px 1px 2px black, -2px 1px 2px black, 0px -2px 2px black;background-color: rgb(${r}, ${g}, ${b})`
                }
            }
            intervalo = setInterval(rgb, 200)
            c_vel = 100
        }
        else {
            ar_bolinhas.map((e) => {
                e.remove_colorido()
            })
            clearInterval(intervalo)
            btncolorBolinhas.setAttribute("style", "")
            c_vel = 0
        }
    }
    velPiscada.innerHTML = c_vel + " Milissegundos"
})
aumentar.addEventListener("click", (evt) => {
    if (btncolorBolinhas.classList.contains("piscar")) {
        c_vel = (c_vel - 10)
        ar_bolinhas.map((e) => {
            e.remove_colorido()
        })
        ar_bolinhas.map((e) => {
            e.colorido()
        })
    }
    velPiscada.innerHTML = c_vel + " Milissegundos"
})
diminuir.addEventListener("click", (evt) => {
    if (btncolorBolinhas.classList.contains("piscar")) {
        c_vel = (c_vel + 10)
        ar_bolinhas.map((e) => {
            e.remove_colorido()
        })
        ar_bolinhas.map((e) => {
            e.colorido()
        })
    }
    velPiscada.innerHTML = c_vel + " Milissegundos"
})