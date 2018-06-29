
$(".care").on("click", function(event) {
    event.preventDefault();
    var newButton = $("<button>");
    newButton.text($("#button-input").val());
    $(".buttons").prepend(newButton);
    $("input").empty();
    console.log($(".add"));
    console.log($("#button-input").val());
})


// I to activate the buttons created so that the API can grab the value of the buttons and GET gifs of the seaarchable term. 
// limit responses to 10
// make gifs appear paused
// make them play an dpause on click
// make input box reset when submit is pressed
// erase and refill gif box when a button is pressed






// $("button").on("click", function() {
//     var search = $(this).attr("value");
//     var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
//       search + "&api_key=dc6zaTOxFJmzC&limit=10";

//  $.ajax({
//       url: queryURL,
//       method: "GET"
//     })
      
//       .then(function(response) {
//         console.log(queryURL);
//         console.log(response);
//         var results = response.data;

//         for (var i = 0; i < results.length; i++) {
//           var gifDiv = $("<div>");
//           var p = $("<p>").text("Rating: " + results[i].rating);
//           var image = $("<img>")
//           image.attr("src", results[i].images.fixed_height.url);
//           gifDiv.append(p);
//           gifDiv.append(image);
//           $("#gifs").prepend(gifDiv);
//         }
//       });
//   });

//   $(".gif").on("click", function() {
   
//     var state = $(this).attr("data-state");
    
//     if (state === "still") {
//       $(this).attr("src", $(this).attr("data-animate"));
//       $(this).attr("data-state", "animate");
//     } else {
//       $(this).attr("src", $(this).attr("data-still"));
//       $(this).attr("data-state", "still");
//     }
//   });