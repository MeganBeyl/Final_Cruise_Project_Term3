// --------------------------------------------------------------------
// Trips Array
// --------------------------------------------------------------------

const arrTrips = [
    {
        name: "Arctic Circle",
        fee: 1450,
        caption: "Join us on this trip to Antarctica and explore this constant winter wonderland!",
        tripTime: "long",
        tripFee: "expensive",
        image: "Antarctica.jpg",
    },
    {
        name: "To the End of the World",
        fee: 3140,
        caption: "Come with us and explore a few of the stops one could make while on a 4 month course with pirates as they traveled the blue blue oceans.",
        tripTime: "short",
        tripFee: "expensive",
        image: "Antarctica.jpg",
    },
    {
        name: "The Queen's Fair",
        fee: 14450,
        caption: "Enjoy the smooth sailing through different cities and villas as they celebrate the beginning of spring, lasting only 2 months.",
        tripTime: "long",
        tripFee: "cheap",
        image: "Antarctica.jpg",
    },
    {
        name: "The Tropical Bird Finds",
        fee: 2460,
        caption: "Come and help our crew and other passengers explore and educate ourselves as we travel through different bird migration spots for 3-4 months.",
        tripTime: "long",
        tripFee: "expensive",
        image: "Antarctica.jpg",
    },
    {
        name: "Ancient Civilizations",
        fee: 5130,
        caption: "Come and enjoy a vastly intriguing an exciting trip to the different spots around the world, reveling in the miracles that we know as our history.",
        tripTime: "short",
        tripFee: "cheap",
        image: "Antarctica.jpg",
    },
    {
        name: "Bahama Mama's Retreat",
        fee: 2310,
        caption: "Join us on a relaxing, yet fun filled, month long trip to the beautiful tropical islands around the Mediterranean.",
        tripTime: "short",
        tripFee: "expensive",
        image: "Antarctica.jpg",
    },
    {
        name: "Neptune's Deep Dive",
        fee: 37220,
        caption: "Enjoy the great open seas, as well as all of the creatures in it with us as we scuba dive and explore our way through our 3 month trip.",
        tripTime: "short",
        tripFee: "cheap",
        image: "Antarctica.jpg",
    },
    {
        name: "The Annual Species Restoration",
        fee: 1380,
        caption: "Come and help us as we crew and travelers alike, go on a 5 month trip to different marine biomes to study and conserve the animals and creatures that graces our beautiful waters.",
        tripTime: "long",
        tripFee: "expensive",
        image: "Antarctica.jpg",
    },
    {
        name: "The Annual Species Restoration",
        fee: 1380,
        caption: "Come and help us as we crew and travelers alike, go on a 5 month trip to different marine biomes to study and conserve the animals and creatures that graces our beautiful waters.",
        tripTime: "short",
        tripFee: "expensive",
        image: "Antarctica.jpg",
    },
    {
        name: "The Annual Species Restoration",
        fee: 1380,
        caption: "Come and help us as we crew and travelers alike, go on a 5 month trip to different marine biomes to study and conserve the animals and creatures that graces our beautiful waters.",
        tripTime: "long",
        tripFee: "cheap",
        image: "Antarctica.jpg",
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


   loadTrips(arrTrips);

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
        $(currentChild).find("#feeText").text(trip.fee);
        $(currentChild).find("#informationText").text(trip.caption);
        $(currentChild).find(".card-img-top").attr('src', 'assets/' + trip.image);

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


