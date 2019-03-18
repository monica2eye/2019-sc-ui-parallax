$(window).scroll(function(){
	var scTop = $(window, document, "html", "body").scrollTop();
	if(scTop > 150) {
		if(!$(".navs").hasClass("navs-shadow")) {
			$(".navs").stop().animate({"top": "-60px"}, 300, function(){
				$(this).addClass("navs-shadow");
				$(this).stop().animate({"top":0}, 300);
			});
		}
	}
	else {
		$(".navs").removeClass("navs-shadow");
	}
});