//#regin
  // var a = {}

  // Object.defineProperty(a, 'b', {
  //   value: '123'
  // })

   // console.log(a.b)
//#regin

var obj = {
  name: 'PJ',
  age: 18
}

function changeObj(obj) {

  function descripterFun(value) {
    return {
      enumerable:true,
      get: function () {
        console.log(`you got ${value}`)
      },
      set: function(newVal) {
        console.log(`you change the ${value} to ${newVal}`)
      }
    }
  }

  for (let i in obj) {
    console.log(i)
    Object.defineProperty(obj, i, descripterFun(obj[i]))
  }
}

changeObj(obj)
obj.name = 'cc'