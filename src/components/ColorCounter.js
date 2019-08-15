import React, { useState } from "react";
import { Text } from "react-native";
import styled from "styled-components";
import Button from "../components/Button";

const Wrapper = styled.View`
  width: 100%;
`;

const ColorCounter = ({ color, onIncrease, onDecrease }) => {
  return (
    <Wrapper style={{ flex: 1 }}>
      <Text>{color}</Text>
      <Button onPress={() => onIncrease()} title={`Increase ${color}`} />
      <Button onPress={() => onDecrease()} title={`Decrease ${color}`} />
    </Wrapper>
  );
};

export default ColorCounter;
