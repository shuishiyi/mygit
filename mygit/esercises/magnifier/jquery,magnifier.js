(function ($) {
    $.fn.extend({
        magnifier: function () {
            this.each(function () {
                var that = this;
                $('.left', this).mousemove(function (evl) {
                    var x = evl.offsetX;
                    var y = evl.offsetY;
                    var float = $('.focus', this);

                    x = x - float.width() / 2
                    y = y - float.height() / 2



                    if (x < 0) {
                        x = 0;
                    }
                    if (y < 0) {
                        y = 0;
                    }

                    if (x > $('.left').width() - float.width()) {
                        x = $('.left').width() - float.width();
                    };
                    if (y > $('.left').height() - float.height()) {
                        y = $('.left').height() - float.height();
                    };

                    float.css({
                        left: x,
                        top: y
                    });

                    $('.right', that).css({
                        backgroundPosition: x * -4 + 'px ' + y * -4 + 'px'
                    })

                }).mouseover(function () {
                    $('.left.float,.right',that).show();
                }).mouseout(function () {
                    $('.left.float,.right',that).hide();
                })
            })
        }
    })
})(jQuery)