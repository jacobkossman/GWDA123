$(document).ready(init);

function init(){
	$("#bulb1").mouseover(function(){
		$(this).attr('src','_images/lightBulb_on.png');
	});
	
	$("#bulb1").mouseout(function(){
		$(this).attr('src','_images/lightBulb_off.png');
	});    

	function movement(){
		$("#bulb1").animate({
			"top"  : "400px",
			"left" : "800px"
		}, 1000).animate({
			"left" : "0px"
		}, 1000).animate({
			"top"  : "0px",
			"left" : "800px"
		}, 1000).animate({
			"left" : "0px"
		}, 1000, movement);		
	}

	$("#playPause").click(function(){
		$(this).attr('src','_images/playPause-playing.png');
		movement();
		$("#stop").attr('src','_images/stop-stop.png');
	});
	
	$("#stop").click(function(){
		$("#bulb1").stop(true).css({
			"left" : "0px",
			"top"  : "0px"
		}, 1000);
		$(this).attr('src','_images/stop-dormant.png');		
		$("#playPause").attr('src','_images/playPause-paused.png');		
	});	
}