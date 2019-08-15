import React, { useState } from "react";
import { FlatList, View } from "react-native";
import styled from "styled-components";
import Button from "../components/Button";

const Wrapper = styled.View`
  align-items: center;
  padding: 8px;
`;

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
};

const ColorScreen = () => {
  const [colors, setColors] = useState([]);
  return (
    <Wrapper style={{ flex: 1 }}>
      <Button
        title="Add a Color"
        onPress={() => {
          setColors([...colors, randomRgb()]);
        }}
      />
      <FlatList
        keyExtractor={item => item}
        data={colors}
        renderItem={({ item }) => {
          return (
            <View style={{ height: 100, width: 100, backgroundColor: item }} />
          );
        }}
      />
    </Wrapper>
  );
};

export default ColorScreen;
