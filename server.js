const express=require('express')
const app=express()
const admin=require('./Routes/Admin')
const committe=require('./Routes/CommitteMembers')
const Collection=require('./Routes/Collections')
const Expenses=require('./Routes/Expenses')
const cors = require('cors');

app.use(express.json())
app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use('/admin',admin)
app.use('/committemembers',committe)
app.use('/collection',Collection)
app.use('/expenses',Expenses)

app.listen(5000,()=>{
    console.log("Process running on port",5000)
})