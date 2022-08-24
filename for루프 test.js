/*for 구문
"use strict"
for(let temp, i = 0, j = 1; j<30; temp = i, i = j, j = i + temp)
console.log(j)
*/

/*for...in 구문
var Z = {a:1, b:2, c:3}
for( var prop in Z) { 
    console.log(Z[prop]) //<---prop는 항상 써줘야함 약속
}
*/

/*for...of 구문
for(let val of[1,10,100]) {
    console.log(val)
}
-------------------------------------다른 방식이지만 같은 값이 나옴
const arr1 = ['1','10','100']

for(const element of arr1) [
    console.log(element)
]
*/
