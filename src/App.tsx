import styles from "./App.module.scss"

import bg from "./assets/bg.png"
import lake from "./assets/02.png"
import house from "./assets/04.png"
import nearMountains from "./assets/05.png"
import tree from "./assets/06.png"

const App = () => {
	return (
		<main className={styles.scene}>
			<img className={styles.bg} src={bg} alt="background" />
			<div className={styles.moon}></div>
			<img className={styles.lake} src={lake} alt="lake" />

			<img className={styles.house} src={house} alt="islands" />
			<img
				className={styles.nearMountains}
				src={nearMountains}
				alt="mountains"
			/>
			<img className={styles.tree} src={tree} alt="near tree" />
		</main>
	)
}

export default App
