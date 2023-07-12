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

app.delete('/api/delete', async (req, res) => {
    const { name, email, table } = req.body;
  
    try {
      // Delete the collection based on name and email criteria
      const result = await Reservation.deleteOne({ name: name, email: email ,table: table});
  
      if (result.deletedCount > 0) {
        // res.status(200).json({ message: 'Collection deleted successfully' });
      } else {
        res.status(404).json({ message: 'Reservation not Found!' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error deleting collection', error: error });
    }
  });

app.post('/api/reservation/:TableNo', async (req,res) => {

    const tableNo = req.params.TableNo;  
    await mongoose.connect(process.env.MONGO_URL);
    var doc = await Reservation.findOne({table: tableNo, date: req.body.date});

    console.log(doc);

    if(!doc > 0){
       
        const {name,date,time,email,table} = req.body;
       
        const reservation = await Reservation.create({name,date,time,email,table});
        res.status(200).json({message : 'Table has been Booked!'});
        

      
    }else{
        res.status(201).json({message : 'Table has been already Booked! Please select another table or another date.'});
    }

});

app.get('/api/reservations', async (req,res) => {
    await mongoose.connect(process.env.MONGO_URL);
    const Tables = await Reservation.find();
    res.json(Tables);
});



app.listen(4040);
