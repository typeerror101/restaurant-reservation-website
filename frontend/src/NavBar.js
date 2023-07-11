import React from 'react';
import './styles/navbar.css';
import {Link, useMatch, useResolvedPath} from 'react-router-dom';
export default function NavBar() {
  return (
    <div>
      <nav className='nav'>
         <Link to="/" className='logo bg-emerald-600 rounded text-xl  text-white my-2 mx-2 ' >O-persia Restaurant</Link>
        <ul className='nav-middle'>
            <CustomLink to='/Reservations'>Reservations</CustomLink>
            <CustomLink to='/Payments'>Payments</CustomLink>
            <CustomLink to='/FindFood'>Find Food</CustomLink>
            <CustomLink to='/Location'>Location</CustomLink>
        </ul>
        <ul>
            <Link to='/signin'>Sign in</Link>
            <Link>Sign up</Link>
        </ul>
          
      </nav>
    </div>
  )
}

function CustomLink({to, children, ...prop}){
    const ResolvedPath = useResolvedPath(to);
    const isActive = useMatch({path: ResolvedPath.pathname, end: true});

    return(
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...prop}>
                {children}
            </Link>
        </li>
    )
}
