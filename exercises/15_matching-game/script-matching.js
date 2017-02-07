$(document.ready)(function(){

// var pear = "";

// var pear = ["Bartlett", "Bosc", "Comice"];

// var country = ["Northwest USA", "Western Europe", "Eastern Europe"];

// for (var i = 0; i < pear.length; i++) {
//  console.log(pear[i]);
 
//  for (var j = 0; j < country.length; j++){
//          console.log(country[j]);
   
//    if (myPlaces[i] === pear[j]) {
//      console.log('Match: ' + pear[i]);
//    }
//  }
// }
// }

$(".left div").click( function() { 
                  $(".left div").css("color", "blue");
                  $(this).css("background-color", "#d9ffb3");
                });

$(".right div").click( function() { 
                  $(".right div").css("color", "red");
                  $(this).css("background-color", "#d9ffb3");
                });


});