import React from "react";
import styled from "styled-components";
import { Text, View } from "react-native";
import Button from "../components/Button";

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
      <Button
        title="Go to Components Screen"
        onPress={() => navigation.navigate("Components")}
      />
      <Button
        title="Go to List Screen"
        onPress={() => navigation.navigate("List")}
      />

      <Button
        title="Go to Image Screen"
        onPress={() => navigation.navigate("Image")}
      />

      <Button
        title="Go to Counter Screen"
        onPress={() => navigation.navigate("Counter")}
      />
    </View>
  );
};

export default HomeScreen;
