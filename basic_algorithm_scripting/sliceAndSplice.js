function frankenSplice(arr1, arr2, n) {
    let result = [];
    result.push(...arr2.slice(0, n));
    result.push(...arr1);
    result.push(...arr2.slice(n, arr2.length));
  
    return result;
  }
  
  
  console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));