// encript-it.js
// Angelina Castillo

(function() {
  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);

  /**
   * TODO: Write a function comment using JSDoc.
   */
  function init() {
    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.
    console.log("Window loaded!");
    document.getElementById('encrypt-it').addEventListener('click', handleEncrypt);
    document.getElementById('reset').addEventListener('click', handleReset);

  }

  // 
  function handleEncrypt(){
    console.log(document.getElementById('input-text').value);
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


      if (text[i] < 'a' || text[i] > 'z') {
        output += text[i];
      }

      else if(text[i] == 'z'){
        output += 'a'
      }
      else{
        // get the ascii value for the next char in the string
        let asciiNum = text.charCodeAt(i);
        asciiNum = asciiNum + 1;
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

  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  // you shouldn't write an entire Java program in the main method).

})();
