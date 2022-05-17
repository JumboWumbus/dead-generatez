import TwitterIcon from "../svg/twitterIcon";
import LinkedInLogo from "../svg/linkedInIcon";
import styles from "../../styles/teamSection.module.scss";
import TempPfp from "../svg/tempPfp";

type Props = {
    children?: React.ReactNode;
    name?: string;
    title?: string;
    twitter?: string;
    linkedin?: string;
    linkedinUrl?: string;
};

export const TeamCard = ({ children, name, title, twitter, linkedin, linkedinUrl }: Props) => {
    return (
        <div className={styles.memberContainer}>
            <div className={styles.memberImageContainer}>
                <TempPfp className={styles.memberImage}/>
                
            </div>
            <div className={styles.memberInfoContainer}>
                <div className={styles.memberTextContainer}>
                    <div className={styles.memberName}>{name}</div>
                    <h2 className={styles.memberTitle}>{title}</h2>
                    <div className={styles.memberParagraph}>{children}</div>
                </div>

                <div className={styles.socials}>
                    <div className={styles.theSocial}>
                        <TwitterIcon fill="#EAEAEA" />
                        <p className={styles.socialText}>{twitter}</p>
                    </div>

                    <div className={styles.theSocial}>
                        <LinkedInLogo fill="#EAEAEA" />
                        <a href={linkedinUrl} className={styles.socialText}>{linkedin}</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamCard;
