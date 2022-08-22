var cityFormEl = document.querySelector('#city-form');
var parisBtn = document.querySelector('#paris-france');
var londonBtn = document.querySelector('#london-unitedkingdom');
var tokyoBtn = document.querySelector('#tokyo-japan');
var newyorkBtn = document.querySelector('#newyork-usa');
var bangkokBtn = document.querySelector('#bangkok-thailand');
var seoulBtn = document.querySelector('#seoul-southkorea');
var deploySpyBtn = document.querySelector('#deploy');
var currency;
var countryCode2;
var timezone;
var queryString;
// var cityInputVal;

function chooseParis(event) {
    var cityInputVal = "Paris, France";
    queryString = './results.html?q=' + cityInputVal;
    getFranceInfo();
}

function chooseLondon(event) {
    var cityInputVal = "London, United Kingdom";
    queryString = './results.html?q=' + cityInputVal;
    getUnitedKingdomInfo();
}

function chooseTokyo(event) {
    var cityInputVal = "Tokyo, Japan";
    queryString = './results.html?q=' + cityInputVal;
    getJapanInfo();
}

function chooseNewYork(event) {
    var cityInputVal = "New York, USA";
    queryString = './results.html?q=' + cityInputVal;
    getUSAInfo();
}

function chooseBangkok(event) {
    var cityInputVal = "Bangkok, Thailand";
    queryString = './results.html?q=' + cityInputVal;
    getThailandInfo();
}

function chooseSeoul(event) {
    var cityInputVal = "Seoul, South Korea";
    queryString = './results.html?q=' + cityInputVal;
    getKoreaInfo();
}

function deploySpy(event) {
    location.assign(queryString);
}



deploySpyBtn.addEventListener('click', deploySpy);
parisBtn.addEventListener('click', chooseParis);
londonBtn.addEventListener('click', chooseLondon);
tokyoBtn.addEventListener('click', chooseTokyo);
newyorkBtn.addEventListener('click', chooseNewYork);
bangkokBtn.addEventListener('click', chooseBangkok);
seoulBtn.addEventListener('click', chooseSeoul);



var getFranceInfo = function() {
    localStorage.clear();
    fetch (`https://restcountries.com/v3.1/name/france`, {
        cache: `reload`,
    })
    .then(response => {return response.json();})
    .then(data => {
        currency = (data[0].currencies.EUR.name);
        countryCode2 = (data[0].cca2);
        timezone = (data[0].timezones[0]);
        latlong = "lat=48.8566&long=2.3522";
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
        localStorage.setItem("currency", currency);
        localStorage.setItem("country", countryCode2);
        localStorage.setItem("timezone", timezone);
    })
}

var getUnitedKingdomInfo = function() {
    localStorage.clear();
    fetch (`https://restcountries.com/v3.1/name/gb`, {
        cache: `reload`,
    })
    .then(response => {return response.json();})
    .then(data => {
        currency = (data[0].currencies.GBP.name);
        countryCode2 = (data[0].cca2);
        timezone = (data[0].timezones[0]);
        latlong = "lat=51.5072&long=0.1276";
        localStorage.setItem("currency", currency);
        localStorage.setItem("country", countryCode2);
        localStorage.setItem("timezone", timezone);
    })
}

var getJapanInfo = function() {
    localStorage.clear();
    fetch (`https://restcountries.com/v3.1/name/japan`, {
        cache: `reload`,
    })
    .then(response => {return response.json();})
    .then(data => {
        currency = (data[0].currencies.JPY.name);
        countryCode2 = (data[0].cca2);
        timezone = (data[0].timezones[0]);
        latlong = "lat=35.6762&long=139.6503";
        localStorage.setItem("currency", currency);
        localStorage.setItem("country", countryCode2);
        localStorage.setItem("timezone", timezone);
    })
}

var getUSAInfo = function() {
    localStorage.clear();
    fetch (`https://restcountries.com/v3.1/name/usa`, {
        cache: `reload`,
    })
    .then(response => {return response.json();})
    .then(data => {
        currency = (data[0].currencies.USD.name);
        countryCode2 = (data[0].cca2);
        timezone = (data[0].timezones[0]);
        latlong = "lat=40.7128&long=-74.0060";
        localStorage.setItem("currency", currency);
        localStorage.setItem("country", countryCode2);
        localStorage.setItem("timezone", timezone);
    })
}

var getThailandInfo = function() {
    localStorage.clear();
    fetch (`https://restcountries.com/v3.1/name/thailand`, {
        cache: `reload`,
    })
    .then(response => {return response.json();})
    .then(data => {
        currency = (data[0].currencies.THB.name);
        countryCode2 = (data[0].cca2);
        timezone = (data[0].timezones[0]);
        latlong = "lat=13.7563&long=100.5018";
        localStorage.setItem("currency", currency);
        localStorage.setItem("country", countryCode2);
        localStorage.setItem("timezone", timezone);
    })
}

var getKoreaInfo = function() {
    localStorage.clear();
    fetch (`https://restcountries.com/v3.1/name/korea`, {
        cache: `reload`,
    })
    .then(response => {return response.json();})
    .then(data => {
        currency = (data[1].currencies.KRW.name);
        countryCode2 = (data[1].cca2);
        timezone = (data[1].timezones[0]);
        latlong = "lat=37.5665&long=126.9780";
        localStorage.setItem("currency", currency);
        localStorage.setItem("country", countryCode2);
        localStorage.setItem("timezone", timezone);
    })
}

// Future get China Country Info
var getChinaInfo = function() {
    localStorage.clear();
    fetch (`https://restcountries.com/v3.1/name/china`, {
        cache: `reload`,
    })
    .then(response => {return response.json();})
    .then(data => {
        currency = (data[2].currencies.CNY.name);
        countryCode2 = (data[2].cca2);
        timezone = (data[2].timezones[0]);
        localStorage.setItem("currency", currency);
        localStorage.setItem("country", countryCode2);
        localStorage.setItem("timezone", timezone);
    })
}
