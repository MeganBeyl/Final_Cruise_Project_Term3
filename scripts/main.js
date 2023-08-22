// --------------------------------------------------------------------
// Trip Array
// --------------------------------------------------------------------

const arrTrips = [
    {
        name: "The Roman Expedition",
        price: 1250,
        
        caption: "Join us as we go to every shoreline that the Roman empire had once walked in only 6 months.",
        cruiseDate: "2023-09-21",
    },
    {
        name: "To the End of the World",
        price: 3140,
        
        caption: "Come with us and explore a few of the stops one could make while on a 4 month course with pirates as they traveled the blue blue oceans.",
        cruiseDate: "2023-09-21",
    },
    {
        name: "The Queen's Fair",
        price: 14450,
        
        caption: "Enjoy the smooth sailing through different cities and villas as they celebrate the beginning of spring, lasting only 2 months.",
        cruiseDate: "2023-09-21",
    },
    {
        name: "The Tropical Bird Finds",
        price: 2460,
        
        caption: "Come and help our crew and other passengers explore and educate ourselves as we travel through different bird migration spots for 3-4 months.",
        cruiseDate: "2023-09-21",
    },
    {
        name: "Ancient Civilizations",
        price: 5130,
        
        caption: "Come and enjoy a vastly intriguing an exciting trip to the different spots around the world, reveling in the miracles that we know as our history.",
        cruiseDate: "2023-09-21",
    },
    {
        name: "Bahama Mama's Retreat",
        price: 2310,
        
        caption: "Join us on a relaxing, yet fun filled, month long trip to the beautiful tropical islands around the Mediterranean.",
        cruiseDate: "2023-09-21",
    },
    {
        name: "Neptune's Deep Dive",
        price: 37220,
        
        caption: "Enjoy the great open seas, as well as all of the creatures in it with us as we scuba dive and explore our way through our 3 month trip.",
        cruiseDate: "2023-09-21",
    },
    {
        name: "The Annual Species Restoration",
        price: 1380,
        
        caption: "Come and help us as we crew and travelers alike, go on a 3 month trip to different marine biomes to study and conserve the animals and creatures that graces our beautiful waters.",
        cruiseDate: "2023-09-21",
    },
];

let appliedFilter = "";

// ----------------------------------------------------------------------------
//When the document loads
// ----------------------------------------------------------------------------
$(document).ready(function() {

    console.log("Hello");

    // ---------------------------------------------------------------
    // Trips 

    // Hide all description texts from trip list
    $("#informationText").hide();

    //------------------------------------------------------------------------
    // Browse

});

// ----------------------------------------------------------------------------
// Load all trips
// ----------------------------------------------------------------------------

function loadTrips(tripsShow){
    console.log(tripsShow);

    // Clear all elements in trips container

    $("#tripsContainer").empty();

    // Loop through trips

    for(let i = 0; i < tripsShow.length; i++){
        const trip = tripsShow[i];

        console.log(trip);

        //1: Select the trip container add the trip card to it

        // 2: Create a variable that contains the most recently added trip card

        // 3: Set the content for the current trip card from the trip array

        // 4: Hide the description text from the current card
    };
};

// ----------------------------------------------------------------------------
// When a trip group item is clicked
// ----------------------------------------------------------------------------
$(".card").click(function() {
    //Toggle amount & description text
    $("#amountText").toggle();
    $("#informationText").toggle();


});