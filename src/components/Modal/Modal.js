import React, { useState } from 'react'
import Modal from 'react-modal'
import Link from '@docusaurus/Link'
import { BsBoxArrowInUpRight } from 'react-icons/bs'
import styles from './Modal.module.css'

const ModalPopup = ({ modalInfo, isOpen, setIsOpen }) => {
	const { title, body, url, bullets = [] } = modalInfo

	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={() => setIsOpen(false)}
			contentLabel='Example Modal'
			className={styles.Modal}
			overlayClassName={styles.Overlay}
		>
			<div className={styles.text}>
				<h2 className={styles.title}>{title}</h2>
				<p className={styles.body}>{body}</p>

				<ul className={styles.list}>
					{bullets.map((point, i) => (
						<li key={i}>{point}</li>
					))}
				</ul>
			</div>

			<Link className={`button ${styles.button}`} to={`/docs/${url}`}>
				go to docs
				<BsBoxArrowInUpRight />
			</Link>
		</Modal>
	)
}

export default ModalPopup
