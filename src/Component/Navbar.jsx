import React, { useState } from 'react'
import './Navbar.css'
const Navbar = () => {
    const [showOffer, setShowOffer] = useState(false);

    const toggleOffer = () => {
      setShowOffer(!showOffer);
    };
  
  return (
    <div className='Navbar'>
    <div className='top-header'>
      <div className='toggle-offer' onClick={toggleOffer}>
        <i className={showOffer ? "fa-solid fa-times" : "fa-solid fa-bars"}></i> {/* Toggles between bars and times icons */}
      </div>
      <div className='logo'>
        <img src='//www.akirathecouture.com/cdn/shop/files/Untitled_design_10.png?v=1695132877&width=80 1x, //www.akirathecouture.com/cdn/shop/files/Untitled_design_10.png?v=1695132877&width=160 2x' alt='Logo' />
      </div>
      <div className='icons'>
        <i className="fa-solid fa-magnifying-glass"></i>
        <i className="fa-regular fa-user"></i>
        <i className="fa-solid fa-cart-shopping"></i>
      </div>
    </div>
    <hr />
    <div className='offfer'>
        <div className='navbar-container2'>
            <ul>
            <li><a href="#">upto 40% off</a></li>
     <li><a href=''>Cotton wear</a></li>     
      <li>  <a href=''>Anarkali</a></li>  
       <li> <a href=''>Lahenga</a></li>  
        <li> <a href=''>Drapped Dress</a></li> 
        <li> <a href=''>Party Wear</a></li> 
        <li> <a href=''>Gown</a></li> 
        <li> <a href=''>Shop All</a></li> 
            </ul>

        </div>
      
    </div>
  
    <div className={`offer ${showOffer ? 'show' : ''}`}>
      <div className='navbar-container'>
        <div className='close-offer' onClick={toggleOffer}>
          <i className="fa-solid fa-times"></i>
        </div>
    
        <ul>
          <li>Sale upto 40% OFF
          <hr/>
          </li>
          
          <li>Cotton wear  <hr/></li>
         
          <li>Anarkali<hr/></li>

          <li>Drapped Dress <hr/></li>
          
          <li>Party Wear  <hr/></li>
        
          <li>Gown <hr/></li>

<li>Shop All <hr/></li>

        </ul>
        <li> <a href="">Login</a></li>
      </div>
    </div>
    <hr />
  </div>
);
};
export default Navbar
