import styled from "styled-components";
import theme from './theme';

export default styled.div`

* {
  box-sizing: border-box;
  font-family: ${theme.fonts.sansSerif};
}

a {
  text-decoration: none;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
}

.primary-link {
  color: ${theme.colors.cream}
}

.secondary-link {
  background-color: ${theme.colors.cream};
  color: ${theme.colors.navy};
}

button {
  border: none;
}

input {
  width: 100%;
  border: 1px;
  margin-bottom: 5px;
  border-radius: 5px;
  display: block;
  padding: 2px 10px;
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