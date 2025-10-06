import styles from "./AboutComp.module.scss"
import woman from "../assets/woman.png"

const AboutComp = () => {
	return (
		<section className={styles.about}>
			<h2>Some Medieval</h2>
			<img src={woman} className={styles.woman} alt="japanese woman" />

			<div className={styles.redDot}></div>
		</section>
	)
}

export default AboutComp
