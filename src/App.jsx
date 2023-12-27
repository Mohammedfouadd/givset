import {BrowserRouter} from "react-router-dom";
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
} from "./components/index";

function App() {
  return (
    <BrowserRouter>
      <div className="relative">
        <Navbar />
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
    </BrowserRouter>
  );
}

export default App;
