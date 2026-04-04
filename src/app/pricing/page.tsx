import Link from 'next/link'
import { CheckCircle, Zap } from 'lucide-react'
import { plans } from '@/lib/courses'
import { cn } from '@/lib/utils'

export default function PricingPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-20">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-white mb-4">Simple, honest pricing</h1>
        <p className="text-slate-400 text-lg max-w-xl mx-auto">
          Start free. Upgrade when you're ready. No hidden fees, no tricks.
        </p>
      </div>

      {/* Plans */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={cn(
              'relative bg-[#111118] border rounded-2xl p-8 flex flex-col',
              plan.popular
                ? 'border-violet-500/50 shadow-xl shadow-violet-500/10'
                : 'border-white/5'
            )}
          >
            {plan.popular && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                <span className="bg-violet-600 text-white text-xs px-4 py-1.5 rounded-full font-semibold flex items-center gap-1">
                  <Zap size={12} /> Most popular
                </span>
              </div>
            )}

            <div className="mb-6">
              <h2 className="text-white font-semibold text-lg mb-1">{plan.name}</h2>
              <div className="flex items-end gap-1">
                <span className="text-4xl font-bold text-white">${plan.price}</span>
                {plan.price > 0 && plan.id !== 'lifetime' && (
                  <span className="text-slate-500 mb-1.5">/month</span>
                )}
                {plan.id === 'lifetime' && (
                  <span className="text-slate-500 mb-1.5">one-time</span>
                )}
              </div>
            </div>

            <ul className="space-y-3 flex-1 mb-8">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-sm text-slate-300">
                  <CheckCircle size={16} className="text-emerald-500 mt-0.5 shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>

            <Link
              href="/auth/signup"
              className={cn(
                'block text-center py-3.5 rounded-xl font-semibold text-sm transition-all',
                plan.popular
                  ? 'bg-violet-600 hover:bg-violet-500 text-white hover:scale-105'
                  : 'bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300'
              )}
            >
              {plan.price === 0 ? 'Get started free' : `Get ${plan.name}`}
            </Link>
          </div>
        ))}
      </div>

      {/* FAQ */}
      <div className="border-t border-white/5 pt-16">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently asked questions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            {
              q: 'Can I try before buying?',
              a: 'Yes — the Starter plan gives you access to 2 full courses completely free, no credit card required.',
            },
            {
              q: 'What payment methods do you accept?',
              a: 'We accept all major credit/debit cards via Stripe. Payments are secure and encrypted.',
            },
            {
              q: 'Is there a refund policy?',
              a: 'Yes, we offer a 7-day money-back guarantee. No questions asked.',
            },
            {
              q: 'Do certificates expire?',
              a: "No. Once you earn a certificate, it's yours forever. You can share it on LinkedIn.",
            },
            {
              q: 'What is the Lifetime plan?',
              a: 'Pay once and access all current and future courses forever — including courses not yet released.',
            },
            {
              q: 'Can I switch plans?',
              a: 'Yes, you can upgrade or downgrade at any time from your dashboard.',
            },
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#111118] border border-white/5 rounded-xl p-6">
              <h3 className="text-white font-medium mb-2">{q}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
