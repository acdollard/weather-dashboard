
let city=""; 
let url="";
let APIkey="";
let queryurl ="";
let currenturl = "";
let citiesDiv = document.getElementById("searched_cities_container");
//start with empty array
let cities = []; 
init(); 

//run function to pull saved cities from local storage and fill array with it
function init(){
    debugger; 
    let saved_cities = JSON.parse(localStorage.getItem("cities"));

    if (cities !== null){
        cities = saved_cities
    }   
    
    renderButtons(); 
}

//sets localstorage item to cities array 
function storeCities(){
    localStorage.setItem("cities", JSON.stringify(cities)); 
}





//render buttons for each element in array 
function renderButtons(){
    citiesDiv.innerHTML = ""; 
    for(let i=0; i < cities.length; i++){
        let cityName = cities[i]; 

        let buttonEl = document.createElement("button");
        buttonEl.textContent = cityName; 
        buttonEl.setAttribute("class", "btn"); 

        citiesDiv.appendChild(buttonEl);
      }
    }








$("#searchbtn").on("click", function(event){
    event.preventDefault();
    city = $(this).prev().val().trim()
    
    
    //push the city user entered into cities array 
    cities.push(city);
    //make sure cities array.length is never more than 8 
    if(cities.length > 8){
       cities.shift()
    }
    //return from function early if form is blank
    if (city == ""){
        return; 
    }
    
    storeCities(); 
    renderButtons(); 

    url = "https://api.openweathermap.org/data/2.5/forecast?q=";    
    currenturl = "https://api.openweathermap.org/data/2.5/weather?q=";
    APIkey = "&appid=5ce8439fd4264478d1da0b24a7cd547d";
    queryurl = url + city + APIkey;
    current_weather_url = currenturl + city + APIkey; 


    $.ajax({
        url: queryurl,
        method: "GET",
        
    }).then(function(response){
        

        let day_number = 0; 
        
        //iterate through the 40 weather data sets
        for(let i=0; i< response.list.length; i++){
            
            //set day number var
            //if the time in the data set matches noon, populate card with weather information
            if(response.list[i].dt_txt.split(" ")[1] == "15:00:00")
            {
                $("#" + day_number + "date").text(response.list[i].dt_txt.split(" ")[0]); 
                let temp = Math.round(((response.list[i].main.temp - 273.15) *9/5+32));
                $("#" + day_number + "five_day_temp").text("Temp: " + temp + String.fromCharCode(176)+"F");
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
         $("#today_temp").text("Temperature: " + temp + String.fromCharCode(176)+"F");
         $("#today_humidity").text("Humidity: " + current_data.main.humidity);
         $("#today_wind_speed").text("Wind Speed: " + current_data.wind.speed);
         $("#today_icon_div").attr("src", "http://openweathermap.org/img/w/" + current_data.weather[0].icon + ".png");
     })
    

})




let shit = 12;