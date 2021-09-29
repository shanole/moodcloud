import styled from "styled-components";
import gradientbg from './../../../assets/img/gradient1.jpg'

export default styled.div`
  height: 100vh;
  position: relative;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100%;
    position: absolute;
    z-index: +1;
  }

  video #bgvideo {
    position: relative;
    min-width: 100%;
    min-height: 100%;
    width: 100%
    height: auto;
    objectFit: cover;
    z-index: -1;
  }

`;