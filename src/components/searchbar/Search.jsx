"use client"
import React, { useState } from 'react'
import styles from "./Search.module.css"
const Search = () => {
  const[search,setSearch]=useState('');
  const [loading,setLoading] = useState(false)

  const checkUrl = (url)=>{
    try {
      const parsedURL = new URL(url);
      const hostname = parsedURL.hostname;
  
      if(
        hostname.includes('amazon.com') || 
        hostname.includes('flipkart.com') || 
        hostname.includes('apple.com') || 
        hostname.includes ('amazon.') || 
        hostname.endsWith('amazon')
      ) {
        return true;
      }
    } catch (error) {
      return false;
    }
  
    return false;
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();
    const validurl =  checkUrl(search)
    console.log(validurl);
    if(!validurl) {
      return alert("Please enter a valid url")
    }
    try {
      setLoading(true)
      // console.log(search);
      alert("valid")
      
    } catch (error) {
      console.log(error);
    }finally{
      setLoading(false)
    }

  }

  return (
    <div className={styles.container}>               
        <input type="text" placeholder="Enter product link ....." className={styles.input} onChange={(e)=>setSearch(e.target.value)}/>
        <button className={styles.button} onClick={handleSubmit} >Search</button>
    </div>
  )
}

export default Search