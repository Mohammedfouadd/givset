import React from "react";
import {textVariant} from "../utils/motion";
import {motion} from "framer-motion";
import {SectioWrapper} from "../hoc";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {aboutPic, aboutPicTwo, ckeck} from "../assets";

const About = () => {
  return (
    <div className="about xl:mt-12 flex flex-col gap-10 overflow-hidden justify-center px-[15px] mb-14 ">
      <motion.div variants={textVariant()} className="max-w-[1000px] mx-auto">
        <h2 className="subtitle">About Us</h2>
        <div className="lg:text-[60px] lg:text-start text-center text-[26px] font-bold Yeseva mt-6 ">
          <span className="text-[#FEA444] "> Givest</span> &#160;is The Non
          Profitable Organization.{" "}
        </div>
      </motion.div>
      <div className="lg:flex flec-col  gap-10 justify-center">
        <div className="md:flex gap-10 mb-6 overflow-hidden">
          <div className="relative overflow-hidden">
            <img className="hidden md:block hover:scale-105" src={aboutPic} alt="aboutPic" />
          </div>
          <div className=" overflow-hidden">
            <img src={aboutPicTwo} alt="aboutPicTwo" className="hover:scale-105" />
          </div>
        </div>
        <motion.div
          variants={textVariant()}
          className="text-[#464444] lg:max-w-[400px] ">
          <div className="Yeseva borderLfet pl-6 text-[20px] mb-6 ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry has been the industry standard.
          </div>
          <div className="text-[14px] leading-relaxed mb-6">
            <p className="">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry orem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown.
            </p>
            <p className="mt-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry orem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown.
            </p>
          </div>
          <div>
            <ul className="flex text-[12px] font-bold justify-center mb-6 relative overflow-hidden ">
              <li className="flex justify-center ">
                <img
                  src={ckeck}
                  alt="ckeck"
                  className="w-fit h-3 mr-1 relative top-1"
                />
                <p>
                  Need your simple help <br />
                  for save children.
                </p>
              </li>
              <li className="flex justify-center borderLfet ml-3 pl-3">
                <img
                  src={ckeck}
                  alt="ckeck"
                  className="w-fit h-3 mr-1 relative top-1"
                />
                <p>
                  Need your simple help <br />
                  for save children.
                </p>
              </li>
            </ul>
          </div>
          <div className="btn-gradient mainBtn w-fit xl:flex  items-center gap-2 text-[#fff]">
            <a href="">All Causes </a>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SectioWrapper(About, "About");
