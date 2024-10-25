import { styled } from "@/styles";

const Button = styled('button', {
  backgroundColor: "$rocketseat",
  borderRadius: 4,
  padding: '4px 8px',
  border: 0,
  color: "$green500",

  span: {
    fontWeight: 'bold'
  },

  '&:hover': {
    filter: 'brightness(0.8)'
  }
})

export default function Home() {
  return (
    <Button>
      Enviar
      <span>Teste</span>
    </Button>
  );
}
