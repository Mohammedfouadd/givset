
import {
    FooterSec,
    Hero,
    DonateArea,
    FunFact,
    Blog,
    Brand,
    About,
    Navbar,
    Service,
    Eventes,
    Testimonial,
    Causes
  } from "../components/index";

const Home = () => {

    
  return (
    <div
    >
        <Hero />
        <Service />
        <About />
        <Causes />
        <DonateArea />
        <FunFact />
        <Eventes />
        <Testimonial />
        <Blog />
        <Brand />
        <FooterSec />
    </div>
  )
}

export default Home
