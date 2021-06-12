const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output:process.stdout
});

const text = null;

rl.on('line', function(text){
  text = text
  let arr = text.split(' ')
  // console.log(text)
  console.log(arr)

  const newArr = arr.map((item) => {
    if(item.length > 1){
      // item = item.charAt(2)
      let itemArr = []
      for(let i = 0; i < item.length; i++){
        itemArr.push(item[i])
      }
      itemArr[1] = itemArr[1].toUpperCase()

      console.log(itemArr)
      // itemArr[1].toUpperCase()
      // console.log(itemArr[1].toUpperCase())
      console.log(itemArr.join(''))
      return itemArr.join('')
    } else {
      return item
    }
  })
  console.log(newArr)
  rl.close()
})


rl.on('close', function() {
  console.log('程序结束');
  process.exit(0);
});