import React, { useCallback } from "react";
import styled from "styled-components";

import useGlobalState from "../hooks/useGlobalState";
import { setProjectVisibility } from "../utils/state";

const Panel = ({ children, id }) => {
  const { dispatch } = useGlobalState();

  const onClick = useCallback(() => {
    dispatch(setProjectVisibility(id, true));
  }, [dispatch, id]);

  return (
    <Holder index={id}>
      <Frame onClick={onClick}>{children}</Frame>
    </Holder>
  );
};

const Holder = styled.div`
  ${(props) => `
    height: 100%;
    left: 50%;
    top: 15%;
    position: absolute;
    width: 85%;
    -ms-transform-origin: 0% 50%;
    -webkit-transform-origin: 0% 50%;
    transform-origin: 0% 50%;
    
    -ms-transform: rotateY(${props.index * 45}deg);
    -webkit-transform: rotateY(${props.index * 45}deg);
    transform: rotateY(${props.index * 45}deg);
  `}
`;

const Frame = styled.div`
  background: rgba(220, 220, 220, 0.45);
  border: #fff ridge 1px;
  height: 70%;
  left: 100%;
  position: absolute;
  top: -5px;
  width: 76.53%;
  -ms-transform-origin: 0% 50%;
  -webkit-transform-origin: 0% 50%;
  transform-origin: 0% 50%;
  -ms-transform: rotateY(112.5deg);
  -webkit-transform: rotateY(112.5deg);
  transform: rotateY(112.5deg);

  &:hover {
    background: rgba(220, 220, 220, 0.85);
    cursor: pointer;
  }
`;

export default Panel;
