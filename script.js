function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  //pegar a tag img
  const img = document.querySelector("#profile img")
  // se tiver light mode, adicionar a imagem light
  if (html.classList.contains("light")) {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    //substituir a imagem
    img.setAttribute("src", "./assets/avatar.png")
  }
}
