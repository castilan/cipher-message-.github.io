// encript-it.js
// Angelina Castillo

(function() {
  "use strict";

  window.addEventListener("load", init);
  function init() {
    console.log("Window loaded!");
    // event listeners  for buttons encrypt and reset
    document.getElementById('encrypt-it').addEventListener('click', handleEncrypt);
    document.getElementById('reset').addEventListener('click', handleReset);
  }

  // takes value from input-text area to run it through shiftCipher
  // assigns output string to result text area
  function handleEncrypt(){
    const output = shiftCipher(document.getElementById('input-text').value);
    document.getElementById('result').textContent = output;
  }

  // shifts a all string characters to the next letter
  // example: a would turn into b
  //          m would turn into n
  function shiftCipher(text){
    text = text.toLowerCase();
    let output = "";

    for(let i = 0;i < text.length;i++){
      // shift text only if it is a part of the alphabet
      if (text[i] < 'a' || text[i] > 'z') {
        output += text[i];
      }
      // z will equal a
      else if(text[i] == 'z'){
        output += 'a'
      }
      // text is a part of the alphabet so shift the text characters by one
      else{
        // get the ascii value for the next char in the string
        let asciiNum = text.charCodeAt(i);
        // shift one letter
        asciiNum = asciiNum + 1;
        // shiftedChar is the new character
        let shiftedChar = String.fromCharCode(asciiNum);
        output += shiftedChar;
      }
    }

    return output;
  }

  // changes input-text to a blank string
  function handleReset(){
    document.getElementById('input-text').value = "";
  }


})();
