import React from 'react'
import { Trophy, Clipboard, CheckCircle } from "lucide-react";
import { useSelector } from 'react-redux';

function QuickStats() {
    const { rank, percentile, correctAnswers } = useSelector((state) => state.popup);
      const stats = [
        {
          icon: <Trophy className="text-yellow-500 w-6 h-6" />,
          label: "YOUR RANK",
          value: rank,
        },
        {
          icon: <Clipboard className="text-blue-500 w-6 h-6" />,
          label: "PERCENTILE",
          value: percentile,
        },
        {
          icon: <CheckCircle className="text-green-500 w-6 h-6" />,
          label: "CORRECT ANSWERS",
          value: `${correctAnswers}/15`,
        },
      ];
  return (
    <div className="p-6 bg-white border border-gray-300 rounded-xl shadow-md max-w-[40rem] w-full">
    <h3 className="text-lg font-bold mb-4">Quick Statistics</h3>
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
      {stats.map((stat, index) => (
        <div 
          key={index} 
          className={`flex flex-col sm:flex-row items-center text-center sm:text-left space-y-2 sm:space-y-0 sm:space-x-4 w-full sm:w-1/3 px-4 py-2 ${index !== 0 ? "border-t sm:border-t-0 sm:border-l border-gray-300" : ""}`}
        >
          <div className="rounded-full bg-gray-100 p-3">{stat.icon}</div>
          <div className="flex flex-col">
            <p className="text-xl font-bold">{stat.value}</p>
            <p className="text-gray-500 text-sm">{stat.label}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default QuickStats
