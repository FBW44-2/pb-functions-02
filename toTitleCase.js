// Title case
// This is a title 
// to be transformed 
// This Is A Title

// go through each word
// change the 1st letter to capital

function toTitleCase(str) {
    const strArray = str.split(' '); // ['this', 'is', 'a', 'title']
    // 1.
    const updatedArray = [];

    for (let i = 0; i < strArray.length; i++) {
        const word = strArray[i];
        // this
        // t -> T
        // T + his -> This
        let updatedWord = word[0].toUpperCase();
        // console.log(word[0].toUpperCase()); // T I A T
        let completeWord = updatedWord + word.slice(1);
        console.log(completeWord) // 'This', 'Is', 'A', 'Title'

        // 1.
        strArray[i] = completeWord;

        // 2.
        updatedArray.push(completeWord);
    }
    // 1.
    // console.log(updatedArray); // ['This', 'Is', 'A', 'Title'];
    // console.log(updatedArray.join(' ')); // 'This Is A Title'
    // 2.
    // console.log(strArray); // ['This', 'Is', 'A', 'Title'];
    // console.log(strArray.join(' ')); // 'This Is A Title'

    return strArray.join(' ');
}

const str = 'This is a title';
console.log(str.split(' ')); // logs ['this', 'is', 'a', 'title']

console.log(toTitleCase(str)); // 'This Is A Title'
