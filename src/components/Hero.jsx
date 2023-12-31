import React from "react";
import {handIcon, heroPic, shapeOne, lineShape} from "../assets";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {slideIn} from "../utils/motion";
import {motion} from "framer-motion";
import {SectioWrapper} from "../hoc";
import {Tilt} from "react-tilt";

const Hero = () => {
  return (
    <section className="hero text-center lg:flex justify-around max-h-[100%] gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "spring", 0, 0)}
        className="text-center">
        <div className="flex  items-center xl:justify-start justify-center gap-4 sm:text-[22px] font-semibold ">
          <img src={handIcon} alt="handIcon" />
          <h3>Change The World.</h3>
        </div>
        <h2 className="text-[30px] xl:text-start sm:text-[38px] md:text-[50px] xl:text-[75px] text-[#001D23] mt-5 font-medium max-w-[720px]">
          Need Your Big Hand For
          <span>Change</span> The World.
        </h2>
        <div className="flex justify-center sm:gap-10 gap-2 py-20 items-center">
          <div className="btn-gradient mainBtn  xl:flex  items-center gap-2 text-[#fff]">
            <a href="">All Causes </a>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
          <div className="mainBtnBlack py-[17px] px-[27px] xl:flex  items-center gap-2 text-black">
            <a href="">Donate Now </a>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={slideIn("right", "spring", 0, 0)}
        className="relative bulls xl:block hidden">
        <Tilt>
          <div
            // eslint-disable-next-line react/no-unknown-property
            optios={{
              max: 25,
              scale: 1,
              speed: 450
            }}
            className="bull ">
            <div className="heroPic">
              <img className="heroPic" src={heroPic} alt="heroPic" />
            </div>
            <div className="shapeOne">
              <img className="" src={shapeOne} alt="shapeOne" />
            </div>
          </div>
        </Tilt>
        <div />
        <div className="donate-circle-wrp ">
          {/* <div class="pie-chart-circle" data-size="255" data-line-width="8" data-line-cap="butt" data-track-color="#ffffff54" data-bar-color="#fff" data-percent="68"><span class="skill-percent">68%</span><canvas height="255" width="255"></canvas></div> */}
          <div className="donate-content  ">
            <div className="raised-amount">$865M</div>
            <img
              className="line-shape-img "
              src={lineShape}
              alt="Image-Givest"
            />
            <h5 className="donate-title">Total Raised</h5>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
export default SectioWrapper(Hero, "Hero");
