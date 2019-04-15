// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

//   Example
// alphabet_position("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"(as a string)
function alphabetPosition(text) {
  var newText = '';
  text = text.replace(/[0-9\ |\~|\`|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\-|\_|\+|\=|\||\\|\[|\]|\{|\}|\;|\:|\"|\'|\,|\<|\.|\>|\/|\?]/g, "");
  var text_arr = text.split('');
  // console.log(text_arr);
  for (let i = 0; i < text_arr.length; i++) {
    text_arr[i] = text_arr[i].charCodeAt() - 96;
    // text.charAt(i) = text_arr[i].charCodeAt() - 96;
  }
  newText = text_arr.join(' ');
  return newText;
}

var str ="The? nar:whal1! bac;'ons\" at midnight";

console.log(alphabetPosition(str)) ;

//最优解法
/*
  function alphabetPosition(text) {
  return text
    .toUpperCase()
    .match(/[a-z]/gi)
    .map( (c) => c.charCodeAt() - 64)
    .join(' ');
  }
  */