module.exports = {

    'facebookAuth' : {
        'clientID'      : '474581916040561', // your App ID
        'clientSecret'  : '5bf702e513ecdbfecbcc5aa825c28cf1', // your App Secret
        'callbackURL'   : 'http://localhost:8080/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'       : 'your-consumer-key-here',
        'consumerSecret'    : 'your-client-secret-here',
        'callbackURL'       : 'http://localhost:8080/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'      : '363417734289-f509i8243h27iqa7vgg0jdngv6nosv18.apps.googleusercontent.com',
        'clientSecret'  : 'i24SARi0qu6G136j3l5ll5gO',
        'callbackURL'   : 'http://localhost:8080/auth/google/callback'
    }

};

//
// function initialize() {
//     var map;
//     var bounds = new google.maps.LatLngBounds();
//     var mapOptions = {
//         mapTypeId: 'roadmap'
//     };
                    
//     // Display a map on the page
//     map = new google.maps.Map(document.getElementById("googleMap"), mapOptions);
        
//     // Multiple Markers
//     var markers = [
//         ['London Eye, London', 51.503454,-0.119562],
//         ['Palace of Westminster, London', 51.499633,-0.124755]
//     ];
                        
//     // Info Window Content
//     var infoWindowContent = [
//         ['<div class="info_content">' +
//         '<h3>London Eye</h3>' +
//         '<p>The London Eye is a giant Ferris wheel situated on the banks of the River Thames. The entire structure is 135 metres (443 ft) tall and the wheel has a diameter of 120 metres (394 ft).</p>' +        '</div>'],
//         ['<div class="info_content">' +
//         '<h3>Palace of Westminster</h3>' +
//         '<p>The Palace of Westminster is the meeting place of the House of Commons and the House of Lords, the two houses of the Parliament of the United Kingdom. Commonly known as the Houses of Parliament after its tenants.</p>' +
//         '</div>']
//     ];
        
//     // Display multiple markers on a map
//     var infoWindow = new google.maps.InfoWindow(), marker, i;
    
//     // Loop through our array of markers & place each one on the map  
//     for( i = 0; i < markers.length; i++ ) {
//         var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
//         bounds.extend(position);
//         marker = new google.maps.Marker({
//             position: position,
//             map: map,
//             title: markers[i][0]
//         });
        
//         // Allow each marker to have an info window    
//         google.maps.event.addListener(marker, 'click', (function(marker, i) {
//             return function() {
//                 infoWindow.setContent(infoWindowContent[i][0]);
//                 infoWindow.open(map, marker);
//             }
//         })(marker, i));

//         // Automatically center the map fitting all markers on the screen
//         map.fitBounds(bounds);
//     }

//     // Override our map zoom level once our fitBounds function runs (Make sure it only runs once)
//     var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
//         this.setZoom(14);
//         google.maps.event.removeListener(boundsListener);
//     });
    
// }


// // var geocoder;
// // var map;

// // function initialize() {
// //   // geocoder = new google.maps.Geocoder();
// //   var latlng = new google.maps.LatLng(-34.397, 150.644);
// //   var mapOptions = {
// //     zoom: 15,
// //     center: latlng
// //   };

// //   map = new google.maps.Map(document.getElementById('googleMap'),
// //       mapOptions);
// // }

// // function codeAddress() {
// //    // if (event.keyCode === 13) {
// //   var address = document.getElementById('address').value;
// //   geocoder.geocode( { 'address': address}, function(results, status) {
// //     if (status == google.maps.GeocoderStatus.OK) {
// //       map.setCenter(results[0].geometry.location);
// //       var marker = new google.maps.Marker({
// //           map: map,
// //           position: results[0].geometry.location
// //       });
// //     } else {
// //       alert('Geocode was not successful for the following reason: ' + status);
// //     }
// //   });
// //  // }
// // }


// // window.onload = loadScript;
// google.maps.event.addDomListener(window, 'load', initialize);