import Head from 'next/head'
import Link from 'next/link'
import { fromImageToUrl, API_URL } from '../utils/urls'

import {twoDecimals} from '../utils/format';

export default function Home({ products }) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {products.map((product) => ( 
          <div key={product.name} className="p-10 bg-gray-100 rounded-lg text-black shadow-sm hover:bg-gray-200 cursor-pointer">
            <Link href={`/products/${product.slug}`}>
              <a>
              <div className="mb-10">
                <img className="rounded-lg object-cover h-48 w-full" src={fromImageToUrl(product.image)} />
              </div>
              <div className="text-base">
                <div className="font-bold">{product.name}</div> 
                <div className="text-gray-500">{twoDecimals(product.price)} PLN</div>
              </div>
              </a>
            </Link>
          </div> 
        ))}
      </div>
      
    </div>
  )
}

export async function getStaticProps() {
  // Fetch the products 
  const product_res = await fetch(`${API_URL}/products/`)
  const products = await product_res.json();

  // Return the products as props
  return {
    props: {
      products: products // short: products
    }
  }
}