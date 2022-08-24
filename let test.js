"use strict"
function test(n) {
    let sum = 0  
    for(let i = 1; i < n + 1; i++) {
        sum += i
    }
    console.log(sum)
}
test(10)
