import { stripe } from "@/lib/stripe";
import { FlexContainerImage, ImageContainer, SuccessContainer } from "@/styles/pages/success";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Stripe from "stripe";

interface SuccessProps {
  costumerName: string;
  product: {
    name: string;
    images: string;
  }[]
}

export default function Success({ costumerName, product }: SuccessProps) {
  console.log(product)
  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>
      </Head>
      <SuccessContainer>


        <FlexContainerImage>
          {product.map((response) => {
            return (
              <ImageContainer key={response.images[0]}>
                <Image src={response.images[0]} width={120} height={110} alt="" />
              </ImageContainer>
            )
          })}
        </FlexContainerImage>

        <h1>Compra efetuada!</h1>

        <p>
          Uhuul <strong>{costumerName}</strong>, sua compra de <strong>{product.length}</strong> camiseta(s) já está a caminho da sua casa.
        </p>

        <Link href="/">
          Voltar ao catálogo
        </Link>
      </SuccessContainer>
    </>
  )
}


export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  const sessionId = String(query.session_id);


  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product']
  });
  const costumerName = session.customer_details?.name;
  const product = session.line_items?.data.map((response) => {
    return {
      ...response.price?.product as Stripe.Product
    }
  });
  console.log(product)
  return {
    props: {
      costumerName,
      product,
    }
  }
}