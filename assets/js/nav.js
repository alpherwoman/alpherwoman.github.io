$(document).ready(function() {
    "use strict";
    $('.menu > ul > li:has( > ul)').addClass('menu-dropdown-icon');
    $('.menu > ul > li > ul:not(:has(ul))').addClass('normal-sub');
    $(".menu > ul").before("<a href=\"#\" class=\"menu-mobile\">&nbsp;</a>");
    $(".menu > ul > li").hover(function(e) {
        if ($(window).width() > 943) {
            $(this).children("ul").stop(true, false).fadeToggle(150);
            e.preventDefault();
        }
    });
    $(".menu > ul > li").click(function() {
        if ($(window).width() <= 943) {
            $(this).children("ul").fadeToggle(150);
        }
    });
    $(".menu-mobile").click(function(e) {
        $(".menu > ul").toggleClass('show-on-mobile');
        e.preventDefault();
    });
    if ($(window).width() <= 943) {
        console.log("khjbhhj")
        $('.navbar.fixed-top').addClass('top-0');
      }
        var y = $(this).scrollTop();
      if (y > 10 || $(window).width() <= 943) {
        $('.fixed-top').addClass('top-0');
      } else {
        $('.fixed-top').removeClass('top-0');
      }
});
$(window).resize(function() {
    $(".menu > ul > li").children("ul").hide();
    $(".menu > ul").removeClass('show-on-mobile');
});
$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 10 || $(window).width() <= 943) {
    $('.fixed-top').addClass('top-0');
  } else {
    $('.fixed-top').removeClass('top-0');
  }
});
$("#phone").intlTelInput({
    defaultCountry: "auto",
    // geoIpLookup: function(callback) {
    //     $.get('http://ipinfo.io', function() {}, "jsonp").always(function(resp) {
    //         var countryCode = (resp && resp.country) ? resp.country : "";
    //         callback(countryCode);
    //     });
    // },
    nationalMode: false,
    preferredCountries: ['ng'],
    utilsScript: "assets/js/utils.js"
});
