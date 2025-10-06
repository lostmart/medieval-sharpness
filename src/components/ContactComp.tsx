import { useState } from "react"
import styles from "./ContactComp.module.scss"

const ContactComp = () => {
	type TFormData = {
		name: string
		email: string
		message: string
	}

	const [formData, setFormData] = useState<TFormData>({
		name: "",
		email: "",
		message: "",
	})

	const [error, setError] = useState<string>("")

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		checkForm()
		console.log(formData)
	}

	const checkForm = () => {
		// check empty
		if (!formData.name || !formData.email || !formData.message) {
			setError("Please fill out all fields")
		}
		

		setTimeout(() => {
			setError("")
		}, 2100)
	}

	return (
		<section className={styles.contact}>
			<form onSubmit={(e) => handleSubmit(e)}>
				<h2>Contact Us</h2>
				<p>
					Feel Free to contact us any time. We will get back to you as soon as
					we can!.
				</p>
				<div className={styles["contact-container"]}>
					<input
						value={formData?.name}
						onChange={(e) => setFormData({ ...formData, name: e.target.value })}
						type="text"
						placeholder="Name"
					/>
					<input
						value={formData?.email}
						onChange={(e) =>
							setFormData({ ...formData, email: e.target.value })
						}
						type="email"
						placeholder="Email"
					/>
					<textarea
						value={formData?.message}
						onChange={(e) =>
							setFormData({ ...formData, message: e.target.value })
						}
						placeholder="Message"
						id="message-body"
					></textarea>
					<button className={error ? "shake-horizontal" : ""} type="submit">
						Send
					</button>

					{error && <span>{error}</span>}
				</div>
			</form>
		</section>
	)
}

export default ContactComp
