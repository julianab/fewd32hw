

$(document).ready((function () {
	

	jQuery('.readmore').click(function () {
		event.preventDefault();
		jQuery('#show-this-onclick').slideDown(e);
		jQuery('.readmore').show();
		jQuery('.readless').hide();
	});
		jQuery('.readless').click(function (e) {
		event.preventDefault();
		jQuery('#show-this-onclick').slideUp();
		jQuery('.readmore').show();
		jQuery('.readless').hide();
	});
		jQuery('.learnmore').click(function (e) {
		event.preventDefault();
		jQuery('#learnmoretext').slideDown();
		jQuery('.readmore').show();
		jQuery('.readless').hide();
	});

});