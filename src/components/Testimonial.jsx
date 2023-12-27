import React, {useState} from "react";
import {motion} from "framer-motion";
import {fadeIn, slideIn, textVariant} from "../utils/motion";
import {donateOne, donateTwo, bannerShape} from "../assets/index";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight, faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {SectionnoWraper} from "../hoc";


const Testimonial = () => {

  
  const [active, setActive] = useState(true);

  return (
    <section className="bg-[#001d23] testimonial py-[150px] lg:flex justify-between gap-10 relative">
      <motion.div variants={slideIn("left", "tween", 0.03, 0.1)}>
        <div className="testimonialBg flex justify-center items-center mb-10">
          <div className="backorage p-10 py-[150px]">
            <h2 className="subtitle">Recent Events</h2>
            <div className="lg:text-[30px] lg:text-start text-center text-[#fff] text-[26px] font-bold Yeseva mt-6 ">
              What People Say About Us.
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div variants={textVariant()} className="h-[510px]">
        {active
          ? <div
              onClick={() => setActive(!active)}
              className="Yeseva max-w-[500px] p-4">
              <img
                src={donateOne}
                alt="donateOne"
                className="h-[121px] w-[121px] mb-6"
              />
              <p className="text-[#c2c2c2] lg:text-[25px] Yeseva mb-6">
                The leap into electronic typesetting, essentially unchanged was
                popularised the release Letraset sheets containing and more
                recently desktop publishing like Aldus maker including.
              </p>
              <img
                src={bannerShape}
                alt="bannerShape"
                className="mb-4 w-[150px] h-[22px]"
              />
              <h4 className="font-bold text-[#fff] mb-4">Harvey Harrington</h4>
              <h6 className="text-[#fc6539]">Senior Volunteer</h6>
            </div>
          : <div
              onClick={() => setActive(!active)}
              className="Yeseva max-w-[500px] p-4">
              <img
                src={donateTwo}
                alt="donateOne"
                className="h-[121px] w-[121px] mb-6"
              />
              <p className="text-[#c2c2c2] lg:text-[25px] Yeseva mb-6">
                It is long established fact that reader will distract by the
                readable content a page when looking atten layout. The point of
                using and that it has a normal distribution of letters
              </p>
              <img
                src={bannerShape}
                alt="bannerShape"
                className="mb-4 w-[150px] h-[22px]"
              />
              <h4 className="font-bold text-[#fff] mb-4">Julia Steve</h4>
              <h6 className="text-[#fc6539]">Senior Volunteer</h6>
            </div>}
      </motion.div>

      <motion.div variants={slideIn("right", "tween", 0.03, 0.1)}>
        <div className="lg:flex gap-3 hidden bg-[#192a2d] p-5 w-[500px] absolute top-[65%] right-0">
          <div
            onClick={() => setActive(!active)}
            className="swiper-button-prev ">
            <FontAwesomeIcon icon={faArrowLeft} />
          </div>
          <div
            onClick={() => setActive(!active)}
            className="swiper-button-prev">
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default SectionnoWraper(Testimonial, "Testimonial");
