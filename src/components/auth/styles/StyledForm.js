import styled from "styled-components";
import theme from "../../../theme";

export default styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-content: center;
align-items: center;
  input {
    width: 300px;
  }

  h1 {
    margin-bottom: 20px;
    font-size: 50px;
  }
  .fyi {
    max-width: 500px;
    padding: 5px 10px;
    background: rgba(207, 150, 182, 0.8);
  }
`;