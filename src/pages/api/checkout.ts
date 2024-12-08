import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../lib/stripe";
import { z } from "zod";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const checkoutSchemaBody = z.object({
    idPrice: z.string().array(),
  })

  

  const { idPrice } = checkoutSchemaBody.parse(req.body)

  console.log(idPrice)

  if(req.method !== 'POST'){
    res.status(405).json({
      error: 'Method not allowed'
    })
  }
  
  if(!idPrice){
    res.status(400).json({
      error: 'Price not Found'
    })
  }
  const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`;
  const cancelUrl = `${process.env.NEXT_URL}/`;

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: successUrl,
    cancel_url: cancelUrl,
    mode: 'payment',
    line_items: idPrice.map(price => {
      return{
        price: price,
        quantity: 1,
      }
    })
  })

  return res.status(201).json({
    checkoutUrl: checkoutSession.url
  })
}