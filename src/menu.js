export default function menuLoad(){
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
    contentCont.appendChild(menuCont)

    const startersCont = document.createElement("div")
    const startersHead = document.createElement("h3")
    const fishStarter = document.createElement("p")
    const vegStarter = document.createElement("p")
    const oliveStarter = document.createElement("p")

    startersCont.className = "menu starters"
    startersHead.className = "menu-section starters"
    fishStarter.className = "starters item"
    vegStarter.className = "starters item"
    oliveStarter.className = "starters item"

    startersHead.textContent = "Starters"
    fishStarter.textContent = "sardinian sardines in sweet sauce"
    vegStarter.textContent = "braised brocolli with bernaise glaze"
    oliveStarter.textContent = "just some olives - good ones though"

    startersCont.appendChild(startersHead)
    startersCont.appendChild(fishStarter)
    startersCont.appendChild(vegStarter)
    startersCont.appendChild(oliveStarter)
    menuCont.appendChild(startersCont)


}
