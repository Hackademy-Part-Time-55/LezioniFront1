/*
var firstname;
firstname = 'Eric';

var lastname;
lastname = 'Cartman';

var fullname;
fullname = firstname + ' ' + lastname;    // operatore di concatenazione
console.log(fullname);
*/




/*
// template string
var firstname;
firstname = `Eric`;     // windows: ALT + 96   mac: option + \

console.log(firstname);
*/

/*
var prefix;
prefix = 'Signor';

var firstname;
firstname = 'Eric';

var lastname;
lastname = 'Cartman';

var city;
city = 'South Park'

var welcomeMsg;
// welcomeMsg = 'Benvenuto ' + prefix + ' ' + firstname + ' ' + lastname + ' da ' + city;
welcomeMsg = `Benvenuto ${prefix} ${firstname} ${lastname} da ${city}`; // ${variabile} sono i placeholder
console.log(welcomeMsg);
*/



/*
var x = '5';
var y = '3';

var result;
result = x + y;

console.log(result);
*/

/*
var x = 'ciao';
var y = 3;

var result;
result = x * y;     // NaN Not a Number

console.log(result);
*/




/*
var price1 = 5;
var price2 = 3;
var price3 = 1.5;

var total = price1 + price2 + price3;
console.log(total);
*/



/*
var prices;
prices = [5, 3, 1.5];

// console.log(prices[0]);
// console.log(prices[1]);
// console.log(prices[2]);

prices[0] = 99;

prices[1] = -50;

console.log(prices);
*/

/*
var daysOfWeek;
daysOfWeek = ['lunedì', 'martedì'];


console.log(daysOfWeek[0]);

daysOfWeek[0] = 'monday';

console.log(daysOfWeek[0]);

console.log(daysOfWeek);
*/

/*
let prices;
prices = [5, 3, 9];

let prezzi;
prezzi = prices;    // copia di riferimenti (shallow copy)

prezzi[0] = 99;

console.log(prices);
*/

/*
let prices;
prices = [];

prices[0] = 100;
prices[1] = 5;
prices[2] = 7;

console.log(prices.length);
*/





/*
// var firstname = 'Eric'; // hardcoded
var firstname = prompt('Insersci il tuo nome'); // input
console.log(typeof firstname);  // string

var welcomeMsg = 'Benvenuto, ' + firstname;
alert(welcomeMsg);  // output
*/


/*
var num = parseInt('32.5');   // conversione di tipo esplicita da string a number interno

console.log(num);
console.log(typeof num);
*/

/*
var num = parseFloat('32.5');   // conversione di tipo esplicita da string a number con anche i decimali

console.log(num);
console.log(typeof num);
*/






var xStr = prompt('insersci il primo numero');
var yStr = prompt('insersci il secondo numero');

var x = parseFloat(xStr);
var y = parseFloat(yStr);

var z = x + y;
alert('la somma dei due numeri è: ' + z);













