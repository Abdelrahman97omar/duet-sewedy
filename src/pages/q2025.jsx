import { useLocation, useNavigate } from "react-router";
import { useState, useEffect } from "react";
import Q1 from "../assets/questionPart1/1.png";
import Q2 from "../assets/questionPart1/2.png";
import Q3 from "../assets/questionPart1/3.png";
import Q4 from "../assets/questionPart1/4.png";
import Q5 from "../assets/questionPart1/5.png";

// To access elements, QUESTIONS_2025[1].choices.A
const QUESTIONS_2025 = {
  1: {
    title: "Personal Productivity & Habits",
    choices: {
      A: {text:"Staying consistent with time management",P1:4,P5:1},
      B: {text:"Maintaining work-life balance",P6:4,P1:1},
      C: {text:"Sticking to a fitness or wellbeing routine",P6:4,P3:1},
      D: {text:"Reading or learning consistently",P2:4,P4:1},
      E: {text:"Managing stress effectively",P6:4,P3:1}
    },
  },
  2: {
    title: "Professional Growth",
    choices: {
      A: {text:"Completing a certification or course",P2:4,P4:1},
      B: {text:"Improving presentation or communication skills",P3:4,P6:1},
      C: {text:"Taking ownership of tasks",P4:4,P3:1},
      D: {text:"Enhancing technical skills",P2:4,P5:1},
      E: {text:"Keeping up with industry updates",P2:4,P4:1}
    },
  },
  3: {
    title: "Workplace Responsibilities",
    choices: {
      A: {text:"Meeting deadlines regularly",P1:4,P5:1},
      B: {text:"Communicating effectively with team members",P3:4,P6:1},
      C: {text:"Managing stakeholders properly",P4:4,P3:1},
      D: {text:"Avoiding repeated mistakes",P5:4,P1:1},
      E: {text:"Keeping documentation or reporting organized",P5:4,P1:1}
    },
  },
  4: {
    title: "Leadership & Collaboration",
    choices: {
      A: {text:"Delegating tasks properly",P3:4,P4:1},
      B: {text:"Building team relationships",P3:4,P6:1},
      C: {text:"Managing conflicts",P3:4,P6:1},
      D: {text:"Encouraging team engagement",P3:4,P6:1},
      E: {text:"Driving initiatives forward",P4:4,P5:1}
    },
  },
  5: {
    title: "Personal Mindset",
    choices: {
      A: {text:"Maintaining motivation",P6:4,P4:1},
      B: {text:"Managing emotions under pressure",P6:4,P3:1},
      C: {text:"Building confidence",P6:4,P3:1},
      D: {text:"Staying committed to long-term goals",P4:4,P6:1},
      E: {text:"Avoiding distractions",P1:4,P5:1}
    },
  },
};

const BACKGROUNDS = {
  1: Q1,
  2: Q2,
  3: Q3,
  4: Q4,
  5: Q5,
};

var userResult=0
var pack_1
var pack_2
var pack_3
var pack_4
var pack_5
var pack_6


const QuestionsPage2025 = () => {
const { state } = useLocation();
const navigate = useNavigate();
const { question1, question2 } = state;
const choices = QUESTIONS_2025[question1].choices;
const [selectedChoices, setSelectedChoices] = useState({});
const [questionNumber, setQuestionNumber] = useState(1);

  const handleChoiceSelect = (questionIndex, choiceKey) => {
    setQuestionNumber(2);
    setSelectedChoices((prev) => ({
      ...prev,
      [questionIndex]: choiceKey,
    }));

  };

    return (
      <div 
      dir="rtl" 
    className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center gap-6">

    {question_number === 1 && (
    <img
        src={BACKGROUNDS[question1]}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover -z-10"
    />
    )}

    {question_number === 2 && (
    <img
        src={BACKGROUNDS[question2]}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover -z-10"
    />
    )}


      <div className="flex flex-col gap-4">
        {Object.entries(choices).map(([key, value]) => {
          const isSelected = selectedChoices[question1] === key;
          return (
            <button
              key={key}
              onClick={() => handleChoiceSelect(key)}
            className={`py-3 px-6 rounded-full text-blue-700 font-medium border-2 border-blue-700 bg-transparent hover:bg-blue-100`}

            >
              {value}
            </button>
          );
        })}
      </div>
      </div>
    );

};

export default QuestionsPage2025;
