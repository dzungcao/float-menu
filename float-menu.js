$(function(){
	var menu = $('<ul></ul>');

	for (var i = 0; i <= $('.float-section').length - 1; i++) {
		var li = '<li><div class="float-element" title="'+$($('.float-section')[i]).attr('data-caption')+'"></div></li>';
		menu = menu.append(li);
	};

	$("body").append('<div class="float-menu"><ul>' + $(menu).html() + '</ul></div>');

	$(window).scroll(function(){
		var top = $(this).scrollTop();
		var index = 0;
		for (var i = 0; i <= $('.float-section').length - 1; i++) {
			var t = $($('.float-section')[i]).offset().top;
			if(t-top >= 0){
				$('.float-menu .float-element').removeClass('active');
				$($('.float-menu ul li')[i]).find('.float-element').addClass('active');
				break;
			}
		};
	});
})