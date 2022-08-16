

function getParams() {
    var searchParamsArr = document.location.search.split(',');
    console.log(searchParamsArr);
    var city = searchParamsArr[0].split('=').pop();
    var country = searchParamsArr[1].split('0').pop();
    getFlag(country);
} 

function getFlag (country) {
    fetch (`https://countryflagsapi.com/png/${country}`, {cache: `reload`,})
    .then(response => {
        return response.blob();
    })
    .then(blob => {
        document.getElementById('flag').src = URL.createObjectURL(blob)
    })
}

getParams();
