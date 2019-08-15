import React, { useState } from "react";
import { FlatList, View, Text } from "react-native";
import styled from "styled-components";
import Button from "../components/Button";

const Wrapper = styled.View`
  width: 100%;
`;

const ColorCounter = ({ color }) => {
  const [] = useState([]);
  return (
    <Wrapper style={{ flex: 1 }}>
      <Text>{color}</Text>
      <Button title={`Increase ${color}`} onPress={() => {}} />
      <Button title={`Decrease ${color}`} onPress={() => {}} />
    </Wrapper>
  );
};

export default ColorCounter;
