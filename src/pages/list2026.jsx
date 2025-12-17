import { useNavigate } from "react-router";
// import { useRosConnection } from "./connection-provider";
import { useEffect, useState } from "react";
import bg from "../assets/questionPart2/bg.png";
import A from "../assets/questionPart2/a.png";
import cA from "../assets/questionPart2/cA.png";
import B from "../assets/questionPart2/b.png";
import cB from "../assets/questionPart2/cB.png";
import C from "../assets/questionPart2/c.png";
import cC from "../assets/questionPart2/cC.png";
// import D from "../assets/questionPart2/d.png";
// import cD from "../assets/questionPart2/cD.png";
import E from "../assets/questionPart2/e.png";
import cE from "../assets/questionPart2/cE.png";


import Timer_layout from "./timer-provider";
import { useRosConnection } from "./connection-provider";

const List2026 = () => {

  const navigate = useNavigate();
  const { publishTopic } = useRosConnection();
  const [selectedIds, setSelectedIds] = useState([]);

  const handleClick = (id) => {
  setSelectedIds((prev) => {
    if (prev.includes(id)) return prev; 

    const updated = [...prev, id];

    if (updated.length === 2) {
      navigate("/q2026", {
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
    // { 
    //   id: 4, 
    //   defaultImg: D, 
    //   activeImg: cD, 
    // },
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

export default List2026;
