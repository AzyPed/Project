function toggleMode() {
  const html = document.documentElement

  // if (html.classList.contains("light")) {
  //  html.classList.remove("light")
  // } else {
  //   html.classList.add("light")
  // }
  //Esse codigo embaixo, faz tudo que foi escrito aqui em cima... Mas só com UMA linha
  html.classList.toggle("light")

  //pegar a tag IMG
  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./Assets/AvatarVDia.jpg.jfif")
    img.setAttribute("alt", "Placeholder")
  } else {
    //substituir imagem
    img.setAttribute("src", "./Assets/AvatarAzyN.jpg")
    img.setAttribute("alt", "Minha foto noturna")
  }
}
