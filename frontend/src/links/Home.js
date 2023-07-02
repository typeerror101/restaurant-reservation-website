import React from 'react'
import { ReactComponent as Logo } from '../images/main-img.svg';
import '../styles/home.css';
import Button from '@mui/material/Button';
import { useState } from 'react';



export default function Home() {
  const [name,setName] = useState("");
  const [date,setDate] = useState("");
  const [time,setTime] = useState("");
  const [email,setEmail] = useState("");
  const [table,setTable] = useState("");

  function addBooking(ev){
    ev.preventDefault();
    const url = process.env.REACT_APP_API_URL + '/reservation';
    fetch(url,{
      method: 'POST',
      headers: {'Content-type':'application/json'},
      body: JSON.stringify({
        name,
        date,
        time,
        email,
        table,
      })
    }).then(response => {
      response.json().then(json => {
        setName('');
        setDate('');
        setTime('');
        setEmail('');
        setTable('');
        console.log('result',json);
      });
    })
  }
  

  return (
    <>
      <div className='middle-elements'>
        <div className='main-text'>
            <h1>Drink,Eat & Enjoy With Your Family.</h1>
            <br/>
            <h6>Food tastes better when you have it with your family and friends.</h6>
        </div>
        <div className='image'>
          <Logo className="Main-img"/>
        </div>
      </div>
      <div className='end-elements'>
      <div>
      <h2 className='underline'>Book A Table &rarr;</h2>
      </div>
       
          <div className='border-2 rounded-md  border-teal-500 shadow-md  mx-0 flex justify-center form-div p-2 pt-0   mt-5 rounded-md '>
          <form onSubmit={addBooking}>
            <label>Name : </label>
            <input type='text' value={name} onChange={ev => setName(ev.target.value)} placeholder='Your Name'required></input>
            <label>Date : </label>
            <input type='date' value={date} onChange={ev => setDate(ev.target.value)} required></input>
            <label>Time : </label>
            <input type='time' value={time} onChange={ev => setTime(ev.target.value)}></input>
            <label>Email : </label>
            <input type="email" value={email} onChange={ev => setEmail(ev.target.value)} placeholder='Your Email Address' required></input>
            <label>No. of seats: </label>
            <select id="myDropdown" value={table} onChange={ev => setTable(ev.target.value)} name="seats" required>
              <option value="none">None</option>
              <option value="Table 1">Table 1 (2seater)</option>
              <option value="Table 2">Table 2 (4seater)</option>
              <option value="Table 3">Table 3 (4seater)</option>
            </select>
            <Button className="Submit" type="submit" sx = {{ marginBottom: '0.7rem'}} color="success" variant="contained">Book now</Button>
          </form>       
          </div>
      </div>
    </>
  )
}