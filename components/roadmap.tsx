import styles from "../styles/roadmap.module.scss";
import CommunitySkulls from "./svg/communitySkulls";
import DeadgenVerse from "./svg/deadgenverse";
import DegenVerse from "./svg/deadgenverse";


export default function Roadmap() {
    

    return (
    <>
    <div className={styles.roadmapContainer}>
    <section className={styles.roadmap}>

    <div className={styles.roadmapCenterLine}></div>
    <div className={styles.roadmapTimeline}>


      <div className={styles.timeLineSection}>
        <div className={styles.contentLeftContainer}>
          <div className={styles.contentLeft}>
            <p>{`What is...`} <br/><span className={styles.bodyHeading}>{"Deadgeneratez?"}</span> <br className={styles.customBreak}/> {`We start with a collection of 6666 randomly
            generated and stylistically curated 3D-NFTs that will live on the Solana blockchain. DeadGeneratez holders will get access to exclusive events, such as raffles, uniquely
            structured collabs, giveaways, discounts on physical assets and more. #DGENZ are stylish and cool. No body will disagree! (Hah, get it?)`}</p>
          </div>
        
        </div>
        <div className={styles.contentRightContainer}>
          <div className={styles.contentRight}>
            <img alt="squid-sneek-peek" src={"./images/SquidSneakPeek.webp"} className={styles.squidImg}/>
            <p className={styles.tinyText}>{`Wen sneak peak?`}</p>
          </div>
          
        </div>
        <div className={styles.metaDate}>
         
        </div>
      </div>


      <div className={`${styles.timeLineSection} ${styles.reverseOrder}`}>
        <div className={styles.contentLeftContainer}>
          <div className={styles.contentLeft}>
            <CommunitySkulls/>

          </div>
          
        </div>
        <div className={`${styles.contentRightContainer}`}>
          <div className={styles.contentRight}>
            <p><span className={styles.bodyHeading}>{`Community comes first`}</span><br className={styles.customBreak}/>{`We are so much more than just another NFT project.
            We want to build and focus on the DeadGeneratez community and all the members in it by promoting, collaborate, share and bring forward other projects and artists.
            Got a problem with that!?`}</p>
          </div>
          
        </div>
        <div className={styles.metaDate}>
          
        </div>
      </div>


      <div className={styles.timeLineSection}>
        <div className={styles.contentLeftContainer}>
          <div className={styles.contentLeft}>
            <p><span className={styles.bodyHeading}>{`DeadGenVerse?`}</span></p>
          </div>
          
        </div>
        <div className={styles.contentRightContainer}>
          <div className={styles.contentRight}>
            <DeadgenVerse/>
          </div>
          
        </div>
        <div className={styles.metaDate}>
          
        </div>
      </div>

    </div>

  </section>
        
        
        </div>
    </>
    );
}