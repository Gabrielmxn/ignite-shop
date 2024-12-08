import { useCarShop } from "@/hooks/useCarShop"
import { stripe } from "@/lib/stripe"
import { ImageContainer, ProductContainer, ProductDetails } from "@/styles/pages/product"
import { convertPriceFromBRL } from "@/utils/convertPriceBRL"
import { GetStaticPaths, GetStaticProps } from "next"
import Head from "next/head"
import Image from "next/image"
import { useRouter } from "next/router"
import Stripe from "stripe"


interface ProductProps {
  product: {
    id: string
    name: string
    imageUrl: string
    price: number
    description: string
    defaultPriceId: string
  }
}


export default function Product({ product }: ProductProps) {
  const { handleAddItem } = useCarShop()

  const { isFallback } = useRouter()

  if (isFallback) {
    return <p>loading...</p>
  }


  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>
      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt="" />
        </ImageContainer>
        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{convertPriceFromBRL(product.price)}</span>
          <p>{product.description}</p>
          <button onClick={() => handleAddItem({
            amount: product.price,
            id: product.defaultPriceId,
            img: product.imageUrl,
            title: product.name
          })}>
            Colocar na sacola
          </button>
        </ProductDetails>
      </ProductContainer >
    </>
  )
}
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [

    ],
    fallback: true
  }
}
//clarity
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
  const productId = params?.id as string

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })
  const price = product.default_price as Stripe.Price
  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: price.unit_amount,
        description: product.description,
        defaultPriceId: price.id
      }
    },
    revalidate: 60 * 60 * 1,
  }
}