const express = require('express');
const app = express();
const cors = require('cors'); 
// const Reservation = require('./Models/reservation.js');

app.use(cors());
app.use(express.json());
app.get('/api/test',(req,res) => {
    res.json('test ok3');
});

app.post('/api/reservation', (req,res) => {
    // const {name,date,time,email,table} = res.body;
    res.json(req.body);
});

app.listen(4040);

// username:laroshbenny
//9fFUmPOLQs1j73gu