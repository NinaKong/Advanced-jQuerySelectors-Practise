/*Nina Kong*/
$(document).ready(function(){
	var windowHeight = $( window ).height();
	$("#Content").height(windowHeight);

    $("h1 + div").css("padding", "5em"); 

    $("div a").css("font-size", "2.5em");

    $("div a.github").css("color", "#b26c34"); 

    $(".github ~ a").css("color", "#eba96d"); 

});
