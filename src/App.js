// Libraries
import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Layouts
import MainLayout from "./Layouts/MainLayout/MainLayout";

// Components
import Loader from "./Components/Custom/Loader";

// Views
import Repositories from "./Views/Repositories";
import Followers from "./Views/Followers";
const Home = lazy(() => import("./Views/Home"));
const NotFound = lazy(() => import("./Views/NotFound"));

function App() {
  return (
    <Router>
      <MainLayout>
        <Switch>
          <Route path="/" exact>
            <Suspense fallback={<Loader />}>
              <Home />
            </Suspense>
          </Route>

          <Route path="/repositories/:user/:amount" exact>
            <Repositories />
          </Route>

          <Route path="/followers/:user/:amount" exact>
            <Followers />
          </Route>

          <Route path="*">
            <Suspense fallback={<Loader />}>
              <NotFound />
            </Suspense>
          </Route>
        </Switch>
      </MainLayout>
    </Router>
  );
}

export default App;
