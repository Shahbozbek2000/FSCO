import Link from "next/link";
import footerStyles from "../styles/Footer.module.css"
import HomeIcon from "@material-ui/icons/Home"
import LocationOnIcon from '@material-ui/icons/LocationOn'
import TwitterIcon from '@material-ui/icons/Twitter'
import TelegramIcon from '@material-ui/icons/Telegram'
import InstagramIcon from '@material-ui/icons/Instagram'

export default function Footer() {
  return (
    <footer className={footerStyles.footer}>
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-12 col-lg-4 col-12 col-xs-12">
            <div className="footer-logo">
              <img
                src="/images/logo.svg"
                alt="logo-footer"
                style={{ width: "150px" }}
              />
            </div>
            <ul className={footerStyles.List_item}>
              <li className={footerStyles.left_item}>
                <Link href="/">
                  <a>
                    {" "}
                    <HomeIcon />
                    <b> Address</b>
                  </a>
                </Link>
              </li>
              <li className={footerStyles.left_item}>
                <Link href='/'>
                  <a>
                  <LocationOnIcon/>
                  Yashnobod tumani Maxtumquli 2-tor ko'chasi
                  </a>
                </Link>
              </li>
              
            </ul>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 col-12 col-xs-12">
            <div className={footerStyles.lists}>
              
            </div>
            <ul className={footerStyles.List_item}>
            <li className={footerStyles.lists_name}>Company</li>
              <li>
                <Link href="/">
                  <a>About Us</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Services</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>How It Work</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Case Studies</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Careers</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Contact Us</a>
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-12 col-12">
            <div className={footerStyles.lists}>
              
            </div>
            <ul className={footerStyles.List_item}>
            <li className={footerStyles.lists_name}>Blog News </li>
              <li>
                <Link href="/">
                  <a>Trends Blog</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>
                    <b>
                      Top Blockchain Business Ideas with Huge Potential in 2021
                    </b>
                  </a>
                </Link>
              </li>
              <li>
                <hr />
                <Link href="/">
                  <a>R&D Blog</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a><b>How to Create a Chatbot to Fit Your Needs and Budget </b></a>
                </Link>
              </li>
            
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
