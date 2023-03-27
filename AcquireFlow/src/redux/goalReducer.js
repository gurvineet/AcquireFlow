// src/redux/goalReducer.js

import baseReducer from "./baseReducer";
import { ADD_GOAL, DELETE_GOAL, UPDATE_GOAL } from "./actions";

const goalReducer = baseReducer(ADD_GOAL, DELETE_GOAL, UPDATE_GOAL);

export default goalReducer;