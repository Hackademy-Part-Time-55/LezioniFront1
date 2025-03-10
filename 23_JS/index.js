


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

console.log('inizio');

fetch('http://dms.cyberdelia.eu/api/v1/user')
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

