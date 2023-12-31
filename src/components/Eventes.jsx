import React, {useState, useRef} from "react";
import {textVariant, slideIn} from "../utils/motion";
import {motion} from "framer-motion";
import {SectioWrapper} from "../hoc";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight, faXmark} from "@fortawesome/free-solid-svg-icons";
import {eventOne, eventTwo, eventThree} from "../assets";
import eventPic from "../assets/img/events/event1.webp";
import line1 from "../assets/img/events/line1.webp";
import line3 from "../assets/img/events/line3.webp";
import playBtn from "../assets/img/events/play.webp";
import {Tilt} from "react-tilt";


const Eventes = () => {
  const [activeVideo, setActiveVideo] = useState(false);
  return (
    <div className="event xl:mt-12 flex flex-col gap-10 overflow-hidden justify-center  container">
      <motion.div variants={textVariant()} className="max-w-[1000px] mx-auto">
        <h2 className="subtitle">Recent Events</h2>
        <div className="lg:text-[60px] lg:text-start text-center text-[26px] font-bold Yeseva mt-6 ">
          Join Recent Fundraising Event Of Givest.
        </div>
      </motion.div>
      <div className="lg:flex flec-col  gap-10 justify-center">
        <motion.div
          variants={slideIn("left", "tween", 0, 0)}
          className="gap-10 mb-6 overflow-hidden">
          <div className="eventitem sm:flex justify-between bg-[#f7f7f7] mb-6">
            <div className="thumb relative">
              <img src={eventOne} alt="eventOne" className="w-full" />
              <div className="btn-theme w-fit xl:flex  items-center gap-2 text-[#fff]">
                <a href="">All Causes </a>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
            <div className="text-[#001d23] p-4">
              <p className=" mb-2">
                15 January 2021{" "}
                <span className="text-[#fc6539]">{"// Education"}</span>
              </p>
              <h2 className="hover:text-[#fc6539] cursor-pointer font-semibold Yeseva">
                Need School For Mozambique Children.
              </h2>
            </div>
          </div>
          <div className="eventitem sm:flex justify-between bg-[#f7f7f7] mb-6 ">
            <div className="thumb relative">
              <img src={eventTwo} alt="eventOne" className="w-full" />
              <div className="btn-theme w-fit xl:flex  items-center gap-2 text-[#fff]">
                <a href="">All Causes </a>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
            <div className="text-[#001d23] p-4">
              <p className=" mb-2">
                15 January 2021{" "}
                <span className="text-[#fc6539]">{"// Education"}</span>
              </p>
              <h2 className="hover:text-[#fc6539] cursor-pointer font-semibold Yeseva">
                Need School For Mozambique Children.
              </h2>
            </div>
          </div>
          <div className="eventitem sm:flex justify-between bg-[#f7f7f7] mb-6">
            <div className="thumb relative">
              <img src={eventThree} alt="eventOne" className="w-full" />
              <div className="btn-theme w-fit xl:flex  items-center gap-2 text-[#fff]">
                <a href="">All Causes </a>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
            <div className="text-[#001d23] p-4">
              <p className=" mb-2">
                15 January 2021{" "}
                <span className="text-[#fc6539]">{"// Education"}</span>
              </p>
              <h2 className="hover:text-[#fc6539] cursor-pointer font-semibold Yeseva">
                Need School For Mozambique Children.
              </h2>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={slideIn("right", "tween", 0, 0)}
          className="text-[#464444] lg:max-w-[400px]  lg:block hidden">
          <div>
            <div className="relative">
              <div className="">
                <img
                  src={line1}
                  alt="line"
                  className="absolute z-[-1] top-[-60px] w-[500px] h-[500px] rotate-12	"
                />
                <img
                  src={line3}
                  alt="line"
                  className="absolute z-[-1] top-[-60px] w-[500px] h-[500px] rotate-12"
                />
              </div>
              <Tilt>
                <div
                  // eslint-disable-next-line react/no-unknown-property
                  optios={{
                    max: 25,
                    scale: 1,
                    speed: 450
                  }}>
                  <img
                    src={eventPic}
                    alt="eventPic"
                    className="z-10 w-full h-full"
                  />
                </div>
              </Tilt>
              <div className="play-video-btn  absolute top-[40%] left-[35%] cursor-pointer">
                <a
                  onClick={() => setActiveVideo(true)}
                  className="wave-btn relative">
                  <span />
                  <span />
                  <span />
                  <div className="icon">
                    <img src={playBtn} alt="Icon" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div
        className={`eventVideo ${activeVideo ? "lg:flex" : "hidden"}`}
        onClick={() => setActiveVideo(false)}>
        <div className="iconVideo">
          <a onClick={() => setActiveVideo(false)}>
            <FontAwesomeIcon icon={faXmark} />
          </a>
        </div>
        {activeVideo &&
          <div className="w-[700px] h-[400px]">
            <iframe
              id="fancybox-frame1703906641800"
              name="fancybox-frame1703906641800"
              className={`fancybox-iframe z-50`}
              allowfullscreen="allowfullscreen"
              allow="; fullscreen"
              src="//player.vimeo.com/video/174392490?autoplay=1&amp;hd=1&amp;show_title=1&amp;show_byline=1&amp;show_portrait=0&amp;fullscreen=1&amp;dnt=1&amp;app_id=122963"
              scrolling="no"
            />
          </div>}
      </div>
    </div>
  );
};

export default SectioWrapper(Eventes, "Eventes");
