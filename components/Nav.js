import Link from "next/link";
import navStyles from "../styles/Nav.module.css";
import { FaBeer } from 'react-icons/fa';

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <div className={navStyles.navLeft}>
        <ul>
          <li>
            <Link href="/">WORKS </Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </div>

      <div className="nav__logo">
        <h3>Logo </h3>
     
      </div>
      <div className={navStyles.navRight}>
        <img className={navStyles.icon} src="../regular/twitter.svg" />
        <img className={navStyles.icon} src="../regular/github.svg" />
        <img className={navStyles.icon} src="../regular/instagram.svg" />
      </div>
    </nav>
  );
};

export default Nav;
