import React from 'react';
import { useDispatch } from 'react-redux';
import { showDashboard, showForm } from './../../actions/index';
import { Link } from "react-router-dom";
import StyledNavbar from './styles/StyledNavbar';

function Navbar() {
  const dispatch = useDispatch();
  const goHome = () => {
    const action = showDashboard();
    dispatch(action);
  }

  const goToForm = () => {
    const action = showForm("new");
    dispatch(action);
  }

  return (
    <StyledNavbar>
      <Link className='logo' to='/'>moodcloud</Link>
      <div className="nav">
        <Link className='nav-link' to='/dashboard' onClick={goHome}>dashboard</Link>
        <Link className='nav-link' to='/dashboard' onClick={goToForm}>postNew</Link>
        <Link className='nav-link' to="/account">account</Link>
      </div>
    </StyledNavbar>
  );
}

// return(
//   <h3>Navbar</h3>
// )
// }
export default Navbar;