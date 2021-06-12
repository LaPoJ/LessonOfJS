const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout
});

var inputArr = [],
  arr1 = [],
  arr2 = [];
var num = 1
rl.on('line', function(line){
    inputArr.push(line);
    if (num == 2) {
      console.log(inputArr)
      var line1 = inputArr.slice(0, 1)
      var line2 = inputArr.slice(1)
      arr1 = line1.split(' ')
      console.log('arr1:', arr1)
      arr2 = line2.split(' ')
      var m = arr1[0], n = arr1[1], x = arr1[2];
      var p = arr2[0], q = arr2[1];
      console.log('m:', m)
      console.log('n:', n)
      console.log('x:', x)
      console.log('p:', p)
      console.log('q:', q)
      var def = p/q;
      var y = def * x / ((1 - def) * n + 1)
      y = y < 1 ? 1 : y > m ? m : y;
      console.log(y.toFixed(2))
      rl.close()
    } else {
      num++
    }

});

rl.on('close', function() {
    console.log('程序结束');
    process.exit(0);
});