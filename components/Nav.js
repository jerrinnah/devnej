import Link from "next/link";
import navStyles from "../styles/Nav.module.css";
import { FaBars } from 'react-icons/fa';

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <div className={navStyles.navLeft}>
        <ul>
          <li>
            <Link href="/">WORKS </Link>
          </li>
          <li>
            <Link href="/about">ABOUT ME</Link>
          </li>
        </ul>
      </div>

      <div className="nav__logo">
       <img className={navStyles.iconLogo}  src="../jn.png" />
     
      </div>
      <div className={navStyles.navRight}>
        <img className={navStyles.icon} src="../regular/twitter.svg" />
        <img className={navStyles.icon} src="../regular/github.svg" />
        <img className={navStyles.icon} src="../regular/instagram.svg" />
      </div>
      <i className={navStyles.iconSVG}> <FaBars/></i>
    </nav>
  );
};

export default Nav;
