window.cipher = {
  encode: (offset, string) =>{
  //decode
    let msg = "";
    for (let i = 0; i < string.length; i++) {
     if(string[i].charCodeAt()>=65 && string[i].charCodeAt()<=90){
        let antiguoAscii = string[i].charCodeAt() ;
        let ascii = (((antiguoAscii  - 65) + offset )%26) + 65; // codigo ascii
        let resultado1 = String.fromCharCode(ascii);
        msg = msg + resultado1;
      }
      else{
        msg = msg + string[i];
      }
  }

return msg;
},

decode: (offset, string) =>{
   let msg1="";
   for (let i = 0; i < string.length; i++) {
   let antiguoAscii1=string[i].charCodeAt();
   let ascii1 = (((antiguoAscii1  + 65) -  offset )%26) + 65; // codigo ascii
       if (ascii1 < 65) {
       ascii1 += 26;
    }
    let resultadoFinal =String.fromCharCode (ascii1);
    msg1 = msg1 + resultadoFinal;
}
return msg1;
},
 }


/*

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
*/
