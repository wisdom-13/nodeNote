import React from 'react';
import { notFound } from 'next/navigation';

type Props = {
  params: {
    slug: string;
  }
}

export default function PantsPage({ params }: Props) {
  if (params.slug === 'nothing') {
    notFound();
  }

  return (
    <div>
      {params.slug} Page
    </div>
  );
}

export function generateStaticParams() {
  const products = ['pants', 'skirt'];

  return products.map((product) => ({
    slug: product,
  }))
}