let btn = document.getElementById("mybtn");
let h3 = document.getElementById("h3");
btn.addEventListener("click", ()=>{
    if (weight>99) {
h3.style.color = "black"
h3.style.transition = "1s"
}});

let weight = document.getElementById("txt1");
weight.onchange = function () {
    weight = Number(txt1.value);

    if (weight<100) {
        alert("выберите кол-во не меньше чем 100 грамм")
    }

   if (weight<100) {
    btn.disabled = true;
   }

   else{
    btn.disabled = false;
   }
}

let kg = document.getElementById("kg");
kg.onchange = function () {
    weight = Number(txt1.value);

    if (weight>10) {
        alert("выберите кол-во меньше или равное   10 килограмм")
    }

   if (weight>10) {
    btn.disabled = true;
   }

   else{
    btn.disabled = false;
   }
}

