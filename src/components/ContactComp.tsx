import styles from "./ContactComp.module.scss"

const ContactComp = () => {
	return (
		<section className={styles.contact}>
			<form>
				<h2>Contact Us</h2>
				<p>
					Feel Free to contact us any time. We will get back to you as soon as
					we can!.
					<div className={styles["contact-container"]}>
						<input type="text" placeholder="Name" />
						<input type="email" placeholder="Email" />
                        <textarea placeholder="Message" id="message-body"></textarea>
                        <button>Send</button>
					</div>
				</p>
			</form>
		</section>
	)
}

export default ContactComp
