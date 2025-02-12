// proprietà dell'oggetto Math (cioè costanti racchiuse all'interno del contenitore Math)
// console.log(Math.PI);
// console.log(Math.E);


// metodi dell'oggetto Math (cioè funzioni racchiuse all'interno del contenitore Math)
/*
var x = -5;
var y = Math.abs(x);
console.log(y);
*/

/*
var base = 5;
var exp = 2;
var y = Math.pow(base, exp);    // power -> base, esponente
console.log(y);
*/

/*
var x = 25;
var y = Math.sqrt(x);   // square root
console.log(y);
*/

/*
var y = Math.random();  // [0.0, 1.0)
console.log(y);
*/

/*
var min = Math.min(5, 2, 99, -3, -5.77, 100);
console.log(min);

var max = Math.max(5, 2, 99, -3, -5.77, 100);
console.log(max);
*/

/*
var x = 4.7;

var y = Math.ceil(x);
console.log(y);

var w = Math.round(x);
console.log(w);

var z = Math.floor(x);
console.log(z);
*/




/*
var x = '5';
var y = 5;

var result;
result = x === y;

console.log(result);
*/


/*
var haiLaMacchina = false;
var haiLaBenzina = false;

var puoiViaggiare = haiLaMacchina && haiLaBenzina;
console.log(puoiViaggiare);
*/

/*
var haiIlWifi = false;
var haiEthernet = false;

var haiInternet = haiIlWifi || haiEthernet;
console.log(haiInternet);
*/


/*
var isSunnyDay = false;

var isUmbrellaRequired = !isSunnyDay;
console.log(isUmbrellaRequired);
*/

/*
console.log('inizio');

var temperature;
temperature = 39;   // simulo l'input da parte dell'utente

console.log('la tua temperatura è ' + temperature);

if(temperature >= 37.5) {
    console.log('hai la febbre');
}

console.log('fine');
*/



/*
if(false) {
    console.log('sono nel blocco di codice dell if');
} else {
    console.log('sono nel blocco di codice dell else');
}
*/


/*
console.log('inizio');

var temperature;
temperature = 36;   // simulo l'input da parte dell'utente

console.log('la tua temperatura è ' + temperature);

if(temperature >= 37.5) {
    console.log('hai la febbre... resta a casa');
} else {
    console.log('vatti a fare una birra!!');
}

console.log('fine');
*/




/*
console.log('inizio');

var temperature;
temperature = 36;   // simulo l'input da parte dell'utente

console.log('la tua temperatura è ' + temperature);

var message;
if(temperature >= 37.5) {
    message = 'hai la febbre... resta a casa';
} else {
    message = 'vatti a fare una birra!!';
}
console.log(message);

console.log('fine');
*/


/*
console.log('inizio');

var temperature;
temperature = 36;   // simulo l'input da parte dell'utente

console.log('la tua temperatura è ' + temperature);

var message;
message = temperature >= 37.5 ? 'hai la febbre... resta a casa' : 'vatti a fare una birra!!';   // operatore condizionale
console.log(message);

console.log('fine');
*/


/*
console.log('inizio');

var n = parseInt(prompt('insersci un numero'));

if(n % 2 == 0) {
    console.log(`il numero ${n} è pari`);
} else {
    console.log(`il numero ${n} è dispari`);
}

console.log('fine');
*/


/*
console.log('inizio');

let color = prompt('inserisci un colore');

// problema dell'else pendente (dangling else)

if(color == 'red') {
    console.log('che paura');
    console.log('scappiamo');
} else if(color == 'blue') {
    console.log('andiamo al mare');
} else if(color == 'green') {
    console.log('che bella la natura');
} else {
    console.log('colore non valido');
}

console.log('fine');
*/



/*
console.log('inizio');

let rgb = prompt('inserisci un colore');
switch(rgb) {
    case 'red': // rgb == 'red'
        console.log('che paura');
        console.log('scappiamo');
        break;
    case 'blue':
        console.log('andiamo al mare');
        break;
    case 'green':
        console.log('che bella la natura');
        break;
    default:
        console.log('colore non valido');
}

console.log('fine');
*/


/*
console.log('inizio');

var temperature = 37.25;

switch(temperature) {
    case 37.2:  // temperature == 37.2
        console.log('stai bene');
        break;
    case 37.25:  // temperature == 37.25
        console.log('stai bene');
        break;
    case 37.3:  // temperature == 37.3
        console.log('stai bene');
        break;
    default:
        console.log('temperatura non valida');
}

console.log('fine');
*/


