/*ES6 예시
"use script"
let d_val = 30 
function addTwoNumbers(first,second = d_val) {
    console.log("first number is :",first)
    console.log("second number is :",second)
    return first+second
}
console.log("case 1 sum :",addTwoNumbers(1))
console.log("case 2 sum :",addTwoNumbers(3,undefined)) //undefined이지만  let으로 설정해논 값때문에 undefined값이 적용 안됨
*/

/* 스스로 해보기
"use script"
let any = 19
function PARKJIAN(one,two = any) {
    console.log("one number is :",one)
    console.log("two number is :",two)
    return one*two
}
console.log("sum1 :",PARKJIAN(2))
console.log("sum2 :",PARKJIAN(8,undefined))
*/