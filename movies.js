function review()
{
    var request = new XMLHttpRequest();
    var url = 'https://imdb-api.com/en/API/UserRatings/k_571c0m5s/tt1375666';
    request.open('GET',url,true);
    request.onload = function(){
        var result=JSON.parse(this.response)
        console.log(result);
    }
    request.send();
}