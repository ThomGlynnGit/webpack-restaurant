import homeImage from "./images/home.jpg";

function homeLoad(){
    const contentCont = document.querySelector(".content")

    const welcomeCont = document.createElement("div")
    const welcomeText = document.createElement("h2")
    welcomeText.className = "welcome"
    welcomeCont.className = "welcome-container"
    welcomeText.textContent = "Welcome"
    welcomeCont.appendChild(welcomeText)
    contentCont.appendChild(welcomeCont)

    const homeImg = document.createElement("img")
    homeImg.src = homeImage
    homeImg.width = "428.8"
    homeImg.height = "284.8"
    contentCont.appendChild(homeImg)

}

export default homeLoad()