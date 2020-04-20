// function oArr(arr){
//     var array = [];
//     for (var i = 0; i < arr.length; i++) {
//         if (array .indexOf(arr[i]) === -1) {
//             array .push(arr[i])
//         }
//     }
//     return array;
// }




// for (var i = 1; i <= 5; i++) {
//     (function () {
//         setTimeout(function timer() {
//             console.log(i);
//         }, i * 1000);
//     })();
// }

// for (let i = 1; i <= 5; i++) {
//     setTimeout(function timer() {
//         console.log(i);
//     }, i * 1000);
// }

const obj = {
    a: 'ss',
    b: 'bb',
    c: 'cc',
}

for (let key in obj) {
    console.log(key, obj[key])
}