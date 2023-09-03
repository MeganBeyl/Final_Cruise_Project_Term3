// --------------------------------------------------------------------
// Trips Array
// --------------------------------------------------------------------

const arrTrips = [
    {
        name: "Arctic Circle",
        price: 1450,
        code: "#A2561",
        caption: "Join us on this trip to Antarctica and explore this constant winter wonderland!",
        tripTime: "long",
        tripFee: "expensive",
        destination: "single",
        dateOfCruise: "05/09/2023",
        image: "Antarctica.jpg",
    },
    {
        name: "To the End of the World",
        price: 3140,
        code: "#F3827",
        caption: "Come with us and explore a few of the stops one could find hidden amongst the bigger gems of the world.",
        tripTime: "short",
        tripFee: "expensive",
        destination: "single",
        dateOfCruise: "11/08/2023",
        image: "Brixham.jpg",
    },
    {
        name: "The Queen's Fair",
        price: 1650,
        code: "#H7493",
        caption: "Enjoy the smooth sailing through different cities and villas as they celebrate the beginning of spring, lasting only 2 months.",
        tripTime: "long",
        tripFee: "cheap",
        destination: "single",
        originTrip: "origin",
        dateOfCruise: "15/09/2023",
        image: "British Isles.jpg",
    },
    {
        name: "The Tropical Bird Finds",
        price: 2460,
        code: "#G6157",
        caption: "Come and help our crew and other passengers explore and educate ourselves as we travel through different bird migration spots for 3-4 months.",
        tripTime: "long",
        tripFee: "expensive",
        destination: "single",
        dateOfCruise: "18/11/2023",
        image: "Galapagos Islands 2.png",
    },
    {
        name: "Europe Towns",
        price: 5130,
        code: "#F3289",
        caption: "Come and enjoy a vastly intriguing an exciting trip to the different spots around the world, reveling in the miracles that we know as our history.",
        tripTime: "short",
        tripFee: "cheap",
        destination: "single",
        dateOfCruise: "25/10/2023",
        image: "Europe 1.jpg",
    },
    {
        name: "Venice Retreat",
        price: 2310,
        code: "#C0673",
        caption: "Join us on a relaxing, yet fun filled trip to the beautiful tropical islands around the Mediterranean.",
        tripTime: "short",
        tripFee: "expensive",
        destination: "single",
        dateOfCruise: "15/09/2023",
        image: "Venice 2.jpg",
    },
    {
        name: "Neptune's Deep Dive",
        price: 3720,
        code: "#E6794",
        caption: "Enjoy the great open seas, as well as all of the creatures in it with us as we scuba dive and explore our way through our short trip.",
        tripTime: "short",
        tripFee: "cheap",
        destination: "single",
        originTrip: "origin",
        dateOfCruise: "04/11/2023",
        image: "Caribbean 1.jpg",
    },
    {
        name: "Croatian Trip",
        price: 1380,
        code: "#A4318",
        caption: "Join our students as they embark on their first trip to the small villages of Croatia to study the native wild life on their way there.",
        tripTime: "long",
        tripFee: "expensive",
        destination: "single",
        dateOfCruise: "08/06/2023",
        image: "Hvar - Croatia.jpg",
    },
    {
        name: "The Annual Species Restoration",
        price: 2480,
        code: "#G3819",
        caption: "Enjoy the open blue skies and the beautiful blue oceans coasting the European countryside.",
        tripTime: "short",
        tripFee: "expensive",
        destination: "single",
        dateOfCruise: "07/09/2023",
        image: "Norway 1.jpg",
    },
    {
        name: "The British Isles",
        price: 1720,
        code: "#F5781",
        caption: "Come and help us as we crew and travelers alike, go on a 2 month trip to different marine biomes to study and conserve the animals and creatures that grace our beautiful waters.",
        tripTime: "long",
        tripFee: "cheap",
        destination: "single",
        originTrip: "origin",
        dateOfCruise: "07/12/2023",
        image: "British Isles 2.jpg",
    },
];

let appliedChosenFilter = "";
let appliedChosenSort = "high to low";

// ----------------------------------------------------------------------------
//When the document loads
// ----------------------------------------------------------------------------
$(document).ready(function() {

    console.log("Hello");

    // ---------------------------------------------------------------
    // Trips 

    // Hide all description texts from trip list
    $("#informationText").hide();


   filterSortTrips(arrTrips);

});

// ----------------------------------------------------------------------------
// Load all trips
// ----------------------------------------------------------------------------

