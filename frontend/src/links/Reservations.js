import React from 'react'
import '../App.css'
import '../styles/reservation.css'

export default function Reservations() {
  return (
    <div>
      <h1 className='main-text2'>Table List</h1>
      <hr/>
      <div className='list-items'>
        <div className='items'><p>Table 1</p><p>Reserved</p></div>
        <div className='items'><p>Table 2</p><p>Occupied</p></div>
        <div className='items'><p>Table 3</p><p>Available</p></div>
        <div className='items'><p>Table 4</p><p>Available</p></div>
        <div className='items'><p>Table 5</p><p>Available</p></div>
        </div>
    </div>
  )
}
