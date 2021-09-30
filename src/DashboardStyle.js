import styled from "styled-components";
import theme from './theme';

export default styled.div`
color: ${theme.colors.navy};
background-color: ${theme.colors.cream};
height: 100%;


.dashboard-container {
}

.col-sm {
  border-right: 1px solid ${theme.colors.navy};
  display: flex;
  flex-direction: column;
  align-content: center;
}

.col-lg {
  padding: 0px 80px;
}

.section-heading {
  font-family: ${theme.fonts.serif};
  font-size: 35px;
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