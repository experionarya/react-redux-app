import { connect } from "react-redux";
import { withRouter } from "react-router";
import {
    getEmployees,
    addEmployee,
    editEmployee
} from "../EmployeeList/dux";

import AddEmployee from "./AddEmployee";

const mapStateToProps = state => ({
  employees: getEmployees(state),
});

function mapDispatchToProps(dispatch) {
  return {
    addEmployee: params => dispatch(addEmployee(params)),
    editEmployee: params => dispatch(editEmployee(params))
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AddEmployee)
);
