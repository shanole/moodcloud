import React from 'react';
import styled from "styled-components";
import theme from './../../theme';

const StyledFooter = styled.div`
width: 100%;
padding: 10px 0px;
display: flex;
justify-content: center;
background: #C1A1CC;
color: ${theme.colors.cream};
`

function Footer() {
  return (
    <StyledFooter>© 2021 Shannon Lee</StyledFooter>
  );
}

export default Footer;