import { NavLink, useNavigate } from "react-router-dom";
import styles from "./navbar.module.scss";
import { links } from "../../data";
import { useState } from "react";

// Navbar component
const Navbar = () => {
  const navigate = useNavigate();
  // Toggle mobile navbar
  const [menu, setMenu] = useState(false);

  const toggleNav = () => {
    setMenu((e) => !e);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <div className={styles.leftSide}>
          <img
            onClick={() => navigate("/")}
            className={styles.logo}
            src="./logo.png"
            alt="Big metall logo"
          />

          <ul
            className={`${styles.links} ${
              menu && "visible pointer-events-auto translate-y-0"
            }`}
          >
            {links.map((link, id) => (
              <li onClick={() => setMenu(false)} key={id}>
                <NavLink to={link.path}>{link.title}</NavLink>
              </li>
            ))}
            <img width={38} src="./ru.svg" alt="ru" />
            <li className={styles.mobile}>
              <a href="tel:+998990000000">+998 99 000 00 00</a>
            </li>
          </ul>
        </div>

        <div className={styles.rightSide}>
          <a href="tel:+998990000000">+998 99 000 00 00</a>

          <i className="fa-solid fa-calculator"></i>
        </div>

        <div onClick={toggleNav} className={styles.menu}>
          {!menu ? (
            <i className="fa-solid fa-bars"></i>
          ) : (
            <i className="fa-solid fa-xmark"></i>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
