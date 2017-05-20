jQuery(document).ready(function(){
//compare function
function compareValues(){

//get values of inputs 
	var a = jQuery('#a').val();
	var b = jQuery('#b').val();
	var displayValue;
	//turn inputs into numbers
	a = parseFloat(a);
	b = parseFloat(b);

	//if inputs are a number

		if(a > b){
				displayValue = ">";
		}else if(a < b){
				displayValue ="<";
		}else if(a == b){
				displayValue ="==";
		}else {
				displayValue ="N/A";
		}
	
		//put display to output span 
		jQuery("#comparison").text(displayValue);
}
//submit click
jQuery("#submit").click(compareValues);
  
});