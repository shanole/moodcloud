import styled from "styled-components";
import theme from './../../../theme';

export default styled.div`
display: flex;
flex-direction: column;
margin-top: 2vh;
align-items: center;
max-height: 25vh;
overflow-Y: scroll;

.keywords-header{
  font-family: ${theme.fonts.serif};
  font-size: 1.18em;
  margin-bottom: 10px;
}

.top-keywords {
  width: 80%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

`