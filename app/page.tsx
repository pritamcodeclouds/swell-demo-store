
import { fetchSwellProducts } from '@/app/lib/data';
import ProductCard from '@/app/components/ProductCard';
import Link from "next/link";

export default async function Products() {
  const data = await fetchSwellProducts();
  console.log(data);

  return (
    <>
      <div className="relative bg-cover bg-center h-[600px] bg-gradient-to-r from-blue-500 to-purple-600" style={{ backgroundImage: 'url(/banner.jpg)' }}>
        <div className="absolute inset-0 bg-black opacity-40"></div> {/* Overlay */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
          <h1 className="text-5xl font-extrabold mb-4">Welcome to Our Website!</h1>
          <p className="text-xl mb-6">Explore amazing content and discover something new every day.</p>
          <Link
            href="/login"
            className="inline-block py-3 px-8 bg-yellow-500 text-black text-lg font-medium rounded-lg shadow-md hover:bg-yellow-400 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="sm:py-15 mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p
              className="mt-1 text-4xl font-bold uppercase text-gray-900 sm:text-5xl sm:tracking-tight lg:text-5xl"
            >
              our range of products, for you
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {data &&
            data.results.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
        </div>
      </div>
    </>
  )
}