function generateAnnouncementCard(announcement) {

    return `
    <div class="card">
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
                <span>27/03/2023</span>
            </div>
        </div>
    </div>`;
}

function populateAnnouncementsRow(announcements) {

    const announcementsRow = document.getElementById('announcementsRow');

    announcements.forEach((announcement) => {
        const col = document.createElement('div');
        col.classList.add('col-12', 'col-md-6', 'col-xl-4');
        col.innerHTML = generateAnnouncementCard(announcement); // FA SCHIFO... DA SISTEMARE

        announcementsRow.appendChild(col);
    });
}

async function readAllAnnouncements() {
    const response = await fetch('/server/api/annunci.json');
    console.log(response.status);

    const announcements = await response.json();
    return announcements;
}

document.addEventListener('DOMContentLoaded', async () => {
    const announcements = await readAllAnnouncements();
    populateAnnouncementsRow(announcements);
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
