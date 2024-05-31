import React, { useEffect, useState } from "react";
import User from "./User";
import "../styles/Result.css";
import { FaHandPaper, FaHandRock, FaHandScissors } from "react-icons/fa";
const Result = ({ action, mAction }) => {
  const [result, setResult] = useState("");
  const [reset, setReset] = useState(false);
  console.log(action, mAction);
  useEffect(() => {
    function myResult() {
      if (action === "rock" && mAction === "paper") {
        setResult("You lose!");
      } else if (action === "scissors" && mAction === "rock") {
        setResult("You lose!");
      } else if (action === "paper" && mAction === "scissors") {
        setResult("You lose!");
      } else if (action === mAction) {
        setResult("Draw ");
      } else {
        setResult("You Won");
      }

    }
    myResult();
  }, []);
  return (
    <div>
      {reset ? (
        <User />
      ) : (
        <div className="resultDiv">
          <div className="result">
            {action==="rock"?<FaHandRock className="myAction"/>:(action==="paper"?<FaHandPaper className="myAction"/>:<FaHandScissors className="myAction"/>)}
            <span>vs</span>
            {mAction==="rock"?<FaHandRock className="myAction"/>:(mAction==="paper"?<FaHandPaper className="myAction"/>:<FaHandScissors className="myAction"/>)}
          </div>
           <p className="myFont">{result}</p>
          <button onClick={() => setReset(true)}>Reset</button>
        </div>
      )}
    </div>
  );
};

export default Result;
