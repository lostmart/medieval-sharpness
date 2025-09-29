import { useEffect, useState } from "react"
import styles from "./AboutComp.module.scss"
import { motion, useScroll, useTransform } from "framer-motion"

import divider from "../assets/Union.png"

const AboutComp = () => {
	const { scrollY } = useScroll()

	const oppositeElement = useTransform(scrollY, [0, 5000], [0, -400])

	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

	useEffect(() => {
		const centerX = window.innerWidth / 2
		const centerY = window.innerHeight / 2

		const handleMouseMove = (event: MouseEvent) => {
			const relativeX = event.clientX - centerX
			const relativeY = event.clientY - centerY

			setMousePosition({
				x: relativeX,
				y: relativeY,
			})
		}

		window.addEventListener("mousemove", handleMouseMove)

		return () => {
			window.removeEventListener("mousemove", handleMouseMove)
		}
	}, [])

	return (
		<section className={styles.about}>
			<h2>Some Medieval</h2>

			<img src={divider} alt="union" className={styles.divider} />
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
