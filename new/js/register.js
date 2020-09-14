$(document).ready(function(){
    $('#datepicker').datepicker();
    $('.date').removeClass('gj-textbox-md')
    $('.gj-icon').hide();
    $('.select2').select2();
})

$(document).ready(function(){
    $(".form-control-name").on('input', function(){
        if ($('.fname').val() == "" || $('.sname').val() == "" || $('.email').val() == "" || $('.phone').val() == ""){
            $('.continue').addClass('cursor-auto') 
            $('.continue').attr('disabled',true)   
        }
        else{
            $('.continue').removeAttr('disabled')
            $('.continue').removeClass('cursor-auto') 
        }
    })
    
    $('.continue').on('click', function(){
        
        $(this).hide();
        $('.submit').show();
        $('.first').hide();
        $('.second').show();
    })
});