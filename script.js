
let city=""; 
let url="";
let APIkey="";
let queryurl ="";
let currenturl = "";


$("#searchbtn").on("click", function(event){
    event.preventDefault();
     city = $(this).prev().val().trim()
      url = "https://api.openweathermap.org/data/2.5/forecast?q=";    
      currenturl = "https://api.openweathermap.org/data/2.5/weather?q=";
// let city = "richmond";
     APIkey = "&appid=5ce8439fd4264478d1da0b24a7cd547d";
 queryurl = url + city + APIkey;
 current_weather_url = currenturl + city + APIkey; 


    $.ajax({
        url: queryurl,
        method: "GET",
        
    }).then(function(response){
        console.log(response);
        console.log(response.list[1].dt_txt);  
        let time = response.list[1].dt_txt;
        
        console.log(time.split(" ")[1]);
        // let split_time = time.split(" ")[1];

     });

     $.ajax({
         url:current_weather_url,
         method: "GET", 
     }).then(function(current_data){
         console.log(current_data);
         console.log("The temperature in " + city + " is: " + current_data.main.temp);
         $("#today_temp").text("Temperature: " + (current_data.main.temp - 273.15 * (9/5) + 32));
         $("#today_humidity").text("Humidity: " + current_data.main.humidity);
         $("#today_wind_speed").text("Wind Speed: " + current_data.wind.speed);
         $("#today_icon_div").attr("src", "http://openweathermap.org/img/w/" + current_data.weather[0].icon + ".png");
     })
    

})




let shit = 12;