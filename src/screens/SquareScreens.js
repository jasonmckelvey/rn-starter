import React, { useReducer } from "react";
import { View } from "react-native";
import ColorCounter from "../components/ColorCounter";
import styled from "styled-components";

const Wrapper = styled.View`
  align-items: center;
  padding: 8px;
`;

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
    // state ==={red: number, green: number, blue: number};
    // action === { colorToChange: 'red' || 'green'  || 'blue', amount: 15 || -15} 

  switch (action.colorToChange) {
    case 'red':
      return { ...state, red: state.red + action.amount };
    case 'green':
      return { ...state, green: state.green + action.amount };
    case 'blue':
      return { ...state, blue: state.blue + action.amount };
    default:
  }
};

const SquareScreen = () => {

    

    const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0})
    

  return (
    <Wrapper style={{ flex: 1 }}>
      <ColorCounter
        onIncrease={() => }
        onDecrease={() => }
        color="Red"
      />
      <ColorCounter
        onIncrease={() => }
        onDecrease={() => }
        color="Blue"
      />
      <ColorCounter
        onIncrease={() => }
        onDecrease={() => }
        color="Green"
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`
        }}
      />
    </Wrapper>
  );
};

export default SquareScreen;
