import styles from "./App.module.scss"

const App = () => {
	return (
		<main>
			<ul className={styles.scene}>
				<li className={styles.sky}></li>
				<li className={styles.layer}>
					<div className={styles.mountain}></div>
				</li>
				<li className={styles.layer}>
					<div className={styles.moon}></div>
				</li>

				<li className={styles.layer}>
					<div className={styles.lake}></div>
				</li>
				<li className={styles.layer}>
					<div className={styles.house}></div>
				</li>
				<li className={styles.layer}>
					<div className={styles.islands}></div>
				</li>
				<li className={styles.layer}>
					<div className={styles.frontMountains}></div>
				</li>
				<li className={styles.layer}>
					<div className={styles.tree}></div>
				</li>
				<li className={styles.layer}>
					<button className="btn">Make a reservation</button>
				</li>
			</ul>
		</main>
	)
}

export default App
