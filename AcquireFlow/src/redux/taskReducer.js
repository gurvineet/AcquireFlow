// src/redux/taskReducer.js

import baseReducer from "./baseReducer";
import { ADD_TASK, DELETE_TASK, UPDATE_TASK } from "./actions";

const taskReducer = baseReducer(ADD_TASK, DELETE_TASK, UPDATE_TASK);

export default taskReducer;