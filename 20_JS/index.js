/*
function printAllCarsByBrand(cars, brandSearched) {
    const carsFound = cars.filter((car) => {
        return car.brand == brandSearched;
    });

    carsFound.forEach((car) => {
        console.log(car.model);
    });
}


const garage = [
    {
        brand: 'fiat',
        model: '500'
    },
    {
        brand: 'fiat',
        model: 'Punto'
    },
    {
        brand: 'ferrari',
        model: 'Testarossa'
    },
];

printAllCarsByBrand(garage, 'fiat');
*/


/*
const garageMichele = {
    cars: [
        {
            brand: 'fiat',
            model: '500'
        },
        {
            brand: 'fiat',
            model: 'Punto'
        },
        {
            brand: 'ferrari',
            model: 'Testarossa'
        },
    ],
    printAllCarsByBrand: function(brandSearched) {
        const carsFound = this.cars.filter((car) => {
            return car.brand == brandSearched;
        });
    
        carsFound.forEach((car) => {
            console.log(car.model);
        });
    }
};

garageMichele.printAllCarsByBrand('fiat');
*/






// const paraBello = document.getElementById('paraBello');
// console.log(paraBello);


/*
const paragraphs = document.getElementsByTagName('p');
for(let i=0; i<paragraphs.length; i++) {
    console.log(paragraphs[i]);
}
*/

/*
const elementiBellis = document.getElementsByClassName('elementoBello');
for(let i=0; i<elementiBellis.length; i++) {
    console.log(elementiBellis[i]);
}
*/

/*
const elementiBellis = document.querySelectorAll('.elementoBello');
elementiBellis.forEach((element) => {
    console.log(element);
});
*/


// const firstElementFound = document.querySelector('.elementoBello');
// console.log(firstElementFound);




// const container = document.getElementById('container');
// console.log(container.children);
// console.log(container.childNodes);
// console.log(container.parentElement);
// console.log(container.firstChild);
// console.log(container.firstElementChild);

// console.log(document.body);


// const paraBello = document.getElementById('paraBello');
// paraBello.textContent = 'Ciao da JS';
// paraBello.textContent = 'Ciao da <strong>JS</strong>';
// paraBello.innerHTML = 'Ciao da <strong>JS</strong>';



/*
const newImgUrl = 'https://magazine.arcaplanet.it/wp-content/uploads/2023/02/razza-cane-chihuahua.jpg';

const dogImg = document.getElementById('img-dog');
dogImg.setAttribute('src', newImgUrl);
*/

// const paragraph = document.getElementById('paraBello');
// paragraph.classList.forEach((clazz) => {
//     console.log(clazz);
// });

// const isBgRedIncluded = paragraph.classList.contains('bg-red');
// console.log(isBgRedIncluded);

// paragraph.classList.add('rounded', 'shadow');
// paragraph.classList.remove('text-blue');
// paragraph.classList.replace('text-blue', 'text-green');
// paragraph.classList.toggle('text-blue');





// const paragraph = document.getElementById('paraBello');
// paragraph.style.color = '#FF0000';
// paragraph.style.backgroundColor = 'red';



/*

const app = document.getElementById('app');


const article = document.createElement('article');
app.appendChild(article);

const imgUrl = "https://www.today.it/~media/horizontal-hi/24353835697500/cane-12-10.jpg"
const image = document.createElement('img');
image.setAttribute('src', imgUrl);
article.appendChild(image);

const title = document.createElement('h2');
title.textContent = 'Cane bello in vendita';
article.appendChild(title);

const description = document.createElement('p');
description.textContent = 'Perde un po di pelo';
article.appendChild(description);
*/



const products = [
    {
        imgUrl: "https://www.today.it/~media/horizontal-hi/24353835697500/cane-12-10.jpg",
        title: 'Cane bello in vendita',
        description: 'Perde un po di pelo'
    },
    {
        imgUrl: "https://magazine.arcaplanet.it/wp-content/uploads/2023/02/razza-cane-chihuahua.jpg",
        title: 'Cane brutto ma brutto brutto brutto',
        description: 'Abbaia in continuazione'
    },
];



const app = document.getElementById('app');

products.forEach((product) => {

    const article = document.createElement('article');
    app.appendChild(article);
    
    const image = document.createElement('img');
    image.setAttribute('src', product.imgUrl);
    article.appendChild(image);
    
    const title = document.createElement('h2');
    title.textContent = product.title;
    article.appendChild(title);
    
    const description = document.createElement('p');
    description.textContent = product.description;
    article.appendChild(description);
});
