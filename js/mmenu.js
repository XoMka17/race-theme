$(document).ready(function(){
	var menu_opened = false;
	var menu = $('.header__nav');
	
	$(".j-menu").on("click", function (event) {
		
		if(!menu_opened) {
			menu_opened = true;
			menu.addClass('is-opened');
			$("body").css("overflow","hidden");
			$(".header__nav.is-opened .header__nav-container").css("top", $("header").height() + "px");
			$(".header__container").css("background", "black");
		}
		else {
			menu_opened = false;
			menu.removeClass('is-opened');
			$("body").css("overflow","auto");
		}
	});
	
	$(".j-menu-close").on("click", function (event) {
			menu_opened = false;
			menu.removeClass('is-opened');
			$("body").css("overflow","auto");
	});
});