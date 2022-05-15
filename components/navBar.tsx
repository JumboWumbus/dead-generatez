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
                <Link href="/" passHref>
                    <Logo
                        skull="#ffffff"
                        eyes="#000000"
                        width={"75px"}
                        className={styles.navLogo}
                    />
                </Link>

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
                            <a href="#0">Home</a>
                        </li>
                        <li>
                            <a href="#0">About Us</a>
                        </li>
                        <li>
                            <a href="#0">Our Team</a>
                        </li>
                        <li>
                            <a href="#0">Mint</a>
                        </li>
                    </ul>
                </nav>

                <div className={styles.navLinks}>
                    <ul className={styles.navItemWrapper}>
                        <li>
                            <Link href="/">HOME</Link>
                        </li>
                        <li>
                            <Link href="/client">ABOUT US</Link>
                        </li>
                        <li>
                            <Link href="/builder">OUR TEAM</Link>
                        </li>
                        <li>
                            <Link href="/team">MINT</Link>
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
        </nav>
    );
}
