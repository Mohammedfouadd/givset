import React from "react";
import {textVariant} from "../utils/motion";
import {motion} from "framer-motion";
import {SectioWrapper} from "../hoc";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser, faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {shapeTwo} from "../assets";
import {causess} from "../constants";

const Causes = () => {
  return (
    <section className="causes text-center  mb-14  mx-auto">
      <motion.div
        variants={textVariant()}
        className="max-w-[1000px] mx-auto text-center mb-10">
        <h2 className="subtitle">Check Causes</h2>
        <div className="lg:text-[60px]  text-center text-[26px]  Yeseva mt-6 shape ">
          Donate For Poor People. <br /> Causes of Givest
          <img
            src={shapeTwo}
            alt="shapeTwo"
            className="img-shape lg:w-[185px] w-[100px]"
          />
        </div>
      </motion.div>
      <motion.div variants={textVariant()}>
        <ul className="container justify-center md:justify-start">
          {causess.map(causes =>
            <li key={causes.id} className="bg-[#f7f7f7] mb-6">
              <img src={causes.icon} alt="icon" className="w-full" />
              <div className=" bg-[#f7f7f7] flex justify-between px-5 mt-5 text-start mb-6">
                <div className="bg-[#fff] hover:bg-[#FC6539] text-[#FC6539] px-4 py-1 hover:text-[#fff] ">
                  <h2 className="Yeseva md:text-lg text-[#000]">Goal:</h2>
                  <p className="Yeseva font-semibold md:text-lg  hover:text-[#fff]  ">
                    $ 5,000
                  </p>
                </div>
                <div className="Yeseva bg-[#fff] hover:bg-[#FC6539] text-[#FC6539] px-4 py-1 hover:text-[#fff] ">
                  <h2 className="Yeseva  md:text-lg text-[#000]">Raised:</h2>
                  <p className="Yeseva  md:text-lg  hover:text-[#fff]  ">
                    $ 2,000
                  </p>
                </div>
                <div className="bg-[#fff] hover:bg-[#FC6539] text-[#FC6539]  px-4 py-1 hover:text-[#fff] ">
                  <h2 className="Yeseva md:text-lg text-[#000]">TO GO:</h2>
                  <p className="Yeseva  md:text-lg  hover:text-[#fff]  ">
                    $ 1,000
                  </p>
                </div>
              </div>
              <h1 className="Yeseva hover:text-[#FC6539] text-xl text-start mb-5 px-5 cursor-pointer">
                {causes.title}
              </h1>
              <p className="text-start text-[#777] px-5">
                {causes.prag}
              </p>
              <div className="p-5 flex md:flex-row flex-col   md:items-center justify-between ">
                <div className="flex md:justify-center items-center mb-2 ">
                  <div className="w-10 mr-2 h-10 rounded-full bg-[#fff] flex justify-center items-center cursor-pointer">
                    <FontAwesomeIcon icon={faUser} className="text-[#FC6539]" />
                  </div>
                  <h2 className=" cursor-pointer font-semibold ">
                    Kristin Horton
                  </h2>
                </div>

                <div className="btn-border-gradient w-fit xl:flex  items-center gap-2 mb-2 z-20">
                  <a href="">Donate Now </a>
                  <FontAwesomeIcon icon={faArrowRight} />
                </div>
              </div>
            </li>
          )}
        </ul>
      </motion.div>
    </section>
  );
};

export default SectioWrapper(Causes, "Causes");
