function populateAnnouncementRow(announcement) {
    const announcementRow = document.getElementById('announcementRow');

    const img = document.createElement('img');
    img.setAttribute('src', 'https://picsum.photos/id/237/600/450');
    img.className = 'col-12 col-md-6';
    announcementRow.appendChild(img);

    const infoColumn = document.createElement('div');
    infoColumn.className = 'col-12 col-md-6 d-flex align-items-center p-4 bg-white';
    infoColumn.innerHTML = `
    <div>
        <div class="p-4">
            <p class="mb-1 fs-5 fw-semibold text-primary">€${announcement.price}</p>
            <h5 class="mb-4 display-5">${announcement.name}</h5>
            <p class="text-secondary">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <div class="d-flex justify-content-around p-4 text-primary">
            <div class="${announcement.type.toLowerCase() == 'sell' ? 'text-danger' : 'text-primary'} text-uppercase">
                <i class="bi bi-tag-fill me-1"></i>
                <span>${announcement.type}</span>
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
    announcementRow.appendChild(infoColumn);
}

async function readAllAnnouncements() {
    const response = await fetch('/server/api/annunci.json');
    console.log(response.status);

    const announcements = await response.json();
    return announcements;
}

document.addEventListener('DOMContentLoaded', async () => {

    const query = new URLSearchParams(window.location.search);
    const idSearched = query.get('id');

    const announcements = await readAllAnnouncements();
    const announcementFound = announcements.find((announcement) => {
        return announcement.id == idSearched;
    });

    populateAnnouncementRow(announcementFound);
});



