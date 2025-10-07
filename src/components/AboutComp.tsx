import styles from "./AboutComp.module.scss"
import { motion } from "framer-motion"
import woman from "../assets/woman.png"

const AboutComp = () => {
	return (
		<section className={styles.about}>
			<h2>Some Medieval</h2>
			<motion.img
				initial={{ opacity: 0 }}
				whileInView={{ opacity: .3 }}
				transition={{ duration: 1.1, delay: 0.5 }}
				src={woman}
				className={styles.woman}
				alt="japanese woman"
			/>

			<div className={styles.redDot}></div>
		</section>
	)
}

export default AboutComp
