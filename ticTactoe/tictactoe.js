$(function() {

var player = 1;

$(".square").on("click" , function(ev) {
  
    var selectsquare = $(this);

    if(selectsquare.hasClass ("x") || selectsquare.hasClass("o")) {
       alert("this spot is taken");
    }else {
    if (player === 1) {
        selectsquare.addClass("x"); 
        player = 2;
    } else{
        selectsquare.addClass("o");
        player = 1;
}
    }
});

});