import Stripe from 'stripe'
import { z } from 'zod'

const envSchema = z.object({
  'STRIPE_SECRET_KEY': z.string(),
})

const { STRIPE_SECRET_KEY } = envSchema.parse(process.env)

export const stripe = new Stripe(STRIPE_SECRET_KEY, {
  apiVersion: '2024-09-30.acacia',
  appInfo: {
    name: 'Ignite Shop',
  }
})