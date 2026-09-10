import { useState } from 'react'
import Reveal from '../components/Reveal'
import SavingsCalculator from '../components/SavingsCalculator'
import FAQAccordion from '../components/FAQAccordion'
import FinalCTA from '../components/FinalCTA'
import VideoModal from '../components/VideoModal'
import Hero from '../components/home/Hero'
import TrustBar from '../components/home/TrustBar'
import PlatformBento from '../components/home/PlatformBento'
import StickySteps from '../components/home/StickySteps'
import StatsBand from '../components/home/StatsBand'
import IndustryTabs from '../components/home/IndustryTabs'
import SwitchSection from '../components/home/SwitchSection'
import ComparisonTable from '../components/home/ComparisonTable'
import TestimonialFeature from '../components/home/TestimonialFeature'
import { faqs, overviewVideo } from '../data/homeContent'

export default function Home() {
  const [video, setVideo] = useState(null)

  return (
    <>
      <Hero onWatchVideo={() => setVideo(overviewVideo)} />

      <TrustBar />

      <PlatformBento />

      <StickySteps />

      <StatsBand />

      <IndustryTabs />

      <SwitchSection />

      {/* Run the numbers: calculator first, then the line-by-line comparison */}
      <section className="bg-slate-50 px-5 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-dolphin-700">Run the numbers</p>
              <h2 className="text-balance text-3xl font-extrabold leading-tight text-ink sm:text-4xl lg:text-5xl">
                See what you are paying to accept a card today.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Move the sliders to match your store. The gap is what dual pricing hands back to you.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="mt-14">
            <SavingsCalculator showHeading={false} />
          </Reveal>

          <div className="mt-20">
            <Reveal>
              <h3 className="mb-8 text-center text-2xl font-extrabold text-ink sm:text-3xl">
                Dolphin POS vs. a traditional POS
              </h3>
            </Reveal>
            <ComparisonTable />
          </div>
        </div>
      </section>

      <TestimonialFeature />

      <FAQAccordion
        items={faqs}
        title="Straight answers about Dolphin POS"
        body="What merchants usually want to know before switching to dual pricing."
      />

      <FinalCTA onWatchVideo={() => setVideo(overviewVideo)} />

      <VideoModal video={video} onClose={() => setVideo(null)} />
    </>
  )
}
