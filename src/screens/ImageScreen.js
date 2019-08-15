import React from "react";
import { View } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  return (
    <View style={{ padding: 8 }}>
      <ImageDetail
        imageSource={require("../../assets/forest.jpg")}
        title="Forest"
        score={9}
      />
      <ImageDetail
        imageSource={require("../../assets/beach.jpg")}
        title="Beach"
        score={7}
      />
      <ImageDetail
        imageSource={require("../../assets/mountain.jpg")}
        title="Mountain"
        score={4}
      />
    </View>
  );
};

export default ImageScreen;
