import TeamCard from "./teamCard";
import styles from "../../styles/teamSection.module.scss";

export default function TeamSection() {
    return (
        <div className={styles.teamSection}>
            <div className={styles.teamTitle} id="the-team">Our Team</div>
            <div className={styles.teamCards}>
                <TeamCard
                    name="Massimo Maggiolo"
                    title="Founder / Lead Artist"
                    twitter="@aesthetica_s"
                    twitterUrl="https://twitter.com/aesthetica_s"
                    linkedin="Massimo"
                    linkedinUrl="https://linkedin.com/in/massimo-maggiolo-241491237/"
                    customID={styles.leftContainer}
                >
                    {`Aesthetica is very cool and also very Italian. But what makes him so cool? He is an incredible artist with amazing 3D skills.
                    Some say he’s more familiar with Blender than making delicious pasta or pizza.`}
                </TeamCard>

                <TeamCard
                    name="Viktor Karlsson"
                    title="Graphic Designer / CM"
                    twitter="@_Thicctor"
                    twitterUrl="https://twitter.com/_Thicctor"
                    linkedin="Viktor"
                    linkedinUrl="https://linkedin.com/in/viktor-karlsson-299631142/"
                    customID={styles.rightContainer}
                >
                    {`Thicctor is our modern-day Swedish viking. Now, what does that mean? Well, he can navigate through IKEA blindfolded whilst designing
                    brands for cool projects. That’s a useful skill to have... we hope.`}
                </TeamCard>

                <TeamCard
                    name="Brad Weidner"
                    title="Business Guru / CM"
                    twitter="@SocietyGremlin"
                    twitterUrl="https://twitter.com/societygremlin"
                    linkedin="Brad"
                    linkedinUrl="https://linkedin.com/in/brad-weidner-23a75190/"
                    customID={styles.leftContainer}
                >
                    {`Brad is our very own business guru from Texas. Now, how many bazookas does he own? Zero! Instead, he’s hand-crafting his own weapons
                    arsenal consisting of purely boomerangs. Oh, and he’s the most all-round team player out there! ps. he’s a dog lover.`}
                </TeamCard>

                <TeamCard
                    name="Ben Hammond"
                    title="Web-Dev / Music man"
                    twitterUrl="https://twitter.com/GrembloProjects"
                    twitter="@GrembloProjects"
                    linkedin="None"
                    linkedinUrl="https://www.youtube.com/watch?v=tWez_uua5Ac"
                    customID={styles.rightContainer}
                >
                    {`Ben “Gremblo” Hammond is our very own web-developer. When we request something, he will respond with a made up word, some funky noises
                     and all of a sudden the request has been finalized. Some people work in mysterious ways, and he always gets the job done.`}
                </TeamCard>
            </div>
        </div>
    );
}
