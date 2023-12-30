'use client'
import React, { useRef } from 'react'
import styles from './page.module.css'

import Navbar from './component/navbar/Navbar'

import Carrousel from './component/carrousel/Carrousel'
import Popular from './component/popular/Popular'
import Reviews from './component/guestreviews/Reviews'
import Table from './component/yourtable/Table'
import Footer from './component/footer/Footer'
console.log(Footer);

export default function Home() {

  const monBlocRef = useRef(null);

  const scrollToBloc = () => {
    monBlocRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='app'>
      <Navbar Click={scrollToBloc} />
      <main>
        <Carrousel Click={scrollToBloc} />
        <Popular />
        <Reviews />
        <Table ref={monBlocRef} id='reserve' />
      </main>

      <Footer />
    </div>
  )
}
