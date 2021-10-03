import styled from "styled-components";
import theme from './theme';
import gradientbg from './assets/img/gradient1.jpg'

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
    position: absolute;
    z-index: 1;
    background: url(${gradientbg}) no-repeat;
    // background: ${theme.colors.lightPinkNavBar};
    max-width: 1100px;
    // height: 58%;
    overflow: auto;
    margin: auto;
    padding: 30px;
    border-radius: 25px;
    display: flex;
    flex-direction: column;

    .close-modal {
      width: 100%;
      margin-bottom: 10px;
      font-style: italic;

      &:hover {
        cursor: pointer;
        color: ${theme.colors.cream}
      }
    }
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