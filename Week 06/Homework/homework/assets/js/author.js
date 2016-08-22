$(document).ready(function(){
	function lightShow(){
		var theSrc   = $(this).data('large'),
			theTitle = $(this).attr('title'),
			theAlt   = $(this).attr('alt'),
			theClone = $(this).clone();

		$("#shade, #modal").show();
		$("#modal .target").html("<h1>" + theTitle + "</h1><p>" + theAlt + "</p><img src='"+theSrc+"' title='"+theTitle+"' alt='"+theAlt+"'>");
	}
	
	function lightClose(){
		$("#shade, #modal").hide();
	}

    $("#gallery img").click(lightShow);
    $("#modal #close, #shade").click(lightClose);

	$(document).bind('keydown',function(e){
		if(e.keyCode == 27) {
			lightClose();
		}
	});

});