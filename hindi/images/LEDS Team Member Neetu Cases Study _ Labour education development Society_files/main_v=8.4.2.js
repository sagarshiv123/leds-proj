"use strict";
(function($) {
    $(".single-item").slick(), $(".multiple-items").slick({
        infinite: !0,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [{
            breakpoint: 1025,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: !0,
                dots: !0
            }
        }, {
            breakpoint: 769,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, 
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    }), $(".multiple-items2").slick({
        infinite: !0,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: !0,
                dots: !0
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    }), $(".multiple-items-1").slick({
        infinite: !0,
        slidesToShow: 1,
        slidesToScroll: 1
    }), $(".multiple-items-3").slick({
        infinite: !0,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [{
            breakpoint: 1140,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: !0,
                dots: !0
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    })

    var stickyHeight = $('.header').height();
    var topbar = $('.header-top').height();

    $(window).scroll(function () {
        if ($(window).scrollTop() > topbar) {
            //console.log('scroll more than 100px');
            $('.header').addClass('fixed-header');
            // $('.main-slider').css('padding-top', stickyHeight+'px');
        } else {
            $('.header').removeClass('fixed-header');
            // $('.main-slider').css('padding-top', '0');
        }
    });
   
/*
var a = 0;
 var oTop =0;
  $(window).scroll(function() {
  var oTop = $('#counter').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter-value').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },
    {

      duration: 2000,
      easing: 'swing',
      step: function() {
        $this.text(Math.floor(this.countNum));
      },
      complete: function() {
        $this.text(this.countNum);
        //alert('finished');
      }

    });
});
a = 1;
  }
});
 */


$('.read_less_body').css('display','none');
// Set up the toggle effect:
$('.read-more-show').on('click', function(e) {
    $('.read_less_body').css('display','block');
    $('.read_more_body').css('display','none');
});
// Changes contributed by @diego-rzg
$('.read-more-hide').on('click', function(e) {
    $('.read_more_body').css('display','block');
    $('.read_less_body').css('display','none');
});


}(jQuery));
(function($) {
/*     var k = 0;
    $(".carousel-inner .item").each(function () {
        if (k == 0) {
            var classA = 'active';
            $(this).addClass('active');
        }
        var litag = '<li data-target="#carousel-example-generic" data-slide-to="' + k + '" class="' + classA + '"></li>'
        $('.carousel-indicators').append(litag);
        k++;
    }); */
    var s = 0;
    $(".area-of-work .work-themes").each(function (i, el) {
        if (i % 2 == 0) {
             /* we are even */ 
           // $('.area-work col-md-6' ).addClass("");   
            }
        else {
            $(this).find('.workimg').addClass("col-md-push-6");  
            $(this).find('.workdata').addClass("col-md-pull-6");  
          //  $(this).addClass("area-workodd");  
            }
    });
    var z = 0;
    $(".reach-ul li").each(function () {
        if (z == 2) {
            $(this).removeClass('divider');
        }
        z++;
    });

    $('body').on('hidden.bs.modal', '.modal', function () {
        $('video').trigger('pause');
    });

    $( ".newsandevents-list .views-infinite-scroll-content-wrapper" ).addClass('row is-flex');
    $( ".iec-page-block .views-infinite-scroll-content-wrapper" ).addClass('row is-flex');

}(jQuery));

