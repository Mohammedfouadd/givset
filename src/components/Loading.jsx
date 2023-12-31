import React from 'react'
import {ScaleLoader, PacmanLoader   } from "react-spinners";

const Loading = () => {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center gap-5 md:gap-20">
      <h1 className="text-[30px] md:text-[80px] Yeseva hover:text-[#FEA444]  hover:drop-shadow-2xl">
        LOADING
      </h1>
      <div className="md:hidden">
        <ScaleLoader   color="#FEA444"  />
      </div>
      <div className="md:block hidden">
        <PacmanLoader    color="#FEA444"  size={40}/>
      </div>
    </div>
  );
};

export default Loading
