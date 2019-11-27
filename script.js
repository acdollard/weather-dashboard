
let city=""; 
let url="";
let APIkey="";
let queryurl ="";


$("#searchbtn").on("click", function(event){
    event.preventDefault();
     city = $(this).prev().val().trim()
      url = "https://api.openweathermap.org/data/2.5/forecast?q=";    
// let city = "richmond";
     APIkey = "&appid=5ce8439fd4264478d1da0b24a7cd547d";
 queryurl = url + city + APIkey;


    $.ajax({
        url: queryurl,
        method: "GET",
        
    }).then(function(response){
        console.log(queryurl);
        console.log(response);  
     })
    

})




let shit = 12;