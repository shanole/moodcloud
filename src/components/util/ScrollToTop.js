import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from "styled-components";

const UpButton = styled.div`
  background-color: #969696;
  opacity: 70%;
  color: #fff;
  position: fixed;
  bottom: 0;
  right: 0;
  font-size: 1em;
  width: 3em;
  height: 3em;
  margin-right: 5px;
  margin-bottom: 5px;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

//scroll-to-top classes: fixed, bottom:0, right:0
  return (
    <div>
      {isVisible && (
        <UpButton onClick={scrollToTop}>
          <FontAwesomeIcon icon='long-arrow-alt-up'/>
        </UpButton>
      )}
    </div>
  );
}