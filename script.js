
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

        //create empty array where the 5 day forecast data will go
        
        // console.log(response);
        // console.log(response.list[1].dt_txt);  
        // let time = response.list[1].dt_txt.split(" ")[1];
        
        //if statemenet to get data for 12:00 noon 
        
        //iterate through the 40 weather data sets
        for(let i=0; i< response.list.length; i++){
            
            //set day number var
            //if the time in the data set matches noon, populate card with weather information
            if(response.list[i].dt_txt.split(" ")[1] == "15:00:00")
            {
                let day_number = 0; 
                $("#" + day_number + "date").text(response.list[i].dt_txt.split(" ")[0]); 
                $("#" + day_number + "five_day_temp").text("Temp: " + response.list[i].main.temp);
                $("#" + day_number + "five_day_humidity").text("Humidity: " + response.list[i].main.humidity);
                $("#" + day_number + "five_day_icon").attr("src", "http://openweathermap.org/img/w/" + response.list[i].weather[0].icon + ".png");
                // debugger; 
                //then increment the day number so the next card gets populated 
                console.log(response.list[i].weather[0].icon);
                console.log(day_number);
                console.log(response.list[i].main.temp);
                day_number++; 
                        }
            
        }
    });
    
    
    








//function to display data in main div 
     $.ajax({
         url:current_weather_url,
         method: "GET", 
     }).then(function(current_data){
         console.log(current_data);
         let temp = Math.round(((current_data.main.temp - 273.15) * 9/5 + 32))
         console.log("The temperature in " + city + " is: " + temp);
         $("#today_temp").text("Temperature: " + temp);
         $("#today_humidity").text("Humidity: " + current_data.main.humidity);
         $("#today_wind_speed").text("Wind Speed: " + current_data.wind.speed);
         $("#today_icon_div").attr("src", "http://openweathermap.org/img/w/" + current_data.weather[0].icon + ".png");
     })
    

})




let shit = 12;