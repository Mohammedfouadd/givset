import React from "react";
import {textVariant} from "../utils/motion";
import {motion} from "framer-motion";
import {SectioWrapper} from "../hoc";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser, faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {shapeTwo, blogOne, blogTwo, blogThree} from "../assets";

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
        <div className="posts" />
      </motion.div>
    </section>
  );
};

export default SectioWrapper(Blog, "Blog");
