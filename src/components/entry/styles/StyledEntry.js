import styled from "styled-components";
import theme from "../../../theme";

export default styled.div`
display: flex;
flex-direction: column;
margin-bottom: 20px;
margin-right: 20px;
padding: 8px 15px;

.entry-title {
  &: hover {
    color: ${theme.colors.pink};
  }
}

.entry-content {
  display: flex;
  align-content: center;
  align-items: center;
  margin-bottom: 5px;

  .content {
    padding: 10px;
    height: 100%;
    margin-right: 15px;
  }
  .blurb {
    flex: 2;
    padding-right: 15px;
  }

}
.entry-keywords {
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
}
`