import Image from "next/image";
import { GetStaticProps } from "next";
import { stripe } from "@/lib/stripe";
import type Stripe from "stripe";
import { useKeenSlider } from 'keen-slider/react'
import { FooterInfo, HomeContainer, Product } from "@/styles/pages/home";
import camiseta1 from '@/assets/shirt1.png'

import 'keen-slider/keen-slider.min.css'
import Link from "next/link";
import Head from "next/head";
import { IconBagShopCard } from "@/shared/components/iconBagShopCard";
import { useCarShop } from "@/hooks/useCarShop";
import { convertPriceFromBRL } from "@/utils/convertPriceBRL";

interface HomeProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: number
    defaultPriceId: string
  }[]
}
export default function Home({ products }: HomeProps) {
  const { handleAddItem } = useCarShop()
  const [slideRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48
    }
  })
  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>
      <HomeContainer ref={slideRef} className="keen-slider">
        {products.map(product => {
          return (

            <Product key={product.id} className="keen-slider__slide">
              <Link href={`/product/${product.id}`} prefetch={false}>
                <Image src={product.imageUrl} width={520} height={480} alt="" placeholder="blur" blurDataURL={camiseta1.src} />
              </Link>
              <footer>
                <FooterInfo>
                  <strong>{product.name}</strong>
                  <span>{convertPriceFromBRL(product.price)}</span>
                </FooterInfo>
                <IconBagShopCard onClick={() => handleAddItem({
                  id: product.defaultPriceId,
                  amount: product.price as number,
                  title: product.name,
                  img: product.imageUrl
                })} variant="#00875F" />
              </footer>
            </Product>

          )
        })}

      </HomeContainer>
    </>
  );
}


export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"]
  })


  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount,
      defaultPriceId: price.id
    }
  })

  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 2, //2 hours
  }

}