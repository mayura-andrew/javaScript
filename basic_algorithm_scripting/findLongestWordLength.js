function findLongestWordLength(str){
    let longestWord = "";
    let words = str.split(" ");

    for (let i = 0; i < words.length; i += 1) {
        let individualWord = words[i];

        if (individualWord.length > longestWord.length) {
            longestWord = individualWord;
        }
    }

    return longestWord.length;
}