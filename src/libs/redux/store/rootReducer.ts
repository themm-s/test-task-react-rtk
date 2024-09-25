import { combineReducers } from "redux";
import taskSlice from "../slices/taskSlice";

const rootReducer = combineReducers({
  tasks: taskSlice
});

export default rootReducer;