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
            <p>{`What is...`} <br/><span className={styles.bodyHeading}>{"Deadgeneratez?"}</span> <br className={styles.customBreak}/> {`As the year comes to a close we'll be serving up some SKULLY MADNESS for the metaverse.
            Yup these skully friends are everything the invisible friends aren't. That is smelly, dirty and nihilistic. They still belong to the same universe, how? Stay tuned!`}</p>
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
            <p><span className={styles.bodyHeading}>{`Community comes first`}</span><br className={styles.customBreak}/>{`We are so much more than just another NFT project. We want to build and focus on the DeadGeneratez community and all the members
            in it by promoting, collaborating, sharing and bringing forward other projects and artist. Got a problem with that?`}</p>
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