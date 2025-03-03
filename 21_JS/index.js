
/*
const paragraph = document.getElementById('paraBello');
paragraph.addEventListener('click', function(event) {
    console.log('paragrafo cliccato', event);
});
*/



/*
const paragraph = document.getElementById('paraBello');
paragraph.addEventListener('click', function(event) {

    event.stopPropagation();

    console.log('paragrafo cliccato', event);
});

const div = paragraph.parentElement;
div.addEventListener('click', function(event) {
    console.log('div cliccato', event);
});

const body = document.body;
body.addEventListener('click', function(event) {
    console.log('body cliccato', event);
});
*/


/*
const link = document.getElementById('linkYoutube');
link.addEventListener('click', function(event) {
    event.preventDefault();

    console.log('link cliccato', event);
});
*/



/*
const btn = document.getElementById('btn');
btn.addEventListener('dblclick', (event) => {
    console.log('btn cliccato');
});
*/


/*
const firstnameInput = document.getElementById('firstnameInput');
firstnameInput.addEventListener('input', function(event) {
    // console.log(event.target.value);
    console.log(firstnameInput.value);
});
*/

/*
const firstnameInput = document.getElementById('firstnameInput');
const lastnameInput = document.getElementById('lastnameInput');

const signupForm = document.getElementById('signupForm');
signupForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const user = {
        firstname: firstnameInput.value,
        lastname: lastnameInput.value
    };

    console.log(user);
});
*/

/*
const todoList = document.getElementById('todoList');

const todoInput = document.getElementById('todoInput');
const todoForm = document.getElementById('todoForm');
todoForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const whatToDo = todoInput.value;

    const listItem = document.createElement('li');
    todoList.appendChild(listItem);

    const description = document.createElement('span');
    description.textContent = whatToDo;
    listItem.appendChild(description);

    const doneButton = document.createElement('button');
    doneButton.textContent = 'Fatto';
    doneButton.addEventListener('click', () => {
        listItem.remove();
    });
    listItem.appendChild(doneButton);

    // clear
    todoInput.value = '';
});
*/



/*
console.log('inizio');

const timerId = window.setTimeout(() => {
    console.log('ciao in ritardo');
}, 5000);

// window.clearTimeout(timerId);

console.log('fine');
*/

/*
console.log('inizio');

const timerId = window.setInterval(() => {
    console.log('ciao in ritardo');
}, 2000);

// window.clearInterval(timerId);

console.log('fine');
*/


/*
let i = 10;
const timerId = window.setInterval(() => {

    if(i < 0) {
        window.clearInterval(timerId);
        return;
    }

    console.log(i);
    i--;
}, 1000);
*/

/*
const lastMinuteBanner = document.getElementById('last-minute-banner');

setInterval(() => {
    lastMinuteBanner.classList.toggle('last-minute-warning');
}, 600);
*/




/*
// var sayHello = function() {
//     console.log(this);
// };

console.log(this);

// let sayHello = () => {
//     console.log(this);
// };

sayHello();
*/




function User(firstname, lastname) {

    this.firstname = firstname;
    this.lastname = lastname;

    this.printFullname = function() {

        // console.log(this);  // oggetto eric

        // nested function
        // let getSpace = function() {
        //     console.log(this);  // window
        //     return ' ';
        // };

        let getSpace = () => {
            console.log(this);  // eric (dal contesto esterno alla funzione)
            return ' ';
        };

        console.log(this.firstname + getSpace() + this.lastname);
    }
}

let eric = new User('Eric', 'Cartman');
eric.printFullname();
