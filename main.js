
let hamMenu = document.getElementsByClassName("menu-container")[0];
let line1 = document.getElementsByClassName("line")[0];
let line2 = document.getElementsByClassName("line")[1];
let line3 = document.getElementsByClassName("line")[2];
let line = document.getElementsByClassName("line")[0];
let menu = document.getElementsByClassName("menu-items")[0]

let returnValue;

hamMenu.addEventListener('click', () => {
    line1.classList.toggle("line-1");
    line2.classList.toggle("line-3");
    line3.classList.toggle("line-2");

    returnValue = line.classList.contains("line-1")
    returnValue === true ? menu.classList.add("transform") : menu.classList.remove("transform")

   
});

let heroContent = document.getElementsByClassName("heroContent")[0];

window.addEventListener("scroll", ()=>{
    let value = window.scrollY;
    heroContent.style.transform = `translateY(${value * -0.5}px)`;
})

