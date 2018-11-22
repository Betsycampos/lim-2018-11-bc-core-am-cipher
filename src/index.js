function loadData1() { 
  const palabra = document.getElementById('altern1').value;
  const offset = parseInt(document.getElementById('altern2').value);
  const ascii = palabra.charCodeAt(); // codigo ascii
  //let resultado="";
  resultado1 = String.fromCharCode((ascii - 65 + offset )%26 + 65);
  //const resultado = String.fromCharCode((ascii - 65 - offset )%26 + 65)

  document.getElementById('PRUEBA1').innerHTML=resultado1;

}
function loadData2() {
  const palabra1 = document.getElementById('altern1').value;
  const offset1 = parseInt(document.getElementById('altern2').value);
  const ascii1 = palabra1.charCodeAt(0); // codigo ascii

  resultado2 = ((ascii1 - 65 - offset1 )%26 + 65);
   if (resultado2 < 65) {
     resultado2 += 26;

   }
  let resultadoFinal =String.fromCharCode (resultado2);

  document.getElementById('PRUEBA2').innerHTML=resultadoFinal;
}
