 let input = "hello world"

 function reversestring(){
     return input.split('').reverse().join('')

   
 }
 
 setTimeout( function(){
    let reversedstring = reversestring()
    console.log(reversedstring);
 },1000)    