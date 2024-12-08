import { createContext, ReactNode, useEffect, useState } from "react";

interface CarShopProviderProps {
  children: ReactNode
}

interface IItensProps {
  id: string
  img: string
  title: string
  amount: number
}

interface ICarShop {
  items: IItensProps[]
  priceTotal: number
  handleAddItem: (data: IItensProps) => void
  handleRemoveItem: (id: string) => void
}
export const CarShop = createContext<ICarShop>({} as ICarShop)

export function CarShopProvider({ children }: CarShopProviderProps) {
  const [items, setItems] = useState<IItensProps[]>([] as IItensProps[])
  const [priceTotal, setPriceTotal] = useState(0)



  function handleAddItem(data: IItensProps) {
    const product = items.find(item => item.id === data.id)

    if (!product) {
      setItems(state => [...state, data])
    }

  }

  function handleRemoveItem(id: string) {
    setItems(state => state.filter(response => response.id !== id))
  }


  useEffect(() => {
    if (items.length > 0) {
      const total = items.reduce((acc, currentValue) => {

        return {
          ...currentValue,
          amount: acc.amount + currentValue.amount
        }

      })

      setPriceTotal(total.amount)
    } else {
      setPriceTotal(0)
    }
  }, [items])

  return (
    <CarShop.Provider value={{
      items,
      handleAddItem,
      handleRemoveItem,
      priceTotal
    }}>
      {children}
    </CarShop.Provider >
  )
}