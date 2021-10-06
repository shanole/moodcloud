import styled from "styled-components";
import theme from "../../../theme";

export default styled.div`
  height: 100vh;
  color: ${theme.colors.cream};

  h1 {
    font-size: 7vh;
  }

  p {
    font-size: 1.4em;
  }

  .learn {
    font-family: ${theme.fonts.serif};
    font-style: italic;
    letter-spacing: 0.1em;
    margin-top: 40px;
    margin-bottom: 5px;
  }

  .plain-link {
    color: ${theme.colors.cream};
    font-size: 25px;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: +1;
  }

  #videoWrapper {
    height: 100%;
    width: 100%;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: center;
    overflow: hidden;

    video {
      position: absolute;
      z-index: -1;
      min-width: 100%;
      min-height: 100%;
      object-fit: cover;
    }
  }


`;