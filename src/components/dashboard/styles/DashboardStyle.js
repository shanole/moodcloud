import styled from "styled-components";
import theme from '../../../theme';
import gradientbg from './../../../assets/img/gradient1.jpg'

export default styled.div`
color: ${theme.colors.navy};
background-color: ${theme.colors.cream};
min-height: 100vh;
width: 100vw;

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
    @media (max-width: 767px) {
      margin-top: 30px;
      border: none;
    }
  }
  
  .col-r {
    margin-left: 20px;
    padding-right: 10px;
    @media (max-width: 767px) {
      margin-top: 40px;
      padding-top: 20px;
      border-top: 1px solid;
    }
  }

}
.modal-comp {
  position: fixed;
  z-index: 4;
  background: url(${gradientbg}) no-repeat;
  width: auto;
  max-width: 800px;
  overflow: auto;
  margin: auto;
  padding: 30px;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

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

.entry-keywords {
  display: flex;
}

.entry-title {
  font-family: ${theme.fonts.serif};
}

.rating {
  font-family: ${theme.fonts.serif};
  font-size: 35px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  
  .number {
    color: ${theme.colors.pink};
  }

  .rating-label {
    font-family: ${theme.fonts.sansSerif};
    font-size: 12px;
  }
}

.time-toggle {
  margin: 10px 0px;
  display: flex;
  justify-content: space-evenly;
  button {
    color: ${theme.colors.navy};
    background: none;
    font-size: 18px;
    margin-right: 20px;

    &:hover {
      background: ${theme.colors.lightPinkNavBar};
    }
  }
}

`