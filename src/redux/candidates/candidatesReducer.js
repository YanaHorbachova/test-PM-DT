import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  getСandidatesRequest,
  getСandidatesSuccess,
  getСandidatesError,
} from "./candidates-actions";

const candidates = createReducer([], {
  [getСandidatesSuccess]: (_, { payload }) => payload,  
});

const loading = createReducer(false, {
  [getСandidatesRequest]: () => true,
  [getСandidatesSuccess]: () => false,
  [getСandidatesError]: () => false,
});

export default combineReducers({
  candidates,
  loading
});