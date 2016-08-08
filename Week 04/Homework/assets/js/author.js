$(document).ready(function(){
	function fadeOut(){
		var lastImg = $("#faded .slideshow img:last");
		
		lastImg.animate({
			"opacity" : "0"
		},1000, function(){
			lastImg.prependTo("#faded .slideshow");
			lastImg.css({
				"opacity" : "1"
			});
			setTimeout(fadeOut,4000);
		});
	}

	setTimeout(fadeOut,4000);

    function slideLeft(){
	    var frameWidth = $("#horizontal .slideshow").width(),
        	firstImg = $("#horizontal .slideshow .drawer img:first");
        
        $("#horizontal .slideshow .drawer img:first").animate({
            "margin-left" : -frameWidth
        },function(){
            firstImg.appendTo("#horizontal .slideshow .drawer");
            firstImg.css({
                "margin-left" : "0px"
            });
            setTimeout(slideLeft,3000);
        });
    }

    setTimeout(slideLeft,3000);
    
    function widthMatch(){
	    var frameWidth = $("#horizontal .slideshow").width();
	    
	    $("#horizontal .slideshow img").css({"width":frameWidth});
    }
    
    widthMatch();
    
    $(window).resize(widthMatch);
    
});