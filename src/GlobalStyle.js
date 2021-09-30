import styled from "styled-components";
import theme from './theme';

export default styled.div`
font-family: ${theme.fonts.sansSerif};

a {
  text-decoration: none;
  color: ${theme.colors.navy};
}

button {
  border: none;
}

.primary-link {
  color: ${theme.colors.cream}
}

.secondary-link {
  background-color: ${theme.colors.cream};
  color: ${theme.colors.navy};
}


input {
  width: 100%;
  border: 1px;
  margin-bottom: 5px;
  border-radius: 5px;
  display: block;
  padding: 5px 10px;
  color: ${theme.colors.mediumGray}
}

textarea {
  width: 100%;
}

label {
  display: block;
}

h1 {
  font-family: ${theme.fonts.serif};
}

.btn {
  font-size: 22px;
  border: 1px solid ${theme.colors.cream};
  width: 250px;
  border-radius: 20px;
  margin: 5px 0px 5px 0px;

  &:hover {
    background-color: ${theme.colors.cream};
    color: ${theme.colors.pink};
  }
}


`;