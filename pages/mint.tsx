import type { NextPage } from "next";
import Head from "next/head";
import NavBar from "../components/navBar";
import styles from "../styles/mintPage.module.scss";
import Footer from "../components/footer";



const MintPage: NextPage = () => {
    return (
        <div className={styles.pageContainer}>
            <Head>
                <meta charSet="utf-8" />
                <link rel="manifest" href="/manifest.json" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />

                <title>Mint page</title>
                <meta name="description" content="Where degenz are born" />
                <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
            </Head>

            <NavBar />

           

            <main className={styles.mainContainer}>

                <h1 className={styles.mintSoon}>Minting coming soon...</h1>
                <p className={styles.mintSoonSubtext}>{`In the meantime you could check our twitter for updates! Well, if you don’t want to do that,
                 I guess you could refresh this page non-stop until there’s a button you can press!`}</p>

                
               
                <footer className={styles.pushToBottom}>
                    <Footer />
                </footer>
            </main>
        </div>
    );
};

export default MintPage;
