import React, { useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";
// import { desktopOnlyQuery } from "../../lib/helpers/media";
// import useMedia from "../../hooks/useMedia";
import useEventListener from "../hooks/useEventListener";
import useDebouncedCallback from "../hooks/useDebouncedCallback";

const Container = styled.div`
  position: fixed;
  width: 32px;
  height: 32px;
  z-index: 100;
  transform: translateZ(9500px);

  top: 0;
  left: 0;

  margin: 0;
  padding: 0;

  cursor: pointer;
  pointer-events: none;

  opacity: ${props => (props.isHidden ? "0.0" : "1.0")};
  transition: opacity 0.5s;
`;

function CustomCursor(props) {
  const containerRef = useRef();
  // const isDesktop = useMedia([desktopOnlyQuery], [true], "false");

  const handleMouseMove = useDebouncedCallback(
    function(event) {
      // If cursor element exists:
      if (containerRef.current) {
        const el = containerRef.current;

        // Cursors exist only on the desktop
        // if (isDesktop) {
          // Move cursor towards the mouse
          gsap.to(el, {
            duration: 1,
            ease: "circ.out",
            x: event.clientX - el.offsetWidth * 0.5,
            y: event.clientY - el.offsetHeight * 0.5
          });
        }
      // }
    },
    [containerRef]
  );

  // Attach function to window's mouse move event.
  useEventListener("mousemove", handleMouseMove);

  return (
    <Container ref={containerRef} {...props}>
      {props.children}
    </Container>
  );
}

export default CustomCursor;
