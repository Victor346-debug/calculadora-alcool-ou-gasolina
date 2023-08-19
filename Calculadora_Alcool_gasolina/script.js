function calcular(event){
  event.preventDefault();

  let alcoolId = document.getElementById("alcool").value;
  let gasolinaId = document.getElementById("gasolina").value;
  let sectionResult = document.getElementById("section-result");
  let resultadoTexto = document.getElementById("texto-fim")
  
  let alcoolSpan = document.getElementById("alcool-span")
  let gasolinaSpan =  document.getElementById("gasolina-span")
  
  //   O meu cálculo
  let calculo = (alcoolId / gasolinaId);

// minhas condições
if(calculo <= 0.7){
    resultadoTexto.innerHTML = ("Compensa usar Álcool")
}else{
    resultadoTexto.innerHTML = ("Compensa usar Gasolina")
}

alcoolSpan.innerHTML = "Álcool R$ " + alcoolId;
gasolinaSpan.innerHTML = "Gasolina R$ " + gasolinaId;

sectionResult.classList.remove("some")
}