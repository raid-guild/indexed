import React, { useState } from 'react'
import Layout from '@theme/Layout'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import './styles.css'

import Hero from '../components/Hero/Hero'
import Modal from '../components/Modal/Modal'

function Home() {
	const context = useDocusaurusContext()
	const { siteConfig = {} } = context
	const [modalInfo, setModalInfo] = useState({})
	const [isOpen, setIsOpen] = useState(false)
	const [searchText, setSearchText] = useState('')

	const handleOnClick = (info) => {
		setModalInfo(info)
		setIsOpen(true)
	}

	return (
		<Layout
			// title={`${siteConfig.title}`}
			description="A collectively built hub for comparison between 'Layer 2' solutions."
		>
			<Hero
				handleOnClick={handleOnClick}
				searchText={searchText}
				setSearchText={setSearchText}
			/>
			<Modal modalInfo={modalInfo} isOpen={isOpen} setIsOpen={setIsOpen} />
		</Layout>
	)
}

export default Home
