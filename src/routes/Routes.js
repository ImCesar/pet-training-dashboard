import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import PetTable from "../components/PetTable/PetTable";
import Dashboard from "../components/Dashboard";

export default () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <PetTable />
        </Route>

        <Route path="/student">
          <Dashboard />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
