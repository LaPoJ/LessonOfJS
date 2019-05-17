// 基础类型
/* console.log(typeof undefined);
console.log(typeof true);
console.log(typeof 42);
console.log(typeof '42');
console.log(typeof {});
console.log(typeof Symbol);
console.log(typeof null); */

// undefined 和 undeclared
// a未赋值为undefined， b未声明为undeclared
// 要注意undefined和defined的区别  ----defined应该理解为not found 或者not declared
// var a;
// console.log(a);
// console.log(b);

// var num = 32 ;
// var str = '32';

// console.log(num + str);
// console.log(str + num);

function test(params) {
  console.log(params);

}
test('傻逼')