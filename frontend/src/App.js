import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './links/Home';
import Reservations from './links/Reservations';
import Payments from './links/Payments';
import Signin from './links/Signin';
import NavBar from './NavBar';

function App() {
  return (
    <>
      <NavBar/>
      <div className='components'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Reservations' element={<Reservations/>}/>
          <Route path='/Payments' element={<Payments/>}/>
          <Route path='/signin' element={<Signin/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
