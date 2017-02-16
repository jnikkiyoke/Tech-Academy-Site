$(document).ready(function(){

	$('.chat-head').click(function(){
		$('.chat-body').slideToggle('slow');
	});
	$('.msg-head').click(function(){
		$('.msg-wrap').slideToggle('slow');
	});
	
	$('.close').click(function(){
		$('.msg-box').hide();
	});
	
	$('.user').click(function(){

		$('.msg-wrap').show();
		$('.msg-box').show();
	});
	
	$('textarea').keypress(
    function(e){
        if (e.keyCode == 13) {
            e.preventDefault();
            var msg = $(this).val();
            var photo = document.querySelector("user-photo");
			$(this).val('');
			if(msg!='')
			$('<div class="msg-self">'+msg+'</div>').insertBefore('.msg-push');
			$('.msg-body').scrollTop($('.msg-body')[0].scrollHeight);
        }
    });
	
});
