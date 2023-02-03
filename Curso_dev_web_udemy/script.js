const a = 10;
const b = 33;

function somar(a, b){
    return a + b;
}

document.querySelector("#calcular").addEventListener("click",function(){
    let valorA = document.querySelector("#valorA").value;
    let valorB = document.querySelector("#valorB").value;
    if(valorA.length > 0 && valorB.length > 0){
    alert(parseInt(valorA)+ parseInt(valorB.length > 0))
    }else{
    alert("Digite os valores para calcular")
    }
});

