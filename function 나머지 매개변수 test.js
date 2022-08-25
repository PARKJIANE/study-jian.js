function java(...params) {  //나머지 매개변수를 선언하기 위해 스프레드 연산자인 세 개의 마침표가 붙음
    console.log(params.length)
}
java()
java(3)
java(3,4,5)