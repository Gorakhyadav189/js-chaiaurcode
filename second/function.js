function addTwonum(num1,num2){

    return num1+num2;
}
addTwonum(2,3);
 const num=addTwonum(4,4);
//  console.log(num);

 function userdetails(username){
    return `${username} this is user name`;
 }
 const name=userdetails("gorakh");
//  console.log(name);

 function calculatecartprice(...num1){         // we can get multiple vale and retur these bvalu inro array
    return num1;
 }
//  console.log(calculatecartprice(23,24,23,25));

 const obj={
    name:"gorakh",
    email:"yadav@gmail.com"
 }
  function forobject(anyobject){
    console.log(`name is ${anyobject.name} and email is${anyobject.email}`);

  }
  forobject(obj);

  ///-------------------------------------------------------scope-------------//

//   IIFE
// An IIFE (Immediately Invoked Function Expression) is an idiom in which a JavaScript function runs as soon as it is defined. It is also known as a self-executing anonymous function. The name IIFE is promoted by Ben Alman in his blog
(function num() {
    console.log("this is number")
  })();