import React, { Component } from "react";
import {
  Route,
  Switch,
  Redirect,
  withRouter
} from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faAngleDown, faAngleUp, faArrowRight, faArrowLeft
} from '@fortawesome/free-solid-svg-icons';
import './App.css';
import Select from "../select";
import MultiSelect from "../multiselect";

library.add(faAngleDown, faAngleUp, faArrowRight, faArrowLeft);

class App extends Component {
  render() {
    const { history } = this.props

    return (
      <div className='content'>
        <Switch>
          <Route history={history} path="/select/:id/multiselect" component={MultiSelect} />
          <Route history={history} path="/select" component={Select} />
          <Redirect from="/" to="/select"/>
        </Switch>
      </div>

    );
  }
}

export default withRouter(App);
