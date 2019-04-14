function gooseFilter(birds) {
  var goose = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

  birds = birds.filter(function (element) {
    // 判断A数组中是否存在B数组的元素
    console.log(element);
    console.log(goose.includes(element));

    return !goose.includes(element);
  })
  return birds;
};

gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]);
