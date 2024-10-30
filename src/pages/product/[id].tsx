import { ImageContainer, ProductContainer, ProductDetails } from "@/styles/pages/product"
import Image from "next/image"
import { useRouter } from "next/router"

export default function Product() {
  const router = useRouter()
  return (
    <ProductContainer>
      <ImageContainer>
        {/* <Image /> */}

      </ImageContainer>

      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,90</span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus dolor deleniti voluptate distinctio dolore tempore, sit quaerat expedita minima ab possimus repellendus illum omnis fuga! Blanditiis tempora possimus omnis enim.</p>
        <button>
          Comprar agora
        </button>
      </ProductDetails>
    </ProductContainer>
  )
}