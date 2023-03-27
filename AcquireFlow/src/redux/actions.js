// src/redux/actions.js

export const ADD_GOAL = "ADD_GOAL";
export const DELETE_GOAL = "DELETE_GOAL";
export const UPDATE_GOAL = "UPDATE_GOAL";

export const ADD_TASK = "ADD_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const UPDATE_TASK = "UPDATE_TASK";

export const addGoal = (goal) => ({
  type: ADD_GOAL,
  payload: goal,
});

export const deleteGoal = (index) => ({
  type: DELETE_GOAL,
  payload: index,
});

export const updateGoal = (index, goal) => ({
  type: UPDATE_GOAL,
  payload: { index, goal },
});

export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});

export const deleteTask = (index) => ({
  type: DELETE_TASK,
  payload: index,
});

export const updateTask = (index, task) => ({
  type: UPDATE_TASK,
  payload: { index, task },
});
