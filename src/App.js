import React, { Fragment } from "react";
import Header from "./components/Header";
import NamesList from "./components/NamesList";
import NamePage from "./components/NamePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Fragment>
      <Header />
      <Router>
        <Switch>
          <Route path="/:id" component={NamePage} />
          <Route path="/" component={NamesList} />
        </Switch>
      </Router>
    </Fragment>
  );
};

export default App;
