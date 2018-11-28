
const texto = document.getElementById('texto1');
const codigo = document.getElementById('codigo');
const prueba1 = document.getElementById('prueba1');
const prueba2 = document.getElementById('prueba2');
const btnCifrar = document.getElementById('btn-cifrar');
const btnDescifrar = document.getElementById('btn-descifrar');


//Función cifrar
 const Cifrar = () =>{
  let numero = parseInt(codigo.value);
  let mensaje = texto.value.toUpperCase();
  let resultado1 = cipher.encode(numero, mensaje);
  prueba1.style.display="block";
  prueba1.innerHTML= resultado1;

}
//Función descifrar
 const Descifrar = () =>{
  let numero = parseInt(codigo.value);
  let mensaje= texto.value.toUpperCase();
  let resultado2 = cipher.decode(numero, mensaje);
  prueba2.style.display="block";
  prueba2.innerHTML= resultado2;

}

btnCifrar.addEventListener('click', Cifrar);
btnDescifrar.addEventListener('click', Descifrar);
