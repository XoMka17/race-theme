$(document).ready(function(){
	$("nav").on("click","a", function (event) {
		var link  = $(this).attr('href');
		
		if(link.length > 1 && link[0] == "#") {
			event.preventDefault();
			var top = $(link).offset().top - $("header").height();
			
			$('body,html').animate({scrollTop: top}, 1000);
		}
	});
});