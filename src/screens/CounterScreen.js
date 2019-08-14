import React, { useState } from "react";
import styled from "styled-components";
import { Text, View } from "react-native";
import Button from "../components/Button";

const Wrapper = styled.View`
  align-items: center;
  padding: 8px;
  /* flex: 1; */
`;
const ButtonWrapper = styled.TouchableOpacity`
  width: 100%;
  padding: 16px;
  background-color: #f5f5f5;
  margin: 8px;
  border-radius: 4px;
  align-items: center;
`;
const ButtonText = styled.Text`
  font-size: 16;
  font-weight: 600;
`;
const InfoText = styled.Text`
  margin: 16px;
  font-size: 16;
  font-weight: 600;
`;

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);
  return (
    <Wrapper style={{ flex: 1 }}>
      <Button
        title="Increase"
        onPress={() => {
          setCounter(counter + 1);
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          setCounter(counter - 1);
        }}
      />
      <InfoText>Current Count: {counter}</InfoText>
    </Wrapper>
  );
};

export default CounterScreen;
