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

    //starters elements
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

    //mains elements
    const mainsCont = document.createElement("div")
    const mainsHead = document.createElement("h3")
    const fishMain = document.createElement("p")
    const vegMain = document.createElement("p")
    const pizzaMain = document.createElement("p")

    mainsCont.className = "menu mains"
    mainsHead.className = "menu-section mains"
    fishMain.className = "mains item"
    vegMain.className = "mains item"
    pizzaMain.className = "mains item"

    mainsHead.textContent = "Mains"
    fishMain.textContent = "orange orzo with oregano octopus"
    vegMain.textContent = "fiery fig fusilli"
    pizzaMain.textContent = "cheesy tomato bread (pizza)"

    mainsCont.appendChild(mainsHead)
    mainsCont.appendChild(fishMain)
    mainsCont.appendChild(vegMain)
    mainsCont.appendChild(pizzaMain)
    menuCont.appendChild(mainsCont)

    //desserts elements 
    const dessertsCont = document.createElement("div")
    const dessertsHead = document.createElement("h3")
    const chocDessert = document.createElement("p")
    const veganDessert = document.createElement("p")
    const pizzaDessert = document.createElement("p")

    dessertsCont.className = "menu desserts"
    dessertsHead.className = "menu-section desserts"
    chocDessert.className = "desserts item"
    veganDessert.className = "desserts item"
    pizzaDessert.className = "desserts item"

    dessertsHead.textContent = "Desserts"
    chocDessert.textContent = "creamed chocolate cannoli"
    veganDessert.textContent = "vegan vanilla vol-au-vent"
    pizzaDessert.textContent = "chocolate bread (pizza)"

    dessertsCont.appendChild(dessertsHead)
    dessertsCont.appendChild(chocDessert)
    dessertsCont.appendChild(veganDessert)
    dessertsCont.appendChild(pizzaDessert)
    menuCont.appendChild(dessertsCont)


}
