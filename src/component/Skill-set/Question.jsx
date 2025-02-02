import React from "react";

import { CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";

const Question = () => {
    const correctAnswers = useSelector((state) => state.popup.correctAnswers);
    const totalQuestions = 15; // Always fixed
    const progressValue = (correctAnswers / totalQuestions) * 100;

  return (
    <div className="p-8 bg-white border border-gray-300 rounded-xl shadow-sm flex flex-col justify-between max-w-[40rem]">
    <div className="flex justify-between items-center">
      <h2 className="text-lg font-bold">Question Analysis</h2>
      <h3 className="text-xl font-bold text-blue-700">{correctAnswers}/{totalQuestions}</h3>
    </div>
    
    <p className="mt-2 text-gray-600">
      You scored <b>{correctAnswers} questions correct</b> out of {totalQuestions}. However, it still needs some improvements.
    </p>

    <div className="flex justify-center mt-3">
      <div className="relative w-[150px] h-[150px]">
        <CircularProgress variant="determinate" value={progressValue} size={150} thickness={6} />
        <div className="absolute inset-0 flex items-center justify-center text-2xl">
          🎯
        </div>
      </div>
    </div>
  </div>
  );
};

export default Question;
