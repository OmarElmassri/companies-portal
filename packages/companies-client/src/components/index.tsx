import React from "react";
// Packages
import { Route, Router, Switch } from "react-router-dom";
// Helpers
import history from "../utils/history";
// Components
import Navbar from "./common/navbar/navbar";
import CompanyForm from "./company/companyForm";
import CompanyList from "./company/companyList";

const Home: React.FunctionComponent = () => {
  return (
    <div className="full-height-vh grey-back layout-container">
      <Navbar />
      <div className="flow-cont">
        <div className="full-container content-container top-sm-padd">
          <Router history={history as any}>
            <Switch>
              <Route
                path={["/companies/add", "/companies/:code/edit"]}
                render={() => <CompanyForm />}
              />
              <Route path="/" render={() => <CompanyList />} />
            </Switch>
          </Router>
        </div>
      </div>
    </div>
  );
};

export default Home;
