import React from 'react';
import { useDispatch } from 'react-redux';
import { showDashboard, showForm } from './../../actions/index';
import { Link } from "react-router-dom";
import StyledNavbar from './styles/StyledNavbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

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
      <Link className='logo' to='/dashboard' onClick={goHome}><FontAwesomeIcon icon={faSmile} transform='shrink-8 down-1' mask={['fas','cloud']} size='xs'/> moodcloud</Link>
      <div id="nav">
        <Link className='nav-link' to='/dashboard' onClick={goHome}>dashboard</Link>
        <Link className='nav-link' to='/dashboard' onClick={goToForm}>new entry</Link>
        <Link className='nav-link' to="/account">account</Link>
      </div>
      <div id="nav-mobile">
        <Link className='nav-link' to='/dashboard' onClick={goToForm}><FontAwesomeIcon icon={faPlus}/></Link>
        <Link className='nav-link' to="/account"><FontAwesomeIcon icon={faSmile}/></Link>
      </div>
    </StyledNavbar>
  );
}

export default Navbar;