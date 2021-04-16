
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Homepage from './page/Homepage';
import AddWorkPage from './page/AddWorkPage'


function App() {
  return (
    <Router>
        <Switch>
          <Route path="/" exact>
            <Homepage />
          </Route>
          <Route path="/AddWorkPage" exact>
            <AddWorkPage />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
