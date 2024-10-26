import { HomeContainer, Product } from "@/styles/pages/home";
import Image from "next/image";
import { useKeenSlider } from 'keen-slider/react'
import camiseta1 from '@/assets/shirt1.png'
import camiseta2 from '@/assets/shirt2.png'
import camiseta3 from '@/assets/shirt3.png'


import 'keen-slider/keen-slider.min.css'
import { GetServerSideProps } from "next";
import { stripe } from "@/lib/stripe";
import type Stripe from "stripe";

interface HomeProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: number | null
  }[]
}
export default function Home({ products }: HomeProps) {
  const [slideRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48
    }
  })
  return (
    <HomeContainer ref={slideRef} className="keen-slider">
      {products.map(product => {
        return (
          <Product key={product.id} className="keen-slider__slide">
            <Image src={product.imageUrl} width={520} height={480} alt="" placeholder="blur" blurDataURL={camiseta1.src} />

            <footer>
              <strong>{product.name}</strong>
              <span>{product.price}</span>
            </footer>
          </Product>
        )
      })}

    </HomeContainer>
  );
}


export const getServerSideProps: GetServerSideProps = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"]
  })


  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount && new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format((price.unit_amount / 100))
    }
  })

  return {
    props: {
      products
    }
  }

}