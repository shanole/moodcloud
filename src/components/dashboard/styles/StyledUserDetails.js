import styled from "styled-components";
import theme from "../../../theme";

export default styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 10px;

.profile-pic {
  width: 100px;
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
    height: auto;
  }
}

.date {
  font-size: 18px;
}

.user-nav-links {
  display: flex;
}
`