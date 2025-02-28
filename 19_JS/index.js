
/*
let ericFirstname = 'Eric';
let ericLastname = 'Cartman';
let ericAge = 10;

function printEricFullname() {
    console.log(ericFirstname + ' ' + ericLastname);
}

printEricFullname();






let stanFirstname = 'Stan';
let stanLastname = 'Marsh';
let stanAge = 10;

function printStanFullname() {
    console.log(stanFirstname + ' ' + stanLastname);
}

printStanFullname();
*/




/*
// full notation
let eric = new Object();  // oggetto vuoto
console.log(eric);

// short notation
let eric = {};  // oggetto vuoto
console.log(eric);
*/



/*
let eric = new Object();

eric.firstname = 'Eric';
eric.lastname = 'Cartman';
eric.age = 10;

eric.printFullname = function() {
    console.log(this.firstname + ' ' + this.lastname);
};

eric.printFullname();
*/




// let stan = new Object();

// stan.firstname = 'Stan';
// stan.lastname = 'Marsh';
// stan.age = 10;

// stan.printFullname = function() {

//     console.log('sono nel metodo', this);

//     console.log(this.firstname + ' ' + this.lastname);
// };

// stan.printFullname();






/*
let eric = {
    firstname: 'Eric',
    lastname: 'Cartman',
    age: 10,
    printFullname: function() {
        console.log(this.firstname + ' ' + this.lastname);
    }
};

eric.printFullname();
*/




/*
function createUser(nome, cognome, eta) {

    let user = new Object();

    user.firstname = nome;
    user.lastname = cognome;
    user.age = eta;
    
    user.printFullname = function() {
        console.log(this.firstname + ' ' + this.lastname);
    };
    
    return user;
}


let eric = createUser('Eric', 'Cartman', 10);
eric.printFullname();

let stan = createUser('Stan', 'Marsh', 10);
stan.printFullname();
*/



/*
// funzione costruttore
function User(nome, cognome, eta) {

    // let user = new Object();
    
    this.firstname = nome;
    this.lastname = cognome;
    this.age = eta;
    
    this.printFullname = function() {
        console.log(this.firstname + ' ' + this.lastname);
    };
    
    // return user;
}

let eric = new User('Eric', 'Cartman', 10);
console.log(eric);

let stan = new User('Stan', 'Marsh', 10);
console.log(stan);
*/




// let strObj = new String('ciao');
// console.log(strObj.length);
// console.log(strObj.toUpperCase());


/*
let x = 10; // number
let msg = String(x);    // string
console.log(msg);
*/


// let msg = '10';
// let x = Number(msg);    // number
// console.log(x);


// let x = ''; // string
// let result = Boolean(x);    // boolean
// console.log(result);


// let x = 0; // number
// let result = Boolean(x);    // boolean
// console.log(result);


// let x = undefined; // undefined
// let result = Boolean(x);    // boolean
// console.log(result);


/*
let x = 5;
if(x) {
    console.log('x è diverso da zero');
} else {
    console.log('x è uguale a zero');
}
*/




// let prices = [5, 3, 2];
// console.log(prices);

/*
let sum = function(x, y) {
    return x + y;
};

let result = sum(5, 3);
console.log(result);
*/

/*
let eric = {
    firstname: 'Erika',
    lastname: 'Cartman',
    age: 10,
    printFullname: function() {
        console.log(this.firstname + ' ' + this.lastname);
    }
};

let posts = [
    {
        imgUrl: 'https://static.wikia.nocookie.net/southpark/images/0/0a/Pee.jpg/revision/latest/scale-to-width-down/250?cb=20210121192602&path-prefix=fr',
        content: 'sono andato al mare',
        author: eric
    },
    {
        imgUrl: '',
        content: 'sono andato in montagna',
        author: eric
    }
];


posts.forEach((post) => {
    console.log(post);
});
*/

/*
let dealBari = {
    location: 'via fasulla 123',
    city: 'Bari',
    cars: [
        {
            brand: 'Fiat',
            model: 'Panda'
        },
        {
            brand: 'Ferrari',
            model: 'Testarossa'
        },
    ]
};

dealBari.cars.forEach((car) => {
    console.log(car.brand, car.model);
})
*/



let prices = [5, 150, 3, 2];

let priceFound = prices.find((price) => {
    return price > 100;
});

console.log(priceFound);



















