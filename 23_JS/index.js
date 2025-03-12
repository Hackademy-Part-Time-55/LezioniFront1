


/*
console.log('inizio');

window.setInterval(() => {
    console.log('ciao in ritardo');
}, 2000);

console.log('fine');
*/





/*
let executor = function(resolve, reject) {
    // task
    console.log('sono nella funzione executor');

    // resolve(99);
    reject('si è verificato un problema');
}

console.log('inizio');

let promise = new Promise(executor);

promise
    .then(function(result) {    // corrispondente a resolve
        console.log('sono nel then', result);
    })
    .catch(function(error) {    // corrispondente a reject
        console.log('sono nel catch', error);
    });

console.log('fine');
*/


/*
function sumNaturals(x, y) {
    return new Promise(function(resolve, reject) {
        // task

        if(x < 0) {
            reject('x non può essere negativo');
            return;
        }

        if(y < 0) {
            reject('y non può essere negativo');
            return;
        }
    
        let z = x + y;
        resolve(z);
    });
}

sumNaturals(5, -3)
    .then(function(result) {    // corrispondente a resolve
        console.log('sono nel then', result);
    })
    .catch(function(error) {    // corrispondente a reject
        console.log('sono nel catch', error);
    });
*/


/*
function sumNaturalsAsync(x, y) {
    return new Promise(function(resolve, reject) {
        // task
        window.setTimeout(function() {

            if(x < 0) {
                reject('x non può essere negativo');
                return;
            }
    
            if(y < 0) {
                reject('y non può essere negativo');
                return;
            }
        
            let z = x + y;
            resolve(z);

        }, 5000);
    });
}

console.log('inizio');

sumNaturalsAsync(5, 3)
    .then(function(result) {    // corrispondente a resolve
        console.log('sono nel then', result);
    })
    .catch(function(error) {    // corrispondente a reject
        console.log('sono nel catch', error);
    });

console.log('fine');
*/




/*
function sumNaturals(x, y) {
    return new Promise(function(resolve, reject) {
        // task

        if(x < 0) {
            reject('x non può essere negativo');
            return;
        }

        if(y < 0) {
            reject('y non può essere negativo');
            return;
        }
    
        let z = x + y;
        resolve(z);
    });
}

function print(msg) {
    return new Promise(function(resolve, reject) {
        console.log(msg);
        resolve();
        // reject('errore da print');
    });
}

sumNaturals(-5, 3)
    .then(function(result) {    // corrispondente a resolve
        console.log('sono nel primo then');

        // promise chaining
        return print(result);
    })
    .then(function() {
        console.log('sono nel secondo then');
    })
    .catch(function(error) {    // corrispondente a reject
        console.log('sono nel catch', error);
    });
*/



/*
// serializzazione e deserializzazione di un oggetto
const user = {
    firstname: 'Eric',
    lastname: 'Cartman',
    age: 10,
    isMale: true
};

const userSerialized = JSON.stringify(user);
console.log(userSerialized);
*/

/*
const userSerialized = '{"firstname":"Eric","lastname":"Cartman","age":10,"isMale":true}';
const user = JSON.parse(userSerialized);
console.log(user);
*/

/*
const users = [
    {
        firstname: 'Eric',
        lastname: 'Cartman',
        age: 10,
        isMale: true
    },
    {
        firstname: 'Stan',
        lastname: 'Marsh',
        age: 10,
        isMale: true
    }
];

const usersSerialized = JSON.stringify(users);
console.log(usersSerialized);
*/

/*
console.log('inizio');

fetch('https://dms.cyberdelia.eu/api/v1/user')
    .then(function(response) {

        // if(response.status == 200) {
        // }

        // promise chaining
        return response.json();
    })
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        // errore lato client
        console.log(error);
    });


console.log('fine');
*/



/*
function sumNaturals(x, y) {

    if(x < 0) {
        console.log('x non può essere minore di zero');
        return -1;
    }

    if(y < 0) {
        console.log('y non può essere minore di zero');
        return -2;
    }

    return x + y;
}


const a = 5;
const b = -3;

const result = sumNaturals(a, b);
console.log(result);
*/



