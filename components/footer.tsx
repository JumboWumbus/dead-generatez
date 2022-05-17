import styles from "../styles/footer.module.scss";
import DiscordLogo from "./svg/discordIcon";
import MagicEdenIcon from "./svg/magicEdenIcon";
import TwitterIcon from "./svg/twitterIcon";

export default function Footer() {
    

    return (
    <>
        <div>
               
        <div className={styles.socialIcons}>
          <div className={styles.theIcon}>
            <DiscordLogo skullColor={"#ffffff"} eyeColor={"#000000"} width={"40px"} height={"40px"} />
          </div>

          <div className={styles.theIcon}>
            <TwitterIcon bodyColor={"#ffffff"} eyeColor={"#000000"} width={"40px"} height={"40px"} />
          </div>
          <div className={styles.theIcon}>
            <MagicEdenIcon rectColor={"#ffffff"} fontColor={"#000000"} width={"40px"} height={"40px"} />
          </div>
        </div>

        <p className={styles.smallType}>If you want to take part - come join our discord.</p>
        
        </div>
    </>
    );
}