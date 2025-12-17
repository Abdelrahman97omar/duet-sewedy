import { useNavigate } from "react-router";
import { useEffect, useRef } from "react";
import { useRosConnection } from "./connection-provider";
import mainpage from "../assets/Main.png";
import startbutton from "../assets/startbutton.png";
import HelloSound from "../assets/sounds/Hello.mp3";
import Timer_layout from "./timer-provider";

const main = () => {
  const navigate = useNavigate();
  const audioRef = useRef(null);
  const usesInteraction = () => {
      if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    navigate("/list2025");
  }
  useEffect(() => {
    audioRef.current = new Audio(HelloSound);
    audioRef.current.play();
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);

  return (
    <Timer_layout>
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
 </Timer_layout>

  );
};

export default main;
