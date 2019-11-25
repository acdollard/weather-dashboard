


let url = "api.openweathermap.org/data/2.5/forecast?q=";    
// let city = "richmond";
let APIkey = "&mode=xml&appid=5ce8439fd4264478d1da0b24a7cd547d";
let queryurl = url + city + APIkey;
let city = ""; 

function getWeather(){
    $.ajax({
        url: queryurl,
        method: "GET",
        
    }).then(function(response){
        city = $("#search_bar").val().trim() 
        console.log(queryurl);
        console.log(response);  
     })
    }


$("#search_bar").on("click", function(event){
    event.preventDefault();
    getWeather(); 

})









let shit = 12;