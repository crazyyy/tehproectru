jQuery(document).ready(function(){
	//Моб. меню
	jQuery('.menu-btn').click(function(e){
		jQuery('.Menu').toggleClass('show');
		e.stopPropagation();
	});
	jQuery(document).click(function(){
		jQuery('.Menu').removeClass('show');	
	});
});

(function($){
    var _ua = navigator.userAgent;

    window.browser = {
        version: (_ua.match( /.+(?:me|ox|on|rv|it|era|ie)[\/: ]([\d.]+)/ ) || [0,'0'])[1],
        opera: /opera/i.test(_ua),
        msie: (/msie/i.test(_ua) && !/opera/i.test(_ua)),
        msie6: (/msie 6/i.test(_ua) && !/opera/i.test(_ua)),
        msie7: (/msie 7/i.test(_ua) && !/opera/i.test(_ua)),
        msie8: (/msie 8/i.test(_ua) && !/opera/i.test(_ua)),
        msie9: (/msie 9/i.test(_ua) && !/opera/i.test(_ua)),
        mozilla: /firefox/i.test(_ua),
        chrome: /chrome/i.test(_ua),
        safari: (!(/chrome/i.test(_ua)) && /webkit|safari|khtml/i.test(_ua)),
        iphone: /iphone/i.test(_ua),
        ipod: /ipod/i.test(_ua),
        iphone4: /iphone.*OS 4/i.test(_ua),
        ipod4: /ipod.*OS 4/i.test(_ua),
        ipad: /ipad/i.test(_ua),
        android: /android/i.test(_ua),
        bada: /bada/i.test(_ua),
        mobile: /iphone|ipod|ipad|opera mini|opera mobi|iemobile|mobile/i.test(_ua),
        msie_mobile: /iemobile/i.test(_ua),
        safari_mobile: /iphone|ipod|ipad/i.test(_ua),
        opera_mobile: /opera mini|opera mobi/i.test(_ua),
        opera_mini: /opera mini/i.test(_ua),
        mac: /mac/i.test(_ua)
    };


    if (window.Modernizr && !Modernizr.input.placeholder){
        $('[placeholder]')
            .focus(function(){
                var input = $(this);
                if (input.val() == input.attr('placeholder')) {
                    input.val('');
                    input.removeClass('placeholder');
                }
            })
            .blur(function() {
                var input = $(this);
                if (input.val() == '' || input.val() == input.attr('placeholder')) {
                    input.addClass('placeholder');
                    input.val(input.attr('placeholder'));
                }
            })
            .blur().parents('form').submit(function() {
                $(this).find('[placeholder]').each(function() {
                    var input = $(this);
                    if (input.val() == input.attr('placeholder')) {
                        input.val('');
                    }
                });
            });
    }

    window.INTEGER_REGEXP = /^\-?\d*$/;
    window.EMAIL_REGEXP = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

})(jQuery);

Number.prototype.formatMoney = function(c, d, t){
    var n = this,
        c = isNaN(c = Math.abs(c)) ? 2 : c,
        d = d == undefined ? "." : d,
        t = t == undefined ? "," : t,
        s = n < 0 ? "-" : "",
        i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "",
        j;
    j = (j = i.length) > 3 ? j % 3 : 0;
    return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
};
