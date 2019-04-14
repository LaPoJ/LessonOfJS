function disemvowel(str) {
  var arr_str = str.split(' ');
  arr_str = arr_str.map( ele => {
    return ele.replace(/[aeiou]/gi, '');
  })
  str = arr_str.join(' ');
  return str;

}

disemvowel("This website is for losers LOL!");
