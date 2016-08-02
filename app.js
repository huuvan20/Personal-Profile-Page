// Navigation styles
$(".nav-a").click(function() {
	$(this).parent('li').parent('ul').children('li').children('a').removeClass('name');
	$(this).addClass('name');
})