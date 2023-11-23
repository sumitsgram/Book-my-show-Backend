const express = require('express');
const app = express();
app.use(express.json())
const cors = require('cors');
app.use(cors());
const mongoose = require("mongoose");
const Tickets = require('./models/Schema');

mongoose.connect('mongodb://0.0.0.0:27017/bms')
  .then(() => {
    console.log('Connected to MongoDB!')
    app.listen(8080, ()=> {
    console.log(`Node Api is running on port 8080`)
})
})
  .catch((error)=> console.log(error))

app.post("/api/booking",async(req,res) => {

    try {
        const booking = await Tickets.create(req.body)
        res.status(200).json(booking);
    } 

    catch (error) {
        console.log(error.message);
        res.status(500).json({message:error.message})
    }
})

app.get('/api/bookings',async (req,res)=> {
    try {
    const booking = await Tickets.find({});
    res.status(200).json(booking);
      } 
    catch (error) {
    res.status(500).json({message:error.message})
      }
})




