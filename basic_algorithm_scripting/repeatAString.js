function repeatStringNumTimes(str, num) {
    if (num <= 0) {
        return "";
    }else{
        let result = "";
        
        for(let i=0; i < num; i+= 1) {
            result += str;
        }

        return result;
    }

}
console.log(repeatStringNumTimes(0, 3));

//while loop

/*let index = 0;
while (index < num) {
    result += str;
    index += 1;
}
*/