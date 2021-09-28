import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/dashboard/Dashboard';
import Navbar from './components/dashboard/Navbar';
import AccountControl from './components/auth/AccountControl';
import LandingPage from './components/landing/LandingPage'
import PrivateRoute from './components/auth/PrivateRoute';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// will need to add routing
function App() {
  return (
    <Router>
      <Switch>
        <Route path ="/account">
          <AccountControl />
        </Route>
        <PrivateRoute path="/dashboard">
          <Navbar />
          <div className="container">
            <Dashboard />
          </div>
        </PrivateRoute>
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
