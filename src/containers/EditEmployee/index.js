import { connect } from "react-redux";
import { withRouter } from "react-router";
import {
    getEmployees,
    editEmployee
} from "../EmployeeList/dux";

import EditEmployee from "./EditEmployee";

const mapStateToProps = state => ({
  employees: getEmployees(state),
});

function mapDispatchToProps(dispatch) {
  return {
    editEmployee: params => dispatch(editEmployee(params))
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(EditEmployee)
);
