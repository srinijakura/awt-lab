function doubleTheNumber(n)
{
    return new Promise(function(resolve,reject)
    {
        resolve(n*2);
    })
}
doubleTheNumber(12),then(function(result){
    doubleTheNumber(15),then(function(result1){
        doubleTheNumber(20),then(function(result2){
            console.log(result+result1+result2)
        })
    })
})