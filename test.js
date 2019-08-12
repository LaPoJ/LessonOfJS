function append(arr, item) {
  var newArr = arr.slice()
  return newArr.push(item)
}
var arr = [1, 2, 3, 4]
console.log(append(arr, 10))
console.log(arr)