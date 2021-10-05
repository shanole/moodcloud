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

    .graph-card {
      @media (max-width: 768px) {
        padding: 0px;
        min-width: 80vw;
        height: 25vh;
        justify-content: center;
      }

      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      align-content: center;
      min-width: 550px;
      max-width: 50%;
      height: 400px;
      padding: 50px;

      .card-content {
        display: flex;
        justify-content: center;
        align-items: center;
        align-content: center;
        width: 100%;
        @media (max-width: 768px) {
          width: 80%;
        }
      }
      .card-caption {
        font-family: ${theme.fonts.serif};
        color: ${theme.keywords.ok};
        font-size: 1.5em;
        margin-top: 15px;
        width: 100%;
        text-align: center;
        align-self: flex-end;
        @media (max-width: 768px) {
          margin-top: none;
          font-size: 1em;
        }
      }
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