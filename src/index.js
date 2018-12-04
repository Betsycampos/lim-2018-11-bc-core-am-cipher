
const texto = document.getElementById("texto");
const codigo = document.getElementById("codigo");
const resultadoFinal = document.getElementById("resultado-final");
const buttonCifrar = document.getElementById("button-cifrar");
const buttonDescifrar = document.getElementById("button-descifrar");
const buttonSiguiente = document.getElementById("Siguiente");
const caja1 = document.getElementById("hoja1");
const caja2 = document.getElementById("hoja2");
const buttonRetorno = document.getElementById("retorno");

//Función cifrar
const Cifrar = () => {
  let numero = parseInt(codigo.value);
  let mensaje = texto.value.toUpperCase();
  let resultado1 = cipher.encode(numero, mensaje);
  resultadoFinal.style.display = "block";
  resultadoFinal.innerHTML = resultado1;

}
//Función descifrar
const Descifrar = () => {
  let numero = parseInt(codigo.value);
  let mensaje = texto.value.toUpperCase();
  let resultado2 = cipher.decode(numero, mensaje);
  resultadoFinal.innerHTML = resultado2;

}
caja2.style.display = "none";
buttonCifrar.addEventListener("click", Cifrar);
buttonDescifrar.addEventListener("click", Descifrar);
buttonSiguiente.addEventListener("click", () => {
  caja1.style.display = "none";
  caja2.style.display = "block";
})
buttonRetorno.addEventListener("click", () => {
  caja2.style.display = "none";
  caja1.style.display = "block";
})
