

/*
<div class="col-12 col-md-6 col-lg-4 col-xl-3">
    <article class="category-card">
        <a class="category-card-body" href="">
            <div class="category-icon-container">
                <i class="bi bi-car-front-fill"></i>
            </div>
            <h3 class="category-card-title">Auto</h3>
            <p class="category-card-description">123 Annunci</p>
        </a>
    </article>
</div>
*/

function createColumnCard(category) {

    const col = document.createElement('div');
    col.classList.add('col-12', 'col-md-6', 'col-lg-4', 'col-xl-3');
    // categoriesRow.appendChild(col);

    const card = document.createElement('article');
    card.classList.add('category-card');
    col.appendChild(card);

    const cardBody = document.createElement('a');
    cardBody.setAttribute('href', '');  // TODO
    cardBody.classList.add('category-card-body');
    card.appendChild(cardBody);

    const iconContainer = document.createElement('div');
    iconContainer.classList.add('category-icon-container');
    cardBody.appendChild(iconContainer);
    
    const icon = document.createElement('i');
    // icon.classList.add('bi', 'bi-car-front-fill');  // TODO
    category.icon
        .split(' ')
        .forEach((iconClass) => {
            icon.classList.add(iconClass);
        });
    iconContainer.appendChild(icon);

    const cardTitle = document.createElement('h3');
    cardTitle.classList.add('category-card-title');
    cardTitle.textContent = category.name;
    cardBody.appendChild(cardTitle);

    const cardDescription = document.createElement('p');
    cardDescription.classList.add('category-card-description');
    cardDescription.textContent = `${category.announcementsCount} Annunci`;
    cardBody.appendChild(cardDescription);

    return col;
}

document.addEventListener('DOMContentLoaded', async () => {

    const categoriesRow = document.getElementById('categoriesRow');

    const response = await fetch('/server/api/categorie.json');
    console.log(response.status);

    const categories = await response.json();
    categories.forEach((category) => {
        const col = createColumnCard(category);
        categoriesRow.appendChild(col);
    });
});

/*
const categoriesRow = document.getElementById('categoriesRow');

fetch('/server/api/categorie.json')
    .then((response) => {

        // if(response.status == 200) {
        // }

        // promise chaining
        return response.json();
    })
    .then((categories) => {
        categories.forEach((category) => {
            const col = createColumnCard(category);
            categoriesRow.appendChild(col);
        });
    })
    .catch((error) => {
        // errore lato client
        console.log(error);
    });
*/
