import React from 'react';
import { useDispatch } from 'react-redux'
import { showDashboard, showForm } from './../../actions/index'

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
      <h3 onClick={goHome}>moodcloud</h3>
      <div className="nav"><h3 onClick={goToForm}>post new</h3></div>
    </div>
  );
}

// return(
//   <h3>Navbar</h3>
// )
// }
export default Navbar;