import React from "react";
import { Switch, Route } from "react-router-dom";
import RealtorList from "./RealtorList";
import RealtorDetail from "./RealtorDetail";

// The Roster component matches one of two different routes
// depending on the full pathname
const Realtor = () => (
  <Switch>
    <Route exact path="/realtor" component={RealtorList} />
    <Route path="/realtor/:id" component={RealtorDetail} />
  </Switch>
);

export default Realtor;
