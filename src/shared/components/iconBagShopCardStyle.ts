import { styled } from "@/styles";

export const Button = styled('button', {
  background: '$$variant',
  border: 'none',
  padding: '0.75rem',
  borderRadius: 6,
  cursor: 'pointer',
  zIndex: 9999,
 '&:hover': {
  opacity: 0.9,
 }
})