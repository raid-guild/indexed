import React from 'react'
import styles from './Hero.module.css'
import testData from '../../data/test'

const Hero = () => {
	return (
		<div className={styles.hero}>
			<div className={`wrapper ${styles.inner}`}>
				<h1 className={styles.title}>
					<b>indexed.eth</b> is an attempt to document Layer-2, rollups, chains
					and other solutions that have the aim of scaling or improving the
					Ethereum ecosystem
				</h1>

				<input
					type='text'
					placeholder='filter by name'
					onChange={(e) => searchName(e)}
					className={styles.input}
				/>
			</div>

			<div className={styles.logos}>
				{testData.map(({ logoPath }) => (
					<div className={styles.imageWrapper}>
						<button className={styles.imageButton}>
							<img className={styles.image} src={logoPath}></img>
						</button>
					</div>
				))}
			</div>
		</div>
	)
}

export default Hero
