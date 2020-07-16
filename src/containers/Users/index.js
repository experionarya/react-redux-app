import { connect } from "react-redux";
import { withRouter } from "react-router";
// import {
//     getEmployees,
//     removeEmployee,
//     editEmployee
// } from "./dux";

import Users from "./Users";

const mapStateToProps = state => ({
  // employees: getEmployees(state),
});

function mapDispatchToProps(dispatch) {
  return {
    // removeEmployee: params => dispatch(removeEmployee(params)),
    // editEmployee: params => dispatch(editEmployee(params))
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Users)
);
