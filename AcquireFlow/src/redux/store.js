import { configureStore } from '@reduxjs/toolkit';
import goalsReducer from './reducers/goals';
import tasksReducer from './reducers/tasks';

const store = configureStore({
  reducer: {
    goals: goalsReducer,
    tasks: tasksReducer,
  },
});

export default store;