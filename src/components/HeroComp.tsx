import styles from "./HeroComp.module.scss"

import { useEffect, useState } from "react"
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

	// Fast movement - small input range
	const fastElement = useTransform(scrollY, [0, 500], [0, 400])

	// Medium movement - medium input range
	const mediumElement = useTransform(scrollY, [0, 1000], [0, 400])

	// Slow movement - large input range
	const slowElement = useTransform(scrollY, [0, 2000], [0, 400])

	// Super slow - very large input range
	const superSlowElement = useTransform(scrollY, [0, 5000], [0, -100])

	// Oposite elements
	const oppositeElement = useTransform(scrollY, [0, 5000], [0, -400])

	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

	// useEffect(() => {
	// 	const centerX = window.innerWidth / 2
	// 	const centerY = window.innerHeight / 2

	// 	const handleMouseMove = (event: MouseEvent) => {
	// 		const relativeX = event.clientX - centerX
	// 		const relativeY = event.clientY - centerY

	// 		setMousePosition({
	// 			x: relativeX,
	// 			y: relativeY,
	// 		})
	// 	}

	// 	window.addEventListener("mousemove", handleMouseMove)

	// 	return () => {
	// 		window.removeEventListener("mousemove", handleMouseMove)
	// 	}
	// }, [])

	const springStyle = {
		transition: "transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
		backfaceVisibility: "hidden" as const,
	}

	const strongSpringStyle = {
		transition: "transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
		backfaceVisibility: "hidden" as const,
	}

	return (
		<section className={styles.scene}>
			<div className={styles.moonLight}></div>

			<motion.div
				style={{ y: superSlowElement }}
				className={styles.moon}
			></motion.div>

			<img src={bg} className={styles.bg} alt="background mountains" />
			<img src={lake} className={styles.lake} alt="lake of the maountain" />
			<img src={house} className={styles.house} alt="house on the lake" />

			<motion.h1
				initial={{ opacity: 0, y: -90 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 1.1, delay: 0.5 }}
				className={styles.title}
			>
				Medieval Sharpness
			</motion.h1>

			<img src={tree} className={styles.tree} alt="japanese tyee" />
			<img
				src={nearMountainsLeft}
				className={styles.nearMountainsLeft}
				alt="left mountains"
			/>
			<img
				src={nearMountainsRight}
				className={styles.nearMountainsRight}
				alt="right mountain"
			/>

			<img
				src={upCloseTrees}
				className={styles.upCloseTrees}
				alt="up close trees"
			/>
		</section>
	)
}

export default HeroComp
