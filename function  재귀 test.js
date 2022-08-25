/*ES6 예시
function AA(n) {
    if(n <= 0) {
        return 1
    } else {
        return(n*AA(n-1))
    }
}
console.log(AA(6))
*/

/* 스스로 해보기
function ted(num) {
    if(num <= 0) {
        return 1
    } else {
        return(num*ted(num-1))
    }
}
console.log(ted(8))
*/

/*ES6 예시-익명 재귀 함수
(function() {
    var msg = "HELLO"
    console.log(msg)
})()
*/