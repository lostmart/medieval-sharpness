import styles from "./AboutComp.module.scss"
import { motion } from "framer-motion"

const AboutComp = () => {
	return (
		<section className={styles.about}>
			<h2>Some Medieval</h2>

			<motion.div
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				Content appears on scroll
			</motion.div>
		</section>
	)
}

export default AboutComp
