import { createSlice } from "@reduxjs/toolkit";

const popupSlice = createSlice({
  name: "popup",
  initialState: { open: false,
    rank: "1",
    percentile: "30%",
    correctAnswers: 10, 
   },
  reducers: {
    openPopup: (state) => {
      state.open = true;
    },
    closePopup: (state) => {
      state.open = false;
    },
    updateStats: (state, action) => {
        state.rank = action.payload.rank;
        state.percentile = action.payload.percentile + "%";
        state.correctAnswers = `${action.payload.correctAnswers}`;
      },
  },
});

export const { openPopup, closePopup,updateStats } = popupSlice.actions;
export default popupSlice.reducer;
