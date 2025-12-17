import { useNavigate } from "react-router";
import { useRosConnection } from "./connection-provider";
import { useEffect } from "react";
// import bg from "../assets/ui/Nafeza app-04.png";
// import Thankyouimage from "../assets/ui/Nafeza app-08.png";
// import sound from "../assets/sound/Thank you.mp3";

const Thankyou = () => {
  const navigate = useNavigate();
  const { publishTopic } = useRosConnection();

  useEffect(() => {
    const audio = new Audio(sound);
    setTimeout(() => {
      audio.play();
    }, 100);
    publishTopic("/emoji", "std_msgs/Int32", {
      data: 2,
    });
    console.log("emoji 2");
    audio.onended = () => {
      navigate("/");
    };
    return () => {
      audio.pause();
      audio.currentTime = 0;

      publishTopic("/emoji", "std_msgs/Int32", { data: 1 });
      console.log("emoji 1");
    };
  }, [navigate]);

  return (
    <div dir="rtl" className="relative w-full h-screen overflow-hidden">
      <button
        onClick={() => navigate("/")}
        className="w-[400px] h-[100px] absolute bg-red-500 bottom-0  right-[20%] z-20"
      >
        back home
      </button>
      <img
        src={Thankyouimage}
        alt="hero"
        className="object-cover object-center bg-no-repeat"
      />
    </div>
  );
};

export default Thankyou;
