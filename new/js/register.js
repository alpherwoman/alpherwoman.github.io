$(document).ready(function(){
    $('#datepicker').datepicker({
        format: 'yyyy-mm-dd',
        maxDate: deltaDate(new Date(), 0, 0, -18)
    });
    $('.date').removeClass('gj-textbox-md')
    $('.gj-icon').hide();
    $('.select2').select2();
    $(".password").attr("autocomplete", "off");
    $(".date").attr("autocomplete", "off");
})


$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip()
});

function deltaDate(input, days, months, years) {
    return new Date(
      input.getFullYear() + years, 
      input.getMonth() + months, 
      Math.min(
        input.getDate() + days,
        new Date(input.getFullYear() + years, input.getMonth() + months + 1, 0).getDate()
      )
    ).toISOString().split("T")[0];
}

$(document).ready(function(){
    $(".create-password").on('input', function(){
        var pass = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-+_]).{8,}$/;
        if (!$('.create-password.password').val().match(pass) || $('.create-password.password').val() != $('.create-password.confirm').val()){
            $('.password-submit').addClass('cursor-auto') 
            $('.password-submit').attr('disabled',true)  
        }
        else{
            $('.password-submit').removeAttr('disabled')
            $('.password-submit').removeClass('cursor-auto') 
        }
    })
})

$(document).ready(function(){
    $(".form-control-name").on('input', function(){
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var phn = /^\d{11}$/;
        var pass = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-+_]).{8,}$/;
        if ($('.fname').val() == "" || $('.sname').val() == "" || $('.password').val() == "" || !$('.password').val().match(pass) || !$('.email').val().match(re) || !$('.phone').val().match(phn) || $('.password').val() != $('.confirm').val()){
            $('.continue').addClass('cursor-auto') 
            $('.continue').attr('disabled',true)  
        }
        else{
            $('.continue').removeAttr('disabled')
            $('.continue').removeClass('cursor-auto') 
        }
    })

    $(".form-control-two").on('change', function(){
        if ($('.gender').select2('data')[0]['id'] == "" || $('.state').select2('data')[0]['id'] == "" || $('.job').select2('data')[0]['id'] == "" || $('.religion').select2('data')[0]['id'] == "" || $('.date').val() == ""){
            
            $('.submit').addClass('cursor-auto') 
            $('.submit').attr('disabled',true)   
        }
        else{
            $('.submit').removeAttr('disabled')
            $('.submit').removeClass('cursor-auto') 
        }
    })

    $('.back').on('click', function(){
        $(this).hide();
        $('.submit').hide();
        $('.note').hide();
        $('.first').show();
        $('.continue').show();
        $('.second').hide();
    })
    
    $('.continue').on('click', function(){
        $(this).hide();
        $('.submit').show();
        $('.note').show();
        $('.first').hide();
        $('.second').show();
    })

    $('.activate-login').on('click', function(){
        $('.row-login').show();
        $('.row-register').hide();
    })

    $('.activate-register').on('click', function(){
        $('.row-login').hide();
        $('.row-register').show();
    })
});

// $(document).ready(function(){
//     $(".form-control-profile").on('input', function(){
//         var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//         if ($('.pfname').val() == "" || $('.psname').val() == "" || $('.password').val() == "" || $('.password').val().length < 4 || !$('.pemail').val().match(re) || $('.pphone').val().length == 0 || $('.pphone').val().length >= 15 ){
//             $('.pcontinue').addClass('cursor-auto') 
//             $('.pcontinue').attr('disabled',true)  
//         }
//         else{
//             $('.pcontinue').removeAttr('disabled')
//             $('.pcontinue').removeClass('cursor-auto') 
//         }
//     })

//     $(".form-control-profile-two").on('change', function(){
//         if ($('.pgender').select2('data')[0]['id'] == "" || $('.pstate').select2('data')[0]['id'] == "" || $('.pjob').select2('data')[0]['id'] == "" || $('.preligion').select2('data')[0]['id'] == "" || $('.pdate').val() == ""){
            
//             $('.psubmit').addClass('cursor-auto') 
//             $('.psubmit').attr('disabled',true)   
//         }
//         else{
//             $('.psubmit').removeAttr('disabled')
//             $('.psubmit').removeClass('cursor-auto') 
//         }
//     })
    
//     $('.pcontinue').on('click', function(){
//         $(this).hide();
//         $('.psubmit').show();
//         $('.pfirst').hide();
//         $('.psecond').show();
//     })
// });

$(document).ready(function() {
    $("body").on('click', '.toggle-password', function() {
      $(this).toggleClass("fa-eye fa-eye-slash");

      var input = $(this).parent().find('.password');
      if (input.attr("type") === "password") {
        input.attr("type", "text");
      } else {
        input.attr("type", "password");
      }
    });
});

$(document).ready(function() {
    $("body").on('click', '.toggle-pwd', function() {
      $(this).toggleClass("fa-eye fa-eye-slash");

      var input = $(this).parent().find('.pwd');
      if (input.attr("type") === "password") {
        input.attr("type", "text");
      } else {
        input.attr("type", "password");
      }
    });
});