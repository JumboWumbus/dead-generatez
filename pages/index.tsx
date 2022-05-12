import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import DeadgeneratezTypeLogo from "../components/svg/deadgeneratezTypeLogo";
import EyeFollow from "../components/eyeFollow";
import NavBar from "../components/navBar";
import TeamSection from "../components/teamSection";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
    return (
        <html lang="en">
            <div className={styles.pageContainer}>
                <Head>
                    <meta charSet="utf-8" />
                    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta name="theme-color" content="#000000" />
        
                    <title>DeadGeneratez</title>
                    <meta name="description" content="6 Feet underground" />
                    <link
                        rel="apple-touch-icon"
                        sizes="180x180"
                        href="/images/apple-touch-icon.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="32x32"
                        href="/images/favicon-32x32.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="16x16"
                        href="/images/favicon-16x16.png"
                    />
                </Head>

                <NavBar />

                {/*<div className={styles.heroContainer}>
        
        <div className={styles.heroTopCover}>
          <h1>DeadGuy</h1>
        </div>
          <EyeFollow />
        <div className={styles.heroBottomCover}></div>
  </div>*/}

                <main className={styles.mainContainer}>
                    <DeadgeneratezTypeLogo fill="#ffffff" className={styles.typeLogoHero} />

                    <EyeFollow />

                    <div className={styles.boneHeader}>
                        <h1 className={styles.heading}>Boney Heading</h1>
                    </div>

                    <TeamSection />
                </main>

                <footer className={styles.footer}></footer>
            </div>
        </html>
    );
};

export default Home;
