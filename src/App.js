import { Switch, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Dashboard />
      </Route>
      <Route path="*">
        <ErrorPage />
      </Route>
    </Switch>
  );
}

export default App;
