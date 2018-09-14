import React from "react";
import styled from "styled-components";

const FileBg = styled.div`
  background-color: ${props => props.bg};
  color: ${props => props.fg};
  border-radius: 0.4em;
  height: 5em;
  width: 4em;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 0.4em;
  font-weight: bold;
  font-family: monospace;
  position: absolute;
  top: ${props => props.top};
  right: ${props => props.right};
  bottom: ${props => props.bottom};
  left: ${props => props.left};
`;

export const File = ({ name, ...props }) => (
  <FileBg {...props} children={name} />
);

const DependencyRoot = styled.div`
  width: 4em;
  transform: rotateZ(${props => props.rotation});
  position: absolute;
  top: ${props => props.top};
  right: ${props => props.right};
  bottom: ${props => props.bottom};
  left: ${props => props.left};
`;

export const Dependency = props => (
  <DependencyRoot {...props}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 361.41732 725.59809">
      <link xmlns="" type="text/css" id="dark-mode" rel="stylesheet" href="" />
      <style xmlns="" type="text/css" id="dark-mode-custom-style" />
      <g transform="translate(-270.12 -299.1)">
        <path
          strokeLinejoin="round"
          d="m353.21 475.08h63.676v545.31h70.407v-543.63h61.151l-97.617-173.35z"
          fillRule="evenodd"
          stroke={props.bg}
          strokeLinecap="round"
          strokeWidth="1.533"
          fill={props.bg}
        />
      </g>
    </svg>
  </DependencyRoot>
);

export const FileSurface = styled.div`
  position: relative;
  max-height: 1000px;
  max-width: 2400px;
  height: 100%;
  width: 100%;
`;
