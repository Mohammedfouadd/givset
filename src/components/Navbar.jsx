import {useState} from "react";
import {Link} from "react-router-dom";
import {logoMain} from "../assets";
import {navLinks} from "../constants/index";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faBarsStaggered,
  faArrowRight
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [active, setActive] = useState("/");
  const [show, setShow] = useState(false);

  return (
    <nav className="w-full md:flex items-center  fixed top-0 z-20 bg-[#fff] .nav overflow-hiddin">
      <div className="w-full   flex xl:justify-around justify-between relative p-5 items-center md:mx-auto">
        <Link to="/" onClick={() => window.scrollTo(0, 0)}>
          <img src={logoMain} alt="mainlogo" className="lg:w-40 w-[120px] " />
        </Link>
        <ul className="list-none hidden xl:flex flex-row menu">
          {navLinks.map(nav =>
            <li
              key={nav.id}
              className={`text-[17px]  hover:text-[#e53603] text-[#001d23] font-semibold relative  items-center text-center`}>
              <a
                className={`${active === nav.id
                  ? "active"
                  : ""} relative text-center py-[7px] px-[31px]	`}
                onClick={() => {
                  setActive(nav.id);
                }}
                href={`#${nav.id}`}>
                {" "}{nav.title}
              </a>
            </li>
          )}
        </ul>
        <div className="btn-gradient mainBtn  xl:flex hidden items-center gap-2 text-[#fff]">
          <a href="/">Give Support </a>
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
        <div
          className="cursor-pointer text-[22px] xl:hidden text-[#e53603] "
          onClick={() => {
            setShow(!show);
          }}>
          <FontAwesomeIcon icon={faBarsStaggered} />
        </div>

        <div
          className={` ${show
            ? "hiddin"
            : "right-[-100%]"} bg-[#1f0c0c67]   w-[100%] h-[1000vh] absolute right-0 top-0  duration-300`}>
          <div className="bg-[#fff] sm:w-[50%] w-[300px] px-10 right-0 top-0 h-[1000vh] absolute">
            <div
              className="text-end py-10 cursor-pointer"
              onClick={() => {
                setShow(!show);
              }}>
              <FontAwesomeIcon icon={faXmark} />
            </div>
            <ul className="list-none  flex flex-col  justify-end text-[#999999] mt-10">
              {navLinks.map(nav =>
                <li
                  key={nav.id}
                  className={`text-[16px] font-semibold relative pb-2 items-center text-start hover:text-[#e53603]`}>
                  <a className="" href={`#${nav.id}`}>
                    {" "}{nav.title}
                  </a>
                </li>
              )}
            </ul>
            <div className="btn-gradient mainBtn flex mt-10 w-60  items-center gap-3 text-[#fff]">
              <a href="/">Give Support </a>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
