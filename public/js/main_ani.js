//$(this).css({"background-color":"#fff", "box-shadow":"0 0 10px rgba(0,0,0,0.5)"});

$(".main_tit").css({"opacity": 1, "transform":"translate(-50%, -50%)"});
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
	var pos = [];
	$(".section").each(function(i){
		pos[i] = $(this).offset().top - 300;
	});
	if(scTop >= pos[1] && scTop < pos[2]) {
		$(".about > div").css({"transform":"translateX(0)", "opacity":1});
	}
	else if(scTop >= pos[2] && scTop < pos[3]) {
		$(".skill_bar").each(function(){
			var wid = $(this).html();
			$(this).css({"width":wid});
		});
	}
	else if(scTop >= pos[3] && scTop < pos[4]) {
		$(".work").each(function(){
			//var i = $(this).index();
			//$(this).css({"transition-delay": (i * 0.2)+"s"});
			var n = Math.random() * 1.5;
			$(this).css({"transition-delay": n+"s"});
			$(this).css({"opacity": 1, "transform":"scale(1)"});
		});
	}
	else if(scTop >= pos[4]) {
		$(".loc_pic, .loc_cont").css({"opacity": 1, "transform":"translateY(0)"});
	}
});

$("#bt_top").click(function(){
	$("html, body").stop().animate({"scrollTop": 0}, 500);
});

//$(".navs > .hamburger")
$(".navs").children(".hamburger").click(function(){
	$(".nav_sub").toggle();
});

/***** Animation *****/
