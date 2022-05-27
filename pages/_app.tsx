import { AnimatePresence, motion } from 'framer-motion';
import { AppProps } from 'next/app';
import '../styles/globals.scss';
import '../styles/fonts.scss';
import { useRouter, withRouter } from 'next/router';
import { useEffect } from 'react';

import ReactGA from 'react-ga';
const TRACKING_ID = 'UA-230128226-1';

ReactGA.initialize(TRACKING_ID);

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  });

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          initial='initial'
          animate='animate'
          exit='exit'
          key={router.route}
        >
          <Component {...pageProps} key={router.route} />
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default withRouter(MyApp);
