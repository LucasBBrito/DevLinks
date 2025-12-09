function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")

// Pegar a tag img
const img = document.querySelector("#profile img")

// subtituir a imagem
if (html.classList.contains("light")) {
    //se tiver light mode adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
} else {
    //se estiver em dark mode manter a imagem
    img.setAttribute("src", "./assets/avatar.png")
}
}

