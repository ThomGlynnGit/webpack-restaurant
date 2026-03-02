import homeLoad from "./home.js"
import menuLoad from "./menu.js"
import aboutLoad from "./about.js"
import "./styles.css"

const homeBtn = document.querySelector("#homeBtn")
const menuBtn = document.querySelector("#menuBtn")
const aboutBtn = document.querySelector("#aboutBtn")
const contentCont = document.querySelector(".content")

homeLoad()

homeBtn.addEventListener("click", ()=> {
    contentCont.replaceChildren()
    homeLoad()
})

menuBtn.addEventListener("click", ()=> {
    contentCont.replaceChildren()
    menuLoad()
})

aboutBtn.addEventListener("click", ()=> {
    contentCont.replaceChildren()
    aboutLoad()
})