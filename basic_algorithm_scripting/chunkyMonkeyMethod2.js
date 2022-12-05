function chunkArrayInGroups(arr, size) {
    let chunkyArr = [];
    while (arr.length){
        chunkyArr.push(arr.splice(0, size));
    }

    return chunkyArr;
}
