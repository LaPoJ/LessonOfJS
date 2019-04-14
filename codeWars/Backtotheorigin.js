/* // 你生活在卡迪西亚， 那里所有的道路都以完美的网格布局。 你来得太早了10分钟， 不能预约， 所以你决定趁这个机会出去散散步。 城市在其手机上为其公民提供了一个步行生成应用程序—— 每当你按下按钮， 它就会向你发送一组代表步行方向的一个字母字符串（ 如“[”N“、” S“、” W“、” E“]）。 你总是只沿着一个方向走一个街区， 你知道横穿一个城市街区需要一分钟， 所以创建一个函数， 如果应用程序给你的步行只需要十分钟（ 你不想早或晚！） 当然， 威尔会让你回到起点。 否则返回false。



// 注意： 您将始终收到一个包含随机方向字母组合的有效数组（“ N”、“ S”、“ E” 或“ W”）。 它永远不会给你一个空数组（ 那不是散步， 那是静止的！）.
*/

function isValidWalk(walk) {
  var n = 0,
    s = 0,
    e = 0,
    w = 0;
  for (direction of walk) {
    if(direction == 'n'){ n += 1; }
    if(direction == 's'){ s += 1; }
    if(direction == 'w'){ w += 1; }
    if(direction == 'e'){ e += 1; }
  }

  return walk.length > 10 ? false : walk.length < 10 ? false : (n - s == 0 && e - w == 0) ? true : false;
}

console.log(isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e']));
console.log(isValidWalk(['w']));
console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']));
