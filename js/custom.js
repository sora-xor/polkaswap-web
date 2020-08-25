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
});
