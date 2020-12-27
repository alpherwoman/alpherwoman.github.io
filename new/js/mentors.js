$(document).ready(function(){
	$('.openModal').on('click', function(e){
		e.preventDefault()
		info = $(this).find('.mentors-info');

		$('.modal-name').html(info.find('.mentor-name').html());
		$('.modal-role').html(info.find('.mentor-role').html()); 
		$('.modal-industry').html(info.find('.mentor-industry').html()); 
		$('.modal-age').html(info.find('.mentor-age').html()); 
		$('.modal-location').html(info.find('.mentor-location').html()); 
		$('.modal-url').html(info.find('.mentor-url').html()); 
		$('.modal-type').html(info.find('.mentor-type').html()); 
		console.log(info.find('.mentor-image').attr('src'))
		$('.modal-image').attr('src', info.find('.mentor-image').attr('src'));

		$('#aboutModal').modal('show');
	})

	$(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        $(".filter-button").removeClass('active')
        $(this).addClass('active')
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show();
        }
        else
        {
            $(".filter").not('.'+value).hide();
            $('.filter').filter('.'+value).show();
            
        }
    });
})
