let p = new Promise((resolve,reject)=>
{
    setTimeOut(()=>{resolve(2);},200);
});
p.then((result)=>{
    console.log(result);
    return result;});
    p.then((result)=>{
        console.log(result*2);
        return result*2;});
        p.then((result)=>{
            console.log(result*3);
            return result*3;});