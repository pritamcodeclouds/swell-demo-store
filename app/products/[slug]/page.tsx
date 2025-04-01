
"use client";
import swell from 'swell-js'
import Image from 'next/image'
import { useEffect, useState, use } from 'react';

// This is a mock API call, replace it with your actual API request
const fetchData = async (slug) => {
  swell.init('pb24dempapp', 'pk_Zg9elOkHxjA9Ea78lEoJMB6D5S8Owvyl');
  // swell.init( process.env.NEXT_PUBLIC_SWELL_API_STORE_ID!,  process.env.NEXT_PUBLIC_SWELL_API_API_KEY!)
  const swellProduct = await swell.products.get(slug)
 // const data = await res.json();
  return swellProduct;
};

const PostPage = ({ params }) => {
  const { slug } = use(params);
  //const  slug  = React.use(params.slug); // Get the `id` from the dynamic route params
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch data when component mounts or `id` changes
    const getProduct = async () => {
      const productData = await fetchData(slug);
      setProduct(productData);
    };
    
    getProduct();
  }, [slug]); // Re-fetch when the `id` changes

  // Loading or error state
  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex h-screen flex-col justify-between">
      <div className="mx-auto mt-16 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mx-auto flex flex-col sm:flex-row">
          <Image
            alt="coffee"
            className="rounded-lg"
            src={product.images[0].file.url}
            width={560}
            height={640}
            objectFit="cover"
          />
          <div className="mt-10 flex flex-col sm:mt-0 sm:ml-10">
            <h1 className="mt-1 text-4xl font-bold uppercase text-gray-900 sm:text-5xl sm:tracking-tight lg:text-5xl">
              {product.name}
            </h1>
            <h1 className="mt-3 text-4xl font-bold text-gray-500 sm:text-3xl sm:tracking-tight lg:text-3xl">
              ${product.price}
            </h1>
            <button
              className="mt-5 rounded-md border border-transparent bg-yellow-600 px-4 py-3 font-medium text-white shadow-sm hover:bg-orange-400 sm:px-8"
              onClick={() => checkout(product.id)}
            >
              Checkout
            </button>
            <div className="mt-10 mb-5 border-t border-gray-200 pt-10 font-bold">
              Description
            </div>
            <p className="max-w-xl">{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostPage;
