"use strict" 
function test() { 
   var num = 100 
   console.log("value of num in test() "+num); {  //;안붙으면 SyntaxError 나옴
      console.log("Inner Block begins") 
      let num = 200 
      console.log("value of num : "+num)  
   } 
} 
test()
