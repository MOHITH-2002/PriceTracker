import React from 'react'
import styles from "./Hero.module.css"
import Search from '../searchbar/Search'
import Cursel from '../cursol/Cursel'
const Hero = () => {
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <div>

        <h1 className={styles.h1}>Track Prices and <b className={styles.text}>Get Alerts </b> When They Drop</h1>
            </div>
            <div>
                <Search/>
            </div>
        </div>
        <div className={styles.right}>
        <Cursel/>
        </div>
    </div>
  )
}

export default Hero