// function initialize() {
//     var map;
//     var service;
//     var geocoder = new google.maps.Geocoder();
//     var area = "<%= user.linkedin.location %>";
//     var company = ["<%= user.linkedin.company %>"];
//     var industry = "<%= user.linkedin.industry %>";
//     var profile = "<%= user.linkedin.picture %>";
//     var name = "<%= user.linkedin.name %>";
//     geocoder.geocode({'address': area}, function(results, status) {
//       var latlng = results[0].geometry.location;
//       var newMap = new google.maps.LatLng(latlng.k, latlng.D);
//       map = new google.maps.Map(document.getElementById('googleMap'), {
//           center: newMap,
//           zoom: 15
//         });
//       var request = {
//         location: newMap,
//         radius: '500',
//         query: company
//       };

//       service = new google.maps.places.PlacesService(map);
//       service.textSearch(request, callback);

//       function callback(results, status) {
//         if (status == google.maps.places.PlacesServiceStatus.OK) {
//             var place = results[0].formatted_address;
//             var geocoder = new google.maps.Geocoder();
//             geocoder.geocode({'address': place}, function(results, status) {
//               var latlng = results[0].geometry.location;
//               var newMap = new google.maps.LatLng(latlng.k, latlng.D);
//               map = new google.maps.Map(document.getElementById('googleMap'), {
//                   center: newMap,
//                   zoom: 15
//                 });
//               marker = new google.maps.Marker({
//                 position: newMap,
//                 map: map,
//                 title: place
//             });
//               var infoWindow = new google.maps.InfoWindow()

//               var infoWindowContent = 
//                   '<div class="info_content">' +
//                   '<h3> <%= user.linkedin.name %> </h3>' +
//                   '<p><%= user.linkedin.industry %></p>' +
//                   '<img src="<%= user.linkedin.picture %>">' + '</div>';

//               google.maps.event.addListener(marker, 'click', (function(marker) {
//                 return function() {
//                     infoWindow.setContent(infoWindowContent);
//                     infoWindow.open(map, marker);
//                 }
//               })(marker));


//           });
//           }
//         }
      
//     });
// }

// google.maps.event.addDomListener(window, 'load', initialize);