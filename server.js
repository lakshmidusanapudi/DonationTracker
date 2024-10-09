const express=require('express')
const app=express()
const admin=require('./Routes/Admin')
app.use(express.json())


app.use('/admin',admin)
app.listen(5000,()=>{
    console.log("Process running on port",5000)
})