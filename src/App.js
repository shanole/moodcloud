import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/dashboard/Dashboard';
import Navbar from './components/dashboard/Navbar';
import Signin from './components/auth/Signin';
import LandingPage from './components/LandingPage'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// will need to add routing
function App() {
  return (
    <Router>
    <Switch>
      <Route path ="/signin">
        <Signin />
      </Route>
      <Route path="/dashboard">
        <Navbar />
        <div className="container">
          <Dashboard />
        </div>
      </Route>
      <Route path="/">
        <LandingPage />
      </Route>
    </Switch>
    </Router>
  );
}

export default App;
