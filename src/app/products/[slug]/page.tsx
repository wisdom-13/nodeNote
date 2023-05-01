import React from 'react';
import Image from 'next/image';
import { notFound, redirect } from 'next/navigation';
import { getProduct, getProducts } from '@/service/products';
import GoProductsButton from '@/components/GoProductsButton';

export const revalidate = 3;

type Props = {
  params: {
    slug: string;
  }
}

export function generateMetadata({ params: { slug } }: Props) {
  return {
    title: `제품의 이름 : ${slug}`,
  }
}

export default async function ProductPage({ params: { slug } }: Props) {

  const product = await getProduct(slug);

  if (!product) {
    redirect('/products');
    // notFound();
  }

  return (
    <div>
      {product.name} Page
      <Image src={`/images/${product.image}`} alt={product.name} width={300} height={300} priority />
      <GoProductsButton />
    </div>
  );
}

export async function generateStaticParams() {
  const products = await getProducts();

  return products.map((product) => ({
    slug: product.id,
  }))
}