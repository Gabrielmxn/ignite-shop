import { styled } from "..";

export const SuccessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  height: 656,
  h1: {
    fontSize: '$2xl',
    color: '$gray100',
  },
  p: {
    fontSize: '$xl',
    color: '$gray300',
    maxWidth: 560,
    textAlign: 'center',
    marginTop: '2rem',
    lineHeight: 1.4,
  },
  a: {
    display: 'block',
    marginTop: '5rem',
    fontSize: '$lg',
    color: '$green500',
    textDecoration: 'none',
    fontWeight: 'bold',
    '&:hover': {
      color: '$green300',
    }
  }
});
export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 130,
  height: 130,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 9999999,
  padding: '0.25rem',
  marginTop: '4rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  img: {
    objectFit: 'cover',
  },
  boxShadow: '0px 0px 18px 1px #000000',

  '&:not(:first-child)': {
    marginLeft: '-48px'
  }
});

export const FlexContainerImage = styled('div', {
  display: "flex",
  alignItems: 'center',
  marginBottom: '3rem'
})