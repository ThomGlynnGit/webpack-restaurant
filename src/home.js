function homeLoad(){
    const contentCont = document.querySelector(".content")

    const welcomeCont = document.createElement("div")
    const welcomeText = document.createElement("h2")
    welcomeText.className = "welcome"
    welcomeCont.className = "welcome-container"
    welcomeText.textContent = "Welcome"
    welcomeCont.appendChild(welcomeText)
    contentCont.appendChild(welcomeCont)

}

export default homeLoad()