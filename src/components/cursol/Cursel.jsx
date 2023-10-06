"use client"
import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import styles from "./Cursel.module.css"

const Cursel = () => {
  return (
    <div className={styles.container}>
          <Carousel
                     showThumbs={false}
                     autoPlay
                     infiniteLoop
                     interval={2000}
                     showArrows={false}
                     showStatus={false}
                     className={styles.Cursel}
              
          >
              
        
                        <Image src="/pixel7.png" alt="D" width={500} height={500} className={styles.imgs}/>
                        <Image src="/iphone.png" alt="D" width={500} height={500} className={styles.imgs}/>
                        <Image src="/tv.png" alt="D" width={500} height={500} className={styles.imgs}/>
                        <Image src="/hero-1.svg" alt="D" width={500} height={500} className={styles.imgs}/>
                        <Image src="/headphone.png" alt="D" width={500} height={500} className={styles.imgs}/>
                      
               

            </Carousel>
    </div>
  )
}

export default Cursel