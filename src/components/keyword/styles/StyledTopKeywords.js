import styled from "styled-components";
import theme from './../../../theme';

export default styled.div`
display: flex;
flex-direction: column;
margin-top: 50px;
align-items: center;
max-height: 300px;
overflow-Y: scroll;

.keywords-header{
  font-family: ${theme.fonts.serif};
  font-size: 1.3em;
  margin-bottom: 10px;
}

.top-keywords {
  width: 80%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

`