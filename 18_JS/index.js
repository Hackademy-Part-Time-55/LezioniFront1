// function sum(x, y) {
//     let z = x + y;
//     return z;
// }

// funzione anonima ES5
// let sum = function(x, y) {
//     let z = x + y;
//     return z;
// };

// funzione anonima ES6 - arrow function
// let sum = (x, y) => {
//     let z = x + y;
//     return z;
// };

// let sum = (x, y) => {
//     return x + y;
// };


// let sum = (x, y) => x + y;

// let a = 5;
// let b = 3;
// let result = sum(a, b);
// console.log(result);


/*
let double = x => 2 * x;

let a = 3;
let result = double(a);
console.log(result);
*/



/*
let prices = [5, 3, 2];

let sum = prices.reduce((accumulator, value) => {
    return accumulator + value;
});

console.log(sum);
*/


/*
let nums = [5, 99, 2, 7, -3, 10];   // -3, 2, 5, 7, 10, 99

// ..., ..., left, ..., right, ..., ... allora devo ritornare un numero < 0
// ..., ..., right, ..., left, ..., ... allora devo ritornare un numero > 0
// left = 5, right = 10
// left = 10, right = 5
nums.sort(function(left, right) {
    return right - left;
});

console.log(nums);
*/

/*
let names = ['ciro', 'ugo', 'mariangiongiangela', 'eric', 'kenny'];

names.sort((left, right) => {
    return right.length - left.length;
});

console.log(names);
*/







/*
// esercizio superenalotto
function getRandomBetween1And90() {
    return Math.floor(Math.random() * 90) + 1;  // [1.0, 91.0)
}

function isAlreadyExtracted(num, array) {
    let isExtracted = false;

    for(let i=0; i<array.length && !isExtracted; i++) {
        if(array[i] == num) {
            isExtracted = true;
        }
    }

    return isExtracted;
}

function generateExtraction() {
    let extracts = [];

    while(extracts.length < 6) {
        let num = getRandomBetween1And90();

        // let isExtractedIncluded = extracts.includes(extracted);
        let isExtractedIncluded = isAlreadyExtracted(num, extracts);

        if(!isExtractedIncluded) {
            extracts.push(num);
        }
    }

    return extracts;
}

function sortExtraction(extracts) {
    extracts.sort((left, right) => {
        return left - right;
    });
}

let extracts = generateExtraction();
sortExtraction(extracts);
console.log(extracts);
*/

/*
console.log('nanna\npappa');

console.log('\tciao');

console.log('sono dentro l\'if');

console.log('ciao', 'mamma', 123, true);

let arr = [5, 3, 2];
console.log('arr è', arr);
*/




/*
const prices = [5, 3, 2];

const num = parseFloat(prompt('dammi un nuovo valore'));
prices[3] = num;

console.log(prices);
*/





