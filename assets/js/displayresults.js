// Below is the currency exchange API
var myHeaders = new Headers();
myHeaders.append("apikey", "dnzT2cXlYUyXLCSIsAGKH2f60lGjaKMV");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};
// have a function that can change the "eur"- the end point currency
// fetch("https://api.apilayer.com/exchangerates_data/convert?to=eur&from=usd&amount=1", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));
