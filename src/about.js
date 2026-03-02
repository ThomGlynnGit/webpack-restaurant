export default function aboutLoad(){
    const contentCont = document.querySelector(".content")

    const welcomeCont = document.createElement("div")
    const welcomeText = document.createElement("h2")
    welcomeText.className = "welcome"
    welcomeCont.className = "welcome-container"
    welcomeText.textContent = "We are a fake itlian restaurant, nothing more"
    welcomeCont.appendChild(welcomeText)
    contentCont.appendChild(welcomeCont)

}