import { combineReducers } from "redux";
import { employeeReducer } from "../containers/EmployeeList/dux"

const rootReducer = combineReducers(
  Object.assign({
    employeeReducer
  })
);

export default rootReducer;
