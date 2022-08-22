var country = localStorage.getItem("country");
var backBtn = document.querySelector('#back-btn');
var currency = localStorage.getItem("currency");
var lat = localStorage.getItem("lat");
var lon = localStorage.getItem("lon");
var city

// Takes from URL keywords
function getParams() { 
    var searchParamsArr = document.location.search.split(',');
    city = searchParamsArr[0].split('=').pop();
} 
getParams();

// Country flag API
function getFlag (country) {
    fetch (`https://countryflagsapi.com/png/${country}`, {cache: `reload`,})
    .then(response => {
        return response.blob();
    })
    .then(blob => {
        document.getElementById('flag').src = URL.createObjectURL(blob)
    })
}

// Button to go back to Index.HTML
function goBack(event) {
    location.assign('./index.html');
}
backBtn.addEventListener('click', goBack); // Event listener to go back to Index.HTML


// WIP: Hotel API
var hotelsUrl = 'https://hotels4.p.rapidapi.com/locations/v2/search?query=';
var hotelKey = '069917c6d4msh28e5523d08eaa97p1412bdjsn5f7635020738';
function getHotels(city, country) {
    var apiUrl = hotelsUrl + (city) + '&appid=' + hotelKey;
    fetch(apiUrl)
        .then(function (apiResponse){
            if (apiResponse.ok) {
                apiResponse.json().then(function(data){
                    var cityD = data.city.destination;
                    var countryD = data.country.destination;
                    var apiCallUrl = hotelsUrl +'&destination=' + cityD + '&destination=' + countryD + '&appid=' + hotelKey;
                    fetch(apiCallUrl)
                        .then(function (hotelResponse) {
                            if (hotelResponse.ok) {
                            hotelResponse.json().then(function (hotelData) {
                                var availableHotels = $('<div>')
                                    .attr({
                                        id: 'available-hotels'
                                    })
                                var hotelCard = hotelData.available.hotels
                                var availableHotelsHeading = $('<h2>')
                                    .text(city + country);
                                var availableHotelsList = $('<ul>')
                                $('#six-hotels').before(availableHotels);
                                availableHotels.append(availableHotelsHeading);
                                availableHotels.append(availableHotelsList);
                                var sixHotelHeader = $('<h2>')
                                .text('6 Available Hotels: ')
                                .attr({
                                    id: 'six-hotel-header'
                                })
                                $('#available-hotels').after(sixHotelHeader)

                                var sixHotelArray = [];
                                for (var i = 0; i < sixHotelArray.length; i++) {
                                    var cardDiv = $('<div>')
                                        .addClass('hotel-card');
                                    var cardBodyDiv = $('<div>')
                                        .addClass('card-body');
                                    
                                    sixHotel.append(cardDiv);
                                    cardDiv.append(cardBodyDiv);
                                
                                   
                                }
                            })
                            }
                        })
                })
            } else {
                alert('Error: City not found')
            }
        })

        .catch(function (error) {
            alert('Unable to connect to Hotels');
        });
}
// WIP: Hotel API 2
function findHotels() {
    var requestHotels = {
        method:'GET',
        redirect: 'follow',
        headers: {
            'X-RapidAPI-Key': '069917c6d4msh28e5523d08eaa97p1412bdjsn5f7635020738',
            'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
        }

    }

    fetch(`https://hotels4.p.rapidapi.com/locations/v2/search?query=lat=33.44&lon=33.44`, requestHotels)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
};

// WIP: Flights API
function flights() {
    
    var requestFlights = {
        method: 'GET',
        redirect: 'follow',
        headers: {
            'X-RapidAPI-Key': '069917c6d4msh28e5523d08eaa97p1412bdjsn5f7635020738',
            'X-RapidAPI-Host': 'priceline-com-provider.p.rapidapi.com'}
    }

    fetch(`https://priceline-com-provider.p.rapidapi.com/v1/hotels/search?sort_order=HDR&location_id=3000035821&date_checkout=2022-11-16&date_checkin=2022-11-15&star_rating_ids=3.0%2C3.5%2C4.0%2C4.5%2C5.0&rooms_number=1&amenities_ids=FINTRNT%2CFBRKFST`, requestFlights)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(error => console.error('error', error));
}

