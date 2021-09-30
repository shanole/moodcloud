import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalStyling from './GlobalStyling';
import Dashboard from './components/dashboard/Dashboard';
import Navbar from './components/dashboard/Navbar';
import UserControl from './components/auth/UserControl';
import LandingPage from './components/landing/LandingPage'
import PrivateRoute from './components/auth/PrivateRoute';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// will need to add routing
function App() {
  return (
    <GlobalStyling>
    <Router>
      <Switch>
        <PrivateRoute path ="/account">
          <Navbar />
          <UserControl />
        </PrivateRoute>
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
    </GlobalStyling>
  );
}

export default App;
