import React from "react";
import styled from "styled-components";
import { Text, View } from "react-native";

const CardImage = styled.Image`
  height: 75px;
  width: 75px;
`;

const ImageDetail = props => {
  return (
    <View>
      <CardImage source={require("../../assets/beach.jpg")} />
      <Text>{props.title}</Text>
    </View>
  );
};

export default ImageDetail;
