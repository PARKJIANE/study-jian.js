"use script"
function name(age,cm,firstname,lastname) {
   this.age = age
   this.cm = cm
   this.firstname = firstname
   this.lastname = lastname
   this.fullbody = function(){
      setTimeout(function(){
         console.log(this.age+" "+this.cm)
      },2000)
   }

this.fullname=function(){
   setTimeout(()=>{
      console.log(this.firstname,this.lastname)
   },3000)
   }
}
const s1 = new name(19,172,'PARK','JIAN')
s1.fullbody()
s1.fullname()

/* 고침
"use script"
function name(age,cm,firstname,lastname) {
   this.age = age
   this.cm = cm
   this.firstname = firstname
   this.lastname = lastname
   this.fullbody = function(){
      setTimeout(()=>{
         console.log(this.age+" "+this.cm)
      },2000)
   }

this.fullname=function(){
   setTimeout(()=>{
      console.log(this.firstname,this.lastname)
   },3000)
   }
}
const s1 = new name(19,172,'PARK','JIAN')
s1.fullbody()
s1.fullname()
*/