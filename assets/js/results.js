var country 
var city

function getParams() {
    var searchParamsArr = document.location.search.split(',');
    console.log(searchParamsArr);
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

  

