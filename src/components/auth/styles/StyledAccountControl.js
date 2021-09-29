import styled from "styled-components";
import gradientbg from './../../../assets/img/gradient2.jpg'

export default styled.div`
  height: 100vh;
  position: relative;
  background-color: #E1A7B0;
  background: url(${gradientbg}) no-repeat center center/cover;
  position: relative;
  color: white;

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100%;
  }
`;