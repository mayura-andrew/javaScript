function titleCase(str) {
    let result = "";
    let words = str.split(" ");

    for (let i = 0; i < words.length; i += 1) {
        let word = words[i];

        for (let j = 0; j < word.length; j += 1) {
            if (j === 0) {
                result += word[j].toUpperCase();
            }else {
                result += word[j].toLowerCase();
            }
        }
        if (words.length - 1 !== i) {
            result += " ";
        }
    }
    return result;

}

console.log(titleCase("I'm a Little tea pot"));