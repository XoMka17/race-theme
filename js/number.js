$(document).ready(function(){
	$(".js-number").each(function(indx){
		var target_block = $(this); 
		var blockStatus = true;
		
		var numb_finish = $(this).text();
			
		$(window).scroll(function() {
			var scrollEvent = ($(window).scrollTop() > (target_block.position().top - $(window).height()));
			
			if(scrollEvent && blockStatus) {
				blockStatus = false;
				
				$({numberValue: 0}).animate({numberValue: numb_finish}, {
					duration: 2500,
					easing: "linear",
					
					step: function(val) {
						target_block.html(Math.ceil(val));
					}
				});
			}
		});
	});	
});