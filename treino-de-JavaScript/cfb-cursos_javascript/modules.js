let cursos = ["curso 1", "curso 2", "curso 3", "curso 4"]

export { cursos }
const rgb = (element) => {
    for (let i = 0; i < 10; i++) {
        let r = (Math.floor(Math.random() * 255))
        let g = (Math.floor(Math.random() * 255))
        let b = (Math.floor(Math.random() * 255))
        element.style = `text-shadow: 2px 1px 2px black, -2px 1px 2px black, 0px -2px 2px black;font-weight:bold;background-color: rgb(${r}, ${g}, ${b})`
    }
}
// const intevalo = setInterval(rgb(), 200)
export { rgb }

const carros = () => {
    console.log("2")

}
export default carros

class Cursos {
    static cursos1 = ["curso 1", "curso 2", "curso 3", "curso 4"]
    constructor() { }
    static addCursos = (curso) => {
        this.cursos1.push(curso)
    }
}
export { Cursos }