import styles from "../styles/footer.module.scss";
import DiscordLogo from "./svg/discordIcon";
import MagicEdenIcon from "./svg/magicEdenIcon";
import TwitterIcon from "./svg/twitterIcon";

export default function Footer() {
    

    return (
    <>
        <div>
               
        <div className={styles.socialIcons}>
          <div className={`${styles.theIcon} ${styles.iconHoverEffect}`}>
          <a href="" target="_blank" rel="noopener noreferrer">
            <DiscordLogo skullColor={"#ffffff"} eyeColor={"#000000"} width={"40px"} height={"40px"} />
          </a>
          </div>

          <div className={`${styles.theIcon} ${styles.iconHoverEffect}`}>
          <a href="https://twitter.com/DeadGeneratez" target="_blank" rel="noopener noreferrer">
            <TwitterIcon bodyColor={"#ffffff"} eyeColor={"#000000"} width={"40px"} height={"40px"} />
          </a>
          </div>
          <div className={`${styles.theIcon} ${styles.iconHoverEffect}`}>
            <MagicEdenIcon rectColor={"#ffffff"} fontColor={"#000000"} width={"40px"} height={"40px"} />
          </div>
        </div>

        <p className={styles.smallType}>If you want to take part - keep an eye on our twitter!</p>
        
        </div>
    </>
    );
}