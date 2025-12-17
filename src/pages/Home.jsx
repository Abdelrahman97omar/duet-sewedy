import { useNavigate } from "react-router";
import { useRosConnection } from "./connection-provider";
import { useEffect, useRef } from "react";
import homepage from "../assets/Home.png";
// import homesound from "../assets/sound/home.mp3";

const Home = () => {
  const { isConnected, publishTopic } = useRosConnection();
  const navigate = useNavigate();
  const audioRef = useRef(null);

  const usesInteraction = () => {
    if (isConnected) {
      publishTopic("/user_interaction", "std_msgs/Int32", {
        data: 1,
      });
    }
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    navigate("/main");
  };

  useEffect(() => {
    if (isConnected) {
      publishTopic("/op_mode", "std_msgs/Int32", {
        data: 1,
      });
      publishTopic("/resume", "std_msgs/Int32", {
        data: 1,
      });
      publishTopic("/user_interaction", "std_msgs/Int32", {
        data: 0,
      });
    }
    // audioRef.current = new Audio(homesound);
    // audioRef.current.play();
    // return () => {
    //   if (audioRef.current) {
    //     audioRef.current.pause();
    //     audioRef.current.currentTime = 0;
    //   }
    // };
  }, []);

  return (
    <div
      className="relative w-full h-screen overflow-hidden"
      onClick={() => {
        usesInteraction();
      }}
    >
    <img
    src={homepage}
    alt="Homepage background"
    className="absolute inset-0 w-full h-full object-cover"
  />


      {
      /* <video
        src={bg}
        autoPlay
        loop
        muted
        playsInline
        alt="hero"
        className="object-cover object-center bg-no-repeat"
      /> */}
    </div>
  );
};

export default Home;
