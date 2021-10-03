import styled from "styled-components";
import keywordColors from "../util/keywordColors";

export default styled.div`
background-color: ${ props => keywordColors[props.rating]};
margin: 0px 10px 10px 0px;
box-sizing: border-box;
padding: 5px 10px;
border-radius: 10px;
opacity: 90%;
`

