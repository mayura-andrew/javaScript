function findElement(arr, func) {
    let num = 0;

    for (let i = 0; i < arr.length; i += 1) {
        if (func(arr[i])) {
            return arr[i];
        }
    }

    return undefined;
}
console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));