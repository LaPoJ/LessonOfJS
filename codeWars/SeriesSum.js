/*您的任务是编写一个函数，该函数返回以下系列之和到第n个项（参数）。

Series: 1 + 1 / 4 + 1 / 7 + 1 / 10 + 1 / 13 + 1 / 16 +...
规则：
您需要将答案舍入到2位小数并将其作为字符串返回。

如果给定值为0则应返回0.00

您将只获得自然数作为参数。
*/

// SeriesSum(1) => 1 = "1.00"
// SeriesSum(2) => 1 + 1 / 4 = "1.25"
// SeriesSum(5) => 1 + 1 / 4 + 1 / 7 + 1 / 10 + 1 / 13 = "1.57"

function SeriesSum(n) {
  var sum = 0;
  for (let j = 0; j < n; j++) {
      sum += 1/(1 + j*3)
  }
  return sum.toFixed(2);
}
console.log(SeriesSum(1));
console.log(SeriesSum(2));
console.log(SeriesSum(3));
console.log(SeriesSum(4));
console.log(SeriesSum(5));