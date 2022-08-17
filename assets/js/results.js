var country 

var city

function getParams() {
    var searchParamsArr = document.location.search.split(',');
    console.log(searchParamsArr);

     city = searchParamsArr[0].split('=').pop();
     country = searchParamsArr[1].split('0').pop();

    city = searchParamsArr[0].split('=').pop();
    country = searchParamsArr[1].split('0').pop();

    getFlag(country);
} 
getParams();

function getFlag (country) {
    fetch (`https://countryflagsapi.com/png/${country}`, {cache: `reload`,})
    .then(response => {
        return response.blob();
    })
    .then(blob => {
        document.getElementById('flag').src = URL.createObjectURL(blob)
    })
}

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '069917c6d4msh28e5523d08eaa97p1412bdjsn5f7635020738',
		'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
	}
};

fetch(`https://hotels4.p.rapidapi.com/locations/v2/search?query=${city}/${country}`, options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

console.log(options)

var hotelsUrl = 'https://hotels4.p.rapidapi.com/locations/v2/search?query=';
var hotelKey = '069917c6d4msh28e5523d08eaa97p1412bdjsn5f7635020738';
// function renderCurrentHotels(destination, travelers, startDate, endDate ) {
//     var traveler = travelers.adults;
//     var location = destination.goingTo;
//     var start = startDate.checkIn.format('MM/DD/YYYY');
//     var end = endDate.checkOut.format('MM/DD/YYYY');
// }

function getHotels(city, country) {
    var apiUrl = hotelsUrl + (city, country) + '&appid=' + hotelKey;
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
                alert('Error: go fuck yourself')
            }
        })

        .catch(function (error) {
            alert('Unable to connect to Hotels');
        });
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
    // Need a function to change the "EUR" in the url to corresponding country
    fetch(`https://api.apilayer.com/exchangerates_data/convert?to=eur&from=usd&amount=1`, requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
}
  
// Timezone API with query parameter
// Function to add Country and City to the end of the URL Query Parameter
fetch(`https://api.ipgeolocation.io/timezone?apiKey=a21635ac9e344810af39538fb33ac767&tz=America/Los_Angeles`)
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));