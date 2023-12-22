'use client'

import Board from '@/containers/Board'
import styles from './page.module.css'
import Square from '@/components/Square'


export default function Home() {
  return (
    <main className={styles.main}>

      <Board />
      <Square/>
      
    </main>
  )
}
