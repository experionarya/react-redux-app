import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './stylesheet/styles.css';
import { Provider } from "react-redux";
import configureStore from "./store"
import { Home } from './containers/Home';
import AddEmployee from './containers/AddEmployee';
import EditEmployee from './containers/EditEmployee';
import Users from "./containers/Users"
const { store } = configureStore();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <Switch>
      <Route path="/" component={Users} exact />
        {/* <Route path="/" component={Home} exact />
        <Route path="/add" component={AddEmployee} exact />
        <Route path="/edit/:id" component={EditEmployee} exact /> */}
      </Switch>
      </BrowserRouter>
      </Provider>
  );
}

export default App;