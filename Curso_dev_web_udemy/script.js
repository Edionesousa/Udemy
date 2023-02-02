document.querySelector("#calcular").addEventListener("click", function(){
    let valorA = document.querySelector("#valorA").value;
    let valorB = document.querySelector("#valorB").value;

    alert(parseInt(valorA)+ parseInt(valorB));
});
