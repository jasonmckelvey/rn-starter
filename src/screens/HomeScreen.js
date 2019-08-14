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

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ padding: 8, fex: 1 }}>
      <ButtonWrapper onPress={() => navigation.navigate("Components")}>
        <ButtonText>Go to Components Demo</ButtonText>
      </ButtonWrapper>
      <ButtonWrapper onPress={() => navigation.navigate("List")}>
        <ButtonText>Go to Lists Demo</ButtonText>
      </ButtonWrapper>
      <ButtonWrapper onPress={() => navigation.navigate("Image")}>
        <ButtonText>Go to Image Screen</ButtonText>
      </ButtonWrapper>
      <ButtonWrapper onPress={() => navigation.navigate("Counter")}>
        <ButtonText>Go to Counter Screen</ButtonText>
      </ButtonWrapper>
    </View>
  );
};

export default HomeScreen;
