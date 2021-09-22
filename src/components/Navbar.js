import React from 'react';
import { useDispatch } from 'react-redux'
import { showDashboard } from './../actions/index'

function Navbar() {
  const dispatch = useDispatch();
  const goHome = () => {
    const action = showDashboard();
    dispatch(action);
  }
  return (
  <h3 onClick={goHome}>Navbar</h3>
  );
}

// return(
//   <h3>Navbar</h3>
// )
// }
export default Navbar;