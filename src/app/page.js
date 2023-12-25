import styles from './page.module.css'

import Navbar from './component/navbar/Navbar'
import Carrousel from './component/carrousel/Carrousel'
import Popular from './component/popular/Popular'

export default function Home() {
  return (
    <div className='app'>
      <Navbar />
      <main>
        <Carrousel />
        <Popular />
      </main>
    </div>
  )
}
