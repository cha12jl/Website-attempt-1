$(function() {

	$( ".Sky_title" ).hide();
	$( ".Ground_title" ).hide();
	$( ".Soil_title" ).hide();

	$( ".Sky_image" ).mouseenter(function() {
		$( ".Sky_title" ).slideDown();
		$( ".Sky_image" ).fadeTo("fast", 0.5);
	});

	$( ".Sky_image" ).mouseleave(function() {
		$( ".Sky_title" ).slideUp();
		$( ".Sky_image" ).fadeTo("fast", 1);
	});

	$( ".Ground_image" ).mouseenter(function() {
		$( ".Ground_title" ).slideDown();
	});

	$( ".Ground_image" ).mouseleave(function() {
		$( ".Ground_title" ).slideUp();
	});

	$( ".Soil_image" ).mouseenter(function() {
		$( ".Soil_title" ).slideDown();
	});

	$( ".Soil_image" ).mouseleave(function() {
		$( ".Soil_title" ).slideUp();
	});


});