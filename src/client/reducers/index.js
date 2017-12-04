import { combineReducers } from "redux";
import carOfWeekReducer from "./carOfWeekReducer";
import makesReducer from "./makesReducer";
import modelsReducer from "./modelsReducer";

export default combineReducers({
  carOfTheWeek: carOfWeekReducer,
  makes: makesReducer,
  models: modelsReducer
});
