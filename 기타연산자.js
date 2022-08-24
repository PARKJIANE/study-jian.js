/*부정 연산자
var x =4
var y = -x
console.log("값: ",x)
console.log("값: ",y)
*/

/*연결 연산자
var name = "PARK"+"JIAN"
console.log(name)
*/

/*조건 연산자
var num = 5
var result = num > 0 ? "Y" : "N"
console.log(result)
*/

/*tyoeof 연산자
var num = 12
console.log(typeof num)
*/

/*spread 연산자 - 및 배열 복사 및 연결
let one = [10,20,30]
let two = [one]
console.log(...two)

let arr1 = [10,20,30]
let arr2 = [40,50,60]
let arr3 = [...arr1,...arr2]
console.log(arr3)
*/

/*spread 연산자 - 및 개체 복사 및 연결
let student1 = {firstName: "박",lastName: "지안"}
let student2 = {...student1}
console.log(student2)

let student3 = {company: "(주)리모"}
let student4 = {...student1,...student3}
console.log(student4)
*/