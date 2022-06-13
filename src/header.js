import React from 'react';
import { useState,useEffect } from 'react';
import './header.css';
import logoUrl from './assets/arlogo.jpeg';
import userPic from './assets/man.png'
const Header = () => {
    
  const [headerName,setHeaderName] = useState('My Application')



  
  return( 
  <div className="header">
      <div className='companyTitle'>
            <img src={logoUrl} alt="logo" />
            &emsp;
     {/* {(window.location.pathname).toString().toUpperCase()} */}

     {headerName}
     </div>

     <div className='profileDetails'>
     <img src={userPic} alt="user" style={{height:'35px'}}/>
            &emsp;
     Rachit Sharma
     </div>

  
  </div>)
}
export default Header;