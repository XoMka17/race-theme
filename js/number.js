$(document).ready(function(){
	$(".js-number").each(function(indx){
		var target_block = $(this); 
		var blockStatus = true;
		
		var numb_finish = $(this).text();
			
		$(window).scroll(function() {			
			if(isScrolledIntoView(target_block) && blockStatus) {
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
	
	function isScrolledIntoView(elem)
	{
			var docViewTop = $(window).scrollTop();
			var docViewBottom = docViewTop + $(window).height();

			var elemTop = $(elem).offset().top;
			var elemBottom = elemTop + $(elem).height();

			return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
	}
});