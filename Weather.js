function fetchWeather()
{
    var city=document.getElementById("temp").value
    console.log(city)
    var request=new XMLHttpRequest();
    var apikey='93c5e62778bf8a7d882b60b8729cabd2';
    var url='https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=93c5e62778bf8a7d882b60b8729cabd2';
    request.open('GET',url,true);
    request.onload=function(){
        var result=JSON.parse(this.response)
        console.log(result)
        console.log(result.main.temp)
    }
    request.send();
    console.log("Fetching...");
    

}