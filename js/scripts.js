/**
 * index.js
 * - All our useful JS goes here, awesome!
 */


// Default
$.simpleWeather({
    location: "Seattle, WA",
    unit: 'f',
    success: function(weather) {
      // Entire weather object
      console.log(weather);
      
      // Display Data
      $('.temp').text(weather.temp);
      $('.city').text(weather.city);
      // $('img').attr('src', weather.image);
      
      // Change Change w/ Condition code
      var iconCode = 'wi wi-yahoo-' + weather.code;
      $('i').attr('class', iconCode );
      
    },
    error: function(error) {
      // Show if weather cannot be retreived
      console.log('Look outside.');
    }
  
  });

// Geo Location
$('.geolocation').click( function() {
      
    //load weather using your lat/long coordinates
    navigator.geolocation.getCurrentPosition(function(position) {
      
      // Check lat/long coordinates
      var lat = position.coords.latitude;
      var long = position.coords.longitude;
      
      console.log(lat, long);
      
      // Send to SimpleWeather
      //getWeather( lat + ',' + long ); 
    });
   
});