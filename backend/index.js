require('dotenv').config()
const express=require('express')
const app=express()

//requirement of axois from frontend request
var cors = require('cors')
app.use(cors({
  origin: [
    "https://tradingwebsite-nqtn.vercel.app",
    "https://tradingwebsite-mu.vercel.app"
  ],
  credentials: true
}));//to secure the the requests
app.use(express.json())//to pass data in json

const Holding=require('./Models/holdings');
const Position=require('./Models/positions')
const signupRoute=require('./router/signup')
const loginRoute=require('./router/login')
const logoutRoute=require('./router/logout')
const watchlistRoute=require('./router/watchlist')

//mongodb connection
const mongoose = require('mongoose');
const holdings = require('./Models/holdings');
const MONGO_URL=process.env.MONGO_ATALAS_URL;
mongoose.connect(MONGO_URL)
  .then(() => console.log('Connected!'))
  .catch((err)=>console.log(err));

app.get("/",(req,res)=>{
    res.send("hello");
})
app.use("/signup",signupRoute);
app.use("/login",loginRoute);
app.use("/logout",logoutRoute);
app.use("/watchlist",watchlistRoute)

app.get("/allholdings",async (req,res)=>{
    let holdingsData=await Holding.find({})
    //console.log(holdingsData)
    res.json(holdingsData)

})
app.get("/allpositons",async (req,res)=>{
    let positionsData=await Position.find({})
    //console.log(positionsData)
    res.json(positionsData)
})

const PORT=8080;
app.listen(PORT , ()=>{
    console.log(`server is running on localhost:${PORT}/`)
    }
)