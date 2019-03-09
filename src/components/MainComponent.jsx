import React from "react";
import SignIn from "./SignIn.jsx";
import AfterLogin from "./AfterLogin.jsx";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class MainComponent extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={props => <SignIn {...props} />} />
          <Route exact path="/login" render={props => <SignIn {...props} />} />
          <Route
            exact
            path="/dashboard"
            render={props => <AfterLogin {...props} />}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default MainComponent;
