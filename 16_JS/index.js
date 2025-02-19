/*
// Dichiarazione della funzione
function sayHello() {
    console.log('ciao');
}


// Invocare (chiamare) la funzione
sayHello();
sayHello();
sayHello();
*/


// var message;


/*
// Dichiarazione della funzione
function saySomething(message) {
    console.log(message);
}

// Invocare (chiamare) la funzione
// message = 'ciaone';
saySomething('ciaone');

// message = 'ciaoinoinoino';
saySomething('ciaoinoinoino');
*/

/*
// Dichiarazione della funzione
// var x;
// var y;
function printSum(x, y) {
    var z = x + y;
    console.log(z);
}

// Invocare (chiamare) la funzione
// x = 5;
// y = 3;
printSum(5, 3);

// x = 4;
// y = 9;
printSum(4, 9);
*/


/*
function printSum(x, y) {
    var z = x + y;
    console.log(z);

    return undefined; // implicito
}

printSum(5, 3); // (atteso) 8
printSum(4, 2); // 6
*/


/*
// Dichiarazione della funzione
// var x;
// var y;
function sum(x, y) {
    var z = x + y;
    return z;
}


// Invocare (chiamare) la funzione
// x = 5;
// y = 3;
var result = sum(5, 3);
console.log(result);
*/


/*
function sum(x, y) {
    let z = x + y;
    return z;
}


console.log('inizio');

let result1;
result1 = sum(5, 3);
console.log(result1);


let result2;
result2 = sum(2, 1);
console.log(result2);


console.log('fine');
*/




/*
function double(n) {
    let w = 2 * n;
    return w;
}


console.log('inizio');

let age = 5;

let result;
result = double(age); // n = age;
console.log(result);

console.log('fine');
*/

/*
function sum(x, y) {
    let z = x + y;
    return z;
}

function double(n) {
    // let w = 2 * n;
    // return w;

    let w = sum(n, n);
    return w;
}


console.log('inizio');

let result;
result = double(7); // 10
console.log(result);

console.log('fine');
*/












/*
function sumNaturals(x, y) {

    if(x < 0) {
        console.log('x non può essere negativo');
        return -1;
    }

    if(y < 0) {
        console.log('y non può essere negativo');
        return -2;
    }

    let z = x + y;
    return z;
}


console.log('inizio');

let result1;
result1 = sumNaturals(5, 3); // 8
console.log(result1);

// let result2;
// result2 = sumNaturals(-9, 3); // -1
// console.log(result2);

// let result3;
// result3 = sumNaturals(9, -3); // -2
// console.log(result3);


console.log('fine');
*/









/*
if(true) {
    var x = 3;
    console.log('dentro l if la x vale: ' + x);
}

console.log('fuori dall if la x vale: ' + x);   // OK
*/



/*
function sayHello() {

    if(true) {
        var x = 3;
    }

    console.log(x); // OK

    console.log('ciao');
}


sayHello();

// console.log(x); // NO
*/




/*
if(true) {
    let x = 3;
}

console.log(x);   // NOOO
*/

/*
function sayHello() {

    if(true) {
        let x = 3;
        console.log(x); // OK
    }

    console.log(x); // NO
}


sayHello();

// console.log(x); // NO
*/





/*

function sum(x, y) {
    let z;  // variabile locale
    z = x + y;
    return z;
}


// main
console.log('inizio');

let a = 5;
let b = 3;

let result;
result = sum(a, b);
console.log(result);

console.log('fine');

*/


/*
while(true) {
    let selection = prompt('Seleziona una bevanda: 1 - Acqua, 2 - Coca Cola')
    switch(selection) {
        case '1':
            alert('Erogazione acqua in corso');
            break;
        case '2':
            alert('Erogazione Coca Cola in corso');
            break;
        default:
            alert('Valore non valido');
    }
}
*/
