import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import {useState, useEffect} from "react";

import {SquareLoader} from "react-spinners";
import {Navbar} from "./components";
import {
  Home,
  AboutUs,
  CausesPage,
  ContactUs,
  BlogPage,
  PagesPage
} from "./pages";

function App() {
  const [activeAnimate, setActiveAnimate] = useState(true);

  useEffect(
    () => {
      setTimeout(() => {
        setActiveAnimate(false);
      }, 1000);
    },
    [activeAnimate]
  );

  return (
    <main className="relative">
      <Router>
        <div
          className={` ${activeAnimate
            ? "flex"
            : "hidden"} z-50 h-screen  justify-center items-center`}>
          <SquareLoader
            color="#fd9000"
            loading
            size={100}
            speedMultiplier={1}
          />
        </div>
        <div className={`${!activeAnimate ? "block" : "hidden"}`}>
          <Navbar
            setActiveAnimate={setActiveAnimate}
            activeAnimate={activeAnimate}
          />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/causes" element={<CausesPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/pages" element={<PagesPage />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </div>
      </Router>
    </main>
  );
}

export default App;
