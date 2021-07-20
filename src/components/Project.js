import React, { useCallback } from "react";
import styled from "styled-components";
import useGlobalState from "../hooks/useGlobalState";
import { setProjectVisibility } from "../utils/state";
import Frame from "./Frame";

import Zero from "./Projects/Zero";
import One from "./Projects/One";
import Two from "./Projects/Two";
import Three from "./Projects/Three";
import Four from "./Projects/Four";
import Five from "./Projects/Five";
import Six from "./Projects/Six";
import Seven from "./Projects/Seven";
import Eight from "./Projects/Eight";

const Content = ({ id }) => {
  const slugLookUp = {
    0: <Zero />,
    1: <One />,
    2: <Two />,
    3: <Three />,
    4: <Four />,
    5: <Five />,
    6: <Six />,
    7: <Seven />,
    8: <Eight />,
  };
  return slugLookUp[id] || null;
};

const Project = ({ id }) => {
  const { state, dispatch } = useGlobalState();
  const isVisbile = id === state.id && state.visible;

  const onClick = useCallback(() => {
    dispatch(setProjectVisibility(id, false));
  }, [dispatch, id]);

  return (
    <Container visible={isVisbile} onClick={onClick}>
        <Frame>
          <Content id={id} />
        </Frame>
    </Container>
  );
};

const Container = styled.div`
  ${(props) => `
    position: absolute;
    height: 100vh;
    top: 0;
    left: ${props.visible ? "0" : "-85.1%"};
    width: 85%;
    overflow: hidden;
    transition: 0.7s;
    border-right: 1px solid rgba(100, 100, 100, 0.45);
    z-index: 999;
    transform: translateZ(1000px);
  `}
`;

export default Project;
