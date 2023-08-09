//When the document loads
$(document).ready(function(){
    console.log("Hello");

    // ---------------------------------------------------------------
    // Trips 

    // Hide all description texts from trip list
    $("#informationText").hide();
});

// When a trip group item is clicked
$(".card").click(function() {
    //Toggle amount & description text
    $("#amountText").toggle();
    $("#informationText").toggle();


});