import styles from "./HeroComp.module.scss"

// import { useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

import bg from "../assets/bg.png"

import lake from "../assets/02.png"
import house from "../assets/04.png"
import nearMountainsLeft from "../assets/05.png"
import nearMountainsRight from "../assets/03.png"
import tree from "../assets/06.png"
import upCloseTrees from "../assets/treees.png"

const HeroComp = () => {
	const { scrollY } = useScroll()

	console.log(scrollY.get())

	// Super slow - very large input range
	const superSlowElement = useTransform(scrollY, [0, 5000], [0, -300])

	// Slow - very large input range
	const slowElement = useTransform(scrollY, [0, 5000], [0, -1900])

	// faster - very large input range
	const fasterElement = useTransform(scrollY, [0, 5000], [0, -2100])

	// even faster - very large input range
	const evenFasterElement = useTransform(scrollY, [0, 5000], [0, -2300])

	// title - very large input range
	const titleElement = useTransform(scrollY, [0, 5000], [0, -2800])

	// front - very large input range
	const frontElement = useTransform(scrollY, [0, 4000], [0, -3300])

	// front - very large input range
	const fronterElement = useTransform(scrollY, [0, 3500], [0, -3500])

	return (
		<section className={styles.scene}>
			<motion.div
				style={{ y: superSlowElement }}
				className={styles.moonLight}
			></motion.div>

			<motion.div
				style={{ y: superSlowElement }}
				className={styles.moon}
			></motion.div>

			<motion.img
				style={{ y: slowElement }}
				src={bg}
				className={styles.bg}
				alt="background mountains"
			/>

			<motion.img
				style={{ y: fasterElement }}
				src={lake}
				className={styles.lake}
				alt="lake of the maountain"
			/>

			<motion.img
				style={{ y: evenFasterElement }}
				src={house}
				className={styles.house}
				alt="house on the lake"
			/>

			<motion.h1
				style={{ y: titleElement }}
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 1.1, delay: 0.5 }}
				className={styles.title}
			>
				Medieval Sharpness
			</motion.h1>

			<img src={tree} className={styles.tree} alt="japanese tree" />
			<motion.img
				style={{ y: frontElement }}
				src={nearMountainsLeft}
				className={styles.nearMountainsLeft}
				alt="left mountains"
			/>
			<motion.img
				style={{ y: frontElement }}
				src={nearMountainsRight}
				className={styles.nearMountainsRight}
				alt="right mountain"
			/>

			<motion.img
				style={{ y: fronterElement }}
				src={upCloseTrees}
				className={styles.upCloseTrees}
				alt="up close trees"
			/>
		</section>
	)
}

export default HeroComp
