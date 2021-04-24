import React, { useState } from 'react'
import Modal from 'react-modal'
import styles from './Modal.module.css'
const ModalPopup = () => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={() => setIsOpen(false)}
			contentLabel='Example Modal'
			className={styles.Modal}
			overlayClassName={styles.Overlay}
		>
			<div className={styles.text}>
				<h2 className={styles.title}>Example Name</h2>
				<p className={styles.body}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
					pariatur dolore nostrum molestias excepturi aut corporis, veritatis,
					tenetur iste, quod quae dicta inventore nemo!
				</p>

				<ul className={styles.list}>
					<li>Lorem ipsum dolor, sit amet consectetur.</li>
					<li>
						Lorem ipsum dolor, sit amet consectetur Lorem ipsum dolor sit amet
						consectetur adipisicing elit. Omnis perspiciatis sint dolor!.
					</li>
				</ul>
			</div>

			<a className={`button ${styles.button}`} href='https://example.com'>
				go to docs
				<svg
					width={14}
					height={14}
					viewBox='0 0 14 14'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M14 1.5v11a1.5 1.5 0 01-1.5 1.5h-11A1.5 1.5 0 010 12.5v-11A1.5 1.5 0 011.5 0h11A1.5 1.5 0 0114 1.5zm-2.75.5h-3.5c-.665 0-1.002.808-.53 1.28l1 1-6.11 6.11a.375.375 0 000 .53l.97.97a.375.375 0 00.53 0l6.11-6.11 1 1c.47.47 1.28.14 1.28-.53v-3.5a.75.75 0 00-.75-.75z'
						fill='#fff'
					/>
				</svg>
			</a>
		</Modal>
	)
}

export default ModalPopup
