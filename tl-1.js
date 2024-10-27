const hotels = [
    {
        name: " Overlooking Galata Tower",
        description: "A luxury hotel in Istanbul overlooking Galata Bay Tower at a special price.",
        image: "./img/53960144.jpg"
    },
    {
        name: "Overlooking a beautiful valley ",
        description: "Hotel in Trabzon overlooking a beautiful valley with a 33% discount",
        image: "./img/344A8835-1-324x300.jpg"
    },
    {
        name: "مطل على منضر جميل جدن  ",
        description: " An ideal hotel for lovers of adventures and outdoor activities. In Cappadocia at a special price.",
        image: "./img/images (1).jpg"
    }
];

const hotelCardsContainer = document.getElementById('hotel-cards');

hotels.forEach(hotel => {
    const card = `
        <div class="col-md-4">
            <div class="card h-8">
                <img src="${hotel.image}" class="card-img-top" alt="${hotel.name}">
                <div class="card-body">
                    <h5 class="card-title">${hotel.name}</h5>
                    <p class="card-text">${hotel.description}</p>
                    <button class="btn btn-danger">Book now</button>
                </div>
            </div>
        </div>
    `;
    hotelCardsContainer.innerHTML += card;
});



