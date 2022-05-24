import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import DeadgeneratezTypeLogo from "../components/svg/deadgeneratezTypeLogo";
import EyeFollow from "../components/eyeFollow";
import NavBar from "../components/navBar";
import TeamSection from "../components/TeamSection";
import styles from "../styles/Home.module.scss";
import Footer from "../components/footer";
import Roadmap from "../components/roadmap";
import RoadmapTape from "../components/svg/roadmapTape";

const Home: NextPage = () => {
    return (
        <div className={styles.pageContainer}>
            <Head>
                <meta charSet="utf-8" />
                <link rel="manifest" href="/manifest.json" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />

                <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />

                
                <title>Deadgeneratez</title>
                <meta name="title" content="Deadgeneratez"/>
                <meta name="description" content="6 feet under the metaverse"/>


                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://deadgeneratez.io/"/>
                <meta property="og:title" content="Deadgeneratez"/>
                <meta property="og:description" content="6 feet under the metaverse"/>
                <meta property="og:image" content="https://deadgeneratez.io/images/metaImage.png"/>
                

                <meta property="twitter:card" content="summary_large_image"/>
                <meta property="twitter:url" content="https://deadgeneratez.io/"/>
                <meta property="twitter:title" content="Deadgeneratez"/>
                <meta property="twitter:description" content="6 feet under the metaverse"/>
                <meta property="twitter:image" content="https://deadgeneratez.io/images/metaImage.png"/>

            </Head>

            <NavBar />

            {/*
                  <div className={styles.heroContainer}>
                    <div className={styles.heroTopCover}>
                      <h1>DeadGuy</h1>
                    </div>
                      <EyeFollow />
                    <div className={styles.heroBottomCover}></div>
                  </div>
                */}

            <main className={styles.mainContainer}>
                <DeadgeneratezTypeLogo fill="#ffffff" className={styles.typeLogoHero} />

                <EyeFollow />

                <div className={styles.boneHeader} >
                    <h1 className={styles.heading} id="about-us">The Degen Journey</h1>
                </div>

                <Roadmap />

                <div className={styles.tapeContainer}>
                    <div className={styles.tape}>
                        <RoadmapTape />
                    </div>
                </div>

                <TeamSection />

                <footer className={styles.footer}>
                    <Footer />
                </footer>
            </main>
        </div>
    );
};

export default Home;
