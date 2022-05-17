import Link from "next/link";
import styles from "../styles/navbar.module.scss";
import DiscordLogo from "./svg/discordIcon";
import HamburgerIconClose from "./svg/HamburgerIcon_Close";
import HamburgerIconOpen from "./svg/HamburgerIcon_Open";
import InstagramIcon from "./svg/instaIcon";
import Logo from "./svg/Logo";

import TwitterIcon from "./svg/twitterIcon";

export default function NavBar() {
  return (
    <nav className={styles.navBar}>
      <div className={styles.navContainer}>
        

<div className={styles.mobileNavigation}>
<input
          id="page-nav-toggle"
          className={styles.mainNavigationToggle}
          type="checkbox"
        />
        <label htmlFor="page-nav-toggle">
          <svg className={styles.iconMenuToggle} viewBox="0 0 60 30">
            <g className={styles.iconGroup}>
              <g className={styles.iconMenu}>
                <HamburgerIconOpen fill="#ffffff" />
              </g>
              <g className={styles.iconClose}>
                <HamburgerIconClose fill="#ffffff" />
              </g>
            </g>
          </svg>
        </label>

        <nav className={styles.mainNavigation}>
          <ul>
            <li>
            <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
            <Link href="/about">
                <a>About Us</a>
              </Link>
            </li>
            <li>
            <Link href="/team">
                <a>Our Team</a>
              </Link>
            </li>
            <li>
              <Link href="/mint">
                <a>Mint</a>
              </Link>
            </li>
          </ul>
        </nav>
</div>

<div className={styles.desktopNavigation}>
<Link href="/" passHref>
          <Logo
            skull="#ffffff"
            eyes="#000000"
            width={"75px"}
            className={styles.navLogo}
          />
        </Link>
<div className={styles.navLinks}>
          <ul className={styles.navItemWrapper}>
            <li>
              <Link href="/">HOME</Link>
            </li>
            <li>
              <Link href="/about">ABOUT US</Link>
            </li>
            <li>
              <Link href="/team">OUR TEAM</Link>
            </li>
            <li>
              <Link href="/mint">MINT</Link>
            </li>
          </ul>
        </div>

        <div className={styles.socialIcons}>
          <div className={styles.theIcon}>
            <DiscordLogo fill="#ffffff" width={"28px"} height={"28px"} />
          </div>

          <div className={styles.theIcon}>
            <TwitterIcon fill="#ffffff" width={"28px"} height={"28px"} />
          </div>
          <div className={styles.theIcon}>
            <InstagramIcon fill="#ffffff" width={"28px"} height={"28px"} />
          </div>
        </div>
</div>

       
      </div>
    </nav>
  );
}
