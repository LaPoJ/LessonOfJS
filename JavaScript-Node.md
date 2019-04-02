------

# 类型

------

## 内置类型

- null -> 空值
- undefined -> 未定义
- String -> 字符
- Number -> 数字
- Object -> 对象
- Boolean -> 布尔类型
- symbol -> 符号,ES6中新增

## 值和类型

### undefined 和 undeclared

- undefined 已在作用域中声明但还没有赋值的变量
- undeclared 还没有在作用域中声明过的变量

```javascript
var a;
​	console.log(a);	//undefined
​	console.log(b); 	//b is not defined
```

#### 注意

- undefined 和 is not defined 完全是两码事，要注意undefined和defined的区别 defined应该理解为not found 或者not declared

### typeof Undeclared 安全机制

该安全防范机制对在浏览器中运行的 JavaScript 代码来说还是很有帮助的，因为多个脚本文件会在共享的全局命名空间中加载变量。

问题是如何在程序中检查全局变量 DEBUG 才不会出现 ReferenceError 错误。这时 typeof 的安全防范机制就成了我们的好帮手：

- ```javascript
     // 这样会抛出错误：
     if (DEBUG) {
     	console.log( "Debugging is starting" );
     }
     ```

- ```javascript
     // 这样是安全的
     if (typeof DEBUG !== "undefined") {
     	console.log( "Debugging is starting" );
     }
     ```

这不仅对用户定义的变量（比如 DEBUG ）有用，对内建的 API 也有帮助：

```javascript
if (typeof atob === "undefined") {
	atob = function() { /*..*/ };
}
```

------

# 值

------

## 数组

### 基本概念

和其他强类型语言不同，在 JavaScript 中，数组可以容纳任何类型的值，可以是字符串、数字、对象（ object ），甚至是其他数组（多维数组就是通过这种方式来实现的）：

```javascript
var a = [ 1, "2", [3] ];
a.length; // 3
a[0] === 1; // true
a[2][0] === 3; // true
```

对数组声明后即可向其中加入值，不需要预先设定大小：

```javascript
var a = [ ];
a.length; // 0
a[0] = 1;
a[1] = "2";
a[2] = [ 3 ];
a.length; // 3
```

### 类数组

有时需要将类数组（一组通过数字索引的值）转换为真正的数组，有时需要将类数组（一组通过数字索引的值）转换为真正的数组

例如，一些 DOM 查询操作会返回 DOM 元素列表，它们并非真正意义上的数组，但十分类似。另一个例子是通过 arguments 对象（类数组）将函数的参数当作列表来访问。

工具函数 slice(..) 经常被用于这类转换：

```javascript
function foo() {
var arr = Array.prototype.slice.call( arguments );
arr.push( "bam" );
console.log( arr );
}
foo( "bar", "baz" ); // ["bar","baz","bam"]
```

用 ES6 中的内置工具函数 Array.from(..) 也能实现同样的功能：

```javascript
...
var arr = Array.from( arguments );
...
```

## 字符串

字符串经常被当成字符数组。字符串的内部实现究竟有没有使用数组并不好说，但JavaScript 中的字符串和字符数组并不是一回事，最多只是看上去相似而已。

例如下面两个值：

```JavaScript
var a = "foo";
var b = ["f","o","o"];
```

字符串和数组的确很相似，它们都是类数组，都有 length 属性以及 indexOf(..) （从 ES5开始数组支持此方法）和 concat(..) 方法：

```javascript
a.length; // 3
b.length; // 3
a.indexOf( "o" ); // 1
b.indexOf( "o" ); // 1
var c = a.concat( "bar" ); // "foobar"
var d = b.concat( ["b","a","r"] ); // ["f","o","o","b","a","r"]
a === c; // false
b === d; // false
a; // "foo"
b; // ["f","o","o"]
```

但这并不意味着它们都是“字符数组”，比如：

```javascript
a[1] = "O";
b[1] = "O";
a; // "foo"
b; // ["f","O","o"]
```

JavaScript 中字符串是不可变的，而数组是可变的。并且 a[1] 在 JavaScript 中并非总是合法语法，在老版本的 IE 中就不被允许（现在可以了）。正确的方法应该是 a.charAt(1) 。

字符串不可变是指字符串的成员函数不会改变其原始值，而是创建并返回一个新的字符
串。而数组的成员函数都是在其原始值上进行操作。

```javascript
c = a.toUpperCase();
a === c; // false
a; // "foo"
c; // "FOO"
b.push( "!" );
b; // ["f","O","o","!"]
```

许多数组函数用来处理字符串很方便。虽然字符串没有这些函数，但可以通过“借用”数组的非变更方法来处理字符串：

```javascript
a.join; // undefined
a.map; // undefined
var c = Array.prototype.join.call( a, "-" );
var d = Array.prototype.map.call( a, function(v){
	return v.toUpperCase() + ".";
}).join( "" );
c; // "f-o-o"
d; // "F.O.O."
```

另一个不同点在于字符串反转（JavaScript 面试常见问题）。数组有一个字符串没有的可变更成员函数 reverse() ：	

```javascript
a.reverse; // undefined
b.reverse(); // ["!","o","O","f"]
b; // ["f","O","o","!"]
```



对数组声明后即可向其中加入值，不需要预先设定大小：