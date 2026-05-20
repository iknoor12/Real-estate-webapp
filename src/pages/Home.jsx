import Hero from '../components/Hero'
import StatsSection from '../components/StatsSection'
import Recommended from '../components/Recommended'
import WishlistBar from '../components/WishlistBar'
import HowItWorks from '../components/HowItWorks'
import TrustSection from '../components/TrustSection'
import Neighborhoods from '../components/Neighborhoods'
import Testimonials from '../components/Testimonials'
import CTASection from '../components/CTASection'
import ScrollToTop from '../components/ScrollToTop'

function Home() {
  return (
    <>
      <Hero />
      <StatsSection />
      <Recommended />
      <WishlistBar />
      <HowItWorks />
      <TrustSection />
      <Neighborhoods />
      <Testimonials />
      <CTASection />
      <ScrollToTop />
    </>
  )
}

export default Home
