// action types

export const ADD_EMPLOYEES = "ADD_EMPLOYEES";
export const EDIT_EMPLOYEE = "EDIT_EMPLOYEE";
export const REMOVE_EMPLOYEE = "REMOVE_EMPLOYEE";

// reducer actions

export const removeEmployee = (id) => {
    return {
        type: "REMOVE_EMPLOYEE",
        id
    }
  }

  export const addEmployee = (employees) => {
      console.log("employees", employees)
      return {
        type: "ADD_EMPLOYEES",
        employees
      }
  }

 export const editEmployee = (employees) => {
    return {
        type: "EDIT_EMPLOYEE",
        employees
      }
  }

  const initialState = {
    employees: [
      {
        id: 1,
        name: "Ishan Manandhar",
        location: "Kathmandu",
        designation: "Frontend Developer"
      }
    ]
  };

  export const employeeReducer =  (state = initialState, action) => {
      console.log("acccccccc", action)
    switch (action.type) {
      case "REMOVE_EMPLOYEE":
        return {
          ...state,
          employees: state.employees.filter(
            employee => employee.id !== action.id
          )
        };
      case "ADD_EMPLOYEES":
        return {
          ...state,
          employees: [...state.employees, action.employees]
        };
      case "EDIT_EMPLOYEE":
        const updatedEmployee = action.employees;
  
        const updatedEmployees = state.employees.map(employee => {
          if (employee.id === updatedEmployee.id) {
            return updatedEmployee;
          }
          return employee;
        });
  
        return {
          ...state,
          employees: updatedEmployees
        };
      default:
        return state;
    }
  };

  export function getEmployees(state) {
    return state.employeeReducer.employees;
  }
