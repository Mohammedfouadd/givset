import React from "react";
import {textVariant} from "../utils/motion";
import {motion} from "framer-motion";
import {SectioWrapper} from "../hoc";
import {shapeTwo} from "../assets";
import {brandsIcons} from "../constants";

const Brand = () => {
  return (
    <div className="brand md:flex items-center justify-center gap-20">
      <motion.div variants={textVariant()} className="  text-center mb-10">
        <div className="lg:text-[60px]  md:text-start text-[26px]  Yeseva mt-6 shape ">
          Our Current<br /> Sponsors.
          <img
            src={shapeTwo}
            alt="shapeTwo"
            className="md:left-[30px] img-shape  lg:w-[185px] w-[100px] "
          />
        </div>
      </motion.div>
      <motion.div variants={textVariant()}>
        <div>
          <ul className="brandUl md:gap-8">
            {brandsIcons.map(brandsIcon =>
              <li key={brandsIcon.id} className="hover:opacity-[.7]">
                <img src={brandsIcon.icon} alt="icon" />
              </li>
            )}
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default SectioWrapper(Brand, "Brand");
