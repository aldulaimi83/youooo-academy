import Stripe from 'stripe'
import { loadStripe } from '@stripe/stripe-js'

export function getStripeServer(): Stripe {
  const key = process.env.STRIPE_SECRET_KEY
  if (!key) throw new Error('STRIPE_SECRET_KEY is not set')
  return new Stripe(key, { apiVersion: '2025-02-24.acacia' })
}

export const getStripe = () =>
  loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)
