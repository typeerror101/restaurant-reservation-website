import React from 'react'
import { ReactComponent as Logo } from '../images/main-img.svg';
import '../styles/home.css';


export default function Home() {
  return (
    <>
      <div className='middle-elements'>
        <div className='main-text'>
            <h1>Drink,Food & Enjoy With Your Family.</h1>
            <h6>Food tasted better when you eat it with your family and friends.</h6>
        </div>
        <div className='image'>
          <Logo className="logo"/>
        </div>
      </div>
      <div className='end-elements'>
      <div>
      <h2>Book A Table &rarr;</h2>
      </div>
       
          <div>
          <form>
            <label>Date: </label>
            <input type='date' required></input>
            <label>Time: </label>
            <input type='time'></input>
            <label>Email: </label>
            <input type="email" required></input>

            <button type="submit">Submit</button>
          </form>       
          </div>
      </div>
    </>
  )
}
