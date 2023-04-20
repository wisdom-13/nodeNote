import styles from '../layout.module.css';
import Link from 'next/link';

export const metadata = {
  title: '제품 사이트 | 전체',
  description: '멋진 제품을 판매하는 곳',
}

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
