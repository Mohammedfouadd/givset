import React from "react";
import {textVariant} from "../utils/motion";
import {motion} from "framer-motion";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {shapeTwo, donateOne, donateTwo, donateThree} from "../assets";
import bgDonate from "../assets/img/donate/bg-donate1.jpg";

const DonateArea = () => {
  return (
    <section className="donateArea bg-[#001d23] py-[105px] overflow-hidden xl:flex justify-center gap-10">
      <div className="xl:max-w-[1200px] px-[15px] text-center">
        <motion.div
          variants={textVariant()}
          className="max-w-[1000px] mx-auto text-center mb-10">
          <h2 className="subtitle">Make A Donation</h2>
          <div className="lg:text-[60px]  text-center text-[26px] text-[#fff]  Yeseva mt-6 shape ">
            Need Pure Water For <br /> Mozambique People.
            <img
              src={shapeTwo}
              alt="shapeTwo"
              className="img-shape lg:w-[185px] w-[100px]"
            />
          </div>
        </motion.div>
        <motion.div>
          <div>
            <div className="donate-form text-[#fff]">
              <div className="amount-info md:flex-row flex-col gap-2 md:gap-0">
                <div className="donate-amount">$20</div>
                <div className="donate-amount">$50</div>
                <div className="donate-amount">$200</div>
                <div className="donate-amount donate-custom-amount ">
                  <input
                    className="form-control "
                    type="text"
                    placeholder="Custom"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center flex-col md:flex-row items-center gap-8 md:gap-10 z-10">
              <div className="btn-gradient mainBtn w-fit xl:flex  items-center gap-2 text-[#fff]">
                <a href=""> Donate Now</a>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
              <div className="btn-border-gradient w-fit flex  items-center gap-2  text-[#FC6539]">
                <a href="">Join Events</a>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="lg:p-0 p-4  xl:m-0 my-6  ">
        <div className="flex  justify-center xl:justify-start">
          <img className="block" src={bgDonate} alt="bg-donate" />
        </div>

        <div className="md:w-[50%] m-auto xl:m-0  ">
          <h1 className="Yeseva text-[40px] md:text-start text-center mt-4 text-[#fff] mb-[22px] ">
            Great Donners
          </h1>
          <p className="text-[#838383] mb-[32px] ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry s ince the 1500s, when an unknow
          </p>
          <div className="flex justify-around">
            <img
              src={donateOne}
              alt="donateOne"
              className="md:w-[80px] md:h-[80px] w-[60px] h-[60px]"
            />
            <img
              src={donateTwo}
              alt="donateOne"
              className="md:w-[80px] md:h-[80px] w-[60px] h-[60px]"
            />
            <img
              src={donateThree}
              alt="donateOne"
              className="md:w-[80px] md:h-[80px] w-[60px] h-[60px]"
            />
            <div className="Yeseva rounded-full md:w-[80px] md:h-[80px] w-[60px] h-[60px] bg-[#FC6539] text-[#fff] flex items-center justify-center">
              +286
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonateArea;
