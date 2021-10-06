import styled from "styled-components";
import theme from "../../../theme";

export default styled.div`
margin-top: 100px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
align-content: center;

button {
  color: ${theme.colors.navy};
}
.lbl {
  font-family: ${theme.fonts.serif};
  font-size: 23px;
  text-align: center;
}

.inpt {
  text-align: center;
  font-size: 18px;
}

.account-container {
  border: 1px solid ${theme.colors.navy};
  padding: 15px 30px;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  max-width: 450px;
  @media (max-width: 767px) {
    width: 325px;
  }
  
  .profile-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .profile-form {
    display: flex;
    flex-direction: column;
    align-items: center;

    form {
      display: flex;
      flex-direction: column;
      align-items: center;

      input {
        border: 1px solid ${theme.colors.navy};
        background: none;
        width: 75%;
      }
    }
  }
}

.img-container {
  width: 150px;
  border-radius: 50%;
  overflow: hidden;
  margin: 30px 0px;

  img {
    width: 100%;
    height: auto;
  }
}
`