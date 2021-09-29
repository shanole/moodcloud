import styled from "styled-components";
import gradientbg from './../../../assets/img/gradient1.jpg'

export default styled.div`
  height: 100vh;
  width: 100vh;
  color: white;

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: +1;
  }

  video {
    position: fixed;
    z-index: -1;
    min-width: 100%;
    max-height: 100%;
    object-fit: cover;
  }

`;