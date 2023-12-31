import React from "react";
import {textVariant} from "../utils/motion";
import {motion} from "framer-motion";
import {SectioWrapper} from "../hoc";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight, faShareNodes} from "@fortawesome/free-solid-svg-icons";
import {shapeTwo} from "../assets";
import {blogCards} from "../constants";

const Blog = () => {
  return (
    <section className="blog ">
      <motion.div
        variants={textVariant()}
        className="max-w-[1000px] mx-auto text-center mb-10">
        <h2 className="subtitle">Blog Post</h2>
        <div className="lg:text-[60px]  text-center text-[26px]  Yeseva mt-6 shape ">
          Latest News From <br /> Givest Blog
          <img
            src={shapeTwo}
            alt="shapeTwo"
            className="img-shape lg:w-[185px] w-[100px]"
          />
        </div>
      </motion.div>
      <motion.div variants={textVariant()}>
        <div className="posts ">
          <ul className="container xl:justify-start justify-center">
            {blogCards.map(blogCard =>
              <li key={blogCard.id}>
                <div className="blogCard relative overflow-hidden mb-4">
                  <div className="overflow-hidden relative">
                    <div>
                      <div className="h-[92px] z-20 bg-[#fc6539] absolute top-[15px] left-[15px] flex flex-col p-2 justify-center items-center text-[#fff] text-[38px]">
                        <h1 className="Yeseva">15</h1>
                        <h1 className=" text-[16px]">JANUARY</h1>
                      </div>
                      <div className="absolute top-[25px] left-[20px] h-[92px] w-[92px] border-solid border-2 border-[#fff] " />
                    </div>
                    <img src={blogCard.icon} alt="picBlog" className="" />
                  </div>
                  <div className="smallCard">
                    <div className="flex items-center justify-between">
                      <h3 className="text-[fc6539] bg-[#e6e6e6] py-2 px-5 cursor-pointer hover:text-[#fff] hover:bg-[#fc6539]">
                        EDUCATION
                      </h3>
                      <FontAwesomeIcon icon={faShareNodes} />
                    </div>
                    <h1 className="Yeseva my-4 text-[25px] hover:text-[#fc6539] leading-[1.4]">
                      Save Children Life For Future.
                    </h1>
                    <p>
                      Lorem Ipsum is simply dummy text industry since unknown..
                    </p>
                    <div className="my-4 flex justify-between items-center">
                      <div className="btn-border-gradient w-fit xl:flex  items-center gap-2 mb-2 z-20">
                        <a href="" className="text-[#fc6539]">
                          Donate Now{" "}
                        </a>
                        <FontAwesomeIcon icon={faArrowRight} />
                      </div>
                      <p className="font-semibold text-[#001d23] cursor-pointer">
                        By: Robbins
                      </p>
                    </div>
                  </div>
                  <div />
                </div>
              </li>
            )}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default SectioWrapper(Blog, "Blog");
