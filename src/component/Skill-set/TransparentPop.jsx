import React, { useState } from "react";
import { Dialog, DialogContent, Typography, Button, Box, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { closePopup, updateStats } from "../../app/slice";
import html from "../../assets/html-5.png";

const TransparentPop = () => {
  const open = useSelector((state) => state.popup.open);
  const dispatch = useDispatch();

  const [rank, setRank] = useState("");
  const [percentile, setPercentile] = useState("");
  const [correctAnswers, setCorrectAnswers] = useState("");

  const handleSave = () => {
    dispatch(updateStats({ rank, percentile, correctAnswers }));
    dispatch(closePopup()); // Close modal after updating stats
  };

  return (
    <>
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
          <div className="bg-white p-6 rounded-lg w-full max-w-[30rem] shadow-lg">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Update Scores</h2>
              <img src={html} alt="HTML Logo" width={40} height={40} />
            </div>

            {/* Input Fields */}
            {[
              { label: "Update your Rank", value: rank, setValue: setRank },
              { label: "Update your Percentile", value: percentile, setValue: setPercentile },
              { label: "Update your Current Score (out of 15)", value: correctAnswers, setValue: setCorrectAnswers },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-4 p-3 rounded-lg mb-3 flex-wrap sm:flex-nowrap">
                {/* Number Badge */}
                <div className="w-8 h-8 flex items-center justify-center text-white font-bold rounded-full bg-blue-900">
                  {index + 1}
                </div>

                {/* Label */}
                <label className="font-semibold flex-1 text-sm sm:text-base">{item.label}</label>

                {/* Input Field */}
                <input
                  type="number"
                  value={item.value}
                  onChange={(e) => item.setValue(e.target.value)}
                  className="border border-blue-500 rounded-md px-3 py-2 w-full sm:w-20 text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            ))}

            {/* Action Buttons */}
            <div className="flex justify-end gap-4 mt-4 flex-wrap sm:flex-nowrap">
              <button className="border border-blue-900 text-blue-900 px-4 py-2 rounded-lg font-semibold hover:bg-blue-100 w-full sm:w-auto" onClick={() => dispatch(closePopup())}>
                Cancel
              </button>
              <button className="bg-blue-900 text-white px-6 py-2 rounded-lg font-semibold flex items-center gap-2 hover:bg-blue-800 w-full sm:w-auto" onClick={handleSave}>
                Save →
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TransparentPop;