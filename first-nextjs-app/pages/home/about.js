import Link from "next/link";
import styles from "./about.module.css";
function About() {
  return (
    <>
      <h1>Home</h1>
      <Link className={styles.link} href="../contact/contact">
        Go to Contact Us
      </Link>
    </>
  );
}
export default About;
