/* ES6 예시
"use script"
function addTwoNumbers(first,second = 10) {
    console.log('first parameter is :',+first)
    console.log('second parameter is :',+second)
    return first+second
}
console.log("case 1 sum :",+addTwoNumbers(20))
console.log("case 2 sum :",+addTwoNumbers(2,3))
console.log("case 3 sum :",+addTwoNumbers())
console.log("case 4 sum :",+addTwoNumbers(1,null))
console.log("case 5 sum :",+addTwoNumbers(3,undefined))
*/

/* 스스로 해보기
"use script"
function PARKJIAN(one, two = 19) {
    console.log("one number is :",+one)
    console.log("two number is :",+two)
    return one+two
}
console.log("sum1 :",+PARKJIAN(5,6))
console.log("sum2 :",+PARKJIAN(2))
console.log("sum3 :",+PARKJIAN())
console.log("sum4 :",+PARKJIAN(1,null))
console.log("sum5 :",+PARKJIAN(undefined))
*/