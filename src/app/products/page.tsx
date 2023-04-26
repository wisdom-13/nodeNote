import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getProducts } from '@/service/products';
import styles from './page.module.css';
import clothesImage from '../../../public/images/clothes.jpg';

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
      <h1>제품 소개 페이지</h1>
      <Image src={clothesImage} alt='Clothes' priority />
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

