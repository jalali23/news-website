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
	$('#topbutton').click(function(){
        $('body,html').animate({scrollTop:0},1000)
	})
	$(window).scroll(function(){
		if($(this).scrollTop() !=0){
			$('#topbutton').fadeIn();
		}
		else {
			$('#topbutton').fadeOut();
		}

	})
});
week= new Array("يكشنبه","دوشنبه","سه شنبه","چهارشنبه","پنج شنبه","جمعه","شنبه")
months = new Array("فروردين","ارديبهشت","خرداد","تير","مرداد","شهريور","مهر","آبان","آذر","دي","بهمن","اسفند");
a = new Date();
d= a.getDay();
day= a.getDate();
month = a.getMonth()+1;
year= a.getYear();
year = (year== 0)?2000:year;
(year<1000)? (year += 1900):true;
year -= ( (month < 3) || ((month == 3) && (day < 21)) )? 622:621;
switch (month) {
case 1: (day<21)? (month=10, day+=10):(month=11, day-=20); break;
case 2: (day<20)? (month=11, day+=11):(month=12, day-=19); break;
case 3: (day<21)? (month=12, day+=9):(month=1, day-=20); break;
case 4: (day<21)? (month=1, day+=11):(month=2, day-=20); break;
case 5:
case 6: (day<22)? (month-=3, day+=10):(month-=2, day-=21); break;
case 7:
case 8:
case 9: (day<23)? (month-=3, day+=9):(month-=2, day-=22); break;
case 10:(day<23)? (month=7, day+=8):(month=8, day-=22); break;
case 11:
case 12:(day<22)? (month-=3, day+=9):(month-=2, day-=21); break;
default: break;
}
document.write(" "+week[d]+" "+day+" "+months[month-1]+" "+ year);
