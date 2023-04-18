import styles from '../layout.module.css';
import Link from 'next/link';

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <nav className={styles.productsNav}>
        <Link href='/products/women'>여성용</Link>
        <Link href='/products//man'>남성용</Link>
      </nav>
      <section className={styles.product}>
        {children}
      </section>
    </div>
  )
}
