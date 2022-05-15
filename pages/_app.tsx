import { AnimatePresence, motion } from "framer-motion";
import { AppProps } from "next/app";
import "../styles/globals.scss";
import "../styles/fonts.scss";
import { ParallaxProvider } from "react-scroll-parallax";

function MyApp({ Component, pageProps, router }: AppProps) {
    return (
        <>
            <ParallaxProvider>
                <AnimatePresence exitBeforeEnter>
                    <motion.div initial="initial" animate="animate" exit="exit" key={router.route}>
                        <Component {...pageProps} key={router.route} />
                    </motion.div>
                </AnimatePresence>
            </ParallaxProvider>
        </>
    );
}

export default MyApp;
