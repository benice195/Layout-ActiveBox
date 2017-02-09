$(function(move) {
    var carouselList = $("#carousel ul");
    setInterval(changeSlide, 4500);
    
    function changeSlide() {
        carouselList.animate({'marginLeft': -596}, 1500, moveFirstSlide);
    };
    
    function moveFirstSlide() { 
        var firstItem = carouselList.find("li:first");
        var lastItem = carouselList.find("li:last");
        lastItem.after(firstItem);
        carouselList.css({marginLeft:0});
    };


});
$(document).ready(function() { 
 
	$('a[href^="#"]').on('click', function(event) {
	
		var target = $( $(this).attr('href') );
	
		if( target.length ) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: target.offset().top
			}, 1000);
		}
	});
 
});