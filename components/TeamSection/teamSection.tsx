import TeamCard from "./teamCard";
import styles from "../../styles/teamSection.module.scss";

export default function TeamSection() {
    return (
        <div className={styles.teamSection}>
            <TeamCard
                name="Massimo Maggiolo"
                title="Founder/Lead Artist"
                twitter="aesthetica_s"
                linkedin="placeholder"
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, id perspiciatis
                ducimus itaque tenetur laborum quaerat. Debitis impedit blanditiis rerum magnam
                repudiandae sunt, voluptatem corporis exercitationem necessitatibus maxime qui
                accusantium, iure veniam sint natus autem!
            </TeamCard>

            <TeamCard
                name="Victor Karlsson"
                title="Founder/Lead Artist"
                twitter="_Thicctor"
                linkedin="placeholder"
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, id perspiciatis
                ducimus itaque tenetur laborum quaerat. Debitis impedit blanditiis rerum magnam
                repudiandae sunt, voluptatem corporis exercitationem necessitatibus maxime qui
                accusantium, iure veniam sint natus autem!
            </TeamCard>


            <TeamCard
                name="Tamerlan"
                title="Martketing Expert"
                twitter="tamerlan"
                linkedin="placeholder"
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, id perspiciatis
                ducimus itaque tenetur laborum quaerat. Debitis impedit blanditiis rerum magnam
                repudiandae sunt, voluptatem corporis exercitationem necessitatibus maxime qui
                accusantium, iure veniam sint natus autem!
            </TeamCard>

            <TeamCard
                name="Brad Weidner"
                title="Community manager/Business Guru"
                twitter="SocietyGremlin"
                linkedin="placeholder"
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, id perspiciatis
                ducimus itaque tenetur laborum quaerat. Debitis impedit blanditiis rerum magnam
                repudiandae sunt, voluptatem corporis exercitationem necessitatibus maxime qui
                accusantium, iure veniam sint natus autem!
            </TeamCard>
        </div>
    );
}
