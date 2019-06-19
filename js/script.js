// >>>>>>> Starting Point <<<<<<<< 
//
/* Making a HTTP Request */
let HTTP = new XMLHttpRequest();

let urlOfApi = 'https://googledictionaryapi.eu-gb.mybluemix.net/?define=hello'; /* we use the Eval function to get data for the inputted word */

HTTP.open('GET', urlOfApi);
HTTP.send();
// 
/* Extracting Data From Server Response */
HTTP.onload = () => {
let response = HTTP.response;
response = JSON.stringify(response);
document.getElementById("p").innerHTML= response.indexOf("hello");
};
 


