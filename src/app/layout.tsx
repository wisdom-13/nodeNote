import './globals.css'
import styles from './layout.module.css';

import Link from 'next/link';


export const metadata = {
  title: '제품 사이트',
  description: '멋진 제품을 판매하는 곳',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header className={styles.header}>
          <h1><Link href='/'>Demo Note</Link></h1>
          <nav className={styles.nav}>
            <Link href='/products'>Products</Link>
            <Link href='/about'>About</Link>
            <Link href='/contact'>Contact</Link>
          </nav>
        </header>
        <section>
          {children}
        </section>
      </body>
    </html>
  )
}
