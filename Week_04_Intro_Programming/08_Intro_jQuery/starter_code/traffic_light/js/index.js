//Implement the red light using jQuery. Don't forget to add the script tags.
$(document).ready(function()) {
jQuery('#stopButton').click('illuminateRed');
jQuery('#slowButton').click('illuminateYellow');
jQuery('#goButton').click('illuminateGreen');

function illuminateRed() {
  clearLights();
 	jQuery('#stopLight').css('background-color', 'red');
}
function illuminateYellow() {
  clearLights();
  	jQuery('#slowLight').css('background-color', 'yellow');
}
function illuminateGreen() {
  clearLights();
  jQuery('#goLight').css('background-color', 'green');
}

function clearLights() {
  document.getElementById('stopLight').style.backgroundColor = "black";
  document.getElementById('slowLight').style.backgroundColor = "black";
  document.getElementById('goLight').style.backgroundColor = "black";
}
})
