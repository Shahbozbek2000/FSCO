import React, { useState, Component } from "react";
import { Fade as Hamburger } from "hamburger-react";
import Link from "next/link"
import SearchIcon from '@material-ui/icons/Search'
import navStyles from '../styles/Navbar.module.css'


export const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
 

  const closeMobileMenu = () => setClick(false);

 
  return (
    <div className='header'>
      <div className="logo-nav">
        <div className="logo-container">
          <Link href="/">
            <a>
            <img src='/images/logo.png' alt='logo'
            style={{width:'120px', position:'absolute',   zIndex:'1001'}} className={navStyles.img_1}  />
            <img src='/images/logo.svg' className={navStyles.img_2} style={{width:'120px', zIndex:'1002'}}  />
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
            <Submenu/>
          </li>
          <li className="option" onClick={closeMobileMenu}
           >
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
        
      
        
      </div>
      <SearchIcon className='font_search'
      style={{color:'#fff', cursor:'pointer',  fontSize: '35px', position:'absolute', right: '14%'}} />
 
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
            position:relative;
            align-items: center;
            z-index: 1000 !important;
            padding: 30px 30px;
            font-family: "Poppins", sans-serif;
            transition: all .7s ease-in-out;
            height: 80px;
          }
          .logo-1{
            position: absolute;
            z-index: 1000 !important;
          }
         
          .header:hover {
           z-index: 1000 !important;
            background: #fff !important; }
          .header:hover .nav-link{
            color: #000;
            font-weight: bold; }
          .header:hover .contact-btn{
            color: #fff;
            background: #000; }
          .header:hover .img_1{
            position: absolute;
            z-index: 1002;
          }
          .header:hover .img_2{
            position:absolute;
            z-index:1003;
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
          .nav-link:hover .nav__submenu{
            display:block !important;
          }
          @media screen and (max-width: 992px) {
            .header {
              padding: 0px 10px;
            }
            .logo {
              width: 45px;
              height: 45px;
            }
            .logo-container {
              background-image: url('/images/logo.svg') !important;
              width: 120px;
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
          @media only screen and (max-width: 310px){
            .contact-btn{
              padding-right: 40px;
            }
          }
          @media only screen and (max-width: 1024px){
            .contact-btn{
              padding: 5px 15px;
              font-size:12px;
            }
          }
          
          
        `}
      </style>
    </div>
  );
};

class Submenu extends Component {
  render() {
    return (
      <ul className="nav__submenu">
        <li className="nav__submenu_item ">
        <Link href='/services'>
          <a>Mobile development</a>
        </Link>
        </li>
        <li className="nav__submenu_item ">
        <Link href='/services/web_development'>
          <a>Web Development</a>
        </Link>
        </li>
        <li className="nav__submenu_item ">
        <Link href='/services/ux-ui-design'>
          <a>UX/UI design</a>
        </Link>
        </li>
        <style jsx>
          {
            `
            .nav__submenu{
              position: absolute;
              opacity: 0;
              top: 80px;
              padding: 10px;
              display:block;
              background:#fff;
              transition: all .5s;
              border-bottom-left-radius: 5px;
              border-bottom-right-radius: 5px; }
            .nav__submenu:hover{
              opacity: 1;
            }
            .nav__submenu_item{
              list-style: none;
              transition: all .5s;
            }
            
            .nav__submenu_item a {
              color: #000;
              font-size:14px;
              font-weight: bold;
              text-decoration: none;
              cursor: pointer;
            }
            .nav__submenu_item a:hover{
            color: #00D747;
            }
          
            `
          }
        </style>
      </ul>
    )
  }
}