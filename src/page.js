import homeLoad from "./home.js"
import menuLoad from "./menu.js"

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