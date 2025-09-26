import styles from "./App.module.scss"

import bg from "./assets/bg.png"
import lake from "./assets/02.png"
import house from "./assets/04.png"
import nearMountains from "./assets/05.png"
import tree from "./assets/06.png"

import { useEffect, useState } from "react"

const App = () => {
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
		<main
			className={styles.scene}
			style={{
				transformStyle: "preserve-3d",
			}}
		>
			<div
				className={styles.moon}
				style={{
					transform: `translate3d(${mousePosition.x * 0.005}px, ${
						mousePosition.y * 0.005
					}px, 0px)`,
					...springStyle,
				}}
			></div>
			<img
				className={styles.bg}
				src={bg}
				alt="background"
				style={{
					transform: `translate3d(${mousePosition.x * 0.01}px, ${
						mousePosition.y * 0.01
					}px, 0px)`,
					...springStyle,
				}}
			/>
			<img
				className={styles.lake}
				src={lake}
				alt="lake"
				style={{
					transform: `translate3d(${mousePosition.x * 0.03}px, ${
						mousePosition.y * 0.03
					}px, 0px)`,
					...springStyle,
				}}
			/>
			<img
				className={styles.house}
				src={house}
				alt="islands"
				style={{
					transform: `translate3d(${mousePosition.x * 0.03}px, ${
						mousePosition.y * 0.03
					}px, 0px)`,
					...springStyle,
				}}
			/>
			<img
				className={styles.nearMountains}
				src={nearMountains}
				alt="mountains"
				style={{
					transform: `translate3d(${mousePosition.x * 0.08}px, ${
						mousePosition.y * 0.08
					}px, 0px)`,
					...strongSpringStyle,
				}}
			/>
			<img
				className={styles.tree}
				src={tree}
				alt="near tree"
				style={{
					transform: `translate3d(${mousePosition.x * 0.1}px, ${
						mousePosition.y * 0.1
					}px, 0px)`,
					...strongSpringStyle,
				}}
			/>
		</main>
	)
}

export default App
