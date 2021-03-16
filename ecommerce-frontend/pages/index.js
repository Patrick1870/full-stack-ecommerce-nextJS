import Head from 'next/head'

import products from '../products';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid grid-flow-row grid-cols-4 grid-rows-3 gap-4">
      {products.map((product) => (
        <div key={product.name} className="p-10 bg-gray-100 rounded-lg text-black shadow-sm hover:bg-gray-200 cursor-pointer">
          <div className="mb-10">
            <img className="rounded-lg object-cover h-48 w-full" src={`http://localhost:1337${product.image.url}`} />
          </div>
          <div className="text-base">
            <div className="font-bold">{product.name}</div> 
            <div className="text-gray-500">{product.price} PLN</div>
          </div>
          
          
        </div> 
      ))}
      </div>
      
    </div>
  )
}
