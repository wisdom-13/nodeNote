import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Counter from '@/components/Counter'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <h1>home</h1>
      <Counter />
    </>
  )
}
