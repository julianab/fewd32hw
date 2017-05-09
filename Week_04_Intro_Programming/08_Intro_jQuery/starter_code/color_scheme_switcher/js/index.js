document.getElementById('whiteButton').onclick = switchWhite;
	jQuery('#grayButton').on('click', switchGray);
	jQuery('#whiteButton').on('click', switchWhite);

function switchGray() {
	jQuery('body').css('backgroundColor','gray');
	jQuery('body').css('color','white');
}

function switchWhite() {
  	jQuery('body').css('backgroundColor','white');
  	jQuery('body').css('color','gray');
}
