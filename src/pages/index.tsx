import { HomeContainer, Product } from "@/styles/pages/home";
import Image from "next/image";

import camiseta1 from '@/assets/shirt1.png'
import camiseta2 from '@/assets/shirt2.png'
import camiseta3 from '@/assets/shirt3.png'

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={camiseta1} width={520} height={480} alt="" />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product>
        <Image src={camiseta2} width={520} height={480} alt="" />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 80,90</span>
        </footer>
      </Product>
    </HomeContainer>
  );
}
