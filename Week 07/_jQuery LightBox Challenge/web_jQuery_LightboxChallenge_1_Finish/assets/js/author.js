$(document).ready(function(){
	function lightbox(){
		var theSrc   = $(this).attr('src'),
			theTitle = $(this).attr('title'),
			theAlt   = $(this).attr('alt'),
			thePrice = $(this).data('price');

		$(".shade, .modal").show();
		$(".modal .target").html("<h1>" + theTitle + "</h1><p>" + theAlt + "</p><img src='" + theSrc + "' title='" + theTitle + "' alt='" + theAlt + "'><div class='price'><span>$</span>" + thePrice + "</div>");
	}
	
	function closeBox(){
		$(".shade, .modal").hide();
	}

    $(".gallery img").click(lightbox);
    $(".modal .close, .shade").click(closeBox);

	$(document).bind('keydown',function(e){
		if(e.keyCode == 27) {
			closeBox();
		}
	});

});