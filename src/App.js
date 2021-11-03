import { Switch, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Dashboard />
      </Route>
    </Switch>
  );
}

export default App;
