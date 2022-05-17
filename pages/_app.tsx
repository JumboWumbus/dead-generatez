import { AnimatePresence, motion } from "framer-motion";
import { AppProps } from "next/app";
import "../styles/globals.scss";
import "../styles/fonts.scss";

function MyApp({ Component, pageProps, router }: AppProps) {
    return (
        <>
            <AnimatePresence exitBeforeEnter>
                <motion.div initial="initial" animate="animate" exit="exit" key={router.route}>
                    <Component {...pageProps} key={router.route} />
                </motion.div>
            </AnimatePresence>
        </>
    );
}

export default MyApp;
