// camelCase
// PascalCase
// kebab-case
// snake_case

// 'is active selection' ->

// isActiveSelection

// go through each word
// skip the first word
// every other - capitalize 1st letter
// no spaces beween words

// IsActive

// is-active
// is_active

const str = 'is active';

function setCase(str, caseName = 'kebab-case') {
    // show messsage when case name is not one of the 4
    // 1.
    const caseNameOptionsList = ['camelCase', 'PascalCase', 'kebab-case', 'snake_case'];

    // if (caseNameOptionsList.indexOf(caseName) === -1) {
    if (!caseNameOptionsList.includes(caseName)) {
        console.log(`Please use: ${caseNameOptionsList}`);

        return str;
    }

    // 2.
    // if (caseName !== 'camelCase' &&
    //     caseName !== 'PascalCase' &&
    //     caseName !== 'kebab-case' &&
    //     caseName !== 'snake_case') {
    //     console.log('Please use: camelCase, PascalCase, kebab-case, snake_case');

    //     return str;
    // }

    console.log('Params are', str, caseName);
    const strArray = str.split(' ');

    if (caseName === 'snake_case') {
        return strArray.join('_');
    }

    if (caseName === 'kebab-case') {
        return strArray.join('-');
    }

    // console.log(strArray) // ['is', 'active']
    const updatedArray = [];
    let startingIndex = 0;

    if (caseName === 'camelCase') {
        startingIndex = 1;
        updatedArray.push(strArray[0]);
    }

    for (let i = startingIndex; i < strArray.length; i++) {
        const word = strArray[i];
        const firstLetter = word[0].toUpperCase();
        const updatedWord = firstLetter + word.slice(1);
        // console.log(updatedWord); // Active
        updatedArray.push(updatedWord);
    }

    // console.log(updatedArray); // ['is', 'Active']
    // console.log(updatedArray.join('')); // 'isActive'

    return updatedArray.join('');
}

console.log(setCase(str, 'camelCase')); // isActive
console.log(setCase(str, 'PascalCase')); // IsActive
console.log(setCase(str, 'kebab-case')); // is-active
console.log(setCase(str, 'snake_case')); // is_active
console.log(setCase(str, 'hello')); // return original string: is active, when passing value for caseName that doesn't exist
console.log(setCase(str)); // when no casename, use kebab case: is-active