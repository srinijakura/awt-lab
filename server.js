var express=require("express")
var firebase=require("firebase")

var app=express()
app.use(express.json())
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD09Wv6ewxvy7Go1BevguT3BPrA8C5X4WY",
    authDomain: "awt-firebase.firebaseapp.com",
    databaseURL: "https://awt-firebase-default-rtdb.firebaseio.com",
    projectId: "awt-firebase",
    storageBucket: "awt-firebase.appspot.com",
    messagingSenderId: "658426548636",
    appId: "1:658426548636:web:5ba2505ed3854bd2033859",
    measurementId: "G-3GX3E3CTFR"
  };
 firebase.initializeApp(firebaseConfig)
dbref=firebase.database().ref("student")
app.get("/students",(req,res)=>{
    dbref.on('value',(snap)=>{
        res.send(snap.val())
    })
})
app.post("/addStudents",(req,res)=>{
    stu={
        "id":10,
        "name":"manu"
    }
    dbref.child(stu.id).set(stu,(data)=>{
        res.send("inserted")
    })
})
app.delete("/delete/:id",(req,res)=>{
    var id=req.params.id
    dbref.child(id).remove()
    res.send("deleted")
})
app.put("/update/:id",(req,res)=>{
    var id=req.params.id
    console.log(req.body)
    dbref.child(id).update({
          "name":"ruthwik"
    })
    res.send("updated.....")
})
app.post("/addStudent",(req,res)=>{
    dbref.child(req.body.id).set(req.body,(data)=>{
        res.send("inserted")
    })
})
