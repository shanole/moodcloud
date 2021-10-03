import styled from "styled-components";
import theme from "../../../theme";

export default styled.div`
display: flex;
flex-direction: column;
justify-content: center;
height: 100%;

.form-title {
  font-family: ${theme.fonts.serif};
  font-style: italic;
  letter-spacing: 0.1em;
  margin-bottom: 15px;
}

form {
  display: flex;
  flex-direction: column;

  label {
    font-size: 18px;
  }
  input, textarea {
    margin-bottom: 18px;
    border-radius: 10px;
    border: none;
    padding: 10px 8px;
  }
  button.form-submit {
    margin-top: 20px;
    background: ${theme.colors.cream};
  }
  .range {
    width: 100%;

    input[type=range]{
      -webkit-appearance: none;
      margin-bottom: 0px;
      background: none;

      ::-webkit-slider-runnable-track {
        background: #fff;
        height: 6px;
        padding: 0px;
      }

      ::-webkit-slider-thumb {
        -webkit-appearance: none;
        border: none;
        height: 16px;
        width: 16px;
        border-radius: 50%;
        background: ${theme.colors.pink};
        margin-top: -4px;
      }

      :focus {
        outline: none;
      }
    }

    .range-labels {
      display: flex;
      width: 100%;
      justify-content: space-between;
      padding: 9px;
  
      li {
        position: relative;
        list-style-type: none;
      }
    }
  }
}
`