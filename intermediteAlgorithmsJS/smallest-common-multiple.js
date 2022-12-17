function smallestCommons(arr) {
  let higherN = Math.max(...arr);         //gets the higher num in the array
  let lowerN = Math.min(...arr);           //same as above but lower num
  let nums = []                                      

  for (let i = lowerN; i <= higherN; i++) { //create the array with all the numbers to verify 
    nums.push(i)
    console.log(nums);
  }
  
  let divisor = higherN //create the variable to increment by the higher number 

  while (true) {
    if (nums.every(item => divisor % item == 0)) { //if the divisor that is supposed to be always a higher number mod, verifying it with all the nums in the array 
      return divisor				   //and everyone returns true we found the solution and return it! 
    } else {
      divisor += higherN			   //if not, divisor is incremented by the higher number, which always its a mod  
    }
  }
}


console.log(smallestCommons([1,3]));

