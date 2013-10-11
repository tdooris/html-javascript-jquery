$(document).ready(function(){
    $('input').focus(function(){
        $('input').css('outline-color', '#FF0099');
    
    });

    $('.deleteme').focus(function(){
    	$('.deleteme').css('outline-color', 'yellow');
    });

});