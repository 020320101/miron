
let black = document.querySelector(".black")
let tema1 = document.querySelector(".tema1")
let tema2 = document.querySelector(".tema2")
let brend = document.querySelector(".brend")
let bren = document.querySelector(".bren")

tema1.addEventListener("click", () =>{
    black.style.background = "rgb(30, 29, 29)"
    brend.style.color = "rgb(255, 0, 0)"
    bren.style.color = "rgb(255, 0, 0)"
    black.style.transition = "1s"
})

tema1.addEventListener("dblclick", () =>{
  black.style.background = "white"
  brend.style.color = "red"
  bren.style.color = "red"
  black.style.transition = "1s"
})


let b = document.getElementsByClassName(b)
let f = document.getElementsByClassName(f)



b.addEventListener("click", ()=>{
  f.innerHTML = "img src=https://kommunarka.by/upload/cache/uploadiblock679wjwlvchue5ta5lqjbg39like0vamybxzAlyenka01png67955390015379bfb02a1eb3e42f38406b590d4504_425_544_90_1.jpg.webp"
})