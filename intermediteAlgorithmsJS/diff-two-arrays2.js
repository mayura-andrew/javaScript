function diffArray(arr1, arr2) {
  const newArr = [];

  function compareAgainstOther(first, second) {
    for (let i = 0; i < first.length; i += 1) {
      if(second.indexOf(first[i]) === -1) {
        newArr.push(first[i]);
    }
  }
}

  compareAgainstOther(arr1, arr2);
  compareAgainstOther(arr2, arr1);
  return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
