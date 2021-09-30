import styled from "styled-components";
import theme from "../../../theme";
import gradientbg from './../../../assets/img/gradient2.jpg'

export default styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  // background-color: ${theme.colors.pinkNavbar};
  background-image: url(${gradientbg});
  opacity: 70%;

  a {
    color: ${theme.colors.cream};
  }

  height: 5.5vh;
  margin-bottom: 40px;

  .logo {
    font-family: ${theme.fonts.serif};
    font-size: 35px;
    margin-left: 25px;

    &:hover {
      color: ${theme.colors.navy};
    }
  }

  .nav {
    display: flex;
    align-items: center;
    height: 100%;

    .nav-link {
      display: flex;
      align-items: center;
      height: 100%;
      padding: 0px 40px;

      &:hover {
        background: ${theme.colors.lightPinkNavBar};
        color: ${theme.colors.navy};
      }
    }
  }
`