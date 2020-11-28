import React, { useState } from 'react'
import styles from './Hero.module.css'
import heroCards from '../../data/heroCards'

const Hero = () => {
  const [translate, setTranslate] = useState(0)
  const [active, setActive] = useState(0)

  const handleOnClick = (transform, index) => {
    setTranslate(transform)
    setActive(index)
  }

  return (
    <div className={styles.hero}>
      <h1>Featured Chains</h1>
      <div className={styles.cardContainer}>

        {
          heroCards.map(card => (
            <div className={styles.card} style={{ transform: `translateX(${translate})` }} key={card.title}>
              <div className={styles.cardText}>
                <a href={`/docs/${card.url}`}><h2>{card.title}</h2></a>
                <p>{card.body}</p>
              </div>
              <div className={styles.cardTable}>
                <div>TPS: </div>
                <div>finality: </div>
                <div>withdraw: </div>
                <div>$ efficient: </div>
                <div>Consensus: </div>
              </div>
            </div>
          ))
        }

      </div>

      <div className={styles.buttons}>
        <button
          onClick={() => handleOnClick(0, 0)}
          style={{ backgroundColor: active === 0 ? '#FFCE08' : '#f9036c' }}
        />
        <button
          onClick={() => handleOnClick('calc(-100%)', 1)}
          style={{ backgroundColor: active === 1 ? '#FFCE08' : '#f9036c' }}
        />
        <button
          onClick={() => handleOnClick('calc(-200% - 4rem)', 2)}
          style={{ backgroundColor: active === 2 ? '#FFCE08' : '#f9036c' }}
        />
      </div>

    </div>
  )
}

export default Hero

