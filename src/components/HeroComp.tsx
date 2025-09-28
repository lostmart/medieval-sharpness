import { useEffect, useState } from "react"

import styles from "./HeroComp.module.scss"

import { motion, useScroll, useTransform } from "framer-motion"

import bg from "../assets/bg.png"
import lake from "../assets/02.png"
import house from "../assets/04.png"
import nearMountainsLeft from "../assets/05.png"
import nearMountainsRight from "../assets/03.png"
import tree from "../assets/06.png"

const HeroComp = () => {
	const { scrollY } = useScroll()

	// Fast movement - small input range
	const fastElement = useTransform(scrollY, [0, 500], [0, 400])

	// Medium movement - medium input range
	const mediumElement = useTransform(scrollY, [0, 1000], [0, 400])

	// Slow movement - large input range
	const slowElement = useTransform(scrollY, [0, 2000], [0, 400])

	// Super slow - very large input range
	const superSlowElement = useTransform(scrollY, [0, 5000], [0, 400])

	// Oposite elements
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

	const springStyle = {
		transition: "transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
		backfaceVisibility: "hidden" as const,
	}

	const strongSpringStyle = {
		transition: "transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
		backfaceVisibility: "hidden" as const,
	}

	return (
		<section
			className={styles.scene}
			style={{
				transformStyle: "preserve-3d",
			}}
		>
			<motion.div
				className={styles.moonLight}
				style={{
					transform: `translate3d(${mousePosition.x * 0.005}px, ${
						mousePosition.y * 0.003
					}px, 0px)`,
					...springStyle,
					y: superSlowElement,
					zIndex: 0,
				}}
			></motion.div>
			<motion.div
				className={styles.moon}
				style={{
					transform: `translate3d(${mousePosition.x * 0.005}px, ${
						mousePosition.y * 0.003
					}px, 0px)`,
					...springStyle,
					y: superSlowElement,
					zIndex: 0,
				}}
			></motion.div>

			<motion.img
				className={styles.bg}
				src={bg}
				alt="background"
				style={{
					transform: `translate3d(${mousePosition.x * 0.01}px, ${
						mousePosition.y * 0.01
					}px, 0px)`,
					y: oppositeElement,
					...springStyle,
				}}
			/>

			<motion.h1
				initial={{ opacity: 0, y: -90 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 1.1, delay: 0.5 }}
				className={styles.title}
				style={{
					transform: `translate3d(${mousePosition.x * 0.015}px, ${
						mousePosition.y * 0.5
					}px, 0px)`,
					...springStyle,
				}}
			>
				Medieval Sharpness
			</motion.h1>
			<p
				style={{
					transform: `translate3d(${mousePosition.x * 0.015}px, ${
						mousePosition.y * 0.01
					}px, 0px)`,
					...springStyle,
				}}
				className={styles.lead}
			>
				Exploring Japan’s regional medieval heritage through blades, battles,
				and craftsmanship.
			</p>
			<motion.img
				className={styles.lake}
				src={lake}
				alt="lake"
				style={{
					transform: `translate3d(${mousePosition.x * 0.03}px, ${
						mousePosition.y * 0.03
					}px, 0px)`,
					y: oppositeElement,
					...springStyle,
				}}
			/>
			<img className={styles.house} src={house} alt="house" />
			<motion.img
				initial={{ opacity: 0, x: -100 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{
					duration: 1.5,
					ease: "easeInOut",
					delay: 0.2,
				}}
				className={`${styles.nearMountainsLeft}`}
				src={nearMountainsLeft}
				alt="mountains"
				style={{
					transform: `translate3d(${mousePosition.x * 0.08}px, ${
						mousePosition.y * 0.08
					}px, 0px)`,
					...strongSpringStyle,
				}}
			/>
			<motion.img
				initial={{ opacity: 0, x: 100 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{
					duration: 1.5,
					ease: "easeInOut",
					delay: 0.2,
				}}
				className={`${styles.nearMountainsRight} slideFromRight`}
				style={{
					transform: `translate3d(${mousePosition.x * 0.08}px, ${
						mousePosition.y * 0.08
					}px, 0px)`,
					...strongSpringStyle,
				}}
				src={nearMountainsRight}
				alt="right mountain"
			/>
			<motion.img
				className={`${styles.tree} swing-class`}
				src={tree}
				alt="near tree"
				style={{
					transform: `translate3d(${mousePosition.x * 0.1}px, ${
						mousePosition.y * 0.1
					}px, 0px)`,
					y: mediumElement,
					...strongSpringStyle,
				}}
			/>
		</section>
	)
}

export default HeroComp
