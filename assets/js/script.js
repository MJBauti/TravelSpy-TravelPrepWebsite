var cityFormEl = document.querySelector('#city-form');
var parisBtn = document.querySelector('#paris-france');
var londonBtn = document.querySelector('#london-unitedkingdom');
var tokyoBtn = document.querySelector('#tokyo-japan');
var newyorkBtn = document.querySelector('#newyork-usa');
var bangkokBtn = document.querySelector('#bangkok-thailand');
var seoulBtn = document.querySelector('#seoul-southkorea');
var deploySpyBtn = document.querySelector('#deploy');
var closeMdl = document.querySelector('#close-modal');
var cityInputVal;
var currency;
var countryCode2;
var timezone;
var queryString;


function chooseParis(event) {
    cityInputVal = "Paris";
    queryString = './results.html?q=' + cityInputVal;
    getFranceInfo();
    deployModal();
    document.getElementById('city-choice').textContent = "Paris, France";
}

function chooseLondon(event) {
    cityInputVal = "London";
    queryString = './results.html?q=' + cityInputVal;
    getUnitedKingdomInfo();
    deployModal();
    document.getElementById('city-choice').textContent = "London, United Kingdom";
}

function chooseTokyo(event) {
    cityInputVal = "Tokyo";
    queryString = './results.html?q=' + cityInputVal;
    getJapanInfo();
    deployModal();
    document.getElementById('city-choice').textContent = "Tokyo, Japan";
}

function chooseNewYork(event) {
    cityInputVal = "New York";
    queryString = './results.html?q=' + cityInputVal;
    getUSAInfo();
    deployModal();
    document.getElementById('city-choice').textContent = "New York, USA";
}

function chooseBangkok(event) {
    cityInputVal = "Bangkok";
    queryString = './results.html?q=' + cityInputVal;
    getThailandInfo();
    deployModal();
    document.getElementById('city-choice').textContent = "Bangkok, Thailand";
}

function chooseSeoul(event) {
    cityInputVal = "Seoul";
    queryString = './results.html?q=' + cityInputVal;
    getKoreaInfo();
    deployModal();
    document.getElementById('city-choice').textContent = "Seoul, Souh Korea";
}

function deploySpy(event) {
    location.assign(queryString);
}

function deployModal() {
    document.getElementById('myModal').style.display = "block";
    closeMdl.addEventListener('click', closeModal);
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
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
        currency = "EUR";
        countryCode2 = (data[0].cca2);
        timezone = (data[0].timezones[0]);
        latlong = "lat=48.8566&long=2.3522";
        localStorage.setItem("currency", currency);
        localStorage.setItem("country", countryCode2);
        localStorage.setItem("timezone", timezone);
        localStorage.setItem("latlong", latlong);
    })
}

var getUnitedKingdomInfo = function() {
    localStorage.clear();
    fetch (`https://restcountries.com/v3.1/name/gb`, {
        cache: `reload`,
    })
    .then(response => {return response.json();})
    .then(data => {
        currency = "GBP";
        countryCode2 = (data[0].cca2);
        timezone = (data[0].timezones[0]);
        latlong = "lat=51.5072&long=0.1276";
        localStorage.setItem("currency", currency);
        localStorage.setItem("country", countryCode2);
        localStorage.setItem("timezone", timezone);
        localStorage.setItem("latlong", latlong);
    })
}

var getJapanInfo = function() {
    localStorage.clear();
    fetch (`https://restcountries.com/v3.1/name/japan`, {
        cache: `reload`,
    })
    .then(response => {return response.json();})
    .then(data => {
        currency = "JPY";
        countryCode2 = (data[0].cca2);
        timezone = (data[0].timezones[0]);
        latlong = "lat=35.6762&long=139.6503";
        localStorage.setItem("currency", currency);
        localStorage.setItem("country", countryCode2);
        localStorage.setItem("timezone", timezone);
        localStorage.setItem("latlong", latlong);
    })
}

var getUSAInfo = function() {
    localStorage.clear();
    fetch (`https://restcountries.com/v3.1/name/usa`, {
        cache: `reload`,
    })
    .then(response => {return response.json();})
    .then(data => {
        currency = "USD";
        countryCode2 = (data[0].cca2);
        timezone = (data[0].timezones[0]);
        latlong = "lat=40.7128&long=-74.0060";
        localStorage.setItem("currency", currency);
        localStorage.setItem("country", countryCode2);
        localStorage.setItem("timezone", timezone);
        localStorage.setItem("latlong", latlong);
    })
}

var getThailandInfo = function() {
    localStorage.clear();
    fetch (`https://restcountries.com/v3.1/name/thailand`, {
        cache: `reload`,
    })
    .then(response => {return response.json();})
    .then(data => {
        currency = "THB";
        countryCode2 = (data[0].cca2);
        timezone = (data[0].timezones[0]);
        latlong = "lat=13.7563&long=100.5018";
        localStorage.setItem("currency", currency);
        localStorage.setItem("country", countryCode2);
        localStorage.setItem("timezone", timezone);
        localStorage.setItem("latlong", latlong);
    })
}

var getKoreaInfo = function() {
    localStorage.clear();
    fetch (`https://restcountries.com/v3.1/name/korea`, {
        cache: `reload`,
    })
    .then(response => {return response.json();})
    .then(data => {
        currency = "KRW";
        countryCode2 = (data[1].cca2);
        timezone = (data[1].timezones[0]);
        latlong = "lat=37.5665&long=126.9780";
        localStorage.setItem("currency", currency);
        localStorage.setItem("country", countryCode2);
        localStorage.setItem("timezone", timezone);
        localStorage.setItem("latlong", latlong);
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
