// console.log('inizio');

// la condizione viene determinata a partire da una espressione boolean
// while(condizione) {
//     blocco di codice da eseguire finchè la condizione è true!
// }

// console.log('fine');




/*
console.log('inizio');

let n = 1;

// true
console.log(n < 6);
console.log(n); // 1
n++;

// true
console.log(n < 6);
console.log(n); // 2
n++;

// true
console.log(n < 6);
console.log(n); // 3
n++;

// true
console.log(n < 6);
console.log(n); // 4
n++;

// true
console.log(n < 6);
console.log(n); // 5
n++;

// false
console.log(n < 6);
// 6

console.log('fine');
*/

/*
console.log('inizio');

let n = 1;

while(n <= 10) {
    console.log(n);
    n++;
}

console.log('fine');
*/


/*
console.log('inizio');

var input = prompt('insersci la password'); // ugo
var rightPassword = 'ciao';

while(input != rightPassword) {
    console.log('password sbagliata');

    input = prompt('insersci la password'); // 2) ciccio
}

console.log('benvenuto');

console.log('fine');
*/





// true -> i = 0
// total = total + prices[i];
// i++;

// true -> i = 1
// total = total + prices[i];
// i++;

// true -> i = 2
// total = total + prices[i];
// i++;

// false -> i = 3

// var total = prices[0] + prices[1] + prices[2];


/*
console.log('inizio');

let prices = [5, 2.5, 10];

let total = 0;
let i = 0;
while(i < prices.length) {
    total = total + prices[i];
    i++;
}
console.log(total);

console.log('fine');
*/


/*
console.log('inizio');

var input;
var rightPassword = 'ciao';

do {
    input = prompt('insersci la password');
} while(input != rightPassword);

console.log('benvenuto');

console.log('fine');
*/



/*
console.log('inizio');

var input;
var rightPassword = 'ciao';

do {
    input = prompt('insersci la password');

    if(input != rightPassword) {
        console.log('password sbagliata');
    }

} while(input != rightPassword);

console.log('benvenuto');

console.log('fine');
*/


/*
console.log('inizio');

var age;

// validazione dell'input
do {
    age = parseInt(prompt('insersci la tua età'));
} while(age < 0 || age >= 130);

console.log(age);

console.log('fine');
*/

/*
var result;

do {
    result = prompt('mi ami? (y/n)');

    if(result == 'n') {
        console.log('e xke non mi ami?');
    }

} while(result != 'y'); // result == 'n'

console.log('anche io ti amo');
*/





/*
console.log('inizio');

let n = 1;  // 1) dichiarazione di una variabile e inizializzazione
while(n <= 10) {    // 2) condizione
    console.log(n);
    n++;    // 3) modifica del valore della variabile
}

console.log('fine');
*/

/*
console.log('inizio');

for(let n = 1; n <= 10; n++) {
    console.log(n);
}

console.log('fine');

*/

/*
console.log('inizio');

let prices = [5, 2.5, 10];

let total = 0;

let i = 0;  // 1) dichiarazione di una variabile e inizializzazione
while(i < prices.length) {    // 2) condizione

    total = total + prices[i];

    i++;    // 3) modifica del valore della variabile
}
console.log(total);

console.log('fine');
*/


/*
console.log('inizio');

let prices = [5, 2.5, 10];

let total = 0;

for(let i = 0; i < prices.length; i++) {
    total = total + prices[i];
}

console.log(total);

console.log('fine');
*/




for(var n = 0; n <= 10; n += 2) {
    
    console.log(n);
}

