/*
psudocode

create an array with desired values ("NYC", "SF", "LA", "ATX", "SYD")
grab select off of page / html
add on options to the drop down menu 
set default value to display on initial page load (or do random else option)
when the select changes:
  get the value -- $.val()
  use if / if else statements (drop down menu) to reflect user inputs 
  select the attribute and chaneg the html classes (.whatever)


add fancy styles to drop down menu 

*/


$(function() {
  var cities = ["NYC", "SF", "LA", "ATX", "SYD"];

  var citySelect = $('#city-type');

  $.each(cities, function(i, city) {
    citySelect.append($('<option>', {text: city}));
  });

  $('body').attr('class', 'nyc');

  citySelect.change(function() {
    var city = citySelect.val();

    if(city == 'NYC') {
      $('body').attr('class', 'nyc');
    }
    else if (city == 'SF') {
      $('body').attr('class', 'sf');
    }
    else if (city == 'ATX') {
      $('body').attr('class', 'austin');
    }
    else if (city == 'LA') {
      $('body').attr('class', 'la');
    }
    else if (city == 'SYD') {
      $('body').attr('class', 'sydney');
    }
  });
});
