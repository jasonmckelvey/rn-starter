import React from "react";
import styled from "styled-components";
import { Text, View } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail title="Forest" />
      <ImageDetail title="Beach" />
      <ImageDetail title="Mountain" />
    </View>
  );
};

export default ImageScreen;
