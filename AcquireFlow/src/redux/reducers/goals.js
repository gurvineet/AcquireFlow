// src/redux/reducers/goals.js
import { createSlice } from '@reduxjs/toolkit';

const goalsSlice = createSlice({
  name: 'goals',
  initialState: {
    items: [],
  },
  reducers: {
    addGoal: (state, action) => {
      state.items.push(action.payload);
    },
    deleteGoal: (state, action) => {
      state.items.splice(action.payload, 1);
    },
    updateGoal: (state, action) => {
      state.items[action.payload.index] = action.payload.goal;
    },
  },
});

export const { addGoal, deleteGoal, updateGoal } = goalsSlice.actions;
export default goalsSlice.reducer;