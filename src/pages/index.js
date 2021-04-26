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

	const handleOnClick = (info) => {
		setModalInfo(info)
		setIsOpen(true)
	}

	return (
		<Layout
			// title={`${siteConfig.title}`}
			description="A collectively built hub for comparison between 'Layer 2' solutions."
		>
			<div className='homepage'>
				<Hero handleOnClick={handleOnClick} />
				<Modal modalInfo={modalInfo} isOpen={isOpen} setIsOpen={setIsOpen} />
			</div>
		</Layout>
	)
}

export default Home
