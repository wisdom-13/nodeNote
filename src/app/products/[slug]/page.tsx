import React from 'react';
import { notFound } from 'next/navigation';
import { getProduct, getProducts } from '@/service/products';

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
    notFound();
  }

  return (
    <div>
      {product.name} Page
    </div>
  );
}

export async function generateStaticParams() {
  const products = await getProducts();

  return products.map((product) => ({
    slug: product.id,
  }))
}