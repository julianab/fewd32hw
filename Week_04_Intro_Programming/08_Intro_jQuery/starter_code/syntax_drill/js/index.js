jQuery(document).ready(function(){

    
    // When purple box is clicked, set all paragraphs to be purple
jQuery('#purpleBox').click(changePurple);
	function changePurple() {
		$('p').css('color', 'purple');
		$('p').css('background-color', 'none');
	}

    // When the blue box is clicked set the hipster paragraph to have white text with a blue background.  All other paragraphs should be black

jQuery('#blueBox').click(changeBlue);
	function changeBlue() {
		$('p.hipsterSpeak').css('color', 'white');
		$('p.hipsterSpeak').css('background-color', 'blue');
	}
    // When the red box is clicked set the list items toggle red background and white text on and off
jQuery('#redBox').click(changeRed);
	function changeRed() {
		$('li').toggleClass('redForm');
	}
    

    // When any of the boxes are clicked, add a 6px solid black bottom border
jQuery('.boxes').click(addBorder);
	function addBorder() {
		$('.boxes').css('border-bottom', '6px solid black');
	}



});