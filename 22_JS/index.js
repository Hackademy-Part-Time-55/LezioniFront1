

/*
function sayHello() {
    console.log('ciao');
}


sayHello();
sayHello();
sayHello();
sayHello();
*/



/*
function double(x) {
    return 2 * x + 1;
}


let y1 = double(0);
console.log(y1);

let y2 = double(1);
console.log(y2);
*/



/*
function getFullname(firstname, lastname) {
    return firstname + ' ' + lastname;
}

let result = getFullname('Eric', 'Cartman');
console.log(result);
*/


/*
function areEquals(str1, str2) {
    return str1 == str2;
}

let result = areEquals('ciao', 'ciao');
console.log(result);
*/



/*
document.addEventListener('DOMContentLoaded', () => {

    const paraBello = document.getElementById('paraBello');
    console.log(paraBello);
});
*/

/*
// Crea una pagina HTML con 3 paragrafi e 3 bottoni.
//     il primo bottone dovra’ cambiare il colore del testo dei paragrafi in modo casuale (ogni paragrafo dovra' avere un colore diverso)
//     il secondo dovra’ rendere il testo dei paragrafi in grassetto
//     il terzo dovra’ far scomparire e ricomparire i paragrafi.

// TIPS:
// ricordati della proprieta’ display: none in CSS!

// i colori su CSS sono formati da R, G e B. Quindi puoi settare un colore random semplicemente randomizzando questi tre valori e mettendoli insieme. Scopri come.


function getRandomColorChannel() {
    return Math.floor(Math.random() * 256);    // [0.0, 1.0) * 256 = [0, 255] -> [0, 255] 
}

function getRandomColor() {
    return {
        r: getRandomColorChannel(),
        g: getRandomColorChannel(),
        b: getRandomColorChannel()
    };
}

const paragraphs = document.querySelectorAll('p');

const randomColorBtn = document.getElementById('randomColorBtn');
const boldBtn = document.getElementById('boldBtn');
const showHideBtn = document.getElementById('showHideBtn');

randomColorBtn.addEventListener('click', () => {
    paragraphs.forEach((paragraph) => {
        const color = getRandomColor();
        paragraph.style.color = `rgb(${color.r}, ${color.g}, ${color.b})`;
    });
});

boldBtn.addEventListener('click', () => {
    paragraphs.forEach((paragraph) => {
        paragraph.style.fontWeight = '700';
    });
});

showHideBtn.addEventListener('click', () => {

    paragraphs.forEach((paragraph) => {
        paragraph.classList.toggle('hide');
    });

    if(showHideBtn.textContent == 'Nascondi') {
        showHideBtn.textContent = 'Mostra';
    } else {
        showHideBtn.textContent = 'Nascondi';
    }
});
*/




// let msgObj = new String('ciao');
// console.log(msgObj.length);


/*
let msg = 'ciao';   // string
// msg = new String(msg);  // string -> String
console.log(msg.toUpperCase());
*/


// let msg = 'ciao';
// console.log(msg.length);


// le stringhe in JS sono immutabili
// let msg = 'ciao';
// let result = msg.toUpperCase();
// console.log(result);

// let msg = 'CiAo';
// let result = msg.toLowerCase();
// console.log(result);


// let msg = 'faccio la pappa a pranzo e faccio la pappa a cena';
// let result = msg.includes('pappa');
// console.log(result);

// let msg = 'faccio la pappa a pranzo e faccio la pappa a cena';
// let result = msg.startsWith('faccio l');
// console.log(result);

// let msg = 'faccio la pappa a pranzo e faccio la pappa a cena';
// let result = msg.endsWith(' a cena');
// console.log(result);

// let msg = 'faccio la pappa a pranzo e faccio la pappa a cena';
// let result = msg.indexOf('pappa');
// console.log(result);

// let msg = 'faccio la pappa a pranzo e faccio la pappa a cena';
// let result = msg.lastIndexOf('pappa');
// console.log(result);

// let msg = 'faccio la pappa a pranzo e faccio la pappa a cena';
// let result = msg.replaceAll('pappa', 'nanna');
// console.log(result);

/*
let email = '   eric.   cartman  @gmail.com    ';
let result = email.trim();

console.log(email);
console.log(result);
*/

// let roles = ['difensore', 'centro', 'centro', 'attaccante'];
// let rolesStr = roles.join('-');
// console.log(rolesStr);

// let rolesStr = 'difensore-centro-centro-attaccante';
// let roles = rolesStr.split('-');
// console.log(roles);


/*
// ordinamento ascendente naturale
let msg1 = 'aaa';
let msg2 = 'bbb';

let result = msg1.localeCompare(msg2);
console.log(result);
*/

/*
let msgs = ['ciao', 'bbb', 'aaa', 'bbbb', 'zuzzurellone', 'bbba', 'ragazzuoli'];

// msgs.sort((left, right) => {
//     return left.length - right.length;
// });

msgs.sort((left, right) => {
    return left.localeCompare(right);
});

console.log(msgs);
*/




/*
function Post(title, description) {
    this.title = title;
    this.description = description;
    this.like = 0;

    this.increaseLike = function() {
        this.like++;
    }
}

let post1 = new Post('sono andato al mare', 'e mi sono scottato');
// post1.increaseLike();
// post1.increaseLike();
// post1.increaseLike();
// let isPost1InstanceOfPost = post1 instanceof Post;
// console.log(isPost1InstanceOfPost);

// let post2 = new Post('che freddo', 'e dicono ke ci sia il riscaldamento globale');
// console.log(post2);
*/


/*
// ES6 - sugar syntax
class Post {
    constructor(title, description) {
        this.title = title;
        this.description = description;
        this.like = 0;
    }
    increaseLike() {
        this.like++;
    }
}

let post1 = new Post('sono andato al mare', 'e mi sono scottato');
post1.increaseLike();
post1.increaseLike();
post1.increaseLike();
console.log(post1);

let post2 = new Post('che freddo', 'e dicono ke ci sia il riscaldamento globale');
console.log(post2);
*/


// supertipo
class Person {
    constructor(firstname, lastname, age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
    printFullname() {
        console.log(`${this.firstname} ${this.lastname}`);
    }
}

// Employee is-a Person
// sottotipo 
class Employee extends Person {
    constructor(firstname, lastname, age, salary) {
        super(firstname, lastname, age);
        this.salary = salary;
    }
    printSalary() {
        console.log(this.salary);
    }
}

// let eric = new Person('eric', 'cartman', 10);
// eric.printFullname();

let garrison = new Employee('mr', 'garrison', 50, 1500);
garrison.printFullname();
// console.log(garrison);



