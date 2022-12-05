function getIndexToIns(arr, num) {
    let sortedArray = arr.sort(function(a, b) {return a - b});

    for (let i = 0; i < sortedArray.length; i +=1) {
        if (num > arr[i - 1] && num <= arr[i]) {
            return i;
        }
    }

    if (sortedArray[sortedArray.length - 1] < num) {
        return sortedArray.length;
    }
    return 0;
}
