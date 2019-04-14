// function partlist(arr) {
//   var str = arr.join(' ');
//   var tepm = '';
//   var temp2 = '';
//   var arr2 = new Array(arr.length-1);
//   for (var k = 0; k < arr.length -1; k++) {
//     arr2[k] = new Array(2);    //每行有10列
//   }
//   for (let i = 0; i < arr2.length ; i++) {
//     for (let j = 0; j < 2; j++) {
//       if(i ==0 && j == 0){
//         arr2[i][j] = arr[i];
//       }
//       else if( j != 1){
//         tepm += arr[i - 1] + ' ';
//         arr2[i][j] = tepm.concat(arr[i]);
//       }


//       else if(j != 0){
//         for (let m = 0; m < arr.length - 1 - i; m++) {
//           temp2  += arr[m + i + 1] + ' ';
//         }
//         console.log(temp2);
//         arr2[i][j] = temp2.trim();
//       }
//       temp2 = '';
//     }
//   }
//   return arr2;
// }


partlist(["I", "wish", "I", "hadn't", "come"])
partlist(["cdIw", "tzIy", "xDu", "rThG"])
partlist(["vJQ", "anj", "mQDq", "sOZ"])

