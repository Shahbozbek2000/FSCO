import hamburgerStyles from '../styles/HamburgerMenu.module.css'

export function HamburgerMenu() {
    return(
        <nav className={hamburgerStyles.nav}>
        <input type="checkbox" id={hamburgerStyles.nav_check} />
        <div className={hamburgerStyles.nav_header}>
          <div className={hamburgerStyles.nav_title}>
            JoGeek
          </div>
        </div>
        <div className={hamburgerStyles.nav_btn}>
          <label for={hamburgerStyles.nav_check}>
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        
        <div className={hamburgerStyles.nav_links}>
          <a href="//github.io/jo_geek" target="_blank">Home</a>
          <a href="http://stackoverflow.com/users/4084003/" target="_blank">About Us</a>
          <a href="https://in.linkedin.com/in/jonesvinothjoseph" target="_blank">Contact Us</a>
          <a href="https://codepen.io/jo_Geek/" target="_blank">Case Studies</a>
          <a href="https://jsfiddle.net/user/jo_Geek/" target="_blank">Blog</a>
        </div>
      </nav>

    )
}

