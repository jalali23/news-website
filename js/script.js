$(document).ready(function(){
	$('.search-button').click(function(){
		if($(this).attr('data-open')=='open'){
			$('.search-box').slideDown('normal');
			$(this).find('i').removeClass('fa-search');
			$(this).find('i').addClass('fa-times');
			$(this).attr('data-open','close');	
		} else {
			$('.search-box').slideUp('normal');
			$(this).find('i').removeClass('fa-times');
			$(this).find('i').addClass('fa-search');
			$(this).attr('data-open','open');
		}

	});
		$('.responsive-menu-icon').click(function(){
		var responsiveMenu = $('.responsive-menu');
		responsiveMenu.show();
		responsiveMenu.animate({
			right: 0
		},400);
		$('body').append('<div class="back-container"></div>');
		$('.back-container').click(function(){
			var responsiveMenu = $('.responsive-menu');
			responsiveMenu.animate({
				right: '-220px'
			},400,function(){
				responsiveMenu.hide();
			});
			$(this).remove();
		});
	});
	$('#new_Video').click(function(){
		$('.responsive-menu').hide();
		$('.back-container').hide();
	});
	$('#new_Archive').click(function(){
		$('.responsive-menu').hide();
		$('.back-container').hide();
	});
		$('.card-body').click(function(){
		if($(this).attr('data-open') == 'open'){
			$('.card-footer').slideUp();
			$(this).next().slideDown();
			$('.card-body').attr('data-open','open');
			$(this).attr('data-open','close');
		} else {
			$(this).next().slideUp();
			$('.card-body').attr('data-open','open');
		}
	});
	$('.tlp').hover(function(){
		var text = $(this).find('span');
		var tooltip = $(this).attr('title');
		if($(this).hasClass('long')){
			text.css('top','-80px');
		} else if($(this).hasClass('normal')){
			text.css('top','-60px');
		} else {
			text.css('top','-35px');
		}
		text.fadeIn('fast').html(tooltip);
		$(this).removeAttr('title');
	},function(){
		var text = $(this).find('span');
		text.fadeOut(50);
	});
});