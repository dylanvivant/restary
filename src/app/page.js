import styles from './page.module.css'

import Navbar from './component/navbar/Navbar'
import Carrousel from './component/carrousel/Carrousel'

export default function Home() {
  return (
    <div className='app'>
      <Navbar />
      <main>
        <Carrousel />
      </main>
    </div>
  )
}
