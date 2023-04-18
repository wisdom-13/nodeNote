import styles from '../layout.module.css';

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <nav className={styles.productsNav}>
        <a href=''>여성용</a>
        <a href=''>남성용</a>
      </nav>
      <section className={styles.product}>
        {children}
      </section>
    </div>
  )
}
