import React from "react";
import styled from "styled-components";

const Col = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-end;
  color: grey;
  font-size: 0.7em;
`;

const Row = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
`;

const ConfTitle = styled(Row)`
  color: black;
  font-size: 1.8em;
  margin-bottom: 0.6em;
`;

const Name = styled(Row)`
  color: black;
  font-size: 1.2em;
`;

const Icon = styled.div`
  background-image: url(${props => props.src});
  height: ${props => props.size};
  width: ${props => props.size};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export default () => (
  <Col>
    <ConfTitle>UtahJS Conf 2018</ConfTitle>
    <Name>Michael Trotter</Name>
    <Row>
      <Icon src="material/icons/twitter.png" size="1.2em" />
      spcydnts
    </Row>
    <Row>
      <Icon src="material/icons/github.png" size="0.8em" />
      &nbsp;spicydonuts
    </Row>
    <Row>
      <Icon src="material/icons/slack.png" size="0.8em" />
      &nbsp;spicydonuts
    </Row>
  </Col>
);
