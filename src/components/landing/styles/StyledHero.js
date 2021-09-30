import styled from "styled-components";
import gradientbg from './../../../assets/img/gradient1.jpg'

export default styled.div`
  height: 100vh;
  color: white;

  h1 {
    font-size: 8vh;
  }

  p {
    font-size: 25px;
  }

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

  #videoWrapper {
    height: 100%;
    width: 100%;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: center;
    overflow: hidden;

    video {
      position: absolute;
      z-index: -1;
      min-width: 100%;
      min-height: 100%;
      object-fit: cover;
    }
  }


`;