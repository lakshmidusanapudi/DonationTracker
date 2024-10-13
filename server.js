const express=require('express')
const app=express()
const admin=require('./Routes/Admin')
const committe=require('./Routes/CommitteMembers')
const Collection=require('./Routes/Collections')
app.use(express.json())


app.use('/admin',admin)
app.use('/committemembers',committe)
app.use('/collection',Collection)
app.listen(5000,()=>{
    console.log("Process running on port",5000)
})