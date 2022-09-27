let container = document.querySelector("#container");
let button = document.querySelector("#button");


function generateRGB_color(){
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    
    return `rgb(${red}, ${green}, ${blue})`
}
 

button.addEventListener("click", function(){
    let bgcolor = generateRGB_color();
    container.style.backgroundColor = bgcolor;
})