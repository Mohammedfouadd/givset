import React from "react";
import {services} from "../constants";
import {lineShape} from "../assets";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {motion} from "framer-motion";
import {SectioWrapper} from "../hoc";
import { textVariant} from "../utils/motion";

const Service = () => {
  return (
    <section className="services mt-5 py-[80px] mx-2">
      <motion.div variants={textVariant()} className="w-full">
        <ul className="list-non flex  justify-between gap-5 xl:w-[1260px] ">
          {services.map(service =>
            <li
              key={service.title}
              className={`bg-[${service.background}]  md:p-16 py-[45px] px-[25px]`}>
              <div className="">
                <div className={`flex justify-center items-center gap-5 mb-4`}>
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="servicesPic"
                  />
                  <h2 className="text-[#fff] text-[26px]">
                    {service.title}
                  </h2>
                </div>
                <img src={lineShape} alt="lineShape" className="mb-4 " />
                <p className="mb-10 text-[14px] text-[#fff]">
                  {service.prag}
                </p>
                <div className="mainBtnBlack  flex font-semibold text-[16px]  border-[#fff] items-center gap-2 text-[#fff]">
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
