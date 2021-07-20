import React, { useEffect, useRef, useCallback } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { fadeInDownAnimation } from "../utils/animations";
import useGlobalState from "../hooks/useGlobalState";
import { setProjectVisibility } from "../utils/state";

const Header = () => {
  const { dispatch } = useGlobalState();
  const containerRef = useRef();

  const onClick = useCallback(() => {
    console.log("on click");
    dispatch(setProjectVisibility(8, true));
  }, [dispatch]);

  useEffect(() => {
    if (containerRef.current) {
      let timeline = gsap.timeline();
      timeline.add(fadeInDownAnimation(containerRef.current, "0.5"));

      return function cleanup() {
        timeline.kill();
      };
    }
  }, []);

  return (
    <Container ref={containerRef}>
      <div>Milena Zuccarelli</div>
      <Center>Index — Overview</Center>
      <Right>
        <a href="mailto:milena.zuccarelli@gmail.com">(at)</a>
        {/* <a onClick={onClick}>(at)</a> */}
      </Right>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 0.5em;
  
  opacity: 0;
  transform: translate(0px, -30px);

  div {
    flex-basis: 30%;
  }
`;

const Center = styled.div`
  text-align: center;
`;

const Right = styled.div`
  text-align: right;
  cursor: pointer;

  a {
    color: #000;
  }
`;

export default Header;
