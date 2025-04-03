"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function ProductCard({ product }) {
  const [isLoading, setLoading] = useState(true);
  return (
    <Link href={`/products/${product.id}`} className="group">
      <div className="aspect-w-1 aspect-h-1 w-full   overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
        <div style={{ width: '100%', height: '400px', position: 'relative' }}>
          <Image
            alt=""
            src={product.images[0].file.url}
            fill
            objectFit="cover"

          />
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between text-base font-bold text-gray-900">
        <h3>{product.name}</h3>
        <p>${product.price}</p>
      </div>

    </Link>
  )
}