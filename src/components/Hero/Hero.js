import React from 'react'
import styles from './Hero.module.css'
import testData from '../../data/test'

const Hero = ({ handleOnClick, searchText, setSearchText }) => {
	const data = searchText
		? testData.filter((item) =>
				item.title.toLowerCase().includes(searchText.toLowerCase())
		  )
		: testData.filter((item) => item.featured === true)

	return (
		<div className={styles.hero}>
			<div className={`wrapper ${styles.inner}`}>
				<h1 className={styles.title}>
					<b>indexed.eth</b> is an attempt to document Layer-2, rollups, chains
					and other solutions that have the aim of scaling or improving the
					Ethereum ecosystem
				</h1>

				{/* <input
					type='text'
					value={searchText}
					placeholder='filter by name'
					onChange={(e) => setSearchText(e.target.value)}
					className={styles.input}
				/> */}
			</div>

			{/* <div className={`wrapper ${styles.logos}`}>
				{data.map((item) => (
					<div className={styles.imageWrapper} key={item.url}>
						<button
							className={styles.imageButton}
							onClick={() => handleOnClick(item)}
						>
							<img className={styles.image} src={item.logoPath}></img>
						</button>
					</div>
				))}
			</div> */}
		</div>
	)
}

export default Hero
