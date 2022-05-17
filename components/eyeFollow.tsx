import Lottie from "react-lottie";

import styles from "../styles/skullFollow.module.scss";
import skullAnim from "../animations/SkullAnimWhite.json";

export default function EyeFollow() {
    const skullOptions = {
        loop: true,
        autoplay: true,
        animationData: skullAnim,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    return (
        <>
            <div className={styles.skullContainer}>
                <div className={styles.skull}>
                    <Lottie options={skullOptions} isClickToPauseDisabled={true} />
                </div>
            </div>
        </>
    );
}
