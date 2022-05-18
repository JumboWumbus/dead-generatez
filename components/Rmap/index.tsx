import styles from "../../styles/roadmap2.module.scss";
import CommunitySkulls from "../svg/communitySkulls";
import RoadmapRow from "./row";
const RoadmapRows = [
    {
        heading: "DEADGENERATES",
        left: (
            <p>
                When I orbited the Earth in a spaceship, I saw for the first time how beautiful our
                planet is. Mankind, let us preserve and increase this beauty, and not destroy it!{" "}
                <span className="article-number">01</span>
            </p>
        ),
        right: (
            <p>
                When I orbited the Earth in a spaceship, I saw for the first time how beautiful our
                planet is.
            </p>
        ),
    },
    {
        heading: "COMMUNITY COMES FIRST",
        left: <CommunitySkulls />,
        right: (
            <p>
                When I orbited the Earth in a spaceship, I saw for the first time how beautiful our
                planet is.
            </p>
        ),
    },
    {
        heading: "DEADGENVERSE?",
        left: (
            <p>
                When I orbited the Earth in a spaceship, I saw for the first time how beautiful our
                planet is. Mankind, let us preserve and increase this beauty, and not destroy it!{" "}
                <span className="article-number">01</span>
            </p>
        ),
        right: (
            <p>
                When I orbited the Earth in a spaceship, I saw for the first time how beautiful our
                planet is.
            </p>
        ),
    },
];

export const Roadmap = () => {
    return (
        <div className={styles.roadmap}>
            <div className={styles.roadmapColumn}>
                {RoadmapRows.map((item, key) => (
                    <RoadmapRow key={key} content={item} />
                ))}
            </div>
        </div>
    );
};

export default Roadmap;