/*
// Errori vari:

// console.log(msg);

// if {
//     console.log('ciao');
// }

let prices = [5, 3, 2];
prices('ciao');
*/


/*
let error = new Error('una descrizione dell\'errore');
// console.log(error.name);
// console.log(error.message);
*/



// const error = new Error('una descrizione dell\'errore');
// throw error;

/*
console.log('inizio');

throw new Error('una descrizione dell\'errore');

console.log('fine');
*/


/*
console.log('inizio');

try {
    console.log('sono all\'inizio del try');
    
    throw new Error('una descrizione dell\'errore');

    console.log('sono alla fine del try');

} catch(error) {
    // const error = new Error('una descrizione dell\'errore');
    // qui dentro gestisco l'errore

    console.log('sono dentro il catch:', error.message);
}

// qui riprendo la normale esecuzione del programma
console.log('fine');
*/

/*
console.log('inizio');

try {
    const n = 6;    // simulo input
    const d = 0;    // simulo input

    if(d == 0) {
        throw new Error('il denominatore non può essere zero!');
    }

    const result = n / d;
    console.log(result);
    
} catch(error) {
    console.log('si è verificato un problema:', error.message);
}

console.log('fine');
*/




/*
function sumNaturals(x, y) {

    if(x < 0) {
        throw new Error('x non può essere minore di zero');
    }

    if(y < 0) {
        throw new Error('y non può essere minore di zero');
    }

    return x + y;
}

try {
    const a = 5;   // simulo un input
    const b = -3;   // simulo un input

    const result = sumNaturals(a, b);
    console.log(result);
} catch(error) {
    console.log(error.message);
}
*/



/*
function sumNaturals(x, y) {
    return new Promise(function(resolve, reject) {
        // task

        if(x < 0) {
            reject(new Error('x non può essere negativo'));
            return;
        }

        if(y < 0) {
            reject(new Error('y non può essere negativo'));
            return;
        }
    
        let z = x + y;
        resolve(z);
    });
}

function print(msg) {
    return new Promise(function(resolve, reject) {
        console.log(msg);
        resolve();
        // reject('errore da print');
    });
}

sumNaturals(-5, 3)
    .then(function(result) {    // corrispondente a resolve
        console.log('sono nel primo then');

        // promise chaining
        return print(result);
    })
    .then(function() {
        console.log('sono nel secondo then');
    })
    .catch(function(error) {    // corrispondente a reject
        console.log('sono nel catch', error.message);
    });

*/


// async await ES7

// function sumNaturals(x, y) {
//     return new Promise(function(resolve, reject) {
//         // task

//         if(x < 0) {
//             reject(new Error('x non può essere negativo'));
//             return;
//         }

//         if(y < 0) {
//             reject(new Error('y non può essere negativo'));
//             return;
//         }
    
//         let z = x + y;
//         resolve(z);
//     });
// }


/*
async function sumNaturals(x, y) {
    // task

    if(x < 0) {
        throw new Error('x non può essere negativo');   // reject(new Error('x non può essere negativo'))
    }

    if(y < 0) {
        throw new Error('y non può essere negativo');   // reject(new Error('y non può essere negativo'))
    }

    let z = x + y;
    return z;   // resolve(z);
}

async function print(msg) {
    console.log(msg);
    return; // resolve();
}

async function sumNaturalsAndPrint(x, y) {
    const result = await sumNaturals(x, y);
    console.log('sono nel primo then');

    await print(result);    // promise chaining
    console.log('sono nel secondo then');
}

sumNaturalsAndPrint(5, 3)
    .catch(function(error) {    // corrispondente a reject
        console.log('sono nel catch', error.message);
    });
*/


async function loadUsers() {

    const response = await fetch('https://dms.cyberdelia.eu/api/v1/user');
    console.log(response.status);

    const data = await response.json();
    console.log(data);
}

console.log('inizio');

loadUsers()
    .catch(function(error) {
        // errore lato client
        console.log(error);
    });

console.log('fine');