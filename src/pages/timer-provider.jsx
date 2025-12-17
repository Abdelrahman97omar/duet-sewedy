import { useCallback, useEffect, useRef } from "react";
import { useNavigate } from "react-router";
function Timer_layout({ children }) {
  const timerRef = useRef(null);
  const navigate = useNavigate();
  const startTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      navigate("/thankyou");
    }, 1000 * 30 * 60 * 60); // 20 sec
  }, []);

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [startTimer]);

  const handleClick = () => {
    startTimer();
  };
  return <div onClick={() => handleClick()}>{children}</div>;
}

export default Timer_layout;
