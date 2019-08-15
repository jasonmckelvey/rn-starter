import React, { useState } from "react";
import { FlatList, View } from "react-native";
import ColorCounter from "../components/ColorCounter";
import styled from "styled-components";
import Button from "../components/Button";

const Wrapper = styled.View`
  align-items: center;
  padding: 8px;
`;

const SquareScreen = () => {
  const [] = useState([]);
  return (
    <Wrapper style={{ flex: 1 }}>
      <ColorCounter color="Red" />
      <ColorCounter color="Blue" />
      <ColorCounter color="Green" />
    </Wrapper>
  );
};

export default SquareScreen;
