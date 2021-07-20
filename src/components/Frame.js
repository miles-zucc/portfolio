import React, { useRef, useEffect, useCallback } from "react";
import styled from "styled-components";
import gsap from "gsap";

import useThrottledCallback from "../hooks/useThrottledCallback";
import useCustomCursorContext from "../hooks/useCustomCursorContext";
import { actions } from "../context/cursor";
import useEventListener from "../hooks/useEventListener";

const mouseEnterAction = actions.zoomOutCursor();
const mouseLeaveAction = actions.noCursor();

const hiddenContainerStyles = `
  opacity: 0;
  pointer-events: none;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  z-index: 10;

  opacity: 1;
  pointer-events: all;
  transition: opacity 0.5s;
  cursor: none;
  ${(props) => props.isHidden && hiddenContainerStyles}
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  background: #fff;
  color: #000;
  overflow: auto;
`;

function Frame(props) {
  const cursorContext = useCustomCursorContext();
  const containerRef = useRef();

  const width = useRef();
  const height = useRef();
  const maxTranslateX = useRef();
  const maxTranslateY = useRef();
  const src = useRef();

  const onMouseMove = useThrottledCallback((event) => {
    const translateX = gsap.utils.mapRange(
      0,
      width.current,
      maxTranslateX.current,
      -maxTranslateX.current,
      event.clientX
    );
    const translateY = gsap.utils.mapRange(
      0,
      height.current,
      maxTranslateY.current,
      -maxTranslateY.current,
      event.clientY
    );

    // Move image towards the mouse
    gsap.to(event.target, {
      duration: 2.0,
      ease: "power3.out",
      x: translateX,
      y: translateY,
    });
  }, []);

  const onMouseEnter = useCallback(
    function () {
      cursorContext.dispatch(mouseEnterAction);
    },
    [cursorContext]
  );

  const onMouseLeave = useCallback(
    function () {
      cursorContext.dispatch(mouseLeaveAction);
    },
    [cursorContext]
  );

  useEffect(
    () => {
      return function cleanup() {
        if (cursorContext) {
          cursorContext.dispatch(mouseLeaveAction);
        }
      };
    },
    [] // (Empty array ensures effect is only run on mount and unmount)
  );

  return (
    <Container ref={containerRef} isHidden={props.isHidden}>
      <Content
        onMouseMove={onMouseMove}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {props.children}
      </Content>
    </Container>
  );
}

export default Frame;
