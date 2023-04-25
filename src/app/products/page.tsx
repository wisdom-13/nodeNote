import React from 'react';
import Link from 'next/link';
import { getProducts } from '@/service/products';
import styles from './page.module.css';

// export const revalidate = 3;

export default async function ProductsPage() {

  const products = await getProducts();
  const res = await fetch('https://meowfacts.herokuapp.com', {
    next: { revalidate: 3 } // 3 > ISR, 0 > SSR
    // cache: 'no-store' > SSR 
    // 옵션이 없을 경우 SSG
  });
  const data = await res.json();
  const factText = data.data[0];

  return (
    <div>
      제품 소개 페이지
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <Link href={`products/${product.id}`}>{product.name}</Link>
          </li>
        ))}

      </ul>
      <article className={styles.article}>{factText}</article>
    </div>
  );
}

