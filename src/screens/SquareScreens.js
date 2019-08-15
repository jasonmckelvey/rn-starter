import React, { useState } from "react";
import { FlatList, View } from "react-native";
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
      <Button title="Square Screen" onPress={() => {}} />
    </Wrapper>
  );
};

export default SquareScreen;
