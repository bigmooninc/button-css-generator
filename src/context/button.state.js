import React, { useReducer } from 'react';
import ButtonContext from './button.context';
import ButtonReducer from './button.reducer';

import { UPDATE_WIDTH, UPDATE_HEIGHT } from './types';

const ButtonState = props => {
  const initialState = {
    height: 50,
    width: 200
  };
};

const [state, dispatch] = useReducer(ButtonReducer, initialState);

const ButtonState = props => {
  const updateWidth = () => {
    dispatch({
      type: UPDATE_WIDTH,
      payload: state.width
    });
  };

  const updateHeight = () => {
    dispatch({
      type: UPDATE_HEIGHT,
      payload: state.height
    });
  };

  return (
    <ButtonContext.Provider
      value={{
        height: state.height,
        width: state.width,
        updateWidth,
        updateHeight
      }}
    >
      {props.children}
    </ButtonContext.Provider>
  );
};

export default ButtonState;
