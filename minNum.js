const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout
});

var inputArr = [],
  arr1 = [],
  arr2 = [];
var x, n;
var num = 1
rl.on('line', function(line){

    inputArr.push(line);
    if (num == 2) {
      arr1 = inputArr[0].split(' ')
      arr2 = inputArr[1].split(' ')

      n = parseInt(arr1[0])
      x = parseInt(arr1[1])
      var max = Math.max.apply(null,arr2)
      var min = Math.min.apply(null,arr2)
      var target =  max - min
      var delNum = 0
      for(let i = 0; i<arr2.length; i++){
        if (arr2[i] <= max - target) {
          delNum++
        }
      }
      // console.log(n, x)
      console.log(delNum)
      rl.close()
    } else {
      num++
    }

});

rl.on('close', function() {
    console.log('程序结束');
    process.exit(0);
});