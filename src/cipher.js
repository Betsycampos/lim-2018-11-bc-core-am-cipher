window.cipher = {
  //encode
  //decode
};
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
clickresetDep.addEventListener('click',reset);



  const dalia = document.getElementById('cargar1')
  const loadData2 = () => {
  const palabra1 = document.getElementById('altern1').value;
  const offset1 = parseInt(document.getElementById('altern2').value);
  let msg1 = "";
  for (let i = 0; i < palabra1.length; i++) {
  const antiguoAscii1=palabra1.toUpperCase().charCodeAt(i);

  const ascii1 = (antiguoAscii1  + 65 -  offset1 )%26 + 65; // codigo ascii

   if (ascii1 < 65) {
     ascii1 += 26;

   }
  let resultadoFinal =String.fromCharCode (ascii1);
  msg1 = msg1 + resultadoFinal;

}

document.getElementById('prueba2').innerHTML=msg1;

 }
 dalia.addEventListener("click",loadData2);
