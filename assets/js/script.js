// function to choose which info pulling

// function to change page
var cityFormEl = document.querySelector('#city-form');

function handleCityFormSubmit(event) {
    event.preventDefault();

    var cityInputVal = document.querySelector('#city-input').value;

    if (!cityInputVal) {
        console.error('You need a city input value!');
        return;
        // modal.style.display = "block";
        // span.onclick = function() {modal.style.display = "none";}
    }

    var queryString = './results.html?q=' + cityInputVal;

    location.assign(queryString);
}

cityFormEl.addEventListener('submit', handleCityFormSubmit);

// function to fill city, country basic info on left of results page

// function to pull up info on right side
    // refer to function that decided info
    // call to each function for specific info

// each function to call specific info

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '069917c6d4msh28e5523d08eaa97p1412bdjsn5f7635020738',
		'X-RapidAPI-Host': 'hotels-com-provider.p.rapidapi.com'
	}
};

fetch('https://hotels-com-provider.p.rapidapi.com/v1/hotels/search?checkin_date=2022-03-26&checkout_date=2022-03-27&sort_order=STAR_RATING_HIGHEST_FIRST&destination_id=1708350&adults_number=1&locale=en_US&currency=USD&children_ages=4%2C0%2C15&price_min=10&star_rating_ids=3%2C4%2C5&accommodation_ids=20%2C8%2C15%2C5%2C1&price_max=500&page_number=1&theme_ids=14%2C27%2C25&amenity_ids=527%2C2063&guest_rating_min=4', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

var hotelApiKey = '069917c6d4msh28e5523d08eaa97p1412bdjsn5f7635020738';
var hotelUrl = 'https://hotels-com-provider.p.rapidapi.com/v1/hotels/search?'

function getHotels(cityFormEl) 
    var apiUrl = hotelUrl + cityFormEl + '&appid=' + hotelApiKey;
    fetch(apiUrl)
        .then(function (apiResponse) {
            if (apiResponse.ok) {
                apiResponse.json().then(function (data) {
                    var cityChoice = data.cityFormEl.destination
                    var apiCallUrl =  hotelUrl + cityChoice + '&destination=' + hotelApiKey;
                })
            }
        })