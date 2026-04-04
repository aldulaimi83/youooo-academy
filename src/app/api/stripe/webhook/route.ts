import { NextRequest, NextResponse } from 'next/server'
import { getStripeServer } from '@/lib/stripe'
import Stripe from 'stripe'

export async function POST(req: NextRequest) {
  const body = await req.text()
  const sig = req.headers.get('stripe-signature')!

  let event: Stripe.Event

  const stripe = getStripeServer()
  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET!)
  } catch (err) {
    console.error('Webhook signature error:', err)
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object as Stripe.Checkout.Session
      // TODO: Update user's subscription status in Supabase
      // const userId = session.metadata?.userId
      console.log('Payment completed for user:', session.metadata?.userId)
      break
    }
    case 'customer.subscription.deleted': {
      // TODO: Revoke user's access in Supabase
      console.log('Subscription cancelled')
      break
    }
  }

  return NextResponse.json({ received: true })
}
