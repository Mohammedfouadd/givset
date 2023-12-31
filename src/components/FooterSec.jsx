import React from "react";
import {logoMain, footerLine} from "../assets";
import {gallerys} from "../constants";

const FooterSec = () => {
  return (
    <div className="footer-area ">
      <div className="footer-main lg:flex justify-center ">
        <div className="footer md:p-10 p-3">
          <div className="">
            <a href="/" className="mb-5 block">
              <img src={logoMain} alt="logoMain" />
            </a>

            <p className="mb-[25px]">
              Lorem Ipsum is simply dummy text of the industry orem Ipsum has
              been the industrys since the when unknown.
            </p>
            <h2 className="text-[25px] mb-[18px]">Total Raised:</h2>
            <h1 className="text-[60px] Yeseva text-[#FEA444]">$8,965</h1>
          </div>
          <div>
            <h2 className="subtitle Yeseva ">Gallery</h2>
            <div>
              <ul className="flex sm:gap-3 gap-2 flex-row mt-14 flex-wrap ista mb-6">
                {gallerys.map(gallery =>
                  <li key={gallery.id}>
                    <a href="/">
                      <img
                        className="w-[100px] h-[100px]"
                        src={gallery.icon}
                        alt="icon"
                      />
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>
          <div>
            <h2 className="subtitle Yeseva ">Quick Links</h2>
            <div className="flex mt-14 gap-10 ">
              <div >
                <ul className="nav-menu md:text-[17px] text-[15px]">
                  <li>
                    <a href="">About Us</a>
                  </li>
                  <li>
                    <a href="">Blog Post Terms</a>
                  </li>
                  <li>
                    <a href="">Conditions</a>
                  </li>
                  <li>
                    <a href="">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="">Documentation</a>
                  </li>
                  <li>
                    <a href="">Donners</a>
                  </li>
                </ul>
              </div>
              <div >
                <ul className="nav-menu md:text-[17px] text-[15px]">
                  <li>
                    <a href="">Become Volunteer</a>
                  </li>
                  <li>
                    <a href="">Quick Fundraise</a>
                  </li>
                  <li>
                    <a href="">Give Donation</a>
                  </li>
                  <li>
                    <a href="">Become Volunteer</a>
                  </li>
                  <li>
                    <a href="">Food And Water</a>
                  </li>
                  <li>
                    <a href="">Medical facilities</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-[#fff]">
        {" "}© 2025 Givest. Made with by{" "}
        <a
          href="https://github.com/Mohammedfouadd"
          target="_blank"
          rel="noreferrer"
          className="text-[#FEA444] font-semibold">
          Mohamed Fouad
        </a>{" "}
      </div>
      <div className="shape-layer">
      <img src={footerLine} alt="Image-Givest"/>
    </div>
    </div>
  );
};

export default FooterSec;
