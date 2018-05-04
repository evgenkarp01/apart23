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
})