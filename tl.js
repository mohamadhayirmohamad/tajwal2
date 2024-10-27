const hotels = [
    {
        name: " مطل على برج غلطة",
        description: "فندق فاخر  في اسطنبول مطل على برج غلطة بي سعر مميز.",
        image: "./img/53960144.jpg"
    },
    {
        name: "مطل على وادي جميل ",
        description: "فندق في طرابزون مطل على وادي جميل جدن بي خصم 33%",
        image: "./img/344A8835-1-324x300.jpg"
    },
    {
        name: "مطل على منضر جميل جدن  ",
        description: " فندق مثالي لمحبي المغامرات والأنشطة الخارجية.في كبادوكيا بي سعر مميز",
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
                    <button class="btn btn-danger">احجز الآن</button>
                </div>
            </div>
        </div>
    `;
    hotelCardsContainer.innerHTML += card;
});








