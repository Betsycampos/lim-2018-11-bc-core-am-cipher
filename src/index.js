function loadData() {
  const palabra = document.getElementById('altern1').value;
  const offset = document.getElementById('altern2').value;
  const ascii = palabra.charCodeAt(0); // codigo ascii

  const resultado = String.fromCharCode((ascii - 65 + offset )%26 + 65);
  //const resultado = String.fromCharCode((ascii - 65 - offset )%26 + 65)


  document.getElementById('prueba').innerHTML=resultado;

}
