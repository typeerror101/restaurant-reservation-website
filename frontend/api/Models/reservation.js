const mongoose = require('mongoose');
const {Schema,model} = mongoose; 

const ReservationSchema = new Schema({
    name:{type: String, required:true},
    date:{type: String, required:true},
    time:{type: String, required:true},
    email:{type: String, required:true},
    table:{type: String, required:true},
    tableList:{type: Array, default: [],},
});

const ReservationModel = model('Reservation',ReservationSchema);

module.exports = ReservationModel;