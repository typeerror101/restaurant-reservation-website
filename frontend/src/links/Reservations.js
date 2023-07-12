import React from 'react'
import '../App.css'
import '../styles/reservation.css'
import { useEffect,useState } from 'react';

export default function Reservations() {
const [reservations,setReservations] = useState([]);

  useEffect(() => {
    getReservations().then(reservations => {
      setReservations(reservations);  
    })
   
  }, []);

  async function getReservations(){
    const url = process.env.REACT_APP_API_URL + '/reservations';
    const response = await fetch(url);
    return await response.json();
  }



  return (
    <div className='Tables'>
      <h1 className='main-text2 underline'>Reserved Tables</h1>
      <br/>
      <div className='tables-100 grid grid-cols-4 gap-10 ml-20 '>
        {reservations.length > 0 && reservations.map(reservation => (
          <div className='list-items flex justify-between'>
            <div className='items p-3'><p>{reservation.table}</p><p>Name: {reservation.name}</p><p>Date: {reservation.date}</p><p>Time: {reservation.time}</p></div>
          </div>
        ))}
      </div>
      </div>
  )
}
