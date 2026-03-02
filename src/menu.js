function menuLoad(){
    const contentCont = document.querySelector(".content")

    const headCont = document.createElement("div")
    const headText = document.createElement("h2")
    headText.className = "welcome"
    headCont.className = "welcome-container"
    headText.textContent = "Al Luciano's Al fresco menu"
    headCont.appendChild(headText)
    contentCont.appendChild(headCont)

    const menuCont = document.createElement("div")
    menuCont.className = "menu container"

    const startersCont = document.createElement("div")
    const startersHead = document.createElement("h3")
    const fishStarter = document.createElement("p")
    const vegStarter = document.createElement("p")
    const oliveStarter = document.createElement("p")

    startersCont.className = "menu starters"

}

export default menuLoad()