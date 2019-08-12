var F = function(){}

Object.prototype.a = function(){}

Function.prototype.b = function(){}

var f = new F()

// F 为函数; f 为对象

console.log(F.prototype)
console.log(F.__proto__)

console.log(f.__proto__)




