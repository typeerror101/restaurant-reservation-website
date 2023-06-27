import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './links/Home';
import NavBar from './NavBar';

function App() {
  return (
    <>
      <NavBar/>
      <div className='components'>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
