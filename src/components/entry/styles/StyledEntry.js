import styled from "styled-components";
import theme from "../../../theme";

export default styled.div`
display: flex;
flex-direction: column;
margin-bottom: 20px;
margin-right: 20px;
padding: 8px 15px;
&:hover {
  cursor: pointer;
  // background: ${theme.colors.lightPink};
  // border-radius: 25px;
}

.entry-title {
  font-family: ${theme.fonts.serif};
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
  .rating {
    font-family: ${theme.fonts.serif};
    font-size: 35px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    
    .number {
      color: ${theme.colors.pink};
    }

    .rating-label {
      font-family: ${theme.fonts.sansSerif};
      font-size: 12px;
    }
  }
}
.entry-keywords {
  display: flex;
}
`