function loadTrips(tripsToShow) {

    console.log(tripsToShow);

    // Clear all elements in trips container
    $("#tripsContainer").empty();

    // Loop through trips

    for (let i = 0; i < tripsToShow.length; i++) {
        const trip = tripsToShow[i];

        console.log(trip);

        // 1: Select the trips container and add the current array trip to it
        $("#tripsContainer").append($("#tripCardTemplate").html());

        // 2. Create a variable that contains the most recently added trip card
        let currentChild = $("#tripsContainer").children().eq(i);

        // 3. Set the content for the current trip card from the trip array
        $(currentChild).find("#tripText").text(trip.name);
        $(currentChild).find("#amountText").text(trip.price);
        $(currentChild).find("#informationText").text(trip.caption);
        $(currentChild).find("#dateCruise").text(trip.dateOfCruise);
        $(currentChild).find(".card-img-top").attr('src', '../assets/' + trip.image);

        // 4. Hide the information text from the current card
        $(currentChild).find("#informationText").hide();
        
    };
}

// ----------------------------------------------------------------------------
// When a filter or sort is clicked
// ----------------------------------------------------------------------------

$("input[name ='radioFilter']").click(function() {
    appliedChosenFilter = $(this).attr('value');

    console.log(appliedChosenFilter);
    filterSortTrips();
});

$("input[name ='radioSort']").click(function() {
    appliedChosenSort = $(this).attr('value');

    console.log(appliedChosenSort);
    filterSortTrips();
});

function filterSortTrips(){

    let filteredSortedArrTrips = [];

    // Filter trips

    if(appliedChosenFilter){
        filteredSortedArrTrips = arrTrips.filter(trip => trip.tripTime == appliedChosenFilter);
    } else {
        filteredSortedArrTrips = arrTrips;
    };

    // Sort Trips

    if(appliedChosenSort == "high to low"){

        // Sort the trips from highest to lowest price
        filteredSortedArrTrips = filteredSortedArrTrips.sort((a,b) => {
            return b.price - a.price;
        });
    } else if(appliedChosenSort == "cruiseDate"){

        //sort trips from newest to oldest
        filteredSortedArrTrips = filteredSortedArrTrips.sort((a,b) => {
        let da = new Date(a.cruiseDate);
        let db = new Date(b.cruiseDate);

        return db - da;
        });
    }

    loadTrips(filteredSortedArrTrips);
};

// ----------------------------------------------------------------------------
// When a trip group item is clicked
// ----------------------------------------------------------------------------
$("#tripsContainer").on('click', '.card', function() {

    //Toggle amount & description text
    $(this).find("#amountText").toggle();
    $(this).find("#informationText").toggle();

    // Resize the trip image to fit additional content
    $(this).find(".card-img-top").toggleClass("small");
});

$(document).ready(function(){

    $.ajax({
        type:"GET",
        url:"https://api.openweathermap.org/data/2.5/weather?q=Centurion&appid=7dd63d61e362d45b624016eac378b633",
        success: function(data){

            weatherData = data;

            console.log(data);

        }
    }) .done(function(){
        $("#weatherData").html(Math.round(weatherData.main.temp -273) + "ºC");
    })
})

// ----------------------------------------------------------------------------
// Add Booking to checkout

bookingDisplay = () => {
    let area = document.getElementById("bookOrder");
    let total = document.getElementById("overallAmount");

    area.innerHTML = "";

    let overallAmount = 0;

    for (let i = 0; i < bookOrder.length; i++){
        let name = bookOrder[i].tripName;
        let code = bookOrder[i].tripCode;
        let caption = bookOrder[i].tripCaption;
        let date = bookOrder[i].tripDate;
        let price = bookOrder[i].tripPrice;

        overallAmount += price;

        area.innerHTML +=`
        
            <a href="#" class="list-group-item list-group-item-action">
                    <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">${name}</h5>
                        <small class="text-body-secondary">${date}</small>
                    </div>
                    <p class="mb-1">${caption}</p>
                    <p class="mb-1">${code}</p>
                    <small class="text-body-secondary">Fee: R${price}</small>
            </a>`
        
        total.innerHTML = "R" + price + ".00";
    };
    console.log(total.innerHTML);
};

// Add the booking order to the purchase page

checkOut = () => {
    let data =JSON.stringify(bookOrder);
    localStorage.setItem('bookOrder', data);
    window.location.href = '../pages/purchase.html';
}
