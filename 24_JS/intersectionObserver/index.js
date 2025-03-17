/*
console.log('inizio');

localStorage.setItem('firstname', 'Eric');

console.log('fine');
*/

/*
console.log('inizio');

const firstname = localStorage.getItem('firstname');
console.log(firstname);

console.log('fine');
*/

// localStorage.removeItem('firstname');

// localStorage.clear();


/*
console.log('inizio');

const currentUser = {
    id: 5,
    email: 'eric.cartman@gmail.com',
    roles: 'ADMIN'
};

localStorage.setItem('currentUser', JSON.stringify(currentUser));

console.log('fine');
*/

/*
console.log('inizio');

const currentUserSerialized = localStorage.getItem('currentUser');
if(currentUserSerialized) {
    const currentUser = JSON.parse(currentUserSerialized);
    console.log(currentUser);
}

console.log('fine');
*/



// <p class="square">1</p>

const container = document.getElementById('container');

function generateRandomColor() {
    return Math.floor(Math.random() * 256);
}

function createSquare(text) {

    const square = document.createElement('p');
    square.className = 'square';

    const r = generateRandomColor();
    const g = generateRandomColor();
    const b = generateRandomColor();
    square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

    square.textContent = text;
    container.appendChild(square);
}

function fetchSimulator() {
    for(let i=1; i<=10; i++) {
        createSquare(i);
    }
}

fetchSimulator();

// di default l'elemento root è la viewport
const observer = new IntersectionObserver((entries) => {

    if(!entries[0] || entries[0].intersectionRatio <= 0) {
        return;
    }

    // infinite scroll
    fetchSimulator();
});

const target = document.getElementById('loadMore');
observer.observe(target);