function loadData1() {
  const palabra = document.getElementById('altern1').value;
  const offset = document.getElementById('altern2').value;
  const ascii = palabra.charCodeAt(0); // codigo ascii

  const resultado = String.fromCharCode((ascii - 65 + offset )%26 + 65);
  //const resultado = String.fromCharCode((ascii - 65 - offset )%26 + 65)


        document.getElementById('PRUEBA1').innerHTML=resultado;
}


function loadData2() {
  const palabra1 = document.getElementById('altern1').value;
  const offset1 = document.getElementById('altern2').value;
  const ascii1 = palabra1.charCodeAt(0); // codigo ascii

  const resultado1 = String.fromCharCode((ascii1 - 65 - offset1 )%26 + 65);

        document.getElementById('PRUEBA2').innerHTML=resultado1;
}
