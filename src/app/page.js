import styles from './page.module.css'

import Navbar from './component/navbar/Navbar'

import Carrousel from './component/carrousel/Carrousel'
import Popular from './component/popular/Popular'
import Reviews from './component/guestreviews/Reviews'
import Table from './component/yourtable/Table'

export default function Home() {
  return (
    <div className='app'>
      <Navbar />
      <main>
        <Carrousel />
        <Popular />
        <Reviews />
        <Table />
      </main>
    </div>
  )
}
