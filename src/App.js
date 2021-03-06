import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalStyle from './GlobalStyle';
import DashboardStyle from './components/dashboard/styles/DashboardStyle';
import LandingPageStyle from './components/landing/styles/LandingPageStyle';
import Dashboard from './components/dashboard/Dashboard';
import Navbar from './components/dashboard/Navbar';
import UserControl from './components/auth/UserControl';
import LandingPage from './components/landing/LandingPage'
import PrivateRoute from './components/auth/PrivateRoute';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <GlobalStyle>
    <Router>
      <Switch>
        <PrivateRoute path ="/account">
         <DashboardStyle>
            <Navbar />
            <UserControl />
          </DashboardStyle>
        </PrivateRoute>
        <PrivateRoute path="/dashboard">
          <DashboardStyle>          
            <Navbar />
            <Dashboard />
          </DashboardStyle>
        </PrivateRoute>
        <Route path="/">
          <LandingPageStyle>
            <LandingPage />
          </LandingPageStyle>
        </Route>
      </Switch>
    </Router>
    </GlobalStyle>
  );
}

export default App;
