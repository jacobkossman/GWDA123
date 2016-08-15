$(document).ready(function(){
	function lightShow(){
		var theSrc   = $(this).attr('src'),
			theTitle = $(this).attr('title'),
			theAlt   = $(this).attr('alt'),
			theClone = $(this).clone();

		$("#theDark, #theLight").show();
		$("#theLight .target").html("<h1>" + theTitle + "</h1><p>" + theAlt + "</p>").append(theClone);
	}
	
	function lightClose(){
		$("#theDark, #theLight").hide();
	}

    $("#gallery img").click(lightShow);
    $("#theLight .close, #theDark").click(lightClose);

	$(document).bind('keydown',function(e){
		if(e.keyCode == 27) {
			lightClose();
		}
	});

});