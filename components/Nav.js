import React, { useState } from "react"
import { Fade as Hamburger } from 'hamburger-react'
import Link from 'next/link'

export const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <div className="header">
      <div className="logo-nav">
        <div className="logo-container">
          <Link href="/">
          <a>
            <img src='/images/logo.svg' alt='logo'
            style={{width: '120px'}} />
          </a>
          </Link>
        </div>
        <ul className={click ? "nav-options active" : "nav-options"} style={{marginLeft:'auto'}}>
        <li className="option" onClick={closeMobileMenu}>
          <Link href='/'>
            <a className='nav-link'>Home</a>
            </Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <Link href='/about'>
            <a className='nav-link'>About Us</a>
            </Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
           <Link href='/services'>
            <a  className='nav-link'>Services</a>
            </Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
          <Link href='/'>
           <a href="/" className='nav-link'>Case Studies</a>
           </Link>
         </li>
         <li className="option" onClick={closeMobileMenu}>
          <Link href='/'>
           <a href="/" className='nav-link'>Blog</a>
           </Link>
         </li>
         <li className="option" onClick={closeMobileMenu}>
          <Link href='/'>
          <button className='contact-btn' type='button'>
           Contact Us
          </button>
           </Link>
         </li>
          
         
        </ul>
      </div>
     
      <div className="mobile-menu" onClick={handleClick} >
      
          <div className="menu-icon">
          <Hamburger easing="ease-in" style={{display: 'none'}} />
          </div>
       
      </div>
      <style jsx>
      
      {
        `
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          z-index: 999 !important;
          padding: 0px 20px;
          font-family:'Poppins', sans-serif;
          height: 50px; }
        .header:hover{
          background-color: #fff !important;
        }
        .logo-nav {
          display: flex;
          align-items: center;
          justify-content: space-around;
          z-index: 5;
        }
        
        .logo {
          width: 45px;
          height: 45px;
        }
        .nav-options {
          padding-left: 470px;
          
          display: grid;
          grid-template-columns: repeat(6, auto);
          grid-gap: 30px;
          list-style-type: none;
        }
        .mobile-option {
          display: none;
        }
        .contact-btn{
          border: none;
          outline: none;
          padding: 8px 20px;
          border-radius: 20px;
          background:#00D747;
          color: #fff;
          font-size: 14px;
          transition: all .5s ease;
          margin-top: 15px; }
        .contact-btn:hover{
          background:#00CAF7;
          border: none;
          color: #fff;
        }
        .option :hover {
          color: white;
        }
        .signin-up {
          display: flex;
          padding: 0px 5px;
          list-style-type: none;
        }
        .sign-in {
          padding-right: 50px;
          align-self: center;
        }
        .sign-in :hover {
          color: white;
        }
        .signup-btn {
          padding: 10px 10px;
          height: 2.4rem;
          border-radius: 3px;
          background: rgb(222, 9, 241);
          color: white;
          cursor: pointer;
          align-items: center;
        }
        .mobile-menu {
          display: none !important;
        }
        .header .nav-link{
          text-decoration: none !important;
          color: #000 !important;
          transition: all .5s ease-in-out;
          font-weight: bold;
          margin-top:15px;
          font-size: 14px;
        }
        .header .nav-link:hover{
          color:#00D747 !important;
        }
        @media screen and (max-width: 992px) {
          
          .header {
            padding: 0px 10px;
          }
          .logo {
            width: 45px;
            height: 45px;
          }
          .nav-options {
            display: flex;
            width: 100%;
            z-index: 6;
            position: absolute;
            top: 50px;
            left: -100%;
            opacity: 0;
            transition: all 0.5s ease;
            flex-direction: column;
            list-style-type: none;
            grid-gap: 0px;
          }
          
          .nav-link{
            color: #000 !important; 
          }
          .nav-options.active {
            background:#fff;
            left: 0;
            opacity: 1;
            height:55vh;
            transition: all 0.5s ease;
            z-index: 10 !important;
            padding-left: 0px;
          }
        
          .menu-icon {
            width: 50px;
            height: 50px;
            
          }
          .option {
            display: flex;
            align-items: center;
            justify-content: center;
            height: auto !important;
            
          }
        .signin-up {
            display: none;
          }
          .mobile-menu{
            display:block !important;
          }
        }
        .mobile-menu {
          display: none;

        }
        @media screen and (max-width: 360px){
          .mobile-menu{
            display: block !important;
          }
        }
        .nav-link{
          color:#000 !important;
        }
        `
      }
      
      </style>
    </div>
    
  );
};

