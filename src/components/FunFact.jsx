import CountUp from "react-countup";
import {
  funfactShape,
  funfactOne,
  funfactTwo,
  funfactThree,
  bannerShape
} from "../assets";
import ScrollTrigger from "react-scroll-trigger";
import {useState} from "react";
const FunFact = () => {
  const [count, setCount] = useState(false);

  return (
    <ScrollTrigger
      onEnter={() => setCount(true)}
      onExit={() => setCount(false)}>
      <div className="funFact bg-[#f7f7f7] flex lg:flex-row flex-col justify-center lg:gap-6 ">
        <div className="item flex lg:py-[140px] py-[60px] justify-center gap-5 md:px-[50px]">
          <div className="relative">
            <img src={funfactThree} alt="funfactOne" className="min-w-[66px]" />
            <img
              src={funfactShape}
              alt="funfactShape"
              className="relative top-[-76%] left-[9%] w-[80px] h-[60px]"
            />
          </div>
          <div className="">
            <div className="Yeseva lg:text-[55px] text-[30px] lgh-[80px] w-[135px] ">
              {count && <CountUp start={0} end={598} duration={1} delay={0} />}K
            </div>
            <img src={bannerShape} alt="bannerShape" className="w-[72px]" />
            <p className="text-[#969696] mt-3 text-sm font-semibold">{`// POOR PEOPLE`}</p>
          </div>
        </div>
        <div className="flex lg:py-[140px] py-[60px] gap-5 md:px-[50px] justify-center item">
          <div className="">
            <img src={funfactTwo} alt="funfactOne" className="min-w-[66px]" />
            <img
              src={funfactShape}
              alt="funfactShape"
              className="block relative top-[-76%] left-[9%] w-[80px] h-[60px] "
            />
          </div>
          <div className="">
            <div className="Yeseva lg:text-[55px] text-[30px] lgh-[80px] w-[135px] ">
              {count && <CountUp start={0} end={897} duration={1} delay={0} />}M
            </div>
            <img src={bannerShape} alt="bannerShape" className="w-[72px]" />
            <p className="text-[#969696] mt-3 text-sm font-semibold">{`// FUND RAISED`}</p>
          </div>
        </div>
        <div className="flex lg:py-[140px] py-[60px] gap-5 md:px-[50px] justify-center item">
          <div className="relative">
            <img src={funfactOne} alt="funfactOne" className="min-w-[66px]" />
            <img
              src={funfactShape}
              alt="funfactShape"
              className="relative top-[-76%] left-[9%] w-[80px] h-[60px]"
            />
          </div>
          <div className="">
            <div className="Yeseva lg:text-[55px] text-[30px] lgh-[80px] w-[135px] ">
              {count && <CountUp start={0} end={998} duration={1} delay={0} />}+
            </div>
            <img src={bannerShape} alt="bannerShape" className="w-[72px]" />
            <p className="text-[#969696] mt-3 text-sm font-semibold">{`// ACTIVE MEMBER`}</p>
          </div>
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default FunFact;
