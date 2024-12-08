import bagIcon from '@/assets/icon/bag.svg'
import Image from 'next/image'
import { Button } from './iconBagShopCardStyle'
import { ComponentProps } from 'react'

interface IconBagShopCardProps extends ComponentProps<'button'> {
  variant?: '#00875F' | '#202024'
}

export function IconBagShopCard({ variant, ...rest }: IconBagShopCardProps) {
  return (
    <Button onClick={rest.onClick} css={{ $$variant: variant }} >
      <Image src={bagIcon} alt="" width={32} height={32} />
    </Button>
  )
}