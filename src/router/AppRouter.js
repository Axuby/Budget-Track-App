import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import AddExpensePage from "../component/AddExpensePage";
import EditPage from '../component/Edit';
import ExpensifyDashboardPage from "../component/ExpensifyDashboard";
import Header from "../component/Header";
import HelpPage from "../component/HelpPage";
import NotFoundPage from "../component/NotFoundPage";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header>
        <Switch>
          <Route path="/" component={ExpensifyDashboardPage} exact={true} />
          <Route path="/create" component={AddExpensePage} />
          <Route path="/edit" component={EditPage} />
          <Route path="/help" component={HelpPage}/>
          <Route component={NotFoundPage} />
        </Switch>
      </Header>
    </div>
  </BrowserRouter>
);
export default AppRouter;
