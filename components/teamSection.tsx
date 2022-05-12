import styles from "../styles/teamSection.module.scss";
import LinkedInLogo from "./svg/linkedInIcon";
import TwitterIcon from "./svg/twitterIcon";

export default function TeamSection() {
    return (
        <div className={styles.teamSection}>
            <div className={styles.memberContainer}>
                <img alt="placeholder" className={styles.memberImage} src="./images/place.jpeg" />
                <div className={styles.memberInfoContainer}>
                    <h1 className={styles.memberName}>Massimo Maggiolo</h1>
                    <h2 className={styles.memberTitle}>Founder/Lead artist</h2>
                    <p className={styles.memberParagraph}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, id
                        perspiciatis ducimus itaque tenetur laborum quaerat. Debitis impedit
                        blanditiis rerum magnam repudiandae sunt, voluptatem corporis exercitationem
                        necessitatibus maxime qui accusantium, iure veniam sint natus autem!
                    </p>

                    <div className={styles.socials}>
                        <div className={styles.theSocial}>
                            <TwitterIcon fill="#000000" />
                            <p className={styles.socialText}>@aesthetica_s</p>
                        </div>

                        <div className={styles.theSocial}>
                            <LinkedInLogo fill="#000000" />
                            <p className={styles.socialText}>placeholder</p>
                        </div>
                    </div>
                </div>
                <div></div>
                <div></div>
            </div>

            <div className={styles.memberContainer}>
                <img alt="placeholder" className={styles.memberImage} src="./images/place.jpeg" />
                <div className={styles.memberInfoContainer}>
                    <h1 className={styles.memberName}>Viktor Karlsson</h1>
                    <h2 className={styles.memberTitle}>Founder/Lead artist</h2>
                    <p className={styles.memberParagraph}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, id
                        perspiciatis ducimus itaque tenetur laborum quaerat. Debitis impedit
                        blanditiis rerum magnam repudiandae sunt, voluptatem corporis exercitationem
                        necessitatibus maxime qui accusantium, iure veniam sint natus autem!
                    </p>

                    <div className={styles.socials}>
                        <div className={styles.theSocial}>
                            <TwitterIcon fill="#000000" />
                            <p className={styles.socialText}>@aesthetica_s</p>
                        </div>

                        <div className={styles.theSocial}>
                            <LinkedInLogo fill="#000000" />
                            <p className={styles.socialText}>placeholder</p>
                        </div>
                    </div>
                </div>
                <div></div>
                <div></div>
            </div>

            <div className={styles.memberContainer}>
                <img alt="member-image" className={styles.memberImage} src="./images/place.jpeg" />
                <div className={styles.memberInfoContainer}>
                    <h1 className={styles.memberName}>Brad Weidner</h1>
                    <h2 className={styles.memberTitle}>Community manager/Business Guru</h2>
                    <p className={styles.memberParagraph}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, id
                        perspiciatis ducimus itaque tenetur laborum quaerat. Debitis impedit
                        blanditiis rerum magnam repudiandae sunt, voluptatem corporis exercitationem
                        necessitatibus maxime qui accusantium, iure veniam sint natus autem!
                    </p>

                    <div className={styles.socials}>
                        <div className={styles.theSocial}>
                            <TwitterIcon fill="#000000" />
                            <p className={styles.socialText}>@SocietyGremlin</p>
                        </div>

                        <div className={styles.theSocial}>
                            <LinkedInLogo fill="#000000" />
                            <p className={styles.socialText}>placeholder</p>
                        </div>
                    </div>
                </div>
                <div></div>
                <div></div>
            </div>

            <div className={styles.memberContainer}>
                <img alt="placeholder" className={styles.memberImage} src="./images/place.jpeg" />
                <div className={styles.memberInfoContainer}>
                    <h1 className={styles.memberName}>Ben Hammond</h1>
                    <h2 className={styles.memberTitle}>Web developer/Graphic </h2>
                    <p className={styles.memberParagraph}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, id
                        perspiciatis ducimus itaque tenetur laborum quaerat. Debitis impedit
                        blanditiis rerum magnam repudiandae sunt, voluptatem corporis exercitationem
                        necessitatibus maxime qui accusantium, iure veniam sint natus autem!
                    </p>

                    <div className={styles.socials}>
                        <div className={styles.theSocial}>
                            <TwitterIcon fill="#000000" />
                            <p className={styles.socialText}>@SocietyGremlin</p>
                        </div>

                        <div className={styles.theSocial}>
                            <LinkedInLogo fill="#000000" />
                            <p className={styles.socialText}>placeholder</p>
                        </div>
                    </div>
                </div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}
