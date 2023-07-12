import React, { useEffect, useState } from 'react'
import '../styles/payments.css';
import Button from '@mui/material/Button';

export default function Payments() {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [table,setTable] = useState("");
  const [payments, setPayments] = useState([]);
  const [message,setMessage] = useState("");
  
  async function getPayments(ev){
    ev.preventDefault();
    const url = process.env.REACT_APP_API_URL + '/reservations';
    const response = await fetch(url);
    const data = await response.json();

    for(const payment of data){
      if(payment.name === name && payment.email === email && payment.table === table){
        setName('');
        setEmail('');
        setTable('');
        setPayments(payment);
      }else{
        setName('');
        setEmail('');
        setTable('');
        console.log('Match not Found!');
      }
    }
  }

  const deleteCollection = async (name, email, table) => {
    try {
      const url = process.env.REACT_APP_API_URL + '/delete';
      const response = await fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, table }),
      }).then(response => {
        response.json().then(json => {
         
          setMessage(json.message);
  
        })
      });
  
  
      if (response.ok) {
        const data = await response.json();
        console.log(data.message); // Collection deleted successfully
      } else {
        const errorData = await response.json();
        console.error(errorData.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  return (
    <div>
        <div className='border-2 border-emerald-700 px-10 py-10 rounded-md w-2/5 mx-auto mt-20'>
          <h1 className='bg-green-400 rounded-sm text-center'>Enter your details to make Payments</h1>
          <form className='form2 flex flex-col gap-0' onSubmit={getPayments}>
            <label className='mt-3'>Enter your Name</label>
            <input type='text' value={name} onChange={ev => setName(ev.target.value)} placeholder='Your Name'required></input>
            <label className='mt-2'>Enter your Email</label>
            <input type='email' value={email} onChange={ev => setEmail(ev.target.value)} placeholder='Your email'required></input>
            <label className='mt-3'>Enter your Table number</label>
            <select className="mb-6 mt-3" id="myDropdown" value={table} onChange={ev => setTable(ev.target.value)} name="seats" required>
              <option value="none">None</option>
              <option value="Table 1">Table 1 (2seater)</option>
              <option value="Table 2">Table 2 (4seater)</option>
              <option value="Table 3">Table 3 (4seater)</option>
              <option value="Table 4">Table 4 (2seater)</option>
              <option value="Table 5">Table 5 (3seater)</option>
            </select>
            <Button className="Submit " type="submit" sx = {{ marginBottom: '0.7rem'}} color="success" variant="contained">Pay Now</Button>
          </form>

          {payments.name && (   
                  <div className=''>
                  <h1 className=' response bg-emerald-200 rounded-md pl-3 pr-3'>Payment Successfull! Payment details for the booking are given below</h1>
                  <div className='ml-5 mt-2'>
                  <div>Name: {payments.name}</div>
                  <div>Email: {payments.email}</div>
                  <div>Table: {payments.table}</div>
                  </div>
                   <button id="myButton" onClick={deleteCollection(payments.name,payments.email,payments.table)} sx = {{ marginBottom: '0.7rem'}} color="success" variant="contained"></button>
                  </div>
              )
              }
        </div>  
        {/* {message && <div className='Alert'>{message}</div>} */}
    </div>
  )
}

