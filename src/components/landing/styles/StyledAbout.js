import styled from "styled-components";
import theme from './../../../theme';

export default styled.div`
  height: 100vh;
  position: relative;
  background-color: ${theme.colors.cream};
  color: ${theme.colors.navy};

  .wrapper {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    height: 100%;
    
    @media (max-width: 768px) {
      flex-direction: column;
    }
  }

  .column {
    flex-basis: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 200px;
    @media (max-width: 768px) {
      padding: 40px;
    }
  }
  .chart {
    border-right: 1px black solid;
    @media (max-width: 768px) {
      border: none;
    }
  }
  .about h1 {
    margin-bottom: 30px;
  }

  .about-links {
    margin-top: 20px;
    font-family: ${theme.fonts.serif};
    text-transform: lowercase;
    font-size: 12px;
    letter-spacing: 0.1em;
    font-style: italic;

    a {
      margin-bottom: 15px;
      &:hover {
        border-bottom: 1px solid;
      }
    }
  }
`;