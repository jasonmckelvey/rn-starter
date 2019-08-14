import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { Text, View } from "react-native";

const ButtonWrapper = styled.TouchableOpacity`
  width: 100%;
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

const Button = ({ title, onPress }) => {
  return (
    <ButtonWrapper onPress={onPress}>
      <ButtonText>{title}</ButtonText>
    </ButtonWrapper>
  );
};

Button.defaultProps = {
  title: "Button"
};

Button.proptypes = {
  title: PropTypes.string
};

export default Button;
