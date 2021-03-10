import React, { useState } from "react";
import { Fade as Hamburger } from "hamburger-react";
import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

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
              <img
                src="/images/logo.svg"
                alt="logo"
                style={{ width: "120px" }}
              />
            </a>
          </Link>
        </div>
        <ul
          className={click ? "nav-options active" : "nav-options"}
          style={{ marginLeft: "auto" }}
        >
          <li className="option" onClick={closeMobileMenu}>
            <Link href="/">
              <a className="nav-link">Home</a>
            </Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <Link href="/about">
              <a className="nav-link">About Us</a>
            </Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <Link href="/services">
              <a className="nav-link">Services</a>
            </Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <Link href="/">
              <a href="/" className="nav-link">
                Case Studies
              </a>
            </Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <Link href="/">
              <a href="/" className="nav-link">
                Blog
              </a>
            </Link>
          </li>
        </ul>
        <li
          className="option"
          onClick={closeMobileMenu}
          style={{ listStyle: "none" }}
        >
          <Link href="/">
            <button className="contact-btn" type="button">
              Contact Us
            </button>
          </Link>
        </li>
        <li style={{listStyle:'none'}} className='display'>
          <FontAwesomeIcon icon={faSearch} className='font-search' style={{fontSize:'25px', color:'#fff',
          position:'absolute', width: '25px', fontWeight:'lighter',
          top:'28px', right:'14%', cursor:'pointer'}} />
        
        </li>
        
      </div>
      <div className="mobile-menu" onClick={handleClick}>
        <div className="menu-icon">
          <Hamburger easing="ease-in" style={{ display: "none" }} />
        </div>
      </div>
      <style jsx>
        {`
          .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            z-index: 999 !important;
            padding: 30px 30px;
            font-family: "Poppins", sans-serif;
            height: 80px;
          }
          header:hover {
            z-index: 1001 !important;
            background: #fff !important;
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
            display: grid;
            grid-template-columns: repeat(6, auto);
            grid-gap: 30px;
            list-style-type: none;
          }
          .mobile-option {
            display: none;
          }
          .font-search{
            display:block;
          }
          .contact-btn {
            border: none;
            outline: none;
            margin-left: 160px;
            padding: 10px 35px;
            border-radius: 20px;
            background: #fff;
            color: #000;
            font-size: 14px;
            font-weight: bold;
            transition: all 0.5s ease;
          }
          .contact-btn:hover {
            background: #00caf7;
            border: none;
            color: #fff;
          }
          .option :hover {
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
          .header .nav-link {
            text-decoration: none !important;
            color: #fff;
            transition: all 0.5s ease-in-out;
            padding-top: 22px;
            font-size: 14px !important;
          }
          .header .nav-link:hover {
            font-weight: bold;
            color: #00d747 !important;
            border-top: 3px solid #00d747;
          }
        
          @media screen and (max-width: 992px) {
            .header {
              padding: 0px 10px;
            }
            .logo {
              width: 45px;
              height: 45px;
            }
            .logo-container img{
              background-image: url('/images/logo.svg');
            }
            .display{
              display:none !important;
            }
            .nav-options {
              display: flex;
              width: 100%;
              z-index: 6;
              position: absolute;
              top: 70px;
              left: -100%;
              opacity: 0;
              transition: all 0.5s ease;
              flex-direction: column;
              list-style-type: none;
              grid-gap: 0px;
            }

            .nav-link {
              color: black !important;
            }
            .nav-options.active {
              background: #fff;
              left: 0;
              opacity: 1;
              color: #000 !important;
              height: 55vh;
              transition: all 0.5s ease;
              z-index: 10 !important;
              padding-left: 0px;
            }
            .contact-btn {
              margin-left: 0;
              background-color: #000;
              color: #fff;
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
          
            .mobile-menu {
              display: block !important;
              z-index: 1000;
              color:#000;
            }
            .font-search{
              display:none !important;
            }
          }
          .mobile-menu {
            display: none;
          }
       
          @media screen and (max-width: 360px) {
            .mobile-menu {
              display: block !important;
              z-index: 1000 !important;
              color: #000 !important;
            }
           
            .contact-btn {
              padding: 5px 15px;
              font-size: 12px;
              background: #000;
              color: #fff;
              margin-left: 50px;
            }
            .nav-link {
              color: #000 !important;
              font-weight: bold;
            }
            .font-search{
              display: none !important;
            }
          }
          
        `}
      </style>
    </div>
  );
};
