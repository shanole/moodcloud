import styled from "styled-components";
import theme from './theme';

export default styled.div`
color: ${theme.colors.navy};
background-color: ${theme.colors.cream};
height: 100vh;

.dashboard-container {
  margin: auto;
}

.columns {
  display: flex;
  justify-content: center;

  .col-l {
    border-right: 1px solid ${theme.colors.navy};
    display: flex;
    flex-direction: column;
    align-content: center;
    margin-right: 20px;
  }
  
  .col-r {
    margin-left: 20px;
  }

  .modal-comp {
    position: fixed;
    z-index: 1;
    background: ${theme.colors.lightPinkNavBar};
    width: 60%;
    height: 55%;
    overflow: auto;
    margin: auto;
    padding: 30px;
    border-radius: 25px;
  }
}


.section-heading {
  font-family: ${theme.fonts.serif};
  font-size: 35px;
  text-align: center;
}

.link {
  &: hover {
    border-bottom: 1px solid ${theme.colors.navy};
    cursor: pointer;
  }
}

p.link {
  display: table;
  flex-direction: column;
}

`