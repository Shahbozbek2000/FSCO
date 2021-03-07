import Link from "next/link";
import footerStyles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={footerStyles.footer}>
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-12 col-lg-3 col-12 col-xs-12">
            <div className="footer-logo">
              <img
                src="/images/logo.svg"
                alt="logo-footer"
                style={{ width: "150px" }}
              />
            </div>
            <ul className={footerStyles.List_item}>
              <li>
                <Link href="/">
                  <a>gulluinc@gmail.com</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>202.277.3894</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-12 col-12 col-xs-12">
            <div className={footerStyles.lists}>
              <li className={footerStyles.lists_name}>Quick Links</li>
            </div>
            <ul className={footerStyles.List_item}>
              <li>
                <Link href="/">
                  <a>How it Works</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Guarantee</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Security</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Report blog</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Pricing</a>
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-12 col-12">
            <div className={footerStyles.lists}>
              <li className={footerStyles.lists_name}>About Us </li>
            </div>
            <ul className={footerStyles.List_item}>
              <li>
                <Link href="/">
                  <a>About Singleton</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Jobs</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Team</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Testimontials</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Blog</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-12 col-12">
            <div className={footerStyles.lists}>
              <li className={footerStyles.lists_name}>Subscribe Us </li>
            </div>
            <form className={footerStyles.form}>
               <input type='text' className={footerStyles.input} placeholder='Enter your mail' />
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}
