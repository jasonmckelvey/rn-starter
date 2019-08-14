import React from "react";
import styled from "styled-components";

const Card = styled.View`
  padding: 8px;
  /* margin: 8px; */
  background-color: #fafafa;
  border-radius: 8px;
  flex-direction: row;
`;
const InfoWrapper = styled.View`
  margin: 8px;
`;
const CardImage = styled.Image`
  height: 100px;
  width: 100px;
  border-radius: 8px;
`;
const Title = styled.Text`
  font-size: 18px;
  font-weight: 600;
`;
const SubTitle = styled.Text`
  font-size: 14px;
  font-weight: 400;
`;

const ImageDetail = props => {
  return (
    <Card>
      <CardImage source={props.imageSource} />
      <InfoWrapper>
        <Title>{props.title}</Title>
        <SubTitle>Image score - {props.score}</SubTitle>
      </InfoWrapper>
    </Card>
  );
};

export default ImageDetail;
