const inp = document.querySelector(".calculadora input")
const btns = document.querySelectorAll(".calculadora .num")

console.log(btns)
btns.forEach(function(bt) {
    bt.onclick = function() {
        inp.value += bt.textContent
    }

})