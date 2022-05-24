import Link from "next/link";
import styles from "../styles/navbar.module.scss";
import DiscordLogo from "./svg/discordIcon";
import HamburgerIconClose from "./svg/HamburgerIcon_Close";
import HamburgerIconOpen from "./svg/HamburgerIcon_Open";



import Logo from "./svg/Logo";

import TwitterIcon from "./svg/twitterIcon";
import MagicEdenIcon from "./svg/magicEdenIcon";
import { useEffect, useState } from "react";


export default function NavBar() {

    useEffect(() => {
        const hash = window.location.hash;
        
        if(hash){
            setTimeout(()=> {
                document.querySelector(hash)!.scrollIntoView({ behavior: "smooth" })
              }, 100)
        }
      })

      const [checked, setChecked] = useState(false);

      const handleChange = () => {
        setChecked(!checked);
      };

    return (
        <nav className={styles.navBar}>
            <div className={styles.navContainer}>
                <div className={styles.mobileNavigation}>
                    <input
                        aria-labelledby="hamburger"
                        id="page-nav-toggle"
                        className={styles.mainNavigationToggle}
                        type="checkbox"

                        checked={checked}
                        onChange={handleChange}
                    />
                    <label id="hamburger" onClick={handleChange}>
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
                                    <a onClick={handleChange}>Home</a>
                                </Link>
                            </li>
                            <li>
                                
                                <Link href="/#about-us" replace>
                                    <a onClick={handleChange}>About Us</a>
                                </Link>
                                
                                
                            </li>
                            <li>
                                <Link href="/#the-team">
                                    <a onClick={handleChange}>Our Team</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/mint">
                                    <a onClick={handleChange}>Mint</a>
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
                            <li className={styles.linkHoverEffect}>
                                <Link href="/">HOME</Link>
                            </li>
                            <li className={styles.linkHoverEffect}>
                                <Link href="/#about-us">ABOUT US</Link>
                            </li>
                            <li className={styles.linkHoverEffect}>
                                <Link href="/#the-team">OUR TEAM</Link>
                            </li>
                            <li className={styles.linkHoverEffect}>
                                <Link href="/mint">MINT</Link>
                            </li>
                        </ul>
                    </div>

                    <div className={styles.socialIcons}>
                        <div className={`${styles.theIcon} ${styles.iconHoverEffect}`}>
                            <a href="" target="_blank" rel="noopener noreferrer">
                            <DiscordLogo
                                skullColor={"#ffffff"}
                                eyeColor={"#000000"}
                                width={"28px"}
                                height={"28px"}
                            />
                            </a>
                        </div>

                        <div className={`${styles.theIcon} ${styles.iconHoverEffect}`}>
                        <a href="https://twitter.com/DeadGeneratez" target="_blank" rel="noopener noreferrer">
                            <TwitterIcon
                                bodyColor={"#ffffff"}
                                eyeColor={"#000000"}
                                fill="#ffffff"
                                width={"28px"}
                                height={"28px"}
                            />
                        </a>
                        </div>
                        <div className={`${styles.theIcon} ${styles.iconHoverEffect}`}>
                            <MagicEdenIcon
                                rectColor={"#ffffff"}
                                fontColor={"#000000"}
                                width={"28px"}
                                height={"28px"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
