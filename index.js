// Code your solutions in this file


let n="surprise";
let arr="";
function writeCards(array,n) {
  
  for (let i = 0; i < array.length; i++) {
    var array[i]='Thank you, '+array[i]+', for the wonderful '+n+' gift!';
    console.log(array[i]);
    
  }
 return array;
}

function countDown(n){
  var i=n;
  while(i>=0){
    console.log(i);
    i--;
   
  }
}
writeCards(["Ada", "Brendan", "Ali"],"birthday");
countDown(10);
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);

