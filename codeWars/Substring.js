function inArray(array1, array2) {
  // console.log(array1,array2);
  var new_arr = [];
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array2[j].includes(array1[i])) {
        new_arr.push(array1[i]);
        break;
      }
    }
  }
  return new_arr.sort();
}


a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

a1 = ["xyz", "live", "strong"]
console.log(inArray(a1, a2));  //["live", "strong"]

a1 = ["live", "strong", "arp"]
console.log(inArray(a1, a2));  //["arp", "live", "strong"]

a1 = ["tarp", "mice", "bull"]
console.log(inArray(a1, a2)); //[]