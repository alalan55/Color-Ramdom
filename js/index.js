const corView = document.querySelector(".conteudo__cor");
const container = document.querySelector(".container");
const btn = document.querySelector(".btn")

var corAtualRgba;
var randomColor;

//rgba
const gerarCores  = (opacidade = 1) =>{
    let r = Math.random() * 255;
    let g = Math.random() * 255;
    let b = Math.random() * 255;

    corAtualRgba = `rgba(${r}, ${g}, ${b}, ${opacidade})`;
   return corAtualRgba;
}
const gerarCoresHex = () =>{
    randomColor = Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}

btn.addEventListener("click", () =>{
    // gerarCores(1);

    // container.style.backgroundColor = corAtualRgba;
    // corView.innerText = corAtualRgba;
    gerarCoresHex();
    container.style.backgroundColor = "#" + randomColor;
    corView.innerHTML = "#" + randomColor;
}); 