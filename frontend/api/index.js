const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors'); 
const Reservation = require('./Models/reservation.js');
const mongoose  = require('mongoose');

app.use(cors());
app.use(express.json());
app.get('/api/test',(req,res) => {
    res.json('test ok3');
});

const Tablelist = [];
app.post('/api/reservation/:TableNo', async (req,res) => {

    const tableNo = req.params.TableNo;  
    console.log(tableNo);
    console.log(Tablelist);

    console.log(Tablelist.includes(tableNo));
    const Date = req.body.date;


    if(!Tablelist.includes(tableNo) && Date !=){
        await mongoose.connect(process.env.MONGO_URL);
        const {name,date,time,email,table} = req.body;
        const reservation = await Reservation.create({name,date,time,email,table});
        res.json(reservation);
        Tablelist.push(tableNo);  
    }else{
        res.status(201).json({message : 'Table has been alreaady Booked! Please select another table.'});
    }
  
});

app.get('/api/reservations', async (req,res) => {
    await mongoose.connect(process.env.MONGO_URL);
    const Tables = await Reservation.find();
    res.json(Tables);
});

app.listen(4041);
