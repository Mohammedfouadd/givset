import React from "react";
import {textVariant, slideIn} from "../utils/motion";
import {motion} from "framer-motion";
import {SectioWrapper} from "../hoc";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {eventOne, eventTwo, eventThree} from "../assets";
import eventPic from "../assets/img/events/event1.webp";

const Eventes = () => {
  return (
    <div className="event xl:mt-12 flex flex-col gap-10 overflow-hidden justify-center ">
      <motion.div variants={textVariant()} className="max-w-[1000px] mx-auto">
        <h2 className="subtitle">Recent Events</h2>
        <div className="lg:text-[60px] lg:text-start text-center text-[26px] font-bold Yeseva mt-6 ">
          Join Recent Fundraising Event Of Givest.
        </div>
      </motion.div>
      <div className="lg:flex flec-col  gap-10 justify-center">
        <motion.div
          variants={slideIn("left", "tween", 0.1, 0.5)}
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
              <h2 className="hover:text-[#fc6539] cursor-pointer font-semibold">
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
              <h2 className="hover:text-[#fc6539] cursor-pointer font-semibold">
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
              <h2 className="hover:text-[#fc6539] cursor-pointer font-semibold">
                Need School For Mozambique Children.
              </h2>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={slideIn("right", "tween", 0.1, 0.5)}
          className="text-[#464444] lg:max-w-[400px]  sm:block hidden">
          <div>
            <div>
              <img src={eventPic} alt="eventPic" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SectioWrapper(Eventes, "Eventes");
