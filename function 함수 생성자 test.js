/*ES6 예시
"use script"
var func = new Function("x", "y", "return x*y") 
function product() { 
   var result
   result = func(10,20)
   console.log("The product : "+result)
} 
product()
*/

/* 스스로 해보기
"use script"
var func = new Function("x", "y", "return x+y")
function clcl() {
    var result
    result = func(2,3)
    console.log("the result :",result)
}
clcl()
*/

/* 스스로 해보기
var f = new Function("a","b","return a-b")
function coke() {
    var result
    result = f(8,5)
    console.log("minus result :",result)
}
coke()
*/