import { styled } from "..";

export const ShopCartContainer = styled('div', {
  position: 'absolute',
  background: '$gray800',
  display: 'flex',
  flexDirection: 'column',
  width: '480px',
  padding: 48,
  right: 0,
  top: 0,
  height: '100vh',
  justifyContent: 'space-between',
  overflowY: 'auto',
  zIndex: 9999,
  transition: 'all',
  transitionDuration: 300,


})

export const Item = styled('div', {
  display: 'flex',

  gap: '1.25rem',
  margin: 0,
})
export const Items = styled('div', {
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  gap: '1.5rem',
  marginTop: '2rem'
})

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 101,
  height: 93,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  padding: '0.25rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  img: {
    objectFit: 'cover',
  }
});


export const InfoContainerShort = styled('div', {
  display: "flex",
  flexDirection: 'column',
  justifyContent: 'space-between',
})

export const ButtonRemover = styled('button', {
  color: '$green500',
  border: "none",
  background: "transparent",
  cursor: 'pointer'
})

export const ButtonCloseModal = styled('button', {
  position: 'absolute',
  top: '24px',
  right: '24px',
  border: "none",
  background: 'transparent',
  color: "$gray100",
  fontSize: '$lg',
  fontWeight: 'bold',
  cursor: 'pointer'
})
export const IconQuantityItemsCart = styled('div', {
  position: 'absolute',
  width: 24,
  height: 24,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 9999,
  top: -8,
  right: -8,
  background: '$green500',
  color: '$gray100',
  
})

export const ContainerButtonCart = styled('div', {
  position: 'relative'
})
export const HeaderShortInfoItem = styled('div', {
  display: "flex",
  flexDirection: 'column',
  gap: '0.125rem',
  width: "100%",


  span: {
    fontSize: '$md',

  }
})


export const CartFooter = styled('div', {
  marginTop: '4rem',
  div: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '1rem'
  },

  button: {
    width: '100%',
    marginTop: '3.40rem',
    backgroundColor: '$green500',
    border: 0,
    color: '$white',
    borderRadius: 8,
    padding: '1.25rem',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '$md',
    
    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed'
    },
    '&:not(:disabled):hover': {
      backgroundColor: '$green300'
    }
  }
})