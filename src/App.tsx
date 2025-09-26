import { useEffect, useRef } from "react"
import bg from "./assets/bg.png"
import styles from "./App.module.scss"

const App = () => {
	const parallaxRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const handleScroll = () => {
			const scrolled = window.pageYOffset
			const parallaxElements = document.querySelectorAll("[data-speed]")

			parallaxElements.forEach((element) => {
				const speed = parseFloat(element.getAttribute("data-speed") || "0")
				const yPos = -(scrolled * speed)
				const transform = `translate3d(0, ${yPos}px, 0)`
				;(element as HTMLElement).style.transform = transform
			})
		}

		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	return (
		<div className={styles.parallaxContainer} ref={parallaxRef}>
			{/* Background Layer */}
			<div className={`${styles.parallaxLayer} ${styles.parallaxBack}`}>
				<img
					src={bg}
					alt="Background"
					style={{
						width: "100%",
						height: "100%",
						objectFit: "cover",
						objectPosition: "center",
					}}
				/>
			</div>

			{/* Mid Layer with Mountains */}
			<div className={`${styles.parallaxLayer} ${styles.parallaxMid}`}>
				<div
					className={`${styles.parallaxElement} ${styles.mountain1}`}
					data-speed="0.2"
				/>
				<div
					className={`${styles.parallaxElement} ${styles.mountain2}`}
					data-speed="0.4"
				/>
			</div>

			{/* Front Layer with Clouds */}
			<div className={`${styles.parallaxLayer} ${styles.parallaxFront}`}>
				<div
					className={`${styles.parallaxElement} ${styles.cloud} ${styles.cloud1}`}
					data-speed="0.1"
				/>
				<div
					className={`${styles.parallaxElement} ${styles.cloud} ${styles.cloud2}`}
					data-speed="0.15"
				/>
				<div
					className={`${styles.parallaxElement} ${styles.cloud} ${styles.cloud3}`}
					data-speed="0.05"
				/>
			</div>

			{/* Content Sections */}
			<div className={`${styles.section} ${styles.hero}`}>
				<div>
					<h1>Parallax Scrolling</h1>
					<p>Experience the depth and beauty of layered scrolling effects</p>
				</div>
			</div>

			<div className={`${styles.section} ${styles.content}`}>
				<div className={styles.contentInner}>
					<h2>Smooth Scrolling Experience</h2>
					<p>
						This parallax effect creates a sense of depth by moving background
						images at different speeds than foreground content. The technique
						simulates three-dimensional depth on a two-dimensional screen.
					</p>
					<p>
						Each layer moves at its own pace, creating an immersive visual
						experience that draws users deeper into your content.
					</p>
				</div>
			</div>

			<div className={`${styles.section} ${styles.section2}`}>
				<div>
					<h2>Multiple Layers</h2>
					<p>
						Background, midground, and foreground elements all working in
						harmony
					</p>
				</div>
			</div>

			<div className={`${styles.section} ${styles.content}`}>
				<div className={styles.contentInner}>
					<h2>Performance Optimized</h2>
					<p>
						Using CSS transforms and requestAnimationFrame for smooth 60fps
						animations. The parallax effect is achieved through CSS perspective
						and translateZ transformations for optimal performance.
					</p>
				</div>
			</div>

			<div className={`${styles.section} ${styles.section3}`}>
				<div>
					<h2>Immersive Design</h2>
					<p>Creating depth and engagement through visual storytelling</p>
				</div>
			</div>

			<div className={`${styles.section} ${styles.section4}`}>
				<div>
					<h2>Ready to Scroll</h2>
					<p>Your journey through parallax continues...</p>
				</div>
			</div>
		</div>
	)
}

export default App
