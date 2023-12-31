import React from "react";
import {services} from "../constants";
import {lineShape} from "../assets";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {motion} from "framer-motion";
import {SectioWrapper} from "../hoc";
import {textVariant} from "../utils/motion";

const Service = () => {
  return (
    <section className="services mt-5 py-[80px] ">
      <motion.div variants={textVariant()} className="w-full">
        <ul className="list-non flex  container">
          {services.map(service =>
            <li
              key={service.title}
              className={`bg-[${service.background}]  md:p-16 py-[45px] px-[25px]`}>
              <div className="">
                <div className={`flex justify-center items-center gap-5 mb-4`}>
                  <div className="relative">
                    <div className="h-[80px] w-[80px] bg-[#ffffff31] rounded-full	absolute top-[-15px] left-[-20px] z-0" />
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="servicesPic z-10"
                    />
                  </div>
                  <h2 className="text-[#fff] text-[26px]">
                    {service.title}
                  </h2>
                </div>
                <img src={lineShape} alt="lineShape" className="mb-4 " />
                <p className="mb-10 text-[14px] text-[#fff]">
                  {service.prag}
                </p>
                <div className="mainBtnBlack py-[10px] px-[20px] flex font-semibold text-[16px]  border-[#fff] items-center gap-2 text-[#fff]">
                  <a href="/">View Detalis </a>
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

export default SectioWrapper(Service, "Service");
