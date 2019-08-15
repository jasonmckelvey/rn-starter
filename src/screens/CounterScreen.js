import React, { useState, useReducer } from "react";
import styled from "styled-components";
import { Text, View } from "react-native";
import Button from "../components/Button";

const Wrapper = styled.View`
  align-items: center;
  padding: 8px;
`;
const InfoText = styled.Text`
  margin: 16px;
  font-size: 16;
  font-weight: 600;
`;

const reducer = (state, action) => {
  // state === { count: number }
  // action === { type: 'increment' || 'decrement', payload: 1 }

  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + action.payload };
    case "decrement":
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <Wrapper style={{ flex: 1 }}>
      <Button
        title="Increase"
        onPress={() => dispatch({ type: "increment", payload: 1 })}
      />
      <Button
        title="Decrease"
        onPress={() => dispatch({ type: "decrement", payload: 1 })}
      />
      <InfoText>Current Count: {state.count}</InfoText>
    </Wrapper>
  );
};

export default CounterScreen;
