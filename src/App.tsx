import styles from "./App.module.scss"

import bg from "./assets/bg.png"
import house from "./assets/06.png"

const App = () => {
	return (
		<main className={styles.main}>
			<img className={styles.backgroundImage} src={bg} alt="background" />
			<img src={house} alt="" />
		</main>
	)
}

export default App
