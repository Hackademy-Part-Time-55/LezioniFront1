/*
// let roles = ['difensore', 'centro 1', 'centro 2'];

// aggiunge un elemento alla fine dell'array
// roles.push('attaccante');

// rimuove l'elemento alla fine dell'array
// let lastElement = roles.pop();
// console.log(lastElement);

// shift unshift
*/

/*
let roles = ['portiere', 'difensore', 'centro 1', 'centro 2', 'attaccante'];

// il metodo slice(startIndexIncluded, endIndexExcluded) ritorna un sotto-array
let noHandsRole = roles.slice(1, 4);
console.log(noHandsRole);

console.log(roles);
*/



/*
let roles = ['portiere', 'difensore', 'centro 1', 'centro 2', 'attaccante'];

// il metodo splice(startIndexIncluded, deleteCount, itemToAdd1, itemToAdd2, ...) 
// roles.splice(1, 2, 'raccattapalle', 'arbitro');
roles.splice(1, 0, 'arbitro');

console.log(roles);
*/



/*
let roles = ['portiere', 'difensore', 'centro 1', 'centro 2', 'attaccante'];
let outsideRoles = ['raccattapalle', 'arbitro'];

let allRoles = roles.concat(outsideRoles);
console.log(allRoles);
*/


/*
let roles = ['portiere', 'difensore', 'centro 1', 'centro 2', 'attaccante'];
roles.reverse();

console.log(roles);
*/


/*
let roles = ['portiere', 'difensore', 'centro 1', 'centro 2', 'attaccante'];

// il metodo join(separatore) unisce gli elementi che formano l'array ritornando una stringa
let rolesString = roles.join(' ');

console.log(rolesString);
*/


/*
let roles = ['portiere', 'difensore', 'centro 1', 'centro 2', 'attaccante'];

let isDifensoreIncluded = roles.includes('difensore');
console.log(isDifensoreIncluded);
*/


/*
let roles = ['portiere', 'difensore', 'centro 1', 'centro 2', 'attaccante'];

// il metodo indexOf() ritorna un number che rappresenta l'indice dell'elemento cercato se è stato trovato altrimenti ritorna -1 
let indexFound = roles.indexOf('attaccante');
console.log(indexFound);
*/






/*
function indexOf(arr, toSearch) {
    for(let i=0; i < arr.length; i++) {
        if(arr[i] == toSearch) {
            return i;
        }
    }
    return -1;
}


let roles = ['portiere', 'difensore', 'centro', 'centro', 'attaccante'];

// let indexFound = roles.indexOf('centro');
let indexFound = indexOf(roles, 'centro');  // -1
console.log(indexFound);
*/



/*
let roles = ['portiere', 'difensore', 'centro', 'centro', 'attaccante'];

// ricerca l'elemento a partire dalla fine dell'array
let indexFound = roles.lastIndexOf('centro');
console.log(indexFound);
*/











/*
// funzione anonima
let sum = function(x, y) {
    let z;
    z = x + y;
    return z;
};

let a = 5;
let b = 3;

let result;
result = sum (a, b);
console.log(result);
*/



/*
function prova(arr) {
    arr[0] = -1000;
}

let prices = [5, 3, 2, 99];
prova(prices);  // arr = prices
console.log(prices);    // prices[0] == 5 oppure prices[0] == -1000 ????
*/



/*
function sumAll(arr) {
    let sum = 0;
    for(let i=0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;    
}

let prices = [5, 3, 2, 99];
let result = sumAll(prices);
console.log(result);
*/


/*
function printAll(arr) {
    for(let i=0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

let prices = [5, 3, 2, 99];
printAll(prices);
*/





/*
function forEach(arr, callback) {
    for(let i=0; i < arr.length; i++) {
        callback(arr[i], i);
    }
}



// utilizzo
let prices = [5, 3, 2, 99];
// arr = prices
// callback = function(value, index) {
//     console.log(value);
// }
forEach(prices, function(value, index) {
    console.log(value);
});
*/






/*
let prices = [5, 3, 2, 99];
prices.forEach(function(value) {
    console.log(value);
});
*/


/*
let prices = [5, 3, 2, 100];

let discountedPrices = prices.map(function(value) {
    return value * 50 / 100;
});

console.log(discountedPrices);
*/



/*
let ages = [54, 12, 99, 5, 72];

let agesOver18 = ages.filter(function(value) {
    return value >= 18;
});

console.log(agesOver18);
*/


let ages = [54, 99, 12, 5, 72];

let firstFound = ages.find(function(value) {
    return value < 18;
});

console.log(firstFound);






