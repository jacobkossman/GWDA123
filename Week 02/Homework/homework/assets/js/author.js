$(document).ready(function(){
    function animateBall(thisObj){
        thisObj.animate({
    		"bottom" : "20px"
		},500).animate({
    		"bottom" : "10px"
		},500).animate({
    		"bottom" : "20px"
		},500).animate({
    		"bottom" : "10px"
		},500);
    }
    
	$("#one,#two,#three").mouseover(function(){
		animateBall($(this));
	});

	$("#one,#two").mouseout(function(){
// 		$(this).stop(true);
	});

	$("#three").click(function(){
    	$(this).stop(true);
    	$(this).animate({
        	"bottom" : "70px",
        	"left"	 : "60%"
    	},300, function(){
	    	$("h1").animate({
    	    	"opacity" : "1",
    	    	"bottom"  : "300px"
	    	});
    	}).delay(1000).animate({
        	"opacity" : "0"
    	},function(){
	    	$("h1").animate({
    	    	"opacity" : "0"
	    	},function(){
	    		$(this).css({
    	    		"bottom" : "200px"
	    		});
	    	});
	    	
	    	$("#two").css({
    	    	"left" : "50%"
	    	});
		});
	});

	$("#two").click(function(){
    	$(this).stop(true);
    	$(this).animate({
        	"bottom" : "70px",
        	"left"	 : "40%"
    	},300, function(){
	    	$("h1").animate({
    	    	"opacity" : "1",
    	    	"bottom"  : "300px"
	    	});
    	}).delay(1000).animate({
        	"opacity" : "0"
    	},function(){
	    	$("h1").animate({
    	    	"opacity" : "0"
	    	},function(){
	    		$(this).css({
    	    		"bottom" : "200px"
	    		});
	    	});
	    	$("#one").css({
    	    	"left" : "50%"
	    	});
		});
	});


	$("#one").click(function(){
    	$(this).stop(true);
    	$(this).animate({
        	"bottom" : "200px",
        	"left"	 : "55%"
    	},300, function(){
	    	$("h1").animate({
    	    	"opacity" : "1",
    	    	"bottom"  : "300px"
	    	});
    	}).delay(1000).animate({
        	"opacity" : "0"
    	},function(){
	    	$("h1").animate({
    	    	"opacity" : "0"
	    	},function(){
	    		$(this).css({
    	    		"bottom" : "200px"
	    		});
	    	});
		});
		
		$("#reset").show();
	});


	$("#reset").click(function(){
    	$("#one").css({
        	"opacity" : "1",
		    "left"    : "20px",
		    "bottom"  : "10px"
    	});
    	$("#two").css({
        	"opacity" : "1",
			"left"    : "100px",
		    "bottom"  : "10px"
    	});
    	$("#three").css({
        	"opacity" : "1",
			"left"    : "50%",
		    "bottom"  : "10px"
    	});
	});

});