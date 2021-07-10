//variaveis utilizadas
const img = document.getElementById("imagSemaforo");
const botoes = document.getElementById("botoes");
let corIndex = 0;
let intervalo = null;

const bt = {
    "vermelho": ()=> img.src = "../Imagens/vermelho.png",
    "amarelo": ()=> img.src = "../Imagens/amarelo.png",
    "verde": ()=> img.src= "../Imagens/verde.png",
    "automatico": ()=> intervalo = setInterval(trocarCor, 800),
}
//funções para trocar de cores
const trocarCor = ()=> {
    const cores = ["vermelho", "amarelo", "verde"]
    const cor = cores [corIndex];
    bt[cor]();
    proximoIndex();
}
//forma 1 de fazer o proximoIndex
const proximoIndex = () => corIndex = corIndex < 2 ? ++corIndex : 0;

/*forma 2 de fazer o proximoIdex
const proximoIndex =() =>{  
    if(corIndex < 2){
       corIndex++
    }else {
      corIndex = 0;
   }
}
*/
//função para parar
const paraSo = () =>{
    clearInterval(intervalo);
}
//função principal 
const trafico = (event) =>{
    paraSo();
    bt[event.target.id]();
}
botoes.addEventListener("click",trafico);