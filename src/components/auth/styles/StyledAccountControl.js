import styled from "styled-components";
import gradientbg from './../../../assets/img/gradient2.jpg'
import theme from "../../../theme";

export default styled.div`
  height: 100vh;
  position: relative;
  background: url(${gradientbg}) no-repeat center center/cover;
  position: relative;
  color: ${theme.colors.cream};

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: center;
    text-align: center;
    height: 100%;

    .toggle {
      margin-top: 15px;    
      &:hover {
        border-bottom: 1px solid ${theme.colors.cream};
        cursor: pointer;
      }
    }
  }
`;