import React from 'react'
import styles from "./Navbar.module.css"
import { GiPriceTag } from 'react-icons/gi';
import { BsFillPersonFill } from 'react-icons/bs';
import { BiSearchAlt2 } from 'react-icons/bi';
import { TbHistory } from 'react-icons/tb';
import Link from 'next/link'
const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.heading}>
        <GiPriceTag className={styles.price}/>
        <p className={styles.p}>P</p>rice<p className={styles.p1}>T</p>racker.
        </Link>
        <div className={styles.right}>
          
          <div className={styles.contacts}>
          <BiSearchAlt2 className={styles.contact}/>
          </div>
          <div className={styles.contacts}>
          <BsFillPersonFill className={styles.contact}/>
          </div>
          <div className={styles.contacts}>
          <TbHistory className={styles.contact}/>
          </div>
        </div>
    </div>
  )
}

export default Navbar