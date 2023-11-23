let slideBtnLeft = document.getElementById("slide-btn-left")
let slideBtnRight = document.getElementById("slide-btn-right")
console.log(slideBtnLeft);

let imageItem = document.querySelectorAll(".image-item")
console.log(imageItem.length-1);
let startSlider = 0
let endSlider = imageItem.length-1 * 100

slideBtnLeft.addEventListener("click", ()=>{
alert("left btn")
})

slideBtnRight.addEventListener("click",()=>{
if (startSlider>= endSlider) {
    startSlider = startSlider -100;
}

imageItem.forEach (element=>{
    element.style.transform = `translatex(${startSlider}%)`;
})

})

