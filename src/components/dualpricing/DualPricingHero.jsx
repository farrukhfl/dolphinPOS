import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import Button from '../ui/Button'
import TiltCard from '../ui/TiltCard'
import Reveal from '../Reveal'
import { dualPricingHero, trustBadges } from '../../data/dualPricingContent'
import { useBookDemo } from '../../lib/BookDemoContext'

const WORDS = ['Stop', 'paying', 'credit', 'card']

export default function DualPricingHero() {
  const { openModal } = useBookDemo()
  const reduceMotion = useReducedMotion()
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const visualY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 65])

  return (
    <section
      ref={ref}
      className="aurora relative overflow-hidden bg-gradient-to-br from-dolphin-50 via-white to-dolphin-50/60 px-5 pb-20 pt-12 sm:pt-16 lg:px-8 lg:pb-24 lg:pt-20"
    >
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_top_left,#000,transparent_70%)]" aria-hidden="true" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[.95fr_1.05fr] lg:gap-12">
        <div className="text-center lg:text-left">
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-dolphin-700"
          >
            Dual pricing
          </motion.p>

          <h1 className="mx-auto max-w-2xl text-balance text-[2.5rem] font-extrabold leading-[1.05] text-ink sm:text-5xl lg:mx-0 lg:text-[3.5rem]">
            {WORDS.map((word, i) => (
              <motion.span
                key={word}
                className="mr-[0.22em] inline-block"
                initial={reduceMotion ? false : { opacity: 0, y: 24, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.6, delay: 0.05 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              >
                {word}
              </motion.span>
            ))}
            <motion.span
              className="text-gradient inline-block"
              initial={reduceMotion ? false : { opacity: 0, y: 24, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.7, delay: 0.36, ease: [0.22, 1, 0.36, 1] }}
            >
              processing fees.
            </motion.span>
          </h1>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mx-auto mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8 lg:mx-0"
          >
            The cash price and the card price sit side by side at checkout. The processing fee
            is covered by the difference, not by your margin.
          </motion.p>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-3.5 lg:justify-start"
          >
            <Button onClick={openModal} className="shine w-full px-7 py-3.5 text-base sm:w-auto">Book a Demo</Button>
            <Button to="/pricing" variant="secondary" className="w-full px-7 py-3.5 text-base sm:w-auto">See POS Plans</Button>
          </motion.div>
        </div>

        {/* The render ships on a black ground, so it sits on a dark plate */}
        <motion.div style={{ y: visualY }} className="relative mx-auto w-full max-w-2xl lg:mx-0">
          <TiltCard max={6} scale={1.015} className="relative">
            <div
              className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-abyss-700 via-abyss-900 to-black shadow-[0_50px_110px_-40px_rgba(4,11,19,0.7)]"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="grid-lines-dark pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
              <div className="pointer-events-none absolute -left-16 top-1/4 h-64 w-64 rounded-full bg-dolphin-500/25 blur-3xl animate-float-slow" aria-hidden="true" />

              <motion.img
                src={dualPricingHero.image}
                alt={dualPricingHero.alt}
                width="1536"
                height="1024"
                fetchpriority="high"
                decoding="async"
                className="relative block w-full"
                style={reduceMotion ? undefined : { transform: 'translateZ(45px)' }}
                initial={reduceMotion ? false : { opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </TiltCard>
        </motion.div>
      </div>

      <Reveal delay={0.2}>
        <div className="relative z-10 mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4">
          {trustBadges.map(({ label, icon: Icon }) => (
            <div
              key={label}
              className="group flex flex-col items-center gap-2.5 rounded-2xl border border-slate-200 bg-white/85 p-5 text-center shadow-sm backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-dolphin-200"
            >
              <Icon size={20} className="text-dolphin-600 transition duration-300 group-hover:scale-110" />
              <span className="text-xs font-bold leading-4 text-ink">{label}</span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
