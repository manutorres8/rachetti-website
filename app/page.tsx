import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import AboutUs from "@/components/about-us"
import Services from "@/components/services"
import Team from "@/components/team"
import News from "@/components/news"
import Location from "@/components/location"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <AboutUs />
      <Services />
      <Team />
      <News />
      <Location />
      <Contact />
      <Footer />
    </main>
  )
}
