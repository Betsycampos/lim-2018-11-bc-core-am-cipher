//function loadData1() {
 const betsy = document.getElementById('cargar')
  const loadData1 = () => {
  const palabra = document.getElementById('altern1').value;
  const offset = parseInt(document.getElementById('altern2').value);
  let msg = "";
  for (let i = 0; i < palabra.length; i++) {
    const antiguoAscii = palabra.toUpperCase().charCodeAt(i) ;
    const ascii = (antiguoAscii  - 65 + offset )%26 + 65; // codigo ascii
    let resultado1 = String.fromCharCode(ascii);
    msg = msg + resultado1;
  }

  document.getElementById('prueba1').innerHTML = msg;
}
betsy.addEventListener("click",loadData1);
  //let resultado="";

  //const resultado = String.fromCharCode((ascii - 65 - offset )%26 + 65)
  /*
//function loadData2() {
  const loadData2 = () => {
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
*/
//const resultado = String.fromCharCode((ascii - 65 - offset )%26 + 65)

//function loadData2() {



  const dalia = document.getElementById('cargar1')
  const loadData2 = () => {
  const palabra1 = document.getElementById('altern1').value;
  const offset1 = parseInt(document.getElementById('altern2').value);
  let msg1 = "";
  for (let i = 0; i < palabra1.length; i++) {
  const antiguoAscii1=palabra1.toUpperCase().charCodeAt(i);

  const ascii1 = (antiguoAscii1  - 65 - offset1 )%26 + 65; // codigo ascii

   if (antiguoAscii1 < 65) {
     ascii1 += 26;

   }
  let resultadoFinal =String.fromCharCode (ascii1);
  msg1 = msg1 + resultadoFinal;

}

document.getElementById('prueba2').innerHTML=msg1;

 }
 dalia.addEventListener("click",loadData2);
