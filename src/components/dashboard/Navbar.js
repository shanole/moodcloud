import React from 'react';
import { useDispatch } from 'react-redux';
import { showDashboard, showForm } from './../../actions/index';
import { Link } from "react-router-dom";

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
    <div style={{display: 'flex', justifyContent: 'space-between'}}>
      <Link to='/'>moodcloud</Link>
      <div className="nav">
        <Link to='/dashboard' onClick={goHome}>dashboard</Link>
        <Link to='/dashboard' onClick={goToForm}>postNew</Link>
        <h3><Link to="/account">account</Link></h3>
      </div>
    </div>
  );
}

// return(
//   <h3>Navbar</h3>
// )
// }
export default Navbar;