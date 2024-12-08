import { globalStyles } from "@/styles/global";
import { Container, Header } from "@/styles/pages/app";
import type { AppProps } from "next/app";

import logoImg from '@/assets/logo.svg'
import Image from "next/image";
import Link from "next/link";
import { ShopCart } from "@/shared/components/ShopCart";
import { CarShopProvider } from "@/contexts/carShop";


globalStyles()

export default function App({ Component, pageProps }: AppProps) {

  return (
    <Container>
      <CarShopProvider>
        <Header>
          <Link href={'/'}>
            <Image src={logoImg.src} width={logoImg.width} height={logoImg.height} alt="" />
          </Link>
          <ShopCart />
        </Header>
        <Component {...pageProps} />
      </CarShopProvider>
    </Container>
  )
}
