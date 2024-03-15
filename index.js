//app create
const express=require('express');
const app=express();
const cookieParser = require('cookie-parser');
const cors = require("cors");

require("dotenv").config();
//port find krna hai
const PORT=process.env.PORT || 3000;

//middleware add
app.use(express.json());
app.use(
	cors({
		origin:"http://localhost:3000",
		credentials:true
	})
)


//db se connect krna hai
const dbConnect=require('./config/database')
dbConnect();

//cloud se connect krna hai

app.use(cookieParser());

//api route mount krna hai
const getData=require("./routes/dataRoute");
app.use('/api/languages/',getData);
// app.post('/login',(req ,res)=>{
      
// });


//activate server
app.listen(PORT,()=>{
    console.log("APP is running at port 4000");
})
