import Head from 'next/head'

import { fromImageToUrl, API_URL } from '../../utils/urls'
import { twoDecimals } from '../../utils/format'


const Product = ({ product }) => {
    return (
        <div>
            <Head>
                {product.meta_title && 
                    <title>{product.meta_title}</title>
                }
                {product.meta_description && 
                    <meta name="description" content={product.meta_description} />
                }
            </Head>

            <h3>{product.name}</h3>
            <img src={fromImageToUrl(product.image)} />
            <h3>{product.name}</h3>
            <p>{twoDecimals(product.price)} PLN</p>

            <p>
                {product.content}
            </p>
        </div>
    )
}

export async function getStaticProps({ params: { slug } }) {
    const product_res = await fetch(`${API_URL}/products/?slug=${slug}`)
    const found = await product_res.json()

    return {
        props: {
            product: found[0] // because the API response for filters is an array
        }
    }
}

export async function getStaticPaths() {
    // Retrieve all possible paths
    const products_res = await fetch(`${API_URL}/products/`)
    const products = await products_res.json()

    // Return all paths
    return {
        paths: products.map(product => ({
            params: { slug: String(product.slug) }
        })),
        fallback: false // Tells to nextjs to show 404 if the param is not matched
    }
}

export default Product