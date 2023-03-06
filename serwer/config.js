const express= require('express')
const cors= require('cors')
const mysql= require('mysql')

const app = express()

app.use(cors())

const port = 3000

var con= mysql.createConnection({

host:"localhost",
user: "root",
password:"",
database:"bazadanych"
})

con.connect(function(err){
 if(err) console.log(err)
 else{
    console.log("Conected")
 }

})

app.get("/",function(req,res){
    res.send("ok")
})

app.get("/select",(req, res)=>{
    const sql = "SELECT* FROM bazadanychvs" 
    con.query(sql, function(err,result,fileds){
        if(err) console.log(err)
        else res.send(result)
    })
})

app.listen(port,()=>{
console.log("aplikacja działa na porcie 3000")
})
