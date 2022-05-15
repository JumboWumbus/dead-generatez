import TeamCard from "./teamCard";
import styles from "../../styles/teamSection.module.scss";

export default function TeamSection() {
    return (
        <div className={styles.teamSection}>
            <div className={styles.teamTitle}>Our Team</div>
            <div className={styles.teamCards}>
                <TeamCard
                    name="Massimo Maggiolo"
                    title="Founder/Lead Artist"
                    twitter="@aesthetica_s"
                    linkedin="massimo-maggiolo-241491237/"
                >
                    Aesthetica is very cool and also very Italian. But what makes him so cool? He is
                    an incredible artist with amazing 3D skills. Some say he’s more familiar with
                    Blender than making delicious pasta or pizza.
                </TeamCard>

                <TeamCard
                    name="Victor Karlsson"
                    title="Founder/Lead Artist"
                    twitter="@_Thicctor"
                    linkedin="viktor-karlsson-299631142/"
                >
                    Thicctor is our modern-day Swedish viking. Now, what does that mean? Well, he
                    can navigate through IKEA blindfolded whilst designing brands for cool projects.
                    That&apos;s a useful skill to have... we hope.
                </TeamCard>

                <TeamCard
                    name="Brad Weidner"
                    title="Community manager"
                    twitter="@SocietyGremlin"
                    linkedin="brad-weidner-23a75190/"
                >
                    Brad is our very own business guru from Texas. Now, how many bazookas does he
                    own? Zero! Instead, he is hand-crafting his own weapons arsenal consisting of
                    purely boomerangs. Oh, and he is the most all-round team player out there! ps.
                    he is a dog lover.
                </TeamCard>

                <TeamCard
                    name="Tamerlan"
                    title="Marketing Expert"
                    twitter="@tamerlan"
                    linkedin="placeholder"
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, id perspiciatis
                    ducimus itaque tenetur laborum quaerat. Debitis impedit blanditiis rerum magnam
                    repudiandae sunt, voluptatem corporis exercitationem necessitatibus maxime qui
                    accusantium, iure veniam sint natus autem!
                </TeamCard>
            </div>
        </div>
    );
}
