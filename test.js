



/*请完成下面这个函数，实现题目要求的功能
当然，你也可以不按照下面这个模板来作答，完全按照自己的想法来 ^-^
******************************开始写代码******************************/
function sumInteger() {
  var arr = [1, 2, 11, 6, 9]
  for(let i = 0; i < arr.length; i++) {
    let target
    if(i < 4) {
      target = arr[i+1]
    }else{
      target = arr[0]
    }
    console.log(arr[i])
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i] ,' + ', arr[j], ' ?= ', target)
      if (target == arr[i] + arr[j] && i != j) {
        return true
      }
    }
  }
}
/******************************结束写代码******************************/


var res;

res = sumInteger();
res = res ? true : false
console.log(res);