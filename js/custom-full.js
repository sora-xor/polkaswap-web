(function ($) {
  $.fn.extend({
    rotaterator: function (options) {

      var defaults = {
        fadeSpeed: 500,
        pauseSpeed: 2500,
        child: null
      };

      var options = $.extend(defaults, options);

      return this.each(function () {
        var o = options;
        var obj = $(this);
        var items = $(obj.children(), obj);
        items.each(function () {
          $(this).hide();
        })
        if (!o.child) {
          var next = $(obj).children(':first');
        } else {
          var next = o.child;
        }
        $(next).fadeIn(o.fadeSpeed, function () {
          $(next).delay(o.pauseSpeed).fadeOut(o.fadeSpeed, function () {
            var next = $(this).next();
            if (next.length == 0) {
              next = $(obj).children(':first');
            }
            $(obj).rotaterator({
              child: next,
              fadeSpeed: o.fadeSpeed,
              pauseSpeed: o.pauseSpeed
            });
          })
        });
      });
    }
  });
})(jQuery);

$(document).ready(function () {
  $('.rotate').rotaterator({
    fadeSpeed: 500,
    pauseSpeed: 2500
  });
	
	window.cookieconsent.initialise({
		container: document.getElementById("cookieconsent"),
		content: {
			header: 'Cookies used on the website',
			message: 'We use cookies to provide the best site experience.',
			dismiss: 'Accept and don\'t show again',
			allow: 'Allow cookies',
			deny: 'Decline',
			link: 'Learn more',
			href: '/privacy',
			close: '&#x274c;',
			policy: 'Privacy Policy',
			target: '_blank',
		},
		palette: {
			 popup: {background: '#000000', text: '#fff', link: '#ff009a'},
			 button: {background: '#fff', border: '##fff', text: '#000'},
			 highlight: {background: '#ff009a', border: '#ff009a', text: '#fff'},
		},
		revokable: false,
		onStatusChange: function(status) {
			console.log(this.hasConsented() ?
			'enable cookies' : 'disable cookies');
		},
		"theme": "edgeless",
		"position": "bottom",
	});
	
});
