import { useRouter } from "next/router";
import styles from  "./contact.module.css";
function Contact() {
  const router = useRouter();
  return (
    <>
      <h3>Hey here, you can contact me.</h3>
      <ul>
        <li>7024370634</li>
        <li>linkedin</li>
        <li>github</li>
      </ul>
      <button className = {styles.back_to_home}
        onClick={() => {
          router.push("../home/about");
        }}
      >
        Go to home page
      </button>
      <button className = {styles.go_to_skills}
        onClick={() => {
          router.push("../skills/skill");
        }}
      >
        See my skills
      </button>
    </>
  );
}
export default Contact;
