import styled from "styled-components";
import theme from "../../../theme";

export default styled.div`
max-height: 100vh;
position: relative;
transform: translateZ(0);

#list {
  max-height: 65.5vh;
  overflow-y: auto;
}
.scroll-up {
  position: fixed;
  right: 20px;
  bottom: 10px;
  font-size: 30px;
  opacity: 80%;
  color: ${theme.colors.pink};
  background: none;
}
`