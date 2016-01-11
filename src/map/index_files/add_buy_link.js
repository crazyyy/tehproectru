jQuery(document).ready(function(){
	iframe_ht();
	varFrameHeight = setInterval(iframe_ht, 1000);
	var checkResults = setInterval(check_results, 1000);
	//Добавление ссылки
	function check_results(){
		if ( jQuery("iframe#MAP").contents().find(".b-result-box:visible").length>0 ){
			//console.log('Add Link...');
			var kad_no = jQuery("iframe#MAP").contents().find('form[name="searchForm"]').find('input[name="query"]').val();
			var order_link = '<a class="order-link docs" target="_blank" href="http://kadastrmap.ru/zakazat-dokumenty-s-rosreestra/?kad_no='+ kad_no + '">Заказать документы из Росреестра по объекту</a><div class="clearfix"></div>';
			jQuery("iframe#MAP").contents().find(".b-result-box").find(".b-result-cost").append(order_link).css( 'padding-top', '18px');
			clearInterval(checkResults);
			
			//Добавление ссылки на снижение налогов
			if ( kad_summ() >= 100000000 ) {
				add_nalog_link();
			}
		}
	}
	//Обновление ссылки
	function update_link(){
		var kad_no = jQuery("iframe#MAP").contents().find('form[name="searchForm"]').find('input[name="query"]').val();
		var new_href = 'http://kadastrmap.ru/zakazat-dokumenty-s-rosreestra/?kad_no='+ kad_no;
		jQuery("iframe#MAP").contents().find(".b-result-box").find('.order-link.docs').attr('href', new_href);
		
		setTimeout( function(){
			if ( kad_summ() < 100000000 ) {
				jQuery("iframe#MAP").contents().find(".b-result-box").find(".order-link.nalog").css('display', 'none');
			} else {
				if (jQuery("iframe#MAP").contents().find(".b-result-box").find(".order-link.nalog").length = 0 ){ add_nalog_link();}
				jQuery("iframe#MAP").contents().find(".b-result-box").find(".order-link.nalog").css('display', 'inline-block');
			}
		}, 1500);
	}
	
	jQuery("iframe#MAP").contents().find('.b-search__submit').click( function(){ /*console.log('Update Link...');*/ update_link(); });
	//Выставление высоты фрейма
	function iframe_ht() {
		var body_ht = jQuery("iframe#MAP").contents().find('body').outerHeight();
		var frame_ht = jQuery("iframe#MAP").outerHeight();
		if(!( frame_ht == body_ht )){ jQuery("iframe#MAP").css('height', body_ht); }
	}
	jQuery(window).resize(function(){
		iframe_ht();
	});
	//Функция добавления ссылки на снижение налога
	function add_nalog_link(){
		var nalog_link = '<div style="text-align:center; padding:0 10px;">' +
			'<a class="order-link nalog" target="_blank" href="http://kadastr.nnewton.ru">Вы можете снизить платежи за вашу недвижимость. Нажмите и узнайте как!</a></div>';
		jQuery("iframe#MAP").contents().find(".b-result-box").find(".b-result-cost").after(nalog_link);
	}
	//Определение кадастровой стоимости
	function kad_summ(){
		var summ = jQuery("iframe#MAP").contents().find(".b-result-box").find(".b-result-cost").find(".ng-binding").text();
			summ = summ.split('.');
			summ = summ[0];
			summ = summ.replace(/\s+/g, '');
			console.log(summ);
			return summ;
	}

});