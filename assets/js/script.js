var cityFormEl = document.querySelector('#city-form');
var currency;
var countryCode2;
var timezone;

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

var getFranceInfo = function() {
    fetch (`https://restcountries.com/v3.1/name/france`, {
        cache: `reload`,
    })
    .then(response => {return response.json();})
    .then(data => {
        currency = ([0].currencies.EUR.name);
        countryCode2 = (data[0].cca2);
        timezone = (data[0].timezones[0]);
    })
}

var getChinaInfo = function() {
    fetch (`https://restcountries.com/v3.1/name/china`, {
        cache: `reload`,
    })
    .then(response => {return response.json();})
    .then(data => {
        currency = ([2].currencies.CNY.name);
        countryCode2 = (data[2].cca2);
        timezone = (data[2].timezones[0]);
    })
}

var getUnitedKingdomInfo = function() {
    fetch (`https://restcountries.com/v3.1/name/gb`, {
        cache: `reload`,
    })
    .then(response => {return response.json();})
    .then(data => {
        currency = (data[0].currencies.GBP.name);
        countryCode2 = (data[0].cca2);
        timezone = (data[0].timezones[0]);
    })
}

var getJapanInfo = function() {
    fetch (`https://restcountries.com/v3.1/name/japan`, {
        cache: `reload`,
    })
    .then(response => {return response.json();})
    .then(data => {
        currency = (data[0].currencies.JPY.name);
        countryCode2 = (data[0].cca2);
        timezone = (data[0].timezones[0]);
    })
}

var getUSAInfo = function() {
    fetch (`https://restcountries.com/v3.1/name/usa`, {
        cache: `reload`,
    })
    .then(response => {return response.json();})
    .then(data => {
        currency = (data[0].currencies.USD.name);
        countryCode2 = (data[0].cca2);
        timezone = (data[0].timezones[0]);
    })
}

var getThailandInfo = function() {
    fetch (`https://restcountries.com/v3.1/name/thailand`, {
        cache: `reload`,
    })
    .then(response => {return response.json();})
    .then(data => {
        currency = (data[0].currencies.THB.name);
        countryCode2 = (data[0].cca2);
        timezone = (data[0].timezones[0]);
    })
}

var getCountryInfo = function() {
    fetch (`https://restcountries.com/v3.1/name/korea`, {
        cache: `reload`,
    })
    .then(response => {return response.json();})
    .then(data => {
        currency = (data[1].currencies.KRW.name);
        countryCode2 = (data[1].cca2);
        timezone = (data[1].timezones[0]);
    })
}