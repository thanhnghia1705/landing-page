import { useMemo, useState } from 'react'

type Plan = {
  name: string
  price: string
  description: string
  features: string[]
  highlighted?: boolean
}

const nav = [
  { label: 'Features', href: '#features' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
] as const

const plans: Plan[] = [
  {
    name: 'Starter',
    price: '$0',
    description: 'For personal projects and quick experiments.',
    features: ['Unlimited pages', 'Basic analytics', 'Community support', '1 workspace'],
  },
  {
    name: 'Pro',
    price: '$24',
    description: 'For shipping teams that care about polish and speed.',
    features: ['Everything in Starter', 'Advanced analytics', 'Custom domains', '5 workspaces', 'Priority support'],
    highlighted: true,
  },
  {
    name: 'Business',
    price: '$79',
    description: 'For growing companies that need controls and scale.',
    features: ['Everything in Pro', 'SAML SSO', 'Audit logs', 'Role permissions', 'Dedicated success'],
  },
]

const faqs = [
  {
    q: 'Is this a template or a component library?',
    a: 'It’s a landing page starter built with React + Tailwind. The sections are plain components you can copy, delete, or replace.',
  },
  {
    q: 'Can I use this for a real product?',
    a: 'Yes—swap the copy, connect your links, and wire up the buttons to your onboarding flow. The styling is intentionally neutral and easy to brand.',
  },
  {
    q: 'Does it work on mobile?',
    a: 'Yes. Layouts are built mobile-first with responsive typography, spacing, and grids.',
  },
] as const

function LogoMark() {
  return (
    <div className="flex items-center gap-2">
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-slate-900 to-slate-700 text-white shadow-sm">
        P
      </span>
      <span className="text-sm font-extrabold tracking-tight text-slate-900">
        Pulse<span className="text-slate-500">.io</span>
      </span>
    </div>
  )
}

function Icon({ name }: { name: 'spark' | 'shield' | 'bolt' | 'wand' | 'chart' | 'code' }) {
  const path = useMemo(() => {
    switch (name) {
      case 'spark':
        return 'M12 2l1.6 5.2L19 9l-5.4 1.8L12 16l-1.6-5.2L5 9l5.4-1.8L12 2z'
      case 'shield':
        return 'M12 2l7 4v6c0 5-3 9-7 10-4-1-7-5-7-10V6l7-4z'
      case 'bolt':
        return 'M13 2L4 14h7l-1 8 9-12h-7l1-8z'
      case 'wand':
        return 'M4 20l8-8m0 0l4-4M12 12l-8-8'
      case 'chart':
        return 'M4 19V5m5 14V9m5 10v-7m5 7v-4'
      case 'code':
        return 'M9 18l-5-5 5-5m6 10l5-5-5-5'
      default:
        return ''
    }
  }, [name])

  return (
    <span className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-900/5 ring-1 ring-slate-900/10">
      <svg viewBox="0 0 24 24" className="h-5 w-5 text-slate-900" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d={path} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  )
}

function SectionHeading({
  chip,
  title,
  subtitle,
}: {
  chip: string
  title: string
  subtitle: string
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <div className="chip mx-auto w-fit">{chip}</div>
      <h2 className="mt-5 text-balance text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">{title}</h2>
      <p className="mt-4 text-pretty text-base leading-7 text-slate-600 sm:text-lg">{subtitle}</p>
    </div>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-dvh bg-white">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-indigo-200/50 via-sky-200/40 to-transparent blur-3xl" />
        <div className="absolute -bottom-40 right-[-6rem] h-[28rem] w-[28rem] rounded-full bg-gradient-to-br from-emerald-200/40 via-teal-200/30 to-transparent blur-3xl" />
      </div>

      <header className="sticky top-0 z-30 border-b border-slate-900/5 bg-white/75 backdrop-blur">
        <div className="container-x flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <LogoMark />
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-slate-600 hover:text-slate-900"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a href="#pricing" className="btn btn-secondary">
              View pricing
            </a>
            <a href="#cta" className="btn btn-primary">
              Get started
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-xl p-2 ring-1 ring-slate-900/10 hover:bg-slate-50 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 text-slate-900" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>

        {menuOpen ? (
          <div className="border-t border-slate-900/5 bg-white md:hidden">
            <div className="container-x py-4">
              <div className="grid gap-3">
                {nav.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                  >
                    {item.label}
                  </a>
                ))}
                <div className="mt-2 grid grid-cols-2 gap-3">
                  <a href="#pricing" onClick={() => setMenuOpen(false)} className="btn btn-secondary">
                    Pricing
                  </a>
                  <a href="#cta" onClick={() => setMenuOpen(false)} className="btn btn-primary">
                    Start
                  </a>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </header>

      <main>
        <section className="section">
          <div className="container-x">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <div className="chip w-fit">New: Ship a landing page in minutes</div>
                <h1 className="mt-5 text-balance text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
                  A modern landing page that looks expensive, by default.
                </h1>
                <p className="mt-5 text-pretty text-base leading-7 text-slate-600 sm:text-lg">
                  Pulse helps you turn “we should make a website” into a polished launch. Clean sections, modern spacing,
                  accessible components, and Tailwind-powered styling you can brand fast.
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a href="#cta" className="btn btn-primary">
                    Get started
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                  <a href="#features" className="btn btn-secondary">
                    Explore features
                  </a>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
                  {[
                    { k: '99.9%', v: 'Uptime SLA' },
                    { k: '<1s', v: 'First paint' },
                    { k: 'A11y', v: 'Accessible by design' },
                  ].map((m) => (
                    <div key={m.v} className="rounded-2xl bg-white/70 p-4 ring-1 ring-slate-900/10">
                      <div className="text-lg font-extrabold tracking-tight text-slate-900">{m.k}</div>
                      <div className="mt-1 text-sm font-semibold text-slate-600">{m.v}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-slate-900/5 to-transparent blur-2xl" />
                <div className="rounded-3xl bg-white shadow-glow ring-1 ring-slate-900/10">
                  <div className="flex items-center justify-between border-b border-slate-900/10 px-5 py-4">
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                      <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                    </div>
                    <div className="text-xs font-semibold text-slate-500">pulse.io / dashboard</div>
                    <div className="h-6 w-6 rounded-full bg-slate-900/5 ring-1 ring-slate-900/10" />
                  </div>

                  <div className="p-5 sm:p-6">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-700 p-5 text-white">
                        <div className="text-xs font-semibold text-white/70">Conversion</div>
                        <div className="mt-2 text-3xl font-extrabold tracking-tight">+38%</div>
                        <div className="mt-4 h-20 rounded-xl bg-white/10" />
                      </div>
                      <div className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-900/10">
                        <div className="text-xs font-semibold text-slate-600">Active users</div>
                        <div className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900">12,402</div>
                        <div className="mt-4 flex items-end gap-1">
                          {[40, 54, 48, 68, 52, 74, 60].map((h, i) => (
                            <div
                              key={i}
                              className="w-full rounded-md bg-slate-900/15"
                              style={{ height: `${h}px` }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 rounded-2xl bg-white p-5 ring-1 ring-slate-900/10">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm font-bold text-slate-900">Launch checklist</div>
                          <div className="mt-1 text-sm text-slate-600">Everything you need, pre-wired.</div>
                        </div>
                        <span className="chip">Ready</span>
                      </div>
                      <div className="mt-4 grid gap-2">
                        {['Hero + CTA', 'Features grid', 'Testimonials', 'Pricing + FAQ'].map((t) => (
                          <div key={t} className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3">
                            <span className="text-sm font-semibold text-slate-700">{t}</span>
                            <span className="grid h-6 w-6 place-items-center rounded-full bg-emerald-500/10 text-emerald-700 ring-1 ring-emerald-600/20">
                              <svg
                                viewBox="0 0 24 24"
                                className="h-4 w-4"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                              >
                                <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-14 rounded-3xl bg-white/70 p-6 ring-1 ring-slate-900/10 sm:p-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="text-sm font-bold text-slate-900">Trusted by teams that ship</div>
                  <div className="mt-1 text-sm text-slate-600">Logos as text for a clean, fast starter.</div>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm font-extrabold tracking-tight text-slate-500 sm:grid-cols-4 sm:gap-6">
                  {['Northwind', 'Acme', 'Stellar', 'Monorail'].map((l) => (
                    <div key={l} className="rounded-2xl bg-white px-4 py-3 text-center ring-1 ring-slate-900/10">
                      {l}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="section border-t border-slate-900/5">
          <div className="container-x">
            <SectionHeading
              chip="Features"
              title="Everything you need to look credible on day one"
              subtitle="A balanced layout with conversion-focused components, consistent spacing, and utility classes that stay readable as you customize."
            />

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: 'bolt', title: 'Fast by default', desc: 'Lean sections with no heavy UI dependencies.' },
                { icon: 'shield', title: 'Accessible UI', desc: 'Good contrast, focus rings, and semantic structure.' },
                { icon: 'chart', title: 'Clear hierarchy', desc: 'Typography and spacing tuned for landing pages.' },
                { icon: 'wand', title: 'Easy branding', desc: 'Neutral palette you can swap in minutes.' },
                { icon: 'code', title: 'Clean components', desc: 'Copy/paste sections without rewriting everything.' },
                { icon: 'spark', title: 'Modern polish', desc: 'Subtle gradients, rings, and soft shadows.' },
              ].map((f) => (
                <div key={f.title} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-900/10">
                  <Icon name={f.icon as any} />
                  <div className="mt-4 text-base font-extrabold tracking-tight text-slate-900">{f.title}</div>
                  <div className="mt-2 text-sm leading-6 text-slate-600">{f.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="section border-t border-slate-900/5">
          <div className="container-x">
            <SectionHeading
              chip="Testimonials"
              title="Loved by designers and engineers"
              subtitle="Short, punchy quotes with a crisp card style—easy to replace with your own social proof."
            />

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {[
                {
                  quote:
                    'We launched in a weekend and it looked like a full design sprint happened. The spacing and type scale are spot-on.',
                  name: 'Mina Park',
                  title: 'Product Designer',
                },
                {
                  quote:
                    'Everything is a simple component. No weird abstractions—just React + Tailwind done cleanly.',
                  name: 'Eli Romero',
                  title: 'Frontend Engineer',
                },
                {
                  quote:
                    'The pricing + FAQ sections converted better than our old site with half the work. It’s a great baseline.',
                  name: 'Asha Singh',
                  title: 'Founder',
                },
              ].map((t) => (
                <figure key={t.name} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-900/10">
                  <blockquote className="text-sm leading-7 text-slate-700">“{t.quote}”</blockquote>
                  <figcaption className="mt-5 flex items-center justify-between">
                    <div>
                      <div className="text-sm font-extrabold tracking-tight text-slate-900">{t.name}</div>
                      <div className="mt-0.5 text-xs font-semibold text-slate-500">{t.title}</div>
                    </div>
                    <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-slate-900/10 to-slate-900/0 ring-1 ring-slate-900/10" />
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="section border-t border-slate-900/5">
          <div className="container-x">
            <SectionHeading
              chip="Pricing"
              title="Simple plans that scale with you"
              subtitle="Use these cards as-is or replace with your product’s tiers. The highlighted plan is designed to draw attention without feeling spammy."
            />

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {plans.map((p) => (
                <div
                  key={p.name}
                  className={[
                    'rounded-3xl bg-white p-6 ring-1',
                    p.highlighted
                      ? 'ring-slate-900 shadow-glow'
                      : 'ring-slate-900/10 shadow-sm',
                  ].join(' ')}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-base font-extrabold tracking-tight text-slate-900">{p.name}</div>
                      <div className="mt-1 text-sm text-slate-600">{p.description}</div>
                    </div>
                    {p.highlighted ? <span className="chip">Most popular</span> : null}
                  </div>

                  <div className="mt-6 flex items-end gap-2">
                    <div className="text-4xl font-extrabold tracking-tight text-slate-900">{p.price}</div>
                    <div className="pb-1 text-sm font-semibold text-slate-500">/ mo</div>
                  </div>

                  <a
                    href="#cta"
                    className={['btn mt-6 w-full', p.highlighted ? 'btn-primary' : 'btn-secondary'].join(' ')}
                  >
                    Choose {p.name}
                  </a>

                  <ul className="mt-6 space-y-3 text-sm text-slate-700">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <span className="mt-0.5 grid h-5 w-5 place-items-center rounded-full bg-emerald-500/10 text-emerald-700 ring-1 ring-emerald-600/20">
                          <svg
                            viewBox="0 0 24 24"
                            className="h-4 w-4"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        <span className="leading-6">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="section border-t border-slate-900/5">
          <div className="container-x">
            <SectionHeading
              chip="FAQ"
              title="Questions, answered"
              subtitle="A compact FAQ section that’s easy to expand. These are plain details elements for accessibility and simplicity."
            />

            <div className="mx-auto mt-12 max-w-3xl space-y-4">
              {faqs.map((f) => (
                <details
                  key={f.q}
                  className="group rounded-2xl bg-white p-5 ring-1 ring-slate-900/10 open:shadow-sm"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                    <span className="text-sm font-extrabold tracking-tight text-slate-900">{f.q}</span>
                    <span className="grid h-8 w-8 place-items-center rounded-xl bg-slate-900/5 ring-1 ring-slate-900/10">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-4 w-4 text-slate-900 transition group-open:rotate-45"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="cta" className="section border-t border-slate-900/5">
          <div className="container-x">
            <div className="relative overflow-hidden rounded-3xl bg-slate-900 px-6 py-12 text-white shadow-glow sm:px-10">
              <div className="pointer-events-none absolute inset-0 opacity-40">
                <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-indigo-500 blur-3xl" />
                <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-emerald-500 blur-3xl" />
              </div>

              <div className="relative grid gap-8 lg:grid-cols-2 lg:items-center">
                <div>
                  <div className="chip bg-white/10 text-white ring-white/15">Ready to launch?</div>
                  <h2 className="mt-5 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
                    Turn your idea into a site you’re proud to share.
                  </h2>
                  <p className="mt-4 text-pretty text-base leading-7 text-white/80 sm:text-lg">
                    Replace the copy, plug in your links, and ship. This starter is built to be edited quickly without
                    losing cohesion.
                  </p>
                </div>

                <div className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 sm:p-6">
                  <div className="text-sm font-bold">Get product updates</div>
                  <p className="mt-1 text-sm text-white/75">No spam. Unsubscribe anytime.</p>
                  <form
                    className="mt-4 flex flex-col gap-3 sm:flex-row"
                    onSubmit={(e) => {
                      e.preventDefault()
                      alert('Thanks! (wire this to your email provider)')
                    }}
                  >
                    <input
                      required
                      type="email"
                      placeholder="you@company.com"
                      className="h-11 w-full rounded-xl bg-white/10 px-4 text-sm text-white placeholder:text-white/50 ring-1 ring-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                    />
                    <button type="submit" className="btn btn-primary h-11 bg-white text-slate-900 hover:bg-white/90">
                      Join waitlist
                    </button>
                  </form>
                  <div className="mt-4 text-xs text-white/60">
                    By subscribing you agree to our terms and privacy policy.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-900/5 py-10">
        <div className="container-x">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <LogoMark />
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-semibold text-slate-600">
              {nav.map((i) => (
                <a key={i.href} href={i.href} className="hover:text-slate-900">
                  {i.label}
                </a>
              ))}
              <a href="#" className="hover:text-slate-900">
                Privacy
              </a>
              <a href="#" className="hover:text-slate-900">
                Terms
              </a>
            </div>
          </div>
          <div className="mt-6 text-sm text-slate-500">© {new Date().getFullYear()} Pulse. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}

