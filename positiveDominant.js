// # Positive Dominant

// An array is positive dominant if it contains strictly more unique positive values than unique negative values.Write a function that returns true if an array is positive dominant.

// 0 counts as neither a positive nor a negative value.

// // There is only 1 unique positive value (1).
// // There are 2 unique negative values (-3, -4).

function isPositiveDominant(arr) {
    const negatives = [];
    const positives = [];

    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];

        if (num > 0) {
            if (!positives.includes(num)) { // filter out duplicates
                // add to positives
                positives.push(num);
            }
        }

        if (num < 0) {
            if (!negatives.includes(num)) { // filter out duplicates
                // add to negatives
                negatives.push(num);
            }
        }
    }

    // console.log(arr)
    // console.log(positives)
    // console.log(negatives)

    return positives.length > negatives.length;
}

console.log(isPositiveDominant([1, 1, 1, 1, -3, -4])) // false

console.log(isPositiveDominant([5, 99, 832, -3, -4])) // true

console.log(isPositiveDominant([5, 0])) // true

console.log(isPositiveDominant([0, -4, -1])) // false