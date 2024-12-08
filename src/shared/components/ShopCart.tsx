import { ButtonCloseModal, ButtonRemover, CartFooter, ContainerButtonCart, HeaderShortInfoItem, IconQuantityItemsCart, ImageContainer, InfoContainerShort, Item, Items, ShopCartContainer } from "@/styles/components/ShopCart";
import { IconBagShopCard } from "./iconBagShopCard";
import { useState } from "react";
import { useCarShop } from "@/hooks/useCarShop";
import Image from "next/image";
import { convertPriceFromBRL } from "@/utils/convertPriceBRL";
import axios, { AxiosError } from "axios";
interface AxiosProps {
  checkoutUrl: string
}

export function ShopCart() {
  const [open, setOpen] = useState(false)
  const { items, handleRemoveItem, priceTotal } = useCarShop()
  const [isCreateCheckoutSession, setIsCreateCheckoutSession] = useState(false)

  async function handleBuyProduct() {
    try {
      setIsCreateCheckoutSession(true)
      const response = await axios.post<AxiosProps>('/api/checkout', {
        idPrice: items.map(item => {
          return (
            item.id
          )
        }),
      })

      const { checkoutUrl } = response.data


      window.location.href = checkoutUrl;

    } catch (err) {
      if (err instanceof AxiosError) {
        setIsCreateCheckoutSession(false)
      }


      alert("Deu problema na API")
    }
  }

  return (
    <>
      <ContainerButtonCart>
        <IconBagShopCard onClick={() => setOpen(true)} variant="#202024" />

        {items.length > 0 && (<IconQuantityItemsCart>
          {items.length}
        </IconQuantityItemsCart>)
        }
      </ContainerButtonCart>

      {
        open && (
          <ShopCartContainer>
            <ButtonCloseModal onClick={() => setOpen(false)}>
              X
            </ButtonCloseModal>


            <Items>
              <h2>Sacola de compras</h2>
              {
                items.map(item => {
                  return (
                    <Item key={item.id}>
                      <ImageContainer>
                        <Image src={item.img} width={60} height={60} alt='' />
                      </ImageContainer>


                      <InfoContainerShort>
                        <HeaderShortInfoItem>
                          <span>{item.title}</span>
                          <strong>{convertPriceFromBRL(item.amount)}</strong>
                        </HeaderShortInfoItem>
                        <div>
                          <ButtonRemover onClick={() => handleRemoveItem(item.id)}>Remover</ButtonRemover>
                        </div>
                      </InfoContainerShort>
                    </Item>
                  )
                })
              }



            </Items>






            <CartFooter>
              <div>
                <span>Quantidade</span>
                <span>{`${items.length} itens`}</span>
              </div>
              <div>
                <strong>Valor total</strong>
                <strong>{convertPriceFromBRL(priceTotal)}</strong>
              </div>
              <button disabled={isCreateCheckoutSession} onClick={handleBuyProduct}>
                Finalizar Compra
              </button>
            </CartFooter>
          </ShopCartContainer >
        )
      }

    </>
  )
}