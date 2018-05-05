$(document).ready(function(){

	$('.sldr1').slick({
		nextArrow: '.sldr1next',
		prevArrow: '.sldr1prev'
	});
	$('.sldr2').slick({
		nextArrow: '.sldr2next',
		prevArrow: '.sldr2prev'
	});
	$('.sldr3').slick({
		nextArrow: '.sldr3next',
		prevArrow: '.sldr3prev'
	});
	$('.sldr1 .slide').css('display', 'block');
	$('.sldr2 .slide').css('display', 'block');
	$('.sldr3 .rev').css('display', 'block');
    
    
    $("a.ancLinks").click(function () { 
			var elementClick = $(this).attr("href");
			var destination = $(elementClick).offset().top;
			$('html,body').animate( { scrollTop: destination }, 400 );
			return false;
		});
    
    $(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('.scrollup, .callme').fadeIn();
			}
			else {
				$('.scrollup, .callme').fadeOut();
			}
		});

		$('.scrollup').click(function () {
			$("html, body").animate({
				scrollTop: 0
			}, 600);
			return false;
		});
})