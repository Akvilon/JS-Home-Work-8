

$(function() {

	$('#firstname').mouseover(function(){
		$("#tooltip1").css("display", "block");
	});

	$('#firstname').mouseout(function(){
		$("#tooltip1").css("display", "none");
	});

	$('#lastname').mouseover(function(){
		$("#tooltip2").css("display", "block");
	});

	$('#lastname').mouseout(function(){
		$("#tooltip2").css("display", "none");
	});

	$('#address').mouseover(function(){
		$("#tooltip3").css("display", "block");
	});

	$('#address').mouseout(function(){
		$("#tooltip3").css("display", "none");
	});

	$('#form_button').click(function(){
		$("#tooltip1").css("display", "block");
		$("#tooltip2").css("display", "block");
		$("#tooltip3").css("display", "block");
		return false;
	});


});


