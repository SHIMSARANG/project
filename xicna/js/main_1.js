$(function(){
	let wint=0;

	$(window).scroll(function(){
		wint=$(window).scrollTop();

		if(wint > 50){
			if($("header").hasClass("fixed") === false){
				$("header").addClass("fixed");
			}
			
		}
		else{
			if($("header").hasClass("fixed") === true){
				$("header").removeClass("fixed");
			}
		}
	});


	$("#tab").click(function(e){
		e.preventDefault();

		if($(this).hasClass("close") == false){
			$("body").addClass("fixed");
			$("#mobile").addClass("active");
			$(this).addClass("close");
			$(".dim").fadeIn(300);
			$("html").animate({scrollTop: 0}, 0);
		}
		else{
			$("body").removeClass("fixed");
			$("#mobile").removeClass("active");
			$(this).removeClass("close");
			$(".dim").fadeOut(300);
		}
	});
});