import Image from 'next/image'
import styles from './page.module.css'
import Navbar from '@/components/navbar/Navbar'
import Hero from '@/components/main/Hero'
import Trending from "@/components/Trending/Trending"

export default function Home() {
  return (
    <div >
      <Navbar/>
      <Hero/>
      <Trending/>
    </div>
  )
}
