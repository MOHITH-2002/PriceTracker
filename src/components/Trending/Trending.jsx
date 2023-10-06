import React from 'react'
import styles from "./Trending.module.css"
import Image from 'next/image'
import Link from 'next/link'
const Trending = () => {
  const heroImages = [
    { imgUrl: "/pixel7.png", alt: 'phone'},
    { imgUrl: '/headphone.png', alt: 'mac'},
    { imgUrl: '/iphone.png', alt: 'iphone'},
    { imgUrl: 'hero-1.svg', alt: 'tv'},
    { imgUrl: '/tv.png', alt: 'watch'},
  ]
  return (
    <div >
      <div className={styles.price}>
        <h1 className={styles.head}>Trending on PriceTracker</h1>
      </div>
      <div className={styles.container}>

      
        {
          heroImages.map((item, index) =>
        <Link className={styles.link} href="/" key={index}>
         

          <div className={styles.image}>
            <Image fill src={item.imgUrl} alt="" />
          </div>
        </Link>
          )
        }
        </div>
        </div>


  )
}

export default Trending