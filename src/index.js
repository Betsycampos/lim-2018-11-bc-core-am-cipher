
const texto = document.getElementById('texto1');
const codigo = document.getElementById('codigo');

const prueba1 = document.getElementById('prueba1');
const prueba2 = document.getElementById('prueba2');

const btnCifrar = document.getElementById('btn-cifrar');
const btnDescifrar = document.getElementById('btn-descifrar');


//Función cifrar
cifrar = () =>{
  let numero = parseInt(codigo.value);
  let mensaje = texto.value.toUpperCase();
  let resultado = cipher.encode(numero, mensaje);
  prueba1.innerHTML= resultado;
  //alert('hola');
}
//Función descifrar
descifrar = () =>{
  let numero = parseInt(codigo.value);
  let mensaje= texto.value.toUpperCase();
  let resultado1 = cipher.decode(numero, mensaje);
  prueba2.innerHTML= resultado1

}

btnCifrar.addEventListener('click', cifrar);
btnDescifrar.addEventListener('click', descifrar);
