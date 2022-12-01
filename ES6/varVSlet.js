var numArray =[];
for (var i = 0; i < 3; i++) {
    numArray.push(i);
}
console.log(numArray);
console.log(i);


console.log("*<----------------->*")

var printNumTwo;
for (var j=0; j<3; j++){
    if(j === 2){
        printNumTwo = function(){
            return j;
        }
    }
}
console.log(printNumTwo());

console.log("*<----------------->*")

let printNuTwo;
for (let i=0 ; i< 3; i++){
    if (i ===2){
        printNuTwo = function(){
            return i;
        }
    }
}

console.log(printNuTwo());
console.log(i);

console.log("*<----------------->*")

function checkScope(){
    let i = 'function scope';
    if(true) {
        let i = 'block scope';
        console.log('Block scope i is: ', i);
    }
        console.log('Function scope i is: ', i);
        return i;
}
console.log(checkScope());