// Currency Exchange API fetch. Returns data in JSON format
function currencyExchange() {
    var myHeaders = new Headers();
    myHeaders.append("apikey", "dnzT2cXlYUyXLCSIsAGKH2f60lGjaKMV");
    
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: myHeaders
    };
    fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${currency}&from=usd&amount=1`, requestOptions)
      .then(response => response.json())
      .then(data => {
        var currencyRes = data.result
        document.getElementById('currencyInfo').textContent = `The current exchange rate for 1 USD is ${currencyRes} ${currency}.`;
        })
      .catch(error => console.log('error', error));
}
  
// Timezone API with query parameter
function timezoneCountry() {
fetch(`https://api.ipgeolocation.io/timezone?apiKey=a21635ac9e344810af39538fb33ac767&lat=${lat}&long=${lon}`)
  .then(response => response.json())
  .then(data => {
    var tzDateTime = data.date_time;
    var realTz = localStorage.getItem("timezone")
    document.getElementById('realTZ').textContent = `${realTz}`;
    document.getElementById('tzDisp').textContent = `The current date and time is ${tzDateTime}`;
    })
  .catch(error => console.log('error', error));
}

// Famous Sightseeing places
// Function that changes array based on selected location
function sightseeing() {
    if (country === "FR") {
      var countryplaces = ['Eiffel Tower', 'Musée du Louvre', 'Musee de l Orangerie', 'Notre Dame Cathedral', 'Le Marais'];
      var countryimg = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg/1024px-Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg";
    } else if (country === "GB") {
        var countryplaces = ['Big Ben', 'Buckingham Palace', 'Westminster Abbey', 'Windsor Castle', 'The London Eye'];
        var countryimg = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Clock_Tower_-_Palace_of_Westminster%2C_London_-_May_2007.jpg/500px-Clock_Tower_-_Palace_of_Westminster%2C_London_-_May_2007.jpg";
    } else if (country === "JP") {
        var countryplaces = ['Meiji Shrine', 'Shinjuku Gyoen National Garden', 'Sensō-ji Temple', 'Ginza District Shopping Center', 'Tokyo National Museum'];
        var countryimg = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Courtyard_of_Meiji_Shrine_20190717.jpg/2560px-Courtyard_of_Meiji_Shrine_20190717.jpg";
    } else if (country === "US") {
        var countryplaces = ['Statue of Liberty', 'Central Park', 'Empire State Building', 'Metropolitan Museum of Art', 'Broadway and the Theater District'];
        var countryimg = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Lady_Liberty_under_a_blue_sky_%28cropped%29.jpg/800px-Lady_Liberty_under_a_blue_sky_%28cropped%29.jpg";
    } else if (country === "TH") {
        var countryplaces = ['Wat Arun', 'Grand Palace', 'Chao Phraya River', 'Lumphini Park', 'Sea Life Bangkok Ocean World'];
        var countryimg = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Wat_Arun_Ratchawararam_Ratchawaramahawihan.jpg/2560px-Wat_Arun_Ratchawararam_Ratchawaramahawihan.jpgraram_Ratchawaramahawihan.jpg";
    } else if (country === "KR") {
        var countryplaces = ['Hongdae Nightlife', 'N Seoul Tower', 'Lotte World - Indoor Amusement Park', 'Gyeongbokgung Palace', 'The Seoul Museum of Art'];
        var countryimg = "https://upload.wikimedia.org/wikipedia/commons/e/e9/Hongdae_Party_District_at_Night%2C_Seoul.jpg";
    }
    // Function that forloops list in array into li items
    function loadSights() {
        var places = countryplaces;
        // Get a refrerence to the UL
        var ul = document.getElementById('sights');
        for (i = 0; i < places.length; i++) {
          var li = document.createElement("li"); // create li element.
          li.innerHTML = places[i]; // assigning text to li using array value.
          ul.appendChild(li); // append li to ul.
        }
        document.getElementById('sightsimage').src = countryimg;
      }
      loadSights();
}

// Run all functions to Display the information
// Function that runs all the functions
function displayInfo() {
    document.getElementById('city-choice').textContent = `${city}, ${country}`; //displays city and country
    getFlag(country);
    currencyExchange();
    timezoneCountry();
    sightseeing();
    timezoneCountry();
}
// Execute all the functions
displayInfo();