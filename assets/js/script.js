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

