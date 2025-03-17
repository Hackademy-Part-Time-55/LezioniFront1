function populateCategorySelect(announcements, parentSelect) {
    
    const categoriesSet = new Set();

    announcements.forEach((announcement) => {
        categoriesSet.add(announcement.category);
    });

    categoriesSet.forEach((category) => {
        const categoryOption = document.createElement('option');
        categoryOption.setAttribute('value', category);
        categoryOption.textContent = category;

        parentSelect.appendChild(categoryOption);
    });
}

function generateAnnouncementCard(announcement) {

    const date = new Date(announcement.createdAt);

    return `
    <a class="card text-decoration-none" href="/announcement.html?id=${announcement.id}">
        <div class="position-relative">
            <img src="https://picsum.photos/id/237/600/450" class="card-img-top" alt="...">
            <span class="position-absolute top-0 end-0 badge px-4 py-2 ${announcement.type.toLowerCase() == 'sell' ? 'bg-danger' : 'bg-primary'} text-uppercase">${announcement.type}</span>
        </div>
        <div class="card-body p-4">
            <p class="card-subtitle mb-1 fs-5 fw-semibold text-primary">€${announcement.price}</p>
            <h5 class="card-title mb-4 display-5">${announcement.name}</h5>
            <p class="card-text text-secondary">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <div class="card-footer d-flex justify-content-around p-4 bg-white text-primary">
            <div>
                <i class="bi bi-heart-fill me-1"></i>
                <span>Like</span>
            </div>
            <div>
                <i class="bi bi-tag-fill me-1"></i>
                <span>${announcement.category}</span>
            </div>
            <div>
                <i class="bi bi-calendar-fill me-1"></i>
                <span>${date.toLocaleDateString()}</span>
            </div>
        </div>
    </a>`;
}

function populateAnnouncementsRow(announcements) {

    const announcementsRow = document.getElementById('announcementsRow');

    // clear announcementsRow
    // announcementsRow.innerHTML = '';
    while(announcementsRow.hasChildNodes()) {
        announcementsRow.removeChild(announcementsRow.firstChild);
    }

    announcements.forEach((announcement) => {
        const col = document.createElement('div');
        col.classList.add('col-12', 'col-md-6', 'col-xl-4');
        col.innerHTML = generateAnnouncementCard(announcement); // FA SCHIFO... DA SISTEMARE

        announcementsRow.appendChild(col);
    });
}

function filteringAndSorting(announcements, options) {
    
    const announcementsFiltered = announcements.filter((announcement) => {

        let isAnnouncementRequired = true;

        if(options.searched) {
            isAnnouncementRequired = announcement.name.toLowerCase().includes(options.searched.toLowerCase())
        }

        if(isAnnouncementRequired && options.category) {
            isAnnouncementRequired = announcement.category == options.category;
        }

        if(isAnnouncementRequired && options.minPrice) {
            isAnnouncementRequired = Number(options.minPrice) < Number(announcement.price);
        }

        if(isAnnouncementRequired && options.maxPrice) {
            isAnnouncementRequired = Number(announcement.price) < Number(options.maxPrice);
        }
        
        return isAnnouncementRequired;
    });

    switch(options.sortBy) {
        case 'ascByDate':
            announcementsFiltered.sort((leftAnnouncement, rightAnnouncement) => {
                return leftAnnouncement.createdAt - rightAnnouncement.createdAt;
            });
            break;
        case 'descByDate':
            announcementsFiltered.sort((leftAnnouncement, rightAnnouncement) => {
                return rightAnnouncement.createdAt - leftAnnouncement.createdAt;
            });
            break;
        case 'ascByPrice':
            announcementsFiltered.sort((leftAnnouncement, rightAnnouncement) => {
                return Number(leftAnnouncement.price) - Number(rightAnnouncement.price);
            });
            break;
        case 'descByPrice':
            announcementsFiltered.sort((leftAnnouncement, rightAnnouncement) => {
                return Number(rightAnnouncement.price) - Number(leftAnnouncement.price);
            });
            break;
        case 'ascByAlpha':
            announcementsFiltered.sort((leftAnnouncement, rightAnnouncement) => {
                return leftAnnouncement.name.localeCompare(rightAnnouncement.name);
            });
            break;
        case 'descByAlpha':
            announcementsFiltered.sort((leftAnnouncement, rightAnnouncement) => {
                return rightAnnouncement.name.localeCompare(leftAnnouncement.name);
            });
            break;
    }
    
    return announcementsFiltered;
}

async function readAllAnnouncements() {
    const response = await fetch('/server/api/annunci.json');
    console.log(response.status);

    const announcements = await response.json();
    return announcements;
}

document.addEventListener('DOMContentLoaded', async () => {

    const searchInput = document.getElementById('searchInput');
    const categorySelect = document.getElementById('categorySelect');
    const minPriceInput = document.getElementById('minPriceInput');
    const maxPriceInput = document.getElementById('maxPriceInput');
    const sortSelect = document.getElementById('sortSelect');

    const announcements = await readAllAnnouncements();
    populateCategorySelect(announcements, categorySelect);
    populateAnnouncementsRow(announcements);
    
    const searchAndSortForm = document.getElementById('searchAndSortForm');
    searchAndSortForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const options = {
            searched: searchInput.value,
            category: categorySelect.value,
            minPrice: minPriceInput.value,
            maxPrice: maxPriceInput.value,
            sortBy: sortSelect.value
        };
        
        const announcementsFiltered = filteringAndSorting(announcements, options);

        populateAnnouncementsRow(announcementsFiltered);
    });
});





/*
<div class="col-12 col-md-6 col-xl-4">
    <div class="card">
        <div class="position-relative">
            <img src="https://picsum.photos/id/237/600/450" class="card-img-top" alt="...">
            <span class="position-absolute top-0 end-0 badge px-4 py-2 bg-danger text-uppercase">Sell</span>
        </div>
        <div class="card-body p-4">
            <p class="card-subtitle mb-1 fs-5 fw-semibold text-primary">€120.12</p>
            <h5 class="card-title mb-4 display-5">Card title</h5>
            <p class="card-text text-secondary">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <div class="card-footer d-flex justify-content-around p-4 bg-white text-primary">
            <div>
                <i class="bi bi-heart-fill me-1"></i>
                <span>Like</span>
            </div>
            <div>
                <i class="bi bi-tag-fill me-1"></i>
                <span>Elettronica</span>
            </div>
            <div>
                <i class="bi bi-calendar-fill me-1"></i>
                <span>27/03/2023</span>
            </div>
        </div>
    </div>
</div>
*/
