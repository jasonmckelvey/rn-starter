import React, { useState, useReducer } from "react";
import styled from "styled-components";
import { Text, View, TextInput } from "react-native";
import Button from "../components/Button";

const Wrapper = styled.View`
  padding: 8px;
`;
const Input = styled.TextInput`
  height: 40px;
  margin: 15px;
  border-radius: 4;
  border-width: 1px;
  border-color: #bac7d5;
`;

const TextScreen = () => {
  return (
    <Wrapper style={{ flex: 1 }}>
      <Input />
    </Wrapper>
  );
};

export default TextScreen;
