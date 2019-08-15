import React, { useState, useReducer } from "react";
import styled from "styled-components";
import { Text, View } from "react-native";
import Button from "../components/Button";

const Wrapper = styled.View`
  align-items: center;
  padding: 8px;
`;

const TextScreen = () => {
  return <Wrapper style={{ flex: 1 }} />;
};

export default TextScreen;
