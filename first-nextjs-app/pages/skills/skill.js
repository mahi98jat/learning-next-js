import router from "next/router";
import styles from "./skill.module.css";
function Skill() {
  return (
    <div>
      <h3>My skills are listed below</h3>
      <ol>
        <li>JavaScript</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>React.js</li>
        <li>Next js</li>
      </ol>
      <button
        className={styles.link}
        onClick={() => {
          router.push("../home/about");
        }}
      >
        Jump to Home
      </button>
    </div>
  );
}
export default Skill;
