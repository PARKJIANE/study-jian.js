"use script"
const one = [10,20,30,50]
one.push(40)
console.log("one number is ",one) // one number is (5) [10, 20, 30 ,50, 40]

const two = [1001,1002,1003]
console.log("two number is ",two) // two number is (3) [1001, 1002, 1003]
two = [2001,2002,2003]
console.log("change two",two) // Uncaught TypeError: Assignment to constant variable. 오류뜸

// const 상수는 다시 선언 불가능