import { useNavigate } from "react-router";
import { useRosConnection } from "./connection-provider";
import mainpage from "../assets/Main.png";
import startbutton from "../assets/startbutton.png"
// import Timer_layout from "timer-provider";
import { useEffect } from "react";

const main = () => {
  const navigate = useNavigate();

  const usesInteraction = () => {
    navigate("/list2025");
  }

  return (
    // <Timer_layout>
    <div className="relative w-full h-screen overflow-hidden">

    <img
        src={mainpage}
    alt="Homepage background"
    className="absolute inset-0 w-full h-full object-cover"
      />

    <img
    src={startbutton}
    alt="Start button"
    className="absolute bottom-150 left-1/2 -translate-x-1/2 cursor-pointer"
    onClick={usesInteraction}
  />
    </div>
    // </Timer_layout>

  );
};

export default main;
