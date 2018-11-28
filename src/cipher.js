window.cipher = {

  encode: (offset, string) => {

    let msg = "";
    for (let i = 0; i < string.length; i++) {
      if (string[i].charCodeAt() >= 65 && string[i].charCodeAt() <= 90) {
        let antiguoAscii = string[i].charCodeAt();
        let ascii = (((antiguoAscii - 65) + offset) % 26) + 65; // codigo ascii
        let resultado1 = String.fromCharCode(ascii);
        msg = msg + resultado1;
      }
      else {
        msg = msg + string[i];
      }
    }
    return msg;
  },

  decode: (offset, string) => {

    let msg1 = "";
    for (let i = 0; i < string.length; i++) {
      if (string[i].charCodeAt() >= 65 && string[i].charCodeAt() <= 90) {
        let antiguoAscii1 = string[i].charCodeAt();
        let ascii1 = (((antiguoAscii1 + 65) - offset) % 26) + 65; // codigo ascii
        let resultadoFinal = String.fromCharCode(ascii1);
        msg1 = msg1 + resultadoFinal;
      }
    }
    return msg1;
  },
}
