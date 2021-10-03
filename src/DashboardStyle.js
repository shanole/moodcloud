import styled from "styled-components";
import theme from './theme';

export default styled.div`
color: ${theme.colors.navy};
background-color: ${theme.colors.cream};
height: 100%;

.dashboard-container {
  margin: auto;
}

.col-l {
  border-right: 1px solid ${theme.colors.navy};
  width: 50%
  display: flex;
  flex-direction: column;
  align-content: center;
  margin-right: 20px;
}

.col-r {
  width: 50%;
  margin-left: 20px;
}

.section-heading {
  font-family: ${theme.fonts.serif};
  font-size: 35px;
  text-align: center;
}

.link {
  &: hover {
    border-bottom: 1px solid ${theme.colors.navy};
    cursor: pointer;
  }
}

p.link {
  display: table;
  flex-direction: column;
}
`