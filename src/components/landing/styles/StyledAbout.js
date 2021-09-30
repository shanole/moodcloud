import styled from "styled-components";
import theme from './../../../theme';

export default styled.div`
  height: 100vh;
  position: relative;
  background-color: ${theme.colors.cream};
  color: ${theme.colors.navy};

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100%;
  }
`;