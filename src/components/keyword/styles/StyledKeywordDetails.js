import styled from "styled-components";
import keywordColors from "../../util/keywordColors";
import theme from './../../../theme';

export default styled.div`
display: flex;
flex-direction: column;
align-items: center;

.keyword-title {
  font-family: ${theme.fonts.serif};
  font-size: 35px;
  letter-spacing: 0.1em;
  font-style: italic;
}

.keyword-summary {
  display: flex;
  flex-direction: column;
  align-items: center;
  
  p.rating-fraction{
    margin-top: 20px;
    font-size: 20px;
    margin-bottom: 25px;
  }
  .avg-rating {
    color: ${ props => keywordColors[props.rating]};
    font-family: ${theme.fonts.serif};
    font-size: 30px;
  }
}
.keyword-entries {
  min-width: 400px;
  max-width: 500px;
}
`