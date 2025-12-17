import { useNavigate } from "react-router";
// import { useRosConnection } from "./connection-provider";
import { useEffect, useState,useRef } from "react";
import sound from "../assets/sounds/only2challenges.mp3"
import bg from "../assets/questionPart1/bg.png";
import A from "../assets/questionPart1/a.png";
import cA from "../assets/questionPart1/cA.png";
import B from "../assets/questionPart1/b.png";
import cB from "../assets/questionPart1/cB.png";
import C from "../assets/questionPart1/c.png";
import cC from "../assets/questionPart1/cC.png";
import D from "../assets/questionPart1/d.png";
import cD from "../assets/questionPart1/cD.png";
import E from "../assets/questionPart1/e.png";
import cE from "../assets/questionPart1/cE.png";


import Timer_layout from "./timer-provider";
import { useRosConnection } from "./connection-provider";

const List2025 = () => {
const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio(sound);
    audioRef.current.play();
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);
  const navigate = useNavigate();
  const { publishTopic } = useRosConnection();
  const [selectedIds, setSelectedIds] = useState([]);

  const handleClick = (id) => {
  setSelectedIds((prev) => {
    if (prev.includes(id)) return prev; 

    const updated = [...prev, id];

    if (updated.length === 2) {
      if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
      navigate("/q2025", {
        state: {
          question1: updated[0],
          question2: updated[1],
        },
      });
    }

    return updated;
  });
};

  const buttons = [ { 
      id: 1, 
      defaultImg: A, 
      activeImg: cA, }, 
    { 
      id: 2, 
      defaultImg: B, 
      activeImg: cB, }, 
    { 
      id: 3,
      defaultImg: C, 
      activeImg: cC, }, 
    { 
      id: 4, 
      defaultImg: D, 
      activeImg: cD, 
    },
    { 
      id: 5, 
      defaultImg: E, 
      activeImg: cE, 
    }, 
  ];


  // useEffect(() => {
  //   const audio = new Audio(sound);
  //   audio.play();
  //   publishTopic("/emoji", "std_msgs/Int32", {
  //     data: 2,
  //   });
  //   audio.onended = () => {
  //     navigate("/thankyou");
  //   };

  //   return () => {
  //     publishTopic("/emoji", "std_msgs/Int32", { data: 1 });
  //     audio.pause();
  //     audio.currentTime = 0;
  //   };

  // }, []);

  return (
    <Timer_layout>
      <div 
      dir="rtl" 
    className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center gap-6">
      <img
        src={bg}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />

      {buttons.map((btn) => (
        <img
          key={btn.id}
          src={
            selectedIds.includes(btn.id)
              ? btn.activeImg
              : btn.defaultImg
          }
          alt={`button-${btn.id}`}
          className="cursor-pointer transition-transform hover:scale-105"
          onClick={() => handleClick(btn.id)}
        />
      ))}

      </div>
    </Timer_layout>
  );
};

export default List2025;
