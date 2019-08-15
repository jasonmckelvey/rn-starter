import React from "react";
import { View } from "react-native";
import Button from "../components/Button";

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
      <Button
        title="Go to Color Screen"
        onPress={() => navigation.navigate("Color")}
      />
      <Button
        title="Go to Square Screen"
        onPress={() => navigation.navigate("Square")}
      />
      <Button
        title="Go to Text Screen"
        onPress={() => navigation.navigate("Text")}
      />
    </View>
  );
};

export default HomeScreen;
