import styles from "../styles/roadmap.module.scss";
import CommunitySkulls from "./svg/communitySkulls";


export default function Roadmap() {
    

    return (
    <>
    <div>
    <section className={styles.conferenceTimeline}>

    <div className={styles.conferenceCenterLine}></div>
    <div className={styles.conferenceTimelineContent}>


      <div className={styles.timelineArticle}>
        <div className={styles.contentLeftContainer}>
          <div className={styles.contentLeft}>
            <p>When I orbited the Earth in a spaceship, I saw for the first time how beautiful our planet is. Mankind, let us preserve and increase this beauty, and not destroy it! <span className="article-number">01</span></p>
          </div>
          
        </div>
        <div className={styles.contentRightContainer}>
          <div className={styles.contentRight}>
            <p>When I orbited the Earth in a spaceship, I saw for the first time how beautiful our planet is. </p>
          </div>
          
        </div>
        <div className={styles.metaDate}>
         
        </div>
      </div>


      <div className={styles.timelineArticle}>
        <div className={styles.contentLeftContainer}>
          <div className={styles.contentLeft}>
            <CommunitySkulls/>

          </div>
          
        </div>
        <div className={styles.contentRightContainer}>
          <div className={styles.contentRight}>
            <p>When I orbited the Earth in a spaceship, I saw for the first time how beautiful our planet is. </p>
          </div>
          
        </div>
        <div className={styles.metaDate}>
          
        </div>
      </div>


      <div className={styles.timelineArticle}>
        <div className={styles.contentLeftContainer}>
          <div className={styles.contentLeft}>
            <p>When I orbited the Earth in a spaceship, I saw for the first time how beautiful our planet is. Mankind, let us preserve and increase this beauty, and not destroy it! <span className="article-number">01</span></p>
          </div>
          
        </div>
        <div className={styles.contentRightContainer}>
          <div className={styles.contentRight}>
            <p>When I orbited the Earth in a spaceship, I saw for the first time how beautiful our planet is. </p>
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