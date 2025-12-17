import { useLocation, useNavigate } from "react-router";
import { useState, useEffect } from "react";

import administrativeOverload from "../assets/result/SEWEDY-09.png";
import skillBottelneck from "../assets/result/SEWEDY-10.png";
import mangerialMultiplier from "../assets/result/SEWEDY-11.png";
import strategicIntegrator from "../assets/result/SEWEDY-12.png";
import processAccelerator from "../assets/result/SEWEDY-13.png";
import HolisticPerformer from "../assets/result/SEWEDY-14.png";

const Result = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
//   const { result } = state
  const result= 10
  var imgNumber
  const BACKGROUNDS = {
    1: administrativeOverload,
    2: skillBottelneck,
    3: mangerialMultiplier,
    4: strategicIntegrator,
    5: processAccelerator,
    6: HolisticPerformer,
  };
  
    if (result==10) {
    imgNumber = 1
    }

    return (
      <div 
      dir="rtl" 
    className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center gap-6">
      <img
        src={BACKGROUNDS[imgNumber]}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />
      </div>
    );

};

export default Result;
