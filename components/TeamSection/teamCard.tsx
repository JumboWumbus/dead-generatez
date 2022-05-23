import TwitterIcon from "../svg/twitterIcon";
import LinkedInLogo from "../svg/linkedInIcon";
import styles from "../../styles/teamSection.module.scss";
import TempPfp from "../svg/tempPfp";

type Props = {
    children?: React.ReactNode;
    name?: string;
    title?: string;
    twitter?: string;
    twitterUrl?:string;
    linkedin?: string;
    linkedinUrl?: string;
    customID?: string;
};

export const TeamCard = ({ children, name, title, twitter, twitterUrl, linkedin, linkedinUrl, customID }: Props) => {
    return (
        <div className={`${styles.memberContainer} ${customID}`}>
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
                        <TwitterIcon bodyColor={"#ffffff"} eyeColor={"#000000"} width={"20px"}/>
                        <a href={twitterUrl} target="_blank" rel="noopener noreferrer" className={styles.socialText}>{twitter}</a>
                    </div>

                    <div className={styles.theSocial}>
                        <LinkedInLogo rectColor={"#ffffff"} fontColor={"#000000"} width={"18px"}/>
                        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className={styles.socialText}>{linkedin}</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamCard;
