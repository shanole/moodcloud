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
}
`