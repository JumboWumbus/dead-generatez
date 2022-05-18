import styles from "../../styles/roadmap2.module.scss";
import CommunitySkulls from "../svg/communitySkulls";

interface Roadmap {
    content: RoadmapContent;
}

interface RoadmapContent {
    heading: string;
    left: React.ReactNode;
    right: React.ReactNode;
}

export const RoadmapRow = ({ content }: Roadmap) => {
    return (
        <div className={styles.roadmapRow}>
            <div className={styles.roadmapRowLeftContainer}>
                <div className={styles.roadmapRowHeading}>{content.heading}</div>
                <div className={styles.roadmapRowLeft}>{content.left}</div>
            </div>
            <div className={styles.roadmapRowRightContainer}>
                <div className={styles.roadmapRowRight}>{content.right}</div>
            </div>
            <div className={styles.metaDate}></div>
        </div>
    );
};

export default RoadmapRow;
