import React from "react";
import styled from "styled-components";
import { Text, View } from "react-native";

const ButtonWrapper = styled.TouchableOpacity`
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

const CounterScreen = props => {
  return (
    <View style={{ padding: 8, fex: 1 }}>
      <ButtonWrapper onPress={() => navigation.navigate("Image")}>
        <ButtonText>Go to Image Screen</ButtonText>
      </ButtonWrapper>
    </View>
  );
};

export default CounterScreen;
